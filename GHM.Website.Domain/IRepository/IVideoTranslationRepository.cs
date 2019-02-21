using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IVideoTranslationRepository
    {
        Task<int> Insert(VideoTranslation videoTranslation);

        Task<int> Update(VideoTranslation videoTranslation);

        Task<int> Inserts(List<VideoTranslation> videoTranslations);

        Task<int> Delete(string videoId);

        Task<int> ForceDelete(string videoId);

        Task<VideoTranslation> GetInfo(string videoId, string languageId, bool isReadOnly = false);

        Task<List<VideoTranslation>> GetsVideoId(string videoId, bool isReadOnly = false);

        Task<bool> CheckExists(string videoId, string tenantId, string languageId, string title);
    }
}
