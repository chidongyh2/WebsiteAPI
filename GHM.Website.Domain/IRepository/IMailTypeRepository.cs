using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IMailTypeRepository
    {
        Task<List<MailTypeViewModel>> SearchAll(string tenantId, int page, int pageSize, out int totalRows);

        Task<int> Insert(MailType mailType);

        Task<int> Inserts(List<MailType> mailTypes);

        Task<int> Update(MailType maiTtype);

        Task<int> Delete(string Id);

        Task<int> ForceDelete(string Id);

        Task<MailType> GetInfo(string Id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string Id, bool isReadOnly = false);

        Task<List<MailType>> GetAll(string tenantId, bool isReadOnly = false);
    }

}
