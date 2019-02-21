using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;

namespace GHM.Product.Domain.IRepository
{
  public  interface IProductAttributeValueTranslationRepository
    {
        Task<int> Insert(ProductAttributeValueTranslation productAttributeValueTranslation);

        Task<int> Update(ProductAttributeValueTranslation productAttributeValueTranslation);

        Task<int> Inserts(List<ProductAttributeValueTranslation> productAttributeValueTranslations);

        Task<int> Delete(string productAttributeValueId);

        Task<int> ForceDelete(string productAttributeValueId);

        Task<int> DeleteByProductAttribute(string productAttributeId);

        Task<ProductAttributeValueTranslation> GetInfo(string productAttributeValueId, string languageId, bool isReadOnly = false);

        Task<List<ProductAttributeValueTranslation>> GetsProductAttributeValueId(string productAttributeValueId, bool isReadOnly = false);

        Task<bool> CheckExists(string productAttributeValueId, string tenantId, string productAttributeId, string languageId, string name);

    }
}
