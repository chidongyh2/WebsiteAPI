using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Event.Domain.ModelMetas
{
    public class PhotoMeta
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
