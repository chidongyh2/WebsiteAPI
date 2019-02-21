using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductCategoryRepository
    {
        Task<bool> CheckExists(int id);

        Task<bool> CheckExists(string tenantId, int id);

        Task<int> Insert(ProductCategory productCategory);

        Task<int> Update(ProductCategory productCategory);

        Task<int> UpdateProductCategoryIdPath(int id, string idPath);

        Task<int> UpdateChildCount(int id, int childCount);

        Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath);

        Task<int> Delete(int productCategoryId);

        Task<int> ForceDelete(int productCategoryId);

        Task<ProductCategory> GetInfo(int productCategoryId, bool isReadOnly = false);

        Task<List<ProductCategory>> GetAllChild(int productCategoryParentId, bool isReadOnly = false);

        Task<ProductCategory> GetInfo(string productCategoryIdPath, bool isReadOnly = false);

        Task<int> GetChildCount(int id);

        Task<List<ProductCategorySearchViewModel>> GetAllActivatedProductCategory(string tenantId, string languageId);

        Task<List<ProductCategorySearchViewModel>> GetActivedProductCategory(string tenantId, string languageId);

        Task<List<ProductCategoryForSelectViewModel>> GetAllProductCategoryForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<List<ProductCategorySearchViewModel>> SearchProductCategory(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<List<ProductCategorySearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> UpdateStatusInListCategory(string tenantId, string idPath, bool isActive);
       
    }
}
