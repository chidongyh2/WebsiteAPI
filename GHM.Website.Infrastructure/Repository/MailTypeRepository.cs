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
    public class MailTypeRepository : RepositoryBase, IMailTypeRepository
    {
        private readonly IRepository<MailType> _mailTypeRepository;

        public MailTypeRepository(IDbContext context) : base(context)
        {
            _mailTypeRepository = Context.GetRepository<MailType>();
        }

        public async Task<int> Insert(MailType mailType)
        {
            _mailTypeRepository.Create(mailType);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<MailType> mailTypes)
        {
            _mailTypeRepository.Creates(mailTypes);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(MailType maiTtype)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string Id)
        {
            var mailTypeInfo = await GetInfo(Id);
            if (mailTypeInfo == null)
                return -1;

            mailTypeInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string Id)
        {
            var mailTypeInfo = await GetInfo(Id);
            if (mailTypeInfo == null)
                return -1;

            _mailTypeRepository.Delete(mailTypeInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<MailType> GetInfo(string Id, bool isReadOnly = false)
        {
            return await _mailTypeRepository.GetAsync(isReadOnly, x => x.Id == Id && !x.IsDelete);
        }

        public async Task<bool> CheckExistsById(string Id, bool isReadOnly = false)
        {
            return await _mailTypeRepository.ExistAsync(x => x.Id == Id && !x.IsDelete);
        }

        public async Task<List<MailType>> GetAll(string tenantId, bool isReadOnly = false)
        {
            return await _mailTypeRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && !x.IsDelete);
        }

        public Task<List<MailTypeViewModel>> SearchAll(string tenantId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<MailType, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;

            var query = Context.Set<MailType>().Where(spec)
                .Select(x => new MailTypeViewModel()
                {
                   Id = x.Id,
                   Name  = x.Name ,
                   Host = x.Host ,
                   Port = x.Port ,
                   Ssl = x.Ssl, 
                });

            totalRows = _mailTypeRepository.Count(spec);
         
            return query.OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
