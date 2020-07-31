using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientSecretRepository : RepositoryBase, IClientSecretRepository
    {
        private readonly IRepository<ClientSecret> _clientSecretRepository;
        public ClientSecretRepository(IDbContext context) : base(context)
        {
            _clientSecretRepository = Context.GetRepository<ClientSecret>();
        }

        public async Task<ClientSecret> GetInfo(Guid id)
        {
            return await _clientSecretRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<int> Insert(ClientSecret clientSecret)
        {
            _clientSecretRepository.Create(clientSecret);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientSecret clientSecret)
        {
            var clientSecretInfo = await GetInfo(clientSecret.Id);
            if (clientSecretInfo == null)
                return -1;

            clientSecretInfo.Value = clientSecret.Value;
            clientSecretInfo.Description = clientSecret.Description;
            clientSecretInfo.Expiration = clientSecret.Expiration;
            clientSecretInfo.Type = clientSecret.Type;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var clientSecretInfo = await GetInfo(id);
            if (clientSecretInfo == null)
                return -1;

            _clientSecretRepository.Delete(clientSecretInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ClientSecret>> GetByClientId(string clientId)
        {
            return await _clientSecretRepository.GetsAsync(true, x => x.ClientId == clientId);
        }
    }
}
