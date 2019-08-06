using Dapper;
using GHM.Infrastructure.IServices;
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
    public class MenuService : IMenuService
    {
        private readonly string _connectionString;
        private readonly ILogger<MenuService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public MenuService(string connectionString, ILogger<MenuService> logger, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _websiteResourceService = websiteResourceService;
        }


        public async Task<MenuDetailViewModel> GetAllActivatedMenuByPositionAsync(string tenantId, string languageId, Position position)
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
                    param.Add("@position", position);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spMenu_GetAllActivatedMenuByPosition]", param, commandType: CommandType.StoredProcedure))
                    {
                        var menus = (await multi.ReadFirstOrDefaultAsync<MenuDetailViewModel>());
                        menus.MenuItems = (await multi.ReadAsync<MenuItemSearchViewModel>()).ToList();
                        return menus;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spMenu_GetAllActivatedMenuByPosition MenuService Error.");
                return null;
            }
        }

        public async Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemAsync(string tenantId, string languageId, string menuId)
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
                    param.Add("@menuId", menuId);
                    var results = await con.QueryAsync<MenuItemSearchViewModel>("[dbo].[spMenu_GetAllActivatedMenuItem]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spMenu_GetAllActivatedMenuItem MenuService Error.");
                return new List<MenuItemSearchViewModel>();
            }
        }

        public async Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemByPositionAsync(string tenantId, string languageId, Position position)
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
                    param.Add("@position", position);
                    var results = await con.QueryAsync<MenuItemSearchViewModel>("[dbo].[spMenu_GetAllActivatedMenuItemByPosition]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spMenu_GetAllActivatedMenuItemByPosition MenuService Error.");
                return new List<MenuItemSearchViewModel>();
            }
        }

        public async Task<MenuItemViewModel> GetDetailBySeoLinkAsync(string tenantId, string seoLink, string languageId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@seoLink", seoLink);
                    param.Add("@languageId", languageId);
                    return await con.QuerySingleOrDefaultAsync<MenuItemViewModel>("[dbo].[spMenu_GetDetailBySeoLink]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spMenu_GetDetailBySeoLink] GetInfoAsync PageRepository Error.");
                return null;
            }
        }
    }
}
