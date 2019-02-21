using GHM.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
    public class Banner : EntityBase<string>
    {
        public string TenantId { get; set; }
        public string Name { get; set; }
        public BannerType Type { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public DisplayType DisplayType { get; set; }
        public EffectType EffectType { get; set; }
        public Position? Position { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public bool IsPopUp { get; set; }

        public Banner()
        {
            CreateTime = DateTime.Now;
            TenantId = "";
            Name = "";
            UnsignName = "";
            Type = BannerType.Normal;
            DisplayType = DisplayType.Static;
            EffectType = EffectType.Fade;
            IsActive = false;
            IsDelete = false;
            IsPopUp = false;
        }
    }
}
