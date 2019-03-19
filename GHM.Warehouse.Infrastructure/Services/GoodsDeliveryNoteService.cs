using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class GoodsDeliveryNoteService : IGoodsDeliveryNoteService
    {
        private readonly IGoodsDeliveryNoteRepository _goodsDeliveryNoteRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;
        private readonly IWarehouseRepository _warehouseRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IProductRepository _productRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IInventoryRepository _inventoryRepository;
        private readonly IGoodsDeliveryNoteReceiverRepository _goodsDeliveryNoteReceiverRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IServiceProvider _serviceProvider;
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IProductConversionUnitRepository _productConversionUnitRepository;
        private readonly ISupplierRepository _supplierRepository;
        private readonly IMediator _mediator;
        private readonly IConfiguration _configuration;
        private readonly ApiUrlSettings _apiUrls;

        public GoodsDeliveryNoteService(IGoodsDeliveryNoteRepository goodsDeliveryNoteRepository,
            IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository,
            IWarehouseRepository warehouseRepository,
            IProductUnitRepository productUnitRepository,
            IProductRepository productRepository,
            IWarehouseConfigRepository warehouseConfigRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService,
            IMediator mediator, IWarehouseManagerConfigRepository warehouseManagerConfigRepository, IInventoryRepository inventoryRepository,
            IGoodsDeliveryNoteReceiverRepository goodsDeliveryNoteReceiverRepository, IServiceProvider serviceProvider,
            IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository, IConfiguration configuration, IInventoryReportRepository
                inventoryReportRepository, IProductConversionUnitRepository productConversionUnitRepository, ISupplierRepository supplierRepository)
        {
            _goodsDeliveryNoteRepository = goodsDeliveryNoteRepository;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
            _warehouseRepository = warehouseRepository;
            _productUnitRepository = productUnitRepository;
            _productRepository = productRepository;
            _warehouseConfigRepository = warehouseConfigRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _mediator = mediator;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
            _inventoryRepository = inventoryRepository;
            _goodsDeliveryNoteReceiverRepository = goodsDeliveryNoteReceiverRepository;
            _serviceProvider = serviceProvider;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _configuration = configuration;
            _inventoryReportRepository = inventoryReportRepository;
            _productConversionUnitRepository = productConversionUnitRepository;
            _supplierRepository = supplierRepository;
            _apiUrls = _configuration.GetApiUrl();
        }

        public async Task<ActionResultResponse> Insert(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta,
            string creatorId, string creatorFullName, string creatorAvatar)
        {
            // Lấy về công thức tính giá xuất kho.
            var exWarehousePriceCalculatorMethod = await _warehouseConfigRepository.GetInventoryCalculatorMethod(
                goodsDeliveryNoteMeta.TenantId, goodsDeliveryNoteMeta.WarehouseId);
            if (!exWarehousePriceCalculatorMethod.HasValue)
                return new ActionResultResponse<GoodsDeliveryNote>(-7,
                    _resourceService.GetString("Please config inventory calculator method."));

            goodsDeliveryNoteMeta = await TrimGoodsDeliveryNoteMeta(goodsDeliveryNoteMeta, exWarehousePriceCalculatorMethod.Value);
            var isWarehouseExists =
                await _warehouseRepository.CheckExists(goodsDeliveryNoteMeta.WarehouseId, goodsDeliveryNoteMeta.TenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Warehouse does not exists. Please check again."));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                goodsDeliveryNoteMeta.WarehouseId, creatorId, goodsDeliveryNoteMeta.TenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails == null || !goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails.Any())
                return new ActionResultResponse(-2, _resourceService.GetString("Please select product."));

            var inValidItems =
                goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails.Count(x => x.Quantity == 0);
            if (inValidItems > 0)
                return new ActionResultResponse(-3, _resourceService.GetString("Product quantity must greater than."));

            // Kiểm tra số lượng tồn và số lượng xuất.
            //var inventoryDailyReportRepository = _serviceProvider.GetRequiredService<IInventoryDailyReportRepository>();
            //foreach (var goodsDeliveryNoteDetailMeta in goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails)
            //{
            //    var openingStock = await inventoryDailyReportRepository.GetOpeningStock(goodsDeliveryNoteMeta.TenantId,
            //        goodsDeliveryNoteMeta.WarehouseId, goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.DeliveryDate, true);
            //    if (openingStock == null || goodsDeliveryNoteDetailMeta.Quantity > openingStock.ClosingStockQuantity)
            //        return new ActionResultResponse(-4, _resourceService.GetString("Quantity must less than or equal in stock quantity."));
            //}

            // Kiểm tra hình thức xuất kho.
            switch (goodsDeliveryNoteMeta.Type)
            {
                case GoodsDeliveryNoteType.Retail:
                    return await InsertByRetail(goodsDeliveryNoteMeta);
                case GoodsDeliveryNoteType.SelfConsumer:
                    return await InsertBySelfConsumer(goodsDeliveryNoteMeta);
                case GoodsDeliveryNoteType.Inventory:
                    return await InsertByInventory(goodsDeliveryNoteMeta);
                case GoodsDeliveryNoteType.Transfer:
                    return await InsertByTransfer(goodsDeliveryNoteMeta);
                case GoodsDeliveryNoteType.Return:
                    return await InsertByReturnSupplier(goodsDeliveryNoteMeta);
                case GoodsDeliveryNoteType.Voided:
                    return await InsertByVoided(goodsDeliveryNoteMeta);
                default:
                    return new ActionResultResponse<string>(-4, _resourceService.GetString("Invalid ex warehouse method."));
            }
        }

        private async Task<ActionResultResponse> InsertByVoided(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            return await InsertGoodsDeliveryNote(goodsDeliveryNoteMeta);
        }

        private async Task<ActionResultResponse> InsertBySelfConsumer(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            // Kiểm tra thông tin phòng ban.
            //var httpClientService = new HttpClientService();
            //var officeInfo = await httpClientService.GetAsync<OfficeInfoViewModel>($"{_apiUrls.HrApiUrl}offices/info/{goodsDeliveryNoteMeta.OfficeId}");
            //if (officeInfo == null)
            //    return new ActionResultResponse(-1, _resourceService.GetString("Office does not exists."));

            //goodsDeliveryNoteMeta.OfficeId = officeInfo.Id;
            //goodsDeliveryNoteMeta.OfficeName = officeInfo.Name;
            return await InsertGoodsDeliveryNote(goodsDeliveryNoteMeta);
        }

        private async Task<ActionResultResponse> InsertByRetail(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            // Trường hợp bán lẻ. Lưu thông tin khách hàng nếu là khách hàng mới. Sau đó thêm vào bảng GoodsDeliveryNoteReceiver
            // (Hiện tại sẽ thêm và check từ bảng GoodsDeliveryNoteReceiver sau này sẽ liên kết và check cả bên Customer.            
            return await InsertGoodsDeliveryNote(goodsDeliveryNoteMeta);
        }

        private async Task<ActionResultResponse> InsertByReturnSupplier(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            var goodsReturnSuppliers = await _goodsReceiptNoteDetailRepository
                .GetsByIds(goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails.Select(x => x.GoodsReceiptNoteDetailCode).ToList());

            if (goodsReturnSuppliers == null || !goodsReturnSuppliers.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("Product not found."),
                    _sharedResourceService.GetString(ErrorMessage.Sorry));

            var groupBySuppliers = goodsReturnSuppliers.GroupBy(x => x.SupplierId);
            foreach (var groupBySupplier in groupBySuppliers)
            {
                var goodsDeliveryNoteMetaBySupplier = new GoodsDeliveryNoteMeta
                {
                    TenantId = goodsDeliveryNoteMeta.TenantId,
                    CreatorAvatar = goodsDeliveryNoteMeta.CreatorAvatar,
                    CreatorId = goodsDeliveryNoteMeta.CreatorId,
                    CreatorFullName = goodsDeliveryNoteMeta.CreatorFullName,
                    ReceiverId = goodsDeliveryNoteMeta.ReceiverId,
                    ReceiverFullName = goodsDeliveryNoteMeta.ReceiverFullName,
                    ReceiverPhoneNumber = goodsDeliveryNoteMeta.ReceiverPhoneNumber,
                    DeliveryNo = await GetDeliveryNo(goodsDeliveryNoteMeta.TenantId, goodsDeliveryNoteMeta.DeliveryDate),
                    DeliveryDate = goodsDeliveryNoteMeta.DeliveryDate,
                    CustomerId = goodsDeliveryNoteMeta.CustomerId,
                    Day = goodsDeliveryNoteMeta.Day,
                    Month = goodsDeliveryNoteMeta.Month,
                    Year = goodsDeliveryNoteMeta.Year,
                    WarehouseId = goodsDeliveryNoteMeta.WarehouseId,
                    SubjectId = groupBySupplier.Key,
                    ForecatstId = goodsDeliveryNoteMeta.ForecatstId,
                    Note = goodsDeliveryNoteMeta.Note,
                    Type = GoodsDeliveryNoteType.Return,
                    Reason = goodsDeliveryNoteMeta.Reason,
                    GoodsDeliveryNoteDetails = goodsDeliveryNoteMeta
                        .GoodsDeliveryNoteDetails
                        .Where(x => groupBySupplier.Select(s => s.GoodsReceiptNoteDetailCode.Trim())
                            .Contains(x.GoodsReceiptNoteDetailCode.Trim())).ToList()
                };
                var result = await InsertGoodsDeliveryNote(goodsDeliveryNoteMetaBySupplier);
                if (result.Code <= 0)
                    return result;
            }

            return new ActionResultResponse(1, _resourceService.GetString(SuccessMessage.AddSuccessful,
                _resourceService.GetString("goods delivery note")));
        }

        private async Task<ActionResultResponse> InsertByTransfer(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            // Kiểm tra kho xuất có tồn tại không.
            if (goodsDeliveryNoteMeta.WarehouseId == goodsDeliveryNoteMeta.ReceptionWarehouseId)
                return new ActionResultResponse(-1, _resourceService.GetString("Warehouse and reception warehouse must difference."));

            // Kiểm tra kho nhập có tồn tại không.
            var receptionWarehouse =
                await _warehouseRepository.GetInfo(goodsDeliveryNoteMeta.ReceptionWarehouseId, goodsDeliveryNoteMeta.TenantId, true);
            if (receptionWarehouse == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Destination warehouse does not exists."));

            // Get inventory calculator method.
            var warehouseCalculatorMethod = await _warehouseConfigRepository.GetInventoryCalculatorMethod(goodsDeliveryNoteMeta.TenantId,
                goodsDeliveryNoteMeta.WarehouseId);
            if (warehouseCalculatorMethod == null)
                return new ActionResultResponse(-3, _resourceService.GetString("Warehouse inventory calculator method is missing."));

            var receptionWarehouseCalculatorMethod = await _warehouseConfigRepository.GetInventoryCalculatorMethod(goodsDeliveryNoteMeta.TenantId,
                goodsDeliveryNoteMeta.ReceptionWarehouseId);
            if (receptionWarehouseCalculatorMethod == null)
                return new ActionResultResponse(-4, _resourceService.GetString("Reception warehouse inventory calculator method is missing."));

            // Gán mã loại phiếu xuất bằng mã của kho nhận.
            goodsDeliveryNoteMeta.SubjectId = receptionWarehouse.Id;
            var result = await InsertGoodsDeliveryNote(goodsDeliveryNoteMeta);
            if (result.Code <= 0)
                return result;

            /*
             TODO: Trường hợp người dùng hiện tại là quản lý kho đích sẽ không cần phê duyệt, ngược lại sẽ gửi thông báo lên quản lý kho đích.
                Sau khi quản lý kho đích duyệt => update lại trạng thái của phiếu xuất đồng thời cập nhật lại trạng thái tồn.  (Phần này làm sau vì liên
                quan đến deadline...
            */

            // Tạo phiếu nhập.
            var goodsDeliveryNoteId = result.Data;
            goodsDeliveryNoteMeta.Id = goodsDeliveryNoteId;
            var resultCreateGoodsReceiptNote = await CreateGoodsReceiptNote(goodsDeliveryNoteMeta);
            if (resultCreateGoodsReceiptNote.Code > 0)
                return result;

            // Trường hợp có lỗi sảy ra. Hủy phiếu xuất và phiếu xuất chi tiết.
            var resultDeleteDetail = await _goodsDeliveryNoteDetailsRepository.ForceDeleteByGoodsDeliveryNoteId(goodsDeliveryNoteId);
            if (resultDeleteDetail > 0)
                await _goodsDeliveryNoteRepository.ForceDelete(goodsDeliveryNoteMeta.TenantId, goodsDeliveryNoteId);

            return resultCreateGoodsReceiptNote;
        }

        private async Task<ActionResultResponse> CreateGoodsReceiptNote(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            var goodsReceiptNoteService = _serviceProvider.GetRequiredService<IGoodsReceiptNoteService>();
            var goodsReceiptNoteMeta = new GoodsReceiptNoteMeta
            {
                EntryDate = goodsDeliveryNoteMeta.DeliveryDate,
                WarehouseId = goodsDeliveryNoteMeta.ReceptionWarehouseId,
                CreatorAvatar = goodsDeliveryNoteMeta.CreatorAvatar,
                CreatorId = goodsDeliveryNoteMeta.CreatorId,
                CreatorFullName = goodsDeliveryNoteMeta.CreatorFullName,
                Day = goodsDeliveryNoteMeta.Day,
                Month = goodsDeliveryNoteMeta.Month,
                Year = goodsDeliveryNoteMeta.DeliveryDate.Year,
                DeliverId = goodsDeliveryNoteMeta.CreatorId,
                DeliverFullName = goodsDeliveryNoteMeta.CreatorFullName,
                Follow = BuiltinFollowType.GoodsReceiptNote,
                InvoiceNo = goodsDeliveryNoteMeta.Id,
                InvoiceDate = goodsDeliveryNoteMeta.DeliveryDate,
                Note = goodsDeliveryNoteMeta.Note,
                Type = GoodsReceiptNoteType.Transfer,
                GoodsReceiptNoteDetails = new List<GoodsReceiptNoteDetailMeta>()
            };

            goodsReceiptNoteMeta.GoodsReceiptNoteDetails.AddRange(goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails
                .Select(x => new GoodsReceiptNoteDetailMeta
                {
                    EntryDate = goodsDeliveryNoteMeta.DeliveryDate,
                    ProductId = x.ProductId,
                    ExpiryDate = x.ExpireDate,
                    ManufactureDate = x.ManufacturingDate,
                    Price = x.Price,
                    LotId = x.LotId,
                    UnitId = x.UnitId,
                    Quantity = x.Quantity
                }));

            return await goodsReceiptNoteService.Insert(goodsDeliveryNoteMeta.TenantId, goodsReceiptNoteMeta);
        }

        private async Task<ActionResultResponse> InsertByInventory(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            // Kiểm tra phiếu kiểm kê có tồn tại không.
            var inventoryExists = await _inventoryRepository.CheckExists(goodsDeliveryNoteMeta.SubjectId, goodsDeliveryNoteMeta.TenantId);
            if (!inventoryExists)
                return new ActionResultResponse<GoodsDeliveryNote>(-1, _resourceService.GetString("Inventory does not exists."));

            return await InsertGoodsDeliveryNote(goodsDeliveryNoteMeta);
        }

        private async Task<ActionResultResponse<string>> InsertGoodsDeliveryNote(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            if (DateTime.Compare(DateTime.Today.AddDays(1).AddMilliseconds(-1), goodsDeliveryNoteMeta.DeliveryDate) < 0)
                return new ActionResultResponse<string>(-5, _resourceService.GetString("Delivery date can not be after current date."));

            var goodsDeliveryNote = new GoodsDeliveryNote
            {
                Id = await GetGoodsDeliveryNoteId(goodsDeliveryNoteMeta.TenantId),
                WarehouseId = goodsDeliveryNoteMeta.WarehouseId,
                CreatorId = goodsDeliveryNoteMeta.CreatorId,
                CreatorAvatar = goodsDeliveryNoteMeta.CreatorAvatar,
                CreatorFullName = goodsDeliveryNoteMeta.CreatorFullName,
                DeliveryNo = await GetDeliveryNo(goodsDeliveryNoteMeta.TenantId, goodsDeliveryNoteMeta.DeliveryDate),
                ReceiverId = goodsDeliveryNoteMeta.ReceiverId,
                DeliveryDate = goodsDeliveryNoteMeta.DeliveryDate,
                Day = goodsDeliveryNoteMeta.Day,
                Month = goodsDeliveryNoteMeta.Month,
                Year = goodsDeliveryNoteMeta.DeliveryDate.Year,
                Note = goodsDeliveryNoteMeta.Note?.Trim(),
                ForecatstId = goodsDeliveryNoteMeta.ForecatstId?.Trim(),
                OfficeId = goodsDeliveryNoteMeta.OfficeId,
                OfficeName = goodsDeliveryNoteMeta.OfficeName,
                Quarter = goodsDeliveryNoteMeta.DeliveryDate.GetQuarter(),
                SubjectId = goodsDeliveryNoteMeta.SubjectId,
                TenantId = goodsDeliveryNoteMeta.TenantId,
                Type = goodsDeliveryNoteMeta.Type,
                Reason = goodsDeliveryNoteMeta.Reason
            };

            var createReceiptNoteDetailCommand = new CreateReceiptNoteCommand();
            var resultAddGoodsDeliveryNoteDetail = await AddGoodsDeliveryNoteDetail();
            if (resultAddGoodsDeliveryNoteDetail.Code <= 0)
                return new ActionResultResponse<string>(resultAddGoodsDeliveryNoteDetail.Code, resultAddGoodsDeliveryNoteDetail.Message);

            goodsDeliveryNote.TotalAmounts = goodsDeliveryNote.GoodsDeliveryNoteDetails.Sum(x => x.Quantity * x.Price);
            var result = await _goodsDeliveryNoteRepository.Insert(goodsDeliveryNote);
            if (result <= 0)
                return new ActionResultResponse<string>(-7, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            await _mediator.Publish(createReceiptNoteDetailCommand);
            return new ActionResultResponse<string>(1,
                _sharedResourceService.GetString(SuccessMessage.AddSuccessful, _resourceService.GetString("goods delivery note")));

            async Task<ActionResultResponse> AddGoodsDeliveryNoteDetail()
            {
                // Nhóm sản phẩm theo mã sản phẩm.
                var groupByProducts = goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails.GroupBy(x => x.ProductId).ToList();
                foreach (var groupProducts in groupByProducts)
                {
                    // Kiểm tra sản phẩm có tồn tại không.
                    var isProductExists = await _productRepository.CheckExists(groupProducts.Key, goodsDeliveryNote.TenantId);
                    if (!isProductExists)
                        return new ActionResultResponse<List<GoodsReceiptNoteDetail>>(-3,
                            _resourceService.GetString("Product does not exists. Please try again."));

                    // Lấy về đơn vị mặc định
                    var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsDeliveryNote.TenantId, groupProducts.Key);
                    if (defaultUnit == null)
                        return new ActionResultResponse(-6, _sharedResourceService.GetString(ErrorMessage.NotExists,
                            _resourceService.GetString("Product unit.")));

                    var inventoryReport = new InventoryReport
                    {
                        TenantId = goodsDeliveryNote.TenantId,
                        ProductId = groupProducts.Key,
                        Date = goodsDeliveryNote.DeliveryDate,
                        WarehouseId = goodsDeliveryNote.WarehouseId,
                        ReceiptId = goodsDeliveryNote.Id,
                        IsReceived = false,
                        ReceiptNo = goodsDeliveryNote.DeliveryNo,
                    };

                    // Kiểm tra lô sản phẩm.
                    var isManagementByLot = await _productRepository.CheckIsManageByLot(goodsDeliveryNote.TenantId, groupProducts.Key);
                    if (!isManagementByLot)
                    {
                        var firstGoodsDeliveryNoteDetailMeta = groupProducts.FirstOrDefault();
                        if (firstGoodsDeliveryNoteDetailMeta == null)
                            continue;

                        var openingStock = await _inventoryReportRepository.GetOpeningStock(
                            goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId,
                            firstGoodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNote.DeliveryDate);
                        if (openingStock == null || openingStock.ClosingStockQuantity <= 0)
                            return new ActionResultResponse<string>(-9,
                                _resourceService.GetString("Product: \"{0}\" out of stock.", firstGoodsDeliveryNoteDetailMeta.ProductName));

                        // Kiểm tra số lượng xuất so với số lượng tồn theo sản phẩm.
                        var index = 1;
                        foreach (var goodsDeliveryNoteDetailMeta in groupProducts)
                        {
                            // Kiểm tra đơn vị tính có tồn tại không.
                            var isUnitExists = await _productUnitRepository.CheckExists(goodsDeliveryNote.TenantId,
                                goodsDeliveryNoteDetailMeta.ProductId,
                                goodsDeliveryNoteDetailMeta.UnitId);
                            if (!isUnitExists)
                                return new ActionResultResponse(-4, _resourceService.GetString("Invalid unit. Please check again."));

                            // Lấy về đơn vị chuyển đổi.
                            decimal conversionValue = 1;
                            if (goodsDeliveryNoteDetailMeta.UnitId != defaultUnit.UnitId)
                            {
                                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsDeliveryNote.TenantId,
                                    groupProducts.Key, goodsDeliveryNoteDetailMeta.UnitId, defaultUnit.UnitId);
                                if (productConversionUnit == null)
                                    return new ActionResultResponse<string>(-7,
                                        _resourceService.GetString("Conversion unit does not exists. Please contact with administrator"));

                                conversionValue = productConversionUnit.Value;
                            }

                            var goodsReceiptNoteDetail = await _goodsReceiptNoteDetailRepository.GetByCode(
                                goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId, goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);
                            if (goodsReceiptNoteDetail == null)
                                return new ActionResultResponse<string>(-8,
                                    _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("product")));

                            // Thông tin chi tiết phiếu nhập
                            var goodsDeliveryNoteDetail = new GoodsDeliveryNoteDetail
                            {
                                TenantId = goodsDeliveryNoteMeta.TenantId,
                                WarehouseId = goodsDeliveryNoteMeta.WarehouseId,
                                ProductId = goodsDeliveryNoteDetailMeta.ProductId,
                                UnitId = goodsDeliveryNoteDetailMeta.UnitId,
                                CreatorId = goodsDeliveryNoteMeta.CreatorId,
                                CreatorFullName = goodsDeliveryNoteMeta.CreatorFullName,
                                DiscountByPercent = goodsDeliveryNoteDetailMeta.DiscountByPercent,
                                DiscountPrice = goodsDeliveryNoteDetailMeta.DiscountPrice,
                                LotId = openingStock.LotId,
                                Note = goodsDeliveryNoteMeta.Note,
                                GoodsDeliveryNoteId = goodsDeliveryNote.Id,
                                Quantity = goodsDeliveryNoteDetailMeta.Quantity,
                                ConversionUnitGroupId = await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(goodsDeliveryNote.TenantId,
                                    goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNote.DeliveryDate),
                                ConversionValue = conversionValue,
                                Price = openingStock.ExWarehousePrice,
                                GoodsReceiptNoteCode = goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode
                            };
                            goodsDeliveryNoteDetailMeta.ConversionQuantity =
                                goodsDeliveryNoteDetail.Quantity * conversionValue;
                            goodsDeliveryNote.GoodsDeliveryNoteDetails.Add(goodsDeliveryNoteDetail);

                            // Lấy về đơn vị chuyển đổi.
                            inventoryReport.ProductUnitId = openingStock.ProductUnitId;
                            index++;
                        }

                        // Lấy về tổng số sản phẩm xuất theo lô.
                        var totals = groupProducts.Sum(x => x.ConversionQuantity);
                        if (totals > openingStock.ClosingStockQuantity)
                            return new ActionResultResponse<string>(-10,
                                _resourceService.GetString("Product: \"{0}\" out of stock.", firstGoodsDeliveryNoteDetailMeta.ProductName));

                        // Nhóm sản phẩm theo mã phiếu nhập.
                        var groupProductByGoodsReceiptNoteDetailCode =
                            groupProducts.GroupBy(x => x.GoodsReceiptNoteDetailCode).ToList();

                        if (groupProductByGoodsReceiptNoteDetailCode.Any())
                        {
                            foreach (var groupGoodsDeliveryNoteDetailMeta in groupProductByGoodsReceiptNoteDetailCode)
                            {
                                var goodsDeliveryNoteDetailMeta = groupGoodsDeliveryNoteDetailMeta.FirstOrDefault();
                                if (goodsDeliveryNoteDetailMeta == null)
                                    continue;

                                inventoryReport.InventoryReportDetails.Add(new InventoryReportDetail
                                {
                                    ProductId = goodsDeliveryNoteDetailMeta.ProductId,
                                    LotId = goodsDeliveryNoteDetailMeta.LotId,
                                    Note = goodsDeliveryNote.Note,
                                    ProductUnitId = defaultUnit.Id,
                                    Quantity = groupGoodsDeliveryNoteDetailMeta.Sum(x => x.ConversionQuantity),
                                    Price = openingStock.ExWarehousePrice,
                                    GoodsReceiptNoteDetailCode = goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode,
                                    Date = goodsDeliveryNote.DeliveryDate,
                                    ReceiptId = goodsDeliveryNote.Id,
                                    TenantId = goodsDeliveryNote.TenantId,
                                    WarehouseId = goodsDeliveryNote.WarehouseId,
                                });
                            }
                        }

                        createReceiptNoteDetailCommand.InventoryReports.Add(inventoryReport);
                    }
                    else
                    {
                        // Nhóm sản phẩm theo lô.
                        var groupByLots = groupProducts.GroupBy(x => x.LotId).ToList();
                        var index = 1;
                        foreach (var groupByLot in groupByLots)
                        {
                            var firstProductByLot = groupByLot.FirstOrDefault();
                            if (firstProductByLot == null)
                                continue;

                            if (string.IsNullOrEmpty(groupByLot.Key))
                                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseEnter,
                                        _resourceService.GetString("Lot number")));

                            // Kiểm tra số lượng xuất so với số lượng tồn theo sản phẩm và theo lô.
                            var openingStock = await _inventoryReportRepository.GetOpeningStockByLot(
                                goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId, groupProducts.Key,
                                groupByLot.Key, goodsDeliveryNote.DeliveryDate);
                            if (openingStock == null || openingStock.ClosingStockQuantity <= 0)
                                return new ActionResultResponse<string>(-3,
                                    _resourceService.GetString("Product: \"{0}\" out of stock.",
                                        firstProductByLot.ProductName));

                            var code = $"{goodsDeliveryNote.Id}_{index.ToAlphabetId(0, 3)}";
                            foreach (var goodsDeliveryNoteDetailMeta in groupByLot)
                            {
                                // Kiểm tra đơn vị tính có tồn tại không.
                                var isUnitExists = await _productUnitRepository.CheckExists(goodsDeliveryNote.TenantId,
                                    goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.UnitId);
                                if (!isUnitExists)
                                    return new ActionResultResponse(-4,
                                        _resourceService.GetString("Invalid unit. Please check again."));

                                // Lấy về đơn vị chuyển đổi.
                                decimal conversionValue = 1;
                                if (goodsDeliveryNoteDetailMeta.UnitId != defaultUnit.UnitId)
                                {
                                    var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsDeliveryNote.TenantId,
                                        groupProducts.Key, goodsDeliveryNoteDetailMeta.UnitId, defaultUnit.UnitId);
                                    if (productConversionUnit == null)
                                        return new ActionResultResponse<string>(-5,
                                            _resourceService.GetString("Conversion unit does not exists. Please contact with administrator"));

                                    conversionValue = productConversionUnit.Value;
                                }

                                // Thông tin chi tiết phiếu nhập                                
                                var goodsDeliveryNoteDetail = new GoodsDeliveryNoteDetail
                                {
                                    TenantId = goodsDeliveryNoteMeta.TenantId,
                                    WarehouseId = goodsDeliveryNoteMeta.WarehouseId,
                                    ProductId = goodsDeliveryNoteDetailMeta.ProductId,
                                    UnitId = goodsDeliveryNoteDetailMeta.UnitId,
                                    CreatorId = goodsDeliveryNoteMeta.CreatorId,
                                    CreatorFullName = goodsDeliveryNoteMeta.CreatorFullName,
                                    DiscountByPercent = goodsDeliveryNoteDetailMeta.DiscountByPercent,
                                    DiscountPrice = goodsDeliveryNoteDetailMeta.DiscountPrice,
                                    LotId = goodsDeliveryNoteDetailMeta.LotId,
                                    Note = goodsDeliveryNoteMeta.Note,
                                    GoodsDeliveryNoteId = goodsDeliveryNote.Id,
                                    Quantity = goodsDeliveryNoteDetailMeta.Quantity,
                                    ConversionUnitGroupId =
                                        await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(
                                            goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNote.DeliveryDate),
                                    ConversionValue = conversionValue,
                                    Price = goodsDeliveryNoteDetailMeta.Price
                                };

                                if (goodsDeliveryNote.Type != GoodsDeliveryNoteType.Inventory)
                                {
                                    var goodsReceiptNoteDetail =
                                        await _goodsReceiptNoteDetailRepository.GetProductInfoByCode(
                                            goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId,
                                            goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);
                                    if (goodsReceiptNoteDetail == null)
                                        return new ActionResultResponse<string>(-6,
                                            _sharedResourceService.GetString(ErrorMessage.NotExists,
                                                _resourceService.GetString("product")));

                                    goodsDeliveryNoteDetail.GoodsReceiptNoteCode = goodsReceiptNoteDetail.Code;

                                    // Lấy về tổng số sản phẩm xuất thêo mã sản phẩm trên chi tiét phiếu nhập.
                                    //var deliveryQuantities = await _goodsDeliveryNoteDetailsRepository.GetQuantiesByCode(
                                    //    goodsDeliveryNote.TenantId,
                                    //    goodsDeliveryNote.WarehouseId,
                                    //    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode, string.Empty);

                                    //var receivedQuantities = await _goodsReceiptNoteDetailRepository.GetQuantitiesByCode(
                                    //    goodsDeliveryNote.TenantId,
                                    //    goodsDeliveryNote.WarehouseId,
                                    //    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);

                                    //if (goodsDeliveryNoteDetailMeta.Quantity * conversionValue > receivedQuantities - deliveryQuantities)
                                    //    return new ActionResultResponse<string>(-7,
                                    //        _resourceService.GetString("Product: \"{0}\" out of stock.",
                                    //            groupProducts.FirstOrDefault()?.ProductName));

                                    var openingStockByCode = await _inventoryReportRepository.GetOpeningStockByCode(
                                        goodsDeliveryNote.TenantId,
                                        goodsDeliveryNote.WarehouseId,
                                        goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode,
                                        goodsDeliveryNote.DeliveryDate);
                                    //var openingStockByLot = await _inventoryReportRepository.GetOpeningStockByLot(
                                    //    goodsDeliveryNote.TenantId,
                                    //    goodsDeliveryNote.WarehouseId, goodsDeliveryNoteDetail.ProductId,
                                    //    goodsDeliveryNoteDetail.LotId,
                                    //    goodsDeliveryNote.DeliveryDate);
                                    if (openingStockByCode == null)
                                        return new ActionResultResponse<string>(-8,
                                            _resourceService.GetString("Product: \"{0}\" out of stock.",
                                                groupProducts.FirstOrDefault()?.ProductName));

                                    goodsDeliveryNoteDetail.Price = openingStockByCode.ExWarehousePrice;
                                }

                                goodsDeliveryNoteDetailMeta.ConversionQuantity =
                                    goodsDeliveryNoteDetail.Quantity * conversionValue;
                                goodsDeliveryNote.GoodsDeliveryNoteDetails.Add(goodsDeliveryNoteDetail);
                            }

                            // Lấy về tổng số sản phẩm xuất theo lô.
                            var totals = groupByLot.Sum(x => x.ConversionQuantity);
                            if (totals > openingStock.ClosingStockQuantity)
                                return new ActionResultResponse<string>(-9,
                                    _resourceService.GetString("Product: \"{0}\" out of stock.", firstProductByLot.ProductName));

                            inventoryReport.ProductUnitId = openingStock.ProductUnitId;
                            var totalAmounts = groupByLot.Sum(x => x.ConversionQuantity * x.Price);
                            var quantities = groupByLot.Sum(x => x.ConversionQuantity);

                            // Nhóm sản phẩm theo mã phiếu nhập.
                            var groupProductByGoodsReceiptNoteDetailId =
                                groupByLot.GroupBy(x => x.GoodsReceiptNoteDetailCode).ToList();

                            if (groupProductByGoodsReceiptNoteDetailId.Any())
                            {
                                foreach (var groupGoodsDeliveryNoteDetailMeta in groupProductByGoodsReceiptNoteDetailId)
                                {
                                    var goodsDeliveryNoteDetailMeta = groupGoodsDeliveryNoteDetailMeta.FirstOrDefault();
                                    if (goodsDeliveryNoteDetailMeta == null)
                                        continue;

                                    inventoryReport.InventoryReportDetails.Add(new InventoryReportDetail
                                    {
                                        ProductId = goodsDeliveryNoteDetailMeta.ProductId,
                                        LotId = goodsDeliveryNoteDetailMeta.LotId,
                                        Note = goodsDeliveryNote.Note,
                                        ProductUnitId = defaultUnit.Id,
                                        Quantity = groupGoodsDeliveryNoteDetailMeta.Sum(x => x.ConversionQuantity),
                                        Price = decimal.Round(totalAmounts / quantities, 2),
                                        GoodsReceiptNoteDetailCode = goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode,
                                        Date = goodsDeliveryNote.DeliveryDate,
                                        ReceiptId = goodsDeliveryNote.Id,
                                        TenantId = goodsDeliveryNote.TenantId,
                                        WarehouseId = goodsDeliveryNote.WarehouseId,
                                    });
                                }
                            }

                            //                            inventoryReport.InventoryReportDetails.Add(new InventoryReportDetail
                            //                            {
                            //                                Quantity = groupByLot.Sum(x => x.ConversionQuantity),
                            //                                ProductId = groupProducts.Key,
                            //                                ProductUnitId = defaultUnit.Id,
                            //                                LotId = groupByLot.Key,
                            //                                Price = decimal.Round(totalAmounts / quantities, 2),
                            //                                Note = goodsDeliveryNoteMeta.Note,
                            //                                GoodsReceiptNoteDetailCode = code,
                            //                                Date = goodsDeliveryNote.DeliveryDate,
                            //                                ReceiptId = goodsDeliveryNote.Id,
                            //                                TenantId = goodsDeliveryNote.TenantId,
                            //                                WarehouseId = goodsDeliveryNote.WarehouseId
                            //                            });
                            index++;
                        }

                        createReceiptNoteDetailCommand.InventoryReports.Add(inventoryReport);
                    }
                }
                return new ActionResultResponse(1, _resourceService.GetString("Add new goods receipt note successful."));
            }
        }

        //private async Task UpdateDeliveryNoteTotalItemAndAmount(string id)
        //{
        //    var totalItems = await _goodsDeliveryNoteDetailsRepository.CountByByGoodsDeliveryNoteId(id);
        //    var totalAmounts = await _goodsDeliveryNoteDetailsRepository.GetTotalAmountByByGoodsDeliveryNoteId(id);

        //    await _goodsDeliveryNoteRepository.UpdateTotalItems(id, totalItems);
        //    await _goodsDeliveryNoteRepository.UpdateTotalAmount(id, totalAmounts);
        //}

        private async Task<string> GetDeliveryNo(string tenantId, DateTime deliveryDate)
        {
            var count = await _goodsDeliveryNoteRepository.CountByDate(tenantId, deliveryDate);
            while (true)
            {
                var id = $"{deliveryDate:yy}{deliveryDate.Month}{deliveryDate.Day}{count.ToAlphabetId(0, 5)}";
                var isIdExists = await _goodsDeliveryNoteRepository.CheckDeliveryNoExists(tenantId, id);
                if (!isIdExists) return id;
                count++;
            }
        }

        private async Task<string> GetReceiverId(string tenantId, string receiverId, string receiverFullName, string receiverPhoneNumber,
            string customerId)
        {
            receiverFullName = receiverFullName?.Trim();
            receiverPhoneNumber = receiverPhoneNumber?.Trim();
            if (string.IsNullOrEmpty(receiverId))
            {
                // Kiểm tra người giao hàng đã tồn tại chưa.
                var receiver = await _goodsDeliveryNoteReceiverRepository.GetInfo(receiverFullName, receiverPhoneNumber);
                if (receiver == null)
                    return await AddNewReceiver();

                // Cập nhật lại số điện thoại người giao hàng trong trường hợp thay đổi.
                if (receiver.PhoneNumber == receiverPhoneNumber)
                    return receiver.Id;

                receiver.PhoneNumber = receiverPhoneNumber;
                await _goodsDeliveryNoteReceiverRepository.Update(receiver);
                return receiver.Id;
            }
            else
            {
                var receiver = await _goodsDeliveryNoteReceiverRepository.GetInfo(tenantId, receiverId);
                if (receiver == null)
                    return await AddNewReceiver();

                // Cập nhật lại số điện thoại người giao hàng trong trường hợp thay đổi.
                if (receiver.PhoneNumber == receiverPhoneNumber)
                    return receiver.Id;

                receiver.PhoneNumber = receiverPhoneNumber;
                await _goodsDeliveryNoteReceiverRepository.Update(receiver);
                return receiver.Id;
            }

            async Task<string> AddNewReceiver()
            {
                receiverId = string.IsNullOrEmpty(receiverId) ? Guid.NewGuid().ToString() : receiverId;
                var deliver = new GoodsDeliveryNoteReceiver
                {
                    Id = receiverId,
                    FullName = receiverFullName,
                    PhoneNumber = receiverPhoneNumber,
                    UnsignName = $"{receiverFullName.StripVietnameseChars().ToUpper()} {receiverPhoneNumber}",
                    TenantId = tenantId,
                    CustomerId = customerId
                };

                await _goodsDeliveryNoteReceiverRepository.Insert(deliver);
                return receiverId;
            }
        }

        private async Task<string> GetGoodsDeliveryNoteId(string tenantId)
        {
            var count = await _goodsDeliveryNoteRepository.Count(tenantId);
            while (true)
            {
                // Kiểm tra mã đã tồn tại chưa.
                var id = count.ToAlphabetId(2, 4);
                var isExists = await _goodsDeliveryNoteRepository.CheckExists(tenantId, id);
                if (!isExists) return id;
                count++;
            }
        }

        public async Task<ActionResultResponse<string>> Update(string id, GoodsDeliveryNoteMeta goodsDeliveryNoteMeta,
            string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar)
        {
            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                goodsDeliveryNoteMeta.WarehouseId, lastUpdateUserId, goodsDeliveryNoteMeta.TenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<string>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var info = await _goodsDeliveryNoteRepository.GetInfo(goodsDeliveryNoteMeta.TenantId, id);
            if (info == null)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Goods delivery note does not exists."));

            if (info.TenantId != goodsDeliveryNoteMeta.TenantId)
                return new ActionResultResponse<string>(-2,
                    _resourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != goodsDeliveryNoteMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _resourceService.GetString(
                        "The goods delivery note already updated by other people. you are not allowed to edit the goods delivery note information."));

            var oldDeliveryDate = info.DeliveryDate;
            var oldType = info.Type;
            if (DateTime.Compare(oldDeliveryDate, goodsDeliveryNoteMeta.DeliveryDate) != 0)
            {
                info.DeliveryDate = goodsDeliveryNoteMeta.DeliveryDate;
                info.Day = (byte)goodsDeliveryNoteMeta.DeliveryDate.Day;
                info.Month = (byte)goodsDeliveryNoteMeta.DeliveryDate.Month;
                info.Year = goodsDeliveryNoteMeta.DeliveryDate.Year;
                info.Quarter = goodsDeliveryNoteMeta.DeliveryDate.GetQuarter();
            }

            info.Reason = goodsDeliveryNoteMeta.Reason;
            info.ReceiverId = goodsDeliveryNoteMeta.ReceiverId;
            info.OfficeId = goodsDeliveryNoteMeta.OfficeId;
            info.OfficeName = goodsDeliveryNoteMeta.OfficeName;
            info.Note = goodsDeliveryNoteMeta.Note;
            info.ForecatstId = goodsDeliveryNoteMeta.ForecatstId;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            var result = await _goodsDeliveryNoteRepository.Update(info);
            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    result == 0 ? _sharedResourceService.GetString(ErrorMessage.NothingChanges)
                    : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong),
                      string.Empty, info.ConcurrencyStamp);

            await _mediator.Publish(new UpdateGoodsDeliveryNoteCommand
            {
                TenantId = info.TenantId,
                WarehouseId = info.WarehouseId,
                GoodsDeliveryNoteId = info.Id,
                OldDeliveryDate = oldDeliveryDate,
                NewDeliveryDate = info.DeliveryDate,
                OldType = oldType,
                NewType = info.Type
            });
            return new ActionResultResponse<string>(result, _resourceService.GetString(SuccessMessage.UpdateSuccessful,
                _resourceService.GetString("goods delivery note")));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var info = await _goodsDeliveryNoteRepository.GetInfo(tenantId, id);
            if (info == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Goods delivery note does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _goodsDeliveryNoteRepository.Delete(tenantId, id);
            await _goodsDeliveryNoteDetailsRepository.DeleteByGoodsDeliveryNoteId(id);
            return new ActionResultResponse(result, _resourceService.GetString("Delete goods delivery note successful."));
        }

        public async Task<ActionResultResponse<GoodsDeliveryNoteDetailViewModel>> GetDetail(string tenantId, string languageId, string id)
        {
            var goodsDeliveryNote = await _goodsDeliveryNoteRepository.GetDetail(tenantId, id);
            if (goodsDeliveryNote == null)
                return new ActionResultResponse<GoodsDeliveryNoteDetailViewModel>(-1,
                    _resourceService.GetString("Goods delivery note does note exists. Please check again."));

            switch (goodsDeliveryNote.Type)
            {
                case GoodsDeliveryNoteType.Transfer:
                    var warehouseInfo = await _warehouseRepository.GetInfo(goodsDeliveryNote.SubjectId, tenantId);
                    if (warehouseInfo == null)
                        return new ActionResultResponse<GoodsDeliveryNoteDetailViewModel>(-1,
                            _resourceService.GetString("Receiver warehouse does note exists. Please check again."));

                    goodsDeliveryNote.ReceptionWarehouseId = warehouseInfo.Id;
                    goodsDeliveryNote.ReceptionWarehouseName = warehouseInfo.Name;
                    break;
                case GoodsDeliveryNoteType.Return:
                    // Lấy về thông tin nhà cung cấp.
                    var supplierInfo =
                        await _supplierRepository.GetInfo(goodsDeliveryNote.SubjectId, goodsDeliveryNote.TenantId, true);
                    goodsDeliveryNote.SupplierName = supplierInfo?.Name;
                    break;
                case GoodsDeliveryNoteType.SelfConsumer:

                    break;
            }

            goodsDeliveryNote.GoodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailsRepository.GetsByGoodsDeliveryNoteId(tenantId, languageId,
                id, string.Empty, 1, short.MaxValue, out int totalRows);
            if (goodsDeliveryNote.GoodsDeliveryNoteDetails != null && goodsDeliveryNote.GoodsDeliveryNoteDetails.Any())
            {
                foreach (var goodsDeliveryNoteDetail in goodsDeliveryNote.GoodsDeliveryNoteDetails)
                {
                    //if (!string.IsNullOrEmpty(goodsDeliveryNoteDetail.LotId))
                    //{
                    //    var goodsReceiptNoteDetail =
                    //        await _goodsReceiptNoteDetailRepository.GetQuantitiesByCode(goodsDeliveryNote.TenantId,
                    //            goodsDeliveryNote.WarehouseId,
                    //            goodsDeliveryNoteDetail.GoodsReceiptNoteDetailCode);

                    //    var deliveryQuantities =
                    //        await _goodsDeliveryNoteDetailsRepository.GetQuantiesByCode(tenantId, goodsDeliveryNote.WarehouseId,
                    //            goodsDeliveryNoteDetail.GoodsReceiptNoteDetailCode, goodsDeliveryNote.Id);
                    //    goodsDeliveryNoteDetail.InventoryQuantity = goodsReceiptNoteDetail - deliveryQuantities;
                    //}
                    //else
                    //{
                    // Lấy về tồn đầu kỳ.
                    //var openingStock = await _inventoryReportRepository.GetOpeningStockByCode(
                    //    goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId,
                    //    goodsDeliveryNoteDetail.GoodsReceiptNoteDetailCode,
                    //    goodsDeliveryNote.DeliveryDate);
                    var openingStock = !string.IsNullOrEmpty(goodsDeliveryNoteDetail.LotId)
                        ? await _inventoryReportRepository.GetOpeningStockByLot(goodsDeliveryNote.TenantId,
                            goodsDeliveryNote.WarehouseId,
                            goodsDeliveryNoteDetail.ProductId, goodsDeliveryNoteDetail.LotId,
                            goodsDeliveryNote.DeliveryDate)
                        : await _inventoryReportRepository.GetOpeningStock(goodsDeliveryNote.TenantId,
                            goodsDeliveryNote.WarehouseId,
                            goodsDeliveryNoteDetail.ProductId, goodsDeliveryNote.DeliveryDate);

                    goodsDeliveryNoteDetail.InventoryQuantity = openingStock?.ClosingStockQuantity ?? 0;
                    //}
                    goodsDeliveryNoteDetail.Units = await _productUnitRepository.GetByProductId(tenantId, goodsDeliveryNoteDetail.ProductId);
                }
            }
            return new ActionResultResponse<GoodsDeliveryNoteDetailViewModel>
            {
                Data = goodsDeliveryNote
            };
        }

        public async Task<SearchResult<GoodsDeliveryNotesDetailSearchViewModel>> SearchDetail(string tenantId, string languageId, string goodsDeliveryNoteId,
               string keyword, int page, int pageSize)
        {
            return new SearchResult<GoodsDeliveryNotesDetailSearchViewModel>
            {
                Items = await _goodsDeliveryNoteDetailsRepository.GetsByGoodsDeliveryNoteId(tenantId, languageId, goodsDeliveryNoteId, keyword, page,
                pageSize, out int totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<GoodsDeliveryNotesViewModel>> Search(string tenantId, string userId, string keyword, GoodsDeliveryNoteType? type,
            string warehouseId, DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        {
            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            if (!string.IsNullOrEmpty(warehouseId))
            {
                var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                    warehouseId, userId, tenantId);
                if (!isWarehouseManagement)
                    return new SearchResult<GoodsDeliveryNotesViewModel>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));
            }

            var items = await _goodsDeliveryNoteRepository.Search(tenantId, userId, keyword, type, warehouseId,
                fromDate, toDate, page, pageSize, out int totalRows);
            return new SearchResult<GoodsDeliveryNotesViewModel>(items, totalRows);
        }

        public async Task<ActionResultResponse<dynamic>> InsertDetail(string tenantId, string goodsDeliveryNoteId,
            GoodsDeliveryNoteDetailMeta goodsDeliveryNoteDetailMeta, string creatorId, string creatorFullName, string creatorAvatar)
        {
            var goodsDeliveryNote = await _goodsDeliveryNoteRepository.GetInfo(tenantId, goodsDeliveryNoteId, true);
            if (goodsDeliveryNote == null)
                return new ActionResultResponse<dynamic>(-1,
                    _resourceService.GetString("Goods delivery note does not exists. Please check again."));

            var isManagementByLot = await _productRepository.CheckIsManageByLot(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId);
            if (isManagementByLot && string.IsNullOrEmpty(goodsDeliveryNoteDetailMeta.LotId))
                return new ActionResultResponse<dynamic>(-2,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseEnter,
                        _resourceService.GetString("Lot number")));

            // Lấy về đơn vị mặc định
            var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId);
            if (defaultUnit == null)
                return new ActionResultResponse<dynamic>(-3, _sharedResourceService.GetString(ErrorMessage.NotExists,
                    _resourceService.GetString("Product unit.")));

            // Kiểm tra đơn vị tính có tồn tại không.
            var isUnitExists = await _productUnitRepository.CheckExists(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId,
                goodsDeliveryNoteDetailMeta.UnitId);
            if (!isUnitExists)
                return new ActionResultResponse<dynamic>(-4, _resourceService.GetString("Invalid unit. Please check again."));

            // Lấy về đơn vị chuyển đổi.
            decimal conversionValue = 1;
            if (goodsDeliveryNoteDetailMeta.UnitId != defaultUnit.UnitId)
            {
                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsDeliveryNote.TenantId,
                    goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.UnitId, defaultUnit.UnitId);
                if (productConversionUnit == null)
                    return new ActionResultResponse<dynamic>(-5,
                        _resourceService.GetString("Conversion unit does not exists. Please contact with administrator"));

                conversionValue = productConversionUnit.Value;
            }

            var goodsReceiptNoteDetail =
                await _goodsReceiptNoteDetailRepository.GetProductInfoByCode(
                    goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);
            if (goodsReceiptNoteDetail == null)
                return new ActionResultResponse<dynamic>(-6, _sharedResourceService.GetString(ErrorMessage.NotExists,
                        _resourceService.GetString("product")));

            if (isManagementByLot)
            {
                // Lấy về tồn kho theo lô.
                var openingStockByLot = await _inventoryReportRepository.GetOpeningStockByLot(tenantId,
                    goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.LotId,
                    goodsDeliveryNote.DeliveryDate);
                if (openingStockByLot.ClosingStockQuantity <= 0)
                    return new ActionResultResponse<dynamic>(-7,
                        _resourceService.GetString("Product: \"{0}\" out of stock", goodsDeliveryNoteDetailMeta.ProductName));

                // Lấy về tổng sản phẩm theo phiếu nhập.
                var receivedQuantities = await _goodsReceiptNoteDetailRepository.GetQuantitiesByCode(tenantId,
                    goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);

                // Tổng xuất theo mã sản phẩm thuộc phiếu nhập.
                var deliveryQuantities = await _goodsDeliveryNoteDetailsRepository.GetQuantiesByCode(tenantId,
                    goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode, string.Empty);

                if (goodsDeliveryNoteDetailMeta.Quantity * conversionValue > (receivedQuantities - deliveryQuantities))
                {
                    return new ActionResultResponse<dynamic>(-8,
                        _resourceService.GetString("Product: \"{0}\" out of stock", goodsDeliveryNoteDetailMeta.ProductName));
                }
            }
            else
            {
                var openingStock = await _inventoryReportRepository.GetOpeningStock(goodsDeliveryNote.TenantId, goodsDeliveryNote.WarehouseId,
                        goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNote.DeliveryDate);
                if (openingStock == null)
                    return new ActionResultResponse<dynamic>(-9,
                        _resourceService.GetString("Product: \"{0}\" out of stock", goodsDeliveryNoteDetailMeta.ProductName));

                // Lấy về tổng số sản phẩm xuất theo lô.
                var totals = await _goodsDeliveryNoteDetailsRepository.GetTotalQuantitiesByProductIdAndLotId(tenantId,
                    goodsDeliveryNote.WarehouseId, goodsDeliveryNote.Id, goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.LotId,
                    string.Empty);

                if (totals + goodsDeliveryNoteDetailMeta.Quantity * conversionValue > openingStock.ClosingStockQuantity)
                    return new ActionResultResponse<dynamic>(-10,
                        _resourceService.GetString("Product: \"{0}\" out of stock", goodsDeliveryNoteDetailMeta.ProductName));
            }

            var goodsDeliveryNoteDetail = new GoodsDeliveryNoteDetail
            {
                ProductId = goodsDeliveryNoteDetailMeta.ProductId,
                Quantity = goodsDeliveryNoteDetailMeta.Quantity,
                UnitId = goodsDeliveryNoteDetailMeta.UnitId,
                Price = goodsDeliveryNoteDetailMeta.Price,
                DiscountPrice = goodsDeliveryNoteDetailMeta.DiscountPrice,
                DiscountByPercent = goodsDeliveryNoteDetailMeta.DiscountByPercent,
                GoodsDeliveryNoteId = goodsDeliveryNote.Id,
                RecommendedQuantity = goodsDeliveryNoteDetailMeta.RecommendedQuantity,
                LotId = goodsDeliveryNoteDetailMeta.LotId,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                ConversionValue = conversionValue,
                ConversionUnitGroupId = await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(
                    goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNote.DeliveryDate),
                GoodsReceiptNoteCode = goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode,
                TenantId = goodsDeliveryNote.TenantId,
                WarehouseId = goodsDeliveryNote.WarehouseId,
                Note = goodsDeliveryNote.Note
            };

            var result = await _goodsDeliveryNoteDetailsRepository.Insert(goodsDeliveryNoteDetail);
            if (result > 0)
            {
                // Update total goods delivery note total items.
                await UpdateGoodsDeliveryNoteTotalItem(goodsDeliveryNote.TenantId, goodsDeliveryNote.Id);

                // Đồng bộ phiếu xuất
                await _mediator.Publish(new CreateReceiptNoteDetailCommand
                {
                    TenantId = goodsDeliveryNote.TenantId,
                    ReceiptId = goodsDeliveryNote.Id,
                    Date = goodsDeliveryNote.DeliveryDate,
                    IsReceived = false,
                    ProductId = goodsReceiptNoteDetail.ProductId,
                    WarehouseId = goodsDeliveryNoteDetail.WarehouseId,
                    Note = goodsDeliveryNoteDetail.Note,
                    ReceiptDetailId = goodsDeliveryNoteDetail.Id,
                    LotId = goodsDeliveryNoteDetail.LotId,
                    GoodsReceiptNoteDetailCode = goodsDeliveryNoteDetail.GoodsReceiptNoteCode,
                    ProductUnitId = defaultUnit.Id
                });
            }

            return new ActionResultResponse<dynamic>(result, result > 0
                ? _resourceService.GetString("Add product successful.")
                : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong), "", result > 0 ? new
                {
                    Id = goodsDeliveryNoteDetail.Id,
                    ConcurrencyStamp = goodsDeliveryNoteDetail.ConcurrencyStamp
                } : null);

        }

        private async Task<string> GetGoodsDeliveryNoteDetailId(string goodsDeliveryNoteId)
        {
            var count = await _goodsDeliveryNoteDetailsRepository.CountByByGoodsDeliveryNoteId(goodsDeliveryNoteId);
            while (true)
            {
                var id = $"{goodsDeliveryNoteId}_{(count + 1).ToAlphabetId(0, 3)}";
                var isExists = await _goodsDeliveryNoteDetailsRepository.CheckExists(id);
                if (!isExists)
                    return id;
                count++;
            }
        }

        public async Task<ActionResultResponse<string>> UpdateDetail(string tenantId, string goodsDeliveryNoteId, string id,
            GoodsDeliveryNoteDetailMeta goodsDeliveryNoteDetailMeta, string userId, string fullName, string avatar)
        {
            var goodsDeliveryNoteDetail = await _goodsDeliveryNoteDetailsRepository.GetInfoByTenant(tenantId, id);
            if (goodsDeliveryNoteDetail == null)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Proudct does not exists.", ErrorMessage.Sorry));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                goodsDeliveryNoteDetail.WarehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<string>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (goodsDeliveryNoteDetail.ConcurrencyStamp != goodsDeliveryNoteDetailMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ErrorMessage.AlreadyUpdatedByAnother));

            var goodsDeliveryNote =
                await _goodsDeliveryNoteRepository.GetInfo(tenantId, goodsDeliveryNoteDetail.GoodsDeliveryNoteId);
            if (goodsDeliveryNote == null)
                return new ActionResultResponse<string>(-3, _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Goods delivery note.")));

            var isManagementByLot = await _productRepository.CheckIsManageByLot(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId);
            if (isManagementByLot && string.IsNullOrEmpty(goodsDeliveryNoteDetailMeta.LotId))
                return new ActionResultResponse<string>(-4,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseEnter,
                        _resourceService.GetString("Lot number")));

            var oldUnitId = goodsDeliveryNoteDetail.UnitId;
            var oldQuantity = goodsDeliveryNoteDetail.Quantity;

            if (oldUnitId != goodsDeliveryNoteDetailMeta.UnitId?.Trim())
            {
                // Lấy về đơn vị mặc định
                var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId);
                if (defaultUnit == null)
                    return new ActionResultResponse<string>(-6, _sharedResourceService.GetString(ErrorMessage.NotExists,
                        _resourceService.GetString("Product unit.")));

                // Kiểm tra đơn vị tính có tồn tại không.
                var isUnitExists = await _productUnitRepository.CheckExists(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId,
                    goodsDeliveryNoteDetailMeta.UnitId);
                if (!isUnitExists)
                    return new ActionResultResponse<string>(-7, _resourceService.GetString("Invalid unit. Please check again."));

                // Lấy về đơn vị chuyển đổi.
                decimal conversionValue = 1;
                if (goodsDeliveryNoteDetailMeta.UnitId != defaultUnit.UnitId)
                {
                    var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsDeliveryNote.TenantId,
                        goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.UnitId, defaultUnit.UnitId);
                    if (productConversionUnit == null)
                        return new ActionResultResponse<string>(-8,
                            _resourceService.GetString("Conversion unit does not exists. Please contact with administrator"));

                    conversionValue = productConversionUnit.Value;
                }

                goodsDeliveryNoteDetail.UnitId = goodsDeliveryNoteDetailMeta.UnitId;
                goodsDeliveryNoteDetail.ConversionValue = conversionValue;
                goodsDeliveryNoteDetail.ConversionUnitGroupId =
                    await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(
                        goodsDeliveryNote.TenantId, goodsDeliveryNoteDetailMeta.ProductId,
                        goodsDeliveryNote.DeliveryDate);
            }

            if (goodsDeliveryNoteDetailMeta.Quantity != oldQuantity)
            {
                goodsDeliveryNoteDetail.Quantity = goodsDeliveryNoteDetailMeta.Quantity;
            }

            if (isManagementByLot)
            {
                // Lấy về tổng sản phẩm theo phiếu nhập.
                var receivedQuantities = await _goodsReceiptNoteDetailRepository.GetQuantitiesByCode(tenantId,
                    goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);

                // Tổng xuất theo mã sản phẩm thuộc phiếu nhập.
                var deliveryQuantities = await _goodsDeliveryNoteDetailsRepository.GetQuantiesByCode(tenantId,
                    goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode, goodsDeliveryNote.Id);

                if (goodsDeliveryNoteDetailMeta.Quantity * goodsDeliveryNoteDetail.ConversionValue > (receivedQuantities - deliveryQuantities)
                    && receivedQuantities >= deliveryQuantities)
                    return new ActionResultResponse<string>(-9,
                        _resourceService.GetString("Product: \"{0}\" out of stock", goodsDeliveryNoteDetailMeta.ProductName));
            }
            else
            {
                var openingStock = await _inventoryReportRepository.GetOpeningStock(goodsDeliveryNote.TenantId,
                    goodsDeliveryNote.WarehouseId,
                    goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNote.DeliveryDate);
                if (openingStock == null)
                    return new ActionResultResponse<string>(-8,
                        _resourceService.GetString("Product: \"{0}\" out of stock", goodsDeliveryNoteDetailMeta.ProductName));

                // Lấy về tổng số sản phẩm xuất theo lô.
                var totals = await _goodsDeliveryNoteDetailsRepository.GetTotalQuantitiesByProductIdAndLotId(tenantId,
                    goodsDeliveryNote.WarehouseId, goodsDeliveryNote.Id, goodsDeliveryNoteDetailMeta.ProductId, goodsDeliveryNoteDetailMeta.LotId,
                    id);

                if (totals + goodsDeliveryNoteDetailMeta.Quantity * goodsDeliveryNoteDetail.ConversionValue > openingStock.ClosingStockQuantity)
                    return new ActionResultResponse<string>(-9, _resourceService.GetString("Out of stock"));
            }

            goodsDeliveryNoteDetail.ConcurrencyStamp = Guid.NewGuid().ToString();
            var result = await _goodsDeliveryNoteDetailsRepository.Update(goodsDeliveryNoteDetail);
            if (result > 0)
            {
                // Đồng bộ tồn kho.
                await _mediator.Publish(new UpdateReceiptNoteDetailCommand
                {
                    TenantId = tenantId,
                    IsReceived = false,
                    ProductId = goodsDeliveryNoteDetail.ProductId,
                    WarehouseId = goodsDeliveryNoteDetail.WarehouseId,
                    ReceiptId = goodsDeliveryNoteDetail.GoodsDeliveryNoteId,
                    ReceiptDetailId = goodsDeliveryNoteDetail.Id,
                    Note = goodsDeliveryNote.Note,
                    ReceiptDate = goodsDeliveryNote.DeliveryDate,
                    LotId = goodsDeliveryNoteDetail.LotId,
                    NewLotId = goodsDeliveryNoteDetail.LotId,
                    ReceiptNo = goodsDeliveryNote.DeliveryNo,
                    ReceiptDetailCode = goodsDeliveryNoteDetail.GoodsReceiptNoteCode
                });

                // Cập nhật lại giá.
                if (oldQuantity != goodsDeliveryNoteDetail.Quantity || oldUnitId != goodsDeliveryNoteDetail.UnitId)
                {
                    await UpdateGoodsDeliveryNoteTotalAmounts(tenantId, goodsDeliveryNote.Id);
                    await UpdateGoodsDeliveryNoteTotalItem(goodsDeliveryNote.TenantId, goodsDeliveryNote.Id);
                }
            }
            return new ActionResultResponse<string>
            {
                Code = result,
                Message = result <= 0
                    ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                    : _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful, _resourceService.GetString("quantity")),
                Data = goodsDeliveryNoteDetail.ConcurrencyStamp
            };
        }

        public async Task<ActionResultResponse> DeleteDetail(string tenantId, string goodsDeliveryNoteId, string id)
        {
            var goodsDeliveryNote = await _goodsDeliveryNoteRepository.GetInfo(tenantId, goodsDeliveryNoteId, true);
            if (goodsDeliveryNote == null)
                return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotExists,
                    _resourceService.GetString("Goods delivery note")));

            var isGoodsDeliveryNoteExists = await _goodsDeliveryNoteRepository.CheckExists(tenantId, goodsDeliveryNoteId);
            if (!isGoodsDeliveryNoteExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Goods delivery note does not exists."));

            var goodsDeliveryNoteDetail = await _goodsDeliveryNoteDetailsRepository.GetInfo(goodsDeliveryNoteId, id);
            if (goodsDeliveryNoteDetail == null)
                return new ActionResultResponse(-3, _resourceService.GetString("Product does not exists."));

            goodsDeliveryNoteDetail.IsDelete = true;
            var result = await _goodsDeliveryNoteDetailsRepository.Update(goodsDeliveryNoteDetail);
            if (result <= 0)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Update total goods delivery note total items.            
            await _mediator.Publish(new DeletedReceiptNoteDetailCommand
            {
                TenantId = goodsDeliveryNote.TenantId,
                ReceiptId = goodsDeliveryNote.Id,
                Date = goodsDeliveryNote.DeliveryDate,
                IsReceived = false,
                WarehouseId = goodsDeliveryNote.WarehouseId,
                Code = goodsDeliveryNoteDetail.GoodsReceiptNoteCode,
                ProductId = goodsDeliveryNoteDetail.ProductId,
                LotId = goodsDeliveryNoteDetail.LotId,
                ReceiptNo = goodsDeliveryNote.DeliveryNo
            });
            await UpdateGoodsDeliveryNoteTotalItem(goodsDeliveryNote.TenantId, goodsDeliveryNoteDetail.GoodsDeliveryNoteId);
            await UpdateGoodsDeliveryNoteTotalAmounts(goodsDeliveryNote.TenantId, goodsDeliveryNote.Id);
            return new ActionResultResponse(result, _resourceService.GetString("Remove product successful."));
        }

        private async Task UpdateGoodsDeliveryNoteTotalAmounts(string tenantId, string id)
        {
            var goodsDeliveryNote = await _goodsDeliveryNoteRepository.GetInfo(tenantId, id);
            if (goodsDeliveryNote != null)
            {
                var totalAmounts =
                    await _goodsDeliveryNoteDetailsRepository.GetTotalAmountByByGoodsDeliveryNoteId(tenantId, id);

                goodsDeliveryNote.TotalAmounts = totalAmounts;
                await _goodsDeliveryNoteRepository.Update(goodsDeliveryNote);
            }
        }

        public async Task<ActionResultResponse<ProductInfoDeliveryViewModel>> GetProductInfoInDelivery(string tenantId, string languageId,
            string productId, string warehouseId)
        {
            var info = await _productRepository.GetInfo(productId);
            if (info == null)
                return new ActionResultResponse<ProductInfoDeliveryViewModel>(-1, _resourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<ProductInfoDeliveryViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productUnits = await _productUnitRepository.SearchSuggestionsUnitByProduct(tenantId, languageId, productId, 1,
                short.MaxValue, out var totalRows);
            var productUnitDefault = productUnits.FirstOrDefault(x => x.IsDefault);

            var productDetail = new ProductInfoDeliveryViewModel
            {
                ProductId = info.Id,
                UnitDefaultId = productUnitDefault != null ? productUnitDefault.Id : "",
                UnitDefaultName = productUnitDefault != null ? productUnitDefault.Name : "",
                PriceRetail = productUnitDefault?.Price ?? 0,
                Units = productUnits,
                CalculatorMethod = await GetInventoryCalculatorMethod(),
            };
            return new ActionResultResponse<ProductInfoDeliveryViewModel>
            {
                Code = 1,
                Data = productDetail
            };

            async Task<InventoryCalculatorMethod?> GetInventoryCalculatorMethod()
            {
                var inventoryCalculatorMethodConfig = await _warehouseConfigRepository.GetInfo(tenantId, CultureInfo.CurrentCulture.Name,
                ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>("CalculatorMethod"), warehouseId, true);

                int.TryParse(inventoryCalculatorMethodConfig.Value, out int inventoryCalculatorMethodValue);

                if (inventoryCalculatorMethodValue == (int)InventoryCalculatorMethod.WeightedAverage
                    || inventoryCalculatorMethodValue == (int)InventoryCalculatorMethod.WeightedAverageImmediately
                    || inventoryCalculatorMethodValue == (int)InventoryCalculatorMethod.SpecificIdentificationMethod
                    || inventoryCalculatorMethodValue == (int)InventoryCalculatorMethod.FIFO
                    || inventoryCalculatorMethodValue == (int)InventoryCalculatorMethod.LIFO)
                    return (InventoryCalculatorMethod)inventoryCalculatorMethodValue;

                return null;
            }
        }

        public async Task<ActionResultResponse<string>> UpdateRecommendedQuantity(string tenantId, string userId, string id,
            decimal recommendedQuantity, string concurrencyStamp)
        {
            var goodsDeliveryNoteDetail = await _goodsDeliveryNoteDetailsRepository.GetInfoByTenant(tenantId, id);
            if (goodsDeliveryNoteDetail == null)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Proudct does not exists.", ErrorMessage.Sorry));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                goodsDeliveryNoteDetail.WarehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<string>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (goodsDeliveryNoteDetail.ConcurrencyStamp != concurrencyStamp)
                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ErrorMessage.AlreadyUpdatedByAnother));

            goodsDeliveryNoteDetail.RecommendedQuantity = recommendedQuantity;
            goodsDeliveryNoteDetail.ConcurrencyStamp = Guid.NewGuid().ToString();
            var result = await _goodsDeliveryNoteDetailsRepository.Update(goodsDeliveryNoteDetail);
            return new ActionResultResponse<string>
            {
                Code = 1,
                Message = _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful, _resourceService.GetString("recommended quantity")),
                Data = goodsDeliveryNoteDetail.ConcurrencyStamp
            };
        }

        public async Task<SearchResult<GoodsDeliverReceiverSuggestion>> ReceiverSuggestion(string tenantId, string keyword, int page, int pageSize)
        {
            var items = await _goodsDeliveryNoteReceiverRepository.Suggestion(tenantId, keyword, page, pageSize,
                out int totalRows);
            return new SearchResult<GoodsDeliverReceiverSuggestion>(items, totalRows);
        }

        public async Task<ActionResultResponse> ResyncExwarehousePirceByGoodsReceiptNoteDetailId(string tenantId,
            string warehouseId, string receiptDetailId)
        {
            // Lấy về phương pháp tính giá xuất kho.
            //var inventoryCalculatorMethod =
            //    await _warehouseConfigRepository.GetInventoryCalculatorMethod(tenantId,
            //        warehouseId, delivery);
            //if (!inventoryCalculatorMethod.HasValue)
            //    return new ActionResultResponse(-1, _resourceService.GetString("Warehouse inventory calculator method is missing."));

            //var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailsRepository.GetsByGoodsReceiptNoteDetailId(
            //    tenantId, warehouseId, receiptDetailId);
            //if (goodsDeliveryNoteDetails == null || !goodsDeliveryNoteDetails.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotFound,
            //        _resourceService.GetString("Goods delivery note detail.")));

            //var result = 0;
            //foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
            //{
            //    var goodsDeliveryNote = await _goodsDeliveryNoteRepository.GetInfo(tenantId,
            //        goodsDeliveryNoteDetail.GoodsDeliveryNoteId, true);
            //    if (goodsDeliveryNote == null)
            //        return new ActionResultResponse(-2,
            //            _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("Goods delivery note")));

            //    // Lấy về tồn đầu kỳ.
            //    var openingStock = await _inventoryReportRepository.GetOpeningStock(goodsDeliveryNoteDetail.TenantId,
            //        goodsDeliveryNoteDetail.WarehouseId, goodsDeliveryNoteDetail.ProductId, goodsDeliveryNote.DeliveryDate);

            //    if (openingStock == null)
            //        return new ActionResultResponse(-2, _resourceService.GetString("Please entry goods before exportings."));

            //    //goodsDeliveryNoteDetail.Price = openingStock.ExWarehousePrice;
            //    var resultUpdate = await _goodsDeliveryNoteDetailsRepository.Update(goodsDeliveryNoteDetail);
            //    if (resultUpdate > 0)
            //    {
            //        // Cập nhật lại tổng tiền của phiếu xuất.
            //        await UpdateGoodsDeliveryNoteTotalAmounts(goodsDeliveryNoteDetail.GoodsDeliveryNoteId);
            //        result++;
            //    }
            //}

            //return new ActionResultResponse(result, result > 0
            //    ? _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
            //        _resourceService.GetString("goods delivery note detail."))
            //    : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            return new ActionResultResponse();
        }

        public async Task<ActionResultResponse> UpdatePriceByGoodsReceiptNoteDetailId(string tenantId, string warehouseId, string receiptDetailId)
        {
            //var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailsRepository.GetsByGoodsReceiptNoteDetailId(tenantId, warehouseId,
            //    receiptDetailId);
            //if (goodsDeliveryNoteDetails == null || !goodsDeliveryNoteDetails.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("Goods delivery note details")));

            //foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
            //{
            //    var goodsDeliveryNote =
            //        await _goodsDeliveryNoteRepository.GetInfo(tenantId, goodsDeliveryNoteDetail.GoodsDeliveryNoteId);
            //    if (goodsDeliveryNote == null)
            //        return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("Goods delivery note")));

            //    var openingStock = await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId,
            //        goodsDeliveryNoteDetail.ProductId, goodsDeliveryNote.DeliveryDate, true);
            //    if (openingStock == null)
            //        return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            //    //goodsDeliveryNoteDetail.Price = openingStock.ExWarehousePrice;
            //    var result = await _goodsDeliveryNoteDetailsRepository.Update(goodsDeliveryNoteDetail);
            //    if (result > 0)
            //    {
            //        // Cập nhật lại thổng tiền trên phiếu xuất.
            //        await UpdateGoodsDeliveryNoteTotalAmounts(goodsDeliveryNote.Id);
            //    }
            //}
            return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.SyncDataSuccessful));
        }

        public async Task UpdatePriceByGoodsReceiptNoteDetailCode(string tenantId, string warehouseId, string code,
            decimal price)
        {
            var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailsRepository.GetByCode(tenantId, warehouseId, code);
            if (goodsDeliveryNoteDetails != null && goodsDeliveryNoteDetails.Any())
            {
                foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
                {
                    goodsDeliveryNoteDetail.Price = price;
                }
            }
        }

        public async Task SynchronizePrice(string tenantId, string warehouseId, string receiptId, string code, string lotId, DateTime date,
            int page = 1, int pageSize = 20)
        {
            var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailsRepository.GetsForSynchronize(tenantId,
                warehouseId, code, lotId, date, page,
                pageSize, out int totalRows);

            var totalPages = Math.Ceiling((decimal)totalRows / pageSize);
            if (page < totalPages)
            {
                await SynchronizePrice(tenantId, warehouseId, receiptId, code, lotId, date, page + 1, pageSize);
            }

            foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
            {
                if (string.IsNullOrEmpty(goodsDeliveryNoteDetail.LotId))
                {
                    var openingStock = !string.IsNullOrEmpty(lotId)
                        ? await _inventoryReportRepository.GetOpeningStockByLot(tenantId, warehouseId,
                            goodsDeliveryNoteDetail.ProductId, lotId, date)
                        : await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, goodsDeliveryNoteDetail.ProductId, date);
                    goodsDeliveryNoteDetail.Price = openingStock?.ExWarehousePrice ?? 0;
                }
                else
                {
                    var goodsReceiptNoteDetails =
                        await _goodsReceiptNoteDetailRepository.GetByCode(tenantId, warehouseId, code);
                    var quantities = goodsReceiptNoteDetails.Sum(x => x.Quantity * x.ConversionValue);
                    var totalAmounts = goodsReceiptNoteDetails.Sum(x => x.Quantity * x.Price);
                    goodsDeliveryNoteDetail.Price = totalAmounts / quantities;
                }

                var result = await _goodsDeliveryNoteDetailsRepository.Update(goodsDeliveryNoteDetail);
                if (result > 0)
                {
                    // Cập nhật lại thông tin báo cáo tồn.
                    //var price = await _goodsDeliveryNoteDetailsRepository.GetPrice(tenantId, warehouseId, goodsDeliveryNoteDetail.GoodsDeliveryNoteId,
                    //    goodsDeliveryNoteDetail.ProductId, lotId);
                    //await _inventoryReportService.UpdatePrice(tenantId, warehouseId, goodsDeliveryNoteDetail.GoodsDeliveryNoteId,
                    //    goodsDeliveryNoteDetail.ProductId, lotId, date, false, price);
                    await _mediator.Publish(new UpdateReceiptNoteDetailCommand
                    {
                        ProductId = goodsDeliveryNoteDetail.ProductId,
                        TenantId = goodsDeliveryNoteDetail.TenantId,
                        WarehouseId = goodsDeliveryNoteDetail.WarehouseId,
                        LotId = goodsDeliveryNoteDetail.LotId,
                        IsReceived = false,
                        Note = goodsDeliveryNoteDetail.Note,
                        ReceiptDate = date,
                        ReceiptDetailCode = goodsDeliveryNoteDetail.GoodsReceiptNoteCode,
                        ReceiptId = receiptId,
                        ReceiptDetailId = goodsDeliveryNoteDetail.Id,
                        //                        ReceiptNo = goodsDeliveryNote
                    });

                    // Cập nhật lại tổng tiền trên phiếu xuất.
                    await UpdateGoodsDeliveryNoteTotalAmounts(tenantId, receiptId);
                }
            }
        }

        //public async Task UpdateLotIdByGoodsReceiptNoteDetailCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode,
        //    string lotId, string newLotId)
        //{
        //    var goodsDeliveryNoteDetails =
        //        await _goodsDeliveryNoteDetailsRepository.GetsByGoodsReceiptNoteDetailCode(tenantId, warehouseId,
        //            goodsReceiptNoteDetailCode, lotId);

        //    if (goodsDeliveryNoteDetails != null && goodsDeliveryNoteDetails.Any())
        //    {
        //        foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
        //        {
        //            goodsDeliveryNoteDetail.LotId = newLotId;
        //        }
        //        await _goodsDeliveryNoteDetailsRepository.Updates(goodsDeliveryNoteDetails);
        //    }
        //}

        //private async Task UpdateGoodsDeliveryNoteTotalAmounts(string goodsDeliveryNoteId)
        //{
        //    var totalAmounts =
        //        await _goodsDeliveryNoteDetailsRepository
        //            .GetTotalAmountByByGoodsDeliveryNoteId(goodsDeliveryNoteId);
        //    await _goodsDeliveryNoteRepository.UpdateTotalAmount(goodsDeliveryNoteId, totalAmounts);
        //}

        private async Task UpdateGoodsDeliveryNoteTotalItem(string tenantId, string goodsDeliveryNoteId)
        {
            //   Get total items by goods delivery note id.
            var totalItems =
                await _goodsDeliveryNoteDetailsRepository.CountByByGoodsDeliveryNoteId(goodsDeliveryNoteId);

            //   Update changes.
            await _goodsDeliveryNoteRepository.UpdateTotalItems(tenantId, goodsDeliveryNoteId,
                totalItems);

            //   Get total items by goods delivery note id.
            var totalAmount =
                await _goodsDeliveryNoteDetailsRepository.GetTotalAmountByByGoodsDeliveryNoteId(tenantId, goodsDeliveryNoteId);

            //   Update changes.
            await _goodsDeliveryNoteRepository.UpdateTotalAmount(tenantId, goodsDeliveryNoteId, totalAmount);
        }

        private async Task<GoodsDeliveryNoteMeta> TrimGoodsDeliveryNoteMeta(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta,
            InventoryCalculatorMethod inventoryCalculatorMethod)
        {
            //goodsDeliveryNoteMeta.DeliveryDate = goodsDeliveryNoteMeta.DeliveryDate.AddSeconds(DateTime.Now.Second);
            goodsDeliveryNoteMeta.WarehouseId = goodsDeliveryNoteMeta.WarehouseId?.Trim();
            goodsDeliveryNoteMeta.ReceiverFullName = goodsDeliveryNoteMeta.ReceiverFullName?.Trim();
            goodsDeliveryNoteMeta.ReceiverPhoneNumber = goodsDeliveryNoteMeta.ReceiverPhoneNumber?.Trim();
            goodsDeliveryNoteMeta.Note = goodsDeliveryNoteMeta.Note?.Trim();
            goodsDeliveryNoteMeta.ReceiverId =
                goodsDeliveryNoteMeta.Type == GoodsDeliveryNoteType.Retail || goodsDeliveryNoteMeta.Type == GoodsDeliveryNoteType.SelfConsumer
                || goodsDeliveryNoteMeta.Type == GoodsDeliveryNoteType.Transfer
                ? await GetReceiverId(goodsDeliveryNoteMeta.TenantId,
                    goodsDeliveryNoteMeta.ReceiverId?.Trim(), goodsDeliveryNoteMeta.ReceiverFullName, goodsDeliveryNoteMeta.ReceiverPhoneNumber,
                    goodsDeliveryNoteMeta.CustomerId)
                : string.Empty;

            // Tính giá xuất kho dựa trên giá nhập.
            var baseOnReceivingPrice = goodsDeliveryNoteMeta.Type == GoodsDeliveryNoteType.Return
                                       || goodsDeliveryNoteMeta.Type == GoodsDeliveryNoteType.Voided
                                       || goodsDeliveryNoteMeta.Type == GoodsDeliveryNoteType.Transfer;

            var goodsReceiptNoteDetailRepository =
                _serviceProvider.GetRequiredService<IGoodsReceiptNoteDetailRepository>();
            goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails = goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails.Where(x => x.Quantity > 0).ToList();

            // TODO: Check later.
            //foreach (var goodsDeliveryNoteDetailMeta in goodsDeliveryNoteMeta.GoodsDeliveryNoteDetails)
            //{
            //    var goodsReceiptNoteDetail = await goodsReceiptNoteDetailRepository.GetInfoByTenantId(goodsDeliveryNoteMeta.TenantId,
            //        goodsDeliveryNoteDetailMeta.GoodsReceiptNoteDetailCode);
            //    if (goodsReceiptNoteDetail == null)
            //        continue;

            //    goodsDeliveryNoteDetailMeta.ExpireDate = goodsReceiptNoteDetail.ExpiryDate;
            //    goodsDeliveryNoteDetailMeta.ManufacturingDate = goodsReceiptNoteDetail.ManufactureDate;
            //    goodsDeliveryNoteDetailMeta.LotId = goodsReceiptNoteDetail.LotId;
            //}

            return goodsDeliveryNoteMeta;
        }
    }
}
