using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IBranchContactRepository
    {
        Task<List<BranchContactSearchViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<List<BranchContactSearchForClientViewModel>> SearchForClient(string tenantId, string languageId);

        Task<int> Insert(BranchContact branchContact);

        Task<int> Update(string id, BranchContact branchContact);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<BranchContact> GetInfo(string id, bool isReadOnly = false);
        
        Task<bool> CheckExistsById(string id, bool isReadOnly = false);
       
    }

}
