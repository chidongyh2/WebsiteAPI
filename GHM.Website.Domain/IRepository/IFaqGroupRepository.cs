using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace GHM.Website.Domain.IRepository
{
    public interface IFaqGroupRepository
    {
        Task<List<FaqGroupViewModel>> Search(string tenantId, string languageId, string keyword,
          bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(FaqGroup faqGroup);

        Task<int> Update(FaqGroup faqGroup);

        Task<int> Delete(string faqGroupId);

        Task<int> ForceDelete(string faqGroupId);

        Task<FaqGroup> GetInfo(string faqGroupId, bool isReadonly = false);

        Task<FaqGroup> GetInfo(string tenantId, string faqGroupId, bool isReadonly = false);
    }
}
