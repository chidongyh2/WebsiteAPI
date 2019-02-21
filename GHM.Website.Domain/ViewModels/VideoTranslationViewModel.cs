using System.Collections.Generic;
using GHM.Website.Domain.ModelMetas;

namespace GHM.Website.Domain.ViewModels
{
  public  class VideoTranslationViewModel
    {
        public string LanguageId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<SubjectTagViewModel> Tags { get; set; }
    }
}
