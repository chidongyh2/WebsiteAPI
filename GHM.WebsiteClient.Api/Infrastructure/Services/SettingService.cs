using Dapper;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Models;
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
    public class SettingService : ISettingService
    {
        private readonly string _connectionString;
        private readonly ILogger<SettingService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;
        public SettingService(string connectionString, ILogger<SettingService> logger, IResourceService<GhmWebsiteResource> resourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _resourceService = resourceService;
        }

        public async Task<SearchResult<SettingViewModel>> GetWebsiteSettingsAsync(string tenantId, string languageId)
        {
            var websiteSettingGroupId = "GHM.Website.Domain.Models.WebsiteSetting.WebsiteSetting";
            var settings = await GetsByGroupId(tenantId, languageId, websiteSettingGroupId);
            var properties = ClassHelper.GetPropertiesName<WebsiteSetting>();
            if (properties == null || !properties.Any())
                return new SearchResult<SettingViewModel>(-1, _resourceService.GetString(ErrorMessage.SomethingWentWrong));

            if (settings != null && settings.Any())
            {
                var listNewProperties = properties
                    .Select(ClassHelper.GetPropertyNameAsKey<WebsiteSetting>)
                    .ToList()
                    .Except(settings.Select(x => x.Key))
                    .ToList();

                if (listNewProperties.Any())
                {
                    var newProperties = properties.Where(x => listNewProperties
                    .Contains(ClassHelper.GetPropertyNameAsKey<WebsiteSetting>(x))).ToList();
                    settings.AddRange(newProperties.Select(x => new SettingViewModel
                    {
                        Value = string.Empty,
                        GroupId = websiteSettingGroupId,
                        LanguageId = languageId,
                        Key = ClassHelper.GetPropertyNameAsKey<WebsiteSetting>(x),
                        DisplayName = ClassHelper.GetDisplayName<WebsiteSetting>(x)
                    }));
                }
                return new SearchResult<SettingViewModel>(settings);
            }

            settings = properties.Select(x => new SettingViewModel
            {
                Value = string.Empty,
                GroupId = websiteSettingGroupId,
                LanguageId = languageId,
                Key = ClassHelper.GetPropertyNameAsKey<WebsiteSetting>(x),
                DisplayName = ClassHelper.GetDisplayName<WebsiteSetting>(x)
            }).ToList();
            return new SearchResult<SettingViewModel>(settings);
        }

        private async Task<List<SettingViewModel>> GetsByGroupId(string tenantId, string languageId, string groupId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@LanguageId", languageId);
                    param.Add("@groupId", groupId);
                    var results = await con.QueryAsync<SettingViewModel>("[dbo].[spSetting_SelectAll]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spSetting_SelectAll SettingService Error.");
                return new List<SettingViewModel>();
            }
        }
    }
}
