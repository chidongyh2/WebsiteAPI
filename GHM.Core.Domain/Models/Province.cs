using System.ComponentModel.DataAnnotations;

namespace GHM.Core.Domain.Models
{
    public class Province
    {
        /// <summary>
        /// Mã tỉnh thành.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Tên tỉnh thành.
        /// </summary>
        [Required, MaxLength(250)]
        public string Name { get; set; }

        /// <summary>
        /// Mã quốc gia.
        /// </summary>
        public int? NationalId { get; set; }
    }

}
