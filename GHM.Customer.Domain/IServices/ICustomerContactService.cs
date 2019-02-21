using GHM.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Customer.Domain.IServices
{
    public interface ICustomerContactService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, ModelMetas.CustomerContactMeta CustomerContactMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, ModelMetas.CustomerContactMeta CustomerContactMeta);

        Task<ActionResultResponse> ForceDelete(string tenantId, string id);
    }
}
