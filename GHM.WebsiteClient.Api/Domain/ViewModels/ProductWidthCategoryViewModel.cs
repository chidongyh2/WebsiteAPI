﻿using System;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class ProductWidthCategoryViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string Thumbnail { get; set; }
        public string Name { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public string DefaultUnit { get; set; }
        public decimal? SalePrice { get; set; }
        public string SeoLink { get; set; }
        public string Description { get; set; }
        public DateTime? LastUpdateTime { get; set; }
        public string ProductCategoryName { get; set; }
        public string ProductCategoryImage { get; set; }
        public int ProductCategoryId { get; set; }
    }
}
