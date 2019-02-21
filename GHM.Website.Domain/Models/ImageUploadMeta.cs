using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace GHM.Website.Domain.Models
{
    public class ImageUploadMeta
    {
        public string ImageFolderId { get; set; }
        public IFormFileCollection FormImageCollection { get; set; }
    }
}
