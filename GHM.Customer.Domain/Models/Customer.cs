using GHM.Infrastructure.Models;
using System;

namespace GHM.Customer.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>
    public class Customer : EntityBase<string>
    {
        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Mã bệnh nhân
        /// </summary>
        public string CustomerCode { get; set; }

        /// <summary>
        /// Ten bệnh nhân
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Tên không dấu hỗ trợ tìm kiếm.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Ngày sinh 
        /// </summary>
        public DateTime? Birthday { get; set; }

        /// <summary>
        /// Giới tính.
        /// </summary>
        public int? Gender { get; set; }

        /// <summary>
        /// Nguồn khách.
        /// </summary>
        public string CustomerResourceId { get; set; }

        /// <summary>
        /// Số CMND.
        /// </summary>
        public string IdCardNumber { get; set; }

        /// <summary>
        /// Nghề nghiệp.
        /// </summary>
        public int? JobId { get; set; }

        /// <summary>
        /// Quốc gia.
        /// </summary>
        public int? NationalId { get; set; }

        /// <summary>
        /// Tên quốc gia.
        /// </summary>
        public string NationalName { get; set; }

        /// <summary>
        /// Dân tộc
        /// </summary>
        public int? EthnicId { get; set; }

        /// <summary>
        /// Tên dân tộc.
        /// </summary>
        public string EthnicName { get; set; }

        /// <summary>
        /// Tôn giáo.
        /// </summary>
        public int? ReligionId { get; set; }

        /// <summary>
        /// Tên tôn giáo.
        /// </summary>
        public string ReligionName { get; set; }

        /// <summary>
        /// Tỉnh thành
        /// </summary>
        public int? ProvinceId { get; set; }

        /// <summary>
        /// Tên Tỉnh/Thành Phố.
        /// </summary>
        public string ProvinceName { get; set; }

        /// <summary>
        /// Quận huyệnh
        /// </summary>
        public int? DistrictId { get; set; }

        /// <summary>
        /// Tên Quận/Huyện.
        /// </summary>
        public string DistrictName { get; set; }

        /// <summary>
        /// Địa chỉ liên hệ.
        /// </summary>
        public string Address { get; set; }

        public bool IsDelete { get; set; }
    }   
}
