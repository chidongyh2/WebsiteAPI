using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsDeliveryNoteReceiverRepository
    {
        Task<bool> CheckExists(string id, string fullName, string phoneNumber);

        Task<int> Insert(GoodsDeliveryNoteReceiver goodsDeliveryNoteReceiver);

        Task<int> Update(GoodsDeliveryNoteReceiver goodsDeliveryNoteReceiver);

        Task<GoodsDeliveryNoteReceiver> GetInfo(string tenantId, string fullName, string phoneNumber);

        Task<GoodsDeliveryNoteReceiver> GetInfo(string tenantId, string id);

        Task<List<GoodsDeliverReceiverSuggestion>> Suggestion(string tenantId, string keyword, int page, int pageSize, out int totalRows);
    }
}
