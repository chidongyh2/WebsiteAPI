using System.Threading.Tasks;
using GHM.ExecptionHandler.Api.Infrastructure.IRepository;
using GHM.ExecptionHandler.Api.Infrastructure.IServices;
using GHM.ExecptionHandler.Api.Infrastructure.Models;
using GHM.ExecptionHandler.Api.Infrastructure.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.ExecptionHandler.Api.Infrastructure.Services
{
    public class ExceptionService : IExceptionService
    {
        private readonly IExceptionRepository _exceptionRepository;

        public ExceptionService(IExceptionRepository exceptionRepository)
        {
            _exceptionRepository = exceptionRepository;
        }

        public async Task<ActionResultResponse> Insert(CustomException exception)
        {
            var result = await _exceptionRepository.Insert(exception);
            return new ActionResultResponse(result, result <= 0 ? "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên."
                : "Thêm ngoại lệ thành công.");
        }

        public async Task<SearchResult<ExceptionSearchViewModel>> Search(bool? isRead, int page, int pageSize)
        {
            return new SearchResult<ExceptionSearchViewModel>
            {
                Items = await _exceptionRepository.Search(isRead, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<CustomException>> GetDetail(string id)
        {
            return new ActionResultResponse<CustomException>
            {
                Data = await _exceptionRepository.GetInfo(id)
            };
        }
    }
}
