using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface INewsRepository
    {      
        Task<News> GetInfo(int id, bool? isActive = null, bool isReadOnly = false);

        Task<NewsDetailViewModel> GetDetail(int id);

        Task<List<NewsSearchViewModel>> Search(string keyword, int? categoryId, bool? isActive, bool? isHot, bool? isHomePage, int page, int pageSize, out int totalRows);

        Task<List<NewsSearchViewModel>> SearchForSelect(string keyword, int? categoryId, int page, int pageSize, out int totalRows);
    }
}
