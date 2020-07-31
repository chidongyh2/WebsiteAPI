using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientPropertyRepository : RepositoryBase, IClientPropertyRepository
    {
        private readonly IRepository<ClientProperty> _clientPropertyRepository;
        public ClientPropertyRepository(IDbContext context) : base(context)
        {
            _clientPropertyRepository = Context.GetRepository<ClientProperty>();
        }

        public async Task<ClientProperty> GetInfo(Guid id, bool isReadOnly = false)
        {
            return await _clientPropertyRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<ClientProperty> FindByClientIdAndKey(string clientId, string key)
        {
            return await _clientPropertyRepository.GetAsync(true, x => x.ClientId == clientId && x.Key == key);
        }

        public async Task<bool> CheckExistsByKey(Guid id, string clientId, string key)
        {
            return await _clientPropertyRepository.ExistAsync(x => x.Id != id && x.ClientId == clientId && x.Key == key);
        }

        public async Task<int> Insert(ClientProperty clientProperty)
        {
            var isKeyExists = await CheckExistsByKey(clientProperty.Id, clientProperty.ClientId, clientProperty.Key);
            if (isKeyExists)
                return -1;

            _clientPropertyRepository.Create(clientProperty);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientProperty clientProperty)
        {
            var isKeyExists = await CheckExistsByKey(clientProperty.Id, clientProperty.ClientId, clientProperty.Key);
            if (isKeyExists)
                return -1;

            var info = await GetInfo(clientProperty.Id);
            if (info == null)
                return -2;

            info.Key = clientProperty.Key;
            info.Value = clientProperty.Value;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientPropertyRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ClientProperty>> GetsByClientId(string clientId)
        {
            return await _clientPropertyRepository.GetsAsync(true, x => x.ClientId == clientId);
        }
    }
}
