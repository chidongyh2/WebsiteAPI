using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Autofac;
using Autofac.Features.Indexed;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class ServiceRepository : RepositoryBase, IServiceRepository
    {
        private readonly IRepository<DmDichVu> _serviceRepository;
        public ServiceRepository(ThaiThinhMedicClinicDbContext context) : base(context)
        {
            _serviceRepository = Context.GetRepository<DmDichVu>();
        }

        public async Task<List<DmDichVu>> Search()
        {
            return await _serviceRepository.GetsAsync(true);
        }

        public Task<List<T>> GetListServiceByCategoryId<T>(Expression<Func<DmDichVu, T>> projector, string keyword, string categoryId, int page, int pageSize, out long totalRows)
        {
            Expression<Func<DmDichVu, bool>> spec = x => x.MaPhanLoaiDichVu == categoryId && x.Dung.HasValue && x.Dung.Value;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.ToLower();
                spec = spec.And(x => x.TenDichVu.ToLower().Equals(keyword));
            }
            totalRows = _serviceRepository.Count(spec);
            return _serviceRepository.GetsAsAsync(projector, spec);
        }
    }
}
