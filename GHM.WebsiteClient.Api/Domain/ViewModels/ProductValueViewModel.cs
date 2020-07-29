namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class ProductValueViewModel
    {
        public string Id { get; set; }
        public string AttributeId { get; set; }
        public string AttributeName { get; set; }
        public string AttributeValueId { get; set; }
        public string AttributeValueName { get; set; }
        public string Value { get; set; }
        public string LanguageId { get; set; }
        public bool IsShowClient { get; set; }
        public bool IsSelfContent { get; set; }
        public bool IsMultiple { get; set; }
    }
}
