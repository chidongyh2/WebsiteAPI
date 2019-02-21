using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.FileManagement.Domain.ViewModels
{
    public class FolderDetailViewModel
    {
        public int Order { get; set; }
        public int? ParentId { get; set; }
        public bool IsActive { get; set; }
        public int ChildCount { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
