using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientAllowedGrantTypeRepository
    {
        Task<int> Insert(ClientAllowedGrantTypes clientAllowedGrantTypes);        

        Task<int> Update(ClientAllowedGrantTypes clientAllowedGrantTypes);

        Task<int> Delete(Guid id);

        Task<ClientAllowedGrantTypes> GetInfo(Guid id);

        Task<bool> CheckExists(string clientId, string grantType);

        Task<List<ClientAllowedGrantTypes>> GetByClientId(string clientId);
    }
}
