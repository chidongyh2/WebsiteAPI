using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IMenuRepository
    {
        Task<ActionResultResponse> Insert(Menu menu);

        Task<ActionResultResponse> Inserts(List<Menu> menus);

        Task<ActionResultResponse> Update(MenuMeta menu);

        Task<ActionResultResponse> Delete(int id);

        Task<ActionResultResponse> DeleteReference(int referenceId, ReferenceType referenceType);

        Task<Menu> GetInfo(int id, bool isReadOnly = false);

        Task<bool> CheckReferenceUseInMenu(int referenceId, ReferenceType type);

        Task<List<MenuViewModel>> Search(string keyword, bool? isActive);
    }
}
