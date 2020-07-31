using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientAllowedScopeRepository : RepositoryBase, IClientAllowedScopesRepository
    {
        private readonly IRepository<ClientAllowedScope> _clientAllowedScopeRepository;
        public ClientAllowedScopeRepository(IDbContext context) : base(context)
        {
            _clientAllowedScopeRepository = Context.GetRepository<ClientAllowedScope>();
        }

        public async Task<int> Insert(ClientAllowedScope clientAllowedScope)
        {
            var isExists = await CheckExists(clientAllowedScope.ClientId, clientAllowedScope.Scope);
            if (isExists)
                return -1;

            _clientAllowedScopeRepository.Create(clientAllowedScope);
            return await Context.SaveChangesAsync();
        }        

        public async Task<int> Delete(string clientId, string scopeName)
        {
            var info = await GetInfo(clientId, scopeName);
            if (info == null)
                return -1;

            _clientAllowedScopeRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ClientAllowedScope> GetInfo(string clientId, string scopeName, bool isReadOnly = false)
        {
            return await _clientAllowedScopeRepository.GetAsync(isReadOnly,
                x => x.ClientId == clientId && x.Scope == scopeName);
        }

        public async Task<bool> CheckExists(string clientId, string scopeName)
        {
            return await _clientAllowedScopeRepository.ExistAsync(x => x.ClientId == clientId && x.Scope == scopeName);
        }

        public async Task<List<ClientAllowedScope>> GetsByClientId(string clientId)
        {
            return await _clientAllowedScopeRepository.GetsAsync(true, x => x.ClientId == clientId);
        }
    }
}
