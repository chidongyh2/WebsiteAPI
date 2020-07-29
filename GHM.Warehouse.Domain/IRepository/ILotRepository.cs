using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface ILotRepository
    {
        Task<int> Insert(Lot lot);

        Task<bool> CheckExists(string tenantId, string id);

        Task<List<Lot>> Search(string tenantId, string id);

        Task<List<Suggestion<string>>> Suggestion(string tenantId, string id, int page, int pageSize, out int totalRows);
    }
}
