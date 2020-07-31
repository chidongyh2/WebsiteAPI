using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientPostLogoutRedirectUrisRepository : RepositoryBase, IClientPostLogoutRedirectUrisRepository
    {
        private readonly IRepository<ClientPostLogoutRedirectUris> _clientPostLogoutRedirectUrisRepository;
        public ClientPostLogoutRedirectUrisRepository(IDbContext context) : base(context)
        {
            _clientPostLogoutRedirectUrisRepository = Context.GetRepository<ClientPostLogoutRedirectUris>();
        }

        public async Task<ClientPostLogoutRedirectUris> GetInfo(Guid id)
        {
            return await _clientPostLogoutRedirectUrisRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<int> Insert(ClientPostLogoutRedirectUris clientPostLogoutRedirectUris)
        {
            var isExists = await CheckExists(clientPostLogoutRedirectUris.ClientId, clientPostLogoutRedirectUris.Uri);
            if (isExists)
                return -1;

            _clientPostLogoutRedirectUrisRepository.Create(clientPostLogoutRedirectUris);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientPostLogoutRedirectUris clientPostLogoutRedirectUris)
        {
            var isExists = await CheckExists(clientPostLogoutRedirectUris.ClientId, clientPostLogoutRedirectUris.Uri);
            if (isExists)
                return -1;

            var info = await GetInfo(clientPostLogoutRedirectUris.Id);
            if (info == null)
                return -2;

            info.Uri = clientPostLogoutRedirectUris.Uri;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientPostLogoutRedirectUrisRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ClientPostLogoutRedirectUris>> GetByClientId(string clientId)
        {
            return await _clientPostLogoutRedirectUrisRepository.GetsAsync(true, x => x.ClientId == clientId);
        }

        public async Task<bool> CheckExists(string clientId, string uri)
        {
            return await _clientPostLogoutRedirectUrisRepository.ExistAsync(x =>
                x.ClientId == clientId && x.Uri == uri);
        }
    }
}
