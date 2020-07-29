using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class OrderDetailRepository : RepositoryBase, IOrderDetailRepository
    {
        private readonly IRepository<OrderDetail> _orderDetailRepository;
        public OrderDetailRepository(IDbContext context) : base(context)
        {
            _orderDetailRepository = Context.GetRepository<OrderDetail>();
        }

        public async Task<bool> CheckExists(string tenantId, string orderId, string productId)
        {
            return await _orderDetailRepository.ExistAsync(x => x.TenantId == tenantId
            && x.OrderId == orderId & x.ProductId == productId && !x.IsDelete);
        }

        public async Task<int> Delete(string tenantId, string id)
        {
            var orderInfo = await GetInfo(tenantId, id, false);
            if (orderInfo == null)
                return -1;
            _orderDetailRepository.Delete(orderInfo);

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Deletes(string tenantId, string orderId)
        {
            var orderDetails = await _orderDetailRepository.GetsAsync(false, x => x.TenantId == tenantId && x.OrderId == orderId);
            if (orderDetails == null)
                return -1;

            _orderDetailRepository.Deletes(orderDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<OrderDetail> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _orderDetailRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);

        }

        public async Task<OrderDetail> GetInfo(string tenantId, string orderId, string productId, bool isReadOnly = false)
        {
            return await _orderDetailRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId
             && x.OrderId == orderId & x.ProductId == productId && !x.IsDelete);

        }

        public async Task<List<OrderDetailSearchViewModel>> GetsAll(string tenantId, string languageId, string orderId, bool isReadOnly = false)
        {
            var result = from orderDetail in Context.Set<OrderDetail>()
                         join unitTransaction in Context.Set<UnitTranslation>()
                         .Where(x => !x.IsDelete && x.LanguageId == languageId && x.TenantId == tenantId) on orderDetail.UnitId equals unitTransaction.UnitId
                         where orderDetail.TenantId == tenantId && orderDetail.OrderId == orderId && !orderDetail.IsDelete
                         select new OrderDetailSearchViewModel
                         {
                             Id = orderDetail.Id,
                             OrderId = orderDetail.OrderId,
                             ProductId = orderDetail.ProductId,
                             ProductName = orderDetail.ProductName,
                             Price = orderDetail.Price,
                             Discount = orderDetail.Discount,
                             DiscountType = orderDetail.DiscountType,
                             Quantity = orderDetail.Quantity,
                             Amount = orderDetail.Amount,
                             UnitId = orderDetail.UnitId,
                             UnitName = unitTransaction.Name,
                             ConcurrencyStamp = orderDetail.ConcurrencyStamp
                         };

            return result.ToList();
        }

        public async Task<int> Insert(OrderDetail orderDetail)
        {
            _orderDetailRepository.Create(orderDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<OrderDetail> orderDetails)
        {
            _orderDetailRepository.Creates(orderDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(OrderDetail orderDetail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Updates(List<OrderDetail> orderDetails)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
