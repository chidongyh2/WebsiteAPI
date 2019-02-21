using NServiceBus;

namespace GHM.NServiceBus.Events.GHM.Core
{
    public class RoleDeleted : IEvent
    {
        public string RoleId { get; set; }

        public RoleDeleted(string roleId)
        {
            RoleId = roleId;
        }
    }
}
