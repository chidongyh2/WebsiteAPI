using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface ISupplierRepository
    {
        Task<List<SupplierSearchViewModel>> Search(string tenantId, string languageId, string name, string address, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Supplier supplier);

        Task<int> Update(Supplier supplier);

        Task<int> Delete(string id, string tenantId);

        Task<int> ForceDelete(string id, string tenantId);

        Task<Supplier> GetInfo(string id, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, string tenantId);

        Task<bool> CheckExistsByName(string tenantId, string supllierId, string name);

        Task<List<Suggestion<string>>> Suggestions(string tenantId, string keyword, int page, int pageSize, out int totalRows);

    }
}
