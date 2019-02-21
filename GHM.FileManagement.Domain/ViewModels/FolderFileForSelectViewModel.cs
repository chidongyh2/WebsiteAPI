using System;

namespace GHM.FileManagement.Domain.ViewModels
{
    public class FolderFileForSelectViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsFolder { get; set; }
        public string IdPath { get; set; }
        public string Type { get; set; }
        public string Extension { get; set; }

        public DateTime CreateTime { get; set; }

        public string Url { get; set; }

        public string ConcurrencyStamp { get; set; }

        public FolderFileForSelectViewModel()
        {
            IsFolder =false;
            IdPath = string.Empty;
            Type = string.Empty;
            Extension = string.Empty;
            Url = string.Empty;
        }


    }
}
