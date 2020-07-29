using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Attribute = GHM.Warehouse.Domain.Models.Attribute;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class AttributeRepository : RepositoryBase, IAttributeRepository
    {
        private readonly IRepository<Attribute> _attributeRepository;
        public AttributeRepository(IDbContext context) : base(context)
        {
            _attributeRepository = Context.GetRepository<Attribute>();
        }

        public Task<List<AttributeViewModel>> Search(string tenantId, string languageId, string keyword, bool? isSelfContent,
            bool? isRequire, bool? isMultiple, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Attribute, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<AttributeTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

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

            var query = Context.Set<Attribute>().Where(spec)
                .Join(Context.Set<AttributeTranslation>().Where(specTranslation), x => x.Id, pt => pt.AttributeId, (x, pt) =>
                    new AttributeViewModel
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

        public async Task<int> Insert(Attribute Attribute)
        {
            _attributeRepository.Create(Attribute);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Attribute Attribute)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string AttributeId)
        {
            var info = await GetInfo(AttributeId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string AttributeId)
        {
            var info = await GetInfo(AttributeId);
            if (info == null)
                return -1;

            _attributeRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Attribute> GetInfo(string AttributeId, bool isReadonly = false)
        {
            return await _attributeRepository.GetAsync(isReadonly, x => x.Id == AttributeId && !x.IsDelete);
        }

        public async Task<Attribute> GetInfo(string tenantId, string AttributeId, bool isReadonly = false)
        {
            return await _attributeRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == AttributeId && !x.IsDelete);
        }

        public  Task<List<AttributeSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int selectTop, out int totalRows)
        {
            Expression<Func<Attribute, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<AttributeTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

           var query = Context.Set<Attribute>().Where(spec)
                .Join(Context.Set<AttributeTranslation>().Where(specTranslation), x => x.Id, pt => pt.AttributeId, (x, pt) =>
                    new AttributeSuggestionViewModel
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

        public async Task<bool> CheckExists(string AttributeId, string tenantId)
        {
            return await _attributeRepository.ExistAsync(x =>
                x.Id == AttributeId && x.TenantId == tenantId  && !x.IsDelete);
        }
    }
}
