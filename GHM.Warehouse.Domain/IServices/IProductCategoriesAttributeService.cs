using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IProductCategoriesAttributeService
    {
        Task<ActionResultResponse> Insert(string tenantId, ProductCategoriesAttributeMeta productCategoriesAttributeMeta);

        Task<ActionResultResponse> Delete(int categoryId, string attributeId);

        Task<List<ProductCategoriesAttributeViewModel>> GetDetailAttributeValues(string tenantId, string languageId, int categoryId);

        Task<List<ProductCategoriesAttributeSearchViewModel>> Search(string tenantId, string languageId, int categoryId);

    }
}
