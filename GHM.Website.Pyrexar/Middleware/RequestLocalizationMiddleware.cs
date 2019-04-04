using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.Pyrexar.Middleware
{
    public class RequestLocalizationMiddleware
    {
        private readonly RequestDelegate _next;

        public RequestLocalizationMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var defaultCulture = new CultureInfo("vi-VN");
            SetCurrentCulture(defaultCulture, defaultCulture);
            await _next(context);
        }

        private void SetCurrentCulture(CultureInfo culture, CultureInfo uiCulture)
        {
            CultureInfo.CurrentCulture = new CultureInfo(culture.Name);
        }
    }
}
