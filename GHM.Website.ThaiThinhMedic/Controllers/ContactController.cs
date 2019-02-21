using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Website.ThaiThinhMedic.Controllers
{
    public class ContactController : BaseController
    {
        private readonly IFeedbackReposiroty _feedbackReposiroty;

        public ContactController(IFeedbackReposiroty feedbackReposiroty)
        {
            _feedbackReposiroty = feedbackReposiroty;
        }

        public ActionResult Index()
        {
            return View();
        }

        [ValidateAntiForgeryToken, HttpPost]
        public async Task<JsonResult> Send(string customerId, string fullName, string phoneNumber, string email, string content)
        {
            if (string.IsNullOrWhiteSpace(fullName))
            {
                return Json(-1);
            }

            if (string.IsNullOrWhiteSpace(phoneNumber))
            {
                return Json(-2);
            }

            if (string.IsNullOrWhiteSpace(content))
            {
                return Json(-3);
            }

            var emailPattern = "^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$";
            if (!string.IsNullOrWhiteSpace(email) && !Regex.IsMatch(email, emailPattern))
            {
                return Json(-4);
            }

            return Json(await _feedbackReposiroty.Insert(new Feedback
            {
                CustomerId = customerId,
                FullName = fullName,
                PhoneNumber = phoneNumber,
                Email = email,
                Content = content,
                UnsignName = string.Format("{0} {1} {2}", fullName.StripVietnameseChars(), phoneNumber, email)
            }));
        }
    }
}
