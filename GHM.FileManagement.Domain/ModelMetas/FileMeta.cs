using Microsoft.AspNetCore.Http;

namespace GHM.FileManagement.Domain.ModelMetas
{
    public class FileMeta
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int? FolderId { get; set; }    
    }
}
