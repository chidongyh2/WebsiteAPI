using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductCategoriesAttributeRepository
    {
        Task<int> Insert(ProductCategoriesAttribute productCategoriesAttribute);

        Task<int> Inserts(List<ProductCategoriesAttribute> productCategoriesAttributes);

        Task<int> ForceDelete(int categoryId, string attributeId);

        Task<ProductCategoriesAttribute> GetInfo(int categoryId, string attributeId, bool isReadOnly = false);

        Task<bool> CheckExistsById(int categoryId, string attributeId, bool isReadOnly = false);

        Task<List<ProductCategoriesAttributeViewModel>> GetDetailAttributeValues(string tenantId, string languageId, int categoryId);

        Task<List<ProductCategoriesAttributeSearchViewModel>> Search(string tenantId, string languageId, int categoryId);

        Task<int> DeleteByCategoryId(string tenantId, int categoryId);

        Task<List<ProductCategoriesAttributeViewModel>> GetProductAttributeParentByListCategoryId(string tenantId, string languageId, List<int> categoryIds);

    }
}
