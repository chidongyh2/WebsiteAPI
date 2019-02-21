﻿namespace GHM.Core.Domain.ViewModels
{
    public class PageSearchViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string Icon { get; set; }
        public string BgColor { get; set; }
        public bool IsPublic { get; set; }
        public string Url { get; set; }
        public int? ParentId { get; set; }
        public string OrderPath { get; set; }
        public string IdPath { get; set; }
    }
}
