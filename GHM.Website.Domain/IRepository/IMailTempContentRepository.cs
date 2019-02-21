using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IRepository
{
    public interface IMailTempContentRepository
    {
        Task<List<MailTempContentSearchViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(MailTempContent mailTempContent);

        Task<int> Update(string id, MailTempContent mailTempContent);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<MailTempContent> GetInfo(string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, bool isReadOnly = false);

        Task<List<MailTempContent>> GetAll(string tenantId, bool isReadOnly = false);

        Task<MailTempContent> MailTempContentActive(string tenantId, string mailTempGroupId, bool isReadOnly = false);
        
    }

}
