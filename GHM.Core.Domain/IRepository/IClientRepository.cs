﻿using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using IdentityServer4.Stores;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientRepository : IClientStore
    {
        Task<Client> GetInfo(string clientId, bool isReadOnly = false);

        Task<int> Insert(ClientMeta clientMeta);

        Task<int> Update(Client client);

        Task<int> Delete(string clientId);

        Task<bool> CheckExists(string clientId);

        Task<bool> CheckNameExists(string clientId, string clientName);

        Task<List<Client>> Search(string keyword, bool? enabled, int page, int pageSize, out int totalRows);
    }
}
