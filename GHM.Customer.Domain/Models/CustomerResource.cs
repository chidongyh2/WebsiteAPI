using System;
using GHM.Infrastructure.Models;
namespace GHM.Customer.Domain.Models
{
  public  class CustomerResource : EntityBase<string>
    {
        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Thứ tự sắp xếp.
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Trạng thái xóa
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Trạng thái sử dụng.
        /// </summary>
        public bool IsActive { get; set; }

        public CustomerResource()
        {
            Order = 0;
            IsDelete = false;
            CreateTime = DateTime.Now;
            IsActive = true;
        }
    }
}
