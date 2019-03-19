using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsReceiptNoteFollowRepository
    {
        Task<int> Insert(GoodsReceiptNoteFollow goodsReceiptNoteFollow);

        Task<bool> CheckExists(string tenantId, string languageId, string name);

        Task<bool> CheckExists(string tenantId, string id);

        Task<GoodsReceiptNoteFollow> GetByName(string tenantId, string languageId, string name);

        Task<List<Suggestion<string>>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);
    }
}
