using GHM.Infrastructure.Models;
using GHM.Product.Domain.Constants;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Product.Domain.IServices
{
    public interface IContactService
    {

        Task<ActionResultResponse<dynamic>> Insert(string tenantId, string creatorId, string creatorFullName, ContactMeta contactMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string id, ContactType type, string lastUpdateUserId, string lastUpdateFullName, ContactMeta contactMeta);

        Task<ActionResultResponse> Delete(string id, ContactType type);

        Task<List<ContactSearchViewModel>> GetAll(string subjectId, ContactType type);

    }

}
