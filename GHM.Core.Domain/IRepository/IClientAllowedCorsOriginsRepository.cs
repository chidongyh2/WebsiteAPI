using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientAllowedCorsOriginsRepository
    {
        Task<int> Insert(ClientAllowedCorsOrigin clientAllowedCorsOrigin);
        Task<int> Update(ClientAllowedCorsOrigin clientAllowedCorsOrigin);
        Task<int> Delete(Guid id);
        Task<ClientAllowedCorsOrigin> GetInfo(Guid id, bool isReadOnly = false);
        Task<bool> CheckExist(Guid id, string clientId, string domain);
        Task<List<ClientAllowedCorsOrigin>> GetsByClientId(string clientId, bool isReadOnly = false);
    }
}
