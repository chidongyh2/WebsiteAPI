using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Website.Infrastructure.Repository
{
    public class VideoTranslationRepository : RepositoryBase, IVideoTranslationRepository
    {
        private readonly IRepository<VideoTranslation> _videoTranslationRepository;
        public VideoTranslationRepository(IDbContext context) : base(context)
        {
            _videoTranslationRepository = Context.GetRepository<VideoTranslation>();
        }

        public async Task<int> Insert(VideoTranslation videoTranslation)
        {
            _videoTranslationRepository.Create(videoTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(VideoTranslation videoTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<VideoTranslation> videoTranslations)
        {
            _videoTranslationRepository.Creates(videoTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string videoId)
        {
            var info = await _videoTranslationRepository.GetsAsync(false, x => x.VideoId == videoId);
            if (info == null || !info.Any())
                return -1;
            foreach (var videoTranslation in info)
            {
                videoTranslation.IsDelete = true;
            }          
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string videoId)
        {
            var info = await _videoTranslationRepository.GetsAsync(false, x => x.VideoId == videoId);
            if (info == null || !info.Any())
                return -1;

            _videoTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }


        public async Task<VideoTranslation> GetInfo(string videoId, string languageId, bool isReadOnly = false)
        {
            return await _videoTranslationRepository.GetAsync(isReadOnly, x => x.VideoId == videoId && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<VideoTranslation>> GetsVideoId(string videoId, bool isReadOnly = false)
        {
            return await _videoTranslationRepository.GetsAsync(true, x => x.VideoId == videoId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string videoId, string tenantId, string languageId, string title)
        {
            title = title.Trim();
            return await _videoTranslationRepository.ExistAsync(x =>
                x.VideoId != videoId && x.TenantId == tenantId && x.LanguageId == languageId && x.Title == title && !x.IsDelete);
        }
    }
}
