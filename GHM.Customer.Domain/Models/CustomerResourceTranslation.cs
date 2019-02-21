namespace GHM.Customer.Domain.Models
{
  public  class CustomerResourceTranslation
    {
        /// <summary>
        /// Mã nguồn khách.
        /// </summary>
        public string CustomerResourceId { get; set; }

        /// <summary>
        /// Mã ngôn ngữ.
        /// </summary>
        public string LanguageId { get; set; }

        /// <summary>
        /// Tên nguồn khách
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Tên không dấu để tìm kiếm
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Mô tả nguồn khách
        /// </summary>
        public string Description { get; set; }
    }
}
