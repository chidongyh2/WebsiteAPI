namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class UserConnection
    {
        public string UserId { get; set; }
        public string ConnectionId { get; set; }
        public byte UserType { get; set; } // 0: Staff 1: Customer
    }
}
