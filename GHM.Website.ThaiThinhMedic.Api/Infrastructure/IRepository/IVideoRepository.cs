using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IVideoRepository
    {
        Task<ActionResultResponse> Insert(VideoMeta videoMeta);

        Task<ActionResultResponse> Update(VideoMeta videoMeta);

        Task<ActionResultResponse> Delete(int id);

        Task<List<VideoViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
