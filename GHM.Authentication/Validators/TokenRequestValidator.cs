using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Models;
using IdentityServer4.Validation;

namespace GHM.Authentication.Validators
{
    public class TokenRequestValidator : ICustomTokenRequestValidator
    {

        public async Task ValidateAsync(CustomTokenRequestValidationContext context)
        {
            throw new NotImplementedException();
        }
    }
}
