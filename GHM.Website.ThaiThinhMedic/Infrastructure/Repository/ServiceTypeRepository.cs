using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class ServiceTypeRepository : RepositoryBase, IServiceTypeRepository
    {
        private readonly IRepository<ServiceType> _serviceTypeRepository;
        public ServiceTypeRepository(IDbContext context) : base(context)
        {
            _serviceTypeRepository = Context.GetRepository<ServiceType>();
        }

        public async Task<List<ServiceType>> GetAll()
        {
            return await _serviceTypeRepository.GetsAsync(true);
        }

        public async Task<List<ServiceTypeCategoryViewModel>> GetAllTypeCategory()
        {
            return (from serviceType in Context.Set<ServiceType>()
                          join serviceCategory in Context.Set<DmPhanLoaiDichVu>()
                              on serviceType.Id equals serviceCategory.MaLoaiDichVu
                          select new ServiceTypeCategoryViewModel
                          {
                              TypeId = serviceType.Id,
                              TypeName = serviceType.Name,
                              CategoryId = serviceCategory.MaPhanLoaiDichVu,
                              CategoryName = serviceCategory.TenPhanLoaiDichVu
                          }).ToList();
        }
    }
}
