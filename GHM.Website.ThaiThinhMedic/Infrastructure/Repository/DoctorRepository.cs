using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class DoctorRepository : RepositoryBase, IDoctorRepository
    {
        private readonly IRepository<DmBacSy> _doctorRepository;
        public DoctorRepository([Named("EfContext")]IDbContext context) : base(context)
        {
            _doctorRepository = context.GetRepository<DmBacSy>();
        }

        public async Task<DmBacSy> GetById(string id)
        {
            return await _doctorRepository.GetAsync(false, x => x.MaBacSy.Equals(id));
        }
    }
}
