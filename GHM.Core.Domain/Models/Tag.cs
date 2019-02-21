using System;
using System.Collections.Generic;
using GHM.Core.Domain.Constants;

namespace GHM.Core.Domain.Models
{
    public class Tag
    {
        // <summary>
        // Mã tag.
        // </summary>
        public string Id { get; set; }

        // <summary>
        // Mã khách hàng.
        // </summary>
        public string TenantId { get; set; }

        // <summary>
        // Mã ngôn ngữ.
        // </summary>
        public string LanguageId { get; set; }

        // <summary>
        // Loại tag.
        // </summary>
        public TagType Type { get; set; }
        // <summary>
        // Tên tag.
        // </summary>
        public string Name { get; set; }

        // <summary>
        // tên không dấu.
        // </summary>
        public string UnsignName { get; set; }

        // <summary>
        // Seo link.
        // </summary>
        public string SeoLink { get; set; }

        // <summary>
        // Thời gian tạo.
        // </summary>
        public DateTime CreateTime { get; set; }

        // <summary>
        // Mã người tạo.
        // </summary>
        public string CreatorId { get; set; }

        // <summary>
        // Tên người tạo.
        // </summary>
        public string CreatorFullName { get; set; }

        // <summary>
        // Avata người tạo.
        // </summary>
        public string CreatorAvatar { get; set; }
        public Tag()
        {
            CreateTime = DateTime.Now;
        }

    }
}
