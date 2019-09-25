using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
  public  class FaqGroupRepository : RepositoryBase, IFaqGroupRepository
    {
        private readonly IRepository<FaqGroup> _faqGroupRepository;
        public FaqGroupRepository(IDbContext context) : base(context)
        {
            _faqGroupRepository = Context.GetRepository<FaqGroup>();
        }

        public Task<List<FaqGroupViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<FaqGroup, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<FaqGroupTranslation, bool>> specTranslation = xt => xt.LanguageId == languageId && !xt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<FaqGroup>().Where(spec)
                .Join(Context.Set<FaqGroupTranslation>().Where(specTranslation), x => x.Id, xt => xt.FaqGroupId, (x, xt) =>
                    new FaqGroupViewModel
                    {
                        Id = x.Id,
                        TenantId = x.TenantId,
                        IsActive = x.IsActive,
                        Order=x.Order,
                        ConcurrencyStamp = x.ConcurrencyStamp,
                        CreateTime = x.CreateTime,
                        LastUpdate = x.LastUpdate.Value,
                        LanguageId = xt.LanguageId,
                        Name = xt.Name,
                        Description = xt.Description,
                        UnsignName = xt.UnsignName
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .ThenByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(FaqGroup faqGroup)
        {
            _faqGroupRepository.Create(faqGroup);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(FaqGroup faqGroup)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string faqGroupId)
        {
            var info = await GetInfo(faqGroupId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string faqGroupId)
        {
            var info = await GetInfo(faqGroupId);
            if (info == null)
                return -1;

            _faqGroupRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<FaqGroup> GetInfo(string faqGroupId, bool isReadonly = false)
        {
            return await _faqGroupRepository.GetAsync(isReadonly, x => x.Id == faqGroupId && !x.IsDelete);
        }

        public async Task<FaqGroup> GetInfo(string tenantId, string faqGroupId, bool isReadonly = false)
        {
            return await _faqGroupRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == faqGroupId && !x.IsDelete);
        }
    }
}
