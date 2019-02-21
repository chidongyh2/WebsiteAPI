using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.IServices;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.Resources;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;

namespace GHM.Customer.Infrastructure.Services
{
    /// <summary>
    /// Người thân của bệnh nhân
    /// </summary>
    public class ContactCustomerService : IContactCustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IContactCustomerRepository _contactCustomerRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCustomerResource> _customerResourceService;

        public ContactCustomerService(ICustomerRepository customerRepository, IContactCustomerRepository contactCustomerRepository,
                        IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {
            _customerRepository = customerRepository;
            _contactCustomerRepository = contactCustomerRepository;
            _sharedResourceService = sharedResourceService;
            _customerResourceService = customerResourceService;
        }

        public async Task<ActionResultResponse> ForceDelete(string tenantId, string id)
        {
            var info = await _contactCustomerRepository.GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("ContactCustomer does not exists."));

            var result = await _contactCustomerRepository.ForceDelete(id);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _customerResourceService.GetString("Delete ContactCustomer successful."));
        }

        public async Task<ActionResultResponse<ContactCustomerDetailViewModel>> GetDetail(string customerId)
        {
            var CustomerInfo = await _customerRepository.GetInfo(customerId);
            if (CustomerInfo == null)
                return new ActionResultResponse<ContactCustomerDetailViewModel>(-1, _customerResourceService.GetString("ContactCustomer subject does not exists."));

            var contactCustomers = await _contactCustomerRepository.GetByCustomerId(customerId);
            var contactCustomerDetailViewModel = new ContactCustomerDetailViewModel
            {
                ConcurrencyStamp = CustomerInfo.ConcurrencyStamp,
                ContactCustomers = contactCustomers.Select(x => new ContactCustomerViewModel
                {
                    FullName = x.FullName,
                    PhoneNumber = x.PhoneNumber
                }).ToList()
            };
            return new ActionResultResponse<ContactCustomerDetailViewModel>
            {
                Code = 1,
                Data = contactCustomerDetailViewModel
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, ContactCustomerMeta contactCustomerMeta)
        {
            var contactCustomer = new CustomerRelativesContact
            {
                FullName = contactCustomerMeta.FullName,
                CustomerId = contactCustomerMeta.CustomerId,
                PhoneNumber = contactCustomerMeta.PhoneNumber
            };

            var resultInsert = await _contactCustomerRepository.Insert(contactCustomer);
            if (resultInsert > 0)
                return new ActionResultResponse<string>(resultInsert,
                    _customerResourceService.GetString("Add new contact successful."), string.Empty, contactCustomer.Id);

            await RollbackInsert(contactCustomer.Id);
            return new ActionResultResponse<string>(-4, _customerResourceService.GetString("Can not insert new ContactCustomer. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, ContactCustomerMeta contactCustomerMeta)
        {
            var contactCustomerInfo = await _contactCustomerRepository.GetInfo(id);
            if (contactCustomerInfo == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("ContactCustomer does not exists."));

            if (contactCustomerInfo.ConcurrencyStamp != contactCustomerMeta.ConcurrencyStamp)
                return new ActionResultResponse(-2, _customerResourceService.GetString("The ContactCustomer already updated by other people. You can not update this ContactCustomer."));

            contactCustomerInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            contactCustomerInfo.FullName = contactCustomerMeta.FullName;
            contactCustomerInfo.CustomerId = contactCustomerMeta.CustomerId;
            contactCustomerInfo.PhoneNumber = contactCustomerMeta.PhoneNumber;
            await _contactCustomerRepository.Update(contactCustomerInfo);

            return new ActionResultResponse(1, _customerResourceService.GetString("Update ContactCustomer successful."));
        }

        private async Task RollbackInsert(string Id)
        {
            await _contactCustomerRepository.ForceDelete(Id);
        }

    }
}
