using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class CategoryInvolve
    {
        public int CategoryId { get; set; }

        public int CategoryInvolveId { get; set; }

        public CategoryInvolve()
        {
            CategoryId = 0;
            CategoryInvolveId = 0;
        }
    }
}
