using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Customer.Domain.IRepository
{
    /// <summary>
    /// Interface khai báo các phương thức sẽ có để thao tác với bảng trong db.
    /// </summary>
    public interface ICustomerRepository
    {
        Task<List<CustomerSearchViewModel>> Search(string tenantId, string keyword, DateTime? createDate, int page, int pageSize, out int totalRows);

        Task<int> Insert(Models.Customer customer);

        Task<int> Update(Models.Customer customer);

        Task<int> UpdateUnsignName(string id, string unsignName);

        Task<Models.Customer> GetInfo(string id, bool isReadOnly = false);

        Task<Models.Customer> GetInfoSummary(string tenantId, string id, bool isReadOnly = false);

        Task<int> ForceDelete(string id);

        Task<bool> CheckExistsCustomer(string tenantId, string unsignName, string contactValue);

        string GetCustomerId(string tenantId, string unsignName, string phone, string email);

        // Thống kê tổng số khách hàng
        Task<List<CustomerSearchViewModel>> GetAllCustomer(string tenantId, DateTime fromDate, DateTime toDate, int page, int pageSize, out int totalRows);

        // Thống kê khách hàng mới trong tháng
        Task<List<CustomerSearchViewModel>> GetAllCustomerInMonth(string tenantId, int month, int year, int page, int pageSize, out int totalRows);

        Task<List<CustomerTotalViewModel>> GetTotalCustomerInMonths(string tenantId, int month, int year);

        Task<List<CustomerSuggestionViewModel>> Suggestions(string tenantId, string keyword, int page, int pageSize, out int totalRows);

    }

   

   
}
