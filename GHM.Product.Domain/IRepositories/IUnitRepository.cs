using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Product.Domain.IRepository
{
    public interface IUnitRepository
    {
        Task<List<UnitSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Unit unit);

        Task<int> Update(string tenantId, string id, Unit unit);

        Task<int> Delete(string tenantId, string id);

        Task<int> ForceDelete(string tenantId, string id);

        Task<Unit> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string tenantId, string id, bool isReadOnly = false);

        Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnit(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);        

    }

}
