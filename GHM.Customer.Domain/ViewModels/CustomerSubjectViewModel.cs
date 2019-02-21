namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerSubjectViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public float? TotalReduction { get; set; }
        //public List<CustomerSubjectTranslationViewModel> CustomerSubjectTranslations { get; set; }
    }
}
