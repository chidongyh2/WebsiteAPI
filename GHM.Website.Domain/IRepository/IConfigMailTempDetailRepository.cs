using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IConfigMailTempDetailRepository
    {

        Task<int> Insert(ConfigMailTempDetail configMailTempDetail);

        Task<int> Inserts(List<ConfigMailTempDetail> configMailTempDetails);

        Task<int> Update(string id, ConfigMailTempDetail configMailTempDetail);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<ConfigMailTempDetail> GetInfo(string id, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, bool isReadOnly = false);

        Task<List<ConfigMailTempDetail>> GetAll(string mapMailTempId, bool isReadOnly = false);
    }

}
