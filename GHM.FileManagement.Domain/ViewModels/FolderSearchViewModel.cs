using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.FileManagement.Domain.ViewModels
{
    public class FolderSearchViewModel
    {
        public List<FileViewModel> Files { get; set; }
        public List<FolderViewModel> Folders { get; set; }
        public int TotalFiles { get; set; }
        public int TotalFolders { get; set; }
    }
}
