using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IMailTempGroupRepository
    {
        Task<List<MailTempGroupViewModel>> Search(string tenantId, string languageId, string keyword,  int page, int pageSize, out int totalRows);

        Task<int> Insert(MailTempGroup mailGroups);

        Task<int> Inserts(List<MailTempGroup> mailGroups);

        Task<int> Update(string id, MailTempGroup mailGroups);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<MailTempGroup> GetInfo(string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, bool isReadOnly = false);
            
    }

}
