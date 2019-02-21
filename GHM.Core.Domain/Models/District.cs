using System.ComponentModel.DataAnnotations;

namespace GHM.Core.Domain.Models
{
    public class District
    {
        /// <summary>
        /// Mã Quận/Huyện.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Tên Quận/Huyện.
        /// </summary>
        [Required, MaxLength(150)]
        public string Name { get; set; }

        /// <summary>
        /// Mã Tỉnh thành.
        /// </summary>
        [Required]
        public int ProvinceId { get; set; }

        /// <summary>
        /// Tên Tỉnh/Thành.
        /// </summary>
        [Required, MaxLength(150)]
        public string ProvinceName { get; set; }

        /// <summary>
        /// Mã ngôn ngữ.
        /// </summary>
        [Required, MaxLength(100)]
        public string Culture { get; set; }

        /// <summary>
        /// Tên không dấu phục vụ tìm kiếm.
        /// </summary>
        [Required, MaxLength(150)]
        public string UnsignName { get; set; }

        public District()
        {
            Culture = "VN";
            UnsignName = "";
        }
    }

}
