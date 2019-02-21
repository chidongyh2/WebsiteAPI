using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IFaqRepository
    {
        Task<List<FaqSearchViewModel>> Search(string keyword, bool? isActive);
    }
}
