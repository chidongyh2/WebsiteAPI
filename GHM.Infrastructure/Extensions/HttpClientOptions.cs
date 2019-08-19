using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Extensions
{
    public class HttpClientOptions
    {
        public Uri BaseAddress { get; set; }

        public TimeSpan Timeout { get; set; }
    }
}
