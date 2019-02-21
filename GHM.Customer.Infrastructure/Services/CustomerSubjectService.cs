//using GHM.Hr.Domain.Models;
//using GHM.Hr.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.IServices;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.Resources;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Extensions;

namespace GHM.Customer.Infrastructure.Services
{
    public class CustomerSubjectService : ICustomerSubjectService
    {
        private readonly ICustomerSubjectRepository _customersubjectRepository;
        private readonly ICustomerSubjectTranslationRepository _customersubjectTranslationRepository;
      
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCustomerResource> _customerResourceService;

        public CustomerSubjectService(ICustomerSubjectRepository customersubjectRepository, ICustomerSubjectTranslationRepository customersubjectTranslationRepository, 
                    IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {
            _customersubjectRepository = customersubjectRepository;
            _customersubjectTranslationRepository = customersubjectTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _customerResourceService = customerResourceService;
        }

        public async Task<ActionResultResponse> Insert(string tenantId, CutomerSubjectMeta customersubjectMeta)
        {
            if (!customersubjectMeta.CustomerSubjectTranslations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var customersubjectId = Guid.NewGuid().ToString();
            var customersubject = new CustomerSubject
            {
                Id = customersubjectId,
                //ConcurrencyStamp = CustomersubjectId,
                IsActive = customersubjectMeta.IsActive,
                //CreateTime = DateTime.Now,
                Order = customersubjectMeta.Order,
                TotalReduction = customersubjectMeta.TotalReduction,
                //IsDelete = false,
                TenantId = tenantId,
            };

            var result = await _customersubjectRepository.Insert(customersubject);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var customersubjectTranslations = new List<CustomerSubjectTranslation>();
            foreach (var customersubjectTranslationMeta in customersubjectMeta.CustomerSubjectTranslations)
            {
                var isNameExists = await _customersubjectTranslationRepository.CheckUserNameExists(customersubjectTranslationMeta.CustomerSubjectId,
                                customersubjectTranslationMeta.LanguageId , customersubjectTranslationMeta.Name);
                if (isNameExists)
                {
                    await RollbackInsert(customersubjectId);
                    return new ActionResultResponse(-3, _customerResourceService.GetString("Name: \"{0}\" already exists.", customersubjectTranslationMeta.Name));
                }


                customersubjectTranslations.Add(new CustomerSubjectTranslation
                {
                    CustomerSubjectId = customersubjectId,
                    LanguageId = customersubjectTranslationMeta.LanguageId.Trim(),
                    Name = customersubjectTranslationMeta.Name.Trim(),
                    UnsignName = customersubjectTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                    Description = customersubjectTranslationMeta.Description?.Trim(),
                });
            }

            // Insert CustomerSubject translations.
            var resultInsertTranslation = await _customersubjectTranslationRepository.Inserts(customersubjectTranslations);
            if (resultInsertTranslation > 0)
                return new ActionResultResponse(resultInsertTranslation, _customerResourceService.GetString("Add new CustomerSubject successful."));

            await RollbackInsert(customersubjectId);
            return new ActionResultResponse(-5, _customerResourceService.GetString("Can not insert new CustomerSubject. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var info = await _customersubjectRepository.GetInfo(id, tenantId);
            if (info == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("CustomerSubject does not exists."));

            // Check CustomerSubject reference.
            //var isUsed = await _CustomersubjectRepository.CheckExistsByCustomerSubjectId(info.Id);
            //if (isUsed)
            //    return new ActionResultResponse(-2, _CustomerResourceService.GetString("CustomerSubject is used in office. Can not delete this CustomerSubject."));

            var result = await _customersubjectRepository.Delete(id);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _customerResourceService.GetString("Delete CustomerSubject successful."));
        }
                

        public async Task<SearchResult<CustomerSubjectViewModel>> Search(string tenantId, string languageId, string keyword, float? totalReduction, 
                    bool? isActive, int page, int pageSize)
        {
            var items = await _customersubjectRepository.Search(tenantId, languageId, keyword, totalReduction, isActive, page, pageSize, out var totalRows);
            return new SearchResult<CustomerSubjectViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, CutomerSubjectMeta customerSubjectMeta)
        {
            if (!customerSubjectMeta.CustomerSubjectTranslations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var customersubjectInfo = await _customersubjectRepository.GetInfo(id,  tenantId);
            if (customersubjectInfo == null)
                return new ActionResultResponse(-2, _customerResourceService.GetString("CustomerSubject does not exists."));

            if (customersubjectInfo.ConcurrencyStamp != customerSubjectMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _customerResourceService.GetString("The CustomerSubject already updated by other people. You can not update this CustomerSubject."));

            customersubjectInfo.LastUpdate = DateTime.Now;
            customersubjectInfo.IsActive = customerSubjectMeta.IsActive;
            customersubjectInfo.Order = customerSubjectMeta.Order;
            customersubjectInfo.TotalReduction = customerSubjectMeta.TotalReduction;
            customersubjectInfo.ConcurrencyStamp = Guid.NewGuid().ToString();

            foreach (var CustomersubjectTranslation in customerSubjectMeta.CustomerSubjectTranslations)
            {
                var isNameExists = await _customersubjectTranslationRepository.CheckUserNameExists(customersubjectInfo.Id,
                                        CustomersubjectTranslation.LanguageId , CustomersubjectTranslation.Name);
                if (isNameExists)
                    return new ActionResultResponse(-5, _customerResourceService.GetString("Name: \"{0}\" already exists.", CustomersubjectTranslation.Name));

                var customersubjectCustomerTranslationInfo = await _customersubjectTranslationRepository.GetInfo(customersubjectInfo.Id,
                    CustomersubjectTranslation.LanguageId);

                if (customersubjectCustomerTranslationInfo != null)
                {
                    customersubjectCustomerTranslationInfo.Name = CustomersubjectTranslation.Name.Trim();
                    customersubjectCustomerTranslationInfo.Description = CustomersubjectTranslation.Description?.Trim();
                    customersubjectCustomerTranslationInfo.UnsignName = CustomersubjectTranslation.Name.StripVietnameseChars().ToUpper();
                    await _customersubjectTranslationRepository.Update(customersubjectCustomerTranslationInfo);
                }
                else
                {
                    CustomersubjectTranslation.CustomerSubjectId = customersubjectInfo.Id;
                    CustomersubjectTranslation.Name = CustomersubjectTranslation.Name.Trim();
                    CustomersubjectTranslation.Description = CustomersubjectTranslation.Description?.Trim();
                    CustomersubjectTranslation.UnsignName = CustomersubjectTranslation.Name.StripVietnameseChars().ToUpper();
                    await _customersubjectTranslationRepository.Insert(CustomersubjectTranslation);
                }
            }

            await _customersubjectRepository.Update(customersubjectInfo);
            return new ActionResultResponse(1, _customerResourceService.GetString("Update Customer Subject successful."));
        }

        private async Task RollbackInsert(string customersubjectId)
        {
            await _customersubjectRepository.ForceDelete(customersubjectId);
            await _customersubjectTranslationRepository.ForceDelete(customersubjectId);
        }

        public async Task<ActionResultResponse<CustomerSubjectDetailViewModel>> GetDetail(string tenantId, string languageId, string id)
        {
            var customersubjectInfo = await _customersubjectRepository.GetInfo(id, tenantId);
            if (customersubjectInfo == null)
                return new ActionResultResponse<CustomerSubjectDetailViewModel>(-1, _customerResourceService.GetString("Customer subject does not exists."));

            if (customersubjectInfo.TenantId != tenantId)
                return new ActionResultResponse<CustomerSubjectDetailViewModel>(-2, _customerResourceService.GetString("You do not have permission to view this Customer subject info."));

            var customersubjectTranslations = await _customersubjectTranslationRepository.GetsByCustomerSubjectId(id);
            var customerSubjectDetailViewModel = new CustomerSubjectDetailViewModel
            {
                IsActive = customersubjectInfo.IsActive,
                Order = customersubjectInfo.Order,
                ConcurrencyStamp = customersubjectInfo.ConcurrencyStamp,
                TotalReduction = customersubjectInfo.TotalReduction,
                CustomerSubjectTranslations = customersubjectTranslations.Select(x => new CustomerSubjectTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description,
                    UnsignName =x.UnsignName
                }).ToList()
            };
            return new ActionResultResponse<CustomerSubjectDetailViewModel>
            {
                Code = 1,
                Data = customerSubjectDetailViewModel
            };
        }

    }
}
