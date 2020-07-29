using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

namespace GHM.Infrastructure.Filters
{
    [AttributeUsage(AttributeTargets.All, AllowMultiple = true)]
    public class AllowPermission : Attribute, IAsyncActionFilter
    {
        public PageId PageId { get; set; }
        public Permission[] Permissions { get; set; }
        public AllowPermission(PageId pageId, params Permission[] permissions)
        {
            PageId = pageId;
            Permissions = permissions;
        }
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            //var header = context.HttpContext.Request.Headers;
            //header.TryGetValue("Permissions", out var permissionsString);
            //var permissions = new List<PagePermission>();
            //if (!string.IsNullOrEmpty(permissionsString))
            //{
            //    permissions = JsonConvert.DeserializeObject<List<PagePermission>>(permissionsString);
            //    permissions.Add(new PagePermission(PageId, Permissions));
            //}
            //else
            //{
            //    permissions.Add(new PagePermission(PageId, Permissions));

            //}
            //if (header.ContainsKey("Permissions"))
            //{
            //    header.Remove("Permissions");
            //    AddHeader();
            //}
            //else
            //{
            //    AddHeader();
            //}

            await next();

            //void AddHeader()
            //{
            //    header.Add(
            //        new KeyValuePair<string, StringValues>("Permissions", JsonConvert.SerializeObject(permissions)
            //    ));
            //}
        }
    }
}
