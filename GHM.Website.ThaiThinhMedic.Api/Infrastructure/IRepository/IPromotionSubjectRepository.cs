using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IPromotionSubjectRepository
    {
        Task<ActionResultResponse> Save(List<PromotionSubject> promotionSubjects);

        Task<ActionResultResponse> Update(List<PromotionSubject> promotionSubjects);

        Task<ActionResultResponse> Delete(string id);

        Task<List<PromotionSubject>> Search(string keyword, string promotionId, int page, int pageSize,
            out long totalRows);

        Task<bool> CheckExists(string promotionId, string subjectId, bool? isDelete);

        Task<PromotionSubject> GetInfo(string promotionId, string subjectId);

        Task<List<PromotionSubject>> GetListSubject(string promotionId);
    }
}
