using NServiceBus;

namespace GHM.NServiceBus.Commands.GHM.Notifications
{
    public class CreateNotificationCommand : ICommand
    {
        public string TenantId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string FromUserId { get; set; }
        public string FromUserAvatar { get; set; }
        public string ToUserId { get; set; }
        public int Type { get; set; }
        public string Url { get; set; }
        public bool IsSystem { get; set; }
        public string Image { get; set; }
    }
}
