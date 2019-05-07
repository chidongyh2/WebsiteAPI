using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Amiea.Controllers
{
    public class HelpFinderController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        public HelpFinderController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }
        [Route("color-finder")]
        public IActionResult Index()
        {
            return View();
        }
        [Route("color-advice")]
        public IActionResult ColorAdvice()
        {
            var currentDiriectory = Environment.CurrentDirectory;
            XmlDocument doc = new XmlDocument();
            doc.Load(currentDiriectory+ "/wwwroot/lib/help-finder/xml/color_advice.xml");
            return Ok(doc.InnerXml);
        }
    }
}