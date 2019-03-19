using System;
using System.IO;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IInventoryService
    {
        Task<SearchResult<InventoryViewModel>> Search(string tenantId, string warehouseId, string userId,
            DateTime? fromDate, DateTime? toDate, InventoryStatus? status, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            InventoryMeta inventoryMeta, bool isBalanced);

        Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string inventoryId, InventoryMeta inventoryMeta, bool isBalanced);

        Task<ActionResultResponse> Delete(string tenantId, string inventoryId);

        Task<ActionResultResponse<InventoryViewModel>> GetDetail(string tenantId, string userId, string inventoryId, bool isGetPrice = false);

        Task<ActionResultResponse<string>> InsertDetail(string tenantId, string userId, string inventoryId, InventoryDetailMeta inventoryDetailMeta);

        Task<ActionResultResponse<string>> UpdateDetail(string tenantId, string userId, string fullName,
            string inventoryId, string productId, InventoryDetailMeta inventoryDetailMeta);

        Task<ActionResultResponse> DeleteDetail(string tenantId, string userId, string inventoryId, string productId);

        Task<SearchResultResponse<InventoryDetailViewModel>> SearchDetail(string tenantId, string userId, string inventoryId);

        Task<ActionResultResponse<string>> InsertMember(string inventoryId, InventoryMemberMeta inventoryMemberMeta);

        Task<ActionResultResponse<string>> UpdateMember(string inventoryId, string id, InventoryMemberMeta inventoryMemberMeta);

        Task<ActionResultResponse> DeleteMember(string inventoryId, string id);

        Task<SearchResult<InventoryDetailViewModel>> GetInventoryDetail(string tenantId, string inventoryId, string keyword,
            int page, int pageSize);

        //Task<ActionResultResponse> BalancedWarehouse(string tenantId, string inventoryId, DateTime inventoryDate, string creatorId,
        //    string creatorFullName, string creatorAvator);

        Task<ActionResultResponse<MemoryStream>> Exports(string tenantId, string userId, string fullName, string avatar,
            string inventoryId, InventoryMeta inventoryMeta);
    }
}
