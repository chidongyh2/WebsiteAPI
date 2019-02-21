using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class ClientIdentityProviderRestrictionRepository : RepositoryBase, IClientIdentityProviderRestrictionRepository

    {
        private readonly IRepository<ClientIdentityProviderRestriction> _clientIdentityProviderRestrictionRepository;
        public ClientIdentityProviderRestrictionRepository(IDbContext context) : base(context)
        {
            _clientIdentityProviderRestrictionRepository = Context.GetRepository<ClientIdentityProviderRestriction>();
        }

        public async Task<int> Insert(ClientIdentityProviderRestriction clientIdentityProviderRestriction)
        {
            var isExists = await CheckExists(clientIdentityProviderRestriction.Id,
                clientIdentityProviderRestriction.ClientId,
                clientIdentityProviderRestriction.IdentityProviderRestriction);
            if (isExists)
                return -1;

            _clientIdentityProviderRestrictionRepository.Create(clientIdentityProviderRestriction);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientIdentityProviderRestriction clientIdentityProviderRestriction)
        {
            var isExists = await CheckExists(clientIdentityProviderRestriction.Id,
                clientIdentityProviderRestriction.ClientId,
                clientIdentityProviderRestriction.IdentityProviderRestriction);
            if (isExists)
                return -1;

            var info = await GetInfo(clientIdentityProviderRestriction.Id);
            if (info == null)
                return -2;

            info.IdentityProviderRestriction = clientIdentityProviderRestriction.IdentityProviderRestriction;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientIdentityProviderRestrictionRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ClientIdentityProviderRestriction>> GetsByClientId(string clientId)
        {
            return await _clientIdentityProviderRestrictionRepository.GetsAsync(false, x => x.ClientId == clientId);
        }

        public async Task<bool> CheckExists(Guid id, string clientId, string identityProviderRestriction)
        {
            return await _clientIdentityProviderRestrictionRepository.ExistAsync(x => x.Id != id &&
                x.ClientId == clientId && x.IdentityProviderRestriction == identityProviderRestriction);
        }

        public async Task<ClientIdentityProviderRestriction> GetInfo(Guid id, bool isReadOnly = false)
        {
            return await _clientIdentityProviderRestrictionRepository.GetAsync(isReadOnly, x => x.Id == id);
        }
    }
}
