using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.News
{
    public class CreateNewsCommand : IRequest<ActionResultResponse>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorImage { get; set; }
        public string Source { get; set; }
        public bool IsActive { get; set; }
        public string Attachments { get; set; }
        public string Image { get; set; }
        public bool IsHot { get; set; }
        public bool IsHomePage { get; set; }
        public int? Priority { get; set; }
        public List<int> CategoryIds { get; set; }        
    }

    public class CreateNewsCommandHandler : IRequestHandler<CreateNewsCommand, ActionResultResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly INewsRepository _newsRepository;
        private readonly INewsCategoryRepository _newsCategoryRepository;

        public CreateNewsCommandHandler(ICategoryRepository categoryRepository, INewsRepository newsRepository, INewsCategoryRepository newsCategoryRepository)
        {
            _categoryRepository = categoryRepository;
            _newsRepository = newsRepository;
            _newsCategoryRepository = newsCategoryRepository;
        }

        public async Task<ActionResultResponse> Handle(CreateNewsCommand request, CancellationToken cancellationToken)
        {
            if (request.CategoryIds == null || !request.CategoryIds.Any())
                return new ActionResultResponse(-1, "Vui lòng chọn ít nhất một chuyên mục.");

            // Insert new news.
            var news = new Models.News(request.Title, request.Description, request.Content, request.Source, request.CreatorId, request.CreatorFullName, request.CreatorImage,
                request.IsActive, request.Attachments, request.Image, request.IsHot, request.Priority);
            var resultInsertNews = await _newsRepository.Insert(news);
            if (resultInsertNews.Code <= 0)
                return resultInsertNews;

            // Insert new news category.
            var listNewsCategory = new List<NewsCategory>();
            foreach (var categoryId in request.CategoryIds)
            {
                var categoryInfo = await _categoryRepository.GetInfo(categoryId);
                if (categoryInfo == null)
                    continue;

                var newsCategory = new NewsCategory(news.Id, news.SeoLink, categoryId, categoryInfo.SeoLink, categoryInfo.Name, categoryInfo.IsActive);
                listNewsCategory.Add(newsCategory);
            }

            await _newsCategoryRepository.Inserts(listNewsCategory);
            return new ActionResultResponse(1, $"Thêm mới tin tức: \"{request.Title.Trim()}\" thành công.");
        }
    }
}
