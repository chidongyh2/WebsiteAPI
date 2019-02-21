using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
namespace GHM.Website.Domain.IRepository
{
   public interface IFeedbackRepository
    {
        Task<List<Feedback>> Search(string tenantId,  string keyword,
            DateTime? startDate, DateTime? endDate, int page, int pageSize, out int totalRows);

        Task<int> Insert(Feedback feedback);

        Task<int> Update(Feedback feedback);

        Task<int> Delete(string feedbackId);

        Task<Feedback> GetInfo(string feedbackId, bool isReadonly = false);

        Task<Feedback> GetInfo(string tenantId, string feedbackId, bool isReadonly = false);
    }
}
