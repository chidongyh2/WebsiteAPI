using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IConfigMailTempService
    {
        Task<List<MapMailTempViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string title, string mail, int page, int pageSize, out int totalRows);

        Task<ActionResultResponse> Insert(string tenantId, ConfigMailTempMeta configMailTempMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, ConfigMailTempMeta configMailTempMeta);
                                                                                       
        Task<ActionResultResponse> Delete(string tenantId, string id);

        //Task<ActionResultResponse<MapMailTempDetailViewModel>> GetInfo(string tenantId, string id);
    }
}
