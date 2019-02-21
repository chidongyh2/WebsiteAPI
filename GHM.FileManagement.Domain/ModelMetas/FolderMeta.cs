using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.FileManagement.Domain.ModelMetas
{
    public class FolderMeta
    {

        public string Name { get; set; }
        public int? Order { get; set; }
        public int? ParentId { get; set; }
        public string ConcurrencyStamp { get; set; }
        
    }
}
