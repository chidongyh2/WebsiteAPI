using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Models
{
    public class PolicyOptions
    {
        public CircuitBreakerPolicyOptions HttpCircuitBreaker { get; set; }

        public RetryPolicyOptions HttpRetry { get; set; }
    }
}
