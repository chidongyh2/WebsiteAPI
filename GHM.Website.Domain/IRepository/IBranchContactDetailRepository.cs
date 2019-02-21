using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IRepository
{
    public interface IBranchContactDetailRepository
    {
        Task<int> Insert(BranchContactDetail branchcontactdetail);

        Task<int> Inserts(List<BranchContactDetail> branchcontactdetails);

        Task<int> Update(string id, BranchContactDetail branchcontactdetail);
        Task<int> ForceDelete(string branchItemId);

        Task<BranchContactDetail> GetInfo(string id, bool isReadOnly = false);

        Task<List<BranchContactDetail>> GetAll(string branchContactId, bool isReadOnly = false);

    }
}
