using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
    public class MenuMeta
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
        public Position Position { get; set; }
        public EffectType EffectType { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
