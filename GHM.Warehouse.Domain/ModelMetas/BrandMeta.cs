using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ModelMetas
{
    /// <summary>
    /// Model meta được gửi lên từ truy vấn của client.
    /// </summary>

    public class BrandMeta
    {
        public string Name { get; set; }

        public bool IsActive { get; set; }

        public string Description { get; set; }

        public bool IsDelete { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Website { get; set; }

        public string Address { get; set; }
    }

}
