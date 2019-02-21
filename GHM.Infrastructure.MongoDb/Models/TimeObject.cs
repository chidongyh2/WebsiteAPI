using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.MongoDb.Models
{
    public class TimeObject
    {
        public int Hour { get; set; }
        public int Minute { get; set; }
        public int Second { get; set; }
    }
}
