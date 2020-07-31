using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientAllowedGrantTypeRepository : RepositoryBase, IClientAllowedGrantTypeRepository

    {
        private readonly IRepository<ClientAllowedGrantTypes> _clientAllowedGrantTypeRepository;
        public ClientAllowedGrantTypeRepository(IDbContext context) : base(context)
        {
            _clientAllowedGrantTypeRepository = Context.GetRepository<ClientAllowedGrantTypes>();
        }

        public async Task<int> Insert(ClientAllowedGrantTypes clientAllowedGrantTypes)
        {
            var isExists =
                await CheckExists(clientAllowedGrantTypes.ClientId, clientAllowedGrantTypes.AllowedGrantType);
            if (isExists)
                return -1;

            _clientAllowedGrantTypeRepository.Create(clientAllowedGrantTypes);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientAllowedGrantTypes clientAllowedGrantTypes)
        {
            var info = await GetInfo(clientAllowedGrantTypes.Id);
            if (info == null)
                return -1;

            info.AllowedGrantType = clientAllowedGrantTypes.AllowedGrantType;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientAllowedGrantTypeRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ClientAllowedGrantTypes> GetInfo(Guid id)
        {
            return await _clientAllowedGrantTypeRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<bool> CheckExists(string clientId, string grantType)
        {
            return await _clientAllowedGrantTypeRepository.ExistAsync(x =>
                x.ClientId == clientId && x.AllowedGrantType == grantType);
        }

        public async Task<List<ClientAllowedGrantTypes>> GetByClientId(string clientId)
        {
            return await _clientAllowedGrantTypeRepository.GetsAsync(true, x => x.ClientId == clientId);
        }
    }
}
