namespace GHM.Warehouse.Domain.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class ForecastDetail
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(50)]
        public string ProductId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ForecastId { get; set; }

        [Required]
        [StringLength(50)]
        public string UnitId { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public virtual Forecast Forecast { get; set; }
    }
}
