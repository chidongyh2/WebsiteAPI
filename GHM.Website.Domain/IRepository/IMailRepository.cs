using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IMailRepository
    {
        Task<List<MailViewModel>> Search(string tenantId, int page, int pageSize, out int totalRows);

        Task<int> Insert( Mail mail);

        Task<int> Inserts(List<Mail> mails);

        Task<int> Update(string tenantId, Mail mail);

        Task<int> Delete(string tenantId, string id);

        Task<int> ForceDelete(string tenantId, string id);

        Task<Mail> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string tenantId, string id, bool isReadOnly = false);

    }

}
