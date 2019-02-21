using GHM.Website.Domain.ModelMetas;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class MailDetailViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string MailTypeId { get; set; }
        public bool IsActive { get; set; }
        public string Owner { get; set; }
        public string ConcurrencyStamp { get; set; }

    }
}
