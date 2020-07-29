﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.Truck.Models
{
    public class Breadcrumb
    {
        public long? ObjectId { get; set; }
        public long ObjectType { get; set; }
        public string Name { get; set; }
        public string NamePath { get; set; }
        public bool IsCurrent { get; set; }
        public string Url { get; set; }
    }
}
