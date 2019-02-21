using GHM.Core.Domain.Constants;

namespace GHM.Core.Domain.ViewModels
{
    public class RoleSearchViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public RoleType Type { get; set; }
    }
}
