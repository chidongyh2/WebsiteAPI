using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Services;
using IdentityModel.Client;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using OfficeOpenXml;
using OfficeOpenXml.Style;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class InventoryService : IInventoryService
    {
        private readonly IInventoryRepository _inventoryRepository;
        private readonly IInventoryDetailRepository _inventoryDetailRepository;
        private readonly IInventoryMemberRepository _inventoryMemberRepository;
        private readonly IWarehouseRepository _warehouseRepository;
        private readonly IProductRepository _productRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _warehouseResourceService;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IProductUnitRepository _productUnitRepository;

        private readonly IServiceProvider _serviceProvider;

        private readonly IHostingEnvironment _hostingEnvironment;
        //private readonly IGoodsReceiptNoteService _goodsReceiptNoteService;
        //private readonly IGoodsDeliveryNoteService _goodsDeliveryNoteService;


        public InventoryService(IInventoryRepository inventoryRepository,
            IInventoryDetailRepository inventoryDetailRepository,
            IInventoryMemberRepository inventoryMemberRepository,
            IWarehouseRepository warehouseRepository,
            IProductRepository productRepository,
            IWarehouseManagerConfigRepository warehouseManagerConfigRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> warehouseResourceService, IInventoryReportRepository inventoryReportRepository,
            IProductUnitRepository productUnitRepository, IServiceProvider serviceProvider, IHostingEnvironment hostingEnvironment)
        {
            _inventoryRepository = inventoryRepository;
            _inventoryDetailRepository = inventoryDetailRepository;
            _inventoryMemberRepository = inventoryMemberRepository;
            _warehouseRepository = warehouseRepository;
            _productRepository = productRepository;
            _sharedResourceService = sharedResourceService;
            _warehouseResourceService = warehouseResourceService;
            _inventoryReportRepository = inventoryReportRepository;
            _productUnitRepository = productUnitRepository;
            _serviceProvider = serviceProvider;
            _hostingEnvironment = hostingEnvironment;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
        }

        public async Task<SearchResult<InventoryViewModel>> Search(string tenantId, string warehouseId, string userId, DateTime? fromDate,
            DateTime? toDate, InventoryStatus? status, int page, int pageSize)
        {
            if (!string.IsNullOrEmpty(warehouseId))
            {
                var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                    warehouseId, userId, tenantId);
                if (!isWarehouseManagement)
                    return new SearchResult<InventoryViewModel>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));
            }

            var items = await _inventoryRepository.Search(tenantId, warehouseId, fromDate, toDate, status, page, pageSize, out var totalRows);
            return new SearchResult<InventoryViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            InventoryMeta inventoryMeta, bool isBalance = false)
        {
            var isWarehouseExists =
                await _warehouseRepository.CheckExists(inventoryMeta.WarehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Warehouse does not exists. Please check again."));

            var inventory = new Inventory
            {
                WarehouseId = inventoryMeta.WarehouseId,
                InventoryDate = inventoryMeta.InventoryDate,
                Note = inventoryMeta.Note,
                Status = InventoryStatus.Waiting,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            };

            inventory.InventoryDetails = await AddInventoryDetails(tenantId, inventory.WarehouseId, inventory.InventoryDate,
                inventory.Id, inventoryMeta.Details);
            await AddInventoryMembers();

            if (inventory.InventoryDetails.Count == 0)
                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    _warehouseResourceService.GetString("product")));

            var result = await _inventoryRepository.Insert(inventory);
            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            await Balance();
            return new ActionResultResponse<string>(result, _sharedResourceService.GetString(SuccessMessage.AddSuccessful,
                _warehouseResourceService.GetString("inventory")));

            #region Local functions            
            async Task AddInventoryMembers()
            {
                var httpService = new HttpClientService();
                foreach (var member in inventoryMeta.Members)
                {
                    //var userInfo = await httpService.GetUserInfo(inventory.TenantId, member.UserId);
                    //if (userInfo == null)
                    //    continue;

                    inventory.InventoryMembers.Add(new InventoryMember
                    {
                        //UserId = userInfo.UserId,
                        //FullName = userInfo.FullName,
                        //Avatar = userInfo.Avatar,
                        //OfficeName = userInfo.OfficeName,
                        //PositionName = userInfo.PositionName,
                        InventoryId = inventory.Id
                    });
                }
            }

            async Task Balance()
            {
                if (isBalance)
                {
                    // Thêm phiếu nhập và xuất để cân bằng kho.
                    await BalanceWarehouse(inventory.TenantId, inventory.Id);
                }
            }
            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string inventoryId, InventoryMeta inventoryMeta, bool isBalanced)
        {
            var inventory = await _inventoryRepository.GetInfo(inventoryId);
            if (inventory == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventory.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (inventory.Status != InventoryStatus.Waiting)
                return new ActionResultResponse<string>(-3,
                    _sharedResourceService.GetString("Inventory already balanced. You can not edit this inventory"));

            if (inventory.ConcurrencyStamp != inventoryMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-4,
                    _warehouseResourceService.GetString(
                        "The inventory already updated by other people. you are not allowed to edit the inventory information."));

            var isWarehouseExists =
                await _warehouseRepository.CheckExists(inventoryMeta.WarehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse<string>(-5, _warehouseResourceService.GetString("Warehouse does not exists. Please check again."));

            inventory.WarehouseId = inventoryMeta.WarehouseId;
            inventory.InventoryDate = inventoryMeta.InventoryDate;
            inventory.Note = inventoryMeta.Note;
            inventory.ConcurrencyStamp = Guid.NewGuid().ToString();
            inventory.LastUpdate = DateTime.Now;
            inventory.LastUpdateUserId = lastUpdateUserId;
            inventory.LastUpdateFullName = lastUpdateFullName;
            inventory.InventoryDate = inventoryMeta.InventoryDate;

            await _inventoryRepository.Update(inventory);
            if (isBalanced)
            {
                var resultBalance = await BalanceWarehouse(inventory.TenantId, inventory.Id);
                if (resultBalance.Code <= 0)
                    return resultBalance;
            }

            await UpdateMembers();
            await UpdateDetail();

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update inventory successful."),
                string.Empty, inventory.ConcurrencyStamp);

            async Task UpdateMembers()
            {
                var members = await _inventoryMemberRepository.GetsByInventoryId(inventory.Id);
                if (inventoryMeta.Members == null || !inventoryMeta.Members.Any())
                {
                    await _inventoryMemberRepository.ForceDeleteByInventoryId(inventory.Id);
                }
                else
                {
                    var memberMetaUserIds = inventoryMeta.Members.Select(x => x.UserId).ToList();
                    var memberUserIds = members.Select(x => x.UserId).ToList();

                    var listNews = memberMetaUserIds.Except(memberUserIds).ToList();
                    var listDelete = memberUserIds.Except(memberMetaUserIds).ToList();

                    if (listNews.Any())
                    {
                        var httpService = new HttpClientService();
                        foreach (var inventoryMember in inventoryMeta.Members.Where(x => listNews.Contains(x.UserId)))
                        {
                            //var userInfo = await httpService.GetUserInfo(inventory.TenantId, inventoryMember.UserId);
                            //if (userInfo == null)
                            //    continue;

                            inventory.InventoryMembers.Add(new InventoryMember
                            {
                                //UserId = userInfo.UserId,
                                //FullName = userInfo.FullName,
                                //Avatar = userInfo.Avatar,
                                //OfficeName = userInfo.OfficeName,
                                //PositionName = userInfo.PositionName,
                                InventoryId = inventory.Id
                            });
                        }

                        await _inventoryMemberRepository.Inserts(inventory.InventoryMembers);
                    }

                    if (listDelete.Any())
                    {
                        await _inventoryMemberRepository.Deletes(inventory.Id, listDelete);
                    }
                }
            }

            async Task UpdateDetail()
            {
                var inventoryDetails =
                    await _inventoryDetailRepository.GetInventoryDetailByInventoryId(tenantId, inventory.Id);

                if (inventoryDetails == null)
                {
                    inventoryDetails = await AddInventoryDetails(inventory.TenantId, inventory.WarehouseId,
                        inventory.InventoryDate,
                        inventory.Id, inventoryMeta.Details);
                    await _inventoryDetailRepository.Inserts(inventoryDetails);
                }
                else
                {
                    var inventoryDetailMetaIds = inventoryMeta.Details.Select(x => x.Id).ToList();
                    var inventoryDetailIds = inventoryDetails.Select(x => x.Id).ToList();

                    // Danh sách thêm mới.
                    var listNewInventoryDetailIds = inventoryDetailMetaIds.Except(inventoryDetailIds).ToList();
                    var listUpdateInventoryDetailIds = inventoryDetailMetaIds.Intersect(inventoryDetailIds).ToList();
                    var listDeleteInventoryDetailIds = inventoryDetailIds.Except(inventoryDetailMetaIds);

                    // Thêm mới chi tiết phiếu nhập.
                    var listNewInventoryDetailMetas =
                        inventoryMeta.Details.Where(x => listNewInventoryDetailIds.Contains(x.Id)).ToList();
                    if (listNewInventoryDetailMetas.Any())
                        await AddInventoryDetails(inventory.TenantId, inventory.WarehouseId,
                            inventory.InventoryDate,
                            inventory.Id, listNewInventoryDetailMetas);

                    var listUpdate = inventoryDetails.Where(x => listUpdateInventoryDetailIds.Contains(x.Id)).ToList();
                    if (listUpdate.Any())
                    {
                        // Cập nhật chi tiết phiếu nhập.
                        foreach (var inventoryDetail in listUpdate)
                        {
                            var inventoryDetailMeta = inventoryMeta.Details.FirstOrDefault(x => x.Id == inventoryDetail.Id);
                            if (inventoryDetailMeta == null)
                                continue;

                            if (inventoryDetailMeta.RealQuantity == inventoryDetail.RealQuantity)
                                continue;

                            inventoryDetail.RealQuantity = inventoryDetailMeta.RealQuantity;
                        }
                        await _inventoryDetailRepository.Updates(listUpdate);
                    }


                    // Xóa chi tiết phiếu nhập.
                    var listDeleteInventoryDetails =
                        inventoryDetails.Where(x => listDeleteInventoryDetailIds.Contains(x.Id)).ToList();
                    if (listDeleteInventoryDetails.Any())
                        await _inventoryDetailRepository.Deletes(listDeleteInventoryDetails);
                }
            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string inventoryId)
        {
            var info = await _inventoryRepository.GetInfo(inventoryId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.Status != InventoryStatus.Waiting)
                return new ActionResultResponse(-3,
                    _sharedResourceService.GetString("Inventory already balanced. You can not delete this inventory."));

            await _inventoryMemberRepository.ForceDeleteByInventoryId(inventoryId);
            await _inventoryDetailRepository.ForceDeleteByInventoryId(inventoryId);
            var result = await _inventoryRepository.ForceDelete(inventoryId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete inventory successful."));
        }

        public async Task<ActionResultResponse<InventoryViewModel>> GetDetail(string tenantId, string userId, string inventoryId, bool isGetPrice = false)
        {
            var info = await _inventoryRepository.GetInfo(inventoryId);
            if (info == null)
                return new ActionResultResponse<InventoryViewModel>(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<InventoryViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // Kiểm tra người dùng có quyền trên kho hiện tại hay không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                info.WarehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<InventoryViewModel>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var warehouseInfo = await _warehouseRepository.GetInfo(info.WarehouseId);
            var inventoryMembers = await _inventoryMemberRepository.GetsByInventoryId(inventoryId);
            var inventoryDetails = await _inventoryDetailRepository.GetsByInventoryId(tenantId, inventoryId,
                info.WarehouseId, isGetPrice, 1, int.MaxValue, out var totalRows);

            var inventoryDetail = new InventoryViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                WarehouseId = info.WarehouseId,
                WarehouseName = warehouseInfo.Name,
                InventoryDate = info.InventoryDate,
                Note = info.Note,
                Status = info.Status,
                Details = inventoryDetails,
                Members = inventoryMembers,
                TotalItems = totalRows
            };
            return new ActionResultResponse<InventoryViewModel>
            {
                Code = 1,
                Data = inventoryDetail
            };
        }

        public async Task<SearchResult<InventoryDetailViewModel>> GetInventoryDetail(string tenantId, string inventoryId, string keyword,
            int page, int pageSize)
        {
            var inventoryInfo = await _inventoryRepository.GetInfo(inventoryId);
            if (inventoryInfo == null)
                return new SearchResult<InventoryDetailViewModel>
                {
                    Code = -1,
                    Message = _warehouseResourceService.GetString("Inventory does not exists.")
                };

            return new SearchResult<InventoryDetailViewModel>
            {
                Items = await _inventoryDetailRepository.GetsByInventoryId(tenantId, inventoryId, inventoryInfo.WarehouseId,
                    false, page, pageSize, out var totalRows),
                TotalRows = totalRows,
            };
        }

        public async Task<ActionResultResponse<MemoryStream>> Exports(string tenantId, string userId, string fullName, string avatar,
            string inventoryId, InventoryMeta inventoryMeta)
        {
            var inventory = await _inventoryRepository.GetInfo(tenantId, inventoryId, true);
            if (inventory == null)
            {
                await Insert(tenantId, userId, fullName, avatar, inventoryMeta);
                inventory = await _inventoryRepository.GetInfo(tenantId, inventoryId, true);
                if (inventory == null)
                    return new ActionResultResponse<MemoryStream>(-1, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }
            else
            {
                await Update(tenantId, userId, fullName, avatar, inventoryId, inventoryMeta, false);
            }

            var inventoryDetails = await _inventoryDetailRepository.GetsByInventoryId(tenantId, inventoryId,
                inventory.WarehouseId, true,
                1, int.MaxValue, out var totalRows);

            //string sWebRootFolder = _hostingEnvironment.WebRootPath;
            //string fileName = @"inventory.xlsx";
            //FileInfo file = new FileInfo(Path.Combine(sWebRootFolder, fileName));
            //if (file.Exists)
            //{
            //    file.Delete();
            //    file = new FileInfo(Path.Combine(sWebRootFolder, fileName));
            //}
            using (ExcelPackage package = new ExcelPackage())
            {
                var warehouse = await _warehouseRepository.GetInfo(inventory.WarehouseId, inventory.TenantId, true);
                var worksheet = package.Workbook.Worksheets.Add("Inventory");
                worksheet.Cells[1, 1].Value =
                    $"Kiểm kê hàng hóa vật tư trong kho ngày: {inventory.InventoryDate.Day} tháng {inventory.InventoryDate.Month} năm {inventory.InventoryDate.Year}";
                worksheet.Cells[2, 1].Value = $"Kho bãi: {warehouse.Name}";

                worksheet.Cells[1, 1].Style.Font.Size = 16;
                worksheet.Cells[1, 1].Style.Font.Bold = true;

                if (inventoryDetails.Any())
                {
                    // Tạo ra dòng tiêu đề.
                    worksheet.Cells[3, 1].Value = "STT";
                    worksheet.Cells[3, 2].Value = "Hàng hóa";
                    worksheet.Cells[3, 3].Value = "Số lượng";
                    worksheet.Cells[3, 4].Value = "Số lượng kế toán";
                    worksheet.Cells[3, 5].Value = "ĐVT";
                    worksheet.Cells[3, 6].Value = "Đơn giá";
                    worksheet.Cells[3, 7].Value = "Số tiền";
                    worksheet.Cells[3, 8].Value = "Số tiền kế toán";
                    worksheet.Cells[3, 9].Value = "Chênh lệch";
                    worksheet.Cells[3, 10].Value = "Chênh lệch tiền";

                    using (var range = worksheet.Cells[3, 1, 3, 10])  //Address "A1:A5"
                    {
                        range.Style.Font.Bold = true;
                        range.Style.Fill.PatternType = ExcelFillStyle.Solid;
                        range.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(46, 204, 113));
                        range.Style.Font.Color.SetColor(Color.White);
                    }

                    for (int i = 4; i < inventoryDetails.Count + 4; i++)
                    {
                        var inventoryDetail = inventoryDetails[i - 4];
                        if (inventoryDetail == null)
                            continue;

                        var totalAmounts = inventoryDetail.RealQuantity * inventoryDetail.Price;
                        var inventoryTotalAmounts = inventoryDetail.InventoryQuantity * inventoryDetail.Price;

                        worksheet.Cells[i, 1].Value = i - 3;
                        worksheet.Cells[i, 2].Value = inventoryDetail.ProductName;
                        worksheet.Cells[i, 3].Value = inventoryDetail.RealQuantity;
                        worksheet.Cells[i, 4].Value = inventoryDetail.InventoryQuantity;
                        worksheet.Cells[i, 5].Value = inventoryDetail.UnitName;
                        worksheet.Cells[i, 6].Value = inventoryDetail.Price;
                        worksheet.Cells[i, 7].Value = totalAmounts;
                        worksheet.Cells[i, 8].Value = inventoryTotalAmounts;
                        worksheet.Cells[i, 9].Value = inventoryDetail.RealQuantity - inventoryDetail.InventoryQuantity;
                        worksheet.Cells[i, 10].Value = totalAmounts - inventoryTotalAmounts;

                        using (var range = worksheet.Cells[i, 1, i, 10])  //Address "A1:A5"
                        {
                            range.Style.Font.Bold = true;
                            range.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            range.Style.Border.Top.Color.SetColor(Color.Black);
                            range.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                            range.Style.Border.Bottom.Color.SetColor(Color.Black);
                            range.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            range.Style.Border.Left.Color.SetColor(Color.Black);
                            range.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            range.Style.Border.Right.Color.SetColor(Color.Black);
                        }
                    }
                }
                return new ActionResultResponse<MemoryStream>
                {
                    Data = new MemoryStream(package.GetAsByteArray())
                };
            }
        }

        public async Task<ActionResultResponse<string>> InsertDetail(string tenantId, string userId, string inventoryId,
            InventoryDetailMeta inventoryDetailMeta)
        {
            var inventoryInfo = await _inventoryRepository.GetInfo(inventoryId);
            if (inventoryInfo == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventoryInfo.TenantId != tenantId)
                return new ActionResultResponse<string>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (inventoryInfo.Status == InventoryStatus.Balanced)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString("Inventory already balanced. You can not update this inventory."));

            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                inventoryInfo.WarehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse<string>(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var isExists = await _inventoryDetailRepository.CheckExistsByProductId(inventoryId, inventoryDetailMeta.ProductId,
                inventoryDetailMeta.LotId);
            if (isExists)
                return new ActionResultResponse<string>(-3,
                    _warehouseResourceService.GetString("Product: \"{0}\" already exists.", inventoryDetailMeta.ProductId));

            //check exit productId
            var isProductIdExists = await _productRepository.CheckExists(inventoryDetailMeta.ProductId, inventoryInfo.TenantId);
            if (!isProductIdExists)
                return new ActionResultResponse<string>(-4, _warehouseResourceService.GetString("Product does not exists. Please check again."));

            var isUnitExists = await _productUnitRepository.CheckExists(tenantId,
                inventoryDetailMeta.ProductId, inventoryDetailMeta.UnitId);
            if (!isUnitExists)
                return new ActionResultResponse<string>(-5,
                    _warehouseResourceService.GetString(_sharedResourceService.GetString(ValidatorMessage.InValid,
                        _warehouseResourceService.GetString("unit"))));

            // Lấy về thông tin tồn kho.
            var openingStock = string.IsNullOrEmpty(inventoryDetailMeta.LotId)
                ? await _inventoryReportRepository.GetOpeningStock(inventoryInfo.TenantId,
                    inventoryInfo.WarehouseId,
                    inventoryDetailMeta.ProductId, inventoryInfo.InventoryDate)
                : await _inventoryReportRepository.GetOpeningStockByLot(inventoryInfo.TenantId, inventoryInfo.WarehouseId,
                    inventoryDetailMeta.ProductId, inventoryDetailMeta.LotId, inventoryInfo.InventoryDate);
            var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
            var inventoryDetail = new InventoryDetail
            {
                ProductId = inventoryDetailMeta.ProductId,
                Reason = inventoryDetailMeta.Reason,
                RealQuantity = inventoryDetailMeta.RealQuantity,
                InventoryId = inventoryInfo.Id,
                InventoryQuantity = openingStockQuantity,
                LotId = inventoryDetailMeta.LotId,
                UnitId = inventoryDetailMeta.UnitId
            };

            var result = await _inventoryDetailRepository.Insert(inventoryDetail);
            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(result, _warehouseResourceService.GetString("Add new inventory detail successful."),
                string.Empty, inventoryDetail.ConcurrencyStamp);
        }

        public async Task<ActionResultResponse<string>> UpdateDetail(string tenantId, string userId, string fullName,
            string inventoryId, string productId,
            InventoryDetailMeta inventoryDetailMeta)
        {
            var inventoryInfo = await _inventoryRepository.GetInfo(inventoryId);
            if (inventoryInfo == null)
                return new ActionResultResponse<string>(-1,
                    _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventoryInfo.Status == InventoryStatus.Balanced)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString("Inventory already balanced. You can not update this inventory."));

            var inventoryDetail = await _inventoryDetailRepository.GetInfo(inventoryId, productId);
            if (inventoryDetail == null)
                return new ActionResultResponse<string>(-3, _warehouseResourceService.GetString("Inventory detail does not exists."));

            if (inventoryDetail.ConcurrencyStamp != inventoryDetailMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-4, _sharedResourceService.GetString(ErrorMessage.AlreadyUpdatedBy,
                    _warehouseResourceService.GetString("inventory detail"), inventoryDetail.LastUpdateFullName));

            inventoryDetail.RealQuantity = inventoryDetailMeta.RealQuantity;
            inventoryDetail.Reason = inventoryDetailMeta.Reason;
            inventoryDetail.ConcurrencyStamp = Guid.NewGuid().ToString();
            inventoryDetail.LastUpdate = DateTime.Now;
            inventoryDetail.LastUpdateUserId = userId;
            inventoryDetail.LastUpdateFullName = fullName;
            await _inventoryDetailRepository.Update(inventoryDetail);

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update inventory detail successful."),
                string.Empty, inventoryDetail.ConcurrencyStamp);
        }

        public async Task<ActionResultResponse> DeleteDetail(string tenantId, string userId, string inventoryId, string productId)
        {
            var inventoryInfo = await _inventoryRepository.GetInfo(inventoryId, true);
            if (inventoryInfo == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventoryInfo.TenantId != tenantId)
                return new ActionResultResponse(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (inventoryInfo.Status == InventoryStatus.Balanced)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString("Inventory already balanced. You can not update this inventory."));

            if (inventoryInfo.Status == InventoryStatus.Balanced)
                return new ActionResultResponse(-3,
                    _warehouseResourceService.GetString("Inventory already finished. You can not delete this inventory."));

            var inventoryDetailCount = await _inventoryDetailRepository.Count(inventoryInfo.Id);
            if (inventoryDetailCount <= 1)
                return new ActionResultResponse(-4,
                    _warehouseResourceService.GetString("Inventory require at least product. You can not delete this product."));

            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                inventoryInfo.WarehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new ActionResultResponse(-403,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _inventoryDetailRepository.ForceDelete(inventoryId, productId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete inventory detail successful."));
        }

        public async Task<SearchResultResponse<InventoryDetailViewModel>> SearchDetail(string tenantId, string userId, string inventoryId)
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResultResponse<string>> InsertMember(string inventoryId, InventoryMemberMeta inventoryMemberMeta)
        {
            var inventory = await _inventoryRepository.GetInfo(inventoryId);
            if (inventory == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventory.Id != inventoryId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            var isExists = await _inventoryMemberRepository.CheckExistsByUserId(inventoryId, inventoryMemberMeta.UserId);
            if (isExists)
            {
                return new ActionResultResponse<string>(-3, _warehouseResourceService.GetString("UserId: \"{0}\" already exists.", inventoryMemberMeta.UserId));
            }

            var inventoryMemberInsert = new InventoryMember
            {
                Id = Guid.NewGuid().ToString(),
                InventoryId = inventoryId,
                UserId = inventoryMemberMeta.UserId,
                FullName = inventoryMemberMeta.FullName.Trim(),
                PositionName = inventoryMemberMeta.PositionName.Trim(),
                OfficeName = inventoryMemberMeta.OfficeName?.Trim(),
            };

            var result = await _inventoryMemberRepository.Insert(inventoryMemberInsert);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Add new inventory member successful."),
                string.Empty, inventoryMemberMeta.UserId);
        }

        public async Task<ActionResultResponse<string>> UpdateMember(string inventoryId, string id, InventoryMemberMeta inventoryMemberMeta)
        {
            var inventory = await _inventoryRepository.GetInfo(inventoryId);
            if (inventory == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventory.Id != inventoryId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            var info = await _inventoryMemberRepository.GetInfo(inventoryId, id);
            if (info == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Inventory member does not exists."));

            info.UserId = inventoryMemberMeta.UserId;
            info.FullName = inventoryMemberMeta.FullName.Trim();
            info.PositionName = inventoryMemberMeta.PositionName?.Trim();
            info.OfficeName = inventoryMemberMeta.OfficeName?.Trim();
            await _inventoryMemberRepository.Update(info);

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update inventory member successful."),
                string.Empty, info.UserId);
        }

        public async Task<ActionResultResponse> DeleteMember(string inventoryId, string id)
        {
            var inventory = await _inventoryRepository.GetInfo(inventoryId);
            if (inventory == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Inventory does not exists."));

            if (inventory.Id != inventoryId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            var info = await _inventoryMemberRepository.GetInfo(inventoryId, id);
            if (info == null)
                return new ActionResultResponse<string>(-3, _warehouseResourceService.GetString("Inventory member does not exists."));

            var result = await _inventoryMemberRepository.ForceDelete(inventoryId, id);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete inventory member successful."));
        }

        /// <summary>
        /// Cân kho
        /// </summary>       
        /// <returns></returns>
        public async Task<ActionResultResponse<string>> BalanceWarehouse(string tenantId, string inventoryId)
        {
            var inventory = await _inventoryRepository.GetInfo(tenantId, inventoryId);
            if (inventory == null)
                return new ActionResultResponse<string>(-1,
                    _sharedResourceService.GetString(ErrorMessage.NotFound, _warehouseResourceService.GetString("inventory info")));

            var inventoryDetails =
                await _inventoryDetailRepository.GetInventoryDetailByInventoryId(tenantId, inventoryId, true);
            if (inventoryDetails == null)
                return new ActionResultResponse<string>(-2,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseSelectAtLeast, _warehouseResourceService.GetString("product")));

            // Danh sách thừa.           
            var listOverMeasure = inventoryDetails.Where(x => x.RealQuantity - x.InventoryQuantity > 0).ToList();
            if (listOverMeasure.Any())
            {
                var goodsReceiptNoteService = _serviceProvider.GetRequiredService<IGoodsReceiptNoteService>();
                // Tạo phiếu nhập.
                var goodsReceiptNoteMeta = new GoodsReceiptNoteMeta
                {
                    EntryDate = inventory.InventoryDate,
                    WarehouseId = inventory.WarehouseId,
                    Note = inventory.Note,
                    CreatorId = inventory.CreatorId,
                    CreatorFullName = inventory.CreatorFullName,
                    Type = GoodsReceiptNoteType.Inventory,
                    SubjectId = inventory.Id,
                    GoodsReceiptNoteDetails = listOverMeasure.Select(x => new GoodsReceiptNoteDetailMeta
                    {
                        ProductId = x.ProductId,
                        UnitId = x.UnitId,
                        EntryDate = inventory.InventoryDate,
                        LotId = x.LotId,
                        Quantity = (x.RealQuantity - x.InventoryQuantity) ?? 0,
                        Price = x.Price
                    }).ToList()
                };
                var result = await goodsReceiptNoteService.Insert(inventory.TenantId, goodsReceiptNoteMeta);
                if (result.Code <= 0)
                    return result;
            }

            // Danh sách thiếu.
            var listMissing = inventoryDetails.Where(x => x.RealQuantity - x.InventoryQuantity < 0).ToList();
            if (listMissing.Any())
            {
                var goodsDeliveryNoteService = _serviceProvider.GetRequiredService<IGoodsDeliveryNoteService>();
                // Tạo phiếu xuất.
                var goodsDeliveryNoteMeta = new GoodsDeliveryNoteMeta
                {
                    TenantId = inventory.TenantId,
                    WarehouseId = inventory.WarehouseId,
                    CreatorId = inventory.CreatorId,
                    CreatorFullName = inventory.CreatorFullName,
                    SubjectId = inventory.Id,
                    DeliveryDate = inventory.InventoryDate,
                    Note = inventory.Note,
                    Type = GoodsDeliveryNoteType.Inventory,
                    GoodsDeliveryNoteDetails = listMissing.Select(x => new GoodsDeliveryNoteDetailMeta
                    {
                        ProductId = x.ProductId,
                        UnitId = x.UnitId,
                        LotId = x.LotId,
                        DeliveryDate = inventory.InventoryDate,
                        WarehouseId = inventory.WarehouseId,
                        Quantity = Math.Abs(x.RealQuantity - x.InventoryQuantity ?? 0),
                        RecommendedQuantity = Math.Abs(x.RealQuantity - x.InventoryQuantity ?? 0),
                        Price = x.Price
                    }).ToList()
                };
                var result = await goodsDeliveryNoteService.Insert(goodsDeliveryNoteMeta, inventory.CreatorId, inventory.CreatorFullName,
                    string.Empty);
                if (result.Code <= 0)
                    return new ActionResultResponse<string>(result.Code, result.Message);
            }

            inventory.Status = InventoryStatus.Balanced;
            await _inventoryRepository.Update(inventory);
            return new ActionResultResponse<string>();
        }

        private async Task<string> GenerateId(string tenantId)
        {
            while (true)
            {
                var totalItem = await _inventoryRepository.GetTotal(tenantId);
                var id = totalItem.ToAlphabetId(2, 5);

                // Check id exists.
                var isIdExists = await _inventoryRepository.CheckExists(tenantId, id);
                if (!isIdExists) return id;
            }
        }

        private async Task<List<InventoryDetail>> AddInventoryDetails(string tenantId, string warehouseId, DateTime inventoryDate,
            string inventoryId, List<InventoryDetailMeta> inventoryDetailMetas)
        {
            var inventoryDetails = new List<InventoryDetail>();
            foreach (var inventoryDetailMeta in inventoryDetailMetas)
            {
                var isUnitExists = await _productUnitRepository.CheckExists(tenantId,
                    inventoryDetailMeta.ProductId, inventoryDetailMeta.UnitId);

                if (!isUnitExists)
                    continue;

                // Lấy về thông tin tồn kho.
                var openingStock = string.IsNullOrEmpty(inventoryDetailMeta.LotId)
                    ? await _inventoryReportRepository.GetOpeningStock(tenantId,
                        warehouseId, inventoryDetailMeta.ProductId, inventoryDate)
                    : await _inventoryReportRepository.GetOpeningStockByLot(tenantId, warehouseId,
                        inventoryDetailMeta.ProductId, inventoryDetailMeta.LotId, inventoryDate);
                var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                inventoryDetails.Add(new InventoryDetail
                {
                    ProductId = inventoryDetailMeta.ProductId,
                    Reason = inventoryDetailMeta.Reason,
                    RealQuantity = inventoryDetailMeta.RealQuantity,
                    InventoryId = inventoryId,
                    InventoryQuantity = openingStockQuantity,
                    LotId = inventoryDetailMeta.LotId,
                    UnitId = inventoryDetailMeta.UnitId,
                    Price = openingStock?.ExWarehousePrice ?? 0
                });
            }
            return inventoryDetails;
        }
    }
}
