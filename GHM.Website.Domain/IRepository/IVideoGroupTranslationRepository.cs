using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
  public  interface IVideoGroupTranslationRepository
    {
        Task<int> Insert(VideoGroupTranslation videoGroupTranslation);

        Task<int> Update(VideoGroupTranslation videoGroupTranslation);

        Task<int> Inserts(List<VideoGroupTranslation> videoGroupTranslations);

        Task<int> Delete(string videoGroupId);

        Task<int> ForceDelete(string videoGroupId);

        Task<VideoGroupTranslation> GetInfo(string tenantId, string languageId, string videoGroupId, bool isReadOnly = false);

        Task<List<VideoGroupTranslation>> GetsVideoId(string videoGroupId, bool isReadOnly = false);

        Task<bool> CheckExists(string videoGroupId, string tenantId, string languageId, string name);
    }
}
