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
    public class BranchContactRepository : RepositoryBase, IBranchContactRepository
    {
        private readonly IRepository<BranchContact> _branchContactRepository;
        private readonly IRepository<BranchContactTranslation> _branchContactTranslationRepository;
        private readonly IRepository<BranchContactDetail> _branchContactDetail;

        public BranchContactRepository(IDbContext context) : base(context)
        {
            _branchContactRepository = Context.GetRepository<BranchContact>();
            _branchContactTranslationRepository = Context.GetRepository<BranchContactTranslation>();
            _branchContactDetail = Context.GetRepository<BranchContactDetail>();
        }

        public async Task<bool> CheckExistsById(string id, bool isReadOnly = false)
        {
            return await _branchContactRepository.ExistAsync(x => x.Id == id && !x.IsDelete);
        }

        public async Task<int> Delete(string id)
        {
            var branchcontactInfo = await GetInfo(id);
            if (branchcontactInfo == null)
                return -1;

            branchcontactInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var branchContactInfo = await GetInfo(id);
            if (branchContactInfo == null)
                return -1;

            _branchContactRepository.Delete(branchContactInfo);
            return await Context.SaveChangesAsync();
        }

        public Task<List<BranchContactSearchViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<BranchContact, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<BranchContactTranslation, bool>> specTranslation = tt => tt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<BranchContact>().Where(spec)
                .Join(Context.Set<BranchContactTranslation>().Where(specTranslation), t => t.Id, tt => tt.BranchContactId, (t, tt) =>
                    new BranchContactSearchViewModel
                    {
                        Id = t.Id,
                        WorkTime = t.WorkTime,
                        Link = t.Link,
                        Name = tt.Name,
                        Address = tt.Address,
                        Order = t.Order,
                        Website = t.Website,
                        IsOffice = t.IsOffice,
                        Logo = t.Logo,
                    });

            totalRows = query.Count();
            return query.OrderByDescending(x => x.Order)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<BranchContactSearchForClientViewModel>> SearchForClient(string tenantId, string languageId)
        {
            Expression<Func<BranchContact, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<BranchContactTranslation, bool>> specTranslation = tt => tt.TenantId == tenantId && tt.LanguageId == languageId;

            var query = from branch in Context.Set<BranchContact>().Where(spec)
                        join branchTranslation in Context.Set<BranchContactTranslation>().Where(specTranslation) on branch.Id equals branchTranslation.BranchContactId
                        join branchContactDetail in Context.Set<BranchContactDetail>().Where(x => !x.IsDelete) on branch.Id equals branchContactDetail.BranchContactId into branchContactDetails
                        from detail in branchContactDetails.DefaultIfEmpty()
                        select (new
                        {
                            branch.IsOffice,
                            branch.Link,
                            branch.Logo,
                            branch.Website,
                            branch.WorkTime,
                            branchTranslation.Name,
                            branchTranslation.Address,
                            branch.Id,
                            ContactValue = detail != null ? detail.ContactValue : "",
                            ContactType = detail != null ? detail.ContactType : Domain.Constants.ContactType.Undefined
                        });

            var result = query.GroupBy(x => new
            {
                x.Id,
                x.IsOffice,
                x.Link,
                x.Logo,
                x.Website,
                x.WorkTime,
                x.Name,
                x.Address,
            }, (key, g) => new BranchContactSearchForClientViewModel
            {
                Id = key.Id,
                Website = key.Website,
                Name = key.Name,
                Logo = key.Logo,
                Link = key.Link,
                WorkTime = key.WorkTime,
                Address = key.Address,
                IsOffice = key.IsOffice,
                BranchContactDetails = g.Select(x => new BranchContactDetail()
                {
                    ContactType = x.ContactType,
                    ContactValue = x.ContactValue
                }).ToList(),
            });

            return result.AsNoTracking().OrderBy(x => x.Id)
                .ToListAsync();
        }

        public async Task<BranchContact> GetInfo(string id, bool isReadOnly = false)
        {
            return await _branchContactRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<int> Insert(BranchContact branchContact)
        {
            _branchContactRepository.Create(branchContact);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, BranchContact branchContact)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
