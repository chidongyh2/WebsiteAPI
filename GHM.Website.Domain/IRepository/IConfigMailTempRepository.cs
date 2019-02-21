using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IConfigMailTempRepository
    {
        Task<List<MapMailTempViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string title, string mail, int page,int pageSize, out int totalRows);

        Task<int> Insert(ConfigMailTemp mapMailTemp);

        Task<int> Update(string id, ConfigMailTemp mapMailTemp);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<ConfigMailTemp> GetInfo(string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, bool isReadOnly = false);

        Task<List<ConfigMailTemp>> GetAll(string tenantId, bool isReadOnly = false);
    }

}
