using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IMailTempContentService
    {
        Task<List<MailTempContentSearchViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<ActionResultResponse> Insert(string tenantId, MailTempContentMeta mailTempContentMeta);

        Task<ActionResultResponse> Update(string id, string tenantId, MailTempContentMeta mailTempContentMeta);

        Task<ActionResultResponse> Delete(string id);

        Task<ActionResultResponse<MailTempContentDetailViewModel>> GetDetail(string tenantId, string id);

    }

}
