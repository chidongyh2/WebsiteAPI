using GHM.Infrastructure.Models;

namespace GHM.Customer.Domain.Models
{
    public class Job : EntityBase<int>
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
        /// Thứ tự sắp xếp theo cây thư mục.
        /// </summary>
        public string OrderPath { get; set; }

        /// <summary>
        /// Trạng thái xóa
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// IdPath của nghề nghiệp
        /// </summary>
        public string IdPath { get; set; }

        /// <summary>
        /// Mã nghề nghiệp cha
        /// </summary>
        public int? ParentId { get; set; }

        /// <summary>
        /// Trạng thái sử dụng.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Cấp độ nghề nghiệp.
        /// </summary>
        public int Level { get; set; }

        /// <summary>
        /// Số lượng nghề nghiệp con.
        /// </summary>
        public int ChildCount { get; set; }


        public Job()
        {
            Order = 0;
            IsDelete = false;
            IsActive = true;
            Level = 0;
            ChildCount = 0;
        }
    }
}
