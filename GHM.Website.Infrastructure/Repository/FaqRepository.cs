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
    public class FaqRepository : RepositoryBase, IFaqRepository
    {
        private readonly IRepository<Faq> _faqRepository;
        public FaqRepository(IDbContext context) : base(context)
        {
            _faqRepository = Context.GetRepository<Faq>();
        }

        public Task<List<FaqViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize,
          out int totalRows)
        {
            Expression<Func<Faq, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<FaqTranslation, bool>> specTranslation = xt => xt.LanguageId == languageId && !xt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                specTranslation = specTranslation.And(x => x.Question.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Faq>().Where(spec)
                .Join(Context.Set<FaqTranslation>().Where(specTranslation), x => x.Id, xt => xt.FaqId, (x, xt) =>
                    new FaqViewModel
                    {
                        Id = x.Id,
                        TenantId = x.TenantId,
                        FaqGroupId = x.FaqGroupId,
                        Photo = x.Photo,
                        Order = x.Order,
                        IsActive = x.IsActive,
                        ConcurrencyStamp = x.ConcurrencyStamp,
                        CreateTime = x.CreateTime,
                        LastUpdate = x.LastUpdate.Value,
                        LanguageId = xt.LanguageId,
                        Question = xt.Question,
                        Answer = xt.Answer
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .ThenByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(Faq faq)
        {
            _faqRepository.Create(faq);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Faq faq)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string faqId)
        {
            var info = await GetInfo(faqId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string faqId)
        {
            var info = await GetInfo(faqId);
            if (info == null)
                return -1;

            _faqRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Faq> GetInfo(string faqId, bool isReadonly = false)
        {
            return await _faqRepository.GetAsync(isReadonly, x => x.Id == faqId && !x.IsDelete);
        }

        public async Task<Faq> GetInfo(string tenantId, string faqId, bool isReadonly = false)
        {
            return await _faqRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == faqId && !x.IsDelete);
        }
    }
}
