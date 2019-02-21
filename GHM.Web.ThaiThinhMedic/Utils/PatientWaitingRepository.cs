using GHM.Web.ThaiThinhMedic.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace GHM.Web.ThaiThinhMedic.Utils
{
    public class PatientWaitingRepository
    {
        //private static string _connectionString = ConfigurationManager.ConnectionStrings["Clinic"].ToString();

        public IEnumerable<PatientWaiting> GetAllMessages(byte tang, byte khuVuc)
        {
            var messages = new List<PatientWaiting>();
            //using (var connection = new SqlConnection(_connectionString))
            //{
            //    connection.Open();
            //    using (var command = new SqlCommand(@"SELECT [MaBenhNhan], [MaPhongKham], [TrangThai] FROM [dbo].[BenhNhanBacSy]
            //        WHERE DATEDIFF(DAY, BenhNhanBacSy.NgayDenKham , @NgayDenKham) = 0", connection))
            //    {
            //        command.Parameters.Add("@NgayDenKham", SqlDbType.DateTime);
            //        command.Parameters["@NgayDenKham"].Value = DateTime.Today;

            //        command.Notification = null;

            //        var dependency = new SqlDependency(command);
            //        dependency.OnChange += new OnChangeEventHandler(dependency_OnChange);

            //        if (connection.State == ConnectionState.Closed)
            //            connection.Open();

            //        var reader = command.ExecuteReader();

            //        while (reader.Read())
            //        {
            //            messages.Add(item: new PatientWaiting
            //            {
            //                MaBenhNhan = reader["MaBenhNhan"] == DBNull.Value ? "" : (string)reader["MaBenhNhan"],
            //                SoPhong = reader["MaPhongKham"] == DBNull.Value ? "" : (string)reader["MaPhongKham"],
            //                TrangThai = reader["TrangThai"] == DBNull.Value ? -1 : (int)reader["TrangThai"]
            //            });
            //        }
            //    }
            //}

            return messages;
        }

        //private void dependency_OnChange(object sender, SqlNotificationEventArgs e)
        //{
        //  if (e.Type == SqlNotificationType.Change)
        //    {
        //        var context = GlobalHost.ConnectionManager.GetHubContext<PatientWaitingHub>();
        //        context.Clients.All.updateWaitingStatus();
        //        //PatientWaitingHub.UpdateWaitingStatus();
        //    }  
        //}
    }
}
