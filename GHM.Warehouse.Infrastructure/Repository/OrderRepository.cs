using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using GHM.Infrastructure.Extensions;

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

        public async Task<int> Count(string tenantId)
        {
            return await _orderRepository.CountAsync(x => x.TenantId == tenantId);
        }

        public async Task<int> Delete(string tenantId, string id)
        {
            var orderInfo = await GetInfo(tenantId, id, false);
            if (orderInfo == null)
                return -1;

            orderInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string id)
        {
            var orderInfo = await GetInfo(tenantId, id, false);
            if (orderInfo == null)
                return -1;

            return await Context.SaveChangesAsync();
        }

        public async Task<Order> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _orderRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<int> Insert(Order order)
        {
            _orderRepository.Create(order);
            return await Context.SaveChangesAsync();
        }

        public Task<List<OrderSearchViewModel>> Search(string tenantId, string userId, string productId,
            string keyword, OrderStatus? status, DateTime? fromDate, DateTime? toDate, int page,
            int pageSize, out int totalRows)
        {
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
            }

            if (fromDate.HasValue)
            {
                fromDate = fromDate.Value.Date;
            }

            if (toDate.HasValue)
            {
                toDate = toDate.Value.Date.AddDays(1).AddMilliseconds(-1);
            }

            var result = (from order in Context.Set<Order>()
                         join detail in Context.Set<OrderDetail>() on order.Id equals detail.OrderId
                         where order.TenantId == tenantId && !order.IsDelete
                               && detail.TenantId == tenantId && !detail.IsDelete
                               && (string.IsNullOrEmpty(productId) || detail.ProductId == productId)
                               && (string.IsNullOrEmpty(userId) || order.CreatorId == userId)
                               && (string.IsNullOrEmpty(keyword) || order.UnsignName.Contains(keyword))
                               && (!fromDate.HasValue || fromDate.Value <= order.CreateTime)
                               && (!toDate.HasValue || toDate.Value >= order.CreateTime)
                               && (!status.HasValue || order.Status == status)
                         select new OrderSearchViewModel
                         {
                             Code = order.Code,
                             Id = order.Id,
                             Name = order.Name,
                             CustomerName = order.CustomerName,
                             PhoneNumber = order.PhoneNumber,
                             TotalPrice = order.TotalPrice,
                             Discount = order.Discount,
                             DiscountType = order.DiscountType,
                             Transport = order.Transport,
                             Quantity = order.Quantity,
                             Status = order.Status,
                             TotalAmount = order.TotalAmount,
                             Email = order.Email,
                             VAT = order.VAT,
                             Type = order.Type,
                             DeliveryDate = order.DeliveryDate,
                             CreateTime = order.CreateTime,
                             CreatorFullName = order.CreatorFullName
                         }).Distinct();

            totalRows = result.Count();
            return result.OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Update(Order order)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateTotalPrice(string tenantId, string id, decimal totalPrice)
        {
            var orderInfo = await GetInfo(tenantId, id, false);
            if (orderInfo == null)
                return -1;

            orderInfo.TotalPrice = totalPrice;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateQuantity(string tenantId, string id, decimal quantity)
        {
            var orderInfo = await GetInfo(tenantId, id, false);
            if (orderInfo == null)
                return -1;

            orderInfo.Quantity = quantity;
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string id, string code)
        {
            return await _orderRepository.ExistAsync(x => x.TenantId == tenantId && x.Id != id
            && x.Code == code && !x.IsDelete);
        }
    }
}
