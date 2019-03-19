using System;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IGoodsReceiptNoteDetailService
    {
        Task<ActionResultResponse<dynamic>> Insert(string tenantId, string userId, string receiptId,
            GoodsReceiptNoteDetailMeta goodsReceiptNoteDetailMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string receiptId, string id, GoodsReceiptNoteDetailMeta goodsReceiptNoteDetailMeta);

        Task<ActionResultResponse> Delete(string tenantId, string receiptId, string id);

        Task<ActionResultResponse<ProductInfoViewModel>> GetProductInfoByCode(string tenantId, string userId, string code, string warehouseId,
            GoodsDeliveryNoteType type, DateTime deliveryDate);

        Task<ActionResultResponse> ChangeWarehouse(string tenantId, string goodsReceiptNoteId, string warehouseId, string userId,
            string fullName);
    }
}
