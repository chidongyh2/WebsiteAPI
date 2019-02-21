namespace GHM.Core.Domain.Models
{
    public class Language
    {
        /// <summary>
        /// Id là code của quốc gia VD: Việt Nam là vi-VN
        /// </summary>
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
