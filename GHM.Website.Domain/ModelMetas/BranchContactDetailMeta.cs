using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
    public class BranchContactDetailMeta
    {
        public string Id { get; set; }
        public string BranchContactId { get; set; }
        public ContactType ContactType { get; set; }
        public string ContactValue { get; set; }
    }
}
