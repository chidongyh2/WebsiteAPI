using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class NewsController : BaseController
    {
        // GET: /<controller>/
        private readonly INewsRepository _newsRepository;
        private readonly ICategoryRepository _categoryRepository;
        private IHostingEnvironment _env;

        public NewsController(INewsRepository newsRepository, ICategoryRepository categoryRepository, IHostingEnvironment env)
        {
            _newsRepository = newsRepository;
            _categoryRepository = categoryRepository;
            _env = env;
        }

        public async Task<ActionResult> Detail(string seolink)
        {
            var newsInfo = await _newsRepository.GetInfo(seolink);

            // ListNewNews
            ViewBag.ListNews = await _newsRepository.GetTopNewNews(5);

            // PreviousNews
            if (newsInfo != null)
            {
                ViewBag.PreviousNews = await _newsRepository.PreviousNews(newsInfo.Id);
                ViewBag.NextNews = await _newsRepository.NextNews(newsInfo.Id);
                ViewBag.ListCategory = await _categoryRepository.GetActiveSiblings(newsInfo.CategoryId);
            }

            return View(newsInfo);
        }

        public ActionResult DownLoadRecruimentForm()
        {
            try
            {
                byte[] fileBytes = System.IO.File.ReadAllBytes(Path.Combine(_env.ContentRootPath, "files","BM-NS.TD.03_thong-tin-ung-vien-du-tuyen.docx"));
                return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, "BM-NS.TD.03_thong-tin-ung-vien-du-tuyen.docx");
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return Content("Tệp tin không tồn tại.");
            }
        }
    }
}
