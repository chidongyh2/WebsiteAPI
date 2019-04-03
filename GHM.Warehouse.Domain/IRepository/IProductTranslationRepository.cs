using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductTranslationRepository
    {
        Task<int> Insert(ProductTranslation productTranslation);

        Task<int> Update(ProductTranslation productTranslation);

        Task<int> Inserts(List<ProductTranslation> productTranslations);

        Task<int> Delete(string productId, string tenantId);

        Task<int> ForceDelete(string productId, string tenantId);

        Task<ProductTranslation> GetInfo(string productId, string languageId, string tenantId, bool isReadOnly = false);

        Task<List<ProductTranslation>> GetsProductId(string productId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, string tenantId, string languageId, string name);

        Task<List<ProductTranslationViewModel>> GetAllById(string tenantId, string id);
    }
}
