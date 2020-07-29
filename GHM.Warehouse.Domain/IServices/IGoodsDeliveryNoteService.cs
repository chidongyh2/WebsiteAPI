using System;
using GHM.Infrastructure.Models;
using System.Threading.Tasks;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IGoodsDeliveryNoteService
    {
        Task<ActionResultResponse> Insert(GoodsDeliveryNoteMeta goodsDeliveryNoteMeta, string creatorId, string creatorFullName, string creatorAvatar);

        Task<ActionResultResponse<string>> Update(string id, GoodsDeliveryNoteMeta goodsDeliveryNoteMeta,
            string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<GoodsDeliveryNoteDetailViewModel>> GetDetail(string tenantId, string languageId, string id);

        Task<SearchResult<GoodsDeliveryNotesViewModel>> Search(string tenantId, string userId, string keyword, GoodsDeliveryNoteType? type,
            string warehouseId, DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        Task<ActionResultResponse<dynamic>> InsertDetail(string tenantId, string goodsDeliveryNoteId, GoodsDeliveryNoteDetailMeta goodsDeliveryNoteDetailMeta,
            string creatorId, string creatorFullName, string creatorAvatar);

        Task<ActionResultResponse<string>> UpdateDetail(string tenantId, string goodsDeliveryNoteId, string id,
            GoodsDeliveryNoteDetailMeta goodsDeliveryNoteDetailMeta, string userId, string fullName, string avatar);

        Task<ActionResultResponse> DeleteDetail(string tenantId, string goodsDeliveryNoteId, string id);

        Task<SearchResult<GoodsDeliveryNotesDetailSearchViewModel>> SearchDetail(string tenantId, string languageId, string goodsDeliveryNoteId,
            string keyword, int page, int pageSize);

        Task<ActionResultResponse<ProductInfoDeliveryViewModel>> GetProductInfoInDelivery(string tenantId, string languageId,
            string productId, string warehouseId);

        //Task<ActionResultResponse<string>> UpdateQuantity(string tenantId, string userId, string id, decimal quantity, string concurrencyStamp);

        Task<ActionResultResponse<string>> UpdateRecommendedQuantity(string tenantId, string userId, string id, decimal recommendedQuantity, string concurrencyStamp);

        Task<SearchResult<GoodsDeliverReceiverSuggestion>> ReceiverSuggestion(string tenantId, string keyword, int page, int pageSize);

        Task<ActionResultResponse> ResyncExwarehousePirceByGoodsReceiptNoteDetailId(string tenantId, string warehouseId, string receiptDetailId);

        Task<ActionResultResponse> UpdatePriceByGoodsReceiptNoteDetailId(string tenantId, string warehouseId, string receiptDetailId);

        Task UpdatePriceByGoodsReceiptNoteDetailCode(string tenantId, string warehouseId, string code, decimal price);

        Task SynchronizePrice(string tenantId, string warehouseId, string receiptId, string code, string lotId, DateTime date, int page,
            int pageSize);

        //Task UpdateLotIdByGoodsReceiptNoteDetailCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode, string lotId,
        //    string newLotId);
    }
}
