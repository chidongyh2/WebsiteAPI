using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Infrastructure.Repository
{
    public class NewsRepository : RepositoryBase, INewsRepository
    {
        private readonly IRepository<News> _newsRepository;
        public NewsRepository(IDbContext context) : base(context)
        {
            _newsRepository = Context.GetRepository<News>();
        }

        public Task<List<NewsViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId, string creatorId, string currentUserId,
            ApproverStatus? status, int page, int pageSize, bool isApprove, out int totalRows)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete;
            Expression<Func<CategoriesNews, bool>> specCategory = x => true;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isApprove)
            {
                spec = spec.And(x => x.CreatorId == currentUserId || (x.Status != ApproverStatus.Draft && x.CreatorId != currentUserId));
            }
            else
            {
                spec = spec.And(x => x.CreatorId == currentUserId || (x.Status == ApproverStatus.Approved && x.CreatorId != currentUserId));
            }

            if (!string.IsNullOrEmpty(creatorId) && creatorId != currentUserId)
            {
                spec = spec.And(x => x.CreatorId == creatorId && ((isApprove && x.Status != ApproverStatus.Draft) || (!isApprove && x.Status == ApproverStatus.Approved)));
            }

            if (status.HasValue)
            {
                spec = spec.And(x => x.Status == status.Value);
            }

            if (categoryId.HasValue)
            {
                specCategory = specCategory.And(x => x.CategoryId == categoryId);
            }

            var query = from news in Context.Set<News>().Where(spec)
                        join category in Context.Set<CategoriesNews>().Where(specCategory) on news.Id equals category.NewsId
                        join categoryTranslation in Context.Set<CategoryTranslation>().Where(x => !x.IsDelete && x.LanguageId == languageId && x.TenantId == tenantId) on category.CategoryId equals categoryTranslation.CategoryId
                        join newsTranslation in Context.Set<NewsTranslation>().Where(specTranslation) on news.Id equals newsTranslation.NewsId
                        select (new
                        {
                            news.Id,
                            news.LikeCount,
                            news.CommentCount,
                            news.ViewCount,
                            news.CreateTime,
                            news.CreatorId,
                            news.CreatorFullName,
                            news.IsActive,
                            news.FeatureImage,
                            news.Source,
                            news.Status,
                            news.LastUpdate,
                            news.IsHot,
                            news.IsHomePage,
                            newsTranslation.Title,
                            CategoryName = categoryTranslation.Name
                        });

            var result = query.GroupBy(x => new
            {
                x.Id,
                x.LikeCount,
                x.CommentCount,
                x.ViewCount,
                x.CreateTime,
                x.CreatorId,
                x.CreatorFullName,
                x.IsActive,
                x.FeatureImage,
                x.Source,
                x.Status,
                x.LastUpdate,
                x.IsHot,
                x.IsHomePage,
                x.Title,
            }, (key, g) => new NewsViewModel
            {
                Id = key.Id,
                LikeCount = key.LikeCount,
                CommentCount = key.CommentCount,
                ViewCount = key.ViewCount,
                CreateTime = key.CreateTime,
                CreatorId = key.CreatorId,
                CreatorFullName = key.CreatorFullName,
                IsActive = key.IsActive,
                FeatureImage = key.FeatureImage,
                Source = key.Source,
                Status = key.Status,
                LastUpdate = key.LastUpdate,
                IsHot = key.IsHot,
                IsHomePage = key.IsHomePage,
                Title = key.Title,
                CategoriesNames = g.Select(x => x.CategoryName).ToList()
            });

            totalRows = result.Count();

            return result.OrderByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<NewSearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int? categoryId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (categoryId.HasValue)
            {
                var queryNews = Context.Set<News>().Where(spec)
                .Join(Context.Set<CategoriesNews>().Where(x => x.CategoryId == categoryId), news => news.Id, category => category.NewsId, (news, category) => new
                {
                    news.Id,
                    news.LastUpdate,
                    news.FeatureImage
                })
                .Join(Context.Set<NewsTranslation>().Where(specTranslation),
                    newsCategory => newsCategory.Id,
                    newsTranslation => newsTranslation.NewsId,
                    (newsCategory, newsTranslation) => new NewSearchForSelectViewModel
                    {
                        Id = newsCategory.Id,
                        LastUpdate = newsCategory.LastUpdate,
                        LanguageId = languageId,
                        Title = newsTranslation.Title,
                        FeatureImage = newsCategory.FeatureImage,
                        SeoLink = newsTranslation.SeoLink,
                    }).AsNoTracking();

                totalRows = queryNews.Count();

                return queryNews
                    .OrderByDescending(x => x.LastUpdate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();
            }

            var query = Context.Set<News>().Where(spec)
                .Join(Context.Set<NewsTranslation>().Where(specTranslation),
                    newsCategory => newsCategory.Id,
                    newsTranslation => newsTranslation.NewsId,
                    (newsCategory, newsTranslation) => new NewSearchForSelectViewModel
                    {
                        Id = newsCategory.Id,
                        LastUpdate = newsCategory.LastUpdate,
                        LanguageId = languageId,
                        Title = newsTranslation.Title,
                        FeatureImage = newsCategory.FeatureImage,
                        SeoLink = newsTranslation.SeoLink,
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(News news)
        {
            _newsRepository.Create(news);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(News news)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string newsId)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string newsId)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            _newsRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateLikeCount(string newsId, int likeCount)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.LikeCount = likeCount;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateCommentCount(string newsId, int commentCount)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.CommentCount = commentCount;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateViewCount(string newsId, int viewCount)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.ViewCount = viewCount;
            return await Context.SaveChangesAsync();
        }

        public async Task<News> GetInfo(string newsId, bool isReadonly = false)
        {
            return await _newsRepository.GetAsync(isReadonly, x => x.Id == newsId && !x.IsDelete);
        }

        public async Task<News> GetInfo(string tenantId, string newsId, bool isReadonly = false)
        {
            return await _newsRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == newsId && !x.IsDelete);
        }

        public async Task<List<NewsViewModel>> GetAllNewsByApproverUserId(string tenantId, string approverUserId, string languageId)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete;
            if (!string.IsNullOrEmpty(approverUserId))
            {
                spec = spec.And(x => x.ApproverUserId == approverUserId);
            }

            var query = Context.Set<News>().AsNoTracking().Where(spec)
                .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                    news => news.Id,
                    newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                        new NewsViewModel
                        {
                            Id = news.Id,
                            ConcurrencyStamp = news.ConcurrencyStamp,
                            LikeCount = news.LikeCount,
                            CommentCount = news.CommentCount,
                            ViewCount = news.ViewCount,
                            CreateTime = news.CreateTime,
                            CreatorFullName = news.CreatorFullName,
                            IsActive = news.IsActive,
                            FeatureImage = news.FeatureImage,
                            Source = news.Source,
                            Status = news.Status,
                            LastUpdate = news.LastUpdate,
                            IsHot = news.IsHot,
                            IsHomePage = news.IsHomePage,
                            Title = newsTranslation.Title,
                        });

            return await query.ToListAsync();
        }

        public async Task<int> UpdateNewsStatus(string newsId, ApproverStatus approverStatus)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.Status = approverStatus;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateNewsIsHot(string newsId, bool isHot)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.IsHot = isHot;
            info.LastUpdateIsHot = DateTime.Now;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateNewsIsHomePage(string newsId, bool isHomePage)
        {
            var info = await GetInfo(newsId);
            if (info == null)
                return -1;

            info.IsHomePage = isHomePage;
            info.LastUpdateIsHomePage = DateTime.Now;
            return await Context.SaveChangesAsync();
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsHomePage(string tenantId, string languageId, int selectTop)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.IsHomePage.Value && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete;
            var query = Context.Set<News>().AsNoTracking().Where(spec)
                 .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                     news => news.Id,
                     newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                         new NewsSearchClientViewModel
                         {
                             Id = news.Id,
                             FeatureImage = news.FeatureImage,
                             AltImage = news.AltImage,
                             Source = news.Source,
                             Title = newsTranslation.Title,
                             MetaTitle = newsTranslation.MetaTitle,
                             Description = newsTranslation.Description,
                             SeoLink = newsTranslation.SeoLink,
                             LastUpdate = news.LastUpdate,
                             IsHot = news.IsHot,
                             LikeCount = news.LikeCount,
                             ViewCount = news.ViewCount,
                             CommentCount = news.CommentCount
                         });

            return await query
                .OrderByDescending(x => x.LastUpdate)
                .Take(selectTop)
                .ToListAsync();
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsHot(string tenantId, string languageId, int selectTop)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.IsHot.Value && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete;
            var query = Context.Set<News>().AsNoTracking().Where(spec)
                .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                    news => news.Id,
                    newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                        new NewsSearchClientViewModel
                        {
                            Id = news.Id,
                            FeatureImage = news.FeatureImage,
                            AltImage = news.AltImage,
                            Source = news.Source,
                            IsHot = news.IsHot,
                            Title = newsTranslation.Title,
                            MetaTitle = newsTranslation.MetaTitle,
                            Description = newsTranslation.Description,
                            SeoLink = newsTranslation.SeoLink,
                            LastUpdate = news.LastUpdate
                        });

            return await query
                .OrderByDescending(x => x.LastUpdate)
                .Take(selectTop)
                .ToListAsync();
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsNewest(string tenantId, string languageId, int selectTop)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete;
            var query = Context.Set<News>().AsNoTracking().Where(spec)
                .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                    news => news.Id,
                    newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                        new NewsSearchClientViewModel
                        {
                            Id = news.Id,
                            FeatureImage = news.FeatureImage,
                            AltImage = news.AltImage,
                            Source = news.Source,
                            Title = newsTranslation.Title,
                            MetaTitle = newsTranslation.MetaTitle,
                            Description = newsTranslation.Description,
                            SeoLink = newsTranslation.SeoLink,
                            LikeCount = news.LikeCount,
                            CommentCount = news.CommentCount,
                            ViewCount = news.ViewCount,
                            LastUpdate = news.LastUpdate
                        });

            return await query
                .OrderByDescending(x => x.LastUpdate)
                .Take(selectTop)
                .ToListAsync();
        }

        public Task<List<NewsSearchClientViewModel>> GetNewsByCategorySeoLink(string tenantId, string languageId, string seoLink, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CategoryTranslation, bool>> speccnTranslation = x => x.SeoLink == seoLink && !x.IsDelete && x.LanguageId == languageId && x.TenantId == tenantId;
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete && x.TenantId == tenantId;

            var query = Context.Set<CategoryTranslation>().Where(speccnTranslation)
                .Join(Context.Set<CategoriesNews>(), ct => ct.CategoryId, cn => cn.CategoryId, (ct, cn) => new { ct.CategoryId, cn.NewsId })
                .Join(Context.Set<News>().Where(spec),
                    ctn => ctn.NewsId,
                    n => n.Id,
                    (ctn, n) => new { n, ctn })
                    .Join(Context.Set<NewsTranslation>().Where(specTranslation),
                    ncn => ncn.n.Id,
                    nt => nt.NewsId,
                    (ncn, nt) => new NewsSearchClientViewModel
                    {
                        Id = ncn.n.Id,
                        LikeCount = ncn.n.LikeCount,
                        CommentCount = ncn.n.CommentCount,
                        ViewCount = ncn.n.ViewCount,
                        FeatureImage = ncn.n.FeatureImage,
                        AltImage = ncn.n.AltImage,
                        Source = ncn.n.Source,
                        Title = nt.Title,
                        MetaTitle = nt.MetaTitle,
                        Description = nt.Description,
                        SeoLink = nt.SeoLink,
                        LastUpdate = ncn.n.LastUpdate,
                        CreateTime = ncn.n.CreateTime
                    }
                ).AsNoTracking();
            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.LastUpdate)
                .ThenByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsRelated(string tenantId, string languageId, List<string> newsIds, int selectTop)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved && newsIds.Contains(x.Id);
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete;
            var query = Context.Set<News>().AsNoTracking().Where(spec)
                .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                    news => news.Id,
                    newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                        new NewsSearchClientViewModel
                        {
                            Id = news.Id,
                            FeatureImage = news.FeatureImage,
                            AltImage = news.AltImage,
                            Source = news.Source,
                            Title = newsTranslation.Title,
                            MetaTitle = newsTranslation.MetaTitle,
                            Description = newsTranslation.Description,
                            SeoLink = newsTranslation.SeoLink,
                            LastUpdate = news.LastUpdate,
                            CreateTime = news.CreateTime
                        });

            return await query
                .OrderByDescending(x => x.LastUpdate)
                .ThenByDescending(x => x.CreateTime)
                .Take(selectTop)
                .ToListAsync();
        }

        public async Task<NewsClientViewModel> GetClient(string tenantId, string languageId, string seoLink)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete && x.SeoLink == seoLink;
            var query = Context.Set<News>().AsNoTracking().Where(spec)
                .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                    news => news.Id,
                    newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                        new NewsClientViewModel
                        {
                            Id = news.Id,
                            LikeCount = news.LikeCount,
                            CommentCount = news.CommentCount,
                            ViewCount = news.ViewCount,
                            CreateTime = news.CreateTime,
                            FeatureImage = news.FeatureImage,
                            BannerImage = news.BannerImage,
                            AltImage = news.AltImage,
                            Source = news.Source,
                            LastUpdate = news.LastUpdate,
                            IsHot = news.IsHot,
                            LastUpdateIsHot = news.LastUpdateIsHot,
                            IsHomePage = news.IsHomePage,
                            LastUpdateIsHomePage = news.LastUpdateIsHomePage,
                            Title = newsTranslation.Title,
                            MetaTitle = newsTranslation.MetaTitle,
                            UnsignName = newsTranslation.UnsignName,
                            Description = newsTranslation.Description,
                            MetaDescription = newsTranslation.MetaDescription,
                            MetaKeyword = newsTranslation.MetaKeyword,
                            SeoLink = newsTranslation.SeoLink,
                            Content = newsTranslation.Content
                        });
            return await query.SingleOrDefaultAsync();
        }

        public async Task<List<string>> GetAllNewsSeoLinkForSiteMap(string tenantId, string languageId)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete;
            var query = Context.Set<News>().AsNoTracking().Where(spec)
                .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
                    news => news.Id,
                    newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
                      newsTranslation.SeoLink);

            return query.AsNoTracking().ToList();
        }

        public Task<List<CategoryWidthNewsViewModel>> GetCategoryWidthNews(string tenantId, string languageId, int categoryId, int selectTop, bool isHomePage)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete;
            Expression<Func<Category, bool>> specCate = x => x.TenantId == tenantId && x.IsActive && !x.IsDelete;
            Expression<Func<CategoryTranslation, bool>> specCategoryTranslation = x => !x.IsDelete && x.LanguageId == languageId && x.TenantId == tenantId;

            if (isHomePage)
            {
                specCate = specCate.And(x => x.IsHomePage.Value);
                spec = spec.And(x => x.IsHomePage.Value);
            }

            if (categoryId > 0)
            {
                specCate = specCate.And(x => x.ParentId == categoryId);
            }

            var result = from category in Context.Set<Category>().Where(specCate)
                         join categoryTranslation in Context.Set<CategoryTranslation>().Where(specCategoryTranslation) on category.Id equals categoryTranslation.CategoryId
                         join categoryNews in Context.Set<CategoriesNews>() on category.Id equals categoryNews.CategoryId
                         join news in Context.Set<News>().Where(spec) on categoryNews.NewsId equals news.Id
                         join newsTranslation in Context.Set<NewsTranslation>().Where(specTranslation) on news.Id equals newsTranslation.NewsId
                         group new { news, newsTranslation } by new { category.Id, categoryTranslation.Name, categoryTranslation.SeoLink, category.Order, categoryTranslation.Description} into g
                         select new CategoryWidthNewsViewModel
                         {
                             CategoryId = g.Key.Id,
                             CategoryName = g.Key.Name,
                             SeoLink = g.Key.SeoLink,
                             Order = g.Key.Order,
                             Description = g.Key.Description,
                             ListNews = g.Select(x => new NewsSearchClientViewModel
                             {
                                 Id = x.news.Id,
                                 AltImage = x.news.AltImage,
                                 FeatureImage = x.news.FeatureImage,
                                 CreateTime = x.news.CreateTime,
                                 LastUpdate = x.news.LastUpdate,
                                 IsHot = x.news.IsHot,
                                 Source = x.news.Source,
                                 SeoLink = x.newsTranslation.SeoLink,
                                 Title = x.newsTranslation.Title,
                                 MetaTitle = x.newsTranslation.MetaTitle,
                                 Description = x.newsTranslation.Description,
                             }).OrderByDescending(x => x.LastUpdate).Take(selectTop).ToList()
                         };

            return result.OrderBy(x => x.Order).AsNoTracking().ToListAsync();
        }

        public Task<List<NewsSearchClientViewModel>> GetNewsByCategoryId(string tenantId, string languageId, string categoryId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Category, bool>> specCategory = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Id == int.Parse(categoryId);
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.LanguageId == languageId && !x.IsDelete && x.TenantId == tenantId;
            //var query = Context.Set<CategoryTranslation>().Where(speccnTranslation)
            //    .Join(Context.Set<CategoriesNews>(), ct => ct.CategoryId, cn => cn.CategoryId, (ct, cn) => new { ct.CategoryId, cn.NewsId })
            //    .Join(Context.Set<News>().Where(spec),
            //        ctn => ctn.NewsId,
            //        n => n.Id,
            //        (ctn, n) => new { n, ctn })
            //        .Join(Context.Set<NewsTranslation>().Where(specTranslation),
            //        ncn => ncn.n.Id,
            //        nt => nt.NewsId,
            //        (ncn, nt) => new NewsSearchClientViewModel
            //        {
            //            Id = ncn.n.Id,
            //            LikeCount = ncn.n.LikeCount,
            //            CommentCount = ncn.n.CommentCount,
            //            ViewCount = ncn.n.ViewCount,
            //            FeatureImage = ncn.n.FeatureImage,
            //            AltImage = ncn.n.AltImage,
            //            Source = ncn.n.Source,
            //            Title = nt.Title,
            //            MetaTitle = nt.MetaTitle,
            //            Description = nt.Description,
            //            SeoLink = nt.SeoLink,
            //            LastUpdate = ncn.n.LastUpdate,
            //            CreateTime = ncn.n.CreateTime
            //        }
            //    ).AsNoTracking();
            //totalRows = query.Count();
            var result = from category in Context.Set<Category>().Where(specCategory)
                         join categoryNews in Context.Set<CategoriesNews>() on category.Id equals categoryNews.CategoryId
                         join news in Context.Set<News>().Where(spec) on categoryNews.NewsId equals news.Id
                         join newsTranslation in Context.Set<NewsTranslation>().Where(specTranslation) on news.Id equals newsTranslation.NewsId
                         select new NewsSearchClientViewModel
                         { 
                                 Id = news.Id,
                                 AltImage = news.AltImage,
                                 FeatureImage = news.FeatureImage,
                                 CreateTime = news.CreateTime,
                                 LastUpdate =news.LastUpdate,
                                 IsHot = news.IsHot,
                                 Source = news.Source,
                                 SeoLink = newsTranslation.SeoLink,
                                 Title = newsTranslation.Title,
                                 MetaTitle = newsTranslation.MetaTitle,
                                 Description = newsTranslation.Description
                         };
            totalRows = result.Count();
            return  result.OrderByDescending(x => x.LastUpdate).Skip((page -1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<NewsDetailForClientViewModel> GetDetailForClient(string teantId, string newsId, string languageId)
        {
            Expression<Func<News, bool>> specn = x => x.TenantId == teantId && x.Id == newsId && !x.IsDelete && x.IsActive;
            Expression<Func<NewsTranslation, bool>> spect = x => x.TenantId == teantId && x.NewsId == newsId && x.LanguageId == languageId;

            var query = Context.Set<News>().Where(specn)
                .Join(Context.Set<NewsTranslation>().Where(spect), n => n.Id, nt => nt.NewsId,
                (n, nt) => new NewsDetailForClientViewModel
                {
                    Id = n.Id,
                    AltImage = n.AltImage,
                    CommentCount = n.CommentCount,
                    CreateTime = n.CreateTime,
                    Description = nt.Description,
                    FeatureImage = n.FeatureImage,
                    IsHot = n.IsHot,
                    LastUpdate = n.LastUpdate,
                    LikeCount = n.LikeCount,
                    MetaTitle = nt.MetaTitle,
                    SeoLink = nt.SeoLink,
                    Source = n.Source,
                    Title = nt.Title,
                    BannerImage = n.BannerImage,
                    Content = nt.Content,
                    IsHomePage = n.IsHomePage,
                    LastUpdateIsHomePage = n.LastUpdateIsHomePage,
                    LastUpdateIsHot = n.LastUpdateIsHot,
                    MetaDescription = nt.MetaDescription,
                    MetaKeyword = nt.MetaKeyword,
                    UnsignName = nt.UnsignName,
                    ViewCount = n.ViewCount

                });
            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<NewsSearchClientViewModel>> GetListNewsRelated(string tenantId, string languageId, string newsId, int pageSize)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved && x.Id != newsId;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete;

            var listCategoryId = Context.Set<CategoriesNews>().Where(x => x.NewsId == newsId).Select(r => r.CategoryId).ToList();

            //var query = Context.Set<News>().AsNoTracking().Where(spec)
            //    .Join(Context.Set<NewsTranslation>().AsNoTracking().Where(specTranslation),
            //        news => news.Id,
            //        newsTranslation => newsTranslation.NewsId, (news, newsTranslation) =>
            //            new NewsSearchClientViewModel
            //            {
            //                Id = news.Id,
            //                FeatureImage = news.FeatureImage,
            //                AltImage = news.AltImage,
            //                Source = news.Source,
            //                Title = newsTranslation.Title,
            //                MetaTitle = newsTranslation.MetaTitle,
            //                Description = newsTranslation.Description,
            //                SeoLink = newsTranslation.SeoLink,
            //                LastUpdate = news.LastUpdate,
            //                CreateTime = news.CreateTime
            //            });
            var query = from cn in Context.Set<CategoriesNews>().Where(x => listCategoryId.Contains(x.CategoryId))
                        join n in Context.Set<News>().Where(spec) on cn.NewsId equals n.Id
                        join nt in Context.Set<NewsTranslation>().Where(specTranslation) on n.Id equals nt.NewsId
                        select new NewsSearchClientViewModel
                        {
                            Id = n.Id,
                            FeatureImage = n.FeatureImage,
                            AltImage = n.AltImage,
                            Source = n.Source,
                            Title = nt.Title,
                            MetaTitle = nt.MetaTitle,
                            Description = nt.Description,
                            SeoLink = nt.SeoLink,
                            LastUpdate = n.LastUpdate,
                            CreateTime = n.CreateTime
                        };
            return await query
                .OrderByDescending(x => x.LastUpdate)
                .ThenByDescending(x => x.CreateTime)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<CategoryWidthNewsViewModel> GetCategoryWithNews(string tenantId, string languageId, int categoryId, int selectTop, bool isHomePage)
        {
            Expression<Func<News, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<NewsTranslation, bool>> specTranslation = x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete;
            Expression<Func<Category, bool>> specCate = x => x.TenantId == tenantId && x.IsActive && !x.IsDelete;
            Expression<Func<CategoryTranslation, bool>> specCategoryTranslation = x => !x.IsDelete && x.LanguageId == languageId && x.TenantId == tenantId;

            if (isHomePage)
            {
                specCate = specCate.And(x => x.IsHomePage.Value);
                spec = spec.And(x => x.IsHomePage.Value);
            }

            if (categoryId > 0)
            {
                specCate = specCate.And(x => x.Id == categoryId);
            }

            var result = from category in Context.Set<Category>().Where(specCate)
                         join categoryTranslation in Context.Set<CategoryTranslation>().Where(specCategoryTranslation) on category.Id equals categoryTranslation.CategoryId
                         join categoryNews in Context.Set<CategoriesNews>() on category.Id equals categoryNews.CategoryId
                         join news in Context.Set<News>().Where(spec) on categoryNews.NewsId equals news.Id
                         join newsTranslation in Context.Set<NewsTranslation>().Where(specTranslation) on news.Id equals newsTranslation.NewsId
                         group new { news, newsTranslation } by new { category.Id, categoryTranslation.Name, categoryTranslation.SeoLink, category.Order, categoryTranslation.Description } into g
                         select new CategoryWidthNewsViewModel
                         {
                             CategoryId = g.Key.Id,
                             CategoryName = g.Key.Name,
                             SeoLink = g.Key.SeoLink,
                             Order = g.Key.Order,
                             Description = g.Key.Description,
                             ListNews = g.Select(x => new NewsSearchClientViewModel
                             {
                                 Id = x.news.Id,
                                 AltImage = x.news.AltImage,
                                 FeatureImage = x.news.FeatureImage,
                                 CreateTime = x.news.CreateTime,
                                 LastUpdate = x.news.LastUpdate,
                                 IsHot = x.news.IsHot,
                                 Source = x.news.Source,
                                 SeoLink = x.newsTranslation.SeoLink,
                                 Title = x.newsTranslation.Title,
                                 MetaTitle = x.newsTranslation.MetaTitle,
                                 Description = x.newsTranslation.Description,
                             }).OrderByDescending(x => x.LastUpdate).Take(selectTop).ToList()
                         };

            return result.OrderBy(x => x.Order).AsNoTracking().FirstOrDefaultAsync();
        }
    }
}
