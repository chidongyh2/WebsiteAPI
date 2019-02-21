using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class MapMailTempViewModel
    {
        public string MailTempGroupId { get; set; }
        public string MailTempContentId { get; set; }
        public string GroupName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string FullMailSender { get; set; }
        public string FullMailReceiver { get; set; }
        public bool IsActive { get; set; }

    }
}
