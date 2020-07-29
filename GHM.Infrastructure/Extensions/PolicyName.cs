using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Extensions
{
    public static class PolicyName
    {
        public const string HttpCircuitBreaker = nameof(HttpCircuitBreaker);
        public const string HttpRetry = nameof(HttpRetry);
    }
}
