using GHM.EventBus.Constants;
using GHM.EventBus.Events;

namespace GHM.Events
{
    public class NotificationEvent : IntegrationEvent
    {
        public string TenantId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string SenderId { get; set; }
        public string SenderFullName { get; set; }
        public string SenderAvatar { get; set; }
        public string ReceiverId { get; set; }
        public NotificationType Type { get; set; }
        public string Url { get; set; }
        public bool IsSystem { get; set; }
        public string Image { get; set; }
    }
}
