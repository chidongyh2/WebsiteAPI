using Microsoft.ApplicationInsights.AspNetCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas
{
    public class QuaTangKhachHangMeta
    {
        public long? IDQuaTang { get; set; }

        public DateTime Ngay { get; set; }

        [DisplayName(@"Chương trình")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public string MaQuaTang { get; set; }

        public string MaKhachHang { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string MaNguoiPhat { get; set; }

        public bool? Dung { get; set; }

        public List<string> NguoiThamGiaCung { get; set; }
    }
}
