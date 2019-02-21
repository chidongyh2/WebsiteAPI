namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class NewsCategory
    {
        public int NewsId { get; set; }
        public string NewsSeoLink { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategorySeoLink { get; set; }
        public bool CategoryIsActive { get; set; }
        public NewsCategory() { }

        public NewsCategory(int newsId, string newsSeoLink, int categoryId, string categorySeoLink, string categoryName, bool categoryIsActive)
        {
            NewsId = newsId;
            CategoryId = categoryId;
            NewsSeoLink = newsSeoLink;
            CategorySeoLink = categorySeoLink;
            CategoryName = categoryName;
            CategoryIsActive = categoryIsActive;
        }
    }
}
