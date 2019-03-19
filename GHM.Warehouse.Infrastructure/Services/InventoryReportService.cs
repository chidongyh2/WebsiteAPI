using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using MediatR;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class InventoryReportService : IInventoryReportService
    {
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IGoodsReceiptNoteRepository _goodsReceiptNoteRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;
        private readonly IInventoryReportDetailRepository _inventoryReportDetailRepository;
        private readonly IProductRepository _productRepository;
        private readonly IWarehouseRepository _warehouseRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IMediator _mediator;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public InventoryReportService(IInventoryReportRepository inventoryReportRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService, IWarehouseConfigRepository warehouseConfigRepository,
            IWarehouseManagerConfigRepository warehouseManagerConfigRepository, IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IGoodsReceiptNoteRepository goodsReceiptNoteRepository, IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository,
            IProductRepository productRepository, IInventoryReportDetailRepository inventoryReportDetailRepository, IWarehouseRepository warehouseRepository,
            IProductUnitRepository productUnitRepository, IMediator mediator)
        {
            _inventoryReportRepository = inventoryReportRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _warehouseConfigRepository = warehouseConfigRepository;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _goodsReceiptNoteRepository = goodsReceiptNoteRepository;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
            _productRepository = productRepository;
            _inventoryReportDetailRepository = inventoryReportDetailRepository;
            _warehouseRepository = warehouseRepository;
            _productUnitRepository = productUnitRepository;
            _mediator = mediator;
        }

        public async Task<ActionResultResponse> ReSyncInventoryReport(string tenantId, string warehouseId, string productId,
            DateTime fromDate, int page, int pageSize)
        {
            var inventoryReports = await _inventoryReportRepository.Search(tenantId, warehouseId, productId, fromDate, page, pageSize,
                out int totalRows);
            if (inventoryReports == null || !inventoryReports.Any())
                return new ActionResultResponse(-2, _resourceService.GetString("Nothing for sync."));

            var totalPage = Math.Ceiling((decimal)totalRows / pageSize);
            if (page < totalPage)
            {
                page++;
                await ReSyncInventoryReport(tenantId, warehouseId, productId, fromDate, page, pageSize);
            }

            foreach (var inventoryReport in inventoryReports)
            {
                // Lấy về chi tiết phiếu nhập.
                var inventoryReportDetails = await _inventoryReportDetailRepository.GetsAll(inventoryReport.Id, productId);

                // Nhóm sản phẩm theo lô.
                var groupByLots = inventoryReportDetails.GroupBy(x => new { x.ProductId, x.LotId });
                foreach (var groupByLot in groupByLots)
                {
                    // Trường hợp quản lý theo lô sẽ lấy về tồn đầu theo lô.
                }

                // Lấy về tồn đầu kỳ.
                var openingStockQuantity = await _inventoryReportRepository.GetOpeningStock(inventoryReport.TenantId,
                    inventoryReport.WarehouseId,
                    inventoryReport.ProductId, inventoryReport.Date);

                inventoryReport.OpeningStockQuantity = openingStockQuantity?.ClosingStockValue ?? 0;
                inventoryReport.OpeningStockValue = openingStockQuantity?.ClosingStockValue ?? 0;

                inventoryReport.ClosingStockQuantity = inventoryReport.IsReceived
                    ? inventoryReport.OpeningStockQuantity + inventoryReport.Quantity
                    : inventoryReport.OpeningStockQuantity - inventoryReport.Quantity;
                //inventoryReport.ClosingStockValue = inventoryReport.IsReceived
                //    ? inventoryReport.OpeningStockValue + inventoryReport.Quantity * inventoryReport.Price
                //    : inventoryReport.OpeningStockValue - inventoryReport.Quantity * inventoryReport.Price;

                await _inventoryReportRepository.Update(inventoryReport);
            }
            return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.SyncDataSuccessful));
        }

        public async Task<ActionResultResponse> Insert(InventoryReport inventoryReport)
        {
            // Kiểm tra đã tồn tại chưa.
            var isExists = await _inventoryReportRepository.CheckExists(inventoryReport.TenantId,
                inventoryReport.WarehouseId,
                inventoryReport.ProductId, inventoryReport.Date);
            if (isExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Inventory report already exists."));

            // Nhóm chi tiết báo cáo tồn theo lô
            var groupInventoryReportDetailByLots = inventoryReport.InventoryReportDetails.GroupBy(x => new { x.ProductId, x.LotId, x.Price }).ToList();
            if (groupInventoryReportDetailByLots.Any())
            {
                foreach (var groupInventoryReportDetailByLot in groupInventoryReportDetailByLots)
                {
                    var openingStock = await _inventoryReportRepository.GetOpeningStockByLot(inventoryReport.TenantId,
                        inventoryReport.WarehouseId, groupInventoryReportDetailByLot.Key.ProductId,
                        groupInventoryReportDetailByLot.Key.LotId, inventoryReport.Date);

                    var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                    var openingStockValue = openingStock?.ClosingStockValue ?? 0;
                    var quantity = groupInventoryReportDetailByLot.Sum(x => x.Quantity);

                    var closingStockQuantity = inventoryReport.IsReceived
                        ? openingStockQuantity + quantity
                        : openingStockQuantity - quantity;
                    var closingStockValue = inventoryReport.IsReceived
                        ? openingStockValue +
                          quantity * groupInventoryReportDetailByLot.Key.Price
                        : openingStockValue -
                          quantity * groupInventoryReportDetailByLot.Key.Price;

                    foreach (var inventoryReportDetail in groupInventoryReportDetailByLot)
                    {
                        inventoryReportDetail.InventoryReportId = inventoryReport.Id;
                        inventoryReportDetail.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                        inventoryReportDetail.OpeningStockValue = openingStock?.ClosingStockValue ?? 0;
                        inventoryReportDetail.ClosingStockQuantity = closingStockQuantity;
                        inventoryReportDetail.ClosingStockValue = closingStockValue;
                        inventoryReportDetail.ExWarehousePrice = await GetExWarehousePrice(inventoryReport.TenantId, inventoryReport.WarehouseId,
                            openingStockValue, openingStockQuantity, inventoryReport.Date, inventoryReportDetail);
                    }
                }
            }

            inventoryReport.ClosingStockQuantity = inventoryReport.IsReceived
                ? inventoryReport.OpeningStockQuantity + inventoryReport.Quantity
                : inventoryReport.OpeningStockQuantity - inventoryReport.Quantity;
            inventoryReport.ClosingStockValue = inventoryReport.IsReceived
                ? inventoryReport.OpeningStockValue + inventoryReport.TotalAmounts
                : inventoryReport.OpeningStockValue - inventoryReport.TotalAmounts;

            var result = await _inventoryReportRepository.Insert(inventoryReport);
            if (result <= 0)
            {
                return new ActionResultResponse(result, _sharedResourceService.GetString(SuccessMessage.AddSuccessful,
                    _resourceService.GetString("inventory report")));
            }

            foreach (var inventoryReportInventoryReportDetail in inventoryReport.InventoryReportDetails)
            {
                await SynchronizeAllInventory(inventoryReport.TenantId, inventoryReport.WarehouseId,
                    inventoryReport.ProductId, inventoryReportInventoryReportDetail.LotId,
                    inventoryReport.Date);
            }
            return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse> Update(InventoryReport inventoryReport)
        {
            // TODO: Check
            //var inventoryReportInfo = await _inventoryReportRepository.GetInfoByReceipDetailtId(inventoryReport.TenantId, inventoryReport.WarehouseId,
            //    inventoryReport.IsReceived);
            //if (inventoryReportInfo == null)
            //    return new ActionResultResponse(-2, _resourceService.GetString("Inventory report does not exists"));

            //inventoryReportInfo.Date = inventoryReport.Date;
            //inventoryReportInfo.OpeningStockQuantity = inventoryReport.OpeningStockQuantity;
            //inventoryReportInfo.OpeningStockValue = inventoryReport.OpeningStockValue;
            //inventoryReportInfo.ExWarehousePrice = inventoryReport.ExWarehousePrice;
            //inventoryReportInfo.Quantity = inventoryReport.Quantity;
            //inventoryReportInfo.Price = inventoryReport.Price;
            //inventoryReportInfo.ClosingStockQuantity = inventoryReport.ClosingStockQuantity;
            //inventoryReportInfo.ClosingStockValue = inventoryReport.ClosingStockValue;

            //var result = await _inventoryReportRepository.Update(inventoryReportInfo);
            //return new ActionResultResponse(result,
            //    result > 0
            //        ? _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful, _resourceService.GetString("inventory report"))
            //        : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            return new ActionResultResponse();
        }

        public async Task<SearchResult<InventoryReportViewModel>> Search(string tenantId, string userId, string warehouseId, string keyword,
            DateTime fromDate, DateTime toDate, int page, int pageSize)
        {
            if (string.IsNullOrEmpty(warehouseId))
                return new SearchResult<InventoryReportViewModel>(-1, _resourceService.GetString(ValidatorMessage.PleaseSelect, "warehouse"));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new SearchResult<InventoryReportViewModel>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // Lấy về danh sách sản phẩm theo kho.
            //var products =
            //    await _goodsReceiptNoteDetailRepository.GetsProductByWarehouse(tenantId, warehouseId, page, pageSize, out int totalRows);
            //if (products == null || !products.Any())
            //    return new SearchResult<InventoryReportViewModel>(null, 0);

            toDate = toDate.AddDays(1).AddMilliseconds(-1);
            var inventoryReports =
                await _inventoryReportRepository.Search(tenantId, warehouseId, fromDate, toDate, page, pageSize, out int totalRows);

            if (inventoryReports == null || !inventoryReports.Any())
                return new SearchResult<InventoryReportViewModel>(inventoryReports, totalRows);

            foreach (var inventoryReportViewModel in inventoryReports)
            {
                // Lấy về tồn đầu kỳ.
                var openingStock =
                    await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, inventoryReportViewModel.ProductId, fromDate);
                inventoryReportViewModel.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                inventoryReportViewModel.OpeningStockValue = openingStock?.ClosingStockValue ?? 0;
            }
            return new SearchResult<InventoryReportViewModel>(inventoryReports, totalRows);
        }

        public async Task<ActionResultResponse<WarehouseCardViewModel>> SearchWarehouseCard(string tenantId, string userId, string warehouseId,
            string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        {
            if (string.IsNullOrEmpty(warehouseId))
                return new ActionResultResponse<WarehouseCardViewModel>(-1,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("warehouse")));

            if (!fromDate.HasValue)
                return new ActionResultResponse<WarehouseCardViewModel>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    _resourceService.GetString("from date")));

            if (!toDate.HasValue)
                return new ActionResultResponse<WarehouseCardViewModel>(-3, _sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    _resourceService.GetString("to date")));

            toDate = toDate.Value.AddDays(1).AddMilliseconds(-1);

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<WarehouseCardViewModel>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            //var warehouseCardInfo =
            //    await _goodsReceiptNoteRepository.GetWarehouseCardInfo(tenantId, warehouseId, productId);
            //if (warehouseCardInfo == null)
            //    return new ActionResultResponse<WarehouseCardViewModel>(-1,
            //        _sharedResourceService.GetString("Warehouse card not found."));

            var productInfo = await _productRepository.GetBriefInfo(tenantId, productId);
            if (productInfo == null)
                return new ActionResultResponse<WarehouseCardViewModel>(-4,
                     _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("product")));

            var warehouseInfo = await _warehouseRepository.GetInfo(warehouseId, true);
            if (warehouseInfo == null)
                return new ActionResultResponse<WarehouseCardViewModel>(-5,
                     _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("warehouse")));

            //var defaultUnit = await _productUnitRepository.GetDefaultUnit(tenantId, productId);
            //if (defaultUnit == null)
            //    return new ActionResultResponse<WarehouseCardViewModel>(-6, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            var warehouseCardInfo = new WarehouseCardViewModel
            {
                WarehouseId = warehouseInfo.Id,
                WarehouseName = warehouseInfo.Name,
                WarehouseAddress = warehouseInfo.Address,
                ProductId = productInfo.Id,
                ProductName = productInfo.Name,
                UnitId = productInfo.UnitId,
                UnitName = productInfo.UnitName,
            };

            // Lấy về tồn đầu kỳ.
            var openingStock =
                await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, productId, fromDate.Value);

            var items = await _inventoryReportRepository.Search(tenantId, warehouseId, productId,
                fromDate.Value, toDate.Value, page, pageSize, out int totalRows);
            warehouseCardInfo.WarehouseCardItems = items;
            warehouseCardInfo.TotalItems = totalRows;
            warehouseCardInfo.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
            return new ActionResultResponse<WarehouseCardViewModel>
            {
                Data = warehouseCardInfo
            };
        }

        public async Task<ActionResultResponse<WarehouseCardDetailViewModel>> SearchWarehouseCardDetail(string tenantId, string userId,
            string warehouseId, string productId, DateTime? fromDate,
            DateTime? toDate, int page, int pageSize)
        {
            if (string.IsNullOrEmpty(warehouseId))
                return new ActionResultResponse<WarehouseCardDetailViewModel>(-1,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("warehouse")));

            if (!fromDate.HasValue)
                return new ActionResultResponse<WarehouseCardDetailViewModel>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    _resourceService.GetString("from date")));

            if (!toDate.HasValue)
                return new ActionResultResponse<WarehouseCardDetailViewModel>(-3, _sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    _resourceService.GetString("to date")));

            toDate = toDate.Value.AddDays(1).AddMilliseconds(-1);
            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<WarehouseCardDetailViewModel>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));


            //var warehouseCardInfo = await _goodsReceiptNoteRepository.GetWarehouseCardInfo(tenantId, warehouseId, productId);
            //if (warehouseCardInfo == null)
            //    return new ActionResultResponse<WarehouseCardDetailViewModel>(-1,
            //        _sharedResourceService.GetString("Warehouse card not found."));

            var productInfo = await _productRepository.GetBriefInfo(tenantId, productId);
            if (productInfo == null)
                return new ActionResultResponse<WarehouseCardDetailViewModel>(-4,
                     _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("product")));

            var warehouseInfo = await _warehouseRepository.GetInfo(warehouseId, true);
            if (warehouseInfo == null)
                return new ActionResultResponse<WarehouseCardDetailViewModel>(-5,
                     _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("warehouse")));

            var warehouseCardDetail = new WarehouseCardDetailViewModel
            {
                ProductId = productInfo.Id,
                ProductName = productInfo.Name,
                WarehouseId = warehouseInfo.Id,
                UnitId = productInfo.UnitId,
                UnitName = productInfo.UnitName,
                WarehouseAddress = warehouseInfo.Address,
                WarehouseName = warehouseInfo.Name
            };

            // Lấy về tồn đầu kỳ.
            var openingStock =
                await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, productId, fromDate.Value);

            var items = await _inventoryReportRepository.SearchWarehouseCardDetailItems(tenantId, warehouseId, productId,
                fromDate, toDate, page, pageSize, out int totalRows);
            warehouseCardDetail.WarehouseCardItems = items;
            warehouseCardDetail.TotalItems = totalRows;
            warehouseCardDetail.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
            warehouseCardDetail.OpeningStockValue = openingStock?.ClosingStockValue ?? 0;
            return new ActionResultResponse<WarehouseCardDetailViewModel>
            {
                Data = warehouseCardDetail
            };
        }

        public async Task<ActionResultResponse> UpdateGoodsDeliveryNoteInventoryPrice(string tenantId, string warehouseId,
            string receiptDetailId, decimal price, decimal exWarehousePrice)
        {
            // TODO: Check
            //var goodsDeliveryNoteDetailIds =
            //    await _goodsDeliveryNoteDetailsRepository.GetsByGoodsReceiptNoteDetailId(tenantId, warehouseId,
            //        receiptDetailId);
            //if (goodsDeliveryNoteDetailIds == null || !goodsDeliveryNoteDetailIds.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("Goods delivery note detail")));

            //var inventoryDetails =
            //    await _inventoryReportRepository.GetsByReceiptNoteDetailId(tenantId, warehouseId, goodsDeliveryNoteDetailIds.Select(x => x.Id).ToList(), false);
            //if (inventoryDetails == null || !inventoryDetails.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotFound, _resourceService.GetString("Inventory report")));

            //foreach (var inventoryDetail in inventoryDetails)
            //{
            //    inventoryDetail.Price = price;
            //    inventoryDetail.ExWarehousePrice = exWarehousePrice;
            //}

            //var result = await _inventoryReportRepository.SaveChangeAsync();
            //return new ActionResultResponse(result, result > 0
            //    ? _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful)
            //    : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            return new ActionResultResponse();
        }

        public async Task<ActionResultResponse> ReSyncExWarehousePrice(string tenantId, string warehouseId, string productId, DateTime fromDate,
            int page, int pageSize)
        {
            //var inventoryReports =
            //    await _inventoryReportRepository.GetsByProductId(tenantId, warehouseId, productId, fromDate, page, pageSize, out int totalRows);

            //var totalPage = Math.Ceiling((double)totalRows / pageSize);
            //foreach (var inventoryReport in inventoryReports)
            //{
            //    var openingStock = await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId,
            //        productId, inventoryReport.Date,
            //        true);
            //    // Trường hợp là phiếu nhập sẽ tính lại giá trị tồn và giá xuất kho.
            //    if (inventoryReport.IsReceived)
            //    {
            //        // Kiểm tra sản phẩm có quản lý theo lô không.
            //        var isProductManageByLot = await _productRepository.CheckIsManageByLot(inventoryReport.ProductId);
            //        inventoryReport.OpeningStockValue = openingStock.ClosingStockValue;
            //        inventoryReport.ClosingStockValue = inventoryReport.OpeningStockValue + (inventoryReport.Price * inventoryReport.Quantity);

            //        var exWarehousePrice = isProductManageByLot
            //            ? inventoryReport.Price
            //            : (inventoryReport.OpeningStockValue + inventoryReport.Quantity * inventoryReport.Price)
            //              / (inventoryReport.OpeningStockQuantity + inventoryReport.Quantity);
            //        inventoryReport.ExWarehousePrice = Math.Round(exWarehousePrice, 2);
            //        await _inventoryReportRepository.Update(inventoryReport);
            //    }
            //    // Trường hợp là xuất sẽ update lại giá xuất và giá sản phẩm.
            //    else
            //    {
            //        inventoryReport.Price = openingStock.ExWarehousePrice;
            //        inventoryReport.ExWarehousePrice = openingStock.ExWarehousePrice;
            //        inventoryReport.OpeningStockValue = openingStock.ClosingStockValue;
            //        inventoryReport.ClosingStockValue = inventoryReport.OpeningStockValue - (inventoryReport.Price * inventoryReport.Quantity);
            //        await _inventoryReportRepository.Update(inventoryReport);
            //    }
            //}

            //// Chạy đồng bộ trang tiếp theo.
            //if (totalPage > 1 && page < totalPage)
            //{
            //    await ReSyncExWarehousePrice(tenantId, warehouseId, productId, fromDate, page + 1, pageSize);
            //}

            return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.SyncDataSuccessful));
        }

        public async Task<ActionResultResponse> Synchronize(string tenantId, string warehouseId, string productId, DateTime fromDate, int page,
            int pageSize)
        {
            // Lấy về danh sách báo cáo tồn kho.
            var invetoryReports = await _inventoryReportRepository.Search(tenantId, warehouseId, productId, fromDate,
                page, pageSize, out var totalRows);

            var totalPage = Math.Ceiling((decimal)totalRows / pageSize);
            if (page < totalPage)
            {
                page++;
                await Synchronize(tenantId, warehouseId, productId, fromDate, page, pageSize);
            }

            foreach (var inventoryReport in invetoryReports)
            {
                // Lấy về chi tiết tồn kho.
                var inventoryReportDetails =
                    await _inventoryReportDetailRepository.GetsAll(inventoryReport.Id, productId);
                foreach (var inventoryReportDetail in inventoryReportDetails)
                {
                    // Trường hợp quản lý theo lô sẽ lấy về tồn theo lô. Ngược lại lấy về tồn theo sản phẩm.
                    var openingStock = !string.IsNullOrEmpty(inventoryReportDetail.LotId)
                        ? await _inventoryReportRepository.GetOpeningStockByLot(tenantId,
                            warehouseId, inventoryReportDetail.ProductId, inventoryReportDetail.LotId, inventoryReport.Date)
                        : await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, productId, inventoryReport.Date);

                    var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                    var openingStockValue = openingStock?.ClosingStockValue ?? 0;

                    inventoryReportDetail.OpeningStockQuantity = openingStockQuantity;
                    inventoryReportDetail.OpeningStockValue = openingStockValue;
                    inventoryReportDetail.ClosingStockQuantity =
                        inventoryReport.IsReceived
                            ? inventoryReportDetail.OpeningStockQuantity + inventoryReportDetail.Quantity
                            : inventoryReportDetail.OpeningStockQuantity - inventoryReportDetail.Quantity;
                    inventoryReportDetail.ClosingStockValue =
                        inventoryReport.IsReceived
                            ? openingStockValue + inventoryReportDetail.Quantity * inventoryReportDetail.Price
                            : openingStockValue - inventoryReportDetail.Quantity * inventoryReportDetail.Price;

                    inventoryReportDetail.ExWarehousePrice = inventoryReportDetail.IsReceived
                        ? inventoryReportDetail.ExWarehousePrice
                        : openingStock?.ExWarehousePrice ?? 0;

                    if (inventoryReportDetail.IsReceived)
                        // Trường hợp quản lý theo lô giá xuất kho sẽ bằng giá nhập ngược lại sẽ tính theo phương pháp.
                        inventoryReportDetail.ExWarehousePrice = await GetExWarehousePrice(inventoryReport.TenantId, inventoryReport.WarehouseId,
                            inventoryReportDetail.OpeningStockValue, inventoryReportDetail.OpeningStockQuantity, inventoryReport.Date, inventoryReportDetail);
                    else
                        inventoryReportDetail.ExWarehousePrice = inventoryReportDetail.Price;
                }

                var resultUpdateInventoryReportDetail = await _inventoryReportDetailRepository.Updates(inventoryReportDetails);
                if (resultUpdateInventoryReportDetail > 0)
                {
                    var openingStock =
                        await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, productId, inventoryReport.Date);

                    // Cập nhật lại tổng tiền của báo cáo tồn.
                    inventoryReport.TotalAmounts = inventoryReportDetails.Sum(x => x.Quantity * x.Price);
                    inventoryReport.Quantity = inventoryReportDetails.Sum(x => x.Quantity);
                    inventoryReport.OpeningStockValue = openingStock?.ClosingStockValue ?? 0;
                    inventoryReport.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                    inventoryReport.ClosingStockValue = inventoryReport.IsReceived
                        ? inventoryReport.OpeningStockValue + inventoryReport.TotalAmounts
                        : inventoryReport.OpeningStockValue - inventoryReport.TotalAmounts;
                    inventoryReport.ClosingStockQuantity = inventoryReport.IsReceived
                        ? inventoryReport.OpeningStockQuantity + inventoryReport.Quantity
                        : inventoryReport.OpeningStockQuantity - inventoryReport.Quantity;
                }
                await _inventoryReportRepository.Updates(invetoryReports);
            }
            return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.SyncDataSuccessful));
        }

        public async Task UpdateWarehouse(string tenantId, string goodsReceiptNoteId, string newWarehouseId, bool isReceived)
        {
            var inventoryReports = await _inventoryReportRepository.GetByReceiptId(tenantId, goodsReceiptNoteId, isReceived);
            foreach (var inventoryReport in inventoryReports)
            {
                inventoryReport.WarehouseId = newWarehouseId;
            }
            await _inventoryReportRepository.Updates(inventoryReports);
        }

        public async Task<decimal> GetExWarehousePrice(string tenantId, string warehouseId, decimal openingStockValue, decimal openingStockQuantity,
            DateTime date, InventoryReportDetail inventoryReportDetail)
        {
            if (!string.IsNullOrEmpty(inventoryReportDetail.LotId))
                return inventoryReportDetail.Price;

            // Lấy về phương pháp tính tồn.
            var inventoryCalculatorMethod =
                await _warehouseConfigRepository.GetInventoryCalculatorMethod(tenantId, warehouseId);
            switch (inventoryCalculatorMethod)
            {
                case InventoryCalculatorMethod.FIFO:
                case InventoryCalculatorMethod.LIFO:
                case InventoryCalculatorMethod.SpecificIdentificationMethod:
                    // Lấy giá sản phẩm theo giá nhập.
                    return inventoryReportDetail.Price;
                case InventoryCalculatorMethod.WeightedAverage:
                case InventoryCalculatorMethod.WeightedAverageImmediately:
                    // Tính theo phương pháp bình quân ra quyền: (tổng giá trị tồn + tổng giá trị nhập / Số lượng tồn đầu kỳ + Số lượng nhập trong kỳ.)
                    var totalQuantity = openingStockQuantity + inventoryReportDetail.Quantity;
                    return (openingStockValue + inventoryReportDetail.Quantity * inventoryReportDetail.Price)
                           / (totalQuantity == 0 ? 1 : totalQuantity);
                default:
                    return -1;
            }
        }

        public async Task<ActionResultResponse> DeleteInventoryReportDetail(string tenantId, string warehouseId, string productId,
            string goodsReceiptNoteDetailCode, string lotId, DateTime date, string receiptId, bool isReceived)
        {
            var result = await _inventoryReportDetailRepository.Delete(tenantId, warehouseId, receiptId, productId, goodsReceiptNoteDetailCode,
                lotId, date, isReceived);
            if (!string.IsNullOrEmpty(result))
            {
                // Kiểm tra báo cáo tồn có chi tiết hay không. Nếu có đồng bộ lại phiếu tồn. Nếu không có xóa phiếu tồn.
                var isProductExists =
                    await _inventoryReportDetailRepository.CheckProductExists(tenantId, warehouseId, productId, date, isReceived);
                if (isProductExists)
                {
                    // Đồng bộ lại tồn kho.
                    await SynchronizeInventory(result);
                }
                else
                {
                    // Xóa báo cáo tồn theo sản phẩm.
                    await _inventoryReportRepository.Delete(result);
                }

                // Đồng bộ lại toàn bộ báo cáo tồn chi tiết.
                await SynchronizeAllInventory(tenantId, warehouseId,
                    productId, lotId, date);

                return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
                    _resourceService.GetString("inventory report detail")));
            }
            return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse> InsertInventoryReportDetail(InventoryReportDetail inventoryReportDetail)
        {
            var openingStockByLot = !string.IsNullOrEmpty(inventoryReportDetail.LotId)
                ? await _inventoryReportRepository.GetOpeningStockByLot(
                        inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                        inventoryReportDetail.ProductId, inventoryReportDetail.LotId, inventoryReportDetail.Date)
               : await _inventoryReportRepository.GetOpeningStock(inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                    inventoryReportDetail.ProductId, inventoryReportDetail.Date);
            var openingStockQuantity = openingStockByLot?.ClosingStockQuantity ?? 0;
            var openingStockValue = openingStockByLot?.ClosingStockValue ?? 0;
            var inventoryReport = await _inventoryReportRepository.GetInfo(inventoryReportDetail.TenantId,
                inventoryReportDetail.WarehouseId, inventoryReportDetail.ReceiptId,
                inventoryReportDetail.ProductId, inventoryReportDetail.IsReceived, inventoryReportDetail.Date, true);
            if (inventoryReport == null)
            {
                inventoryReport = new InventoryReport
                {
                    TenantId = inventoryReportDetail.TenantId,
                    ProductId = inventoryReportDetail.ProductId,
                    WarehouseId = inventoryReportDetail.WarehouseId,
                    OpeningStockQuantity = openingStockQuantity,
                    OpeningStockValue = openingStockValue,
                    Date = inventoryReportDetail.Date,
                    IsReceived = inventoryReportDetail.IsReceived,
                    ReceiptId = inventoryReportDetail.ReceiptId,
                    Quantity = inventoryReportDetail.Quantity,
                    TotalAmounts = inventoryReportDetail.Quantity * inventoryReportDetail.Price,
                    ProductUnitId = inventoryReportDetail.ProductUnitId,
                    ReceiptNo = inventoryReportDetail.ReceiptNo
                };
                var resultInsert = await _inventoryReportRepository.Insert(inventoryReport);
                if (resultInsert <= 0)
                    inventoryReport = null;
            }

            if (string.IsNullOrEmpty(inventoryReport?.Id))
                return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            inventoryReportDetail.OpeningStockQuantity = openingStockQuantity;
            inventoryReportDetail.OpeningStockValue = openingStockValue;
            inventoryReportDetail.InventoryReportId = inventoryReport.Id;
            inventoryReportDetail.ProductUnitId = !string.IsNullOrEmpty(inventoryReport.ProductUnitId)
                ? inventoryReport.ProductUnitId
                : inventoryReportDetail.ProductUnitId;
            inventoryReportDetail.ClosingStockQuantity = inventoryReportDetail.IsReceived
                ? openingStockQuantity + inventoryReportDetail.Quantity
                : openingStockQuantity - inventoryReportDetail.Quantity;
            inventoryReportDetail.ClosingStockValue = inventoryReportDetail.IsReceived
                ? openingStockValue + inventoryReportDetail.Quantity * inventoryReportDetail.Price
                : openingStockValue - inventoryReportDetail.Quantity * inventoryReportDetail.Price;
            inventoryReportDetail.ExWarehousePrice = await GetExWarehousePrice(inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                inventoryReport.OpeningStockValue, inventoryReport.OpeningStockQuantity, inventoryReportDetail.Date,
                inventoryReportDetail);
            var result = await _inventoryReportDetailRepository.Insert(inventoryReportDetail);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Đồng bộ lại báo cáo tồn theo sản phẩm.
            await SynchronizeInventory(inventoryReportDetail.InventoryReportId);
            return new ActionResultResponse(result,
                _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
                    _resourceService.GetString("inventory report detail")));
        }

        public async Task<ActionResultResponse> UpdateInventoryReportDetail(InventoryReportDetail inventoryReportDetail)
        {
            var inventoryReportDetailInfo = await _inventoryReportDetailRepository.GetInfoByProduct(
                inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                inventoryReportDetail.ReceiptId, inventoryReportDetail.ProductId, inventoryReportDetail.LotId,
                inventoryReportDetail.GoodsReceiptNoteDetailCode, inventoryReportDetail.IsReceived, inventoryReportDetail.Date);

            var openingStockByLot = !string.IsNullOrEmpty(inventoryReportDetail.LotId)
                ? await _inventoryReportRepository.GetOpeningStockByLot(
                        inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                        inventoryReportDetail.ProductId, inventoryReportDetail.LotId, inventoryReportDetail.Date)
               : await _inventoryReportRepository.GetOpeningStock(inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                    inventoryReportDetail.ProductId, inventoryReportDetail.Date);
            var openingStockQuantity = openingStockByLot?.ClosingStockQuantity ?? 0;
            var openingStockValue = openingStockByLot?.ClosingStockValue ?? 0;
            // Trường hợp chưa có sẽ thêm báo cáo tồn chi tiết.
            if (inventoryReportDetailInfo == null)
                return new ActionResultResponse();

            inventoryReportDetailInfo.OpeningStockQuantity = openingStockQuantity;
            inventoryReportDetailInfo.OpeningStockValue = openingStockValue;
            inventoryReportDetailInfo.Quantity = inventoryReportDetail.Quantity;
            inventoryReportDetailInfo.Price = inventoryReportDetail.Price;
            inventoryReportDetailInfo.ClosingStockQuantity = inventoryReportDetailInfo.IsReceived
                ? inventoryReportDetailInfo.OpeningStockQuantity + inventoryReportDetailInfo.Quantity
                : inventoryReportDetailInfo.OpeningStockQuantity - inventoryReportDetailInfo.Quantity;
            inventoryReportDetailInfo.ClosingStockValue = inventoryReportDetailInfo.IsReceived
                ? inventoryReportDetailInfo.OpeningStockValue + inventoryReportDetailInfo.Quantity * inventoryReportDetailInfo.Price
                : inventoryReportDetailInfo.OpeningStockValue - inventoryReportDetailInfo.Quantity * inventoryReportDetailInfo.Price;
            inventoryReportDetailInfo.LotId = inventoryReportDetail.LotId?.Trim();
            inventoryReportDetailInfo.GoodsReceiptNoteDetailCode = inventoryReportDetail.GoodsReceiptNoteDetailCode;
            inventoryReportDetailInfo.ExWarehousePrice = await GetExWarehousePrice(inventoryReportDetail.TenantId, inventoryReportDetail.WarehouseId,
                inventoryReportDetailInfo.OpeningStockValue, inventoryReportDetailInfo.OpeningStockQuantity, inventoryReportDetail.Date,
                inventoryReportDetailInfo);
            var result = await _inventoryReportDetailRepository.Update(inventoryReportDetailInfo);
            if (result <= 0)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Đồng bộ lại chi tiết báo cáo tồn theo lô.
            await UpdateInventoryReportDetailByLot(inventoryReportDetailInfo.TenantId, inventoryReportDetailInfo.WarehouseId, inventoryReportDetailInfo.ReceiptId,
                inventoryReportDetailInfo.ProductId, inventoryReportDetailInfo.LotId, inventoryReportDetailInfo.IsReceived, openingStockValue, openingStockQuantity);

            // Đồng bộ lại báo cáo tồn theo sản phẩm.
            await SynchronizeInventory(inventoryReportDetailInfo.InventoryReportId);

            // Đồng bộ lại toàn bộ báo cáo tồn chi tiết.
            await SynchronizeAllInventory(inventoryReportDetailInfo.TenantId, inventoryReportDetail.WarehouseId,
                inventoryReportDetailInfo.ProductId, inventoryReportDetailInfo.LotId, inventoryReportDetailInfo.Date);

            return new ActionResultResponse(result,
                _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
                    _resourceService.GetString("inventory report detail")));
        }

        private async Task UpdateInventoryReportDetailByLot(string tenantId, string warehouseId, string receiptId, string productId, string lotId, bool isReceived,
            decimal openingStockValue, decimal openingStockQuantity)
        {
            var inventoryReportDetails =
                await _inventoryReportDetailRepository.GetsByReceiptAndLotId(tenantId, warehouseId, receiptId, productId, lotId,
                    isReceived);
            if (inventoryReportDetails != null && inventoryReportDetails.Any())
            {
                var totalQuantity = inventoryReportDetails.Sum(x => x.Quantity);
                var totalValue = inventoryReportDetails.Sum(x => x.Quantity * x.Price);
                foreach (var inventoryReportDetail in inventoryReportDetails)
                {
                    inventoryReportDetail.ClosingStockQuantity = inventoryReportDetail.IsReceived
                        ? openingStockQuantity + totalQuantity
                        : openingStockQuantity - totalQuantity;
                    inventoryReportDetail.ClosingStockValue = inventoryReportDetail.IsReceived
                        ? openingStockValue + totalValue
                        : openingStockValue - totalValue;
                }
                await _inventoryReportDetailRepository.Updates(inventoryReportDetails);
            }
        }

        public async Task<SearchResult<InventoryDetailViewModel>> SearchToTakeInventory(string tenantId, string userId, string warehouseId, string keyword,
            DateTime date, int page, int pageSize)
        {
            var inventoryDetails = await _inventoryReportRepository.SearchToTakeInventory(tenantId, warehouseId,
                keyword, date, page,
                pageSize, out int totalRows);
            return new SearchResult<InventoryDetailViewModel>(inventoryDetails);
        }

        public async Task<ActionResultResponse<InventoryProductViewModel>> GetProductInfo(string tenantId, string userId, string warehouseId,
            string productId, DateTime date)
        {
            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<InventoryProductViewModel>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productInfo = await _inventoryReportRepository.GetProductInfo(tenantId, warehouseId, productId, date);
            return new ActionResultResponse<InventoryProductViewModel>
            {
                Data = productInfo
            };
        }

        public async Task<SearchResult<InventoryProductViewModel>> GetsAllProductToTakeInventory(string tenantId, string userId,
            string warehouseId, DateTime date)
        {
            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new SearchResult<InventoryProductViewModel>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var products = await _inventoryReportRepository.GetsAllProduct(tenantId, warehouseId, date);
            return new SearchResult<InventoryProductViewModel>(products);
        }

        public async Task UpdateInventory(string tenantId, string goodsReceiptNoteId, string warehouseId, DateTime newDate, bool isReceived)
        {
            var inventoryReports = await _inventoryReportRepository.GetByReceiptId(tenantId, goodsReceiptNoteId, isReceived);
            foreach (var inventoryReport in inventoryReports)
            {
                var openingStock = await _inventoryReportRepository.GetOpeningStock(inventoryReport.TenantId,
                    inventoryReport.WarehouseId, inventoryReport.ProductId, newDate);
                var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                var openingStockValue = openingStock?.ClosingStockValue ?? 0;

                var inventoryReportDetails =
                    await _inventoryReportDetailRepository.GetsAll(inventoryReport.Id, inventoryReport.ProductId);
                if (!inventoryReportDetails.Any())
                    continue;

                foreach (var inventoryReportDetail in inventoryReportDetails)
                {
                    if (!string.IsNullOrEmpty(inventoryReportDetail.LotId))
                    {
                        var openingStockByLot = await _inventoryReportRepository.GetOpeningStockByLot(
                            inventoryReport.TenantId, inventoryReport.WarehouseId,
                            inventoryReport.ProductId, inventoryReportDetail.LotId, newDate);

                        var openingStockQuantityByLot = openingStockByLot?.ClosingStockQuantity ?? 0;
                        var openingStockValueByLot = openingStockByLot?.ClosingStockValue ?? 0;

                        inventoryReportDetail.OpeningStockQuantity = openingStockQuantityByLot;
                        inventoryReportDetail.OpeningStockValue = openingStockValueByLot;
                        inventoryReportDetail.ClosingStockQuantity = inventoryReportDetail.IsReceived
                            ? openingStockQuantityByLot + inventoryReportDetail.Quantity
                            : openingStockQuantityByLot - inventoryReportDetail.Quantity;
                        inventoryReportDetail.ClosingStockValue = inventoryReportDetail.IsReceived
                            ? openingStockValueByLot + inventoryReportDetail.Price * inventoryReportDetail.Quantity
                            : openingStockValueByLot - inventoryReportDetail.Price * inventoryReportDetail.Quantity;
                        inventoryReportDetail.ExWarehousePrice = await GetExWarehousePrice(tenantId, warehouseId,
                            openingStockValueByLot, openingStockQuantityByLot, newDate, inventoryReportDetail);
                    }
                    else
                    {
                        inventoryReportDetail.OpeningStockQuantity = openingStockQuantity;
                        inventoryReportDetail.OpeningStockValue = openingStockValue;
                        inventoryReportDetail.ClosingStockQuantity = inventoryReportDetail.IsReceived
                            ? openingStockQuantity + inventoryReportDetail.Quantity
                            : openingStockQuantity - inventoryReportDetail.Quantity;
                        inventoryReportDetail.ClosingStockValue = inventoryReportDetail.IsReceived
                            ? openingStockValue + inventoryReportDetail.Price * inventoryReportDetail.Quantity
                            : openingStockValue - inventoryReportDetail.Price * inventoryReportDetail.Quantity;
                        inventoryReportDetail.ExWarehousePrice = await GetExWarehousePrice(tenantId, warehouseId,
                            openingStockValue, openingStockQuantity, newDate, inventoryReportDetail);
                    }

                    inventoryReportDetail.WarehouseId = warehouseId?.Trim();
                    inventoryReportDetail.Date = newDate;
                }
                var result = await _inventoryReportDetailRepository.Updates(inventoryReportDetails);
                if (result > 0)
                {
                    inventoryReport.WarehouseId = warehouseId?.Trim();
                    inventoryReport.Date = newDate;
                    inventoryReport.OpeningStockValue = openingStockValue;
                    inventoryReport.OpeningStockQuantity = openingStockQuantity;
                    inventoryReport.TotalAmounts = inventoryReportDetails.Sum(x => x.ClosingStockValue);
                    inventoryReport.ClosingStockValue = inventoryReport.IsReceived
                        ? openingStockValue + inventoryReport.TotalAmounts
                        : openingStockValue - inventoryReport.TotalAmounts;
                    inventoryReport.ClosingStockQuantity = inventoryReport.IsReceived
                        ? openingStockQuantity + inventoryReport.Quantity
                        : openingStockQuantity - inventoryReport.Quantity;
                }
            }
            await _inventoryReportRepository.Updates(inventoryReports);
        }

        private async Task SynchronizeInventory(string inventoryReportId)
        {
            var inventoryReport = await _inventoryReportRepository.GetInfo(inventoryReportId);
            if (inventoryReport != null)
            {
                var openingStock = await _inventoryReportRepository.GetOpeningStock(inventoryReport.TenantId,
                    inventoryReport.WarehouseId, inventoryReport.ProductId, inventoryReport.Date);
                var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                var openingStockValue = openingStock?.ClosingStockValue ?? 0;

                var inventoryReportDetailStats = await _inventoryReportDetailRepository.GetStats(inventoryReport.Id);

                // Trường hợp không có chi tiết sản phẩm. Xóa báo cáo tồn.
                inventoryReport.OpeningStockQuantity = openingStockQuantity;
                inventoryReport.OpeningStockValue = openingStockValue;
                inventoryReport.Quantity = inventoryReportDetailStats.Sum(x => x.Quantity);
                inventoryReport.TotalAmounts = inventoryReportDetailStats.Sum(x => x.Value);
                inventoryReport.ClosingStockQuantity = inventoryReport.IsReceived
                    ? inventoryReport.OpeningStockQuantity + inventoryReport.Quantity
                    : inventoryReport.OpeningStockQuantity - inventoryReport.Quantity;
                inventoryReport.ClosingStockValue = inventoryReport.IsReceived
                    ? inventoryReport.OpeningStockValue + inventoryReport.TotalAmounts
                    : inventoryReport.OpeningStockValue - inventoryReport.TotalAmounts;
                await _inventoryReportRepository.Update(inventoryReport);
            }
        }

        public async Task SynchronizeAllInventory(string tenantId, string warehouseId, string productId, string lotId, DateTime date,
            int page = 1, int pageSize = 20)
        {
            var inventoryReports = await _inventoryReportRepository.Search(tenantId, warehouseId, productId, date,
                page, pageSize, out int totalRows, true);
            var totalPages = Math.Ceiling((decimal)totalRows / pageSize);
            if (page < totalPages)
            {
                await SynchronizeAllInventory(tenantId, warehouseId, productId, lotId, date, page + 1, pageSize);
            }

            foreach (var inventoryReport in inventoryReports)
            {
                /*
                     Trường hợp là phiếu nhập sẽ đồng bộ lại. Trường hợp là phiếu xuất sẽ cập nhật lại phiếu xuất sau đố mới đồng bộ 
                     lại chi tiết báo cáo tồn. Đồng bộ chi tiết phiếu nhập. 
                */
                var inventoryReportDetail =
                    await _inventoryReportDetailRepository.GetInfo(inventoryReport.Id, productId, lotId);
                if (inventoryReportDetail != null)
                {
                    var openingStock = !string.IsNullOrEmpty(inventoryReportDetail.LotId)
                    ? await _inventoryReportRepository.GetOpeningStockByLot(tenantId, warehouseId, productId, lotId, inventoryReport.Date)
                    : await _inventoryReportRepository.GetOpeningStock(tenantId, warehouseId, productId, inventoryReport.Date);

                    var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                    var openingStockValue = openingStock?.ClosingStockValue ?? 0;

                    inventoryReportDetail.OpeningStockQuantity = openingStockQuantity;
                    inventoryReportDetail.OpeningStockValue = openingStockValue;
                    if (inventoryReportDetail.IsReceived)
                    {
                        var totalQuantities = inventoryReportDetail.OpeningStockQuantity + inventoryReportDetail.Quantity;

                        inventoryReportDetail.Price = await _goodsReceiptNoteDetailRepository.GetPrice(tenantId, warehouseId, inventoryReportDetail.ReceiptId,
                            inventoryReportDetail.ProductId, inventoryReportDetail.LotId);
                        inventoryReportDetail.ClosingStockQuantity =
                            inventoryReportDetail.OpeningStockQuantity + inventoryReportDetail.Quantity;
                        inventoryReportDetail.ClosingStockValue =
                            inventoryReportDetail.OpeningStockValue +
                            inventoryReportDetail.Quantity * inventoryReportDetail.Price;
                        inventoryReportDetail.ExWarehousePrice = !string.IsNullOrEmpty(inventoryReportDetail.LotId)
                            ? inventoryReportDetail.Price
                            : (inventoryReportDetail.OpeningStockValue + inventoryReportDetail.Price *
                               inventoryReportDetail.Quantity)
                              / (totalQuantities == 0 ? 1 : totalQuantities);
                    }
                    else
                    {
                        // Cập nhật lại giá trên phiếu xuất.
                        var goodsDeliveryNoteDetails =
                            await _goodsDeliveryNoteDetailsRepository.GetsAllByGoodsDeliveryNoteId(
                                inventoryReportDetail.TenantId,
                                inventoryReportDetail.ReceiptId, inventoryReportDetail.ProductId, inventoryReportDetail.LotId);

                        if (goodsDeliveryNoteDetails != null && goodsDeliveryNoteDetails.Any())
                        {
                            foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
                            {
                                if (string.IsNullOrEmpty(goodsDeliveryNoteDetail.LotId))
                                {
                                    goodsDeliveryNoteDetail.Price = openingStock?.ExWarehousePrice ?? 0;
                                }
                                else
                                {
                                    var goodsReceiptNoteDetails =
                                        await _goodsReceiptNoteDetailRepository.GetByCode(tenantId, warehouseId, goodsDeliveryNoteDetail.GoodsReceiptNoteCode);
                                    var quantities = goodsReceiptNoteDetails.Sum(x => x.Quantity);
                                    var totalAmounts = goodsReceiptNoteDetails.Sum(x => x.Quantity * x.Price);
                                    goodsDeliveryNoteDetail.Price = totalAmounts / (quantities == 0 ? 1 : quantities);
                                }
                            }
                            var resultUpdateDeliveryNotePrice = await _goodsDeliveryNoteDetailsRepository.Updates(goodsDeliveryNoteDetails);
                            // Cập nhật lại báo cáo tồn.
                            var price = await _goodsDeliveryNoteDetailsRepository.GetPrice(tenantId, warehouseId,
                                inventoryReportDetail.ReceiptId,
                                inventoryReportDetail.ProductId, inventoryReportDetail.LotId);

                            inventoryReportDetail.Price = price;
                            inventoryReportDetail.OpeningStockQuantity = openingStockQuantity;
                            inventoryReportDetail.ClosingStockQuantity =
                                inventoryReportDetail.OpeningStockQuantity - inventoryReportDetail.Quantity;
                            inventoryReportDetail.ClosingStockValue =
                                inventoryReportDetail.OpeningStockValue -
                                inventoryReportDetail.Quantity * inventoryReportDetail.Price;
                            inventoryReportDetail.ExWarehousePrice = inventoryReportDetail.Price;
                        }
                    }

                    await _inventoryReportDetailRepository.Update(inventoryReportDetail);
                }

                // Đồng bộ lại báo cáo tồn kho theo sản phẩm.
                await SynchronizeInventory(inventoryReport.Id);
            }
        }
    }
}