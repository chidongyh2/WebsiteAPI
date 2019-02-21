using GHM.Infrastructure.Models;

namespace GHM.ExecptionHandler.Api.Infrastructure.Models
{
    public class CustomException : EntityBase<string>
    {
        public string Message { get; set; }
        public string StackTrace { get; set; }
        public bool IsRead { get; set; }
    }
}
