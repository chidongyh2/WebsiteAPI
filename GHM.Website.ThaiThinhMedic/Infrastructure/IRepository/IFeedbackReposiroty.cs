using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Clinic.DataAccess;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IFeedbackReposiroty
    {
        Task<int> Insert(Feedback feedback);

        Task<List<Feedback>> Search(string keyword, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out long totalRows);
    }
}
