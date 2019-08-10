using Dapper;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Resources;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class AlbumService : IAlbumService

    {
        private readonly string _connectionString;
        private readonly ILogger<AlbumService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public AlbumService(string connectionString, ILogger<AlbumService> logger, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _websiteResourceService = websiteResourceService;
        }



        public async Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItemAsync(string tenantId, string languageId, AlbumType type, int page, int pageSize)
        {
            try
            {
                List<AlbumWithItemViewModel> albums;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@type", type);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spAlbum_SearchAlbumWithItem]", param, commandType: CommandType.StoredProcedure))
                    {
                        var totalRows = (await multi.ReadAsync<int>()).SingleOrDefault();
                        albums = (await multi.ReadAsync<AlbumWithItemViewModel>()).ToList();
                        if (!albums.Any())
                            return new SearchResult<AlbumWithItemViewModel>();

                        foreach (var album in albums)
                        {
                            album.AlbumItems = await GetAlbumItems(tenantId, languageId, album.Id, album.Type, 1, 4);
                        }

                        return new SearchResult<AlbumWithItemViewModel>
                        {
                            TotalRows = totalRows,
                            Items = albums
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spAlbum_SearchAlbumWithItem AlbumService Error.");
                return new SearchResult<AlbumWithItemViewModel> { TotalRows = 0, Items = null };
            }
        }

        public Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItemByListAlbumId(string tenantId, string languageId, List<string> albumIds)
        {
            throw new NotImplementedException();
        }

        public async Task<SearchResult<AlbumItemViewModel>> SearchAlbumItemAsync(string tenantId, string languageId, string albumSeoLink, int page, int pageSize)
        {
            var albumInfo = await GetInfoAlbum(tenantId, languageId, albumSeoLink);
            if (albumInfo == null)
                return new SearchResult<AlbumItemViewModel>(-1, _websiteResourceService.GetString("Album does not exists."));

            if (albumInfo.Type == AlbumType.Photo)
            {
                var albumPhotos = await GetPhotoByAlbumIdAsync(tenantId, albumInfo.Id, page, pageSize);
                var albumPhotoItems = albumPhotos.Select(x => new AlbumItemViewModel
                {
                    Id = x.Id,
                    Description = x.Description,
                    Title = x.Title,
                    Thumbnail = x.Url
                }).ToList();

                return new SearchResult<AlbumItemViewModel>
                {
                    Items = albumPhotoItems
                };
            }

            var albumVideos = await GetVideoByAlbumIdAsync(tenantId, languageId, albumInfo.Id, page, pageSize);
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
                Items = albumVideoItems
            };
        }

        public async Task<SearchResult<AlbumViewModel>> SearchClientAsync(string tenantId, string languageId, AlbumType type, int page, int pageSize)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@type", type);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spAlbum_SearchAlbumWithItem]", param, commandType: CommandType.StoredProcedure))
                    {
                        return new SearchResult<AlbumViewModel>
                        {
                            TotalRows = (await multi.ReadAsync<int>()).SingleOrDefault(),
                            Items = (await multi.ReadAsync<AlbumViewModel>()).ToList()
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spAlbum_SearchAlbumWithItem AlbumService Error.");
                return new SearchResult<AlbumViewModel> { TotalRows = 0, Items = null };
            }
        }


        private async Task<AlbumViewModel> GetInfoAlbum(string tenantId, string languageId, string albumSeoLink)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@albumSeoLink", albumSeoLink);
                    return await con.QuerySingleOrDefaultAsync<AlbumViewModel>("[dbo].[spAlbum_SearchAlbumItem]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spAlbum_SearchAlbumItem AlbumService Error.");
                return null;
            }

        }

        public async Task<List<AlbumItemViewModel>> GetAlbumItems(string tenantId, string languageId, string albumId, AlbumType type, int page, int pageSize)
        {
            switch (type)
            {
                case AlbumType.Photo:
                    var photos = await GetPhotoByAlbumIdAsync(tenantId, albumId, page, pageSize);
                    return photos.Select(x => new AlbumItemViewModel
                    {
                        Id = x.Id,
                        Description = x.Description,
                        Thumbnail = x.Url
                    }).ToList();
                case AlbumType.Video:
                    var videos = await GetVideoByAlbumIdAsync(tenantId, languageId, albumId, page, pageSize);
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


        private async Task<List<PhotoViewModel>> GetPhotoByAlbumIdAsync(string tenantId, string albumId, int page, int pageSize)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@albumId", albumId);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);
                    var results = await con.QueryAsync<PhotoViewModel>("[dbo].[spAlbum_GetPhotoByAlbumId]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spAlbum_GetPhotoByAlbumId AlbumService Error.");
                return new List<PhotoViewModel>();
            }
        }

        private async Task<List<VideoViewModel>> GetVideoByAlbumIdAsync(string tenantId, string languageId, string albumId, int page, int pageSize)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@albumId", albumId);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);
                    var results = await con.QueryAsync<VideoViewModel>("[dbo].[spAlbum_GetVideoByAlbumId]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spAlbum_GetVideoByAlbumId AlbumService Error.");
                return new List<VideoViewModel>();
            }
        }


    }
}
