using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IServiceRepository
    {
        Task<List<DmDichVu>> Search();

        Task<List<T>> GetListServiceByCategoryId<T>(Expression<Func<DmDichVu, T>> projector, string keyword, string categoryId, int page, int pageSize, out long totalRows);
    }
}
