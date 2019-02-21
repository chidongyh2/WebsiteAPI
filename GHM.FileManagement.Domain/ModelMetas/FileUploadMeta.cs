using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace GHM.FileManagement.Domain.ModelMetas
{
    public class FileUploadMeta
    {
        public int? FolderId { get; set; }
        public IFormFileCollection FormFileCollection { get; set; }
    }
}
