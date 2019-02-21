using System.Collections.Generic;
using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.ViewModels
{
  public  class MenuItemTreeViewModel
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public string Text { get; set; }
        public string Icon { get; set; }
        public string IdPath { get; set; }
        public dynamic Data { get; set; }
        public State State { get; set; }
        public List<MenuItemForSelectViewModel> Children { get; set; }
        public int? ChildCount { get; set; }

        public MenuItemTreeViewModel()
        {
            Icon = string.Empty;

            State = new State
            {
                Opened = false,
                Selected = false,
                Disabled = false
            };
        }
    }
}
