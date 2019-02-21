using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Core.Domain.Models
{
    public class AppConfig
    {
        /// <summary>
        /// Key config
        /// </summary>
        public string Key { get; set; }

        /// <summary>
        /// Value config
        /// </summary>
        public string Value { get; set; }

        /// <summary>
        /// Group config. Use when mutiple key inside a group.
        /// </summary>
        public string Group { get; set; }
    }
}
