using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
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

        public async Task<string> GetCode(string tenantId)
        {
            var now = DateTime.Now;
            var quantity = await _orderRepository.Count(tenantId);
            var code = $"{now.ToString("DDMMyyyy")}{quantity.ToString("D5")}";

            return code;
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
                    Address = orderInfo.Address,
                    Note = orderInfo.Note,
                    DeliveryDate = orderInfo.DeliveryDate,
                    CreateTime = orderInfo.CreateTime,
                    CreatorId = orderInfo.CreatorId,
                    CreatorFullName = orderInfo.CreatorFullName,
                    ConcurrencyStamp = orderInfo.ConcurrencyStamp,
                    OrderDetails = orderDetails.Select(x => new OrderDetailSearchViewModel()
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

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string createUserId,
            string createFullName, OrderMeta orderMeta)
        {
            var now = DateTime.Now;
            var quantity = await _orderRepository.Count(tenantId);
            var code = string.IsNullOrEmpty(orderMeta.Code) ? $"{now.ToString("DDMMyyyy")}{quantity.ToString("D5")}" : orderMeta.Code;

            var isExists = await _orderRepository.CheckExists(tenantId, null, code);
            if (isExists)
                return new ActionResultResponse<string>(-2,
                        _warehouseResourceService.GetString(ErrorMessage.AlreadyExists, "OrderCode"));

            if (orderMeta.OrderDetails.Count(x => x.Quantity <= 0) > 0)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Product quantity must greater than."));

            var order = new Order()
            {
                Code = code,
                TenantId = tenantId,
                Name = $"{orderMeta.CustomerName}_{orderMeta.PhoneNumber}",
                UnsignName = $"{code} {orderMeta.CustomerName} {orderMeta.PhoneNumber}".StripVietnameseChars().ToUpper(),
                CusomerId = orderMeta.CustomerId,
                CustomerName = orderMeta.CustomerName?.Trim(),
                PhoneNumber = orderMeta.PhoneNumber?.Trim(),
                Email = orderMeta.Email?.Trim(),
                Address = orderMeta.Address?.Trim(),
                Note = orderMeta.Note?.Trim(),
                Discount = orderMeta.Discount,
                DiscountType = orderMeta.DiscountType,
                Transport = orderMeta.Transport,
                Status = orderMeta.Status,
                DeliveryDate = orderMeta.DeliveryDate,
                CreatorFullName = createFullName,
                CreatorId = createUserId
            };

            foreach (var detail in orderMeta.OrderDetails)
            {
                order.OrderDetails.Add(new OrderDetail()
                {
                    TenantId = tenantId,
                    OrderId = order.Id,
                    ProductId = detail.ProductId,
                    ProductName = detail.ProductName,
                    Quantity = detail.Quantity,
                    UnitId = detail.UnitId,
                    Price = detail.Price,
                    Discount = detail.Discount,
                    DiscountType = detail.DiscountType,
                    CreatorId = createUserId,
                    CreatorFullName = createFullName,
                    Amount = detail.DiscountType == (byte)DiscountType.Money ? (detail.Price * detail.Quantity - detail.Discount ?? 0) : detail.Price * detail.Quantity * (1 - (detail.Discount ?? 0 / 100)),
                });
            }

            order.Quantity = order.OrderDetails.Count();
            var totalPrice = order.OrderDetails.Sum(x => x.Amount);
            order.TotalPrice = totalPrice;
            order.TotalAmount = order.DiscountType == (byte)DiscountType.Money ? totalPrice - orderMeta.Discount ?? 0 : totalPrice * (1 - orderMeta.Discount ?? 0 / 100);

            var result = await _orderRepository.Insert(order);
            if (result <= 0)
                return new ActionResultResponse<string>(-3,
                   _warehouseResourceService.GetString(ErrorMessage.SomethingWentWrong));


            return new ActionResultResponse<string>(result,
                  _warehouseResourceService.GetString(SuccessMessage.AddSuccessful), "", order.Id);
        }

        public async Task<SearchResult<OrderSearchViewModel>> Search(string tenantId, string userId, string productId,
            string keyword, OrderStatus? status,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        {
            var items = await _orderRepository.Search(tenantId, userId, productId, keyword,
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
            if (result <= 0)
                return new ActionResultResponse<string>(-4,
                   _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(result,
                  _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful), "", orderInfo.ConcurrencyStamp);
        }
    }
}
