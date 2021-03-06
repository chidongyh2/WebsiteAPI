﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IClientIdentityProviderRestrictionRepository
    {
        Task<int> Insert(ClientIdentityProviderRestriction clientIdentityProviderRestriction);
        Task<int> Update(ClientIdentityProviderRestriction clientIdentityProviderRestriction);
        Task<int> Delete(Guid id);
        Task<List<ClientIdentityProviderRestriction>> GetsByClientId(string clientId);
        Task<bool> CheckExists(Guid id, string clientId, string identityProviderRestriction);
        Task<ClientIdentityProviderRestriction> GetInfo(Guid id, bool isReadOnly = false);
    }
}
