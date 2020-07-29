using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductCategoryTranslationRepository
    {
        Task<string> GetProductCategoryName(int productCategoryId, string languageId);

        Task<int> Insert(ProductCategoryTranslation productCategoryTranslation);

        Task<int> Update(ProductCategoryTranslation productCategoryTranslation);

        Task<int> Inserts(List<ProductCategoryTranslation> productCategoryTranslations);

        Task<int> ForceDeleteByProductCategoryId(int productCategoryId);

        Task<bool> CheckExistsByName(int productCategoryId, string tenantId, string languageId, string name);

        Task<ProductCategoryTranslation> GetInfo(int productCategoryId, string languageId, bool isReadonly = false);

        Task<List<ProductCategoryTranslation>> GetAllByProductCategoryId(int productCategoryId, bool isReadonly = false);

        Task<List<ProductCategoryTranslationViewModel>> GetsByProductCategoryId(int productCategoryId);
    }
}
