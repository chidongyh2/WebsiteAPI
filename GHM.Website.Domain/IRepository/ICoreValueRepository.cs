using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
namespace GHM.Website.Domain.IRepository
{
    public interface ICoreValueRepository
    {
        Task<List<CoreValueViewModel>> Search(string tenantId, string languageId, string keyword,
            bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(CoreValue coreValue);

        Task<int> Update(CoreValue coreValue);

        Task<int> Delete(string coreValueId);

        Task<int> ForceDelete(string coreValueId);

        Task<CoreValue> GetInfo(string coreValueId, bool isReadonly = false);

        Task<CoreValue> GetInfo(string tenantId, string coreValueId, bool isReadonly = false);

        Task<List<ValueViewModel>> GetAllActivatedCoreValue(string tenantId, string languageId);
    }
}
