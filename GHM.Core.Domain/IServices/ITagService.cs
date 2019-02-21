using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface ITagService
    {
        Task<SearchResult<TagViewModel>> Search(string tenantId, string languageId, string keyword, TagType type,
            int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(List<SubjectTagMeta>  subjectTagMetas);

        Task<List<SubjectTagViewModel>> GetDetail(string tenantId, string subjectTagId);

        Task<List<string>> GetListSubject(string tenantId, string languageId, TagType type, string subjectId);
    }
}
