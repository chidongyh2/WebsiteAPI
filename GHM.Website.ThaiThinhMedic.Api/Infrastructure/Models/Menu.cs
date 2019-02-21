using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Menu : EntityBase<int>
    {
        /// <summary>
        /// Tên trang.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Tên viết không dấu hỗ trợ tìm kiếm tương đối.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Trạng thái kích hoạt của trang. Trường hợp không kích hoạt sẽ không được hiển thị ngoài menu của người dùng.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Đường dẫn Id của trang.
        /// </summary>
        public string IdPath { get; set; }

        /// <summary>
        /// Đường dẫn trang.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Icon của trang.
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// Thứ tự hiển thị của trang.
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Mã trang cha.
        /// </summary>
        public int? ParentId { get; set; }

        /// <summary>
        /// Số lượng trang con.
        /// </summary>
        public int ChildCount { get; set; }        

        public int? ReferenceId { get; set; }

        public ReferenceType ReferenceType { get; set; }

        public bool IsDelete { get; set; }

        public Menu()
        {
            IdPath = "";            
            ReferenceId = null;
            ReferenceType = ReferenceType.Custom;
        }

        public Menu(string name, string icon, bool isActive, int order, int? referenceId, ReferenceType referenceType, string url, int? parentId,
            string idPath)
        {
            Name = name.Trim();
            Icon = icon?.Trim();
            IsActive = isActive;
            Order = order;
            ReferenceId = referenceId;
            ReferenceType = referenceType;
            Url = url?.Trim();
            UnsignName = Name.StripVietnameseChars().ToUpper();
            ParentId = parentId;
            IdPath = idPath;
        }
    }
}
