using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductRepository
    {
        Task<List<ProductSearchViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId,
            bool? isManagementByLot, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Product product);

        Task<int> Update(Product product);

        Task<int> Delete(string productId, string tenantId);

        Task<int> ForceDelete(string productId, string tenantId);

        //Task<int> UpdateExWarehousePrice(string tenantId, string productId, decimal exWarehousePrice);

        Task<Product> GetInfo(string tenantId, string productId, bool isReadonly = false);

        Task<List<ProductSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<bool> CheckExists(string productId, string tenantId);

        Task<int> GetTotal(string tenantId);

        Task<bool> CheckExistsByProductId(string tenantId, string id);

        //Task<decimal> GetExWarheousePrice(string tenantId, string productId);

        Task<string> GetProductName(string tenantId, string productId);

        Task<bool> CheckIsManageByLot(string tenantId, string productId);

        Task<ProductViewModel> GetBriefInfo(string tenantId, string productId);
    }
}
