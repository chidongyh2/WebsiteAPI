using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class ImageDetailViewModel
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<ImageTranslationViewModel> ImageTranslations { get; set; }

    }
}
