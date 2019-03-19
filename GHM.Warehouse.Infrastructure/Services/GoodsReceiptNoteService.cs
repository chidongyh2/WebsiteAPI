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

namespace GHM.Warehouse.Infrastructure.Services
{
    public class GoodsReceiptNoteService : IGoodsReceiptNoteService
    {
        private readonly IGoodsReceiptNoteRepository _goodsReceiptNoteRepository;
        private readonly IGoodsDeliverRepository _goodsDeliverRepository;
        private readonly ISupplierRepository _supplierRepository;
        private readonly IWarehouseRepository _warehouseRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IGoodsReceiptNoteFollowRepository _goodsReceiptNoteFollowRepository;
        private readonly ILotRepository _lotRepository;
        private readonly IGoodsReceiptNoteDetailService _goodsReceiptNoteDetailService;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IInventoryDailyReportRepository _inventoryDailyReportRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IInventoryReportDetailRepository _inventoryReportDetailRepository;
        private readonly IProductRepository _productRepository;
        private readonly IProductConversionUnitRepository _productConversionUnitRepository;
        private readonly IMediator _mediator;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        #region Goods receipt note.
        public GoodsReceiptNoteService(IGoodsReceiptNoteRepository goodsReceiptNoteRepository,
            IGoodsDeliverRepository goodsDeliverRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService, ISupplierRepository supplierRepository,
            IWarehouseRepository warehouseRepository,
            IGoodsReceiptNoteFollowRepository goodsReceiptNoteFollowRepository,
            ILotRepository lotRepository, IGoodsReceiptNoteDetailService goodsReceiptNoteDetailService,
            IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository, IWarehouseManagerConfigRepository warehouseManagerConfigRepository,
             IMediator mediator, IInventoryDailyReportRepository inventoryDailyReportRepository,
            IWarehouseConfigRepository warehouseConfigRepository, IProductUnitRepository productUnitRepository,
            IInventoryReportRepository inventoryReportRepository, IProductConversionUnitRepository productConversionUnitRepository,
            IProductRepository productRepository, IInventoryReportDetailRepository inventoryReportDetailRepository)
        {
            _goodsReceiptNoteRepository = goodsReceiptNoteRepository;
            _goodsDeliverRepository = goodsDeliverRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _supplierRepository = supplierRepository;
            _warehouseRepository = warehouseRepository;
            //_goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _goodsReceiptNoteFollowRepository = goodsReceiptNoteFollowRepository;
            _lotRepository = lotRepository;
            _goodsReceiptNoteDetailService = goodsReceiptNoteDetailService;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
            _mediator = mediator;
            _inventoryDailyReportRepository = inventoryDailyReportRepository;
            _warehouseConfigRepository = warehouseConfigRepository;
            _productUnitRepository = productUnitRepository;
            _inventoryReportRepository = inventoryReportRepository;
            _productConversionUnitRepository = productConversionUnitRepository;
            _productRepository = productRepository;
            _inventoryReportDetailRepository = inventoryReportDetailRepository;
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, GoodsReceiptNoteMeta goodsReceiptNoteMeta)
        {
            TrimGoodsReceiptNoteMeta(ref goodsReceiptNoteMeta);

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                goodsReceiptNoteMeta.WarehouseId, goodsReceiptNoteMeta.CreatorId,
                tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<string>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // Kiểm tra sản phẩm hợp lệ.
            if (goodsReceiptNoteMeta.GoodsReceiptNoteDetails.Count(x => x.Quantity <= 0) > 0)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Product quantity must greater than."));

            // Kiểm tra số hóa đơn tồn tại.
            if (!string.IsNullOrEmpty(goodsReceiptNoteMeta.InvoiceNo))
            {
                var invoiceNoExists =
                    await _goodsReceiptNoteRepository.CheckInvoiceNoExists(string.Empty, goodsReceiptNoteMeta.InvoiceNo);
                if (invoiceNoExists)
                    return new ActionResultResponse<string>(-2, _resourceService.GetString("Invoice no already exists."));
            }

            // Kiểm tra nhà cung cấp trong trường hợp mua mới.
            if (goodsReceiptNoteMeta.Type == GoodsReceiptNoteType.NewPurchase)
            {
                var isSupplierExists = await _supplierRepository.CheckExistsById(goodsReceiptNoteMeta.SupplierId, tenantId);
                if (!isSupplierExists)
                    return new ActionResultResponse<string>(-3, _resourceService.GetString("Supplier does not exists. Please check again."));
            }

            // Lấy về công thức tính giá xuất kho.
            var inventoryCalculatorMethod = await _warehouseConfigRepository.GetInventoryCalculatorMethod(
                tenantId, goodsReceiptNoteMeta.WarehouseId);
            if (!inventoryCalculatorMethod.HasValue)
                return new ActionResultResponse<string>(-4,
                    _resourceService.GetString("Please config inventory calculator method."));

            var isWarehouseExists =
                await _warehouseRepository.CheckExists(goodsReceiptNoteMeta.WarehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse<string>(-5, _resourceService.GetString("Warehouse does not exists. Please check again."));

            //var entryDate = new DateTime(goodsReceiptNoteMeta.Year, goodsReceiptNoteMeta.Month, goodsReceiptNoteMeta.Day);
            if (DateTime.Compare(DateTime.Today.AddDays(1).AddMilliseconds(-1), goodsReceiptNoteMeta.EntryDate) < 0)
                return new ActionResultResponse<string>(-6, _resourceService.GetString("Entry date can not be after current date."));

            // Thêm mới phiếu nhập.
            var goodsReceiptNote = new GoodsReceiptNote
            {
                ReceiptNo = await GetReceiptNo(tenantId, goodsReceiptNoteMeta.EntryDate),
                InvoiceNo = goodsReceiptNoteMeta.InvoiceNo,
                SupplierId = goodsReceiptNoteMeta.SupplierId,
                CreatorId = goodsReceiptNoteMeta.CreatorId,
                CreatorFullName = goodsReceiptNoteMeta.CreatorFullName,
                CreatorAvatar = goodsReceiptNoteMeta.CreatorAvatar,
                Type = goodsReceiptNoteMeta.Type,
                DeliverId = goodsReceiptNoteMeta.DeliverId,
                EntryDate = goodsReceiptNoteMeta.EntryDate,
                Day = (byte)goodsReceiptNoteMeta.EntryDate.Day,
                Month = (byte)goodsReceiptNoteMeta.EntryDate.Month,
                Year = goodsReceiptNoteMeta.EntryDate.Year,
                Quarter = goodsReceiptNoteMeta.EntryDate.GetQuarter(),
                WarehouseId = goodsReceiptNoteMeta.WarehouseId,
                InvoiceDate = goodsReceiptNoteMeta.InvoiceDate,
                Note = goodsReceiptNoteMeta.Note,
                ReceiverId = goodsReceiptNoteMeta.CreatorId,
                ReceiverFullName = goodsReceiptNoteMeta.CreatorFullName,
                TenantId = tenantId,
                TotalItems = goodsReceiptNoteMeta.GoodsReceiptNoteDetails.Count,
                VAT = goodsReceiptNoteMeta.VAT,
                Id = await GenerateId(tenantId),
            };

            if (goodsReceiptNoteMeta.Type != GoodsReceiptNoteType.Inventory)
            {
                goodsReceiptNote.DeliverId = await GetDeliverId(tenantId, goodsReceiptNoteMeta.SupplierId,
                    goodsReceiptNoteMeta.DeliverId, goodsReceiptNoteMeta.DeliverFullName,
                    goodsReceiptNoteMeta.DeliverPhoneNumber);
                goodsReceiptNote.FollowId = await GetGoodsReceiptNoteFollowId(tenantId, goodsReceiptNoteMeta.FollowId,
                    goodsReceiptNoteMeta.Follow);
            }

            var createReceiptNoteCommand = new CreateReceiptNoteCommand();
            var resultAddDetail = await AddGoodsReceiptNoteDetail();
            if (resultAddDetail.Code <= 0)
                return new ActionResultResponse<string>(resultAddDetail.Code, resultAddDetail.Message);

            goodsReceiptNote.TotalItems = goodsReceiptNote.GoodsReceiptNoteDetails.Count;
            goodsReceiptNote.TotalAmounts = goodsReceiptNote.GoodsReceiptNoteDetails.Sum(x => x.TotalAmounts);
            goodsReceiptNote.TotalBeforeTaxes = goodsReceiptNote.GoodsReceiptNoteDetails.Sum(x => x.TotalBeforeTaxes);
            var result = await _goodsReceiptNoteRepository.Insert(goodsReceiptNote);
            if (result <= 0)
            {
                await RollbackGoodsReceiptNote();
                return new ActionResultResponse<string>(-10,
                    _sharedResourceService.GetString(SuccessMessage.AddSuccessful, _resourceService.GetString("goods receipt note")));
            }

            await _mediator.Publish(createReceiptNoteCommand);
            return new ActionResultResponse<string>(result,
                _sharedResourceService.GetString(SuccessMessage.AddSuccessful,
                    _resourceService.GetString("goods receipt note")), string.Empty, goodsReceiptNote.Id);

            async Task RollbackGoodsReceiptNote()
            {
                await _goodsReceiptNoteRepository.ForceDelete(tenantId, goodsReceiptNote.Id);
                await _goodsReceiptNoteDetailRepository.ForceDeleteByGoodsReceptNoteId(tenantId, goodsReceiptNote.Id);
            }

            async Task<ActionResultResponse> AddGoodsReceiptNoteDetail()
            {
                // Nhóm sản phẩm theo mã sản phẩm và theo lô.
                var groupByProducts = goodsReceiptNoteMeta.GoodsReceiptNoteDetails.GroupBy(x => x.ProductId).ToList();
                var index = 1;
                foreach (var groupProducts in groupByProducts)
                {
                    // Kiểm tra sản phẩm có tồn tại không.
                    var isProductExists = await _productRepository.CheckExists(groupProducts.Key, tenantId);
                    if (!isProductExists)
                        return new ActionResultResponse<List<GoodsReceiptNoteDetail>>(-3,
                            _resourceService.GetString("Product does not exists. Please try again."));

                    // Lấy về đơn vị mặc định
                    var defaultUnit = await _productUnitRepository.GetDefaultUnit(tenantId, groupProducts.Key);
                    if (defaultUnit == null)
                        return new ActionResultResponse(-6, _sharedResourceService.GetString(ErrorMessage.NotExists,
                            _resourceService.GetString("Product unit.")));

                    var inventoryReport = new InventoryReport
                    {
                        TenantId = tenantId,
                        ProductId = groupProducts.Key,
                        Date = goodsReceiptNote.EntryDate,
                        WarehouseId = goodsReceiptNote.WarehouseId,
                        ReceiptId = goodsReceiptNote.Id,
                        IsReceived = true,
                        ReceiptNo = goodsReceiptNote.ReceiptNo,
                        ProductUnitId = defaultUnit.Id
                    };

                    // Kiểm tra lô sản phẩm.
                    var isManagementByLot = await _productRepository.CheckIsManageByLot(tenantId, groupProducts.Key);
                    if (!isManagementByLot)
                    {
                        foreach (var goodsReceiptNoteDetailMeta in groupProducts)
                        {
                            // Kiểm tra đơn vị tính có tồn tại không.
                            var isUnitExists = await _productUnitRepository.CheckExists(tenantId, goodsReceiptNoteDetailMeta.ProductId,
                                goodsReceiptNoteDetailMeta.UnitId);
                            if (!isUnitExists)
                                return new ActionResultResponse(-4, _resourceService.GetString("Invalid unit. Please check again."));

                            // Lấy về đơn vị chuyển đổi.
                            goodsReceiptNoteDetailMeta.ConversionValue = 1;
                            if (goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                            {
                                var productConversionUnit = await _productConversionUnitRepository.GetConversion(tenantId,
                                    groupProducts.Key, goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                                if (productConversionUnit == null)
                                    return new ActionResultResponse<string>(-7,
                                        _resourceService.GetString("Conversion unit does not exists. Please contact with administrator"));

                                goodsReceiptNoteDetailMeta.ConversionValue = productConversionUnit.Value;
                            }

                            goodsReceiptNoteDetailMeta.ConversionPrice = decimal.Round(
                                groupProducts.Sum(x => x.Price * x.Quantity)
                                / groupProducts.Sum(x =>
                                    goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue),
                                2);
                            goodsReceiptNoteDetailMeta.ConversionQuantity =
                                goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue;

                            // Thông tin chi tiết phiếu nhập
                            var goodsReceiptNoteDetail = new GoodsReceiptNoteDetail
                            {
                                ChargeableWeight = goodsReceiptNoteDetailMeta.ChargeableWeight,
                                BrandId = goodsReceiptNoteDetailMeta.BrandId,
                                ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate,
                                GoodsReceiptNoteId = goodsReceiptNote.Id,
                                Height = goodsReceiptNoteDetailMeta.Height,
                                InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity ?? goodsReceiptNoteDetailMeta.Quantity,
                                Quantity = goodsReceiptNoteDetailMeta.Quantity,
                                Length = goodsReceiptNoteDetailMeta.Length,
                                LotId = await GetLotId(tenantId, goodsReceiptNoteDetailMeta.LotId?.Trim()),
                                ManufactureDate = goodsReceiptNoteDetailMeta.ManufacturingDate,
                                Price = goodsReceiptNoteDetailMeta.Price,
                                ProductId = goodsReceiptNoteDetailMeta.ProductId,
                                SKU = goodsReceiptNoteDetailMeta.SKU,
                                UPC = goodsReceiptNoteDetailMeta.UPC,
                                VAT = goodsReceiptNoteDetailMeta.VAT,
                                UnitId = goodsReceiptNoteDetailMeta.UnitId,
                                VolumnWidth = goodsReceiptNoteDetailMeta.VolumnWidth,
                                WarehouseId = goodsReceiptNote.WarehouseId,
                                Weight = goodsReceiptNoteDetailMeta.Weight,
                                Width = goodsReceiptNoteDetailMeta.Width,
                                TotalBeforeTaxes = goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.Price,
                                TenantId = tenantId,
                                ConversionUnitGroupId = await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(tenantId,
                                    goodsReceiptNoteDetailMeta.ProductId, goodsReceiptNote.EntryDate),
                                Code = $"{goodsReceiptNote.Id}_{index.ToAlphabetId(0, 3)}",
                                ConversionValue = goodsReceiptNoteDetailMeta.ConversionValue
                            };
                            if (goodsReceiptNoteDetailMeta.Tax.HasValue)
                            {
                                goodsReceiptNoteDetail.Tax = goodsReceiptNoteDetailMeta.Tax;
                                goodsReceiptNoteDetail.Taxes = goodsReceiptNoteDetail.Tax.Value * goodsReceiptNoteDetail.TotalBeforeTaxes / 100;
                                goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes + (goodsReceiptNoteDetail.Taxes ?? 0);
                            }
                            else
                            {
                                goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes;
                            }
                            goodsReceiptNote.GoodsReceiptNoteDetails.Add(goodsReceiptNoteDetail);

                            var totalQuantity = groupProducts.Sum(x => x.ConversionQuantity);
                            var totalPrice = groupProducts.Sum(x => x.Price * x.Quantity);
                            var avgPrice = totalPrice / totalQuantity;
                            inventoryReport.InventoryReportDetails.Add(new InventoryReportDetail
                            {
                                ProductId = goodsReceiptNoteDetailMeta.ProductId,
                                LotId = goodsReceiptNoteDetail.LotId,
                                Note = goodsReceiptNoteDetailMeta.Note,
                                ProductUnitId = defaultUnit.Id,
                                Quantity = totalQuantity,
                                Price = avgPrice,
                                GoodsReceiptNoteDetailCode = goodsReceiptNoteDetail.Code,
                                TenantId = tenantId,
                                WarehouseId = goodsReceiptNoteDetail.WarehouseId,
                                IsReceived = true,
                                ReceiptId = goodsReceiptNote.Id,
                                Date = goodsReceiptNote.EntryDate
                            });
                            index++;
                        }
                        createReceiptNoteCommand.InventoryReports.Add(inventoryReport);
                    }
                    else
                    {
                        // Nhóm sản phẩm theo lô.
                        var groupByLots = groupProducts.GroupBy(x => x.LotId).ToList();
                        foreach (var groupByLot in groupByLots)
                        {
                            var code = $"{goodsReceiptNote.Id}_{index.ToAlphabetId(0, 3)}";
                            foreach (var goodsReceiptNoteDetailMeta in groupByLot)
                            {
                                if (string.IsNullOrEmpty(goodsReceiptNoteDetailMeta.LotId))
                                    return new ActionResultResponse<string>(-2,
                                        _sharedResourceService.GetString(ValidatorMessage.PleaseEnter, _resourceService.GetString("Lot number")));

                                // Kiểm tra đơn vị tính có tồn tại không.
                                var isUnitExists = await _productUnitRepository.CheckExists(goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.ProductId,
                                    goodsReceiptNoteDetailMeta.UnitId);
                                if (!isUnitExists)
                                    return new ActionResultResponse(-4, _resourceService.GetString("Invalid unit. Please check again."));

                                // Lấy về đơn vị chuyển đổi.
                                goodsReceiptNoteDetailMeta.ConversionValue = 1;
                                if (goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                                {
                                    var productConversionUnit = await _productConversionUnitRepository.GetConversion(tenantId,
                                        groupProducts.Key, goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                                    if (productConversionUnit == null)
                                        return new ActionResultResponse<string>(-7, _resourceService.GetString("Conversion unit does not exists. Please contact with administrator"));
                                    goodsReceiptNoteDetailMeta.ConversionValue = productConversionUnit.Value;
                                }

                                goodsReceiptNoteDetailMeta.ConversionPrice = decimal.Round(
                                    groupProducts.Sum(x => x.Price * x.Quantity)
                                    / groupProducts.Sum(x =>
                                        goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue),
                                    2);
                                goodsReceiptNoteDetailMeta.ConversionQuantity =
                                    goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue;

                                // Thông tin chi tiết phiếu nhập
                                var goodsReceiptNoteDetail = new GoodsReceiptNoteDetail
                                {
                                    ChargeableWeight = goodsReceiptNoteDetailMeta.ChargeableWeight,
                                    BrandId = goodsReceiptNoteDetailMeta.BrandId,
                                    ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate,
                                    GoodsReceiptNoteId = goodsReceiptNote.Id,
                                    Height = goodsReceiptNoteDetailMeta.Height,
                                    InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity ?? goodsReceiptNoteDetailMeta.Quantity,
                                    Quantity = goodsReceiptNoteDetailMeta.Quantity,
                                    Length = goodsReceiptNoteDetailMeta.Length,
                                    LotId = await GetLotId(tenantId, goodsReceiptNoteDetailMeta.LotId?.Trim()),
                                    ManufactureDate = goodsReceiptNoteDetailMeta.ManufacturingDate,
                                    Price = goodsReceiptNoteDetailMeta.Price,
                                    ProductId = goodsReceiptNoteDetailMeta.ProductId,
                                    SKU = goodsReceiptNoteDetailMeta.SKU,
                                    UPC = goodsReceiptNoteDetailMeta.UPC,
                                    VAT = goodsReceiptNoteDetailMeta.VAT,
                                    UnitId = goodsReceiptNoteDetailMeta.UnitId,
                                    VolumnWidth = goodsReceiptNoteDetailMeta.VolumnWidth,
                                    WarehouseId = goodsReceiptNote.WarehouseId,
                                    Weight = goodsReceiptNoteDetailMeta.Weight,
                                    Width = goodsReceiptNoteDetailMeta.Width,
                                    TotalBeforeTaxes = goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.Price,
                                    TenantId = tenantId,
                                    ConversionUnitGroupId = await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(tenantId,
                                        goodsReceiptNoteDetailMeta.ProductId, goodsReceiptNote.EntryDate),
                                    Code = code,
                                    ConversionValue = goodsReceiptNoteDetailMeta.ConversionValue
                                };
                                if (goodsReceiptNoteDetailMeta.Tax.HasValue)
                                {
                                    goodsReceiptNoteDetail.Tax = goodsReceiptNoteDetailMeta.Tax;
                                    goodsReceiptNoteDetail.Taxes = goodsReceiptNoteDetailMeta.Tax.Value * goodsReceiptNoteDetail.TotalBeforeTaxes / 100;
                                    goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes + (goodsReceiptNoteDetail.Taxes ?? 0);
                                }
                                else
                                {
                                    goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes;
                                }
                                goodsReceiptNote.GoodsReceiptNoteDetails.Add(goodsReceiptNoteDetail);
                            }
                            var totalQuantity = groupByLot.Sum(x => x.ConversionQuantity);
                            var totalPrice = groupByLot.Sum(x => x.Price * x.Quantity);
                            var avgPrice = totalPrice / totalQuantity;
                            inventoryReport.InventoryReportDetails.Add(new InventoryReportDetail
                            {
                                ProductId = groupProducts.Key,
                                ProductUnitId = defaultUnit.Id,
                                LotId = groupByLot.Key,
                                Quantity = totalQuantity,
                                Price = decimal.Round(avgPrice, 2),
                                Note = groupByLot.FirstOrDefault()?.Note,
                                GoodsReceiptNoteDetailCode = code,
                                TenantId = tenantId,
                                WarehouseId = goodsReceiptNote.WarehouseId,
                                IsReceived = true,
                                ReceiptId = goodsReceiptNote.Id,
                                Date = goodsReceiptNote.EntryDate
                            });
                            index++;
                        }
                        createReceiptNoteCommand.InventoryReports.Add(inventoryReport);
                    }
                }
                return new ActionResultResponse<string>
                {
                    Code = 1,
                    Message = _resourceService.GetString("Add new goods receipt note successful."),
                    Data = goodsReceiptNote.Id
                };
            }
        }

        private async Task<string> GetReceiptNo(string tenantId, DateTime entryDate)
        {
            var count = await _goodsReceiptNoteRepository.CountByDate(tenantId, entryDate);
            while (true)
            {
                var id = $"{entryDate:yy}{entryDate.Month}{entryDate.Day}{count.ToAlphabetId(0, 5)}";
                var isIdExists = await _goodsReceiptNoteRepository.CheckReceiptNoExists(tenantId, id);
                if (!isIdExists) return id;
                count++;
            }
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, GoodsReceiptNoteMeta goodsReceiptNoteMeta)
        {
            TrimGoodsReceiptNoteMeta(ref goodsReceiptNoteMeta);
            var goodsReceiptNoteInfo = await _goodsReceiptNoteRepository.GetInfo(tenantId, id);
            if (goodsReceiptNoteInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Goods receipt note does not exists. Please check again."));

            // Lưu lại giá trị cũ để đối chiếu.
            var oldSupplierId = goodsReceiptNoteInfo.SupplierId;
            var oldDeliverId = goodsReceiptNoteInfo.DeliverId;
            var oldInvoiceNo = goodsReceiptNoteInfo.InvoiceNo;
            var oldReceiptNo = goodsReceiptNoteInfo.ReceiptNo;
            var oldInvoiceDate = goodsReceiptNoteInfo.InvoiceDate;
            var oldEntryDate = goodsReceiptNoteInfo.EntryDate;
            var oldWarehouseId = goodsReceiptNoteInfo.WarehouseId;
            var oldFollowId = goodsReceiptNoteInfo.FollowId;

            if (DateTime.Compare(DateTime.Today.AddDays(1).AddMilliseconds(-1), goodsReceiptNoteMeta.EntryDate) < 0)
                return new ActionResultResponse(-2, _resourceService.GetString("Entry date can not be after current date."));

            if (oldSupplierId != goodsReceiptNoteMeta.SupplierId)
            {
                // Kiểm tra nhà cung cấp tồn tại.
                var isSupplierExists = await _supplierRepository.CheckExistsById(goodsReceiptNoteMeta.SupplierId, tenantId);
                if (!isSupplierExists)
                    return new ActionResultResponse(-3, _resourceService.GetString("Supplier does not exists. Please check again."));

                goodsReceiptNoteInfo.SupplierId = goodsReceiptNoteMeta.SupplierId;
            }

            if (goodsReceiptNoteInfo.Type != GoodsReceiptNoteType.Inventory)
                goodsReceiptNoteInfo.DeliverId = await GetDeliverId(tenantId, goodsReceiptNoteMeta.SupplierId,
                    goodsReceiptNoteMeta.DeliverId, goodsReceiptNoteMeta.DeliverFullName,
                    goodsReceiptNoteMeta.DeliverPhoneNumber);

            if (oldInvoiceNo != goodsReceiptNoteMeta.InvoiceNo)
            {
                // Kiểm tra số hóa đơn đã tồn tại chưa.
                var invoiceNoExists =
                    await _goodsReceiptNoteRepository.CheckInvoiceNoExists(id, goodsReceiptNoteMeta.InvoiceNo);
                if (invoiceNoExists)
                    return new ActionResultResponse(-2, _resourceService.GetString("Invoice no already exists."));

                goodsReceiptNoteInfo.InvoiceNo = goodsReceiptNoteMeta.InvoiceNo;
            }

            if (oldReceiptNo != goodsReceiptNoteMeta.ReceiptNo)
            {
                // Kiểm tra số phiếu nhập đã tồn tại chưa.
                var isReceiptNoExists =
                    await _goodsReceiptNoteRepository.CheckReceiptNoExists(id, goodsReceiptNoteMeta.ReceiptNo);
                if (isReceiptNoExists)
                    return new ActionResultResponse(-1, _resourceService.GetString("Goods receipt no already exists."));

                goodsReceiptNoteInfo.ReceiptNo = goodsReceiptNoteMeta.ReceiptNo;
            }

            if (oldWarehouseId != goodsReceiptNoteMeta.WarehouseId)
            {
                var isWarehouseExists =
                    await _warehouseRepository.CheckExists(goodsReceiptNoteMeta.WarehouseId, tenantId);
                if (!isWarehouseExists)
                    return new ActionResultResponse(-4, _resourceService.GetString("Warehouse does not exists. Please check again."));

                goodsReceiptNoteInfo.WarehouseId = goodsReceiptNoteMeta.WarehouseId;
            }

            if (oldInvoiceDate != goodsReceiptNoteMeta.InvoiceDate)
            {
                goodsReceiptNoteInfo.InvoiceDate = goodsReceiptNoteMeta.InvoiceDate;
            }

            if (oldFollowId != goodsReceiptNoteMeta.Follow)
            {
                goodsReceiptNoteInfo.FollowId = await GetGoodsReceiptNoteFollowId(tenantId, id, goodsReceiptNoteMeta.Follow);
            }

            if (DateTime.Compare(oldEntryDate, goodsReceiptNoteMeta.EntryDate) != 0)
            {
                goodsReceiptNoteInfo.EntryDate = goodsReceiptNoteMeta.EntryDate;
                goodsReceiptNoteInfo.Day = (byte)goodsReceiptNoteMeta.EntryDate.Day;
                goodsReceiptNoteInfo.Month = (byte)goodsReceiptNoteMeta.EntryDate.Month;
                goodsReceiptNoteInfo.Year = goodsReceiptNoteMeta.EntryDate.Year;
                goodsReceiptNoteInfo.Quarter = goodsReceiptNoteMeta.EntryDate.GetQuarter();
            }

            goodsReceiptNoteInfo.Note = goodsReceiptNoteMeta.Note;
            goodsReceiptNoteInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            goodsReceiptNoteInfo.LastUpdate = DateTime.Now;
            goodsReceiptNoteInfo.LastUpdateUserId = goodsReceiptNoteMeta.LastUpdateUserId;
            goodsReceiptNoteInfo.LastUpdateFullName = goodsReceiptNoteMeta.LastUpdateFullName;

            //await UpdateGoodsReceiptNoteDetail(goodsReceiptNoteInfo, goodsReceiptNoteMeta.GoodsReceiptNoteDetails);

            var result = await _goodsReceiptNoteRepository.Update(goodsReceiptNoteInfo);
            if (result <= 0)
                return new ActionResultResponse(result, _resourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Trường hợp chuyển kho sẽ phải chạy lại báo cáo tồn kho của kho cũ và kho mới.
            if (oldWarehouseId != goodsReceiptNoteInfo.WarehouseId ||
                DateTime.Compare(oldEntryDate, goodsReceiptNoteInfo.EntryDate) != 0)
            {
                await _mediator.Publish(new UpdateGoodsReceiptNoteCommand
                {
                    TenantId = tenantId,
                    GoodsReceiptNoteId = goodsReceiptNoteInfo.Id,
                    OldEntryDate = oldEntryDate,
                    NewEntryDate = goodsReceiptNoteInfo.EntryDate,
                    OldWarehouseId = oldWarehouseId,
                    NewWarehouseId = goodsReceiptNoteInfo.WarehouseId,
                    UserId = goodsReceiptNoteMeta.LastUpdateUserId,
                    FullName = goodsReceiptNoteMeta.LastUpdateFullName
                });
            }

            return new ActionResultResponse(result, _resourceService.GetString("Update goods receipt note succesful."));
        }

        //private async Task<ActionResultResponse> UpdateGoodsReceiptNoteDetail(GoodsReceiptNote goodsReceiptNote, List<GoodsReceiptNoteDetailMeta> goodsReceiptNoteDetailMetas)
        //{
        //    // Lấy về danh sách chi tiết phiếu nhập theo phiếu nhập.
        //    var goodsReceiptNoteDetails = await _goodsReceiptNoteDetailRepository.GetsAll(goodsReceiptNote.TenantId, goodsReceiptNote.Id);
        //    if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
        //    {
        //        // Chưa có chi tiết báo cáo tồn thêm mới.
        //        goodsReceiptNoteDetails =
        //            await RenderListGoodsReceiptNoteDetail(goodsReceiptNote, goodsReceiptNoteDetailMetas);
        //        var result = await _goodsReceiptNoteDetailRepository.Inserts(goodsReceiptNoteDetails);
        //    }
        //    else
        //    {
        //        var inventoryReportDetailMetaIds = goodsReceiptNoteDetailMetas.Select(x => x.Id).ToList();
        //        var inventoryReportDetailIds = goodsReceiptNoteDetails.Select(x => x.Id).ToList();

        //        #region Thêm mới chi tiết báo cáo tồn.
        //        var listNews = inventoryReportDetailMetaIds.Except(inventoryReportDetailIds).ToList();
        //        var newGoodsReceiptNoteDetails =
        //            await RenderListGoodsReceiptNoteDetail(goodsReceiptNote,
        //                goodsReceiptNoteDetailMetas.Where(x => listNews.Contains(x.Id)).ToList());
        //        var result = await _goodsReceiptNoteDetailRepository.Inserts(newGoodsReceiptNoteDetails);
        //        #endregion

        //        #region Cập nhật chi tiết báo cáo tồn.
        //        var listUpdate = inventoryReportDetailMetaIds.Intersect(inventoryReportDetailIds).ToList();
        //        foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails.Where(x => listUpdate.Contains(x.Id)))
        //        {
        //            var goodsReceiptNoteDetailMeta =
        //                goodsReceiptNoteDetailMetas.FirstOrDefault(x => x.Id == goodsReceiptNoteDetail.Id);
        //            if (goodsReceiptNoteDetailMeta == null)
        //                return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotExists,
        //                    _resourceService.GetString("Goods receipt note detail")));

        //            var oldQuantity = goodsReceiptNoteDetail.Quantity;
        //            var oldProductId = goodsReceiptNoteDetail.ProductId;
        //            var oldLotId = goodsReceiptNoteDetail.LotId;
        //            var oldUnitId = goodsReceiptNoteDetail.UnitId;
        //            var oldPrice = goodsReceiptNoteDetail.Price;

        //            goodsReceiptNoteDetail.ProductId = goodsReceiptNoteDetailMeta.ProductId;
        //            goodsReceiptNoteDetail.LotId = goodsReceiptNoteDetailMeta.LotId;
        //            goodsReceiptNoteDetail.ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate;
        //            goodsReceiptNoteDetail.InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity;
        //            goodsReceiptNoteDetail.Quantity = goodsReceiptNoteDetailMeta.Quantity;
        //            goodsReceiptNoteDetail.Price = goodsReceiptNoteDetailMeta.Price;

        //            if (oldProductId != goodsReceiptNoteDetailMeta.ProductId)
        //            {
        //                var isProductExists = await _productRepository.CheckExists(goodsReceiptNoteDetailMeta.ProductId,
        //                    goodsReceiptNote.TenantId);
        //                if (!isProductExists)
        //                    return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotExists,
        //                        _resourceService.GetString("Product")));
        //            }

        //            if (oldProductId != goodsReceiptNoteDetailMeta.ProductId?.Trim() || oldUnitId != goodsReceiptNoteDetailMeta.UnitId?.Trim()
        //                || oldQuantity != goodsReceiptNoteDetailMeta.Quantity)
        //            {
        //                // Lấy về đơn vị mặc định.
        //                var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsReceiptNote.TenantId,
        //                    goodsReceiptNoteDetailMeta.ProductId);
        //                if (defaultUnit == null)
        //                    return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotExists,
        //                        _resourceService.GetString("Product unit")));

        //                var isUnitExists = await _productUnitRepository.CheckExists(goodsReceiptNote.TenantId,
        //                    goodsReceiptNoteDetailMeta.ProductId,
        //                    goodsReceiptNoteDetailMeta.UnitId);
        //                if (!isUnitExists)
        //                    return new ActionResultResponse(-3, _sharedResourceService.GetString(ValidatorMessage.InValid,
        //                        _resourceService.GetString("unit")));

        //                // Lấy về đơn vị chuyển đội.
        //                var conversionUnit = await _productConversionUnitRepository.GetConversion(
        //                    goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.ProductId,
        //                    goodsReceiptNoteDetailMeta.UnitId, defaultUnit.Id);
        //                if (conversionUnit == null)
        //                    return new ActionResultResponse(-4,
        //                        _resourceService.GetString("Product conversion unit does not exists. Please contact with administrator."));

        //                var conversionQuantity = goodsReceiptNoteDetailMeta.Quantity * conversionUnit.Value;
        //                var conversionPrice = goodsReceiptNoteDetailMeta.Price / conversionUnit.Value;

        //                goodsReceiptNoteDetail.ConversionQuantity = conversionQuantity;
        //                goodsReceiptNoteDetail.ConversionPrice = conversionPrice
        //            }



        //        }
        //        #endregion

        //        #region Xóa chi tiết báo cáo tồn.

        //        #endregion
        //    }
        //}

        private async Task<List<GoodsReceiptNoteDetail>> RenderListGoodsReceiptNoteDetail(GoodsReceiptNote goodsReceiptNote,
            List<GoodsReceiptNoteDetailMeta> goodsReceiptNoteDetailMetas)
        {
            var listGoodsReceiptNoteDetail = new List<GoodsReceiptNoteDetail>();
            // Nhóm sản phẩm theo mã sản phẩm và theo lô.
            var groupByProducts = goodsReceiptNoteDetailMetas.GroupBy(x => x.ProductId).ToList();
            foreach (var groupProducts in groupByProducts)
            {
                // Kiểm tra sản phẩm có tồn tại không.
                var isProductExists = await _productRepository.CheckExists(groupProducts.Key, goodsReceiptNote.TenantId);
                if (!isProductExists)
                    continue;

                // Lấy về đơn vị mặc định
                var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsReceiptNote.TenantId, groupProducts.Key);
                if (defaultUnit == null)
                    continue;

                // Kiểm tra lô sản phẩm.
                var isManagementByLot = await _productRepository.CheckIsManageByLot(goodsReceiptNote.TenantId, groupProducts.Key);
                if (!isManagementByLot)
                {
                    var index = 1;
                    foreach (var goodsReceiptNoteDetailMeta in groupProducts)
                    {
                        // Kiểm tra đơn vị tính có tồn tại không.
                        var isUnitExists = await _productUnitRepository.CheckExists(goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.ProductId,
                            goodsReceiptNoteDetailMeta.UnitId);
                        if (!isUnitExists)
                            continue;

                        // Lấy về đơn vị chuyển đổi.
                        goodsReceiptNoteDetailMeta.ConversionValue = 1;
                        if (goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                        {
                            var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsReceiptNote.TenantId,
                                groupProducts.Key, goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                            if (productConversionUnit == null)
                                continue;

                            goodsReceiptNoteDetailMeta.ConversionValue = productConversionUnit.Value;
                        }

                        goodsReceiptNoteDetailMeta.ConversionPrice = decimal.Round(
                            groupProducts.Sum(x => x.Price * x.Quantity)
                            / groupProducts.Sum(x =>
                                goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue),
                            2);
                        goodsReceiptNoteDetailMeta.ConversionQuantity =
                            goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue;
                        goodsReceiptNoteDetailMeta.ConversionValue =
                            goodsReceiptNoteDetailMeta.ConversionPrice *
                            goodsReceiptNoteDetailMeta.ConversionQuantity;

                        // Thông tin chi tiết phiếu nhập
                        var goodsReceiptNoteDetail = new GoodsReceiptNoteDetail
                        {
                            ChargeableWeight = goodsReceiptNoteDetailMeta.ChargeableWeight,
                            BrandId = goodsReceiptNoteDetailMeta.BrandId,
                            ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate,
                            GoodsReceiptNoteId = goodsReceiptNote.Id,
                            Height = goodsReceiptNoteDetailMeta.Height,
                            InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity ?? goodsReceiptNoteDetailMeta.Quantity,
                            Quantity = goodsReceiptNoteDetailMeta.Quantity,
                            Length = goodsReceiptNoteDetailMeta.Length,
                            LotId = await GetLotId(goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.LotId?.Trim()),
                            ManufactureDate = goodsReceiptNoteDetailMeta.ManufacturingDate,
                            Price = goodsReceiptNoteDetailMeta.Price,
                            ProductId = goodsReceiptNoteDetailMeta.ProductId,
                            SKU = goodsReceiptNoteDetailMeta.SKU,
                            UPC = goodsReceiptNoteDetailMeta.UPC,
                            VAT = goodsReceiptNoteDetailMeta.VAT,
                            UnitId = goodsReceiptNoteDetailMeta.UnitId,
                            VolumnWidth = goodsReceiptNoteDetailMeta.VolumnWidth,
                            WarehouseId = goodsReceiptNote.WarehouseId,
                            Weight = goodsReceiptNoteDetailMeta.Weight,
                            Width = goodsReceiptNoteDetailMeta.Width,
                            TotalBeforeTaxes = goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.Price,
                            TenantId = goodsReceiptNote.TenantId,
                            ConversionUnitGroupId = await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(goodsReceiptNote.TenantId,
                                goodsReceiptNoteDetailMeta.ProductId, goodsReceiptNote.EntryDate),
                            Code = $"{goodsReceiptNote.Id}_{index.ToAlphabetId(0, 3)}",
                            ConversionValue = goodsReceiptNoteDetailMeta.ConversionValue
                        };
                        if (goodsReceiptNoteDetailMeta.Tax.HasValue)
                        {
                            goodsReceiptNoteDetail.Tax = goodsReceiptNoteDetailMeta.Tax;
                            goodsReceiptNoteDetail.Taxes = goodsReceiptNoteDetail.Tax.Value * goodsReceiptNoteDetail.TotalBeforeTaxes / 100;
                            goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes + (goodsReceiptNoteDetail.Taxes ?? 0);
                        }
                        else
                        {
                            goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes;
                        }
                        listGoodsReceiptNoteDetail.Add(goodsReceiptNoteDetail);
                        index++;
                    }
                }
                else
                {
                    // Nhóm sản phẩm theo lô.
                    var groupByLots = groupProducts.GroupBy(x => x.LotId).ToList();
                    var index = 1;
                    foreach (var groupByLot in groupByLots)
                    {
                        var code = $"{goodsReceiptNote.Id}_{index.ToAlphabetId(0, 3)}";
                        foreach (var goodsReceiptNoteDetailMeta in groupByLot)
                        {
                            if (string.IsNullOrEmpty(goodsReceiptNoteDetailMeta.LotId))
                                continue;

                            // Kiểm tra đơn vị tính có tồn tại không.
                            var isUnitExists = await _productUnitRepository.CheckExists(goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.ProductId,
                                goodsReceiptNoteDetailMeta.UnitId);
                            if (!isUnitExists)
                                continue;

                            // Lấy về đơn vị chuyển đổi.
                            goodsReceiptNoteDetailMeta.ConversionValue = 1;
                            if (goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                            {
                                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsReceiptNote.TenantId,
                                    groupProducts.Key, goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                                if (productConversionUnit == null)
                                    continue;

                                goodsReceiptNoteDetailMeta.ConversionValue = productConversionUnit.Value;
                            }

                            goodsReceiptNoteDetailMeta.ConversionPrice = decimal.Round(
                                groupProducts.Sum(x => x.Price * x.Quantity)
                                / groupProducts.Sum(x =>
                                    goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue),
                                2);
                            goodsReceiptNoteDetailMeta.ConversionQuantity =
                                goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.ConversionValue;
                            goodsReceiptNoteDetailMeta.ConversionValue =
                                goodsReceiptNoteDetailMeta.ConversionPrice *
                                goodsReceiptNoteDetailMeta.ConversionQuantity;

                            // Thông tin chi tiết phiếu nhập
                            var goodsReceiptNoteDetail = new GoodsReceiptNoteDetail
                            {
                                ChargeableWeight = goodsReceiptNoteDetailMeta.ChargeableWeight,
                                BrandId = goodsReceiptNoteDetailMeta.BrandId,
                                ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate,
                                GoodsReceiptNoteId = goodsReceiptNote.Id,
                                Height = goodsReceiptNoteDetailMeta.Height,
                                InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity ?? goodsReceiptNoteDetailMeta.Quantity,
                                Quantity = goodsReceiptNoteDetailMeta.Quantity,
                                Length = goodsReceiptNoteDetailMeta.Length,
                                LotId = await GetLotId(goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.LotId?.Trim()),
                                ManufactureDate = goodsReceiptNoteDetailMeta.ManufacturingDate,
                                Price = goodsReceiptNoteDetailMeta.Price,
                                ProductId = goodsReceiptNoteDetailMeta.ProductId,
                                SKU = goodsReceiptNoteDetailMeta.SKU,
                                UPC = goodsReceiptNoteDetailMeta.UPC,
                                VAT = goodsReceiptNoteDetailMeta.VAT,
                                UnitId = goodsReceiptNoteDetailMeta.UnitId,
                                VolumnWidth = goodsReceiptNoteDetailMeta.VolumnWidth,
                                WarehouseId = goodsReceiptNote.WarehouseId,
                                Weight = goodsReceiptNoteDetailMeta.Weight,
                                Width = goodsReceiptNoteDetailMeta.Width,
                                TotalBeforeTaxes = goodsReceiptNoteDetailMeta.Quantity * goodsReceiptNoteDetailMeta.Price,
                                TenantId = goodsReceiptNote.TenantId,
                                ConversionUnitGroupId = await _productConversionUnitRepository.GetCurrentConversionUnitGroupId(goodsReceiptNote.TenantId,
                                    goodsReceiptNoteDetailMeta.ProductId, goodsReceiptNote.EntryDate),
                                Code = code,
                                ConversionValue = goodsReceiptNoteDetailMeta.ConversionValue
                            };
                            if (goodsReceiptNoteDetailMeta.Tax.HasValue)
                            {
                                goodsReceiptNoteDetail.Tax = goodsReceiptNoteDetailMeta.Tax;
                                goodsReceiptNoteDetail.Taxes = goodsReceiptNoteDetailMeta.Tax.Value * goodsReceiptNoteDetail.TotalBeforeTaxes / 100;
                                goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes + (goodsReceiptNoteDetail.Taxes ?? 0);
                            }
                            else
                            {
                                goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes;
                            }
                            listGoodsReceiptNoteDetail.Add(goodsReceiptNoteDetail);
                        }
                        index++;
                    }
                }
            }

            return listGoodsReceiptNoteDetail;
        }

        public async Task<ActionResultResponse<GoodsReceiptNoteDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var goodsReceiptNote = await _goodsReceiptNoteRepository.GetDetail(tenantId, CultureInfo.CurrentCulture.Name, id);
            if (goodsReceiptNote == null)
                return new ActionResultResponse<GoodsReceiptNoteDetailViewModel>(-1,
                    _resourceService.GetString("Goods receipt note does note exists. Please check again."));

            goodsReceiptNote.GoodsReceiptNoteDetails = await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(tenantId, id);

            // Lấy về thông tin thủ kho.
            var warehouseManager =
                await _warehouseManagerConfigRepository.GetManagerInfo(tenantId, goodsReceiptNote.WarehouseId);
            if (warehouseManager != null && warehouseManager.Any())
            {
                goodsReceiptNote.WarehouseManager = warehouseManager.FirstOrDefault()?.FullName;
            }

            return new ActionResultResponse<GoodsReceiptNoteDetailViewModel>
            {
                Data = goodsReceiptNote
            };
        }

        public async Task<SearchResult<GoodsReceiptNoteViewModel>> Search(string tenantId, string userId, string supplierId,
            string deliverId, string warehouseId, DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        {
            //if (string.IsNullOrEmpty(warehouseId))
            //    return new SearchResult<GoodsReceiptNoteViewModel>(-1,
            //        _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("warehouse")));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            if (!string.IsNullOrEmpty(warehouseId))
            {
                var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                    warehouseId, userId, tenantId);
                if (!isWarehouseManagement)
                    return new SearchResult<GoodsReceiptNoteViewModel>(-403,
                        _sharedResourceService.GetString(ErrorMessage.NotHavePermission));
            }

            var items = await _goodsReceiptNoteRepository.Search(tenantId, userId, supplierId, deliverId, warehouseId,
                fromDate, toDate,
                page, pageSize, out int totalRows);
            return new SearchResult<GoodsReceiptNoteViewModel>(items, totalRows);
        }

        public async Task<SearchResult<Suggestion<string>>> FollowSuggestion(string tenantId, string keyword, int page, int pageSize)
        {
            var items = await _goodsReceiptNoteFollowRepository.Suggestion(tenantId, CultureInfo.CurrentCulture.Name,
                keyword, page, pageSize, out int totalRows);
            return new SearchResult<Suggestion<string>>(items, totalRows);
        }

        public async Task<SearchResult<GoodsDeliverReceiverSuggestion>> GoodsDeliverSuggestion(string tenantId, string supplierId, string keyword,
            int page, int pageSize)
        {
            var items = await _goodsDeliverRepository.Suggestion(tenantId, supplierId, keyword, page, pageSize, out int totalRows);
            return new SearchResult<GoodsDeliverReceiverSuggestion>(items, totalRows);
        }

        public async Task<SearchResult<Suggestion<string>>> LotSuggestion(string tenantId, string keyword, int page, int pageSize)
        {
            var items = await _lotRepository.Suggestion(tenantId, keyword, page, pageSize, out int totalRows);
            return new SearchResult<Suggestion<string>>(items, totalRows);
        }

        public async Task<SearchResult<GoodsReceiptNoteBarcodeViewModel>> GetBarcode(string tenantId, string userId, string receiptId)
        {
            var goodsReceiptNote = await _goodsReceiptNoteRepository.GetInfo(tenantId, receiptId, true);
            if (goodsReceiptNote == null)
                return new SearchResult<GoodsReceiptNoteBarcodeViewModel>(-1, _sharedResourceService.GetString("Goods receipt note doesn't exist."));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                goodsReceiptNote.WarehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new SearchResult<GoodsReceiptNoteBarcodeViewModel>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var barcodes = await _goodsReceiptNoteDetailRepository.GetBarcode(receiptId);
            return new SearchResult<GoodsReceiptNoteBarcodeViewModel>(barcodes);
        }

        //public async Task<ActionResultResponse<WarehouseCardViewModel>> SearchWarehouseCard(string tenantId, string userId, string warehouseId,
        //    string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        //{
        //    if (string.IsNullOrEmpty(warehouseId))
        //        return new ActionResultResponse<WarehouseCardViewModel>(-1,
        //            _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("warehouse")));

        //    toDate = toDate?.AddDays(1).AddMilliseconds(-1);

        //    // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
        //    var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(warehouseId, userId, tenantId);
        //    if (!isWarehouseManagement)
        //        return new ActionResultResponse<WarehouseCardViewModel>(-403,
        //            _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

        //    var warehouseCardInfo =
        //        await _goodsReceiptNoteRepository.GetWarehouseCardInfo(tenantId, warehouseId, productId);
        //    if (warehouseCardInfo == null)
        //        return new ActionResultResponse<WarehouseCardViewModel>(-1,
        //            _sharedResourceService.GetString("Warehouse card not found."));

        //    // Lấy về tồn đầu kỳ.
        //    var openingStock =
        //        await _inventoryDailyReportRepository.GetOpeningStock(tenantId, warehouseId, productId, fromDate.Value, true);

        //    var items = await _goodsReceiptNoteRepository.SearchWarehouseCardItems(tenantId, warehouseId, productId,
        //        fromDate, toDate, page, pageSize, out int totalRows);
        //    warehouseCardInfo.WarehouseCardItems = items;
        //    warehouseCardInfo.TotalItems = totalRows;
        //    warehouseCardInfo.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
        //    return new ActionResultResponse<WarehouseCardViewModel>
        //    {
        //        Data = warehouseCardInfo
        //    };
        //}

        //public async Task<ActionResultResponse<WarehouseCardDetailViewModel>> SearchWarehouseCardDetail(string tenantId, string userId,
        //    string warehouseId, string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        //{
        //    if (string.IsNullOrEmpty(warehouseId))
        //        return new ActionResultResponse<WarehouseCardDetailViewModel>(-1,
        //            _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("warehouse")));

        //    if (!fromDate.HasValue)
        //        fromDate = DateTime.Today;

        //    toDate = toDate?.AddDays(1).AddMilliseconds(-1) ?? fromDate.Value.AddDays(1).AddMilliseconds(-1);

        //    // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
        //    var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(warehouseId, userId, tenantId);
        //    if (!isWarehouseManagement)
        //        return new ActionResultResponse<WarehouseCardDetailViewModel>(-403,
        //            _sharedResourceService.GetString(ErrorMessage.NotHavePermission));


        //    var warehouseCardInfo = await _goodsReceiptNoteRepository.GetWarehouseCardInfo(tenantId, warehouseId, productId);
        //    if (warehouseCardInfo == null)
        //        return new ActionResultResponse<WarehouseCardDetailViewModel>(-1,
        //            _sharedResourceService.GetString("Warehouse card not found."));

        //    var warehouseCardDetail = new WarehouseCardDetailViewModel
        //    {
        //        ProductId = warehouseCardInfo.ProductId,
        //        ProductName = warehouseCardInfo.ProductName,
        //        WarehouseId = warehouseCardInfo.WarehouseId,
        //        ProductUnitId = warehouseCardInfo.ProductUnitId,
        //        UnitName = warehouseCardInfo.UnitName,
        //        WarehouseAddress = warehouseCardInfo.WarehouseAddress,
        //        WarehouseName = warehouseCardInfo.WarehouseName
        //    };

        //    // Lấy về tồn đầu kỳ.
        //    var openingStock =
        //        await _inventoryDailyReportRepository.GetOpeningStock(tenantId, warehouseId, productId, fromDate.Value, true);

        //    var items = await _goodsReceiptNoteRepository.SearchWarehouseCardDetailItems(tenantId, warehouseId, productId,
        //        fromDate, toDate, page, pageSize, out int totalRows);
        //    warehouseCardDetail.WarehouseCardItems = items;
        //    warehouseCardDetail.TotalItems = totalRows;
        //    warehouseCardDetail.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
        //    warehouseCardDetail.OpeningStockValue = openingStock?.ClosingStockValue ?? 0;
        //    return new ActionResultResponse<WarehouseCardDetailViewModel>
        //    {
        //        Data = warehouseCardDetail
        //    };
        //}

        #endregion        

        #region Private
        private async Task<string> GetDeliverId(string tenantId, string supplierId, string deliverId, string deliverFullName, string deliverPhoneNumber)
        {
            if (string.IsNullOrEmpty(deliverId))
            {
                // Check delivery exists.
                var deliver = await _goodsDeliverRepository.GetInfo(supplierId, deliverFullName, deliverPhoneNumber);
                if (deliver == null)
                    return await AddNewDeliver();

                // Update deliver phonenumber when change.
                if (deliver.PhoneNumber != deliverPhoneNumber)
                {
                    deliver.PhoneNumber = deliverPhoneNumber;
                    await _goodsDeliverRepository.Update(deliver);
                }

                return deliver.Id;
            }
            else
            {
                var deliver = await _goodsDeliverRepository.GetInfoBySupplier(tenantId, supplierId, deliverId);
                if (deliver == null)
                    return await AddNewDeliver();

                // Update deliver phonenumber when change.
                if (deliver.PhoneNumber != deliverPhoneNumber)
                {
                    deliver.PhoneNumber = deliverPhoneNumber;
                    await _goodsDeliverRepository.Update(deliver);
                }

                return deliver.Id;
            }

            async Task<string> AddNewDeliver()
            {
                deliverId = Guid.NewGuid().ToString();
                var deliver = new GoodsDeliver
                {
                    Id = deliverId,
                    FullName = deliverFullName,
                    PhoneNumber = deliverPhoneNumber,
                    UnsignName =
                        $"{deliverFullName.StripVietnameseChars().ToUpper()} {deliverPhoneNumber}",
                    SupplierId = supplierId,
                    TenantId = tenantId
                };

                await _goodsDeliverRepository.Insert(deliver);
                return deliverId;
            }
        }

        private async Task<string> GetGoodsReceiptNoteFollowId(string tenantId, string id, string name)
        {
            var isIdExists = await _goodsReceiptNoteFollowRepository.CheckExists(tenantId, id);
            if (isIdExists)
                return id;

            var languageId = CultureInfo.CurrentCulture.Name;
            var follow =
                await _goodsReceiptNoteFollowRepository.GetByName(tenantId, languageId, name);
            if (follow != null)
                return follow.Id;

            id = Guid.NewGuid().ToString();
            name = name.Trim();
            var result = await _goodsReceiptNoteFollowRepository.Insert(new GoodsReceiptNoteFollow
            {
                Id = id,
                Name = name.Trim(),
                UnsignName = name.StripVietnameseChars().ToUpper(),
                LanguageId = languageId,
                TenantId = tenantId
            });
            return result > 0 ? id : string.Empty;
        }

        private async Task<string> GetLotId(string tenantId, string lotNumber)
        {
            if (string.IsNullOrEmpty(lotNumber))
                return null;

            var isLotNumberExists = await _lotRepository.CheckExists(tenantId, lotNumber);
            if (isLotNumberExists)
                return lotNumber;

            await _lotRepository.Insert(new Lot
            {
                TenantId = tenantId,
                Id = lotNumber
            });
            return lotNumber;
        }

        private async Task<string> GenerateId(string tenantId)
        {
            while (true)
            {
                var totalItem = await _goodsReceiptNoteRepository.GetTotal(tenantId);
                var id = totalItem.ToAlphabetId(2, 4);

                // Check id exists.
                var isIdExists = await _goodsReceiptNoteDetailRepository.CheckExistsByProductId(tenantId, id);
                if (!isIdExists) return id;
            }
        }

        private void TrimGoodsReceiptNoteMeta(ref GoodsReceiptNoteMeta goodsReceiptNoteMeta)
        {
            goodsReceiptNoteMeta.WarehouseId = goodsReceiptNoteMeta.WarehouseId?.Trim();
            goodsReceiptNoteMeta.DeliverId = goodsReceiptNoteMeta.DeliverId?.Trim();
            goodsReceiptNoteMeta.DeliverFullName = goodsReceiptNoteMeta.DeliverFullName?.Trim();
            goodsReceiptNoteMeta.DeliverPhoneNumber = goodsReceiptNoteMeta.DeliverPhoneNumber?.Trim();
            goodsReceiptNoteMeta.FollowId = goodsReceiptNoteMeta.FollowId?.Trim();
            goodsReceiptNoteMeta.Follow = goodsReceiptNoteMeta.Follow?.Trim();
            goodsReceiptNoteMeta.InvoiceNo = goodsReceiptNoteMeta.InvoiceNo?.Trim();
            goodsReceiptNoteMeta.SupplierId = goodsReceiptNoteMeta.SupplierId?.Trim();
            goodsReceiptNoteMeta.Note = goodsReceiptNoteMeta.Note?.Trim();

            foreach (var goodsReceiptNoteDetail in goodsReceiptNoteMeta.GoodsReceiptNoteDetails)
            {
                goodsReceiptNoteDetail.LotId =
                    string.IsNullOrEmpty(goodsReceiptNoteDetail.LotId?.Trim()) ? null : goodsReceiptNoteDetail.LotId;
            }
        }
        #endregion
    }
}
