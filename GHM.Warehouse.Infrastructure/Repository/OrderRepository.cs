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
    public class OrderRepository : RepositoryBase, IOrderRepository
    {
        private readonly IRepository<Order> _orderRepository;
        public OrderRepository(IDbContext context) : base(context)
        {
            _orderRepository = Context.GetRepository<Order>();
        }

        public async Task<bool> CheckExists(string tenantId, string id)
        {
            return await _orderRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);            
        }

        public Task<int> Count(string tenantId)
        {
            throw new NotImplementedException();
        }

        public Task<int> Delete(string tenantId, string id)
        {
            throw new NotImplementedException();
        }

        public Task<int> ForceDelete(string tenantId, string id)
        {
            throw new NotImplementedException();
        }

        public Task<OrderDetailViewModel> GetDetail(string tenantId, string id)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetInfo(string id, bool isReadOnly = false)
        {
            throw new NotImplementedException();
        }

        public async Task<int> Insert(Order order)
        {
            
            throw new NotImplementedException();
        }

        public Task<List<OrderSearchViewModel>> Search(string tenantId, string userId, string keyword, OrderStatus? status, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows)
        {
            throw new NotImplementedException();
        }

        public Task<int> Update(Order order)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateTotalAmount(string tenantId, string id, decimal totalAmount)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateTotalItems(string tenantId, string id, int totalItems)
        {
            throw new NotImplementedException();
        }
    }
}
