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
    public class FaqGroupRepository : RepositoryBase, IFaqGroupRepository
    {
        private readonly IRepository<FaqGroup> _faqGroupRepository;
        public FaqGroupRepository(IDbContext context) : base(context)
        {
            _faqGroupRepository = Context.GetRepository<FaqGroup>();
        }

        public List<FaqGroupViewModel> Search(string tenantId, string languageId,
            string keyword, bool? isActive, int page, int pageSize, out int totalRows)
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

            var query = from faqGroup in Context.Set<FaqGroup>().Where(spec)
                        join faqGroupTranslation in Context.Set<FaqGroupTranslation>().Where(specTranslation) on faqGroup.Id equals faqGroupTranslation.FaqGroupId
                        join faq in Context.Set<Faq>().Where(x => x.TenantId == tenantId && !x.IsDelete) on faqGroup.Id equals faq.FaqGroupId into gFaq
                        from faq in gFaq.DefaultIfEmpty()
                        join faqTranslation in Context.Set<FaqTranslation>().Where(x => x.TenantId == tenantId && !x.IsDelete && x.LanguageId == languageId)
                        on faq.Id equals faqTranslation.FaqId into gFaqTranslation
                        from faqTranslation in gFaqTranslation.DefaultIfEmpty()

                        group new { faqGroup, faqGroupTranslation, faq, faqTranslation }
                        by new { faqGroup.Id, faqGroupTranslation.Name, faqGroup.Order, faqGroup.IsActive } into g

                        select new FaqGroupViewModel
                        {
                            Id = g.Key.Id,
                            Order = g.Key.Order,
                            Name = g.Key.Name,
                            IsActive = g.Key.IsActive,
                            ListFaq = g.Count() > 0 ? g.Select(x => new FaqViewModel
                            {
                                Id = x.faq != null ? x.faq.Id : "",
                                FaqGroupId = x.faq != null ? x.faq.FaqGroupId : "",
                                Answer = x.faqTranslation != null ? x.faqTranslation.Answer : "",
                                Question = x.faqTranslation != null ? x.faqTranslation.Question : "",
                                Order = x.faq != null ? x.faqGroup.Order : 0,
                                IsActive = x.faq != null ? x.faq.IsActive : false,
                            }).OrderBy(x => x.Order).ToList() : null
                        };

            totalRows = query.Count();

            return query.OrderBy(x => x.Order)
                .ThenBy(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();
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
