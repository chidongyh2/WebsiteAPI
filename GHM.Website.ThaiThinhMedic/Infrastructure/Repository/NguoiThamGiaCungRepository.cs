using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class NguoiThamGiaCungRepository : RepositoryBase, INguoiThamGiaCungRepository
    {
        private readonly IRepository<NguoiThamGiaCung> _nguoiThamGiaCungRepository;
        public NguoiThamGiaCungRepository(IDbContext context) : base(context)
        {
            _nguoiThamGiaCungRepository = Context.GetRepository<NguoiThamGiaCung>();
        }

        public async Task<int> Insert(List<string> tenNguoiThamGiaCung)
        {
            _nguoiThamGiaCungRepository.Creates(tenNguoiThamGiaCung.Select(x => new NguoiThamGiaCung
            {
                TenNguoiThamGiaCung = x
            }).ToList());
            return await Context.SaveChangesAsync();
        }
    }
}
