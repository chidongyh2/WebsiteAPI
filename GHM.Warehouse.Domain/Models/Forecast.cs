namespace GHM.Warehouse.Domain.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Forecast
    {
        public Forecast()
        {
            ForecastDetails = new HashSet<ForecastDetail>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string CreatorId { get; set; }

        [Required]
        [StringLength(50)]
        public string CreatorFullName { get; set; }

        [Required]
        [StringLength(500)]
        public string CreatorAvatar { get; set; }

        public DateTime CreateTime { get; set; }

        public byte Status { get; set; }

        public bool IsDelete { get; set; }

        [Required]
        [StringLength(50)]
        public string ConcurrencyStamp { get; set; }

        public byte Month { get; set; }

        public int Year { get; set; }

        public decimal TotalPrice { get; set; }

        [StringLength(500)]
        public string Note { get; set; }

        [StringLength(50)]
        public string ApproverId { get; set; }

        [StringLength(50)]
        public string ApproverFullName { get; set; }

        [StringLength(500)]
        public string ApproverAvatar { get; set; }

        public DateTime? ApprovedTime { get; set; }

        public int? ParentId { get; set; }

        [StringLength(500)]
        public string IdPath { get; set; }

        public virtual ICollection<ForecastDetail> ForecastDetails { get; set; }
    }
}
