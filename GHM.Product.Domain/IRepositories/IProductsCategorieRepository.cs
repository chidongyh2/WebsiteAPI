using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductsCategorieRepository
    {
        Task<int> Insert(ProductsCategorie productsCategorie);

        Task<int> Inserts(List<ProductsCategorie> productsCategories);

        int DeleteByProductId(string productId);

        Task<int> Delete(string productId, int categoryId);

        Task<ProductsCategorie> GetInfo(string productId, int categoryId, bool isReadOnly = false);

        Task<List<ProductsCategorieViewModel>> GetProductCategoryNameByProductId(string tenantId, string productId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, int categoryId);

        Task<List<ProductsCategorie>> GetByProductId(string productId);

        Task<bool> CheckCategoryHasProduct(int categoryId);
    }
}
