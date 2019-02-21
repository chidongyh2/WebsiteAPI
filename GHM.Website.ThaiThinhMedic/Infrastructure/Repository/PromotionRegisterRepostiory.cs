using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.MongoDb;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using MongoDB.Driver;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class PromotionRegisterRepostiory : MongoDbRepositoryBase, IPromotionRegisterRepository
    {
        private readonly IMongoDbRepository<PromotionRegister, string> _promotionRegistersRepository;
        private readonly IPromotionRepository _promotionRepository;
        private readonly IPromotionSubjectRepository _promotionSubjectRepository;
        private readonly IPromotionVoucherRepository _promotionVoucherRepository;
        //private readonly IPatientRepository _patientRepository;
        //private readonly IAppointmentScheduleRepository _appointmentScheduleRepository;

        public PromotionRegisterRepostiory(IMongoDbContext context, IPromotionSubjectRepository promotionSubjectRepository,
            IPromotionRepository promotionRepository, IPromotionVoucherRepository promotionVoucherRepository
            //IPatientRepository patientRepository,
            //IAppointmentScheduleRepository appointmentScheduleRepository
            ) : base(context)
        {
            _promotionSubjectRepository = promotionSubjectRepository;
            _promotionRepository = promotionRepository;
            _promotionVoucherRepository = promotionVoucherRepository;
            //_patientRepository = patientRepository;
            //_appointmentScheduleRepository = appointmentScheduleRepository;
            _promotionRegistersRepository = context.GetRepository<PromotionRegister, string>();
        }

        public async Task<ActionResultResponse> Insert(PromotionRegister entity)
        {
            // Check user already registered.
            var isExists = await CheckExists(entity.PromotionId, entity.UserId);
            if (isExists)
                return new ActionResultResponse(-1, "Bạn đã đăng ký chương trình khuyến mại này. Bạn không thể đăng ký thêm được nữa.");

            // Check time already used.
            var isTimeExisted = await CheckExists(entity.PromotionId, entity.Time, entity.ExaminationDate);
            if (isTimeExisted)
                return new ActionResultResponse(-2, "Đã có người khác đặt hẹn vào khung giờ này. Bạn vui lòng chọn khung giờ khác.");

            // Check promotion exists.
            var isPromotionExists = await _promotionRepository.CheckExists(entity.PromotionId);
            if (!isPromotionExists)
                return new ActionResultResponse(-3, "Thông tin chương trình khuyến mại không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ trực tiếp với bộ phận chăm sóc khách hàng.");

            var timeArray = entity.Time.Split(':');
            if (!timeArray.Any())
                return new ActionResultResponse(-4, "Thông tin mã khuyến mại không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ trực tiếp với bộ phận chăm sóc khách hàng.");

            var voucherId = "";
            var startDate = new DateTime(entity.ExaminationDate.Year, entity.ExaminationDate.Month,
                entity.ExaminationDate.Day, int.Parse(timeArray[0]), int.Parse(timeArray[1]), 0);
            //var appointmentSchedule = new DatHenMeta
            //{
            //    FullName = entity.FullName,
            //    PhoneNumber = entity.PhoneNumber,
            //    StartTime = startDate,
            //    EndTime = startDate,
            //    Note = entity.Note,
            //    Email = entity.Email,
            //    Shift = GetShiftByTime(entity.Time),
            //    Birthday = entity.Birthday ?? DateTime.Now
            //};
            // Check code exists if not registered service.
            if (string.IsNullOrEmpty(entity.PromotionSubjectId) && !string.IsNullOrEmpty(entity.PromotionVoucherCode))
            {
                var voucherInfo =
                    await _promotionVoucherRepository.GetInfo(entity.PromotionVoucherCode);
                if (voucherInfo == null)
                    return new ActionResultResponse(-4, "Thông tin mã khuyến mại không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ trực tiếp với bộ phận chăm sóc khách hàng.");

                if (voucherInfo.PromotionId != entity.PromotionId)
                    return new ActionResultResponse(-4, "Thông tin mã khuyến mại không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ trực tiếp với bộ phận chăm sóc khách hàng.");

                if (voucherInfo.UsedTime.HasValue)
                    return new ActionResultResponse(-5, "Mã khuyến mại đã được sử dụng. Bạn không thể tiếp tục sử dụng mã khuyến mại này.");

                if (voucherInfo.PhoneNumber != entity.PhoneNumber)
                    return new ActionResultResponse(-6, "Bạn không có quyền sử dụng mã khuyến mại này. Thông tin số điện thoại đăng ký không hợp lệ.");

                voucherId = voucherInfo.Id;
                entity.PromotionVoucherId = voucherInfo.Id;
                entity.PromotionVoucherCode = voucherInfo.Code;

                // TODO: Need to check discount when use voucher directly.
                //appointmentSchedule.PromotionCode = voucherInfo.Code;
            }
            else
            {
                // Check promotion subject exists.
                var promotionSubjectInfo =
                    await _promotionSubjectRepository.GetInfo(entity.PromotionId, entity.PromotionSubjectId);
                if (promotionSubjectInfo == null)
                    return new ActionResultResponse(-7, "Thông tin dịch vụ khuyến mại không tồn tại. Vui lòng kiểm tra lại");

                // Check voucher registerd yet.
                var voucherInfo =
                    await _promotionVoucherRepository.GetInfoByPromotionIdAndPhoneNumber(entity.PromotionId,
                        entity.PhoneNumber);
                if (voucherInfo == null)
                    return new ActionResultResponse(-12, "Bạn chưa được thêm vào danh sách được hưởng khuyến mại. Vui lòng liên hệ với bộ phận Chăm sóc khách hàng để được trợ giúp.");

                if (voucherInfo.UsedTime.HasValue)
                    return new ActionResultResponse(-5, "Mã khuyến mại đã được sử dụng. Bạn không thể tiếp tục sử dụng mã khuyến mại này.");

                if (promotionSubjectInfo.PromotionApplyTimes == null)
                    return new ActionResultResponse(-9, "Khung giờ đặt hẹn không hợp lệ. Vui lòng kiểm tra lại");

                var validTimes = new List<string>();
                foreach (var applyTime in promotionSubjectInfo.PromotionApplyTimes)
                {
                    for (var i = applyTime.FromTime.Hour; i <= applyTime.ToTime.Hour; i++)
                    {
                        if (i == applyTime.FromTime.Hour && applyTime.FromTime.Minute == 0)
                        {
                            validTimes.Add($"{applyTime.FromTime.Hour}:00");
                            validTimes.Add($"{ applyTime.FromTime.Hour}:30");
                        }
                        else if (i == applyTime.FromTime.Hour && applyTime.FromTime.Minute == 30)
                        {
                            validTimes.Add($"{ applyTime.FromTime.Hour}:30");
                        }
                        else if (i > applyTime.FromTime.Hour && i < applyTime.ToTime.Hour)
                        {
                            validTimes.Add($"{i}:00");
                            validTimes.Add($"{i}:30");
                        }
                        else if (i == applyTime.ToTime.Hour && applyTime.ToTime.Minute == 0)
                        {
                            validTimes.Add($"{ applyTime.ToTime.Hour}:00");
                        }
                        else if (i == applyTime.ToTime.Hour && applyTime.ToTime.Minute == 30)
                        {
                            validTimes.Add($"{applyTime.ToTime.Hour}:30");
                        }
                    }
                }

                if (validTimes.IndexOf(entity.Time) == -1)
                    return new ActionResultResponse(-9, "Khung giờ đặt hẹn không hợp lệ. Vui lòng kiểm tra lại");

                voucherId = voucherInfo.Id;
                entity.PromotionVoucherId = voucherInfo.Id;
                entity.PromotionVoucherCode = voucherInfo.Code;
                //appointmentSchedule.PromotionCode = voucherInfo.Code;
                //appointmentSchedule.ServiceId = promotionSubjectInfo.SubjectId;
                //appointmentSchedule.ServiceName = promotionSubjectInfo.SubjectName;

                var discountPrice = promotionSubjectInfo.DiscountType == DiscountType.Percent
                    ? (promotionSubjectInfo.Price * promotionSubjectInfo.DiscountNumber / 100)
                    : promotionSubjectInfo.DiscountNumber;

                //appointmentSchedule.PromotionServicePrice = promotionSubjectInfo.Price;
                //appointmentSchedule.PromotionDiscountPrice = discountPrice;
                //appointmentSchedule.PromotionDiscountPercent = promotionSubjectInfo.DiscountType == DiscountType.Percent
                //    ? (byte)promotionSubjectInfo.DiscountNumber
                //    : (byte?)null;
                //appointmentSchedule.PromotionTotalPayable = promotionSubjectInfo.Price - discountPrice;
            }

            //var patientInfo = await _patientRepository.GetByPhoneNumber(entity.PhoneNumber.Trim());

            // Insert new patient if not eixsts.
            //if (patientInfo == null)
            //{
            //    entity.UserId = Generate.GenerateId();
            //    var passwordsalt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
            //    var passwordHash = Generate.GetInputPasswordHash(entity.UserId, passwordsalt);
            //    var patient = new BenhNhan
            //    {
            //        MaBenhNhan = entity.UserId,
            //        HoTenBenhNhan = entity.FullName,
            //        SoDienThoai = entity.PhoneNumber,
            //        Email = entity.Email,
            //        NgayThang = DateTime.Now,
            //        UserName = entity.UserId,
            //        PasswordSalt = passwordsalt,
            //        PasswordHash = passwordHash,
            //        NgayThangNamSinh = entity.Birthday
            //    };
            //    await _patientRepository.Insert(patient);
            //}
            //else
            //{
            //    entity.UserId = patientInfo.MaBenhNhan;
            //}

            // Insert into appointment schedule.        
            //await _appointmentScheduleRepository.Insert(appointmentSchedule, entity.UserId);

            // Insert new promotion register
            entity.Email = !string.IsNullOrEmpty(entity.Email) ? entity.Email.Trim() : "";
            entity.PhoneNumber = entity.PhoneNumber.Trim();
            await _promotionRegistersRepository.AddAsync(entity);

            // Update used status of voucher.
            await _promotionVoucherRepository.UpdateUsedTime(voucherId, entity.UserId, entity.FullName,
                entity.PhoneNumber, entity.Email);
            return new ActionResultResponse(1, "Đặt lịch hẹn thành công.");
        }

        public async Task<ActionResultResponse> Update(PromotionRegister entity)
        {
            var result = await _promotionRegistersRepository.UpdateAsync(x => x.Id == entity.Id,
                Builders<PromotionRegister>.Update
                .Set(x => x.FullName, entity.FullName)
                .Set(x => x.PhoneNumber, entity.PhoneNumber.Trim())
                .Set(x => x.Email, entity.Email.Trim()));

            if (result > 0)
            {
                // Insert log
            }
            return new ActionResultResponse(result, result > 0 ? "Cập nhật thông tin đăng ký thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ Với quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(string id)
        {
            var result = await _promotionRegistersRepository.UpdateAsync(x => x.Id == id, Builders<PromotionRegister>.Update
                .Set(x => x.IsDelete, true));
            return new ActionResultResponse(result, result > 0 ? "Xóa đăng ký thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<bool> CheckExists(string promotionId, string userId)
        {
            return await _promotionRegistersRepository.ExistsAsync(x => x.PromotionId == promotionId && x.UserId == userId);
        }

        public async Task<bool> CheckExists(string promotionId, string time, DateTime examinationDate)
        {
            return await _promotionRegistersRepository.ExistsAsync(x =>
                x.PromotionId == promotionId && x.Time == time && x.ExaminationDate == examinationDate);
        }

        public async Task<PromotionRegister> GetInfo(string id)
        {
            return await _promotionRegistersRepository.GetAsync(x => x.Id == id);
        }

        public async Task<PromotionRegister> GetInfo(string promotionId, string userId)
        {
            return await _promotionRegistersRepository.GetAsync(x => x.PromotionId == promotionId && x.UserId == userId);
        }

        private string GetShiftByTime(string time)
        {
            if (string.IsNullOrEmpty(time))
                return string.Empty;

            int hour;
            int.TryParse(time.Split(':')[0], out hour);
            if (hour >= 7 && hour <= 12)
                return "CASANG";

            if (hour >= 13 && hour < 17)
                return "CACHIEU";

            if (hour > 17)
                return "CATOI";

            return string.Empty;
        }
    }
}
