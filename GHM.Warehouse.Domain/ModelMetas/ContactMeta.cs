using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ContactMeta
    {
        public string SubjectId { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Fax { get; set; }

        public string PositionName { get; set; }

        public string Description { get; set; }

        public ContactStatus Status { get; set; }

        public ContactType Type { get; set; }

        public string ConcurrencyStamp { get; set; }

    }

}
