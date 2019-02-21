using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Core.Domain.Models
{
    public class Notification
    {
        /// <summary>
        /// Notification id
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// Notification title
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Notification content
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Notification from user id
        /// </summary>
        public string SenderId { get; set; }

        /// <summary>
        /// Notification sender avatar
        /// </summary>
        public string SenderAvatar { get; set; }

        /// <summary>
        /// Notification receiver id
        /// </summary>
        public string ReceiverId { get; set; }

        /// <summary>
        /// Notification type: 0: Info, 1: Success, 2: Warning, 3: Danger
        /// </summary>
        public byte Type { get; set; }

        /// <summary>
        /// Notification read status
        /// </summary>
        public bool IsRead { get; set; }

        /// <summary>
        /// Notification Url when user click.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Is system notification.
        /// </summary>
        public bool IsSystem { get; set; }

        /// <summary>
        /// Notification image when user tag onother into an image...
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// Time notification created
        /// </summary>
        public DateTime CreateTime { get; set; }

        public Notification()
        {
            CreateTime = DateTime.Now;
            IsRead = false;
        }
    }
}
