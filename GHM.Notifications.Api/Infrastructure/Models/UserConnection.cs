using System;
using System.ComponentModel.DataAnnotations;

namespace GHM.Notifications.Api.Infrastructure.Models
{
    public class UserConnection
    {
        [MaxLength(50)]
        public string UserId { get; set; }

        [MaxLength(50)]
        public string ConnectionId { get; set; }

        public DateTime CreateTime { get; set; }

        public UserConnection()
        {
            CreateTime = DateTime.Now;
        }

        public UserConnection(string userId, string connectionId)
        {
            UserId = userId;
            ConnectionId = connectionId;
            CreateTime = DateTime.Now;
        }
    }
}
