using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IBranchContactTranslationRepository
    {
        Task<int> Insert(BranchContactTranslation branchContactTranslation);

        Task<int> Inserts(List<BranchContactTranslation> branchContactTranslations);

        Task<int> Update(string tenantId, string branchContactId, string languageId, BranchContactTranslation branchContactTranslation);

        Task<int> ForceDelete(string tenantId, string branchContactId, string languageId);

        Task<List<BranchContactTranslation>> GetAll(string branchContactId, string languageId, bool isReadOnly = false);

        Task<BranchContactTranslation> GetInfo(string tenantId, string branchContactId, string languageId, bool isReadOnly = false);

        Task<bool> CheckExistsById(string tenantId, string branchContactId, string languageId, bool isReadOnly = false);

    }
}
