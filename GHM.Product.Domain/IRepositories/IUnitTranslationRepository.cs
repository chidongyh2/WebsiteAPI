using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Product.Domain.IRepository
{
    public interface IUnitTranslationRepository
    {
        Task<int> Insert(UnitTranslation unitTranslation);

        Task<int> Inserts(List<UnitTranslation> unitTranslations);

        Task<int> Update(string unitId, string languageId, string tenantId, UnitTranslation unitTranslation);

        Task<int> Delete(string unitId, string languageId, string tenantId);

        Task<int> ForceDelete(string unitId, string languageId, string tenantId);

        Task<UnitTranslation> GetInfo(string unitId, string languageId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExistsById(string unitId, string languageId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExistsByName(string tenantId, string unitId, string name);

        Task<bool> CheckExistsByAbbreviation(string tenantId, string unitId, string abbreviation);

        Task<List<UnitTranslationViewModel>> GetAll(string tenantId, string unitId, bool isReadOnly = false);

        Task<List<UnitTranslation>> GetAllUnitTranslation(string tenantId, string unitId);

    }

}
