using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Menu
{
    public class CreateMenuCommand : IRequest<ActionResultResponse>
    {
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string Url { get; set; }
        public string Icon { get; set; }
        public int? Order { get; set; }
        public int? ParentId { get; set; }
        public ReferenceType ReferenceType { get; set; }
        public List<int> ListReference { get; set; }
    }


    public class CreateMenuCommandHandler : IRequestHandler<CreateMenuCommand, ActionResultResponse>
    {
        private readonly IMenuRepository _menuRepository;
        private readonly INewsRepository _newsRepository;
        private readonly ICategoryRepository _categoryRepository;

        public CreateMenuCommandHandler(IMenuRepository menuRepository, INewsRepository newsRepository, ICategoryRepository categoryRepository)
        {
            _menuRepository = menuRepository;
            _newsRepository = newsRepository;
            _categoryRepository = categoryRepository;
        }

        public async Task<ActionResultResponse> Handle(CreateMenuCommand request, CancellationToken cancellationToken)
        {
            if (request.ReferenceType != ReferenceType.Custom && !request.ListReference.Any())
                return new ActionResultResponse(-1, "Vui lòng chọn ít nhất một chuyên mục.");

            List<Models.Menu> listMenu = new List<Models.Menu>();
            Models.Menu parentInfo = null;
            if (request.ParentId.HasValue)
            {
                parentInfo = await _menuRepository.GetInfo(request.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-2, "Menu cấp trên không tồn tại. Vui lòng kiểm tra lại.");
            }
            string idPath;
            switch (request.ReferenceType)
            {
                case ReferenceType.Category:
                    foreach (var reference in request.ListReference)
                    {
                        var categoryInfo = await _categoryRepository.GetInfo(reference);
                        if (categoryInfo == null)
                            return new ActionResultResponse(-3, "Thông tin chuyên mục không tồn tại. Vui lòng kiểm tra lại.");

                        idPath = parentInfo != null ? $"{parentInfo.IdPath}.-1" : "-1";
                        request.Url = parentInfo != null
                            ? $"{parentInfo.Url}/{categoryInfo.Name.Trim().ToUrlString().ToLower()}" : categoryInfo.Name.Trim().ToUrlString().ToLower();
                        listMenu.Add(new Models.Menu(categoryInfo.Name, request.Icon, request.IsActive, request.Order ?? 0, categoryInfo.Id, ReferenceType.Category, request.Url,
                            parentInfo?.Id, idPath));
                    }
                    return await _menuRepository.Inserts(listMenu);
                case ReferenceType.News:
                    foreach (var reference in request.ListReference)
                    {
                        var newsInfo = await _newsRepository.GetInfo(reference);
                        if (newsInfo == null)
                            return new ActionResultResponse(-3, "Thông tin chuyên mục không tồn tại. Vui lòng kiểm tra lại.");

                        idPath = parentInfo != null ? $"{parentInfo.IdPath}.-1" : "-1";
                        request.Url = parentInfo != null
                            ? $"{parentInfo.Url}/{newsInfo.Title.Trim().ToUrlString().ToLower()}"
                            : newsInfo.Title.Trim().ToUrlString().ToLower();
                        listMenu.Add(new Models.Menu(newsInfo.Title, request.Icon, request.IsActive,
                            request.Order ?? 0, newsInfo.Id, ReferenceType.News, request.Url,
                            parentInfo?.Id, idPath));
                    }
                    return await _menuRepository.Inserts(listMenu);
                case ReferenceType.Custom:
                    idPath = parentInfo != null ? $"{parentInfo.IdPath}.-1" : "-1";
                    return await _menuRepository.Insert(new Models.Menu(request.Name, request.Icon, request.IsActive,
                        request.Order ?? 0, null,
                        ReferenceType.Custom, request.Url, parentInfo?.Id, idPath));
            }
            return new ActionResultResponse(-3, "Loại menu không hợp lệ. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên.");
        }
    }
}
