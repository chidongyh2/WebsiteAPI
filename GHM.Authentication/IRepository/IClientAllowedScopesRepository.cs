using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.Models;

namespace GHM.Authentication.IRepository
{
    public interface IClientAllowedScopesRepository
    {
        Task<int> Insert(ClientAllowedScope clientAllowedScope);        

        Task<int> Delete(string clientId, string scopeName);

        Task<ClientAllowedScope> GetInfo(string clientId, string scopeName, bool isReadOnly = false);

        Task<bool> CheckExists(string clientId, string scopeName);

        Task<List<ClientAllowedScope>> GetsByClientId(string clientId);
    }
}
