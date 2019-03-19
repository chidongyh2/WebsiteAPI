using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IContactService
    {

        Task<ActionResultResponse<dynamic>> Insert(string tenantId, string creatorId, string creatorFullName, ContactMeta contactMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string id, ContactType type, string lastUpdateUserId, string lastUpdateFullName, ContactMeta contactMeta);

        Task<ActionResultResponse> Delete(string id, ContactType type);

        Task<List<ContactSearchViewModel>> GetAll(string subjectId, ContactType type);

    }

}
