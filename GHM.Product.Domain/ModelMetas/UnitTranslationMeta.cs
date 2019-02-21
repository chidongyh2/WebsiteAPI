namespace GHM.Product.Domain.ModelMetas
{
    /// <summary>
    /// Model meta được gửi lên từ truy vấn của client.
    /// </summary>

    public class UnitTranslationMeta
    {
        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Abbreviation { get; set; }
    }

}
