using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Website.Infrastructure.Repository
{
    public class BranchContactDetailRepository : RepositoryBase, IBranchContactDetailRepository
    {
        private readonly IRepository<BranchContactDetail> _branchContactDetailRepository;

        public BranchContactDetailRepository(IDbContext context) : base(context)
        {
            _branchContactDetailRepository = Context.GetRepository<BranchContactDetail>();
        }

        public async Task<List<BranchContactDetail>> GetAll(string branchContactId, bool isReadOnly = false)
        {
            return await _branchContactDetailRepository.GetsAsync(isReadOnly, x => x.BranchContactId == branchContactId && !x.IsDelete);
        }

        public async Task<BranchContactDetail> GetInfo(string id, bool isReadOnly = false)
        {
            return await _branchContactDetailRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<int> Insert(BranchContactDetail branchContactDetail)
        {
            _branchContactDetailRepository.Create(branchContactDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<BranchContactDetail> branchContactDetails)
        {
            _branchContactDetailRepository.Creates(branchContactDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, BranchContactDetail branchcontactdetail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string branchItemId)
        {
            var branchItemInfo = await GetInfo(branchItemId);
            if (branchItemInfo == null)
                return -1;

            _branchContactDetailRepository.Delete(branchItemInfo);
            return await Context.SaveChangesAsync();
        }
    }
}
