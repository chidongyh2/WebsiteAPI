using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
  public  class VideoGroupTranslation
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string VideoGroupId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public bool IsDelete { get; set; }

        public VideoGroupTranslation()
        {
            IsDelete = false;
        }

        public VideoGroup VideoGroup { get; set; }
    }
}
