using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Warehouse.Infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IProductRepository _productRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;

        public OrderService(IOrderRepository orderRepository,
            IOrderDetailRepository orderDetailRepository,
            IProductRepository productRepository)
        {
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _productRepository = productRepository;
        }

        public Task<ActionResultResponse<OrderDetailViewModel>> GetDetail(string tenantId, string id)
        {
            throw new NotImplementedException();
        }

        public Task<ActionResultResponse<string>> Insert(string tenantId, OrderMeta orderMeta)
        {
            throw new NotImplementedException();
        }

        public async Task<SearchResult<OrderSearchViewModel>> Search(string tenantId, string userId, string keyword, OrderStatus? status,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        {
            var items = await _orderRepository.Search(tenantId, userId, keyword,
                status, fromDate, toDate, page, pageSize, out var totalRows);
            return new SearchResult<OrderSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public Task<ActionResultResponse> Update(string tenantId, string id, OrderMeta orderMeta)
        {
            throw new NotImplementedException();
        }
    }
}
