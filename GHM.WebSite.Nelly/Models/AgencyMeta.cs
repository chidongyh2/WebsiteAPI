using System.ComponentModel.DataAnnotations;

namespace GHM.WebSite.Nelly.Models
{
    public class AgencyMeta
    {
        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 6 ký tự và lớn hơn 255 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        [Display(Name = "Họ tên")]
        public string Name { get; set; }

        
    }
}
