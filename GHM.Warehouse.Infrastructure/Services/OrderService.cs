using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IProductRepository _productRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;
        private readonly IResourceService<GhmWarehouseResource> _warehouseResourceService;
        private readonly IResourceService<SharedResource> _sharedResourceService;

        public OrderService(IOrderRepository orderRepository,
            IOrderDetailRepository orderDetailRepository,
            IProductRepository productRepository, IResourceService<GhmWarehouseResource> warehouseResourceService,
            IResourceService<SharedResource> sharedResourceService)
        {
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _productRepository = productRepository;
            _warehouseResourceService = warehouseResourceService;
            _sharedResourceService = sharedResourceService;
        }

        public async Task<ActionResultResponse<OrderDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var orderInfo = await _orderRepository.GetInfo(tenantId, id, true);
            var orderDetails = await _orderDetailRepository.GetsAll(tenantId, id, true);

            return new ActionResultResponse<OrderDetailViewModel>
            {
                Code = 1,
                Data = new OrderDetailViewModel()
                {
                    Id = orderInfo.Id,
                    Code = orderInfo.Code,
                    Name = orderInfo.Code,
                    CustomerId = orderInfo.CusomerId,
                    CustomerName = orderInfo.CustomerName,
                    PhoneNumber = orderInfo.PhoneNumber,
                    Email = orderInfo.Email,
                    TotalPrice = orderInfo.TotalPrice,
                    Discount = orderInfo.Discount,
                    DiscountType = orderInfo.DiscountType,
                    Transport = orderInfo.Transport,
                    Quantity = orderInfo.Quantity,
                    Status = orderInfo.Status,
                    Type = orderInfo.Type,
                    DeliveryDate = orderInfo.DeliveryDate,
                    CreateTime = orderInfo.CreateTime,
                    CreatorId = orderInfo.CreatorId,
                    CreatorFullName = orderInfo.CreatorFullName,
                    ConcurrencyStamp = orderInfo.ConcurrencyStamp,
                    OrderDetails = orderDetails.Select(x=> new OrderDetailSearchViewModel()
                    {
                        Id = x.Id,
                        OrderId = x.OrderId,
                        ProductId = x.ProductId,
                        ProductName = x.ProductName,
                        Quantity = x.Quantity,
                        UnitId = x.UnitId,
                        Price = x.Price,
                        Discount = x.Discount,
                        DiscountType = x.DiscountType,
                        Amount = x.Amount,
                        ConcurrencyStamp = x.ConcurrencyStamp
                    })?.ToList()
                }
            };
        }

        public Task<ActionResultResponse<string>> Insert(string tenantId, string createUserId, string createUserName,
            OrderMeta orderMeta)
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

        public async Task<ActionResultResponse<string>> UpdateStatus(string tenantId,
            string lastUpdateUserId, string lastUpdateFullName, string id, OrderStatus status)
        {
            var orderInfo = await _orderRepository.GetInfo(tenantId, id, true);
            if (orderInfo == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Order does not exists."));

            if (orderInfo.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (orderInfo.Status == status)
                return new ActionResultResponse<string>(-3,
                    _sharedResourceService.GetString(ErrorMessage.NothingChanges));

            orderInfo.Status = status;
            orderInfo.LastUpdate = DateTime.Now;
            orderInfo.LastUpdateFullName = lastUpdateFullName;
            orderInfo.LastUpdateUserId = lastUpdateUserId;
            orderInfo.ConcurrencyStamp = Guid.NewGuid().ToString();

            var result = await _orderRepository.Update(orderInfo);
            if(result <= 0)
                return new ActionResultResponse<string>(-4,
                   _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(result,
                  _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful), "", orderInfo.ConcurrencyStamp);
        }
    }
}
