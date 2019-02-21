using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class MailRepository : RepositoryBase, IMailRepository
    {
        private readonly IRepository<Mail> _mailRepository;

        public MailRepository(IDbContext context) : base(context)
        {
            _mailRepository = Context.GetRepository<Mail>();
        }

        public Task<List<MailViewModel>> Search(string tenantId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<MailType, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<Mail, bool>> specTranslation = tt => !tt.IsDelete && tt.TenantId == tenantId;

            var query = Context.Set<MailType>().Where(spec)
                .Join(Context.Set<Mail>().Where(specTranslation), t => t.Id, tt => tt.MailTypeId, (t, tt) =>
                    new MailViewModel
                    {
                        Id = tt.Id,
                        Port = t.Port,
                        MailName = tt.Email,
                        MailTypeName = t.Name,
                        Owner = tt.Owner,
                    });
            totalRows = query.ToList().Count;
            return query.OrderByDescending(x => x.MailName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(Mail mail)
        {
           _mailRepository.Create(mail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<Mail> mails)
        {
            _mailRepository.Creates(mails);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string tenantId, Mail mail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string id)
        {
            var mailInfo = await GetInfo(tenantId, id);
            if (mailInfo == null)
                return -1;

            mailInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string id)
        {
            var mailInfo = await GetInfo(tenantId, id);
            if (mailInfo == null)
                return -1;

            _mailRepository.Delete(mailInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<Mail> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _mailRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExistsById(string tenantId, string id, bool isReadOnly = false)
        {
            return await _mailRepository.ExistAsync(x => x.Id == id && !x.IsDelete && x.TenantId == tenantId);
        }

    }
}
