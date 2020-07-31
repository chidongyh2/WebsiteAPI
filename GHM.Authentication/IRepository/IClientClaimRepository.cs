using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.Models;

namespace GHM.Authentication.IRepository
{
    public interface IClientClaimRepository
    {
        Task<int> Insert(ClientClaim clientClaim);

        Task<int> Update(ClientClaim clientClaim);

        Task<int> Delete(Guid id);

        Task<List<ClientClaim>> GetsClaimByClienId(string clientId);

        Task<ClientClaim> GetInfo(Guid id, bool isReadOnly = false);

        Task<bool> CheckExists(Guid id, string clientId, string claimType);
    }
}
