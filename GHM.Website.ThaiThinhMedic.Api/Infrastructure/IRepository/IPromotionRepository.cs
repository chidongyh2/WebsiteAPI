using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IPromotionRepository
    {
        Task<string> Insert(Promotion promotion);

        Task<long> Update(Promotion promotion);

        Task<List<Promotion>> Search(string keyword, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out long totalRows);

        Task<bool> CheckExists(string id, string name, DateTime? fromDate, DateTime? toDate);

        Task<bool> CheckExists(string id);

        Task<bool> CheckAvailable(string id);

        Task<long> Delete(string id, bool? isConfirm);

        Task<Promotion> GetInfo(string id);

        Task<Promotion> GetBySeoLink(string seoLink);
    }
}