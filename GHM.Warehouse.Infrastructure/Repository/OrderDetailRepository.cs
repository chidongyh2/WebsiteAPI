using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class OrderDetailRepository : RepositoryBase, IOrderDetailRepository
    {
        private readonly IRepository<OrderDetail> _orderDetailRepository;
        public OrderDetailRepository(IDbContext context) : base(context)
        {
            _orderDetailRepository = Context.GetRepository<OrderDetail>();
        }

        public Task<bool> CheckExists(string id, string tenantId, string orderId, string productId)
        {
            throw new NotImplementedException();
        }

        public Task<int> Delete(string tenantId, string id)
        {
            throw new NotImplementedException();
        }

        public Task<OrderDetail> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            throw new NotImplementedException();
        }

        public Task<OrderDetail> GetInfo(string tenantId, string orderId, string productId, bool isReadOnly = false)
        {
            throw new NotImplementedException();
        }

        public Task<List<OrderDetail>> GetsAll(string tenantId, string orderId, bool isReadOnly = false)
        {
            throw new NotImplementedException();
        }

        public Task<int> Insert(OrderDetail orderDetail)
        {
            throw new NotImplementedException();
        }

        public Task<int> Inserts(List<OrderDetail> orderDetails)
        {
            throw new NotImplementedException();
        }

        public Task<int> Update(OrderDetail orderDetail)
        {
            throw new NotImplementedException();
        }

        public Task<int> Updates(List<OrderDetail> orderDetails)
        {
            throw new NotImplementedException();
        }
    }
}
