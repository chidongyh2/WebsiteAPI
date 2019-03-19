using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductsCategorieRepository
    {
        Task<int> Insert(ProductsCategory productsCategory);

        Task<int> Inserts(List<ProductsCategory> productsCategories);

        Task<int> DeleteByProductId(string productId);

        Task<int> Delete(string productId, int categoryId);

        Task<ProductsCategory> GetInfo(string productId, int categoryId, bool isReadOnly = false);

        Task<List<ProductsCategorieViewModel>> GetProductCategoryNameByProductId(string tenantId, string productId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, int categoryId);

        Task<List<ProductsCategory>> GetByProductId(string productId);

        Task<bool> CheckCategoryHasProduct(int categoryId);
    }
}
