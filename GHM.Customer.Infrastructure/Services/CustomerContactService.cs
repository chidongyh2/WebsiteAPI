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
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;

namespace GHM.Customer.Infrastructure.Services
{
    /// <summary>
    /// Điện thoại hoặc Email của bệnh nhân
    /// </summary>
    public class CustomerContactService : ICustomerContactService
    {

        private readonly ICustomerRepository _customerRepository;
        private readonly ICustomerContactRepository _customerContactRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCustomerResource> _CustomerResourceService;

        public CustomerContactService(ICustomerRepository customerRepository, ICustomerContactRepository customerContactRepository,
                    IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {
            _customerRepository = customerRepository;
            _customerContactRepository = customerContactRepository;
            _sharedResourceService = sharedResourceService;
            _CustomerResourceService = customerResourceService;
        }

        public async Task<ActionResultResponse> ForceDelete(string tenantId, string id)
        {
            var info = await _customerContactRepository.GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, _CustomerResourceService.GetString("CustomerContact does not exists."));

            var result = await _customerContactRepository.ForceDelete(id);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please CustomerContact with administrator.")
                : _CustomerResourceService.GetString("Delete CustomerContact successful."));
        }

        public async Task<ActionResultResponse<CustomerContactDetailViewModel>> GetDetail(string customerId)
        {
            var customerInfo = await _customerRepository.GetInfo(customerId);
            if (customerInfo == null)
                return new ActionResultResponse<CustomerContactDetailViewModel>(-1, _CustomerResourceService.GetString("CustomerContact subject does not exists."));

            var customerContacts = await _customerContactRepository.GetByCustomerId(customerId);
            var customerContactDetailViewModel = new CustomerContactDetailViewModel
            {
                ConcurrencyStamp = customerInfo.ConcurrencyStamp,
                ContactCustomers = customerContacts.Select(x => new CustomerContactViewModel
                {
                    ContactType = x.ContactType,
                    ContactValue = x.ContactValue
                }).ToList()
            };
            return new ActionResultResponse<CustomerContactDetailViewModel>
            {
                Code = 1,
                Data = customerContactDetailViewModel
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, CustomerContactMeta customerContactMeta)
        {
            CustomerContact customerContact = new CustomerContact
            {
                CustomerId = customerContactMeta.CustomerId,
                ContactType = customerContactMeta.ContactType,
                ContactValue = customerContactMeta.ContactValue
            };

            var resultInsert = await _customerContactRepository.Insert(customerContact);
            if (resultInsert > 0)
            {
                //var Customer = await _CustomerRepository.GetInfo(CustomerContactMeta.CustomerId);
                //if (CustomerContactMeta.ContactType == ContactType.Email)
                //{
                //    Customer.Email = CustomerContactMeta.ContactValue;
                //}
                //else
                //{
                //    Customer.PhoneNumber = CustomerContactMeta.ContactValue;
                //}
                //Customer.UnsignName = await Unsign(CustomerContactMeta);
                //await _CustomerRepository.Update(Customer);
                await UpdateCustomerUnsignName(customerContactMeta.CustomerId);
                return new ActionResultResponse<string>(resultInsert, _CustomerResourceService.GetString("Add new CustomerContact successful."), string.Empty, customerContact.Id);
            }

            await RollbackInsert(customerContact.Id);
            return new ActionResultResponse<string>(-4, _CustomerResourceService.GetString("Can not insert new CustomerContact. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, CustomerContactMeta customerContactMeta)
        {
            var customerContactInfo = await _customerContactRepository.GetInfo(id);
            if (customerContactInfo == null)
                return new ActionResultResponse(-2, _CustomerResourceService.GetString("CustomerContact does not exists."));

            if (customerContactInfo.ConcurrencyStamp != customerContactMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _CustomerResourceService.GetString("The CustomerContact already updated by other people. You can not update this CustomerContact."));

            customerContactInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            customerContactInfo.ContactType = customerContactMeta.ContactType;
            customerContactInfo.ContactValue = customerContactMeta.ContactValue;
            var result = await _customerContactRepository.Update(customerContactInfo);
            if (result <= 0)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            await UpdateCustomerUnsignName(customerContactInfo.CustomerId);
            return new ActionResultResponse(1, _CustomerResourceService.GetString("Update CustomerContact successful."));
        }

        private async Task RollbackInsert(string id)
        {
            await _customerContactRepository.ForceDelete(id);
        }

        private async Task<ActionResultResponse> UpdateCustomerUnsignName(string customerId)
        {
            var customerInfo = await _customerRepository.GetInfo(customerId);
            if (customerInfo == null)
                return new ActionResultResponse(-1, _CustomerResourceService.GetString("Customer info does not exists"));

            var listCustomerContacts = await _customerContactRepository.GetByCustomerId(customerId);
            if (listCustomerContacts == null || !listCustomerContacts.Any())
                return new ActionResultResponse(-2, _CustomerResourceService.GetString("Nothing change for update."));

            var unsignName = customerInfo.FullName.Trim().StripVietnameseChars().ToUpper();
            listCustomerContacts.Aggregate(unsignName,
                (current, customerContact) => current + $" {customerContact.ContactValue.Trim().StripVietnameseChars().ToUpper()}");

            var result = await _customerRepository.Update(customerInfo);
            return new ActionResultResponse(result, result < 0
                ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                : result == 0
                    ? _sharedResourceService.GetString(ErrorMessage.NothingChanges)
                    : _CustomerResourceService.GetString("Update Customer successful."));
        }
    }
}
