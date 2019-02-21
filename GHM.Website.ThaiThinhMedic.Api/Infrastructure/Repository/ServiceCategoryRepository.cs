using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class ServiceCategoryRepository : RepositoryBase, IServiceCategoryRepository
    {
        //private readonly IEfRepository<ServiceCategory> _serviceCategoryRepository;
        private readonly IRepository<DmPhanLoaiDichVu> _serviceCategoryQuery;
        public ServiceCategoryRepository(IDbContext context) : base(context)
        {
            _serviceCategoryQuery = Context.GetRepository<DmPhanLoaiDichVu>();
        }

        public async Task<List<DmPhanLoaiDichVu>> GetByServiceTypeId(string serviceTypeId)
        {
            return await _serviceCategoryQuery.GetsAsync(true, x => x.MaLoaiDichVu == serviceTypeId);
        }
    }
}
