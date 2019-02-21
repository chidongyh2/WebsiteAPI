using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class ConfigMailTempRepository : RepositoryBase, IConfigMailTempRepository
    {
        private readonly IRepository<ConfigMailTemp> _mapMailTempRepository;

        public ConfigMailTempRepository(IDbContext context) : base(context)
        {
            _mapMailTempRepository = Context.GetRepository<ConfigMailTemp>();
        }

        public Task<List<MapMailTempViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string title, string mail, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<MailTempGroup, bool>> speca = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<MailTempGroupTranslation, bool>> specb = t => t.TenantId == tenantId && t.LanguageId == languageId;
            Expression<Func<MailTempContentTranslation, bool>> specd = t => t.TenantId == tenantId && t.LanguageId == languageId;
            Expression<Func<MailTempContent, bool>> specc = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<ConfigMailTemp, bool>> spece = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<Mail, bool>> specg = t => !t.IsDelete && t.TenantId == tenantId;

            if (!string.IsNullOrEmpty(mailTempGroupId))
            {
                speca = speca.And(x => x.Id == mailTempGroupId);
            }

            if (!string.IsNullOrEmpty(title))
            {
                specd = specd.And(x => x.UnsignTitle.Contains(title));
            }

            if (!string.IsNullOrEmpty(mail))
            {
                specg = specg.And(x => x.Email.Contains(mail));
            }

            var query = from a in Context.Set<MailTempGroup>().Where(speca)
                        join b in Context.Set<MailTempGroupTranslation>().Where(specb) on a.Id equals b.MailTempGroupId
                        join c in Context.Set<MailTempContent>().Where(specc) on a.Id equals c.MailTempGroupId
                        join d in Context.Set<MailTempContentTranslation>().Where(specd) on c.Id equals d.MailTempContentId
                        join e in Context.Set<ConfigMailTemp>().Where(spece) on a.Id equals e.MailTempGroupId
                        join f in Context.Set<ConfigMailTempDetail>() on e.Id equals f.ConfigMailTempId
                        join g in Context.Set<Mail>().Where(specg) on f.MailId equals g.Id
                        join h in Context.Set<MailType>() on g.MailTypeId equals h.Id
                        select new MapMailTempViewModel()
                        {
                            MailTempGroupId = a.Id,
                            MailTempContentId=c.Id,
                            GroupName = b.Name,
                            Title = d.Title,
                            FullMailSender = string.Empty,
                            FullMailReceiver = string.Empty,
                            Description = d.Description,
                            IsActive = e.IsActive,
                        };

            totalRows = query.ToList().Count;

            return query.OrderByDescending(x => x.GroupName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(ConfigMailTemp mapMailTemp)
        {
            _mapMailTempRepository.Create(mapMailTemp);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, ConfigMailTemp mapMailTemp)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var mapMailTempInfo = await GetInfo(id);
            if (mapMailTempInfo == null)
                return -1;

            mapMailTempInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var mapMailTempInfo = await GetInfo(id);
            if (mapMailTempInfo == null)
                return -1;

            _mapMailTempRepository.Delete(mapMailTempInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<ConfigMailTemp> GetInfo(string id, bool isReadOnly = false)
        {
            return await _mapMailTempRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExistsById(string id, bool isReadOnly = false)
        {
            return await _mapMailTempRepository.ExistAsync(x => x.Id == id && !x.IsDelete);
        }

        public async Task<List<ConfigMailTemp>> GetAll(string tenantId, bool isReadOnly = false)
        {
            return await _mapMailTempRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && !x.IsDelete);
        }
    }
}
