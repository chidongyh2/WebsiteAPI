using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Infrastructure
{
    public class GhmControllerBase : ControllerBase
    {
        public BriefUser CurrentUser
        {
            get
            {
                var currentUser = HttpContext.GetCurrentUser();
                if (currentUser == null)
                {
                    HttpContext.Response.Redirect("/error/permission");
                }
                return currentUser;
            }
        }
    }
}
