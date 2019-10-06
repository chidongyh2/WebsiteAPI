using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IRepository
{
    public interface IFaqRepository
    {
        Task<int> Insert(Faq faq);

        Task<int> Update(Faq faq);

        Task<int> Delete(string faqId);

        Task<int> ForceDelete(string faqId);

        Task<Faq> GetInfo(string faqId, bool isReadonly = false);

        Task<Faq> GetInfo(string tenantId, string faqId, bool isReadonly = false);
    }
}
