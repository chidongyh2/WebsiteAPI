using Dapper;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
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
    public class FeedbackService : IFeedbackService
    {
        private readonly string _connectionString;
        private readonly ILogger<FeedbackService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public FeedbackService(string connectionString, ILogger<FeedbackService> logger, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _websiteResourceService = websiteResourceService;
        }

        public async Task<SearchResult<CommentViewModel>> GetComment(string tenantId, string objectId, int objectType, int page,
            int pageSize)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@TenantId", tenantId);
                    param.Add("@ObjectId", objectId);
                    param.Add("@ObjectType", objectType);
                    param.Add("@Page", page);
                    param.Add("@PageSize", pageSize);
                    param.Add("@TotalRows", DbType.Int32, direction: ParameterDirection.Output);

                    var items = await con.QueryAsync<CommentViewModel>("[dbo].[sp_Comment_GetByObjectId]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<CommentViewModel>
                    {
                        Items = items.ToList(),
                        TotalRows = param.Get<int>("TotalRows")
                    };

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_Comment_GetByObjectId FaqService Error.");
                return new SearchResult<CommentViewModel> { TotalRows = 0, Items = null };
            }
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, FeedbackMeta feedbackMeta)
        {
            var unsignNameMeta = feedbackMeta.FullName + " " + feedbackMeta.PhoneNumber + " " + feedbackMeta.Email + " " +
                             feedbackMeta.Title;

            var feedBack = new Feedback
            {
                Id = Guid.NewGuid().ToString(),
                Email = feedbackMeta.Email.Trim(),
                FullName = feedbackMeta.FullName.Trim(),
                PhoneNumber = feedbackMeta.PhoneNumber.Trim(),
                Title = feedbackMeta.Title.Trim(),
                Content = feedbackMeta.Content.Trim(),
                IsView = feedbackMeta.IsView,
                UnsignName = unsignNameMeta.StripVietnameseChars(),
                TenantId = tenantId,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                CreateTime = DateTime.Now
            };

            var result = await InsertAsync(feedBack);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _websiteResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new feedback successful."),
                string.Empty, feedBack.Id);
        }

        public async Task<int> InsertAsync(Feedback feedback)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Id", feedback.Id);
                    param.Add("@TenantId", feedback.TenantId);
                    param.Add("@Email", feedback.Email);
                    param.Add("@FullName", feedback.FullName);
                    param.Add("@PhoneNumber", feedback.PhoneNumber);
                    param.Add("@Title", feedback.Title);
                    param.Add("@Content", feedback.Content);
                    param.Add("@UnsignName", feedback.UnsignName);
                    if (feedback.CreateTime != null && feedback.CreateTime != DateTime.MinValue)
                    {
                        param.Add("@CreateTime", feedback.CreateTime);
                    }
                    param.Add("@IsView", feedback.IsView);
                    param.Add("@ConcurrencyStamp", feedback.ConcurrencyStamp);
                    rowAffected = await con.ExecuteAsync("[dbo].[spFeedback_Insert]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spFeedback_Insert] InsertAsync FeedbackRepository Error.");
                return -1;
            }
        }

        public async Task<int> InsertComment(CommentMeta commentMeta)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@TenantId", commentMeta.TenantId);
                    param.Add("@Email", commentMeta.Email);
                    param.Add("@ObjectId", commentMeta.ObjectId);
                    param.Add("@ObjectType", commentMeta.ObjectType);
                    param.Add("@FullName", commentMeta.FullName);
                    param.Add("@Email", commentMeta.Email);
                    param.Add("@Avartar", commentMeta.Avatar);
                    param.Add("@Content", commentMeta.Content);
                    param.Add("@ParentId", commentMeta.ParentId);
                    param.Add("@UserId", commentMeta.UserId);
                    param.Add("@UserType", commentMeta.UserType);
                    
                    var result = con.Query<int>("[dbo].[Comment_Insert]", param, commandType: CommandType.StoredProcedure).FirstOrDefault();

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spAgencyInfos_Insert] InsertAsync AgencyInfoRepository Error.");
                return -1;
            }
        }
    }
}
