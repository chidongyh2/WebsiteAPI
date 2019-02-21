using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientPropertyRepository
    {
        Task<ClientProperty> GetInfo(Guid id, bool isReadOnly = false);

        Task<ClientProperty> FindByClientIdAndKey(string clientId, string key);

        Task<bool> CheckExistsByKey(Guid id, string clientId, string key);

        Task<int> Insert(ClientProperty clientProperty);

        Task<int> Update(ClientProperty clientProperty);

        Task<int> Delete(Guid id);

        Task<List<ClientProperty>> GetsByClientId(string clientId);
    }
}
