using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IFaqRepository
    {
        Task<ActionResultResponse> Insert();

        Task<ActionResultResponse> Update();

        Task<ActionResultResponse> Delete();

        Task<List<FaqSearchViewModel>> Search(string keyword, bool? isActive);
    }
}
