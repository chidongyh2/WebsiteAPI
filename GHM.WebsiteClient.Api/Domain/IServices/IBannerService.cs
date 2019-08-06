using GHM.Infrastructure.Models;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IBannerService
    {
        Task<ActionResultResponse<BannerViewModel>> GetDetailAsync(string tenantId, string bannerId);
        Task<ActionResultResponse<BannerViewModel>> GetBannerItemByPositionAsync(string tenantId, Position position);
    }
}
