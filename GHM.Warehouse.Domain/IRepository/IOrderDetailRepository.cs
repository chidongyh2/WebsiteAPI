using GHM.Warehouse.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IOrderDetailRepository
    {
        Task<bool> CheckExists(string id, string tenantId, string orderId, string productId);

        Task<int> Insert(OrderDetail orderDetail);

        Task<int> Inserts(List<OrderDetail> orderDetails);

        Task<List<OrderDetail>> GetsAll(string tenantId, string orderId, bool isReadOnly = false);

        Task<int> Updates(List<OrderDetail> orderDetails);

        Task<int> Update(OrderDetail orderDetail);

        Task<OrderDetail> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<OrderDetail> GetInfo(string tenantId, string orderId, string productId, bool isReadOnly = false);

        Task<int> Delete(string tenantId, string id);      
    }
}
