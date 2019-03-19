using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.ViewModels;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class InventoryDailyReportService : IInventoryDailyReportService
    {
        private readonly IInventoryDailyReportRepository _inventoryDailyReportRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailRepository;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IProductRepository _productRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public InventoryDailyReportService(IInventoryDailyReportRepository inventoryDailyReportRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService, IWarehouseConfigRepository warehouseConfigRepository,
            IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository, IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailRepository,
            IWarehouseManagerConfigRepository warehouseManagerConfigRepository, IProductUnitRepository productUnitRepository, IProductRepository productRepository)
        {
            _inventoryDailyReportRepository = inventoryDailyReportRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _warehouseConfigRepository = warehouseConfigRepository;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _goodsDeliveryNoteDetailRepository = goodsDeliveryNoteDetailRepository;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
            _productUnitRepository = productUnitRepository;
            _productRepository = productRepository;
        }

        public async Task<SearchResult<InventoryDailyReportViewModel>> Search(string tenantId, string userId, string warehouseId, string keyword,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize)
        {
            if (string.IsNullOrEmpty(warehouseId))
                return new SearchResult<InventoryDailyReportViewModel>(-1,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("warehouse")));

            if (!fromDate.HasValue)
                fromDate = DateTime.Today;

            toDate = toDate?.AddDays(1).AddMilliseconds(-1) ?? fromDate.Value.AddDays(1).AddMilliseconds(-1);

            // Check current user is warehouse manager.
            var isWarehouseManager = await _warehouseManagerConfigRepository.CheckExists(warehouseId, userId, tenantId);
            if (!isWarehouseManager)
                return new SearchResult<InventoryDailyReportViewModel>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var inventoryDailyReports = await _inventoryDailyReportRepository.SearchInventoryOpningStock(tenantId, keyword, warehouseId, fromDate.Value,
                 page, pageSize, out int totalRows);

            // Lấy về danh sách nhập trong kỳ.
            if (!inventoryDailyReports.Any())
                return new SearchResult<InventoryDailyReportViewModel>(inventoryDailyReports, totalRows);

            foreach (var inventoryDailyReport in inventoryDailyReports)
            {
                // Lấy về tổng nhập trong kỳ.
                var receivingInPeriod = _goodsReceiptNoteDetailRepository.GetReceivingInPeriod(tenantId, warehouseId,
                        inventoryDailyReport.ProductId, fromDate.Value, toDate.Value);

                // Lấy về tổng xuất trong kỳ.
                var deliveringInPeriod = _goodsDeliveryNoteDetailRepository.GetDeliveringInPeriod(tenantId, warehouseId,
                    inventoryDailyReport.ProductId, fromDate.Value, toDate.Value);

                inventoryDailyReport.ReceivingQuantity = receivingInPeriod.Quantity;
                inventoryDailyReport.ReceivingValue = receivingInPeriod.Value;
                inventoryDailyReport.DeliveringQuantity = deliveringInPeriod.Quantity;
                inventoryDailyReport.DeliveringValue = deliveringInPeriod.Value;
                inventoryDailyReport.ClosingStockQuantity = inventoryDailyReport.OpeningStockQuantity + receivingInPeriod.Quantity - deliveringInPeriod.Quantity;
                inventoryDailyReport.ClosingStockValue = inventoryDailyReport.OpeningStockValue + receivingInPeriod.Value - deliveringInPeriod.Value;
            }

            return new SearchResult<InventoryDailyReportViewModel>(inventoryDailyReports, totalRows);
        }

        /// <summary>
        /// Update theo sản phẩm.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="productId">Mã sản phẩm</param>
        /// <param name="entryDate">Ngày Nhập/Xuất hàng</param>
        /// <returns></returns>
        public async Task<ActionResultResponse> Update(string tenantId, string warehouseId, string productId, DateTime entryDate)
        {
            // Get opening stock.
            var openingStock = await GetOpeningStock();

            // Get inventory calculator method.
            var inventoryCalculatorMethod = await _warehouseConfigRepository.GetInventoryCalculatorMethod(tenantId, warehouseId);
            if (inventoryCalculatorMethod == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Please config inventory calculator method."));

            // Get goods receipt quantity today.
            var goodsReceiptNoteDetails = await _goodsReceiptNoteDetailRepository.GetsProductInfoForinventoryDailyReportByDay(tenantId,
                warehouseId, productId, entryDate);

            // Get goods delivery quantity today.
            var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailRepository.GetsProductInfoForinventoryDailyReportByDay(tenantId,
                warehouseId, productId, entryDate);

            decimal openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
            decimal openingStockValue = openingStock?.ClosingStockValue ?? 0;

            var closingStockQuantity = (openingStock?.ClosingStockQuantity ?? 0) + goodsReceiptNoteDetails.Sum(x => x.Quantity)
                                         - goodsDeliveryNoteDetails.Sum(x => x.Quantity);

            decimal closingStockValue = 0;
            decimal closingStockPrice = 0;
            decimal totalReceiptQuantity = 0;
            decimal totalReceiptValue = 0;
            decimal totalDeliveryQuantity = 0;
            decimal totalDeliveryValue = 0;

            if (goodsReceiptNoteDetails.Any())
            {
                totalReceiptQuantity = goodsReceiptNoteDetails.Sum(x => x.Quantity);
                totalReceiptValue = goodsReceiptNoteDetails.Sum(x => x.Price * x.Quantity);
            }

            if (goodsDeliveryNoteDetails.Any())
            {
                totalDeliveryQuantity = goodsReceiptNoteDetails.Sum(x => x.Quantity);
                totalDeliveryValue = goodsReceiptNoteDetails.Sum(x => x.Price * x.Quantity);
            }


            var inventoryQuantity = openingStockQuantity + totalReceiptQuantity;
            // TODO: Thêm update phương pháp tính giá trị tồn kho.
            // Tính giá trị tồn dựa theo phương pháp.
            switch (inventoryCalculatorMethod)
            {
                // Bình quân ra quyền.
                case InventoryCalculatorMethod.WeightedAverage:
                    // Cập nhật lại giá trong sản phẩm phục vụ cho xuất kho.
                    //await _productRepository.UpdateExWarehousePrice(tenantId, productId, closingStockPrice);
                    break;
                // Bình quân ra quyền (Thời điểm tức thời).
                case InventoryCalculatorMethod.WeightedAverageImmediately:
                    closingStockPrice = (openingStockQuantity + totalReceiptValue) / (inventoryQuantity == 0 ? 1 : inventoryQuantity);
                    closingStockValue = closingStockQuantity * closingStockPrice;

                    // Cập nhật lại giá trong sản phẩm phục vụ cho xuất kho.
                    //await _productRepository.UpdateExWarehousePrice(tenantId, productId, closingStockPrice);
                    break;
                // Nhập trước xuất trước.
                case InventoryCalculatorMethod.FIFO: break;
                // Nhập sau xuất trước.
                case InventoryCalculatorMethod.LIFO: break;
                // Thực tế giá đích danh
                case InventoryCalculatorMethod.SpecificIdentificationMethod: break;
                default:
                    break;
            }

            // Check exists report by date.
            //var inventoryDailReportInfo = await _inventoryDailyReportRepository.GetInfo(tenantId, warehouseId, productId, entryDate);
            //if (inventoryDailReportInfo == null)
            //{
            // Thêm báo cáo tồn kho cho ngày nhập nếu chưa có.
            var inventoryDailReportInfo = new InventoryDailyReport
            {
                OpeningStockQuantity = openingStockQuantity,
                OpeningStockValue = openingStockValue,
                WarehouseId = warehouseId,
                ClosingStockValue = closingStockValue,
                ClosingStockQuantity = closingStockQuantity,
                TenantId = tenantId,
                ReceivingQuantity = totalReceiptQuantity,
                ReceivingValue = totalReceiptValue,
                DeliveringQuantity = totalDeliveryQuantity,
                DeliveringValue = totalDeliveryValue,
                ProductId = productId,
                EntryDate = entryDate,
                Day = (byte)entryDate.Day,
                Month = (byte)entryDate.Month,
                Year = entryDate.Year,
                Quarter = entryDate.GetQuarter(),
                UnitId = await _productUnitRepository.GetDefaultUnitId(productId)
            };

            var result = await _inventoryDailyReportRepository.Insert(inventoryDailReportInfo);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                : _resourceService.GetString("Add new inventory daily report successful."));
            //}

            // Cập nhật lại thông tin báo cáo tồn trong trường hợp đã tồn tại.
            //inventoryDailReportInfo.OpeningStockQuantity = openingStockQuantity;
            //inventoryDailReportInfo.OpeningStockValue = openingStockValue;
            //inventoryDailReportInfo.ClosingStockQuantity = closingStockQuantity;
            //inventoryDailReportInfo.ClosingStockValue = closingStockValue;
            //inventoryDailReportInfo.OpeningStockQuantity = openingStockQuantity;
            //inventoryDailReportInfo.ReceivingQuantity = totalReceiptQuantity;
            //inventoryDailReportInfo.ReceivingValue = totalReceiptValue;
            //inventoryDailReportInfo.DeliveringQuantity = totalDeliveryQuantity;
            //inventoryDailReportInfo.DeliveringValue = totalDeliveryValue;

            //var resultUpdate = await _inventoryDailyReportRepository.Update(inventoryDailReportInfo);
            //return new ActionResultResponse(resultUpdate, resultUpdate <= 0 ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
            //    : _resourceService.GetString("Update inventory daily report successful."));

            async Task<InventoryDailyReport> GetOpeningStock()
            {
                return await _inventoryDailyReportRepository.GetOpeningStock(tenantId, warehouseId, productId, entryDate);
            }
        }

        public async Task<ActionResultResponse> UpdateEntryDate(string tenantId, string warehouseId, string receiptNoteId,
            DateTime oldEntryDate, DateTime newEntryDate)
        {
            // Lấy về danh sách sản phẩm theo phiếu nhập.
            var goodsReceiptNoteDetails =
                await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(tenantId, receiptNoteId);
            if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
                return new ActionResultResponse(-1,
                    _resourceService.GetString(
                        "Goods receipt note item does not exists. Please contact with administrator."));

            foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails)
            {
                await ExecuteUpdateEntryDate(tenantId, warehouseId, goodsReceiptNoteDetail.ProductId, oldEntryDate,
                    newEntryDate);
            }
            return new ActionResultResponse(1, _resourceService.GetString("Update inventory daily report successful."));

        }

        /// <summary>
        /// Thực hiện cập nhật theo ngày nhập/xuất
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="productId">Mã sản phảm</param>
        /// <param name="oldEntryDate">Ngày nhập/xuất cũ</param>
        /// <param name="newEntryDate">Ngày nhập/xuất mới</param>
        /// <returns></returns>
        private async Task<ActionResultResponse> ExecuteUpdateEntryDate(string tenantId, string warehouseId, string productId, DateTime oldEntryDate,
            DateTime newEntryDate)
        {
            double totalDays = 0;
            var today = DateTime.Today;
            switch (DateTime.Compare(oldEntryDate, newEntryDate))
            {
                // Trường hợp ngày nhập cũ trước ngày nhập mới sẽ tính từ ngày nhập cũ đến ngày hiện tại.                
                case -1:
                    totalDays = (today - oldEntryDate).TotalDays;
                    for (int i = 0; i < totalDays; i++)
                    {
                        var currentEntryDate = oldEntryDate.AddDays(i);
                        await Update(tenantId, warehouseId, productId, currentEntryDate);
                    }
                    break;
                // Trường hợp ngày nhập cũ sau ngày nhập mới sẽ tính từ ngày nhập mới đến ngày hiện tại.
                case 1:
                    totalDays = (today - newEntryDate).TotalDays;
                    for (int i = 0; i < totalDays; i++)
                    {
                        var currentEntryDate = newEntryDate.AddDays(i);
                        await Update(tenantId, warehouseId, productId, currentEntryDate);
                    }
                    break;
            }
            return new ActionResultResponse(1, _resourceService.GetString("Update inventory daily report successful."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string warehouseId, string receiptNoteId, string productId,
            DateTime oldEntryDate, DateTime newEntryDay)
        {
            double totalDays = 0;
            switch (DateTime.Compare(oldEntryDate, newEntryDay))
            {
                case -1:
                    totalDays = (newEntryDay - oldEntryDate).TotalDays;
                    if (string.IsNullOrEmpty(productId) && !string.IsNullOrEmpty(receiptNoteId))
                    {
                        var goodsReceiptNoteDetails =
                            await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(tenantId, receiptNoteId);
                        if (goodsReceiptNoteDetails != null && goodsReceiptNoteDetails.Any())
                        {
                            foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails)
                            {
                                for (int i = 0; i < totalDays; i++)
                                {
                                    var currentEntryDate = newEntryDay.AddDays(i);
                                    await Update(tenantId, warehouseId, goodsReceiptNoteDetail.ProductId, currentEntryDate);
                                }
                            }
                        }
                    }
                    else
                    {
                        for (int i = 0; i < totalDays; i++)
                        {
                            var currentEntryDate = newEntryDay.AddDays(i);
                            await Update(tenantId, warehouseId, productId, currentEntryDate);
                        }
                    }
                    break;
                case 1:
                    totalDays = (oldEntryDate - newEntryDay).TotalDays;
                    for (int i = 0; i < totalDays; i++)
                    {
                        var currentEntryDate = newEntryDay.AddDays(i);
                        await Update(tenantId, warehouseId, productId, currentEntryDate);
                    }
                    break;
                default:
                    break;
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update inventory daily report successful."));
        }

        /// <summary>
        /// Cập nhật báo cáo.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="receiptNoteId">Mã phiếu nhập</param>
        /// <param name="productId">Mã sản phẩm</param>
        /// <param name="entryDate">Ngày nhập/xuất</param>
        /// <returns></returns>
        public async Task<ActionResultResponse> Update(string tenantId, string warehouseId, string receiptNoteId,
            string productId, DateTime entryDate)
        {
            switch (DateTime.Compare(entryDate, DateTime.Today))
            {
                // Ngày nhập/xuất trước ngày hiện tại. Chạy lại báo cáo nhập xuất tồn.
                case -1:
                    await ResyncInventoryDailyReport(1);
                    break;
                // Ngày nhập/xuất là ngày hiện tại. Chạy lại báo cáo cho ngày hiện tại.
                case 0:
                    // Cập nhật theo mã sản phẩm truyền vào.
                    if (!string.IsNullOrEmpty(productId))
                    {
                        await Update(tenantId, warehouseId, productId, entryDate);
                        return new ActionResultResponse(1, _resourceService.GetString("Update report successful."));
                    }

                    // Lấy về chi tiết phiếu nhập trong ngày sau đó chạy lại toàn bộ sản phẩm có sự thay đổi trong phiếu nhập.
                    var goodsReceiptNoteDetails =
                        await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(tenantId, receiptNoteId);
                    if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
                        return new ActionResultResponse(-1, _resourceService.GetString("Nothing for update."));

                    foreach (var goodsReceiptNoteItem in goodsReceiptNoteDetails)
                    {
                        await Update(tenantId, warehouseId, goodsReceiptNoteItem.ProductId, entryDate);
                    }
                    break;
                default: break;
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update report successful."));

            async Task ResyncInventoryDailyReport(int page)
            {
                // Lấy về danh sách báo cáo nhập xuất tồn từ ngày nhập/xuất.                
                var pageSize = 10;
                var inventoryDailyReports =
                    await _inventoryDailyReportRepository.SearchByProduct(tenantId, warehouseId, productId,
                        entryDate, null, page, pageSize, out int totalRows);

                // Tính ra tổng số trang (Giúp phân trang đồng bộ để hệ thống không bị quá tải).
                var totalPage = Math.Ceiling((double)totalRows / pageSize);
                if (totalPage > 1 && page < totalPage)
                {
                    // Trường hợp số trang lớn hơn 1 sẽ chạy qua từng trang để đồng bộ.
                    await ResyncInventoryDailyReport(page + 1);
                }

                foreach (var inventoryDailyReport in inventoryDailyReports)
                {
                    await Update(tenantId, warehouseId, inventoryDailyReport.ProductId, inventoryDailyReport.EntryDate);
                }
            }
        }

        /// <summary>
        /// Cập nhật lại báo cáo theo phiếu nhập.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="receiptNoteId">Mã phiếu nhập</param>
        /// <param name="entryDate">Ngày nhập</param>
        /// <returns></returns>
        public async Task<ActionResultResponse> UpdateByReceiptNote(string tenantId, string warehouseId, string receiptNoteId, DateTime entryDate)
        {
            var goodsReceiptNoteDetails =
                await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(tenantId, receiptNoteId);
            if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("Goods receipt note items does not exists."));

            var totalDays = (DateTime.Today - entryDate).TotalDays;
            foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails)
            {
                if (totalDays > 0)
                {
                    for (int i = 0; i <= totalDays; i++)
                    {
                        await Update(tenantId, warehouseId, goodsReceiptNoteDetail.ProductId, entryDate);
                    }
                }
                else
                {
                    await Update(tenantId, warehouseId, goodsReceiptNoteDetail.ProductId, entryDate);
                }
            }
            return new ActionResultResponse(1, _resourceService.GetString("Update inventory daily report successful."));
        }

        /// <summary>
        /// Chạy lại báo cáo tồn cho sản phẩm trong kho từ ngày.
        /// </summary>
        /// <param name="tenantId">Mã sản phẩm</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="productId">Mã sản phẩm</param>
        /// <param name="fromDate">Chạy lại báo cáo từ ngày.</param>
        /// <param name="page">Trang</param>
        /// <param name="pageSize">Số bản ghi/trang</param>
        /// <returns></returns>
        public async Task SyncInventoryDailyReport(string tenantId, string warehouseId, string productId, DateTime fromDate, int page = 1,
            int pageSize = 10)
        {
            // Cập nhât cho ngày hiện tại. Trong trường hợp ngày hiện tại chưa có trong inventory daily report.
            await Update(tenantId, warehouseId, productId, fromDate);

            // Chạy lại báo cáo tồn cho các ngày còn lại.
            var inventoryDailyReports = await _inventoryDailyReportRepository.SearchForUpdate(tenantId, warehouseId, productId,
                fromDate, page, pageSize, out var totalRows);

            var totalPages = Math.Ceiling((decimal)totalRows / pageSize);
            if (totalPages > 1 && page < totalPages)
            {
                await SyncInventoryDailyReport(tenantId, warehouseId, productId, fromDate, page + 1, pageSize);
            }

            foreach (var inventoryDailyReport in inventoryDailyReports)
            {
                await Update(tenantId, warehouseId, inventoryDailyReport.ProductId, inventoryDailyReport.EntryDate);
            }
        }

        /// <summary>
        /// Chạy lại báo cáo tồn cho toàn bộ kho.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="date">Ngày cập nhật</param>
        /// <param name="page">Trang</param>
        /// <param name="pageSize">Số bản ghi/trang</param>
        /// <returns></returns>
        public async Task SyncInventoryDailyReportByWarehouse(string tenantId, string warehouseId, DateTime date, int page = 1,
            int pageSize = 10)
        {
            var productIds =
                await _inventoryDailyReportRepository.GetProductIds(tenantId, warehouseId, page, pageSize,
                    out int totalRows);

            var totalPages = Math.Ceiling((decimal)totalRows / pageSize);
            if (totalPages > 1 && page < totalPages)
            {
                await SyncInventoryDailyReportByWarehouse(tenantId, warehouseId, date, page + 1, pageSize);
            }

            foreach (var productId in productIds)
            {
                await Update(tenantId, warehouseId, productId, date);
            }
        }

        /// <summary>
        /// Tìm kiếm sản phẩm kiểm kê.
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="warehouseId"></param>
        /// <param name="date"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public async Task<SearchResult<InventoryViewModel>> SearchToTakeInventory(string tenantId, string keyword, string warehouseId,
            DateTime date, int page, int pageSize)
        {
            // Chạy lại báo cáo tồn tính đến thời điểm hiện tại.
            await SyncInventoryDailyReportByWarehouse(tenantId, warehouseId, date, page, pageSize);

            var items = await _inventoryDailyReportRepository.SearchInventory(tenantId, keyword, warehouseId, date, page,
                pageSize, out var totalRows);
            return new SearchResult<InventoryViewModel>(items, totalRows);
        }
    }
}
