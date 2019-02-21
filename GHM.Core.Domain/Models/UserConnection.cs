using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Core.Domain.Models
{
    public class UserConnection
    {
        /// <summary>
        /// UserId
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Connection id (Signalr connection id)
        /// </summary>
        public string ConnectionId { get; set; }
    }
}
