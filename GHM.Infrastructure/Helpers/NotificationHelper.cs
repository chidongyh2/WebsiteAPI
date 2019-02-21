using System;
using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace GHM.Infrastructure.Helpers
{
    public class NotificationHelper
    {
        private string HostName { get; set; }
        private string UserName { get; set; }
        private string Password { get; set; }

        public NotificationHelper()
        {
        }

        public NotificationHelper(string hostName, string userName, string password)
        {
            HostName = hostName;
            UserName = userName;
            Password = password;
        }

        public void Send<T>(T @event) where T : class
        {
            var factory = new ConnectionFactory
            {
                HostName = !string.IsNullOrEmpty(HostName) ? HostName : "localhost",
                UserName = !string.IsNullOrEmpty(UserName) ? UserName : "guest",
                Password = !string.IsNullOrEmpty(Password) ? Password : "guest",
            };

            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare("GHM_WebManager_Notification",
                        durable: true,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null);

                    var message = JsonConvert.SerializeObject(@event);
                    var body = Encoding.UTF8.GetBytes(message);
                    channel.BasicPublish(exchange: "ghmsoft_event_bus", routingKey: "NotificationEvent",
                        basicProperties: null, body: body);
                }
            }
        }
    }
}
