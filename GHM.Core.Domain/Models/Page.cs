namespace GHM.Core.Domain.Models
{
    public class Page
    {
        /// <summary>
        /// Mã trang tự nhập để phân quyền.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Trạng thái kích hoạt của trang. Trường hợp không kích hoạt sẽ không được hiển thị ngoài menu của người dùng.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Đường dẫn Id của trang.
        /// </summary>
        public string IdPath { get; set; }

        /// <summary>
        /// Icon của trang.
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// Mầy nền của trang.
        /// </summary>
        public string BgColor { get; set; }

        /// <summary>
        /// Thứ tự hiển thị của trang.
        /// </summary>
        public int OrderItem { get; set; }

        /// <summary>
        /// Thứ tự sắp xếp theo thứ tự hiển thị.
        /// </summary>
        public string OrderPath { get; set; }

        /// <summary>
        /// Mã trang cha.
        /// </summary>
        public int? ParentId { get; set; }

        /// <summary>
        /// Trạng thái đánh dấu xóa trang.
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Số lượng trang con.
        /// </summary>
        public int ChildCount { get; set; }

        public string Url { get; set; }

        public Page()
        {
            IsActive = true;
            IsDelete = false;
            OrderItem = 0;
        }

        public Page(int id, bool isActive, string icon, string bgColor, int order, int? parentId, string url)
        {
            Id = id;
            IsActive = isActive;
            Icon = icon;
            BgColor = bgColor;
            OrderItem = order;
            OrderPath = $"{id}.{order}";
            ParentId = parentId;
            Url = url;
            IdPath = id.ToString();
        }
    }
}
