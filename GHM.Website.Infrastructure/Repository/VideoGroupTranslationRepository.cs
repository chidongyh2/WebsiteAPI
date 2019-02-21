using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
namespace GHM.Website.Infrastructure.Repository
{
 public   class VideoGroupTranslationRepository : RepositoryBase, IVideoGroupTranslationRepository
    {
        private readonly IRepository<VideoGroupTranslation> _videoGroupTranslationRepository;
        public VideoGroupTranslationRepository(IDbContext context) : base(context)
        {
            _videoGroupTranslationRepository = Context.GetRepository<VideoGroupTranslation>();
        }

        public async Task<int> Insert(VideoGroupTranslation videoGroupTranslation)
        {
            _videoGroupTranslationRepository.Create(videoGroupTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(VideoGroupTranslation videoGroupTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<VideoGroupTranslation> videoGroupTranslations)
        {
            _videoGroupTranslationRepository.Creates(videoGroupTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string videoGroupId)
        {
            var info = await _videoGroupTranslationRepository.GetsAsync(false, x => x.VideoGroupId == videoGroupId);
            if (info == null || !info.Any())
                return -1;
            foreach (var videoTranslation in info)
            {
                videoTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string videoGroupId)
        {
            var info = await _videoGroupTranslationRepository.GetsAsync(false, x => x.VideoGroupId == videoGroupId);
            if (info == null || !info.Any())
                return -1;

            _videoGroupTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<VideoGroupTranslation> GetInfo(string tenantId, string languageId, string videoGroupId, bool isReadOnly = false)
        {
            return await _videoGroupTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId && x.VideoGroupId == videoGroupId && !x.IsDelete);
        }

        public async Task<List<VideoGroupTranslation>> GetsVideoId(string videoGroupId, bool isReadOnly = false)
        {
            return await _videoGroupTranslationRepository.GetsAsync(true, x => x.VideoGroupId == videoGroupId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string videoGroupId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _videoGroupTranslationRepository.ExistAsync(x =>
                x.VideoGroupId != videoGroupId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }
    }
}
