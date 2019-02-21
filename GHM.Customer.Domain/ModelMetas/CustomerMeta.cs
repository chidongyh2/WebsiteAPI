
using GHM.Customer.Domain.Constants;
using GHM.Customer.Domain.Models;
using System;
using System.Collections.Generic;

namespace GHM.Customer.Domain.ModelMetas
{
    /// <summary>
    /// Model meta được gửi lên từ truy vấn của client.
    /// </summary>
    public class CustomerMeta
    {
        /// <summary>
        /// Mã bệnh nhân
        /// </summary>
        public string FullName { get; set; }
        /// <summary>
        /// Ngày sinh 
        /// </summary>
        public DateTime? Birthday { get; set; }

        /// <summary>
        /// Giới tính
        /// </summary>
        public int? Gender { get; set; }

        /// <summary>
        /// Nguồn khách
        /// </summary>
        public string CustomerResourceId { get; set; }

        /// <summary>
        /// Số CMND
        /// </summary>
        public string IdCardNumber { get; set; }

        /// <summary>
        /// Nghề nghiệp
        /// </summary>
        public int? JobId { get; set; }

        /// <summary>
        /// Quốc gia
        /// </summary>
        public int? NationalId { get; set; }

        /// <summary>
        /// Dân tộc
        /// </summary>
        public int? EthnicId { get; set; }

        /// <summary>
        /// Tôn giáo
        /// </summary>
        public int? ReligionId { get; set; }

        /// <summary>
        /// Tỉnh thành
        /// </summary>
        public int? ProvinceId { get; set; }

        /// <summary>
        /// Quận huyệnh
        /// </summary>
        public int? DistrictId { get; set; }

        /// <summary>
        /// Địa chỉ liên hệ
        /// </summary>
        public string Address { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<CustomerRelativesContact> CustomerRelativesContacts { get; set; }

        public List<CustomerContact> CustomerContacts { get; set; }
    }
   
}
