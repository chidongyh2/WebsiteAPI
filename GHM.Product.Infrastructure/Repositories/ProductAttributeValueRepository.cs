using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
namespace GHM.Product.Infrastructure.Repository
{
    public class ProductAttributeValueRepository : RepositoryBase, IProductAttributeValueRepository
    {
        private readonly IRepository<ProductAttributeValue> _productAttributeValueRepository;
        public ProductAttributeValueRepository(IDbContext context) : base(context)
        {
            _productAttributeValueRepository = Context.GetRepository<ProductAttributeValue>();
        }

        public Task<List<ProductAttributeValueViewModel>> Search(string tenantId, string languageId, string keyword, string productAttributeId, bool? isActive, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<ProductAttributeValue, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.ProductAttributeId == productAttributeId;
            Expression<Func<ProductAttributeValueTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<ProductAttributeValue>().Where(spec)
                .Join(Context.Set<ProductAttributeValueTranslation>().Where(specTranslation), x => x.Id, pt => pt.ProductAttributeValueId, (x, pt) =>
                    new ProductAttributeValueViewModel
                    {
                        Id = x.Id,
                        ProductAttributeId = productAttributeId,
                        ConcurrencyStamp = x.ConcurrencyStamp,
                        IsActive = x.IsActive,
                        LanguageId = pt.LanguageId,
                        Name = pt.Name,
                        Description = pt.Description,
                        UnsignName = pt.UnsignName,
                        CreateTime = x.CreateTime
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(ProductAttributeValue productAttributeValue)
        {
            _productAttributeValueRepository.Create(productAttributeValue);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductAttributeValue productAttributeValue)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productAttributeValueId)
        {
            var info = await GetInfo(productAttributeValueId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productAttributeValueId)
        {
            var info = await GetInfo(productAttributeValueId);
            if (info == null)
                return -1;

            _productAttributeValueRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByProductAttribute(string productAttributeId)
        {
            var info = await _productAttributeValueRepository.GetsAsync(false, x => x.ProductAttributeId == productAttributeId);
            if (info == null)
                return -1;
            foreach (var productAttributeValue in info)
            {
                productAttributeValue.IsDelete = true;
            }
        
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductAttributeValue> GetInfo(string productAttributeValueId, bool isReadonly = false)
        {
            return await _productAttributeValueRepository.GetAsync(isReadonly, x => x.Id == productAttributeValueId && !x.IsDelete);
        }

        public async Task<ProductAttributeValue> GetInfo(string tenantId, string productAttributeValueId, bool isReadonly = false)
        {
            return await _productAttributeValueRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == productAttributeValueId && !x.IsDelete);
        }

        public Task<List<ProductAttributeValueSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, string productAttributeId, int selectTop,
            out int totalRows)
        {
            Expression<Func<ProductAttributeValue, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive && x.ProductAttributeId == productAttributeId;
            Expression<Func<ProductAttributeValueTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<ProductAttributeValue>().Where(spec)
                .Join(Context.Set<ProductAttributeValueTranslation>().Where(specTranslation), x => x.Id, pt => pt.ProductAttributeValueId, (x, pt) =>
                    new ProductAttributeValueSuggestionViewModel
                    {
                        Id = x.Id,
                        Name = pt.Name
                    }).AsNoTracking();
            totalRows = query.Count();
            return query
                .Take(selectTop)
                .ToListAsync();
        }

        public async Task<bool> CheckExistsByProductAttributeId(string productAttributeId)
        {
            return await _productAttributeValueRepository.ExistAsync(x => x.ProductAttributeId == productAttributeId && !x.IsDelete);
        }
    }
}
