using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
  public  interface IAttributeValueTranslationRepository
    {
        Task<int> Insert(AttributeValueTranslation attributeValueTranslation);

        Task<int> Update(AttributeValueTranslation attributeValueTranslation);

        Task<int> Inserts(List<AttributeValueTranslation> productAttributeValueTranslations);

        Task<int> Delete(string productAttributeValueId);

        Task<int> ForceDelete(string productAttributeValueId);

        Task<int> DeleteByProductAttribute(string productAttributeId);

        Task<AttributeValueTranslation> GetInfo(string productAttributeValueId, string languageId, bool isReadOnly = false);

        Task<List<AttributeValueTranslation>> GetsProductAttributeValueId(string productAttributeValueId, bool isReadOnly = false);

        Task<bool> CheckExists(string productAttributeValueId, string tenantId, string productAttributeId, string languageId, string name);

    }
}
