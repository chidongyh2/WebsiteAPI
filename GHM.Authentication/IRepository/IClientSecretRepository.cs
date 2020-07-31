using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.Models;

namespace GHM.Authentication.IRepository
{
    public interface IClientSecretRepository
    {
        Task<ClientSecret> GetInfo(Guid id);

        Task<int> Insert(ClientSecret clientSecret);

        Task<int> Update(ClientSecret clientSecret);

        Task<int> Delete(Guid id);
        Task<List<ClientSecret>> GetByClientId(string clientId);
    }
}
