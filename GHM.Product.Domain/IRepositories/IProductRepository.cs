using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductRepository
    {
        Task<List<ProductSearchViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId,
            bool? isManagementByLot, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Products product);

        Task<int> Update(Products product);

        Task<int> Delete(string productId);

        Task<int> ForceDelete(string productId);

        Task<Products> GetInfo(string productId, bool isReadonly = false);

        Task<int> UpdateExWarehousePrice(string tenantId, string productId, decimal exWarehousePrice);

        Task<Products> GetInfo(string tenantId, string productId, bool isReadonly = false);

        Task<List<ProductSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<bool> CheckExists(string productId, string tenantId);      

        Task<int> GetTotal(string tenantId);        

        Task<bool> CheckExistsByProductId(string tenantId, string id);

        Task<decimal> GetExWarheousePrice(string tenantId, string productId);
    }
}
