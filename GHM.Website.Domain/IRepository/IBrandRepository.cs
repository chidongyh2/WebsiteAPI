using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IRepository
{
    public interface IBrandRepository
    {
        Task<List<BrandSearchViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Brand brand);

        Task<int> Update(string id, Brand brand);

        Task<int> Delete(string tenantId, string id);

        Task<int> ForceDelete(string tenantId, string id);

        Task<Brand> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, bool isReadOnly = false);

        Task<bool> CheckExistsByName(string tenantId, string name);

        Task<List<Brand>> GetAll(string tenantId, bool isReadOnly = false);
    }

}
