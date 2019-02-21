using GHM.Website.ThaiThinhMedic.Infrastructure.Configurations;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.ThaiThinhMedic.Infrastructure
{
    public class ThaiThinhClinicDbContext : DbContextBase
    {
        public ThaiThinhClinicDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            builder.ApplyConfiguration(new DatHenConfig());
            builder.ApplyConfiguration(new BenhNhanConfig());
            builder.ApplyConfiguration(new VideoChupThuThuatConfig());
            builder.ApplyConfiguration(new DmPhongKhamConfig());
            builder.ApplyConfiguration(new BenhNhanConfig());
            builder.ApplyConfiguration(new DmDichVuConfig());
            builder.ApplyConfiguration(new DmBacSyConfig());
            builder.ApplyConfiguration(new DmPhanLoaiDichVuConfig());
            builder.ApplyConfiguration(new QuaTangConfig());
            builder.ApplyConfiguration(new QuaTangKhachHangConfig());
            builder.ApplyConfiguration(new NguoiThamGiaCungConfig());
            // Entities Register:
        }
    }
}
