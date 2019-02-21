using System.Collections.Generic;

namespace GHM.Website.Event.Domain.ModelMetas
{
  public  class VideoTranslationMeta
    {
        public string LanguageId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<SubjectTagMeta> Tags { get; set; }
    }
}
