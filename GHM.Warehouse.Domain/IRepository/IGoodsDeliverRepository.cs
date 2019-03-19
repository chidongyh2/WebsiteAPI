using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsDeliverRepository
    {
        Task<bool> CheckExists(string id, string fullName, string phoneNumber);

        Task<int> Insert(GoodsDeliver goodsDeliver);

        Task<int> Update(GoodsDeliver goodsDeliver);

        Task<GoodsDeliver> GetInfoBySupplier(string tenantId, string supplierId, string id, bool isReadOnly = false);

        Task<GoodsDeliver> GetInfo(string tenantId, string fullName, string phoneNumber);

        Task<GoodsDeliver> GetInfo(string tenantId, string supplierId, string fullName, string phoneNumber);

        Task<List<GoodsDeliverReceiverSuggestion>> Suggestion(string tenantId, string suplierId, string keyword, int page, int pageSize, out int totalRows);
    }
}
