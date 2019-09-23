using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace GHM.Website.Domain.IRepository
{
    public interface IVideoGroupRepository
    {
        Task<List<VideoGroupViewModel>> Search(string tenantId, string languageId, string keyword,
            bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(VideoGroup videoGroup);

        Task<int> Update(VideoGroup videoGroup);

        Task<int> Delete(string videoGroupId);

        Task<int> ForceDelete(string videoGroupId);

        Task<VideoGroup> GetInfo(string videoGroupId, bool isReadonly = false);

        Task<VideoGroup> GetInfo(string tenantId, string videoGroupId, bool isReadonly = false);
    }
}
