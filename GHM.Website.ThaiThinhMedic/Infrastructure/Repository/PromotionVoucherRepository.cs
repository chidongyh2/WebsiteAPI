using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.MongoDb;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using MongoDB.Driver;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class PromotionVoucherRepository : MongoDbRepositoryBase, IPromotionVoucherRepository
    {
        private readonly IMongoDbRepository<PromotionVoucher, string> _promotionVoucherRepository;
        private readonly IPromotionRepository _promotionRepository;
        private readonly IPromotionSubjectRepository _promotionSubjectRepository;

        public PromotionVoucherRepository(IMongoDbContext context, IPromotionRepository promotionRepository, IPromotionSubjectRepository promotionSubjectRepository) : base(context)
        {
            _promotionRepository = promotionRepository;
            _promotionSubjectRepository = promotionSubjectRepository;
            _promotionVoucherRepository = context.GetRepository<PromotionVoucher, string>();
        }

        public Task<List<PromotionVoucher>> Search(string keyword, string promotionId, int page, int pageSize, out long totalRows)
        {
            Expression<Func<PromotionVoucher, bool>> spec = x => x.PromotionId == promotionId;

            var sort = Context.Filters.Sort<PromotionVoucher, string>(x => x.Id, true);
            var paging = Context.Filters.Page<PromotionVoucher>(page, pageSize);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.ToLower().StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            totalRows = _promotionVoucherRepository.Count(spec);
            return _promotionVoucherRepository.GetsAsync(spec, sort, paging);
        }

        public async Task<long> Inserts(List<PromotionVoucher> listVoucher)
        {
            await _promotionVoucherRepository.AddManyAsync(listVoucher);
            return 1;
        }

        public async Task<bool> CheckIsUsed(string code)
        {
            return await _promotionVoucherRepository.ExistsAsync(x => x.Code == code && x.UsedTime.HasValue);
        }

        public async Task<bool> CheckIsUsedById(string id)
        {
            return await _promotionVoucherRepository.ExistsAsync(x => x.Id == id && x.UsedTime.HasValue);
        }

        public async Task<bool> CheckCodeExists(string id, string code)
        {
            return await _promotionVoucherRepository.ExistsAsync(x => x.Id == id && x.Code == code);
        }

        public async Task<bool> CheckPhoneNumberExists(string promotionId, string phoneNumber)
        {
            return await _promotionVoucherRepository.ExistsAsync(x =>
                x.PromotionId == promotionId && x.PhoneNumber == phoneNumber && !x.UsedTime.HasValue);
        }

        public async Task<long> UseVoucher(string code)
        {
            var isUsed = await CheckIsUsed(code);
            if (isUsed)
                return -1;

            return await _promotionVoucherRepository.UpdateAsync(x => x.Code == code,
                Builders<PromotionVoucher>.Update
                    .Set(x => x.UsedTime, DateTime.Now));
        }

        public async Task<long> UseVoucher(string code, string userId, string fullName, string email,
            string phoneNumber)
        {
            var isUsed = await CheckIsUsed(code);
            if (isUsed)
                return -1;

            return await _promotionVoucherRepository.UpdateAsync(x => x.Code == code && x.PhoneNumber == phoneNumber,
                Builders<PromotionVoucher>.Update
                    .Set(x => x.UserId, userId)
                    .Set(x => x.FullName, fullName)
                    .Set(x => x.Email, email)
                    .Set(x => x.PhoneNumber, phoneNumber)
                    .Set(x => x.UsedTime, DateTime.Now));
        }

        public async Task<long> UseVoucher(string promotionId, string subjectId, string code, string userId, string fullName, string email,
            string phoneNumber)
        {
            var promotionInfo = await _promotionRepository.GetInfo(promotionId);
            if (promotionInfo == null)
                return -1;

            var isBelongToPromotion = await CheckVoucherBelongToPromotion(promotionId, code);
            if (!isBelongToPromotion)
                return -2;

            var promotionSubjectInfo = await _promotionSubjectRepository.GetInfo(promotionId, subjectId);
            if (promotionSubjectInfo == null)
                return -3;

            var isExistsByCodeAndPhoneNumber =
                await _promotionVoucherRepository.ExistsAsync(x => x.Code == code && x.PhoneNumber == phoneNumber);
            if (!isExistsByCodeAndPhoneNumber)
                return -4;

            return await _promotionVoucherRepository.UpdateAsync(x => x.PromotionId == promotionId && x.Code == code,
                Builders<PromotionVoucher>.Update
                    .Set(x => x.PromotionSubjectId, promotionSubjectInfo.Id)
                    .Set(x => x.UsedTime, DateTime.Now)
                    .Set(x => x.UserId, userId)
                    .Set(x => x.FullName, fullName)
                    .Set(x => x.Email, email)
                    .Set(x => x.PhoneNumber, phoneNumber)
            );
        }

        public async Task<PromotionVoucher> GetInfo(string id)
        {
            return await _promotionVoucherRepository.GetAsync(x => x.Id == id);
        }

        public async Task<PromotionVoucher> GetInfoByCode(string code)
        {
            return await _promotionVoucherRepository.GetAsync(x => x.Code == code);
        }

        public async Task<PromotionVoucher> GetInfoByPromotionIdAndPhoneNumber(string promotionId, string phoneNumber)
        {
            return await _promotionVoucherRepository.GetAsync(x =>
                x.PromotionId == promotionId && x.PhoneNumber == phoneNumber.Trim());
        }

        public async Task<long> GetTotalVoucher(string promotionId)
        {
            return await _promotionVoucherRepository.CountAysnc(x => x.PromotionId == promotionId);
        }

        public async Task<bool> CheckVoucherBelongToPromotion(string promotionId, string voucherCode)
        {
            return await _promotionVoucherRepository.ExistsAsync(x => x.PromotionId == promotionId && x.Code == voucherCode.Trim());
        }

        public async Task<bool> CheckIsAssignForUser(string id)
        {
            return await _promotionVoucherRepository.ExistsAsync(x =>
                x.Id == id && (!string.IsNullOrEmpty(x.UserId) || !string.IsNullOrEmpty(x.PhoneNumber.Trim())));
        }

        public async Task<long> UpdateUsedTime(string id, string userId, string fullName, string phoneNumber, string email)
        {
            return await _promotionVoucherRepository.UpdateAsync(x => x.Id == id,
                Builders<PromotionVoucher>.Update
                .Set(x => x.UsedTime, DateTime.Now)
                .Set(x => x.UserId, userId)
                .Set(x => x.FullName, fullName)
                .Set(x => x.PhoneNumber, phoneNumber)
                .Set(x => x.Email, email)
                );
        }

        public async Task<ActionResultResponse> Insert(PromotionVoucher entity)
        {
            var isCodeExists = await CheckCodeExists(entity.Id, entity.Code);
            if (isCodeExists)
                return new ActionResultResponse(-1, "Mã chương trình khuyến mại đã tồn tại. Vui lòng kiểm tra lại");

            // Check exists with register.
            var isUserExists = await _promotionVoucherRepository.ExistsAsync(x =>
                x.PromotionId == entity.PromotionId && x.PhoneNumber == entity.PhoneNumber.Trim());
            if (isUserExists)
                return new ActionResultResponse(-2, "Số điện thoại đã tồn tại. Vui lòng kiểm tra lại.");

            entity.UnsignName =
                $"{entity.FullName.StripVietnameseChars().ToLower()} {entity.PhoneNumber} {entity.Email}";
            entity.PhoneNumber = entity.PhoneNumber.Trim();
            entity.Code = entity.Code.Trim();
            await _promotionVoucherRepository.AddAsync(entity);
            return new ActionResultResponse(1, "Tạo mã khuyến mại thành công.");
        }

        public async Task<ActionResultResponse> Update(PromotionVoucher entity)
        {
            var isUsed = await CheckIsUsed(entity.Code);
            if (isUsed)
                return new ActionResultResponse(-1, "Mã khuyến mại đã được sử dụng. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên.");

            //var isAssignForUser = await CheckIsAssignForUser(entity.Id);
            //if (isAssignForUser)
            //    return -2;
            var result = await _promotionVoucherRepository.UpdateAsync(x => x.Id == entity.Id, Builders<PromotionVoucher>
                .Update
                .Set(x => x.DiscountType, entity.DiscountType)
                .Set(x => x.DiscountNumber, entity.DiscountNumber)
                .Set(x => x.FromDate, entity.FromDate)
                .Set(x => x.ToDate, entity.ToDate)
                .Set(x => x.FullName, entity.FullName)
                .Set(x => x.PhoneNumber, entity.PhoneNumber.Trim())
                .Set(x => x.Email, entity.Email)
                .Set(x => x.UnsignName,
                    $"{entity.FullName.StripVietnameseChars().ToLower()} {entity.PhoneNumber} {entity.Email}")
            );
            return new ActionResultResponse(result, result > 0 ? "Cập nhật thông tin mã khuyến mại thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên.");
        }

        public async Task<long> Delete(string id)
        {
            var checkIsUse = await CheckIsUsedById(id);
            if (checkIsUse)
                return -1;

            return await _promotionVoucherRepository.DeleteAsync(x => x.Id == id);
        }
    }
}
