using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Customer.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Customer.Domain.IServices
{
    /// <summary>
    /// Service dùng để sử lý business logic.
    /// </summary>
    public interface ICustomerService
    {
        Task<ActionResultResponse> Insert(string tenantId, ModelMetas.CustomerMeta customerMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, ModelMetas.CustomerMeta customerMeta);

        Task<ActionResultResponse> ForceDelete(string tenantId, string customerId);

        Task<ActionResultResponse<CustomerDetailViewModel>> GetDetail(string customerId);

        Task<CustomerSummaryViewModel> GetDetailSummary(string tenantId, string customerId);

        Task<SearchResult<CustomerSearchViewModel>> Search(string tenantId, string keyword, DateTime? createDate, int page, int pageSize);

        Task<SearchResult<CustomerSearchViewModel>> GetAllCustomer(string tenantId, DateTime fromDate, DateTime toDate, int page, int pageSize);

        Task<SearchResult<CustomerSearchViewModel>> GetAllCustomerInMonth(string tenantId, int month, int year, int page, int pageSize);

        Task<SearchResult<CustomerTotalViewModel>> GetTotalCustomerInMonths(string tenantId, int month, int year);

        Task<bool> CheckExistsCustomer(string tenantId, string fullName, string contactValue);

        Task<string> GetCustomerId(string tenantId, string fullName, string phone, string email, string address);

        Task<SearchResult<CustomerSuggestionViewModel>> Suggestions(string tenantId, string keyword, int page, int pageSize);

    }

}
