using System.Collections.Generic;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;

namespace GHM.Website.Domain.ViewModels
{
  public  class TagSubjectViewModel
    {
        public string TenantId { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorAvata { get; set; }
        public TagType Type { get; set; }
        public string SubjectId { get; set; }
        public string LanguageId { get; set; }
        public List<SubjectTagMeta> Tags { get; set; }
    }
}
