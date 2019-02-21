using System;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.MongoDb;
using MongoDB.Bson.Serialization.Attributes;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Promotion : Entity<string>
    {
        /// <summary>
        /// Tên chương trình KM
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Tên không dấu để tìm kiếm
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Thời gian bắt đầu chương trình.
        /// </summary>
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? FromDate { get; set; }

        /// <summary>
        /// Thời gian kết thúc chương trình
        /// </summary>
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? ToDate { get; set; }

        /// <summary>
        /// Trạng thái kích hoạt chương trình.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Trạng thái xóa của chương trình.
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Mã người tạo
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        /// <summary>
        /// Mô tả.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Đường dẫn tạo ra trên url cho khách hàng truy cập
        /// </summary>
        public string SeoLink { get; set; }
    }
}
