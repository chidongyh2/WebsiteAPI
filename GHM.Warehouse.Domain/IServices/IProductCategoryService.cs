using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IProductCategoryService
    {

        Task<List<ProductCategorySearchViewModel>> GetsAll(string tenantId, string languageId);

        Task<SearchResult<ProductCategorySearchViewModel>> Search(string tenantId, string languageId, string keyword,
            bool? isActive, int page, int pageSize);

        Task<SearchResult<ProductCategorySearchViewModel>> SearchTree(string tenantId, string languageId, string keyword, bool? isActive,
            int page, int pageSize);

        Task<List<TreeData>> GetFullProductCategoryTree(string tenantId, string languageId);

        Task<ActionResultResponse<int>> Insert(string tenantId, string creatorId, string creatorFullName, ProductCategoryMeta productCategoryMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, int productCategoryId, ProductCategoryMeta productCategoryMeta);

        Task<ActionResultResponse> Delete(string tenantId, int productCategoryId);

        Task<ActionResultResponse<ProductCategoryDetailViewModel>> GetDetail(string tenantId, string languageId, int id);

        Task<SearchResult<ProductCategoryForSelectViewModel>> GetProductCategoryForSelect(string tenantId, string languageId, string keyword, int page, int pageSize);

        Task<ActionResultResponse> UpdateStatus(string tenantId, int productCategoryId, bool isActive);
    }
}
