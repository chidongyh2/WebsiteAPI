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
    public class ResearchDevelopmentController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        public ResearchDevelopmentController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }
        [Route("research-development")]
        public IActionResult Index()
        {
            return View();
        }
        
    }
}