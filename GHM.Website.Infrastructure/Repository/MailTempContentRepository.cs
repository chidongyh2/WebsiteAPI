using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class MailTempContentRepository : RepositoryBase, IMailTempContentRepository
    {
        private readonly IRepository<MailTempContent> _mailTempContentRepository;
        private readonly IRepository<MailTempContentTranslation> _mailTempContentTranslationRepository;
        private readonly IRepository<MailTempGroupTranslation> _mailTempGroupTranslationsnRepository;
        private readonly IRepository<MailTempGroup> _mailTempGroupsRepository;

        public MailTempContentRepository(IDbContext context) : base(context)
        {
            _mailTempContentRepository = Context.GetRepository<MailTempContent>();
            _mailTempContentTranslationRepository = Context.GetRepository<MailTempContentTranslation>();
            _mailTempGroupTranslationsnRepository = Context.GetRepository<MailTempGroupTranslation>();
            _mailTempGroupsRepository = Context.GetRepository<MailTempGroup>();
        }

        public Task<List<MailTempContentSearchViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string keyword, bool? isActive, int page,
            int pageSize, out int totalRows)
        {

            Expression<Func<MailTempContent, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<MailTempContentTranslation, bool>> specTranslation = tt => tt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignTitle.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var result = (
                from mailTempContent in Context.Set<MailTempContent>().Where(spec)
                join mailTempContentTranslation in Context.Set<MailTempContentTranslation>().Where(specTranslation) on mailTempContent.Id
                    equals mailTempContentTranslation.MailTempContentId
                join mailTempGroup in Context.Set<MailTempGroup>() on mailTempContent.MailTempGroupId equals
                    mailTempGroup.Id
                join mailTempGroupTranslation in Context.Set<MailTempGroupTranslation>() on mailTempGroup.Id equals
                    mailTempGroupTranslation.MailTempGroupId
                where mailTempContent.TenantId == tenantId && mailTempContentTranslation.LanguageId == languageId &&
                      mailTempGroupTranslation.LanguageId == languageId
                select new MailTempContentSearchViewModel()
                {
                    Id = mailTempContent.Id,
                    Name = mailTempGroupTranslation.Name,
                    Title = mailTempContentTranslation.Title,
                    Description = mailTempContentTranslation.Description,
                    IsActive = mailTempContent.IsActive, 
                });

            totalRows = _mailTempContentRepository.Count(spec);
            return result.OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(MailTempContent mailTempContent)
        {
            _mailTempContentRepository.Create(mailTempContent);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, MailTempContent mailTempContent)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var mailTempContentInfo = await GetInfo(id);
            if (mailTempContentInfo == null)
                return -1;

            mailTempContentInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var mailTempContentInfo = await GetInfo(id);
            if (mailTempContentInfo == null)
                return -1;

            _mailTempContentRepository.Delete(mailTempContentInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<MailTempContent> GetInfo(string id, bool isReadOnly = false)
        {
            return await _mailTempContentRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExistsById(string id, bool isReadOnly = false)
        {
            return await _mailTempContentRepository.ExistAsync(x => x.Id == id && !x.IsDelete);
        }

        public async Task<List<MailTempContent>> GetAll(string tenantId, bool isReadOnly = false)
        {
            return await _mailTempContentRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<MailTempContent> MailTempContentActive(string tenantId, string mailTempGroupId, bool isReadOnly = false)
        {
            return await _mailTempContentRepository.GetAsync(false,x => x.TenantId == tenantId && x.MailTempGroupId == mailTempGroupId && !x.IsDelete);
        }

    }
}
