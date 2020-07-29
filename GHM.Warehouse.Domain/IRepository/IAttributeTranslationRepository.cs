using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IAttributeTranslationRepository
    {
        Task<int> Insert(AttributeTranslation attributeTranslation);

        Task<int> Update(AttributeTranslation attributeTranslation);

        Task<int> Inserts(List<AttributeTranslation> attributeTranslations);

        Task<int> Delete(string attributeId);

        Task<int> ForceDelete(string attributeId);

        Task<AttributeTranslation> GetInfo(string attributeId, string languageId, bool isReadOnly = false);

        Task<List<AttributeTranslation>> GetsAttributeId(string productAttributeId, bool isReadOnly = false);

        Task<bool> CheckExists(string productAttributeId, string tenantId, string languageId, string name);
    }
}
