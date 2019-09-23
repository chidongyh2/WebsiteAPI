using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class ProductImageViewModel
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public string ProductId { get; set; }
        public string Description { get; set; }
    }
}
