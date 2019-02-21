using GHM.Customer.Domain.Constants;
using System;
using System.Collections.Generic;

namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerDetailViewModel
    {
        public string Id { get; set; }


        public string CustomerCode { get; set; }

        /// <summary>
        /// Ten bệnh nhân
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

        public string NationalName { get; set; }
        /// <summary>
        /// Dân tộc
        /// </summary>
        public int? EthnicId { get; set; }

        public string EthnicName { get; set; }

        /// <summary>
        /// Tôn giáo
        /// </summary>
        public int? ReligionId { get; set; }

        public string ReligionName { get; set; }
        /// <summary>
        /// Tỉnh thành
        /// </summary>
        public int? ProvinceId { get; set; }

        public string ProvinceName { get; set; }

        /// <summary>
        /// Quận huyệnh
        /// </summary>
        public int? DistrictId { get; set; }

        public string DistrictName { get; set; }

        /// <summary>
        /// Địa chỉ liên hệ
        /// </summary>
        public string Address { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ContactCustomerViewModel> ContactCustomers { get; set; }

        public List<CustomerContactViewModel> CustomerContacts { get; set; }

    }

    public class ContactCustomerViewModel
    {
        public string Id { get; set; }

        public string CustomerId { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string ConcurrencyStamp { get; set; }
    }

    public class CustomerContactViewModel
    {
        public string Id { get; set; }

        public string CustomerId { get; set; }

        public ContactType ContactType { get; set; }

        public string ContactValue { get; set; }

        public string ConcurrencyStamp { get; set; }

    }
}
