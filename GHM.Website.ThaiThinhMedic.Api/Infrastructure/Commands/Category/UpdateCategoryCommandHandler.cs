using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Category
{
    public class UpdateCategoryCommand : IRequest<ActionResultResponse>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public string Image { get; set; }
    }

    public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, ActionResultResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly INewsCategoryRepository _newsCategoryRepository;

        public UpdateCategoryCommandHandler(ICategoryRepository categoryRepository, INewsCategoryRepository newsCategoryRepository)
        {
            _categoryRepository = categoryRepository;
            _newsCategoryRepository = newsCategoryRepository;
        }

        public async Task<ActionResultResponse> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var categoryInfo = await _categoryRepository.GetInfo(request.Id);
            if (categoryInfo == null)
                return new ActionResultResponse(-1, "Thông tin chuyên mục cần chỉnh sửa không tồn tại. Vui lòng kiểm tra lại.");

            if (request.ParentId.HasValue &&
                categoryInfo.Id == request.ParentId.Value)
                return new ActionResultResponse(-2, "Chuyên mục cấp trên không thể là chính nó.");

            var oldName = categoryInfo.Name;
            var oldIsActive = categoryInfo.IsActive;

            categoryInfo.Name = request.Name.Trim();
            categoryInfo.Description = request.Description.Trim();
            categoryInfo.SeoLink = categoryInfo.Name.ToUrlString();
            categoryInfo.IsActive = request.IsActive;
            categoryInfo.UnsignName = categoryInfo.Name.StripVietnameseChars().ToUpper();

            var oldParentId = categoryInfo.ParentId;
            if (!oldParentId.HasValue && request.ParentId.HasValue || (oldParentId.HasValue && request.ParentId.HasValue && oldParentId != request.ParentId))
            {
                var parentInfo = await _categoryRepository.GetInfo(request.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-3, "Thông tin chuyên mục cấp trên không tồn tại. Vui lòng kiểm tra lại.");

                categoryInfo.ParentId = parentInfo.Id;
                categoryInfo.IdPath = $"{parentInfo.IdPath}.{categoryInfo.Id}";
                categoryInfo.SeoLink = $"{parentInfo.SeoLink}/{categoryInfo.Name.StripVietnameseChars()}";
            }
            else if (oldParentId.HasValue && !request.ParentId.HasValue)
            {
                categoryInfo.ParentId = null;
                categoryInfo.IdPath = categoryInfo.Id.ToString();
            }

            var resultUpdateCategory = await _categoryRepository.Update(categoryInfo);
            if (resultUpdateCategory.Code <= 0)
                return resultUpdateCategory;

            if (oldName != categoryInfo.Name || oldIsActive != categoryInfo.IsActive)
                await _newsCategoryRepository.UpdateCategoryInfo(categoryInfo.Id, categoryInfo.Name, categoryInfo.SeoLink, categoryInfo.IsActive);

            if (oldParentId != categoryInfo.ParentId)
            {
                // Update child idPath.
                await _categoryRepository.UpdateChildIdPath(categoryInfo.Id);
            }

            return resultUpdateCategory;
        }
    }
}
