using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;

namespace GHM.Customer.Domain.IServices
{
    public interface IContactCustomerService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, ModelMetas.ContactCustomerMeta contactCustomerMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, ModelMetas.ContactCustomerMeta contactCustomerMeta);

        Task<ActionResultResponse> ForceDelete(string tenantId, string id);
    }

}
