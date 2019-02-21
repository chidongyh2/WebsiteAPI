using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Core.Domain.Models
{
    public class Religion
    {
        public int Id { get; set; }

        /// <summary>
        /// Tên tôn giáo.
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Tên không dấu tìm kiếm.
        /// </summary>
        public string UnsignName { get; set; }

        public string LanguageId { get; set; }
    }
}
