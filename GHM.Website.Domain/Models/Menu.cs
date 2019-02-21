using System;
using System.Collections.Generic;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
    public class Menu
    {
        /// <summary>
        /// Mã menu.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Tên menu.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Mô tả.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Icon menu.
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// Hiệu ứng menu.
        /// </summary>
        public EffectType EffectType { get; set; }

        /// <summary>
        /// Thứ tự sắp xếp.
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Trạng thái kích hoạt.
        /// </summary>
        public bool IsActive { get; set; }

        public string UnsignName { get; set; }

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

        public Position Position { get; set; }// Vị trí

        public Menu()
        {
            IsDelete = false;
            IsActive = true;
            CreateTime = DateTime.Now;
        }

    }
}
