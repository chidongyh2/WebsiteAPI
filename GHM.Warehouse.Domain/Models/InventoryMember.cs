namespace GHM.Warehouse.Domain.Models
{
    public class InventoryMember
    {
        public string Id { get; set; }

        public string InventoryId { get; set; }

        public string UserId { get; set; }

        public string FullName { get; set; }

        public string PositionName { get; set; }

        public string OfficeName { get; set; }

        public string Avatar { get; set; }       

        public Inventory Inventory { get; set; }
    }
}
