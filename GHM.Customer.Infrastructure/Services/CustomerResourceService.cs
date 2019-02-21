using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.IServices;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.Resources;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Customer.Infrastructure.Services
{
    public class CustomerResourceService : ICustomerResourceService
    {

        private readonly ICustomerResourceRepository _customerResourceRepository;
        private readonly ICustomerResourceTranslationRepository _customerResourceTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCustomerResource> _customerResourceService;

        public CustomerResourceService(ICustomerResourceRepository customerResourceRepository, ICustomerResourceTranslationRepository customerResourceTranslationRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {
            _customerResourceRepository = customerResourceRepository;
            _customerResourceTranslationRepository = customerResourceTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _customerResourceService = customerResourceService;
        }

        public async Task<SearchResult<CustomerResourceViewModel>> Search(string tenantId, string languageId, string keyword,
                bool? isActive, int page, int pageSize)
        {
            var items = await _customerResourceRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<CustomerResourceViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }
        public async Task<ActionResultResponse<string>> Insert(string tenantId, CustomerResourceMeta customerResourceMeta)
        {

            //if (!CustomerResourceMeta.CustomerResourceTranslations.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var CustomerResourceTranslations = new List<CustomerResourceTranslation>();
            var CustomerResourceId = Guid.NewGuid().ToString();

            // Insert new Customer source.
            var resultInsertCustomerResource = await _customerResourceRepository.Insert(new CustomerResource
            {
                Id = CustomerResourceId,
                ConcurrencyStamp = CustomerResourceId,
                IsActive = customerResourceMeta.IsActive,
                CreateTime = DateTime.Now,
                IsDelete = false,
                TenantId = tenantId,
                Order = customerResourceMeta.Order
            });

            if (resultInsertCustomerResource <= 0)
                return new ActionResultResponse<string>(resultInsertCustomerResource, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            foreach (var customerResourceTranslation in customerResourceMeta.CustomerResourceTranslations)
            {
                // Check name exists.
                var isNameExists = await _customerResourceTranslationRepository.CheckExists(CustomerResourceId,
                    customerResourceTranslation.LanguageId, customerResourceTranslation.Name);
                if (isNameExists)
                {
                    await RollbackInsert();
                    return new ActionResultResponse<string>(-2, _customerResourceService.GetString("Customer resource name: \"{0}\" already exists.", customerResourceTranslation.Name));
                }

                var customerResourceTranslationInsert = new CustomerResourceTranslation()
                {
                    CustomerResourceId = CustomerResourceId,

                    LanguageId = customerResourceTranslation.LanguageId.Trim(),
                    Name = customerResourceTranslation.Name.Trim(),
                    Description = customerResourceTranslation.Description?.Trim(),
                    UnsignName = customerResourceTranslation.Name.StripVietnameseChars().ToUpper()
                };

                CustomerResourceTranslations.Add(customerResourceTranslationInsert);
            }

            // Insert Customer source translations.
            var resultInsertTranslation = await _customerResourceTranslationRepository.Inserts(CustomerResourceTranslations);
            if (resultInsertTranslation > 0)
                return new ActionResultResponse<string>(resultInsertCustomerResource, _customerResourceService.GetString("Add new Customer resource successful."), string.Empty, CustomerResourceId);

            await RollbackInsert();
            return new ActionResultResponse<string>(-3, _customerResourceService.GetString("Can not insert new Customer resource. Please contact with administrator."));

            async Task RollbackInsert()
            {
                await _customerResourceRepository.ForceDelete(CustomerResourceId);
                await _customerResourceTranslationRepository.ForceDeleteByCustomerResourceId(CustomerResourceId);
            }
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, CustomerResourceMeta CustomerResourceMeta)
        {

            //if (!CustomerResourceMeta.CustomerResourceTranslations.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var info = await _customerResourceRepository.GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-2, _customerResourceService.GetString("Customer resource does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString("You do not have permission to to this action."));

            if (info.ConcurrencyStamp != CustomerResourceMeta.ConcurrencyStamp)
                return new ActionResultResponse(-4, _customerResourceService.GetString("The Customer resource already updated by other people. You can not update this Customer source."));

            info.Order = CustomerResourceMeta.Order;
            info.IsActive = CustomerResourceMeta.IsActive;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;

            foreach (var customerResourceTranslation in CustomerResourceMeta.CustomerResourceTranslations)
            {
                var isNameExists = await _customerResourceTranslationRepository.CheckExists(info.Id,
                    customerResourceTranslation.LanguageId, customerResourceTranslation.Name);
                if (isNameExists)
                    return new ActionResultResponse(-5, _customerResourceService.GetString("Customer resource name: \"{0}\" already exists.", customerResourceTranslation.Name));


                var customerResourceTranslationInfo =
                    await _customerResourceTranslationRepository.GetInfo(info.Id, customerResourceTranslation.LanguageId);
                if (customerResourceTranslationInfo != null)
                {
                    customerResourceTranslationInfo.Name = customerResourceTranslation.Name.Trim();
                    customerResourceTranslationInfo.Description = customerResourceTranslation.Description?.Trim();
                    customerResourceTranslationInfo.UnsignName = customerResourceTranslation.Name.StripVietnameseChars().ToUpper();
                    await _customerResourceTranslationRepository.Update(customerResourceTranslationInfo);
                }
                else
                {
                    var customerResourceTranslationInsert = new CustomerResourceTranslation()
                    {
                        CustomerResourceId = id,
                        LanguageId = customerResourceTranslation.LanguageId.Trim(),
                        Name = customerResourceTranslation.Name.Trim(),
                        Description = customerResourceTranslation.Description?.Trim(),
                        UnsignName = customerResourceTranslation.Name.StripVietnameseChars().ToUpper()
                    };
                    await _customerResourceTranslationRepository.Insert(customerResourceTranslationInsert);
                }
            }
            await _customerResourceRepository.Update(info);
            return new ActionResultResponse(1, _customerResourceService.GetString("Update Customer resource successful."));

        }
        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var info = await _customerResourceRepository.GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("Customer resource does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("You do not have permission to to this action."));

            var result = await _customerResourceRepository.Delete(id);
            return new ActionResultResponse(result, _customerResourceService.GetString("Delete Customer resource successful."));
        }

        public async Task<ActionResultResponse<CustomerResourceDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var customerResourceInfo = await _customerResourceRepository.GetInfo(id);
            if (customerResourceInfo == null)
                return new ActionResultResponse<CustomerResourceDetailViewModel>(-1, _customerResourceService.GetString("Customer resource does not exists."));

            if (customerResourceInfo.TenantId != tenantId)
                return new ActionResultResponse<CustomerResourceDetailViewModel>(-2, _sharedResourceService.GetString("You do not have permission to do this action."));

            var customerResourceTranslations = await _customerResourceTranslationRepository.GetsByCustomerResourceId(id);
            var customerResourceDetail = new CustomerResourceDetailViewModel
            {
                Id = customerResourceInfo.Id,
                IsActive = customerResourceInfo.IsActive,
                ConcurrencyStamp = customerResourceInfo.ConcurrencyStamp,
                Order = customerResourceInfo.Order,
                CustomerResourceTranslations = customerResourceTranslations.Select(x => new CustomerResourceTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description
                }).ToList()
            };
            return new ActionResultResponse<CustomerResourceDetailViewModel>
            {
                Code = 1,
                Data = customerResourceDetail
            };
        }

        public async Task<List<CustomerResourceForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            return await _customerResourceRepository.SearchForSelect(tenantId, languageId, keyword, page, pageSize, out var totalRows);
        }
    }
}
