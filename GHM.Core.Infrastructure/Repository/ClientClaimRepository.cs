using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class ClientClaimRepository : RepositoryBase, IClientClaimRepository
    {
        private readonly IRepository<ClientClaim> _clientClaimRepository;
        public ClientClaimRepository(IDbContext context) : base(context)
        {
            _clientClaimRepository = Context.GetRepository<ClientClaim>();
        }

        public async Task<int> Insert(ClientClaim clientClaim)
        {
            var isExists = await CheckExists(clientClaim.Id, clientClaim.ClientId, clientClaim.ClaimType);
            if (isExists)
                return -1;

            _clientClaimRepository.Create(clientClaim);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientClaim clientClaim)
        {
            var isExists = await CheckExists(clientClaim.Id, clientClaim.ClientId, clientClaim.ClaimType);
            if (isExists)
                return -1;

            var info = await GetInfo(clientClaim.Id);
            if (info == null)
                return -2;

            info.ClaimType = clientClaim.ClaimType;
            info.ClaimValue = clientClaim.ClaimValue;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientClaimRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ClientClaim>> GetsClaimByClienId(string clientId)
        {
            return await _clientClaimRepository.GetsAsync(true, x => x.ClientId == clientId);
        }

        public async Task<ClientClaim> GetInfo(Guid id, bool isReadOnly = false)
        {
            return await _clientClaimRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<bool> CheckExists(Guid id, string clientId, string claimType)
        {
            return await _clientClaimRepository.ExistAsync(x =>
                x.Id != id && x.ClientId == clientId && x.ClaimType == claimType);
        }
    }
}
