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
    public class MailTempGroupRepository : RepositoryBase, IMailTempGroupRepository
    {
        private readonly IRepository<MailTempGroup> _mailGroupRepository;

        public MailTempGroupRepository(IDbContext context) : base(context)
        {
            _mailGroupRepository = Context.GetRepository<MailTempGroup>();
        }

        public async Task<bool> CheckExistsById(string id, bool isReadOnly = false)
        {
            return await _mailGroupRepository.ExistAsync(x => x.Id == id && !x.IsDelete);
        }

        public async Task<int> Delete(string id)
        {
            var mailgroupInfo = await GetInfo(id);
            if (mailgroupInfo == null)
                return -1;

            mailgroupInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var mailgroupInfo = await GetInfo(id);
            if (mailgroupInfo == null)
                return -1;

            _mailGroupRepository.Delete(mailgroupInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<MailTempGroup> GetInfo(string id, bool isReadOnly = false)
        {
            return await _mailGroupRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<int> Insert(MailTempGroup mailgroup)
        {
            _mailGroupRepository.Create(mailgroup);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<MailTempGroup> mailGroups)
        {
            _mailGroupRepository.Creates(mailGroups);
            return await Context.SaveChangesAsync();
        }

        public Task<List<MailTempGroupViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<MailTempGroup, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<MailTempGroupTranslation, bool>> specTranslation = tt => tt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }
              
            var query = Context.Set<MailTempGroup>().Where(spec)
                .Join(Context.Set<MailTempGroupTranslation>().Where(specTranslation), t => t.Id, tt => tt.MailTempGroupId, (t, tt) =>
                    new MailTempGroupViewModel
                    {
                        Id = t.Id,
                        Name = tt.Name,
                        Description = tt.Description,
                    });

            totalRows = query.Count();

            return query.OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Update(string id, MailTempGroup mailGroup)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
