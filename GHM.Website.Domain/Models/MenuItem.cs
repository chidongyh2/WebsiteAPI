using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
  public  class MenuItem
    {
        /// <summary>
        /// Mã menu item.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Mã menu.
        /// </summary>
        public string MenuId { get; set; }

        /// <summary>
        /// Mã chuyên mục.
        /// </summary>
        public string SubjectId { get; set; }

        /// <summary>
        /// Loại chuyên mục.
        /// </summary>
        public SubjectType SubjectType { get; set; }

        /// <summary>
        /// Icon.
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// Ảnh menu item.
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// Link menu item.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Trạng thái kích hoạt.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Mã menu item cha.
        /// </summary>
        public int? ParentId { get; set; }

        /// <summary>
        /// IdPath.
        /// </summary>
        public string IdPath { get; set; }

        /// <summary>
        /// Thứ tự sắp xếp.
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Đường dẫn sắp xếp.
        /// </summary>
        public string OrderPath { get; set; }

        /// <summary>
        /// Cấp .
        /// </summary>
        public int Level { get; set; }

        /// <summary>
        /// Số lượng Con .
        /// </summary>
        public int ChildCount { get; set; }

        public string ConcurrencyStamp { get; set; }
        /// <summary>
        /// Thời gian tạo.
        /// </summary>
        public DateTime? CreateTime { get; set; }

        /// <summary>
        /// Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        /// <summary>
        /// Thời gian update.
        /// </summary>
        public DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Mã người update.
        /// </summary>
        public string LastUpdateUserId { get; set; }

        /// <summary>
        /// Tên người update.
        /// </summary>
        public string LastUpdateFullName { get; set; }

        public MenuItem()
        {
            Order = 0;
            IsActive = true;
            ChildCount = 0;
            CreateTime = DateTime.Now;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        public List<MenuItemTranslation> MenuItemTranslations { get; set; }
    }
}
