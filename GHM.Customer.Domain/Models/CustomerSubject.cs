using GHM.Infrastructure.Models;

namespace GHM.Customer.Domain.Models
{
    public class CustomerSubject : EntityBase<string>
    {
        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }
              
        /// 
        /// <summary>
        /// Tổng tiền được giảm tối đa
        /// </summary>
        public float? TotalReduction { get; set; }

        /// <summary>
        /// Trạng thái sử dụng.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Trạng thái xóa
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Thứ tự sắp xếp.
        /// </summary>
        public int Order { get; set; }

        public CustomerSubject()
        {
            IsDelete = false;
            Order = 0;
            TotalReduction = 0;
        }

    }
   

}
