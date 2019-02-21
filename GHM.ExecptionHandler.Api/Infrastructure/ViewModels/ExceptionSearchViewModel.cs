using System;

namespace GHM.ExecptionHandler.Api.Infrastructure.ViewModels
{
    public class ExceptionSearchViewModel
    {
        public string TenantId { get; set; }
        public string ServiceName { get; set; }
        public bool IsRead { get; set; }
        public DateTime CreateTime { get; set; }
    }
}
