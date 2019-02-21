using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IPromotionVoucherRepository
    {
        Task<ActionResultResponse> Insert(PromotionVoucher entity);

        Task<ActionResultResponse> Update(PromotionVoucher entity);

        Task<long> Delete(string id);

        Task<List<PromotionVoucher>> Search(string keyword, string promotionId, int page, int pageSize, out long totalRows);

        Task<long> Inserts(List<PromotionVoucher> listVoucher);

        Task<bool> CheckIsUsed(string code);

        Task<bool> CheckIsUsedById(string id);

        Task<bool> CheckCodeExists(string id, string code);

        Task<long> UseVoucher(string code);

        Task<long> UseVoucher(string code, string userId, string fullName, string email, string phoneNumber);

        Task<long> UseVoucher(string promotionId, string subjectId, string code, string userId, string fullName, string email, string phoneNumber);

        Task<PromotionVoucher> GetInfo(string id);

        Task<PromotionVoucher> GetInfoByCode(string code);

        Task<PromotionVoucher> GetInfoByPromotionIdAndPhoneNumber(string promotionId, string phoneNumber);

        Task<long> GetTotalVoucher(string promotionId);

        Task<bool> CheckVoucherBelongToPromotion(string promotionId, string voucherCode);

        Task<bool> CheckIsAssignForUser(string id);

        Task<long> UpdateUsedTime(string id, string userId, string fullName, string phoneNumber, string email);
    }
}
