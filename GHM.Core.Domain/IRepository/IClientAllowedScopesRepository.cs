using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
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
