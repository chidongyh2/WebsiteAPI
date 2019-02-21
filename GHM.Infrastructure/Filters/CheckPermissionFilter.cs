using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace GHM.Infrastructure.Filters
{
    public class CheckPermission : Attribute, IAsyncActionFilter
    {

        public CheckPermission()
        {
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            context.HttpContext.Request.Headers.TryGetValue("Permissions", out var permissionStringValues);
            if (!string.IsNullOrEmpty(permissionStringValues))
            {
                var permissions = JsonConvert.DeserializeObject<List<PagePermission>>(permissionStringValues);
                if (permissions == null || !permissions.Any())
                {
                    context.Result = new ForbidResult();
                    return;
                }

                var configuration = context.HttpContext.RequestServices.GetService(typeof(IConfiguration)) as IConfiguration;
                var apiUrl = configuration.GetApiUrl();
                if (apiUrl == null)
                {
                    context.Result = new BadRequestObjectResult(context.ModelState)
                    {
                        Value = new ActionResultResponse(-1,
                            "Missing some configuration. Please contact with Administrator.")
                    };
                    return;
                }

                if (string.IsNullOrEmpty(apiUrl.Authority))
                {
                    context.Result = new BadRequestObjectResult(context.ModelState)
                    {
                        Value = new ActionResultResponse(-2,
                            "Authen fail. Please contact with Administrator.")
                    };
                    return;
                }

                var disco = await DiscoveryClient.GetAsync(apiUrl.Authority);
                if (disco.IsError)
                {
                    context.Result = new ForbidResult();
                    return;
                }

                var serviceInfo = configuration.GetApiServiceInfo();
                if (serviceInfo == null)
                {
                    context.Result = new ForbidResult();
                    return;
                }

                // request token
                var tokenClient = new TokenClient(disco.TokenEndpoint, serviceInfo.ClientId, serviceInfo.ClientSecret);
                var tokenResponse = await tokenClient.RequestClientCredentialsAsync(serviceInfo.Scopes);
                if (tokenResponse.IsError)
                {
                    context.Result = new ForbidResult();
                    return;
                }

                // call api for check permission
                var client = new HttpClient();
                client.SetBearerToken(tokenResponse.AccessToken);

                var userId = context.HttpContext.GetUserId();
                if (string.IsNullOrEmpty(userId))
                {
                    context.Result = new ForbidResult();
                    return;
                }

                var content = JsonConvert.SerializeObject(permissions);
                var buffer = Encoding.UTF8.GetBytes(content);
                var byteContent = new ByteArrayContent(buffer);
                byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                var response =
                    await client.PostAsync($"{apiUrl.CheckPermissionUrl}{userId}", byteContent);
                if (!response.IsSuccessStatusCode)
                {
                    context.Result = new ForbidResult();
                    return;
                }

                var isHasPermission = bool.Parse(await response.Content.ReadAsStringAsync());
                if (!isHasPermission)
                {
                    context.Result = new ForbidResult();
                    return;
                }
            }
            await next();
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            // do something after the action executes
        }

        private static void HandlerErrorPermission(ActionExecutingContext context)
        {
            context.Result = new ForbidResult();
        }
    }
}
