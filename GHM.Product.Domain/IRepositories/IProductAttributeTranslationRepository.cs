using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductAttributeTranslationRepository
    {
        Task<int> Insert(ProductAttributeTranslation productAttributeTranslation);

        Task<int> Update(ProductAttributeTranslation productAttributeTranslation);

        Task<int> Inserts(List<ProductAttributeTranslation> productAttributeTranslations);

        Task<int> Delete(string productAttributeId);

        Task<int> ForceDelete(string productAttributeId);

        Task<ProductAttributeTranslation> GetInfo(string productAttributeId, string languageId, bool isReadOnly = false);

        Task<List<ProductAttributeTranslation>> GetsProductAttributeId(string productAttributeId, bool isReadOnly = false);

        Task<bool> CheckExists(string productAttributeId, string tenantId, string languageId, string name);
    }
}
