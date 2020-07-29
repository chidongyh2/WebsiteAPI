using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
  public  interface IMenuService
    {
        Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemAsync(string tenantId, string languageId, string menuId);

        Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemByPositionAsync(string tenantId, string languageId, Position position);

        Task<MenuItemViewModel> GetDetailBySeoLinkAsync(string tenantId, string seoLink, string languageId);

        Task<MenuDetailViewModel> GetAllActivatedMenuByPositionAsync(string tenantId, string languageId, Position position);
    }
}
