using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientRedirectUrisRepository : RepositoryBase, IClientRedirectUrisRepository
    {
        private readonly IRepository<ClientRedirectUris> _clientRedirectUrisRepository;
        public ClientRedirectUrisRepository(IDbContext context) : base(context)
        {
            _clientRedirectUrisRepository = Context.GetRepository<ClientRedirectUris>();
        }

        public async Task<ClientRedirectUris> GetInfo(Guid id)
        {
            return await _clientRedirectUrisRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<int> Insert(ClientRedirectUris clientRedirectUris)
        {
            _clientRedirectUrisRepository.Create(clientRedirectUris);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientRedirectUris clientRedirectUris)
        {
            var isExists = await CheckExists(clientRedirectUris.ClientId, clientRedirectUris.Uri);
            if (isExists)
                return -1;

            var info = await GetInfo(clientRedirectUris.Id);
            if (info == null)
                return -2;

            info.Uri = clientRedirectUris.Uri;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {            
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientRedirectUrisRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ClientRedirectUris>> GetByClientId(string clientId)
        {
            return await _clientRedirectUrisRepository.GetsAsync(true, x => x.ClientId == clientId);
        }

        public async Task<bool> CheckExists(string clientId, string uri)
        {
            return await _clientRedirectUrisRepository.ExistAsync(x => x.ClientId == clientId && x.Uri == uri);
        }
    }
}
