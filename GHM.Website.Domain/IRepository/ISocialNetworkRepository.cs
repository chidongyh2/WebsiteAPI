using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface ISocialNetworkRepository
    {
        Task<List<SocialNetworkViewModel>> Search(string tenantId, string keyword, int page, int pageSize, out int totalRows);

        Task<int> Insert(SocialNetwork socialnetwork);

        Task<int> Inserts(List<SocialNetwork> socialnetworks);

        Task<int> Update(SocialNetwork socialnetwork);

        Task<int> Delete(string socialnetworkId);

        Task<int> ForceDelete(string socialnetworkId);

        Task<SocialNetwork> GetInfo(string socialnetworkId, bool isReadOnly = false);

        Task<bool> CheckExistsBySocialNetworkId(string socialnetworkId, string tenantId, bool isReadOnly = false);

        Task<List<SocialNetwork>> GetAll(string tenantId, bool isReadOnly = false);
    }
}
