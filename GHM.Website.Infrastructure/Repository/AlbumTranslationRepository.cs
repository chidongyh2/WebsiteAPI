using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;

namespace GHM.Website.Infrastructure.Repository
{
    public class AlbumTranslationRepository : RepositoryBase, IAlbumTranslationRepository
    {
        private readonly IRepository<AlbumTranslation> _imageGroupTranslationRepository;
        public AlbumTranslationRepository(IDbContext context) : base(context)
        {
            _imageGroupTranslationRepository = Context.GetRepository<AlbumTranslation>();
        }

        public async Task<int> Insert(AlbumTranslation albumTranslation)
        {
            _imageGroupTranslationRepository.Create(albumTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AlbumTranslation albumTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<AlbumTranslation> albumTranslations)
        {
            _imageGroupTranslationRepository.Creates(albumTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string albumId)
        {
            var info = await _imageGroupTranslationRepository.GetsAsync(false, x => x.AlbumId == albumId);
            if (info == null || !info.Any())
                return -1;
            foreach (var albumTranslation in info)
            {
                albumTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string albumId)
        {
            var info = await _imageGroupTranslationRepository.GetsAsync(false, x => x.AlbumId == albumId);
            if (info == null || !info.Any())
                return -1;

            _imageGroupTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<AlbumTranslation> GetInfo(string albumId, string languageId, bool isReadOnly = false)
        {
            return await _imageGroupTranslationRepository.GetAsync(isReadOnly,
                x => x.AlbumId == albumId && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<AlbumTranslation>> GetsByAlbumId(string albumId, bool isReadOnly = false)
        {
            return await _imageGroupTranslationRepository.GetsAsync(true, x => x.AlbumId == albumId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string albumId, string tenantId, string languageId, string title)
        {
            title = title.Trim();
            return await _imageGroupTranslationRepository.ExistAsync(x =>
                x.AlbumId != albumId && x.TenantId == tenantId && x.LanguageId == languageId && x.Title == title && !x.IsDelete);
        }

        public async Task<bool> CheckExistsBySeoLink(string albumId, string tenantId, string languageId, string seoLink)
        {            
            return await _imageGroupTranslationRepository.ExistAsync(x =>
                x.AlbumId != albumId && x.TenantId == tenantId && x.LanguageId == languageId && x.SeoLink == seoLink && !x.IsDelete);
        }
    }
}
