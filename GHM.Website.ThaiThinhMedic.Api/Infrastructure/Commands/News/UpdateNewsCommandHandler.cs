using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.News
{
    public class UpdateNewsCommand : IRequest<ActionResultResponse>
    {
        public int Id { get; set; }
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

    public class UpdateNewsCommandHandler : IRequestHandler<UpdateNewsCommand, ActionResultResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly INewsRepository _newsRepository;
        private readonly INewsCategoryRepository _newsCategoryRepository;

        public UpdateNewsCommandHandler(INewsRepository newsRepository, ICategoryRepository categoryRepository, INewsCategoryRepository newsCategoryRepository)
        {
            _newsRepository = newsRepository;
            _categoryRepository = categoryRepository;
            _newsCategoryRepository = newsCategoryRepository;
        }

        public async Task<ActionResultResponse> Handle(UpdateNewsCommand request, CancellationToken cancellationToken)
        {
            if (!request.CategoryIds.Any())
                return new ActionResultResponse(-1, "Vui lòng chọn ít nhất một chuyên mục.");

            var newsInfo = await _newsRepository.GetInfo(request.Id);
            if (newsInfo == null)
                return new ActionResultResponse(-2, $"Thông tin tin tức: \"{request.Title}\" không tồn tại. Vui lòng kiểm tra lại.");

            newsInfo.Title = request.Title.Trim();
            newsInfo.Attachments = request.Attachments?.Trim();
            newsInfo.Content = request.Content.Trim();
            newsInfo.Description = request.Description.Trim();
            newsInfo.Image = request.Image?.Trim();
            newsInfo.IsActive = request.IsActive;
            newsInfo.IsHomePage = request.IsHomePage;
            newsInfo.IsHot = request.IsHot;
            newsInfo.Priority = request.Priority;
            newsInfo.Source = request.Source?.Trim();
            newsInfo.UnsignName = request.Title.StripVietnameseChars().ToUpper().Trim();
            newsInfo.SeoLink = newsInfo.Title.ToUrlString().ToLower();
            var resultUpdateNews = await _newsRepository.Update(newsInfo);
            if (resultUpdateNews.Code <= 0)
                return resultUpdateNews;

            // Update category.
            await _newsCategoryRepository.DeleteByNewsId(request.Id);

            // Insert new news category.
            var listNewsCategory = new List<NewsCategory>();
            foreach (var categoryId in request.CategoryIds)
            {
                var categoryInfo = await _categoryRepository.GetInfo(categoryId);
                if (categoryInfo == null)
                    continue;

                var newsCategory = new NewsCategory(request.Id, newsInfo.SeoLink, categoryId, categoryInfo.SeoLink, categoryInfo.Name, categoryInfo.IsActive);
                listNewsCategory.Add(newsCategory);
            }

            await _newsCategoryRepository.Inserts(listNewsCategory);
            return new ActionResultResponse(1, $"Cập nhật thông tin tức: \"{newsInfo.Title}\" thành công.");
        }
    }
}
