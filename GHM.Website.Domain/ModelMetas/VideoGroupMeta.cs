using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ModelMetas
{
    public class VideoGroupMeta
    {
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<VideoGroupTranslationMeta> VideoGroupTranslations { get; set; }
    }
}
