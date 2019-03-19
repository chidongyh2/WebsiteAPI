using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductTranslationRepository
    {
        Task<int> Insert(ProductTranslation productTranslation);

        Task<int> Update(ProductTranslation productTranslation);

        Task<int> Inserts(List<ProductTranslation> productTranslations);

        Task<int> Delete(string productId);

        Task<int> ForceDelete(string productId);

        Task<ProductTranslation> GetInfo(string productId, string languageId, bool isReadOnly = false);

        Task<List<ProductTranslation>> GetsProductId(string productId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, string tenantId, string languageId, string name);
    }
}
