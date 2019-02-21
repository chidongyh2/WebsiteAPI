using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class AlbumService : IAlbumService
    {
        private readonly IAlbumRepository _albumRepository;
        private readonly IAlbumTranslationRepository _albumTranslationRepository;
        private readonly IPhotoRepository _photoRepository;
        private readonly IVideoRepository _videoRepository;
        private readonly IVideoService _videoService;
        private readonly IVideoTranslationRepository _videoTranslationRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;

        public AlbumService(IAlbumRepository albumRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService, IPhotoRepository photoRepository,
            IAlbumTranslationRepository albumTranslationRepository, IVideoRepository videoRepository, IVideoService videoService,
            IVideoTranslationRepository videoTranslationRepository)
        {
            _albumRepository = albumRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;
            _photoRepository = photoRepository;
            this._albumTranslationRepository = albumTranslationRepository;
            _videoRepository = videoRepository;
            _videoService = videoService;
            _videoTranslationRepository = videoTranslationRepository;
        }

        public async Task<SearchResult<AlbumViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive,
            AlbumType? type, int page, int pageSize)
        {
            var items = await _albumRepository.Search(tenantId, languageId, keyword, isActive, type, page, pageSize, out var totalRows);
            return new SearchResult<AlbumViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<AlbumViewModel>> SearchClient(string tenantId, string languageId,
          AlbumType type, int page, int pageSize)
        {
            var items = await _albumRepository.SearchClient(tenantId, languageId, type, page, pageSize, out var totalRows);
            return new SearchResult<AlbumViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<AlbumViewModel>> SearchByAlbumIds(string tenantId, string languageId, List<string> albumIds)
        {
            var items = await _albumRepository.SearchByAlbumIds(tenantId, languageId, albumIds);
            return new SearchResult<AlbumViewModel>
            {
                Items = items,
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            AlbumMeta albumMeta)
        {
            var albumId = Guid.NewGuid().ToString();

            // Insert new album.
            var resultInsertAlbum = await _albumRepository.Insert(new Album
            {
                Id = albumId,
                ConcurrencyStamp = albumId,
                IsActive = albumMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                Type = albumMeta.Type,
                Thumbnail = albumMeta.Thumbnail,
                IsPublic = albumMeta.IsPublic,
            });

            if (resultInsertAlbum <= 0)
                return new ActionResultResponse<string>(resultInsertAlbum,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Insert album translation.
            var resultInsertTranslation = await InsertTranslations();
            if (resultInsertTranslation.Code < 0)
            {
                await RollbackInsertAlbum();
            }
            if (albumMeta.Type == AlbumType.Photo)
            {
                await InsertPhotos(tenantId, albumId, creatorId, creatorFullName,
                   albumMeta.Photos);
            }
            else
            {
                await InsertVideos(tenantId, albumId, creatorId, creatorFullName, creatorAvatar, albumMeta.Videos);
            }

            return new ActionResultResponse<string>(1,
                    _sharedResourceService.GetString("Insert Album success"), "", albumId);

            #region Local functions
            async Task RollbackInsertAlbum()
            {
                await _albumRepository.ForceDelete(albumId);
            }

            async Task RollbackInsertAlbumTranslation()
            {
                await _albumTranslationRepository.ForceDelete(albumId);
            }

            async Task<ActionResultResponse<string>> InsertTranslations()
            {
                var albumTranslations = new List<AlbumTranslation>();
                foreach (var albumTranslation in albumMeta.Translations)
                {
                    // Check title exists.
                    var isTitleExists = await _albumTranslationRepository.CheckExists(albumId, tenantId,
                        albumTranslation.LanguageId, albumTranslation.Title);
                    if (isTitleExists)
                    {
                        await RollbackInsertAlbum();
                        await RollbackInsertAlbumTranslation();
                        return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Album title already exists."));
                    }
                    var seoLink = !string.IsNullOrEmpty(albumTranslation.SeoLink)
                        ? albumTranslation.SeoLink.Trim()
                        : albumTranslation.Title.Trim().ToUrlString();

                    // Check seolink exists.
                    var isSeoLinkExists = await _albumTranslationRepository.CheckExistsBySeoLink(albumId, tenantId,
                        albumTranslation.LanguageId,
                        seoLink);
                    if (isSeoLinkExists)
                    {
                        await RollbackInsertAlbum();
                        await RollbackInsertAlbumTranslation();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString("SeoLink already exists. Please choose another."));
                    }

                    albumTranslations.Add(new AlbumTranslation
                    {
                        TenantId = tenantId,
                        AlbumId = albumId,
                        LanguageId = albumTranslation.LanguageId.Trim(),
                        Title = albumTranslation.Title.Trim(),
                        Description = albumTranslation.Description?.Trim(),
                        UnsignName = albumTranslation.Title.StripVietnameseChars().ToUpper(),
                        MetaTitle = albumTranslation.MetaTitle?.Trim(),
                        MetaDescription = albumTranslation.MetaDescription?.Trim(),
                        SeoLink = seoLink,
                    });
                }

                var result = await _albumTranslationRepository.Inserts(albumTranslations);
                if (result <= 0)
                {
                    await RollbackInsertAlbum();
                    await RollbackInsertAlbumTranslation();
                    return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
                }

                return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Add new album translation succesful."));
            }
            #endregion
        }

        private async Task<ActionResultResponse<string>> InsertVideos(string tenantId, string albumId, string creatorId, string creatorFullName,
            string creatorAvatar, List<VideoMeta> listVideoMeta)
        {
            foreach (var videoMeta in listVideoMeta)
            {
                videoMeta.AlbumId = albumId;
                var result = await _videoService.Insert(tenantId, creatorId, creatorFullName, creatorAvatar, videoMeta);
                if (result.Code <= 0)
                {
                    return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Can not insert video. Please contact with administrator."));
                }
            }

            return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Add new video successful."));
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName,
            string lastUpdateAvatar, string photoId, AlbumMeta albumMeta)
        {
            var info = await _albumRepository.GetInfo(photoId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Album does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != albumMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString("The album already updated by another person. You can not update this album."));

            // Update album info.
            await UpdateAlbum();

            // Update translate.
            await UpdateAlbumTranslation();

            // Update photos.
            if (info.Type == AlbumType.Photo)
            {
                await UpdatePhotos();
            }
            else
            {
                await UpdateVideos();
            }
            return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Update album successful."), "", info.ConcurrencyStamp);

            #region Local functions
            async Task UpdateAlbum()
            {
                info.IsActive = albumMeta.IsActive;
                info.ConcurrencyStamp = Guid.NewGuid().ToString();
                info.LastUpdate = DateTime.Now;
                info.LastUpdateUserId = lastUpdateUserId;
                info.LastUpdateFullName = lastUpdateFullName;
                info.Thumbnail = albumMeta.Thumbnail;
                info.IsPublic = albumMeta.IsPublic;

                await _albumRepository.Update(info);
            }

            async Task<ActionResultResponse> UpdateAlbumTranslation()
            {
                foreach (var albumTranslation in albumMeta.Translations)
                {
                    var isNameExists = await _albumTranslationRepository.CheckExists(info.Id, tenantId,
                        albumTranslation.LanguageId, albumTranslation.Title);
                    if (isNameExists)
                        return new ActionResultResponse(-4, _websiteResourceService
                            .GetString("Album: \"{0}\" already exists.", albumTranslation.Title));

                    var seoLink = !string.IsNullOrEmpty(albumTranslation.SeoLink)
                        ? albumTranslation.SeoLink.Trim()
                        : albumTranslation.Title.Trim().ToUrlString();

                    // Check seolink exists.
                    var isSeoLinkExists = await _albumTranslationRepository.CheckExistsBySeoLink(info.Id, info.TenantId,
                        albumTranslation.LanguageId,
                        seoLink);
                    if (isSeoLinkExists)
                        return new ActionResultResponse(-5, _websiteResourceService.GetString("SeoLink already exists. Please choose another."));

                    var albumTranslationInfo =
                        await _albumTranslationRepository.GetInfo(info.Id, albumTranslation.LanguageId);
                    if (albumTranslationInfo != null)
                    {
                        albumTranslationInfo.Title = albumTranslation.Title.Trim();
                        albumTranslationInfo.Description = albumTranslation.Description?.Trim();
                        albumTranslationInfo.UnsignName = albumTranslation.Title.StripVietnameseChars().ToUpper();
                        albumTranslationInfo.MetaTitle = albumTranslation.MetaTitle?.Trim();
                        albumTranslationInfo.MetaDescription = albumTranslation.MetaDescription?.Trim();
                        albumTranslationInfo.SeoLink = seoLink;
                        await _albumTranslationRepository.Update(albumTranslationInfo);
                    }
                    else
                    {
                        albumTranslationInfo = new AlbumTranslation
                        {
                            AlbumId = photoId,
                            LanguageId = albumTranslation.LanguageId.Trim(),
                            Title = albumTranslation.Title.Trim(),
                            Description = albumTranslation.Description?.Trim(),
                            UnsignName = albumTranslation.Title.StripVietnameseChars().ToUpper(),
                            TenantId = tenantId,
                            SeoLink = seoLink,
                            MetaTitle = albumTranslation.MetaTitle?.Trim(),
                            MetaDescription = albumTranslation.MetaDescription?.Trim()
                        };
                        await _albumTranslationRepository.Insert(albumTranslationInfo);
                    }
                }
                return new ActionResultResponse(1, _websiteResourceService.GetString("Update album successful."));
            }

            async Task UpdatePhotos()
            {
                var listExistings = await _photoRepository.GetsByAlbumId(info.TenantId, info.Id);
                if (listExistings == null || !listExistings.Any())
                {
                    await InsertPhotos(info.TenantId, info.Id, lastUpdateUserId, lastUpdateFullName, albumMeta.Photos);
                }
                else
                {
                    // Get list edit photos.
                    var listUpdateId = listExistings.Select(x => x.Id).Intersect(albumMeta.Photos.Select(x => x.Id)).ToList();
                    if (listUpdateId.Any())
                    {
                        var listUpdate = listExistings.Where(x => listUpdateId.Contains(x.Id));
                        foreach (var photo in listUpdate)
                        {
                            var photoMeta = albumMeta.Photos.FirstOrDefault(x => x.Id == photo.Id);
                            if (photoMeta != null)
                            {
                                photo.Title = photoMeta.Title;
                                photo.Description = photoMeta.Description;
                                photo.LastUpdateUserId = lastUpdateUserId;
                                photo.LastUpdateFullName = lastUpdateFullName;
                                photo.LastUpdate = DateTime.Now;
                                photo.ConcurrencyStamp = Guid.NewGuid().ToString();
                            }
                        }
                    }

                    // Get list delete photos.                    
                    var listDeleteId = listExistings.Select(x => x.Id).Except(albumMeta.Photos.Select(x => x.Id))
                        .ToList();

                    if (listDeleteId.Any())
                    {
                        await _photoRepository.Delete(listDeleteId);
                    }

                    // Get list new photos.
                    var listNewId = albumMeta.Photos.Select(x => x.Id).Except(listExistings.Select(x => x.Id)).ToList();
                    if (listNewId.Any())
                    {
                        var listNew = albumMeta.Photos.Where(x => listNewId.Contains(x.Id)).ToList();
                        if (listNew.Any())
                        {
                            await InsertPhotos(info.TenantId, info.Id, lastUpdateUserId, lastUpdateFullName, listNew);
                        }
                    }
                }
            }

            async Task<ActionResultResponse> UpdateVideos()
            {
                var listVideoIds = await _videoRepository.GetListVideoIdByAlbumId(info.Id);
                if (listVideoIds == null || !listVideoIds.Any())
                {
                    return await InsertVideos(tenantId, info.Id, lastUpdateUserId, lastUpdateFullName, lastUpdateAvatar,
                        albumMeta.Videos);
                }
                else
                {
                    // Update video info.
                    var listUpdateIds = listVideoIds.Intersect(albumMeta.Videos.Select(x => x.Id)).ToList();
                    if (listUpdateIds.Any())
                    {
                        foreach (var videoMeta in albumMeta.Videos.Where(x => listUpdateIds.Contains(x.Id)).ToList())
                        {
                            await _videoService.Update(tenantId, lastUpdateUserId, lastUpdateFullName, lastUpdateAvatar,
                                videoMeta.Id,
                                videoMeta);
                        }
                    }

                    // Delete videos.                    
                    var listDeletedIds = listVideoIds.Except(albumMeta.Videos.Select(x => x.Id)).ToList();
                    if (listDeletedIds.Any())
                    {
                        await _videoRepository.DeleteByIds(listDeletedIds);
                    }

                    // Add new videos.
                    var listNewsVideoIds = albumMeta.Videos.Select(x => x.Id).Except(listVideoIds).ToList();
                    if (listNewsVideoIds.Any())
                    {
                        var listNewVideo = albumMeta.Videos.Where(x => listNewsVideoIds.Contains(x.Id)).ToList();
                        var result = await InsertVideos(info.TenantId, info.Id, lastUpdateUserId, lastUpdateFullName,
                             lastUpdateAvatar, listNewVideo);
                    }

                    return new ActionResultResponse(1, _websiteResourceService.GetString("Update video album successful."));
                }
            }
            #endregion
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string albumId)
        {
            var info = await _albumRepository.GetInfo(albumId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Album does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _albumRepository.Delete(albumId);
            if (result <= 0)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            if (info.Type == AlbumType.Photo)
            {
                await _albumTranslationRepository.Delete(albumId);
            }

            if (info.Type == AlbumType.Video)
            {
                var listVideo = await _videoRepository.GetsByAlbumId(albumId);
                if (listVideo != null && listVideo.Any())
                {
                    await _videoRepository.DeleteListVideo(listVideo);
                }
            }
            await _photoRepository.DeleteByAlbumId(albumId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete album successful."));
        }

        public async Task<ActionResultResponse<AlbumDetailViewModel>> GetDetail(string tenantId, string albumId)
        {
            var info = await _albumRepository.GetInfo(albumId);
            if (info == null)
                return new ActionResultResponse<AlbumDetailViewModel>(-1, _websiteResourceService.GetString("Album does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<AlbumDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var albumTranslations = await _albumTranslationRepository.GetsByAlbumId(albumId);
            var albumDetail = new AlbumDetailViewModel
            {
                Id = info.Id,
                IsActive = info.IsActive,
                ConcurrencyStamp = info.ConcurrencyStamp,
                Translations = albumTranslations,
                Type = info.Type,
                Thumbnail = info.Thumbnail,
                IsPublic = info.IsPublic,
                Photos = info.Type == AlbumType.Photo ? await _photoRepository.GetsByAlbumId(tenantId, albumId, true) : null,
            };

            if (info.Type == AlbumType.Video)
            {
                var videos = await _videoRepository.GetsByAlbumId(albumId, true);
                if (videos.Any())
                {
                    foreach (var video in videos)
                    {
                        video.Translations = await _videoTranslationRepository.GetsVideoId(video.Id);
                    }
                }
                albumDetail.Videos = videos;
            }

            return new ActionResultResponse<AlbumDetailViewModel>
            {
                Code = 1,
                Data = albumDetail
            };
        }

        public async Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItem(string tenantId, string languageId, string keyword,
            AlbumType type, int page, int pageSize)
        {
            var albums = await _albumRepository.SearchClient(tenantId, languageId, type, page, pageSize,
                out var totalRows);
            if (!albums.Any())
                return new SearchResult<AlbumWithItemViewModel>();

            var albumItems = albums.Select(x => new AlbumWithItemViewModel()
            {
                Id = x.Id,
                Title = x.Title,
                Type = x.Type,
                CreateTime = x.CreateTime,
                SeoLink = x.SeoLink,
                Description = x.Description,
            }).ToList();

            // Get album items.
            foreach (var albumItem in albumItems)
            {
                albumItem.AlbumItems = await GetAlbumItems(tenantId, languageId, albumItem.Id, albumItem.Type, 1, 4);
            }
            return new SearchResult<AlbumWithItemViewModel>(albumItems, totalRows);
        }

        public async Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItemByListAlbumId(string tenantId, string languageId, List<string> albumIds)
        {
            if (albumIds == null || !albumIds.Any())
                return null;

            var albums = await _albumRepository.SearchByAlbumIds(tenantId, languageId, albumIds);

            var albumItems = albums.Select(x => new AlbumWithItemViewModel()
            {
                Id = x.Id,
                Title = x.Title,
                Type = x.Type,
                CreateTime = x.CreateTime,
                SeoLink = x.SeoLink,
                Description = x.Description,
            }).ToList();

            // Get album items.
            foreach (var albumItem in albumItems)
            {
                albumItem.AlbumItems = await GetAlbumItems(tenantId, languageId, albumItem.Id, albumItem.Type, 1, 20);
            }
            return new SearchResult<AlbumWithItemViewModel>(albumItems);
        }

        public async Task<SearchResult<AlbumItemViewModel>> SearchAlbumItem(string tenantId, string languageId, string albumSeoLink,
            int page, int pageSize)
        {
            var albumInfo = await _albumRepository.GetInfo(tenantId, languageId, albumSeoLink, true);
            if (albumInfo == null)
                return new SearchResult<AlbumItemViewModel>(-1, _websiteResourceService.GetString("Album does not exists."));

            if (albumInfo.Type == AlbumType.Photo)
            {
                var albumPhotos = await _photoRepository.GetsByAlbumId(tenantId, albumInfo.Id, page, pageSize, out var totalRowPhotos);
                var albumPhotoItems = albumPhotos.Select(x => new AlbumItemViewModel
                {
                    Id = x.Id,
                    Description = x.Description,
                    Title = x.Title,
                    Thumbnail = x.Url
                }).ToList();

                return new SearchResult<AlbumItemViewModel>
                {
                    Items = albumPhotoItems,
                    TotalRows = totalRowPhotos
                };
            }

            var albumVideos = await _videoRepository.GetsByAlbumId(languageId, albumInfo.Id, page, pageSize, out var totalRowVideos);
            var albumVideoItems = albumVideos.Select(x => new AlbumItemViewModel
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Thumbnail = x.Thumbnail,
                Url = x.Url,
            }).ToList();

            return new SearchResult<AlbumItemViewModel>
            {
                Items = albumVideoItems,
                TotalRows = totalRowVideos
            };
        }

        private async Task<ActionResultResponse<string>> InsertPhotos(string tenantId, string albumId, string creatorId, string creatorFullName,
            List<PhotoMeta> photos)
        {
            var listPhoto = new List<Photo>();
            foreach (var photo in photos)
            {
                var photoId = Guid.NewGuid().ToString();
                listPhoto.Add(new Photo
                {
                    Id = photoId,
                    TenantId = tenantId,
                    AlbumId = albumId,
                    Title = photo.Title,
                    ConcurrencyStamp = photoId,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName,
                    Description = photo.Description,
                    Url = photo.Url,
                });
            }
            var result = await _photoRepository.Insert(listPhoto);
            return new ActionResultResponse<string>(result,
                result > 0
                    ? _websiteResourceService.GetString("Add new album translation succesful.")
                    : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        private async Task<List<AlbumItemViewModel>> GetAlbumItems(string tenantId, string languageId, string albumId, AlbumType type, int page,
            int pageSize)
        {
            switch (type)
            {
                case AlbumType.Photo:
                    var photos = await _photoRepository.GetsByAlbumId(tenantId, albumId, page, pageSize, out var totalPhotoRows);
                    return photos.Select(x => new AlbumItemViewModel
                    {
                        Id = x.Id,
                        Description = x.Description,
                        Thumbnail = x.Url
                    }).ToList();
                case AlbumType.Video:
                    var videos = await _videoRepository.GetsByAlbumId(languageId, albumId, page, pageSize, out int totalVideoRows);
                    return videos.Select(x => new AlbumItemViewModel
                    {
                        Id = x.Id,
                        Title = x.Title,
                        Description = x.Description,
                        Thumbnail = x.Thumbnail,
                        Type = x.Type,
                        Url = x.Url,
                        VideoLinkId = x.VideoLinkId
                    }).ToList();
                default:
                    return null;
            }
        }
    }
}
