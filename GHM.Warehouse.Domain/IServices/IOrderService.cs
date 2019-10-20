using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IOrderService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, string createUserId, string createUserName,
            OrderMeta orderMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, OrderMeta orderMeta);

        Task<ActionResultResponse<OrderDetailViewModel>> GetDetail(string tenantId, string id);

        Task<SearchResult<OrderSearchViewModel>> Search(string tenantId, string userId, string productId, string keyword, OrderStatus? status,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        Task<ActionResultResponse<string>> UpdateStatus(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string id, OrderStatus status);

        Task<string> GetCode(string tenantId);
    }
}
