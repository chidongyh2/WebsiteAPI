using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Models
{
    public class RetryPolicyOptions
    {
        public int Count { get; set; } = 3;

        public int BackoffPower { get; set; } = 2;
    }
}
