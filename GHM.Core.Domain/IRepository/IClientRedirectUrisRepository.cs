using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientRedirectUrisRepository
    {
        Task<ClientRedirectUris> GetInfo(Guid id);

        Task<int> Insert(ClientRedirectUris clientRedirectUris);

        Task<int> Update(ClientRedirectUris clientRedirectUris);

        Task<int> Delete(Guid id);

        Task<List<ClientRedirectUris>> GetByClientId(string clientId);

        Task<bool> CheckExists(string clientId, string uri);
    }
}
