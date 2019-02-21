using System;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ViewModels
{
    public class MenuViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
        public Position Position { get; set; }
        public EffectType EffectType { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }

    }
}
