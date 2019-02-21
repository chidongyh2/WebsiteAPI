using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class MailTypeViewModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public bool Ssl { get; set; }

        public string Host { get; set; }

        public int Port { get; set; }

    }
}
