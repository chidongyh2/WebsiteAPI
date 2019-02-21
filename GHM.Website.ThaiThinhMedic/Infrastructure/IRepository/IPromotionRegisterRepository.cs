using System;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IPromotionRegisterRepository
    {
        Task<ActionResultResponse> Insert(PromotionRegister entity);

        Task<ActionResultResponse> Update(PromotionRegister entity);

        Task<ActionResultResponse> Delete(string id);

        Task<bool> CheckExists(string promotionId, string userId);

        Task<bool> CheckExists(string promotionId, string time, DateTime examinationDate);

        Task<PromotionRegister> GetInfo(string id);

        Task<PromotionRegister> GetInfo(string promotionId, string userId);
    }
}
