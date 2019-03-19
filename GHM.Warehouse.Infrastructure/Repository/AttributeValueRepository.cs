using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class AttributeValueRepository : RepositoryBase, IAttributeValueRepository
    {
        private readonly IRepository<AttributeValue> _productAttributeValueRepository;
        public AttributeValueRepository(IDbContext context) : base(context)
        {
            _productAttributeValueRepository = Context.GetRepository<AttributeValue>();
        }

        public Task<List<AttributeValueViewModel>> Search(string tenantId, string languageId, string keyword, string productAttributeId, bool? isActive, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<AttributeValue, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.AttributeId == productAttributeId;
            Expression<Func<AttributeValueTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<AttributeValue>().Where(spec)
                .Join(Context.Set<AttributeValueTranslation>().Where(specTranslation), x => x.Id, pt => pt.AttributeValueId, (x, pt) =>
                    new AttributeValueViewModel
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

        public async Task<int> Insert(AttributeValue attributeValue)
        {
            _productAttributeValueRepository.Create(attributeValue);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AttributeValue attributeValue)
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
            var info = await _productAttributeValueRepository.GetsAsync(false, x => x.AttributeId == productAttributeId);
            if (info == null)
                return -1;
            foreach (var productAttributeValue in info)
            {
                productAttributeValue.IsDelete = true;
            }

            return await Context.SaveChangesAsync();
        }

        public async Task<AttributeValue> GetInfo(string productAttributeValueId, bool isReadonly = false)
        {
            return await _productAttributeValueRepository.GetAsync(isReadonly, x => x.Id == productAttributeValueId && !x.IsDelete);
        }

        public async Task<AttributeValue> GetInfo(string tenantId, string productAttributeValueId, bool isReadonly = false)
        {
            return await _productAttributeValueRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == productAttributeValueId && !x.IsDelete);
        }

        public Task<List<ProductAttributeValueSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, string productAttributeId, int selectTop,
            out int totalRows)
        {
            Expression<Func<AttributeValue, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive && x.AttributeId == productAttributeId;
            Expression<Func<AttributeValueTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<AttributeValue>().Where(spec)
                .Join(Context.Set<AttributeValueTranslation>().Where(specTranslation), x => x.Id, pt => pt.AttributeValueId, (x, pt) =>
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
            return await _productAttributeValueRepository.ExistAsync(x => x.AttributeId == productAttributeId && !x.IsDelete);
        }

        public async Task<bool> CheckIsValid(string attributeId, string[] attributeValueIds)
        {
            foreach (var attributeValueId in attributeValueIds)
            {
                var isExists = await _productAttributeValueRepository.ExistAsync(x =>
                    x.AttributeId == attributeId && x.Id == attributeValueId);
                if (!isExists)
                    return false;
            }

            return true;
        }

        public async Task<bool> CheckExists(string tenantId, string productAttributeId, string id, bool? isActive)
        {
            Expression<Func<AttributeValue, bool>> spec = x =>
                x.TenantId == tenantId && x.AttributeId == productAttributeId
                                       && x.Id == id && !x.IsDelete;
            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }
            return await _productAttributeValueRepository.ExistAsync(spec);
        }
    }
}
