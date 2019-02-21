using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientPostLogoutRedirectUrisRepository
    {
        Task<ClientPostLogoutRedirectUris> GetInfo(Guid id);

        Task<int> Insert(ClientPostLogoutRedirectUris clientPostLogoutRedirectUris);

        Task<int> Update(ClientPostLogoutRedirectUris clientPostLogoutRedirectUris);

        Task<int> Delete(Guid id);

        Task<List<ClientPostLogoutRedirectUris>> GetByClientId(string clientId);

        Task<bool> CheckExists(string clientId, string uri);
    }
}
