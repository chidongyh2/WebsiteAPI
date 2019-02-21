using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Event.Domain.ModelMetas
{
    public class EventAlbumMeta
    {
        public string EventId { get; set; }
        public AlbumMeta Album { get; set; }
    }
}
