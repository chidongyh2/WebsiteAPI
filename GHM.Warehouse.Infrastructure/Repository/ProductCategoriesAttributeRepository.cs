using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using Attribute = GHM.Warehouse.Domain.Models.Attribute;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductCategoriesAttributeRepository : RepositoryBase, IProductCategoriesAttributeRepository
    {
        private readonly IRepository<ProductCategoriesAttribute> _productCategoriesAttributeRepository;
        private readonly IRepository<ProductCategory> _productCategoryRepository;

        public ProductCategoriesAttributeRepository(IDbContext context) : base(context)
        {
            _productCategoriesAttributeRepository = Context.GetRepository<ProductCategoriesAttribute>();
            _productCategoryRepository = Context.GetRepository<ProductCategory>();
        }

        public async Task<bool> CheckExistsById(int categoryId, string attributeId, bool isReadOnly = false)
        {
            return await _productCategoriesAttributeRepository.ExistAsync(x => x.CategoryId == categoryId && x.AttributeId == attributeId);
        }

        public async Task<int> ForceDelete(int categoryId, string attributeId)
        {
            var productCategoriesAttributeInfo = await GetInfo(categoryId, attributeId);
            if (productCategoriesAttributeInfo == null)
                return -1;

            _productCategoriesAttributeRepository.Delete(productCategoriesAttributeInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ProductCategoriesAttributeSearchViewModel>> Search(string tenantId, string languageId, int categoryId)
        {
            List<ProductCategoriesAttributeSearchViewModel> result = new List<ProductCategoriesAttributeSearchViewModel>();
            Expression<Func<ProductCategoriesAttribute, bool>> speca = t => t.CategoryId == categoryId;
            Expression<Func<Attribute, bool>> specb = x => x.IsActive && !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<AttributeTranslation, bool>> specc = y => y.TenantId == tenantId && !y.IsDelete;

            var query =
                        await (
                            from pa in Context.Set<ProductCategoriesAttribute>().Where(speca)
                            join pb in Context.Set<Attribute>().Where(specb) on pa.AttributeId equals pb.Id
                            join pc in Context.Set<AttributeTranslation>().Where(specc) on pb.Id equals pc.AttributeId
                            select new ProductCategoriesAttributeSearchViewModel()
                            {
                                Id = pb.Id,
                                Name = pc.Name,
                                Description = pc.Description,
                            }
                        ).ToListAsync();

            return result;
        }

        public async Task<List<ProductCategoriesAttributeViewModel>> GetDetailAttributeValues(string tenantId, string languageId, int categoryId)
        {
            Expression<Func<ProductCategoriesAttribute, bool>> spec = x => x.CategoryId == categoryId;
            Expression<Func<Attribute, bool>> specAttribute = x => x.IsActive && !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<AttributeTranslation, bool>> specAttributeTranslation = x => x.TenantId == tenantId && !x.IsDelete && x.LanguageId == languageId;

            var result = Context.Set<ProductCategoriesAttribute>().Where(spec)
                       .Join(Context.Set<Attribute>().Where(specAttribute), categoryAttribute => categoryAttribute.AttributeId, productAttribute => productAttribute.Id,
                       (categoryAttribute, productAttribute) => new
                       {
                           categoryAttribute.AttributeId,
                           categoryAttribute.CategoryId
                       }).Join(Context.Set<AttributeTranslation>().Where(specAttributeTranslation), pa => pa.AttributeId, pat => pat.AttributeId,
                       (pa, pat) => new ProductCategoriesAttributeViewModel
                       {
                           CategoryId = pa.CategoryId,
                           AttributeId = pa.AttributeId,
                           AttributeName = pat.Name
                       }).ToList();

            return result;
        }

        public async Task<List<ProductCategoriesAttributeViewModel>> GetProductAttributeParentByListCategoryId(string tenantId, string languageId, List<int> categoryIds)
        {
            var listCategoryByPatentId = Context.Set<ProductCategory>().Where(x => categoryIds.Contains(x.Id))
                                         .Join(Context.Set<ProductCategory>(), productCategoryChild => productCategoryChild.Id,
                                         produtCategoryParent => produtCategoryParent.Id, (productCategoryChild, produtCategoryParent)
                                         => new { productCategoryChild, produtCategoryParent })
                                         .Where(x => x.productCategoryChild.IdPath.IndexOf(x.produtCategoryParent.IdPath + ".") > -1 ||
                                          x.productCategoryChild.IdPath == x.produtCategoryParent.IdPath)
                                          .Select(x => x.produtCategoryParent.Id).Distinct();

            if (listCategoryByPatentId != null && listCategoryByPatentId.Any())
            {
                Expression<Func<ProductCategoriesAttribute, bool>> spec = x => listCategoryByPatentId.Contains(x.CategoryId);
                Expression<Func<Attribute, bool>> specAttribute = x => x.IsActive && !x.IsDelete && x.TenantId == tenantId;
                Expression<Func<AttributeTranslation, bool>> specAttributeTranslation = x => x.TenantId == tenantId && !x.IsDelete && x.LanguageId == languageId;

                var result = Context.Set<ProductCategoriesAttribute>().Where(spec)
                           .Join(Context.Set<Attribute>().Where(specAttribute), categoryAttribute => categoryAttribute.AttributeId,
                           productAttribute => productAttribute.Id, (categoryAttribute, productAttribute) => new
                           {
                               categoryAttribute.AttributeId,
                               categoryAttribute.CategoryId,
                               productAttribute.IsSelfContent,
                               productAttribute.IsMultiple,
                           }).Join(Context.Set<AttributeTranslation>().Where(specAttributeTranslation), pa => pa.AttributeId, pat => pat.AttributeId,
                           (pa, pat) => new ProductCategoriesAttributeViewModel
                           {
                               CategoryId = pa.CategoryId,
                               AttributeId = pa.AttributeId,
                               AttributeName = pat.Name,
                               IsSelfContent = pa.IsSelfContent,
                               IsMultiple = pa.IsMultiple,
                           }).Distinct().ToList();

                return result;
            }
            else
            {
                return null;
            }
        }

        public async Task<ProductCategoriesAttribute> GetInfo(int categoryId, string attributeId, bool isReadOnly = false)
        {
            return await _productCategoriesAttributeRepository.GetAsync(isReadOnly, x => x.CategoryId == categoryId && x.AttributeId == attributeId);
        }

        public async Task<int> Insert(ProductCategoriesAttribute productCategoriesAttribute)
        {
            _productCategoriesAttributeRepository.Create(productCategoriesAttribute);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductCategoriesAttribute> productCategoriesAttributes)
        {
            _productCategoriesAttributeRepository.Creates(productCategoriesAttributes);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByCategoryId(string tenantId, int categoryId)
        {
            var listProductCategoryAttributes = await _productCategoriesAttributeRepository.GetsAsync(false, x => x.CategoryId == categoryId);
            if (listProductCategoryAttributes != null && listProductCategoryAttributes.Any())
            {
                _productCategoriesAttributeRepository.Deletes(listProductCategoryAttributes);
                return await Context.SaveChangesAsync();
            }

            return 0;
        }
    }
}
