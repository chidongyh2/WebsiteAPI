using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas
{
    public class CategoryMeta
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string ParentId { get; set; }
    }
}
