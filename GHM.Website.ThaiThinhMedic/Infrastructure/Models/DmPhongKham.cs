namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class DmPhongKham
    {
        public string MaPhongKham { get; set; }
        public string TenPhongKham { get; set; }
        public string DiaChi { get; set; }
        public string DienThoai { get; set; }
        public string MaKhoa { get; set; }
        public string MaKham { get; set; }
        public string GhiChu { get; set; }
        public bool? KhamDoan { get; set; }
        public string SoPhong { get; set; }

        public DmPhongKham()
        {
            KhamDoan = false;
        }
    }

}
