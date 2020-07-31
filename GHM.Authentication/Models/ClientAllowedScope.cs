namespace GHM.Authentication.Models
{
    public class ClientAllowedScope
    {
        public string ClientId { get; set; }
        public string Scope { get; set; }

        public ClientAllowedScope()
        {
            
        }
        public ClientAllowedScope(string clientId, string scope)
        {
            ClientId = clientId;
            Scope = scope;
        }
    }
}
