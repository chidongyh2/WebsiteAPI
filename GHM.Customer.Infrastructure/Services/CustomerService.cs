using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Customer.Domain.Constants;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.IServices;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.Resources;
using GHM.Customer.Domain.ViewModels;
using GHM.Website.Event.Domain.ViewModels;
using Microsoft.Extensions.Configuration;

namespace GHM.Customer.Infrastructure.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IContactCustomerRepository _contactCustomerRepository;
        private readonly ICustomerContactRepository _customerContactRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCustomerResource> _customerResourceService;
        private readonly IConfiguration _configuration;

        public CustomerService(ICustomerRepository customerRepository, IContactCustomerRepository contactCustomerRepository,
            ICustomerContactRepository customerContactRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCustomerResource> customerResourceService, IConfiguration configuration)
        {
            _customerRepository = customerRepository;
            _contactCustomerRepository = contactCustomerRepository;
            _customerContactRepository = customerContactRepository;
            _sharedResourceService = sharedResourceService;
            _customerResourceService = customerResourceService;
            _configuration = configuration;
        }

        public async Task<ActionResultResponse> ForceDelete(string tenantId, string id)
        {
            var info = await _customerRepository.GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("Customer does not exists."));

            var result = await _customerRepository.ForceDelete(id);
            return new ActionResultResponse(result, result <= 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _customerResourceService.GetString("Delete Customer successful."));
        }

        public async Task<ActionResultResponse<CustomerDetailViewModel>> GetDetail(string customerId)
        {
            var customerInfo = await _customerRepository.GetInfo(customerId, true);
            if (customerInfo == null)
                return new ActionResultResponse<CustomerDetailViewModel>(-1, _customerResourceService.GetString("Customer does not exists"));

            var listContactCustomer = await _contactCustomerRepository.GetByCustomerId(customerId);
            var listCustomerContact = await _customerContactRepository.GetByCustomerId(customerId);

            var customerDetail = new CustomerDetailViewModel
            {
                Id = customerInfo.Id,
                ConcurrencyStamp = customerInfo.ConcurrencyStamp,
                CustomerCode = customerInfo.CustomerCode,
                FullName = customerInfo.FullName,
                Birthday = customerInfo.Birthday,
                Gender = customerInfo.Gender,
                CustomerResourceId = customerInfo.CustomerResourceId,
                IdCardNumber = customerInfo.IdCardNumber,
                JobId = customerInfo.JobId,
                NationalId = customerInfo.NationalId,
                EthnicId = customerInfo.EthnicId,
                ReligionId = customerInfo.ReligionId,
                ProvinceId = customerInfo.ProvinceId,
                DistrictId = customerInfo.DistrictId,
                Address = customerInfo.Address,

                DistrictName = customerInfo.DistrictName,
                EthnicName = customerInfo.EthnicName,
                NationalName = customerInfo.NationalName,
                ProvinceName = customerInfo.ProvinceName,
                ReligionName = customerInfo.ReligionName,

                ContactCustomers = listContactCustomer,
                CustomerContacts = listCustomerContact

            };

            return new ActionResultResponse<CustomerDetailViewModel>
            {
                Data = customerDetail,
            };
        }

        public async Task<CustomerSummaryViewModel> GetDetailSummary(string tenantId, string customerId)
        {
            var customerInfo = await _customerRepository.GetInfo(customerId, false);
            if (customerInfo == null)
                return null;

            var listCustomerContact = await _customerContactRepository.GetByCustomerId(customerId);

            var phone = string.Empty;
            var email = string.Empty;

            if (listCustomerContact.Count > 0)
            {
                phone = listCustomerContact.First(x => x.ContactType == ContactType.MobilePhone).ContactValue;
                email = listCustomerContact.First(x => x.ContactType == ContactType.Email).ContactValue;
            }

            var customerSummeryDetail = new CustomerSummaryViewModel
            {
                Id = customerInfo.Id,
                CustomerCode = customerInfo.CustomerCode,
                FullName = customerInfo.FullName,
                Address = customerInfo.Address,
                PhoneNumber = phone,
                Email = email

            };

            return customerSummeryDetail;

        }

        public async Task<ActionResultResponse> Insert(string tenantId, CustomerMeta customerMeta)
        {
            var customerId = Guid.NewGuid().ToString();
            Domain.Models.Customer customer = new Domain.Models.Customer
            {
                Id = customerId,
                TenantId = tenantId,
                FullName = customerMeta.FullName,
                UnsignName = customerMeta.FullName.Trim().StripVietnameseChars().ToUpper(),
                Birthday = customerMeta.Birthday,
                Gender = customerMeta.Gender,
                CustomerResourceId = customerMeta.CustomerResourceId,
                IdCardNumber = customerMeta.IdCardNumber,
                JobId = customerMeta.JobId,
                NationalId = customerMeta.NationalId,
                NationalName = string.Empty,
                EthnicId = customerMeta.EthnicId,
                EthnicName = string.Empty,
                ReligionId = customerMeta.ReligionId,
                ReligionName = string.Empty,
                ProvinceId = customerMeta.ProvinceId,
                DistrictId = customerMeta.DistrictId,
                DistrictName = string.Empty,
                Address = customerMeta.Address
            };

            if (customerMeta.NationalId.HasValue)
            {
                var nationalInfo = await GetNationalInfo(customerMeta.NationalId.Value);
                if (nationalInfo == null)
                    return new ActionResultResponse(-1,
                        _sharedResourceService.GetString("National does not exists."));

                customer.NationalName = nationalInfo.Name;
            }
            if (customerMeta.ProvinceId.HasValue)
            {
                var provinceInfo = await GetProvinceInfo(customerMeta.ProvinceId.Value);
                if (provinceInfo == null)
                    return new ActionResultResponse(-2,
                        _sharedResourceService.GetString("Province does not exists. Please try again."));

                customer.ProvinceName = provinceInfo.Name;
            }
            if (customerMeta.DistrictId.HasValue)
            {
                var districtInfo = await GetDistrictInfo(customerMeta.DistrictId.Value);
                if (districtInfo == null)
                    return new ActionResultResponse(-3,
                        _sharedResourceService.GetString("Province does not exists. Please try again."));

                customer.DistrictName = districtInfo.Name;
            }
            if (customerMeta.EthnicId.HasValue)
            {
                var ethnicInfo = await GetEthnicInfo(customerMeta.EthnicId.Value);
                if (ethnicInfo == null)
                    return new ActionResultResponse(-4,
                        _sharedResourceService.GetString("District doest not exists. Please try again."));

                customer.EthnicName = ethnicInfo.Name;
            }
            if (customerMeta.ReligionId.HasValue)
            {
                var religionInfo = await GetReligionInfo(customerMeta.ReligionId.Value);
                if (religionInfo == null)
                    return new ActionResultResponse(-5,
                        _sharedResourceService.GetString("Religion doest not exists. Please try again."));

                customer.ReligionName = religionInfo.Name;
            }
            var resultInsert = await _customerRepository.Insert(customer);
            if (resultInsert <= 0)
                return new ActionResultResponse(resultInsert,
                    _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var resutlAddContacts = await AddCustomerContacts(customerId, customerMeta.CustomerContacts);
            if (resutlAddContacts.Code < 0)
                return resutlAddContacts;

            var resultAddRelativesContacts = await AddRelativesContacts(customerId, customerMeta.CustomerRelativesContacts);
            if (resultAddRelativesContacts.Code < 0)
                return resultAddRelativesContacts;

            return new ActionResultResponse(resultInsert, _customerResourceService.GetString("Add new Customer successful."));
        }

        public async Task<SearchResult<CustomerSearchViewModel>> Search(string tenantId, string keyword, DateTime? createDate, int page, int pageSize)
        {
            var items = await _customerRepository.Search(tenantId, keyword, createDate, page, pageSize, out int totalRows);
            return new SearchResult<CustomerSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows,
            };
        }

        public async Task<SearchResult<CustomerSearchViewModel>> GetAllCustomer(string tenantId, DateTime fromDate, DateTime toDate, int page, int pageSize)
        {
            var items = await _customerRepository.GetAllCustomer(tenantId, fromDate, toDate, page, pageSize, out int totalRows);
            return new SearchResult<CustomerSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows,
            };
        }

        public async Task<SearchResult<CustomerSearchViewModel>> GetAllCustomerInMonth(string tenantId, int month, int year, int page, int pageSize)
        {
            var items = await _customerRepository.GetAllCustomerInMonth(tenantId, month, year, page, pageSize, out int totalRows);
            return new SearchResult<CustomerSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows,
            };
        }

        public async Task<SearchResult<CustomerTotalViewModel>> GetTotalCustomerInMonths(string tenantId, int month, int year)
        {
            var items = await _customerRepository.GetTotalCustomerInMonths(tenantId, month, year);
            return new SearchResult<CustomerTotalViewModel>
            {
                Items = items,
                TotalRows = 0,
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, CustomerMeta customerMeta)
        {
            var customer = await _customerRepository.GetInfo(id);
            if (customer == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("Customer does not exists."));

            if (customer.ConcurrencyStamp != customerMeta.ConcurrencyStamp)
                return new ActionResultResponse(-2,
                    _customerResourceService.GetString("The Customer already updated by other people. You can not update this Customer."));

            if (customer.TenantId != tenantId)
                return new ActionResultResponse(-3,
                _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var oldProvinceId = customer.ProvinceId;
            var oldDistrictId = customer.DistrictId;
            var oldNationalId = customer.NationalId;
            var oldReligionId = customer.ReligionId;
            var oldEthnicId = customer.EthnicId;

            if (oldProvinceId != customerMeta.ProvinceId)
            {
                if (customerMeta.ProvinceId.HasValue)
                {
                    var provinceInfo = await GetProvinceInfo(customerMeta.ProvinceId.Value);
                    if (provinceInfo == null)
                        return new ActionResultResponse(-4,
                            _sharedResourceService.GetString("Province does not exists. Please try again."));

                    customer.ProvinceId = provinceInfo.Id;
                    customer.ProvinceName = provinceInfo.Name;
                }
                else
                {
                    customer.ProvinceId = null;
                    customer.ProvinceName = null;
                }
            }

            if (oldDistrictId != customerMeta.DistrictId)
            {
                if (customerMeta.DistrictId.HasValue)
                {
                    var districtInfo = await GetDistrictInfo(customerMeta.DistrictId.Value);
                    if (districtInfo == null)
                        return new ActionResultResponse(-5,
                            _sharedResourceService.GetString("District does not exists. Please try again."));

                    customer.DistrictId = districtInfo.Id;
                    customer.DistrictName = districtInfo.Name;
                }
                else
                {
                    customer.DistrictId = null;
                    customer.DistrictName = null;
                }
            }

            if (oldNationalId != customerMeta.NationalId)
            {
                if (customerMeta.NationalId.HasValue)
                {
                    var nationalInfo = await GetNationalInfo(customerMeta.NationalId.Value);
                    if (nationalInfo == null)
                        return new ActionResultResponse(-6,
                            _sharedResourceService.GetString("Nation does not exists. Please try again."));

                    customer.NationalId = nationalInfo.Id;
                    customer.NationalName = nationalInfo.Name;
                }
                else
                {
                    customer.NationalId = null;
                    customer.NationalName = null;
                }
            }

            if (oldReligionId != customerMeta.ReligionId)
            {
                if (customerMeta.ReligionId.HasValue)
                {
                    var religionInfo = await GetReligionInfo(customerMeta.ReligionId.Value);
                    if (religionInfo == null)
                        return new ActionResultResponse(-7,
                            _sharedResourceService.GetString("Religion does not exists. Please try again."));

                    customer.ReligionId = religionInfo.Id;
                    customer.ReligionName = religionInfo.Name;
                }
                else
                {
                    customer.ReligionId = null;
                    customer.ReligionName = null;
                }
            }
            if (oldEthnicId != customerMeta.EthnicId)
            {
                if (customerMeta.EthnicId.HasValue)
                {
                    var ethnicInfo = await GetEthnicInfo(customerMeta.EthnicId.Value);
                    if (ethnicInfo == null)
                        return new ActionResultResponse(-8, _sharedResourceService.GetString("Ethnic does not exists."));

                    customer.EthnicId = ethnicInfo.Id;
                    customer.EthnicName = ethnicInfo.Name;
                }
                else
                {
                    customer.EthnicId = null;
                    customer.EthnicName = null;
                }
            }

            customer.ConcurrencyStamp = Guid.NewGuid().ToString();
            customer.FullName = customerMeta.FullName;
            customer.UnsignName = customerMeta.FullName.StripVietnameseChars().ToUpper();
            customer.Birthday = customerMeta.Birthday;
            customer.Gender = customerMeta.Gender;
            customer.CustomerResourceId = customerMeta.CustomerResourceId;
            customer.IdCardNumber = customerMeta.IdCardNumber;
            customer.JobId = customerMeta.JobId;
            customer.Address = customerMeta.Address;

            await _customerRepository.Update(customer);
            await UpdateContacts();
            await UpdateRelativesContacts();

            return new ActionResultResponse(1, _customerResourceService.GetString("Update Customer successful."));

            async Task UpdateContacts()
            {
                // Delete all existing contacts.
                await _customerContactRepository.DeleteByCustomerId(customer.Id);

                // Add new contacts.
                await AddCustomerContacts(customer.Id, customerMeta.CustomerContacts);
            }

            async Task UpdateRelativesContacts()
            {
                // Delete all relatives contacts.
                await _contactCustomerRepository.DeleteByCustomerId(customer.Id);

                // Add new relatives contacts.
                await AddRelativesContacts(customer.Id, customerMeta.CustomerRelativesContacts);
            }
        }

        private async Task RollbackInsert(string customerId)
        {
            await _customerRepository.ForceDelete(customerId);
            await _contactCustomerRepository.ForceDelete(customerId);
            await _customerContactRepository.ForceDelete(customerId);
        }

        /// <summary>
        /// Lấy thông tin quốc gia
        /// </summary>
        /// <param name="nationalId">Mã quốc gia</param>
        /// <returns></returns>
        private async Task<NationalViewModel> GetNationalInfo(int nationalId)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return null;

            return await new HttpClientService().GetAsync<NationalViewModel>($"{apiUrls.CoreApiUrl}/nationals/{nationalId}");
        }

        /// <summary>
        /// Lấy thông tin tỉnh thành theo Id
        /// </summary>
        /// <param name="provinceId">Mã Tỉnh/TP</param>
        /// <returns></returns>
        private async Task<ProvinceViewModel> GetProvinceInfo(int provinceId)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return null;

            return await new HttpClientService().GetAsync<ProvinceViewModel>($"{apiUrls.CoreApiUrl}/nationals/provinces/{provinceId}");
        }

        /// <summary>
        /// Lấy thông tin quận huyện.
        /// </summary>
        /// <param name="districtId">Mã Quận/Huyện</param>
        /// <returns></returns>
        private async Task<DistrictViewModel> GetDistrictInfo(int districtId)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return null;

            return await new HttpClientService()
                .GetAsync<DistrictViewModel>($"{apiUrls.CoreApiUrl}/nationals/provinces/districts/{districtId}");
        }


        /// <summary>
        /// Lấy thông tin quận huyện theo Id
        /// </summary>
        /// <param name="ethnicId"></param>
        /// <returns></returns>
        private async Task<Ethnic> GetEthnicInfo(int ethnicId)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return null;

            return await new HttpClientService().GetAsync<Ethnic>($"{apiUrls.CoreApiUrl}/nationals/ethnics/{ethnicId}");
        }

        /// <summary>
        /// Lấy về thông tin tôn giáo
        /// </summary>
        /// <param name="religionId">Mã tôn giáo</param>
        /// <returns></returns>
        private async Task<ReligionSearchViewModel> GetReligionInfo(int religionId)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return null;

            return await new HttpClientService().GetAsync<ReligionSearchViewModel>($"{apiUrls.CoreApiUrl}/nationals/religions/{religionId}");
        }

        private string GenerateUnsignName(Domain.Models.Customer CustomerInfo, List<CustomerContact> listCustomerContacts)
        {
            var unsignName = CustomerInfo.FullName.Trim().StripVietnameseChars().ToUpper();
            return listCustomerContacts.Aggregate(unsignName,
                (current, CustomerContact) => current + $" {CustomerContact.ContactValue.Trim().StripVietnameseChars().ToUpper()}");
        }

        private async Task<ActionResultResponse> UpdateCustomerUnsignName(string customerId)
        {
            var customerInfo = await _customerRepository.GetInfo(customerId);
            if (customerInfo == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("Customer info does not exists"));

            var listCustomerContacts = await _customerContactRepository.GetByCustomerId(customerId);
            if (listCustomerContacts == null || !listCustomerContacts.Any())
                return new ActionResultResponse(-2, _customerResourceService.GetString("Nothing change for update."));

            var unsignName = customerInfo.FullName.Trim().StripVietnameseChars().ToUpper();
            listCustomerContacts.Aggregate(unsignName,
                (current, customerContact) => current + $" {customerContact.ContactValue.Trim().StripVietnameseChars().ToUpper()}");

            customerInfo.UnsignName = unsignName;
            var result = await _customerRepository.UpdateUnsignName(customerInfo.Id, unsignName);
            return new ActionResultResponse(result, result < 0
                ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                : result == 0
                    ? _sharedResourceService.GetString(ErrorMessage.NothingChanges)
                    : _customerResourceService.GetString("Update Customer successful."));
        }

        private async Task<ActionResultResponse> AddCustomerContacts(string customerId, List<CustomerContact> listCustomerContacts)
        {
            if (listCustomerContacts != null && listCustomerContacts.Count > 0)
            {
                var customerContacts = new List<CustomerContact>();
                foreach (var CustomerContactMeta in listCustomerContacts)
                {
                    if (customerContacts.Any(x => x.ContactType == CustomerContactMeta.ContactType
                     && x.ContactValue.Trim() == CustomerContactMeta.ContactValue.Trim()))
                        continue;

                    if (CustomerContactMeta.ContactType == ContactType.MobilePhone && !CustomerContactMeta.ContactValue.IsPhoneNumber()
                        || CustomerContactMeta.ContactType == ContactType.Email && !CustomerContactMeta.ContactValue.IsEmailAddress())
                        continue;

                    customerContacts.Add(new CustomerContact
                    {
                        CustomerId = customerId,
                        ContactType = CustomerContactMeta.ContactType,
                        ContactValue = CustomerContactMeta.ContactValue
                    });
                }

                if (customerContacts.Count > 0)
                {
                    var resultInsert = await _customerContactRepository.Inserts(customerContacts);
                    if (resultInsert <= 0)
                    {
                        await RollbackInsert(customerId);
                        return new ActionResultResponse(resultInsert,
                            _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
                    }

                    // Update Customer unsignName.
                    await UpdateCustomerUnsignName(customerId);
                }
            }
            return new ActionResultResponse(0, _customerResourceService.GetString(ErrorMessage.NothingChanges));
        }

        private async Task<ActionResultResponse> AddRelativesContacts(string customerId, List<CustomerRelativesContact> listCustomerRelativesContacts)
        {
            if (listCustomerRelativesContacts != null && listCustomerRelativesContacts.Count > 0)
            {
                var customerRelativesContacts = new List<CustomerRelativesContact>();
                foreach (var customerRelativesContact in listCustomerRelativesContacts)
                {
                    if (customerRelativesContacts.Any(x =>
                        x.FullName.Trim() == customerRelativesContact.FullName.Trim()
                        && x.PhoneNumber.Trim() == customerRelativesContact.PhoneNumber.Trim()))
                        continue;

                    customerRelativesContacts.Add(new CustomerRelativesContact
                    {
                        CustomerId = customerId,
                        FullName = customerRelativesContact.FullName,
                        PhoneNumber = customerRelativesContact.PhoneNumber
                    });
                }

                if (customerRelativesContacts.Count > 0)
                {
                    var resultInsert = await _contactCustomerRepository.Inserts(customerRelativesContacts);
                    if (resultInsert <= 0)
                    {
                        await RollbackInsert(customerId);
                        return new ActionResultResponse(resultInsert,
                            _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
                    }
                }
                return new ActionResultResponse(1, _customerResourceService.GetString("Add new relatives contacts successful."));
            }
            return new ActionResultResponse(0, _sharedResourceService.GetString(ErrorMessage.NothingChanges));
        }

        public async Task<bool> CheckExistsCustomer(string tenantId, string fullName, string contactValue)
        {
            string unsignName = fullName.Trim().StripVietnameseChars().ToUpper();
            return await _customerRepository.CheckExistsCustomer(tenantId, unsignName, contactValue);
        }

        public async Task<string> GetCustomerId(string tenantId, string fullName, string phone, string email, string address)
        {
            var unsignName = fullName.Trim().StripVietnameseChars().ToUpper();
            var customerId = _customerRepository.GetCustomerId(tenantId, unsignName, phone, email);

            if (!string.IsNullOrEmpty(customerId))
                return customerId;

            customerId = Guid.NewGuid().ToString();
            var customer = new Domain.Models.Customer
            {
                Id = customerId,
                TenantId = tenantId,
                FullName = fullName,
                UnsignName = fullName.Trim().StripVietnameseChars().ToUpper(),
                Birthday = DateTime.Now,
                Gender = 2,
                CustomerResourceId = "-1",
                IdCardNumber = string.Empty,
                JobId = -1,
                NationalId = -1,
                NationalName = string.Empty,
                EthnicId = -1,
                EthnicName = string.Empty,
                ReligionId = -1,
                ReligionName = string.Empty,
                ProvinceId = -1,
                DistrictId = -1,
                DistrictName = string.Empty,
                Address = address
            };

            var resultInsert = await _customerRepository.Insert(customer);

            var customerContacts = new List<CustomerContact>();

            var item1 = new CustomerContact { Id = Guid.NewGuid().ToString(), CustomerId = customerId, ContactType = ContactType.Email, ContactValue = email };
            var item2 = new CustomerContact { Id = Guid.NewGuid().ToString(), CustomerId = customerId, ContactType = ContactType.MobilePhone, ContactValue = phone };

            customerContacts.Add(item1);
            customerContacts.Add(item2);

            await _customerContactRepository.Inserts(customerContacts);


            return customerId;

        }

        public async Task<SearchResult<CustomerSuggestionViewModel>> Suggestions(string tenantId, string keyword, int page, int pageSize)
        {
            var items = await _customerRepository.Suggestions(tenantId, keyword, page, pageSize, out var totalRows);
            return new SearchResult<CustomerSuggestionViewModel>(items, totalRows);
        }
    }

   

    

}
