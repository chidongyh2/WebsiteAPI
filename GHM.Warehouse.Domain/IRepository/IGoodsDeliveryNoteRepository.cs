using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsDeliveryNoteRepository
    {
        Task<int> Insert(GoodsDeliveryNote goodsDeliveryNote);

        Task<int> Update(GoodsDeliveryNote goodsDeliveryNote);

        Task<int> ForceDelete(string tenantId, string id);

        Task<int> Delete(string tenantId, string id);

        Task<GoodsDeliveryNote> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<GoodsDeliveryNote> GetInfo(string id, bool isReadOnly = false);

        Task<GoodsDeliveryNoteDetailViewModel> GetDetail(string tenantId, string id);      

        Task<bool> CheckExists(string tenantId, string id);

        Task<int> UpdateTotalAmount(string tenantId, string id, decimal totalAmount);

        Task<int> UpdateTotalItems(string tenantId, string id, int totalItems);

        Task<List<GoodsDeliveryNotesViewModel>> Search(string tenantId, string userId, string keyword, GoodsDeliveryNoteType? type, 
            string warehouseId, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows);

        Task<int> Count(string tenantId);

        Task<int> CountByDate(string tenantId, DateTime deliveryDate);

        Task<bool> CheckDeliveryNoExists(string tenantId, string id);
    }
}
