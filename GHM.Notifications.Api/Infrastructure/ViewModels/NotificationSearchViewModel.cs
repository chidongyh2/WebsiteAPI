using System;

namespace GHM.Notifications.Api.Infrastructure.ViewModels
{
    public class NotificationSearchViewModel
    {
        public string Id { get; set; }
        public string SenderId { get; set; }
        public string SenderFullName { get; set; }
        public string SenderAvatar { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreateTime { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsShow { get; set; }
        public bool IsRead { get; set; }
    }
}
