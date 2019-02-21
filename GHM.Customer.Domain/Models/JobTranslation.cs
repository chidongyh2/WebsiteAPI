namespace GHM.Customer.Domain.Models
{
    public class JobTranslation
    {
        public int JobId { get; set; }

        public string LanguageId { get; set; }

        /// <summary>
        /// Tên nghề nghiệp
        /// </summary>        
        public string Name { get; set; }

        /// <summary>
        /// Tên nghề nghiệp cha
        /// </summary>
        public string ParentName { get; set; }


        /// <summary>
        /// Tên không dấu để tìm kiếm
        /// </summary>
        public string UnsignName { get; set; }


        /// <summary>
        /// Mô tả nghề nghiệp
        /// </summary>
        public string Description { get; set; }
    }
}
