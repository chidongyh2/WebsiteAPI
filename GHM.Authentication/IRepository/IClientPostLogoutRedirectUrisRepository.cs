using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.Models;

namespace GHM.Authentication.IRepository
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
