using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
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
    public class GoodsReceiptNoteDetailService : IGoodsReceiptNoteDetailService
    {
        private readonly IGoodsReceiptNoteRepository _goodsReceiptNoteRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly ILotRepository _lotRepository;
        private readonly IProductRepository _productRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IProductConversionUnitRepository _productConversionUnitRepository;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;
        private readonly IInventoryReportService _inventoryReportService;

        //private readonly IInventoryDailyReportService _inventoryDailyReportService;
        private readonly IMediator _mediator;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public GoodsReceiptNoteDetailService(IGoodsReceiptNoteRepository goodsReceiptNoteRepository,
            IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService, ILotRepository lotRepository,
            IProductUnitRepository productUnitRepository,
            IWarehouseManagerConfigRepository warehouseManagerConfigRepository, IMediator mediator, IProductRepository productRepository,
            IInventoryReportRepository inventoryReportRepository,
            IProductConversionUnitRepository productConversionUnitRepository, IInventoryReportService inventoryReportService, IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository)
        {
            _goodsReceiptNoteRepository = goodsReceiptNoteRepository;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _lotRepository = lotRepository;
            _productUnitRepository = productUnitRepository;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
            _mediator = mediator;
            _productRepository = productRepository;
            _inventoryReportRepository = inventoryReportRepository;
            _productConversionUnitRepository = productConversionUnitRepository;
            _inventoryReportService = inventoryReportService;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
        }

        public async Task<ActionResultResponse<dynamic>> Insert(string tenantId, string userId, string receiptId,
            GoodsReceiptNoteDetailMeta goodsReceiptNoteDetailMeta)
        {
            var goodsReceiptNote = await _goodsReceiptNoteRepository.GetInfo(tenantId, receiptId);
            if (goodsReceiptNote == null)
                return new ActionResultResponse<dynamic>(-1, _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Goods receipt note")));

            // Kiểm tra lô sản phẩm.
            var isManagementByLot = await _productRepository.CheckIsManageByLot(tenantId, goodsReceiptNoteDetailMeta.ProductId);
            if (isManagementByLot && string.IsNullOrEmpty(goodsReceiptNoteDetailMeta.LotId))
                return new ActionResultResponse<dynamic>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseEnter, _resourceService.GetString("Lot number")));

            // Kiểm tra sản phẩm có tồn tại không.
            var isProductExists = await _productRepository.CheckExists(goodsReceiptNoteDetailMeta.ProductId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse<dynamic>(-3, _resourceService.GetString("Product does not exists. Please try again."));

            // Kiểm tra đơn vị tính có tồn tại không.
            var isUnitExists = await _productUnitRepository.CheckExists(tenantId, goodsReceiptNoteDetailMeta.ProductId,
                goodsReceiptNoteDetailMeta.UnitId);
            if (!isUnitExists)
                return new ActionResultResponse<dynamic>(-4, _resourceService.GetString("Invalid unit. Please check again."));

            var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsReceiptNote.TenantId, goodsReceiptNoteDetailMeta.ProductId);
            if (defaultUnit == null)
                return new ActionResultResponse<dynamic>(-5,
                    _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("product unit")));

            decimal conversionValue = 1;
            if (defaultUnit.UnitId != goodsReceiptNoteDetailMeta.UnitId)
            {
                // Lấy về đơn vị chuyển đổi.
                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsReceiptNote.TenantId,
                    goodsReceiptNoteDetailMeta.ProductId, goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                if (productConversionUnit == null)
                    return new ActionResultResponse<dynamic>(-6,
                        _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Product conversion unit")));

                conversionValue = productConversionUnit.Value;
            }

            var goodsReceiptNoteDetail = new GoodsReceiptNoteDetail
            {
                Code = await GetCode(tenantId, goodsReceiptNote.Id, goodsReceiptNoteDetailMeta.ProductId, goodsReceiptNoteDetailMeta.LotId),
                ChargeableWeight = goodsReceiptNoteDetailMeta.ChargeableWeight,
                BrandId = goodsReceiptNoteDetailMeta.BrandId,
                ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate,
                GoodsReceiptNoteId = receiptId,
                Height = goodsReceiptNoteDetailMeta.Height,
                InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity ?? goodsReceiptNoteDetailMeta.Quantity,
                Quantity = goodsReceiptNoteDetailMeta.Quantity,
                Length = goodsReceiptNoteDetailMeta.Length,
                LotId = await GetLotId(tenantId, goodsReceiptNoteDetailMeta.LotId),
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
                ConversionValue = conversionValue
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

            var result = await _goodsReceiptNoteDetailRepository.Insert(goodsReceiptNoteDetail);
            if (result <= 0)
                return new ActionResultResponse<dynamic>(-5, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Cập nhật lại giá trị đơn nhập
            await UpdateGoodsReceiptNoteTotalAmount(goodsReceiptNoteDetail.GoodsReceiptNoteId);

            // Cập nhật lại tổng số item trong phiếu nhập.
            await UpdateGoodsReceiptNoteTotalItem(goodsReceiptNoteDetail.GoodsReceiptNoteId);

            // Cập nhật báo cáo tồn kho.                 
            await UpdateInventoryReport();
            return new ActionResultResponse<dynamic>(result, _resourceService.GetString("Add product successful."), "", new
            {
                goodsReceiptNoteDetail.Id,
                goodsReceiptNoteDetail.ConcurrencyStamp
            });

            async Task UpdateInventoryReport()
            {
                await _mediator.Publish(new CreateReceiptNoteDetailCommand
                {
                    TenantId = goodsReceiptNoteDetail.TenantId,
                    ReceiptId = receiptId,
                    Date = goodsReceiptNote.EntryDate,
                    IsReceived = true,
                    ProductId = goodsReceiptNoteDetail.ProductId,
                    WarehouseId = goodsReceiptNoteDetail.WarehouseId,
                    Note = goodsReceiptNoteDetail.Note,
                    ReceiptDetailId = goodsReceiptNoteDetail.Id,
                    LotId = goodsReceiptNoteDetail.LotId,
                    GoodsReceiptNoteDetailCode = goodsReceiptNoteDetail.Code,
                    ProductUnitId = defaultUnit.Id,
                    ReceiptNo = goodsReceiptNote.ReceiptNo,
                });
            }
        }

        private async Task<string> GetCode(string tenantId, string goodsReceiptNoteId, string productId, string lotId)
        {
            var code = await _goodsReceiptNoteDetailRepository.GetCode(tenantId, goodsReceiptNoteId, productId, lotId);
            if (!string.IsNullOrEmpty(code))
                return code;
            var count = await _goodsReceiptNoteDetailRepository.GetProductCount(tenantId, goodsReceiptNoteId);
            return $"{goodsReceiptNoteId}_{(count + 1).ToAlphabetId(0, 3)}";
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string receiptId, string id,
            GoodsReceiptNoteDetailMeta goodsReceiptNoteDetailMeta)
        {
            var goodsReceiptNote = await _goodsReceiptNoteRepository.GetInfo(tenantId, receiptId, true);
            if (goodsReceiptNote == null)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Goods receipt note does not exists. Please check again."));

            var goodsReceiptNoteDetail = await _goodsReceiptNoteDetailRepository.GetInfo(receiptId, id);
            if (goodsReceiptNoteDetail == null)
                return new ActionResultResponse<string>(-2, _resourceService.GetString("Product does not exists."));

            if (goodsReceiptNoteDetail.ConcurrencyStamp != goodsReceiptNoteDetailMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3, _sharedResourceService.GetString(ErrorMessage.AlreadyUpdatedByAnother));

            var oldProductId = goodsReceiptNoteDetail.ProductId;
            var oldLotId = goodsReceiptNoteDetail.LotId;
            var oldUnitId = goodsReceiptNoteDetail.UnitId;
            var oldQuantity = goodsReceiptNoteDetail.Quantity;
            var oldPrice = goodsReceiptNoteDetail.Price;
            var oldTax = goodsReceiptNoteDetail.Tax;
            decimal conversionValue = 1;

            var defaultUnit =
                await _productUnitRepository.GetDefaultUnit(goodsReceiptNote.TenantId,
                    goodsReceiptNoteDetail.ProductId);
            if (defaultUnit == null)
                return new ActionResultResponse<string>(-8,
                    _resourceService.GetString("Default product unit does not exits. please contact with administrator."));

            if (oldProductId != goodsReceiptNoteDetailMeta.ProductId)
            {
                // Lấy kiểm tra sản phẩm thay đôi có tồn tại không.
                var isProductExists = await _productRepository.CheckExists(goodsReceiptNoteDetailMeta.ProductId,
                    goodsReceiptNote.TenantId);
                if (!isProductExists)
                    return new ActionResultResponse<string>(-4, _sharedResourceService.GetString(ErrorMessage.NotExists,
                        _resourceService.GetString("Product")));

                // Kiểm tra đơn vị gán cho sản phẩm có tồn tại không.
                var isProductUnitExists = await _productUnitRepository.CheckExists(goodsReceiptNote.TenantId,
                    goodsReceiptNoteDetailMeta.ProductId,
                    goodsReceiptNoteDetailMeta.UnitId);
                if (!isProductUnitExists)
                    return new ActionResultResponse<string>(-5, _sharedResourceService.GetString(ValidatorMessage.InValid,
                        _resourceService.GetString("Product unit")));

                // Check unit exists.
                var isUnitExists = await _productUnitRepository.CheckExists(tenantId, goodsReceiptNoteDetailMeta.ProductId,
                    goodsReceiptNoteDetailMeta.UnitId);
                if (!isUnitExists)
                    return new ActionResultResponse<string>(-7, _resourceService.GetString("Invalid unit. Please check again."));

                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsReceiptNote.TenantId,
                    goodsReceiptNoteDetail.ProductId,
                    goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                if (productConversionUnit.HasValue && goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                    conversionValue = productConversionUnit.Value;

                goodsReceiptNoteDetail.ProductId = goodsReceiptNoteDetailMeta.ProductId;
                goodsReceiptNoteDetail.ConversionValue = conversionValue;
                //goodsReceiptNoteDetail.Code = await GetCode(tenantId, goodsReceiptNote.Id, goodsReceiptNoteDetailMeta.ProductId,
                //    goodsReceiptNoteDetailMeta.LotId);
            }

            if (oldLotId != goodsReceiptNoteDetailMeta.LotId)
            {
                goodsReceiptNoteDetail.LotId = await GetLotId(tenantId, goodsReceiptNoteDetailMeta.LotId);
            }

            if (oldUnitId != goodsReceiptNoteDetailMeta.UnitId)
            {
                // Check unit exists.
                var isUnitExists = await _productUnitRepository.CheckExists(tenantId, goodsReceiptNoteDetailMeta.ProductId,
                    goodsReceiptNoteDetailMeta.UnitId);
                if (!isUnitExists)
                    return new ActionResultResponse<string>(-9, _resourceService.GetString("Invalid unit. Please check again."));

                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsReceiptNote.TenantId,
                    goodsReceiptNoteDetail.ProductId,
                    goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                if (productConversionUnit.HasValue && goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                    conversionValue = productConversionUnit.Value;

                goodsReceiptNoteDetail.UnitId = goodsReceiptNoteDetailMeta.UnitId;
                goodsReceiptNoteDetail.ConversionValue = conversionValue;
            }

            if (oldQuantity != goodsReceiptNoteDetailMeta.Quantity)
            {
                var productConversionUnit = await _productConversionUnitRepository.GetConversion(goodsReceiptNote.TenantId,
                    goodsReceiptNoteDetail.ProductId,
                    goodsReceiptNoteDetailMeta.UnitId, defaultUnit.UnitId);
                if (productConversionUnit.HasValue && goodsReceiptNoteDetailMeta.UnitId != defaultUnit.UnitId)
                    conversionValue = productConversionUnit.Value;

                goodsReceiptNoteDetail.ConversionValue = conversionValue;
                goodsReceiptNoteDetail.Quantity = goodsReceiptNoteDetailMeta.Quantity;
                CalculateAmounts();
            }

            if (oldTax != goodsReceiptNoteDetailMeta.Tax)
            {
                goodsReceiptNoteDetail.Tax = goodsReceiptNoteDetailMeta.Tax;
                CalculateAmounts();
            }

            if (oldPrice != goodsReceiptNoteDetailMeta.Price)
            {
                goodsReceiptNoteDetail.Price = goodsReceiptNoteDetailMeta.Price;
                CalculateAmounts();
                //await UpdateGoodsReceiptNoteTotalAmount(goodsReceiptNoteDetail.GoodsReceiptNoteId);
            }

            goodsReceiptNoteDetail.ExpiryDate = goodsReceiptNoteDetailMeta.ExpiryDate;
            goodsReceiptNoteDetail.InvoiceQuantity = goodsReceiptNoteDetailMeta.InvoiceQuantity;
            goodsReceiptNoteDetail.ConcurrencyStamp = Guid.NewGuid().ToString();
            var result = await _goodsReceiptNoteDetailRepository.Update(goodsReceiptNoteDetail);
            if (result <= 0)
                return new ActionResultResponse<string>(-4, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Cập nhật lại giá trị của phiếu nhập.
            await UpdateGoodsReceiptNoteTotalAmount(goodsReceiptNoteDetail.GoodsReceiptNoteId);

            // Đồng bộ lại giá trị tồn kho.
            await UpdateInventoryReport();
            return new ActionResultResponse<string>(result, "Update goods receipt note detail successful.", "", goodsReceiptNoteDetail.ConcurrencyStamp);

            void CalculateAmounts()
            {
                goodsReceiptNoteDetail.TotalBeforeTaxes = goodsReceiptNoteDetail.Quantity * goodsReceiptNoteDetail.Price;
                goodsReceiptNoteDetail.Taxes = goodsReceiptNoteDetail.Tax.HasValue
                    ? (goodsReceiptNoteDetail.Tax.Value * goodsReceiptNoteDetail.TotalBeforeTaxes) / 100
                    : 0;
                goodsReceiptNoteDetail.TotalAmounts = goodsReceiptNoteDetail.TotalBeforeTaxes + goodsReceiptNoteDetail.Taxes ?? 0;
            }

            async Task UpdateInventoryReport()
            {
                if (oldPrice != goodsReceiptNoteDetail.Price || oldQuantity != goodsReceiptNoteDetail.Quantity || oldProductId != goodsReceiptNoteDetail.ProductId
                    || oldUnitId != goodsReceiptNoteDetail.UnitId || oldLotId != goodsReceiptNoteDetail.LotId)
                {
                    await _mediator.Publish(new UpdateReceiptNoteDetailCommand
                    {
                        TenantId = goodsReceiptNoteDetail.TenantId,
                        ReceiptId = receiptId,
                        //OldPrice = oldPrice,
                        //Price = decimal.Round(goodsReceiptNoteDetailMeta.Price, 2),
                        //Quantity = goodsReceiptNoteDetail.Quantity,
                        ReceiptDate = goodsReceiptNote.EntryDate,
                        IsReceived = true,
                        ProductId = goodsReceiptNoteDetail.ProductId,
                        WarehouseId = goodsReceiptNoteDetail.WarehouseId,
                        Note = goodsReceiptNoteDetail.Note,
                        ReceiptDetailId = goodsReceiptNoteDetail.Id,
                        LotId = oldLotId,
                        ReceiptDetailCode = goodsReceiptNoteDetail.Code,
                        NewLotId = goodsReceiptNoteDetail.LotId,
                        ProductUnitId = defaultUnit.Id,
                        ReceiptNo = goodsReceiptNote.ReceiptNo
                    });
                }
            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string receiptId, string id)
        {
            var goodsReceiptNote = await _goodsReceiptNoteRepository.GetInfo(tenantId, receiptId, true);
            if (goodsReceiptNote == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Goods receipt note does not exists."));

            var goodsReceiptNoteDetailInfo = await _goodsReceiptNoteDetailRepository.GetInfo(receiptId, id);
            if (goodsReceiptNoteDetailInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Product does not exists."));

            if (goodsReceiptNote.TotalItems <= 1)
                return new ActionResultResponse(-3, _resourceService.GetString("Goods receipt note require at least product."));

            goodsReceiptNoteDetailInfo.IsDelete = true;
            var result = await _goodsReceiptNoteDetailRepository.Update(goodsReceiptNoteDetailInfo);
            if (result <= 0)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Update total goods receipt note total items.
            await UpdateGoodsReceiptNoteTotalItem(receiptId);
            await UpdateGoodsReceiptNoteTotalAmount(receiptId);

            await _mediator.Publish(new DeletedReceiptNoteDetailCommand
            {
                TenantId = goodsReceiptNote.TenantId,
                ReceiptId = receiptId,
                Date = goodsReceiptNote.EntryDate,
                IsReceived = true,
                WarehouseId = goodsReceiptNoteDetailInfo.WarehouseId,
                Code = goodsReceiptNoteDetailInfo.Code,
                ProductId = goodsReceiptNoteDetailInfo.ProductId,
                LotId = goodsReceiptNoteDetailInfo.LotId
            });

            return new ActionResultResponse(result, _resourceService.GetString("Remove product successful."));
        }

        public async Task<ActionResultResponse<ProductInfoViewModel>> GetProductInfoByCode(string tenantId, string userId, string code,
            string warehouseId, GoodsDeliveryNoteType type, DateTime deliveryDate)
        {
            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<ProductInfoViewModel>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productInfo = await _goodsReceiptNoteDetailRepository.GetProductInfoByCode(tenantId, warehouseId, code);
            if (productInfo == null)
                return new ActionResultResponse<ProductInfoViewModel>(-1, _resourceService.GetString("Product you are looking for does not exits.",
                    _sharedResourceService.GetString(ErrorMessage.Sorry)));

            // Lấy về số lượng tồn kho của sản phẩm.            
            var openingStock = !string.IsNullOrEmpty(productInfo.LotId)
                ? await _inventoryReportRepository.GetOpeningStockByLot(tenantId, warehouseId, productInfo.ProductId, productInfo.LotId,
                    deliveryDate)
                    : await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, productInfo.ProductId,
                deliveryDate);

            if (openingStock == null || openingStock.ClosingStockValue <= 0)
                return new ActionResultResponse<ProductInfoViewModel>(-2, _resourceService.GetString("Out of stock.",
                    _sharedResourceService.GetString(ErrorMessage.Sorry)));

            productInfo.InventoryQuantity = openingStock.ClosingStockQuantity;
            productInfo.Price = openingStock.ExWarehousePrice;

            productInfo.Price = !string.IsNullOrEmpty(productInfo.LotId)
                ? await _inventoryReportRepository.GetExWarehousePriceByCode(tenantId, warehouseId, code)
                : openingStock.ExWarehousePrice;
            productInfo.InventoryQuantity = openingStock.ClosingStockQuantity;
            productInfo.Units = await _productUnitRepository.GetByProductId(tenantId, productInfo.ProductId);
            var conversionUnit = productInfo.Units.FirstOrDefault(x => x.UnitId == productInfo.UnitId);
            if (conversionUnit == null)
                return new ActionResultResponse<ProductInfoViewModel>(-4, _resourceService.GetString("Product unit does not exists. Please contact with administrator."));

            // Lấy về tổng sản phẩm theo phiếu nhập.
            var receivedQuantities = await _goodsReceiptNoteDetailRepository.GetQuantitiesByCode(tenantId,
                warehouseId, code);

            // Tổng xuất theo mã sản phẩm thuộc phiếu nhập.
            var deliveryQuantities = await _goodsDeliveryNoteDetailsRepository.GetQuantiesByCode(tenantId,
                warehouseId, code, string.Empty);

            productInfo.RealInventoryQuantity = receivedQuantities - deliveryQuantities;
            return new ActionResultResponse<ProductInfoViewModel>
            {
                Data = productInfo
            };
        }

        public async Task<ActionResultResponse> ChangeWarehouse(string tenantId, string goodsReceiptNoteId, string warehouseId,
            string userId, string fullName)
        {
            var goodsReceiptNoteDetails =
                await _goodsReceiptNoteDetailRepository.GetsAll(tenantId, goodsReceiptNoteId);
            if (goodsReceiptNoteDetails.Any())
            {
                foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails)
                {
                    goodsReceiptNoteDetail.WarehouseId = warehouseId;
                    goodsReceiptNoteDetail.LastUpdate = DateTime.Now;
                    goodsReceiptNoteDetail.LastUpdateUserId = userId;
                    goodsReceiptNoteDetail.LastUpdateFullName = fullName;
                }

                var result = await _goodsReceiptNoteDetailRepository.Updates(goodsReceiptNoteDetails);
                return new ActionResultResponse(result, result > 0
                                                        ? _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful, _resourceService.GetString("Goods reipt note detail"))
                        : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }
            return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NothingChanges));
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

        private async Task UpdateGoodsReceiptNoteTotalAmount(string goodsReceiptNoteId)
        {
            var goodsReceiptNoteTotalAmount = await _goodsReceiptNoteDetailRepository.GetAmountsByGoodsReceiptNoteId(goodsReceiptNoteId);
            await _goodsReceiptNoteRepository.UpdateAmounts(goodsReceiptNoteId, goodsReceiptNoteTotalAmount);
        }

        private async Task UpdateGoodsReceiptNoteTotalItem(string goodsReceiptNoteId)
        {
            var totalItems = await _goodsReceiptNoteDetailRepository.CountByGoodsReceiptNoteId(goodsReceiptNoteId);
            await _goodsReceiptNoteRepository.UpdateTotalItems(goodsReceiptNoteId, totalItems);
        }
    }
}
