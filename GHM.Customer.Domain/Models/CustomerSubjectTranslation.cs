namespace GHM.Customer.Domain.Models
{
    public class CustomerSubjectTranslation 
    {
        //Đối tượng bệnh nhân
        public string CustomerSubjectId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string UnsignName { get; set; }

        public string Description { get; set; }

        //public bool IsDelete { get; set; }

    }
}
