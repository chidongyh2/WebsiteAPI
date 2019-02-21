using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.ExecptionHandler.Api.Infrastructure.Models;
using GHM.ExecptionHandler.Api.Infrastructure.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.ExecptionHandler.Api.Infrastructure.IServices
{
    public interface IExceptionService
    {
        Task<ActionResultResponse> Insert(CustomException exception);

        Task<SearchResult<ExceptionSearchViewModel>> Search(bool? isRead, int page,
            int pageSize);

        Task<ActionResultResponse<CustomException>> GetDetail(string id);
    }
}
