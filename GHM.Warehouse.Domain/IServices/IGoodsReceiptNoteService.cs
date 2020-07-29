using System;
using GHM.Infrastructure.Models;
using System.Threading.Tasks;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IGoodsReceiptNoteService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, GoodsReceiptNoteMeta goodsReceiptNoteMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, GoodsReceiptNoteMeta goodsReceiptNoteMeta);

        Task<ActionResultResponse<GoodsReceiptNoteDetailViewModel>> GetDetail(string tenantId, string id);

        Task<SearchResult<GoodsReceiptNoteViewModel>> Search(string tenantId, string userId, string supplierId, string deliverId,
            string warehouseId, DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        Task<SearchResult<Suggestion<string>>>
            FollowSuggestion(string tenantId, string keyword, int page, int pageSize);

        Task<SearchResult<GoodsDeliverReceiverSuggestion>>
            GoodsDeliverSuggestion(string tenantId, string supplierId, string keyword, int page, int pageSize);

        Task<SearchResult<Suggestion<string>>>
            LotSuggestion(string tenantId, string keyword, int page, int pageSize);

        Task<SearchResult<GoodsReceiptNoteBarcodeViewModel>> GetBarcode(string tenantId, string userId, string receiptId);

        //Task<ActionResultResponse<WarehouseCardViewModel>> SearchWarehouseCard(string tenantId, string userId, string warehouseId, string productId,
        //    DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        //Task<ActionResultResponse<WarehouseCardDetailViewModel>> SearchWarehouseCardDetail(string tenantId, string userId,
        //    string warehouseId, string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize);
    }
}
