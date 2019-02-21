using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Category
{
    public class DeleteCategoryCommand : IRequest<ActionResultResponse>
    {
        public int Id { get; set; }

        public DeleteCategoryCommand(int id)
        {
            Id = id;
        }
    }

    public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand, ActionResultResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly INewsCategoryRepository _newsCategoryRepository;

        public DeleteCategoryCommandHandler(ICategoryRepository categoryRepository, INewsCategoryRepository newsCategoryRepository)
        {
            _categoryRepository = categoryRepository;
            _newsCategoryRepository = newsCategoryRepository;
        }

        public async Task<ActionResultResponse> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var result = await _categoryRepository.Delete(request.Id);
            if (result.Code <= 0)
                return result;

            // Delete all news category.
            await _newsCategoryRepository.DeleteByCategoryId(request.Id);
            return result;
        }
    }
}
