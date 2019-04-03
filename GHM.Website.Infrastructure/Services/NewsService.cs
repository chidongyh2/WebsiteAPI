using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.EventBus.Constants;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using Microsoft.Extensions.Configuration;
using GHM.Events;
using GHM.Infrastructure.Helpers;
using System.Net.Http;
using Newtonsoft.Json;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;

namespace GHM.Website.Infrastructure.Services
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _newsRepository;
        private readonly INewsTranslationRepository _newsTranslationRepository;
        private readonly ICategoriesNewsRepository _categoriesNewsRepository;
        private readonly IMenuItemRepository _menuItemRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly ICategoryTranslationRepository _categoryTranslationRepository;
        private readonly IConfiguration _configuration;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;

        public NewsService(INewsRepository newsRepository,
            INewsTranslationRepository newsTranslationRepository,
            ICategoriesNewsRepository categoriesNewsRepository,
            IMenuItemRepository menuItemRepository,
            ICategoryRepository categoryRepository,
            ICategoryTranslationRepository categoryTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService,
            IConfiguration configuration
        )
        {
            _newsRepository = newsRepository;
            _newsTranslationRepository = newsTranslationRepository;
            _categoriesNewsRepository = categoriesNewsRepository;
            _menuItemRepository = menuItemRepository;
            _categoryRepository = categoryRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;
            _configuration = configuration;
            _categoryTranslationRepository = categoryTranslationRepository;
        }

        public async Task<SearchResult<NewsViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId,
            string creatorId, string currentUserId, ApproverStatus? status, int page, int pageSize, bool isApprove)
        {
            var items = await _newsRepository.Search(tenantId, languageId, keyword, categoryId, creatorId, currentUserId, status, page, pageSize, isApprove,
                out var totalRows);
            return new SearchResult<NewsViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<SearchResult<NewSearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int? categoryId, int page, int pageSize)
        {
            var items = await _newsRepository.SearchForSelect(tenantId, languageId, keyword, categoryId, page, pageSize, out var totalRows);
            return new SearchResult<NewSearchForSelectViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId,
            string creatorFullName, string creatorAvatar, NewsMeta newsMeta, bool isSend)
        {
            var newsId = Guid.NewGuid().ToString();
            var news = new News
            {
                Id = newsId,
                ConcurrencyStamp = newsId,
                IsActive = newsMeta.IsActive,
                FeatureImage = newsMeta.FeatureImage,
                BannerImage = newsMeta.BannerImage,
                AltImage = newsMeta.AltImage,
                Source = newsMeta.Source,
                Status = isSend ? ApproverStatus.Pending : ApproverStatus.Draft,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreatorAvatar = creatorAvatar
            };

            if (news.Status == ApproverStatus.Pending)
            {
                news.SentTime = DateTime.Now;
            }

            if (newsMeta.IsHot.HasValue)
            {
                news.IsHot = newsMeta.IsHot.Value;
                news.LastUpdateIsHot = DateTime.Now;
            }

            if (newsMeta.IsHomePage.HasValue)
            {
                news.IsHomePage = newsMeta.IsHomePage.Value;
                news.LastUpdateIsHomePage = DateTime.Now;
            }
            var result = await _newsRepository.Insert(news);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert news Translation.

            if (newsMeta.NewsTranslations.Count > 0)
            {
                var resultInsertTranslation = await InsertNewsTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }

            #endregion

            #region insert Categories News.

            if (newsMeta.CategoriesNews.Count > 0)
            {
                var resultInsertCategoriesNews = await InsertCategoriesNews();
                if (resultInsertCategoriesNews.Code <= 0)
                    return resultInsertCategoriesNews;
            }

            #endregion

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new news successful."),
                string.Empty, newsId);

            #region Local functions

            async Task<ActionResultResponse<string>> InsertNewsTranslation()
            {
                var apiUrls = _configuration.GetApiUrl();
                if (apiUrls == null)
                    return new ActionResultResponse<string>(-5,
                        _sharedResourceService.GetString(
                            "Missing some configuration. Please contact with administrator."));
                var newsTranslations = new List<NewsTranslation>();
                var newsTags = new List<TagSubjectViewModel>();
                foreach (var newsTranslation in newsMeta.NewsTranslations)
                {
                    // Check name exists.
                    var isNameExists = await _newsTranslationRepository.CheckExists(tenantId, newsId,
                        newsTranslation.LanguageId, newsTranslation.Title);
                    if (isNameExists)
                    {
                        await RollbackInsertNews();
                        return new ActionResultResponse<string>(-1,
                            _websiteResourceService.GetString("News title: \"{0}\" already exists.",
                                newsTranslation.Title));
                    }

                    var newsTranslationInsert = new NewsTranslation
                    {
                        NewsId = newsId,
                        TenantId = tenantId,
                        LanguageId = newsTranslation.LanguageId.Trim(),
                        Title = newsTranslation.Title.Trim(),
                        MetaTitle = newsTranslation.MetaTitle?.Trim(),
                        Description = newsTranslation.Description?.Trim(),
                        MetaDescription = newsTranslation.MetaDescription?.Trim(),
                        MetaKeyword = newsTranslation.MetaKeyword?.Trim(),
                        Content = newsTranslation.Content?.Trim(),
                        SeoLink = newsTranslation.SeoLink?.Trim(),
                        UnsignName = newsTranslation.Title.StripVietnameseChars().ToUpper()
                    };

                    if (!string.IsNullOrEmpty(newsTranslation.SeoLink))
                    {
                        newsTranslationInsert.SeoLink = newsTranslation.SeoLink.ToUrlString();
                    }
                    else
                    {
                        newsTranslationInsert.SeoLink = newsTranslation.Title.ToUrlString();
                    }

                    // Check Seolink exists.
                    var isSeolinkExists = await _newsTranslationRepository.CheckSeoLinkExists(tenantId, newsId,
                        newsTranslation.LanguageId, newsTranslationInsert.SeoLink);
                    if (isSeolinkExists)
                    {
                        await RollbackInsertNews();
                        return new ActionResultResponse<string>(-2,
                            _websiteResourceService.GetString("Seo link: \"{0}\" already exists.",
                                newsTranslationInsert.SeoLink));
                    }

                    newsTranslations.Add(newsTranslationInsert);

                    var newsTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName,
                        CreatorAvata = creatorAvatar,
                        Type = TagType.News,
                        SubjectId = newsId,
                        LanguageId = newsTranslation.LanguageId.Trim(),
                        Tags = newsTranslation.Tags
                    };
                    newsTags.Add(newsTagInsert);
                }

                var resultTag = await new HttpClientService()
                    .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", newsTags);

                var resultTranslation = await _newsTranslationRepository.Inserts(newsTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _websiteResourceService.GetString("Add new news translation successful."));

                await RollbackInsertNewsTranslation();
                await RollbackInsertNews();

                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString(
                        "Can not insert news translation. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertCategoriesNews()
            {
                var categoriesNews = new List<CategoriesNews>();
                foreach (var categories in newsMeta.CategoriesNews)
                {
                    var iscategoriesNewExists =
                        await _categoriesNewsRepository.CheckExistsByNewsIdAndCategoryId(newsId,
                            categories);

                    if (iscategoriesNewExists) continue;
                    var categoriesInsert = new CategoriesNews
                    {
                        NewsId = newsId,
                        CategoryId = categories
                    };

                    var iscategoriesExists = await _categoryRepository.CheckExistsById(tenantId, categories);
                    if (iscategoriesExists)
                    {
                        categoriesNews.Add(categoriesInsert);

                    }
                }
                var resultCategoriesNews = await _categoriesNewsRepository.Inserts(categoriesNews);
                if (resultCategoriesNews > 0)
                    return new ActionResultResponse<string>(resultCategoriesNews,
                        _websiteResourceService.GetString("Add new categories news successful."));

                await RollbackInsertCategoriesNews();
                await RollbackInsertNewsTranslation();
                await RollbackInsertNews();
                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString(
                        "Can not insert categories news. Please contact with administrator."));
            }

            async Task RollbackInsertNews()
            {
                await _newsRepository.ForceDelete(newsId);
            }

            async Task RollbackInsertNewsTranslation()
            {
                await _newsTranslationRepository.Delete(newsId);
            }

            async Task RollbackInsertCategoriesNews()
            {
                await _categoriesNewsRepository.DeleteByNewsId(newsId);
            }
            #endregion Local functions

        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId,
                string lastUpdateFullName, string lastUpdateAvatar, string newsId,
                NewsMeta newsMeta, bool isSend)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<string>(-5,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));
            var newsTags = new List<TagSubjectViewModel>();

            var info = await _newsRepository.GetInfo(newsId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,
                    _websiteResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != newsMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3,
                    _websiteResourceService.GetString(
                        "The news already updated by other people. you are not allowed to edit the news information."));

            info.Status = isSend ? ApproverStatus.Pending : ApproverStatus.Draft;
            info.IsActive = newsMeta.IsActive;
            info.FeatureImage = newsMeta.FeatureImage;
            info.BannerImage = newsMeta.BannerImage;
            info.AltImage = newsMeta.AltImage;
            info.Source = newsMeta.Source;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            info.LastUpdateAvatar = lastUpdateAvatar;
            info.Source = newsMeta.Source;

            if (newsMeta.IsHot.HasValue)
            {
                info.IsHot = newsMeta.IsHot.Value;
                info.LastUpdateIsHot = DateTime.Now;
            }

            if (newsMeta.IsHomePage.HasValue)
            {
                info.IsHomePage = newsMeta.IsHomePage.Value;
                info.LastUpdateIsHomePage = DateTime.Now;
            }

            if (info.Status == ApproverStatus.Approved)
            {
                info.Status = isSend ? ApproverStatus.Pending : ApproverStatus.Draft;
            }

            await _newsRepository.Update(info);

            #region news translation.
            if (newsMeta.NewsTranslations.Count > 0)
            {
                var resultUpdateTranslation = await UpdateNewTranslation();
                if (resultUpdateTranslation.Code <= 0)
                    return resultUpdateTranslation;
            }
            #endregion

            #region CategoriesNews.
            if (newsMeta.CategoriesNews.Count > 0)
            {
                var resultUpdateCategoriesNews = await UpdateCategoriesNews();
                if (resultUpdateCategoriesNews.Code <= 0)
                    return resultUpdateCategoriesNews;
            }
            #endregion

            return new ActionResultResponse(1, _websiteResourceService.GetString("Update news successful."));

            async Task<ActionResultResponse> UpdateNewTranslation()
            {
                foreach (var newsTranslation in newsMeta.NewsTranslations)
                {
                    var isNameExists = await _newsTranslationRepository.CheckExists(tenantId, info.Id,
                        newsTranslation.LanguageId, newsTranslation.Title);
                    if (isNameExists)
                        return new ActionResultResponse(-4, _websiteResourceService.GetString("News name: \"{0}\" already exists."));

                    var newsTranslationInfo =
                        await _newsTranslationRepository.GetInfo(info.Id, newsTranslation.LanguageId);
                    if (newsTranslationInfo != null)
                    {
                        newsTranslationInfo.Title = newsTranslation.Title.Trim();
                        newsTranslationInfo.MetaTitle = newsTranslation.MetaTitle?.Trim();
                        newsTranslationInfo.Description = newsTranslation.Description?.Trim();
                        newsTranslationInfo.MetaDescription = newsTranslation.MetaDescription?.Trim();
                        newsTranslationInfo.MetaKeyword = newsTranslation.MetaKeyword?.Trim();
                        newsTranslationInfo.UnsignName = newsTranslation.Title?.StripVietnameseChars().ToUpper();
                        newsTranslationInfo.Content = newsTranslation.Content?.Trim();

                        if (!string.IsNullOrEmpty(newsTranslation.SeoLink))
                        {
                            newsTranslationInfo.SeoLink = newsTranslation.SeoLink.ToUrlString();
                        }
                        else
                        {
                            newsTranslationInfo.SeoLink = newsTranslation.Title.ToUrlString();
                        }

                        // Check Seolink exists.
                        var isSeolinkExists = await _newsTranslationRepository.CheckSeoLinkExists(tenantId, newsId,
                            newsTranslation.LanguageId, newsTranslationInfo.SeoLink);
                        if (isSeolinkExists)
                        {
                            return new ActionResultResponse(-5,
                                _websiteResourceService.GetString("Seo link: \"{0}\" already exists.",
                                    newsTranslationInfo.SeoLink));
                        }

                        await _newsTranslationRepository.Update(newsTranslationInfo);
                    }
                    else
                    {
                        var newsTranslationInsert = new NewsTranslation
                        {
                            NewsId = newsId,
                            TenantId = tenantId,
                            LanguageId = newsTranslation.LanguageId.Trim(),
                            Title = newsTranslation.Title.Trim(),
                            MetaTitle = newsTranslation.MetaTitle?.Trim(),
                            Description = newsTranslation.Description?.Trim(),
                            MetaDescription = newsTranslation.MetaDescription?.Trim(),
                            MetaKeyword = newsTranslation.MetaKeyword?.Trim(),
                            Content = newsTranslation.Content?.Trim(),
                            UnsignName = newsTranslation.Title?.StripVietnameseChars().ToUpper()
                        };

                        if (!string.IsNullOrEmpty(newsTranslation.SeoLink))
                        {
                            newsTranslationInsert.SeoLink = newsTranslation.SeoLink.ToUrlString();
                        }
                        else
                        {
                            newsTranslationInsert.SeoLink = newsTranslation.Title.ToUrlString();
                        }
                        // Check Seolink exists.
                        var isSeolinkExists = await _newsTranslationRepository.CheckSeoLinkExists(tenantId, newsId,
                            newsTranslation.LanguageId, newsTranslationInsert.SeoLink);
                        if (isSeolinkExists)
                        {
                            return new ActionResultResponse(-6,
                                _websiteResourceService.GetString("Seo link: \"{0}\" already exists.",
                                    newsTranslationInsert.SeoLink));
                        }
                        await _newsTranslationRepository.Insert(newsTranslationInsert);
                    }
                    var videoTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = lastUpdateUserId,
                        CreatorFullName = lastUpdateFullName,
                        CreatorAvata = lastUpdateAvatar,
                        Type = TagType.News,
                        SubjectId = newsId,
                        LanguageId = newsTranslation.LanguageId.Trim(),
                        Tags = newsTranslation.Tags
                    };
                    newsTags.Add(videoTagInsert);
                }

                var resultTag = await new HttpClientService()
                    .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", newsTags);

                return new ActionResultResponse(1,
                    _websiteResourceService.GetString("Update news translation successful."));
            }

            async Task<ActionResultResponse> UpdateCategoriesNews()
            {
                var resultDelete = await _categoriesNewsRepository.DeleteByNewsId(newsId);

                var categoriesNews = new List<CategoriesNews>();
                foreach (var categories in newsMeta.CategoriesNews)
                {
                    var categoriesInsert = new CategoriesNews
                    {
                        NewsId = newsId,
                        CategoryId = categories
                    };

                    var iscategoriesExists = await _categoryRepository.CheckExistsById(tenantId, categories);
                    if (iscategoriesExists)
                    {
                        categoriesNews.Add(categoriesInsert);
                    }
                }
                var resultcategories = await _categoriesNewsRepository.Inserts(categoriesNews);
                if (resultcategories > 0)
                    return new ActionResultResponse(resultcategories,
                        _websiteResourceService.GetString("Update categories news successful."));

                return new ActionResultResponse(-7,
                    _websiteResourceService.GetString("Can not update categories news. Please contact with administrator."));

            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string newsId)
        {
            var info = await _newsRepository.GetInfo(newsId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.Status != ApproverStatus.Draft && info.Status != ApproverStatus.Decline)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News is used. Please try again."));

            var isExistsInMenu =
                await _menuItemRepository.CheckExistsBySubjectId(newsId, SubjectType.News);
            if (isExistsInMenu)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News are being used by menu. You can not delete this news."));

            var result = await _newsRepository.Delete(newsId);
            await _newsTranslationRepository.Delete(newsId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete news successful."));
        }

        public async Task<ActionResultResponse<NewsDetailViewModel>> GetDetail(string tenantId, string userId, string newsId)
        {
            var info = await _newsRepository.GetInfo(newsId);
            if (info == null)
                return new ActionResultResponse<NewsDetailViewModel>(-1, _websiteResourceService.GetString("News does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<NewsDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<NewsDetailViewModel>(-5,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));

            var resultTag = await new HttpClientService()
                .GetAsync<List<SubjectTagViewModel>>($"{apiUrls.CoreApiUrl}/tags/{tenantId}/{newsId}");

            var isApprove = await new HttpClientService()
                .GetAsync<bool>($"{apiUrls.CoreApiUrl}/approver-configs/approve/{tenantId}/{userId}/{(int)ApproverConfigType.News}");

            var newsTranslations = await _newsTranslationRepository.GetByNewsId(newsId);
            var categoriesNews = await _categoriesNewsRepository.GetListNewsIds(newsId);
            var newsDetail = new NewsDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                LikeCount = info.LikeCount,
                CommentCount = info.CommentCount,
                ViewCount = info.ViewCount,
                CreateTime = info.CreateTime,
                CreatorId = info.CreatorId,
                CreatorFullName = info.CreatorFullName,
                CreatorAvatar = info.CreatorAvatar,
                IsActive = info.IsActive,
                FeatureImage = info.FeatureImage,
                BannerImage = info.BannerImage,
                AltImage = info.AltImage,
                Source = info.Source,
                Status = info.Status,
                SentTime = info.SentTime,
                ApprovedTime = info.ApprovedTime,
                ApproverUserId = info.ApproverUserId,
                ApproverFullName = info.ApproverFullName,
                ApproverAvatar = info.ApproverAvatar,
                ApproverComment = info.ApproverComment,
                LastUpdate = info.LastUpdate,
                LastUpdateUserId = info.LastUpdateUserId,
                LastUpdateFullName = info.LastUpdateFullName,
                LastUpdateAvatar = info.LastUpdateAvatar,
                IsHot = info.IsHot,
                LastUpdateIsHot = info.LastUpdateIsHot,
                IsHomePage = info.IsHomePage,
                LastUpdateIsHomePage = info.LastUpdateIsHomePage,
                IsApprove = isApprove,

                NewsTranslations = newsTranslations?.Select(x => new NewsTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Title = x.Title,
                    MetaTitle = x.MetaTitle,
                    UnsignName = x.UnsignName,
                    Description = x.Description,
                    MetaDescription = x.MetaDescription,
                    MetaKeyword = x.MetaKeyword,
                    SeoLink = x.SeoLink,
                    Content = x.Content,
                    Tags = resultTag?.Where(t => t.LanguageId == x.LanguageId).ToList()
                }).ToList(),

                CategoriesNews = categoriesNews,
            };
            return new ActionResultResponse<NewsDetailViewModel>
            {
                Code = 1,
                Data = newsDetail
            };
        }

        public async Task<bool> GetStatusApprove(string tenantId, string userId)
        {
            var apiUrls = _configuration.GetApiUrl();

            var isApprove = await new HttpClientService()
                .GetAsync<bool>($"{apiUrls.CoreApiUrl}/approver-configs/approve/{tenantId}/{userId}/{(int)ApproverConfigType.News}");

            return isApprove;
        }

        public async Task<ActionResultResponse> DeleteListNews(List<string> listNewsId)
        {
            foreach (var newsId in listNewsId)
            {
                var result = await _newsRepository.Delete(newsId);
                if (result < 0)
                    return new ActionResultResponse(result,
                        _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }
            return new ActionResultResponse(1, _websiteResourceService.GetString("Delete news successful."));
        }

        public async Task<ActionResultResponse> ChangeNewsStatus(string tenantId, string userId, string fullName, string avatar, string newsId,
            ApproverStatus status, string declineReason)
        {
            var info = await _newsRepository.GetInfo(newsId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,
                    _websiteResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.Status == ApproverStatus.Approved)
                return new ActionResultResponse(-3,
                    _websiteResourceService.GetString("News has been approved. You can not change status of this news."));

            if (status == ApproverStatus.Decline && string.IsNullOrEmpty(declineReason))
                return new ActionResultResponse(-4,
                    _websiteResourceService.GetString("Please enter decline reason."));

            var oldStatus = info.Status;

            if (status == ApproverStatus.Pending)
            {
                info.Status = ApproverStatus.Pending;
                info.SentTime = DateTime.Now;
            }
            else if (status == ApproverStatus.Approved)
            {
                info.Status = ApproverStatus.Approved;
                info.ApprovedTime = DateTime.Now;
                info.ApproverUserId = userId;
                info.ApproverFullName = fullName;
                info.ApproverAvatar = avatar;
            }
            else if (status == ApproverStatus.Decline)
            {
                info.Status = ApproverStatus.Decline;
                info.ApproverComment = declineReason;
            }

            // Send notification to approver.
            if ((oldStatus == ApproverStatus.Draft || oldStatus == ApproverStatus.Decline)
                && status == ApproverStatus.Pending)
            {
                //await SendNotificationToApprover(tenantId, userId, fullName, avatar, newsId);
            }

            // Send notification to creator.
            if ((oldStatus == ApproverStatus.Pending || oldStatus == ApproverStatus.Decline)
                && (status == ApproverStatus.Approved || status == ApproverStatus.Decline))
            {
                var isApprove = status == ApproverStatus.Approved;
                //SendApproveMessageToCreator(tenantId, userId, fullName, avatar, newsId,
                //    info.CreatorId,
                //    isApprove);
            }

            var result = await _newsRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update status news successful."));
        }

        public async Task<ActionResultResponse> ChangeNewsIsHot(string tenantId, string newsId, bool isHot)
        {
            var info = await _newsRepository.GetInfo(tenantId, newsId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News does not exists."));

            if (info.Status == ApproverStatus.Approved)
                return new ActionResultResponse(-3,
                    _websiteResourceService.GetString("News has been approved. You can not change status is hot of this news."));

            info.IsHot = isHot;
            var result = await _newsRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update status news successful."));
        }

        public async Task<ActionResultResponse> ChangeNewsIsHomePage(string tenantId, string newsId, bool isHomePage)
        {
            var info = await _newsRepository.GetInfo(tenantId, newsId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("News does not exists."));

            if (info.Status == ApproverStatus.Approved)
                return new ActionResultResponse(-3,
                    _websiteResourceService.GetString("News has been approved. You can not change status is hot of this news."));

            info.IsHomePage = isHomePage;
            var result = await _newsRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update status news successful."));
        }

        public async Task<List<ActionResultResponse>> ChangeListNewsStatus(string tenantId, List<string> listnewsId, ApproverStatus status, string declineReason, string userId,
            string fullName, string avatar)
        {
            var listResult = new List<ActionResultResponse>();
            foreach (var newsId in listnewsId)
            {
                var result = await ChangeNewsStatus(tenantId, userId, fullName, avatar, newsId,
                    status, declineReason);
                listResult.Add(result);
            }
            return listResult;
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsHomePage(string tenantId, string languageId, int selectTop)
        {
            return await _newsRepository.GetListTopNewsHomePage(tenantId, languageId, selectTop);
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsNewest(string tenantId, string languageId, int selectTop)
        {
            return await _newsRepository.GetListTopNewsNewest(tenantId, languageId, selectTop);
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsHot(string tenantId, string languageId, int selectTop)
        {
            return await _newsRepository.GetListTopNewsHot(tenantId, languageId, selectTop);
        }

        public async Task<SearchResult<NewsSearchClientViewModel>> GetNewsByCategorySeoLink(string tenantId, string languageId, string seoLink, int page, int pageSize)
        {
            var items = await _newsRepository.GetNewsByCategorySeoLink(tenantId, languageId, seoLink, page, pageSize, out var totalRows);
            return new SearchResult<NewsSearchClientViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsRelated(string tenantId, string languageId,
            string seoLink, int selectTop)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null) return new List<NewsSearchClientViewModel>();

            var newsId = await _newsTranslationRepository.GetNewsIdBySeoLink(tenantId, languageId, seoLink);

            var resultNews = await new HttpClientService()
                     .GetAsync<List<string>>($"{apiUrls.CoreApiUrl}/tags/{tenantId}/{languageId}/{(int)TagType.News}/{newsId}");
            return await _newsRepository.GetListTopNewsRelated(tenantId, languageId, resultNews, selectTop);

        }

        public async Task<NewsClientViewModel> GetClient(string tenantId, string languageId, string seoLink)
        {
            return await _newsRepository.GetClient(tenantId, languageId, seoLink);
        }

        public async Task<SearchResult<string>> GetAllNewsSeoLinkForSiteMap(string tenantId, string languageId)
        {
            return new SearchResult<string>
            {
                Items = await _newsRepository.GetAllNewsSeoLinkForSiteMap(tenantId, languageId),
            };
        }

        public async Task<SearchResult<CategoryWidthNewsViewModel>> GetCategoryWidthNews(string tenantId, string languageId, string seoLink, int selectTop,
            bool isHomePage, bool isParent)
        {
            if (isParent)
            {
                var categoryInfo = await _categoryTranslationRepository.GetActiveBySeoLink(tenantId, languageId, seoLink);
                if (categoryInfo == null)
                    return new SearchResult<CategoryWidthNewsViewModel>
                    {
                        Items = null,
                    };

                return new SearchResult<CategoryWidthNewsViewModel>
                {
                    Items = await _newsRepository.GetCategoryWidthNews(tenantId, languageId, categoryInfo.CategoryId, selectTop, isHomePage),
                };
            }

            return new SearchResult<CategoryWidthNewsViewModel>
            {
                Items = await _newsRepository.GetCategoryWidthNews(tenantId, languageId, -1, selectTop, isHomePage),
            };
        }

        private async Task SendNotificationToApprover(string tenantId, string creatorId, string creatorFullName,
          string creatorAvatar,
          string newsId)
        {
            // Check if is send. Send news to approve for approve.
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls != null)
            {
                var listApprover = await new HttpClientService()
                    .GetAsync<List<ApproverConfigViewModel>>($"{apiUrls.CoreApiUrl}/approver-configs/search/{tenantId}/{(int)ApproverConfigType.News}");

                if (listApprover != null && listApprover.Any())
                {
                    var notificationHelper = new NotificationHelper();
                    foreach (var approver in listApprover)
                    {
                        var notificationEvent = new NotificationEvent
                        {
                            TenantId = tenantId,
                            Title = $"<b>{creatorFullName}</b> {{send a news to you for approve.}}",
                            Content = "",
                            SenderId = creatorId,
                            SenderFullName = creatorFullName,
                            SenderAvatar = creatorAvatar,
                            Url = $"/news/detail/{newsId}",
                            ReceiverId = approver.UserId,
                            Type = NotificationType.Info,
                            IsSystem = false
                        };

                        notificationHelper.Send(notificationEvent);
                    }
                }
            }
        }

        private void SendApproveMessageToCreator(string tenantId, string senderId, string senderFullName, string senderAvatar,
            string newsId, string receiverId, bool isApprove)
        {
            // TODO: Update for send with rabbitMQ later.
            var message = $"<b>{senderFullName}</b> {{{(isApprove ? "approved" : "declined")} your news.}}";
            var notification = new NotificationEvent
            {
                TenantId = tenantId,
                Title = message,
                Content = "",
                SenderId = senderId,
                SenderFullName = senderFullName,
                SenderAvatar = senderAvatar,
                Url = $"/news/detail/{newsId}",
                ReceiverId = receiverId,
                Type = NotificationType.Info,
                IsSystem = false
            };
            new NotificationHelper().Send(notification);
        }

        public async Task<SearchResult<NewsSearchClientViewModel>> GetNewsByCategoryIdAsync(string tenantId, string languageId, string categoryId, int page, int pageSize)
        {
            var items = await _newsRepository.GetNewsByCategoryId(tenantId, languageId, categoryId, page, pageSize, out int totalRows);
            return new SearchResult<NewsSearchClientViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<NewsDetailForClientViewModel> GetDetailForClient(string teantId, string newsId, string languageId)
        {
            return await _newsRepository.GetDetailForClient(teantId, newsId, languageId);
        }
    }
}
