using Microsoft.AspNet.SignalR;
using System.Linq;

namespace GHM.Web.ThaiThinhMedic.Hubs
{
    public class PatientWaitingHub : Hub
    {
        //public static string _connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
        public void Hello()
        {
            Clients.All.hello();
        }

        //[HubMethodName("updateWaitingStatus")]
        //public static void UpdateWaitingStatus()
        //{
        //    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<PatientWaitingHub>();
        //    context.Clients.All.updateWaitingStatus();
        //}
    }
}
