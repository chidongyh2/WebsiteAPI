using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IOrderService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, OrderMeta orderMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, OrderMeta orderMeta);

        Task<ActionResultResponse<OrderDetailViewModel>> GetDetail(string tenantId, string id);

        Task<SearchResult<OrderSearchViewModel>> Search(string tenantId, string userId, string keyword, OrderStatus? status,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize);

    }
}
