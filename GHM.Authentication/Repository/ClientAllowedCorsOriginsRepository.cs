using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Authentication.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Authentication.Repository
{
    public class ClientAllowedCorsOriginsRepository : RepositoryBase, IClientAllowedCorsOriginsRepository
    {
        private readonly IRepository<ClientAllowedCorsOrigin> _clientAllowedCorsOriginRepository;
        public ClientAllowedCorsOriginsRepository(IDbContext context) : base(context)
        {
            _clientAllowedCorsOriginRepository = Context.GetRepository<ClientAllowedCorsOrigin>();
        }

        public async Task<int> Insert(ClientAllowedCorsOrigin clientAllowedCorsOrigin)
        {
            var isExists = await CheckExist(clientAllowedCorsOrigin.Id, clientAllowedCorsOrigin.ClientId,
                clientAllowedCorsOrigin.Domain);
            if (isExists)
                return -1;

            _clientAllowedCorsOriginRepository.Create(clientAllowedCorsOrigin);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ClientAllowedCorsOrigin clientAllowedCorsOrigin)
        {
            var isExists = await CheckExist(clientAllowedCorsOrigin.Id, clientAllowedCorsOrigin.ClientId,
                clientAllowedCorsOrigin.Domain);
            if (isExists)
                return -1;

            var info = await GetInfo(clientAllowedCorsOrigin.Id);
            if (info == null)
                return -2;

            info.Domain = clientAllowedCorsOrigin.Domain;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(Guid id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _clientAllowedCorsOriginRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ClientAllowedCorsOrigin> GetInfo(Guid id, bool isReadOnly = false)
        {
            return await _clientAllowedCorsOriginRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<bool> CheckExist(Guid id, string clientId, string domain)
        {
            return await _clientAllowedCorsOriginRepository.ExistAsync(x =>
                x.Id != id && x.ClientId == clientId && x.Domain == domain);
        }

        public async Task<List<ClientAllowedCorsOrigin>> GetsByClientId(string clientId, bool isReadOnly = false)
        {
            return await _clientAllowedCorsOriginRepository.GetsAsync(true, x => x.ClientId == clientId);
        }
    }
}
