using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.News;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface INewsRepository
    {
        Task<ActionResultResponse> Insert(News newsCommand);

        Task<ActionResultResponse> Update(News news);

        Task<ActionResultResponse> Delete(int id);

        Task<News> GetInfo(int id, bool? isActive = null, bool isReadOnly = false);

        Task<NewsDetailViewModel> GetDetail(int id);

        Task<ActionResultResponse> UpdateActiveStatus(int id, bool isActive);

        Task<ActionResultResponse> UpdateIsHotStatus(int id, bool isHot);

        Task<ActionResultResponse> UpdateIsHomePage(int id, bool isHomePage);

        Task<List<NewsSearchViewModel>> Search(string keyword, int? categoryId, bool? isActive, bool? isHot, bool? isHomePage, int page, int pageSize, out int totalRows);

        Task<List<T>> SearchPicker<T>(Expression<Func<News, T>> projector, string keyword, int? categoryId, int page, int pageSize, out int totalRows);
    }
}
