using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace GHM.Website.ThaiThinhMedic.Controllers 
{
    public class AccountController : BaseController
    {

        // GET: /<controller>/
        //private readonly IPatientRepository _patientRepository;
        //private readonly IUserSessionRepository _userSessionRepository;

        //public AccountController(IPatientRepository patientRepository, IUserSessionRepository userSessionRepository)
        //{
        //    _patientRepository = patientRepository;
        //    _userSessionRepository = userSessionRepository;
        //}

        public ActionResult Login()
        {
            //if (CurrentPatient != null)
            //{
            //    return Redirect("/");
            //}
            return View();
        }

        public async Task<JsonResult> DoLogin(string userName, string password)
        {
            //if (string.IsNullOrEmpty(userName))
            //    return Json(-1);

            //if (string.IsNullOrEmpty(password))
            //    return Json(-2);

            //var loginLog = new LoginLog
            //{
            //    Browser = HttpContext.Request.Browser.Browser,
            //    Ip = HttpContext.Request.UserHostAddress,
            //    Os = HttpContext.Request.Browser.Platform,
            //    Version = HttpContext.Request.Browser.Version
            //};

            //var result = await _patientRepository.DoAuthenticate(userName, password, loginLog);
            //if (result != null)
            //{
            //    await IdentitySignin(result);
            //}
            //else
            //{
            //    return Json(-3);
            //}

            return Json(1);
        }

        public async Task<JsonResult> LoginToDemoAccount()
        {
            //var loginLog = new LoginLog
            //{
            //    Browser = HttpContext.Request.Browser.Browser,
            //    Ip = HttpContext.Request.UserHostAddress,
            //    Os = HttpContext.Request.Browser.Platform,
            //    Version = HttpContext.Request.Browser.Version
            //};

            //var result = await _patientRepository.DoAuthenticate("121129193105", "0123456789", loginLog);

            //if (result != null)
            //{
            //    await IdentitySignin(result);
            //}
            //else
            //{
            //    return Json(-3);
            //}

            return Json(1);
        }

        public ActionResult ReLogin()
        {
            //AuthenticationManager.SignOut();
            return Redirect("/dang-nhap");
        }

        public ActionResult LogOut()
        {
            //AuthenticationManager.SignOut();
            return Redirect("/");
        }


       // private IAuthenticationManager AuthenticationManager => HttpContext.GetOwinContext().Authentication;

        //private async Task IdentitySignin(BenhNhan user, bool isPersistent = false)
        //{
        //    var claims = new List<Claim>
        //    {
        //        new Claim(ClaimTypes.NameIdentifier, user.MaBenhNhan.ToString(CultureInfo.InvariantCulture)),
        //        new Claim(ClaimTypes.Name, !string.IsNullOrEmpty(user.UserName) ? user.UserName : user.MaBenhNhan)
        //};

        //    var identity = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);

        //    AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie, DefaultAuthenticationTypes.ExternalCookie);
        //    AuthenticationManager.SignIn(new AuthenticationProperties()
        //    {
        //        AllowRefresh = true,
        //        IsPersistent = isPersistent,
        //        ExpiresUtc = DateTime.UtcNow.AddDays(2)
        //    }, identity);

        //    await _userSessionRepository.InsertUserSessionLogin(string.IsNullOrEmpty(user.UserName) ? user.MaBenhNhan : user.UserName, Session.SessionID, 1);

        //    var cookieLoginSession = new HttpCookie("pls", Session.SessionID) { Expires = DateTime.Now.AddYears(1) }; // uls: login session
        //    Response.Cookies.Add(cookieLoginSession);
        //}
    }
}
