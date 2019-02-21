using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.News
{
    public class DeleteNewsCommand : IRequest<ActionResultResponse>
    {
        public int Id { get; set; }

        public DeleteNewsCommand(int id)
        {
            Id = id;
        }
    }

    public class DeleteNewsCommandHandler : IRequestHandler<DeleteNewsCommand, ActionResultResponse>
    {
        private readonly INewsRepository _newsRepository;
        private readonly INewsCategoryRepository _newsCategoryRepository;
        private readonly IMenuRepository _menuRepository;

        public DeleteNewsCommandHandler(INewsRepository newsRepository, INewsCategoryRepository newsCategoryRepository, IMenuRepository menuRepository)
        {
            _newsRepository = newsRepository;
            _newsCategoryRepository = newsCategoryRepository;
            _menuRepository = menuRepository;
        }


        public async Task<ActionResultResponse> Handle(DeleteNewsCommand request, CancellationToken cancellationToken)
        {
            var result = await _newsRepository.Delete(request.Id);
            if (result.Code <= 0)
                return result;

            // Delete news category.
            await _newsCategoryRepository.DeleteByNewsId(request.Id);

            // Delete menu by newsId.
            await _menuRepository.DeleteReference(request.Id, ReferenceType.News);
            return result;
        }
    }
}
