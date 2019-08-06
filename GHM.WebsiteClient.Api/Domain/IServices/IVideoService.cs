using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
  public  interface IVideoService
    {
        Task<List<VideoViewModel>> ListTopVideoAsync(string tenantId, string languageId, int selectTop);

        Task<SearchResult<VideoViewModel>> ListVideoAsync(string tenantId, string languageId, string albumId, int page, int pageSize);

        Task<ActionResultResponse<VideoViewModel>> GetDetailAsync(string tenantId, string languageId, string id);

        Task<SearchResult<VideoViewModel>> SearchAsync(string tenantId, string languageId, int page, int pageSize);
    }
}
