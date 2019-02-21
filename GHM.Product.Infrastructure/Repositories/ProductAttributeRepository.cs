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
    public class ProductAttributeRepository : RepositoryBase, IProductAttributeRepository
    {
        private readonly IRepository<ProductAttribute> _productAttributeRepository;
        public ProductAttributeRepository(IDbContext context) : base(context)
        {
            _productAttributeRepository = Context.GetRepository<ProductAttribute>();
        }

        public Task<List<ProductAttributeViewModel>> Search(string tenantId, string languageId, string keyword, bool? isSelfContent,
            bool? isRequire, bool? isMultiple, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<ProductAttribute, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<ProductAttributeTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isSelfContent.HasValue)
            {
                spec = spec.And(x => x.IsSelfContent == isSelfContent.Value);
            }
            if (isRequire.HasValue)
            {
                spec = spec.And(x => x.IsRequire == isRequire.Value);
            }
            if (isMultiple.HasValue)
            {
                spec = spec.And(x => x.IsMultiple == isMultiple.Value);
            }
            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<ProductAttribute>().Where(spec)
                .Join(Context.Set<ProductAttributeTranslation>().Where(specTranslation), x => x.Id, pt => pt.ProductAttributeId, (x, pt) =>
                    new ProductAttributeViewModel
                    {
                        Id = x.Id,
                        ConcurrencyStamp = x.ConcurrencyStamp,
                        IsActive = x.IsActive,
                        IsRequire = x.IsRequire,
                        IsMultiple = x.IsMultiple,
                        IsSelfContent = x.IsSelfContent,
                        LanguageId = pt.LanguageId,
                        Name = pt.Name,
                        Description = pt.Description,
                        UnsignName = pt.UnsignName,
                        CreateTime = x.CreateTime
                      
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x=>x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(ProductAttribute productAttribute)
        {
            _productAttributeRepository.Create(productAttribute);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductAttribute productAttribute)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productAttributeId)
        {
            var info = await GetInfo(productAttributeId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productAttributeId)
        {
            var info = await GetInfo(productAttributeId);
            if (info == null)
                return -1;

            _productAttributeRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductAttribute> GetInfo(string productAttributeId, bool isReadonly = false)
        {
            return await _productAttributeRepository.GetAsync(isReadonly, x => x.Id == productAttributeId && !x.IsDelete);
        }

        public async Task<ProductAttribute> GetInfo(string tenantId, string productAttributeId, bool isReadonly = false)
        {
            return await _productAttributeRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == productAttributeId && !x.IsDelete);
        }

        public  Task<List<ProductAttributeSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int selectTop, out int totalRows)
        {
            Expression<Func<ProductAttribute, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<ProductAttributeTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

           var query = Context.Set<ProductAttribute>().Where(spec)
                .Join(Context.Set<ProductAttributeTranslation>().Where(specTranslation), x => x.Id, pt => pt.ProductAttributeId, (x, pt) =>
                    new ProductAttributeSuggestionViewModel
                    {
                        Id = x.Id,
                        Name = pt.Name,
                        IsSelfContent = x.IsSelfContent,
                        IsMultiple = x.IsMultiple,
                    }).AsNoTracking();
            totalRows = query.Count();
            return  query
                .Take(selectTop)
                .ToListAsync();
        }

        public async Task<bool> CheckExists(string productAttributeId, string tenantId)
        {
            return await _productAttributeRepository.ExistAsync(x =>
                x.Id == productAttributeId && x.TenantId == tenantId  && !x.IsDelete);
        }
    }
}
