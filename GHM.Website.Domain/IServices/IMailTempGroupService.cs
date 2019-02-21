using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IMailTempGroupService
    {
        Task<List<MailTempGroupViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<ActionResultResponse> Insert(string tenantId, MailTempGroupMeta mailGroupMeta);

        Task<ActionResultResponse> Update(string id, MailTempGroupMeta mailGroupMeta);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<MailTempGroupDetailViewModel>> GetDetail(string tenantId, string id);

    }

}
