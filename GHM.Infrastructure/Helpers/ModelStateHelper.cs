using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace GHM.Infrastructure.Helpers
{
    public static class ModelStateHelper
    {
        public static List<List<string>> GetErrors(this ModelStateDictionary modelState)
        {
            var values = modelState.Values;
            return values.Select(x => x.Errors.Select(e => e.ErrorMessage).ToList())
                .ToList();
        }
    }
}
