using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.ExecptionHandler.Api.Infrastructure.Models;
using GHM.ExecptionHandler.Api.Infrastructure.ViewModels;

namespace GHM.ExecptionHandler.Api.Infrastructure.IRepository
{
    public interface IExceptionRepository
    {
        Task<int> Insert(CustomException exception);

        Task<List<ExceptionSearchViewModel>> Search(bool? isRead, int page, int pageSize, out int totalRows);

        Task<CustomException> GetInfo(string id);
    }
}
