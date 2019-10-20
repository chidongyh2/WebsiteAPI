using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IOrderRepository
    {
        Task<int> Insert(Order order);

        Task<int> Update(Order order);

        Task<int> ForceDelete(string tenantId, string id);

        Task<int> Delete(string tenantId, string id);

        Task<Order> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<bool> CheckExists(string tenantId, string id);

        Task<bool> CheckExists(string tenantId, string id, string code);

        Task<int> UpdateTotalPrice(string tenantId, string id, decimal totalPrice);

        Task<int> UpdateQuantity(string tenantId, string id, decimal quantity);

        Task<List<OrderSearchViewModel>> Search(string tenantId, string userId, string productId, string keyword, OrderStatus? status,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows);

        Task<int> Count(string tenantId);

    }
}
