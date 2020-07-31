using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Authentication.Models.ConfigViewModels
{
    public class UserPermissionSearchViewModel
    {
        public string UserId { get; set; }
        public int PageId { get; set; }
        public string PageName { get; set; }
        public string Icon { get; set; }
        public string IdPath { get; set; }        
        public int Permissions { get; set; }
    }
}
