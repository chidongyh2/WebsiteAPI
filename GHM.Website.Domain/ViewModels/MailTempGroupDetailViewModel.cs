using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.ModelMetas;

namespace GHM.Website.Domain.ViewModels
{
    public class MailTempGroupDetailViewModel
    {
        public string Id { get; set; }
           
        public List<MailTempGroupTranslationMeta> MailTempGroupTranslations { get; set; }
    }
}
