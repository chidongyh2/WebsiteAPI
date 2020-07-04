
namespace GHM.Website.Domain.Models
{
    public class CategoriesNews
    {
        /// <summary>
        /// Mã tin tức.
        /// </summary>
        public string NewsId { get; set; }

        /// <summary>
        /// Mã chuyên mục.
        /// </summary>
        public int CategoryId { get; set; }

        public News News { get; set; }

        public Category Category { get; set; }
    }
}
