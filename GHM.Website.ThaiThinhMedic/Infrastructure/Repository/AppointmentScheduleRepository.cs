using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class AppointmentScheduleRepository : RepositoryBase, IAppointmentScheduleRepository
    {
        private readonly IRepository<DatHen> _appointmentScheduleRepository;
        private readonly IPatientRepository _patientRepository;
        private readonly IServiceRepository _serviceRepository;
        private readonly IDoctorRepository _doctorRepository;
        private readonly ISoCaLamviecRepository _soCaLamviecRepository;
        private readonly IPKStoreRepository _pkStoreRepository;

        public AppointmentScheduleRepository(IDbContext context, IPatientRepository patientRepository,
            IServiceRepository serviceRepository, IDoctorRepository doctorRepository, ISoCaLamviecRepository soCaLamviecRepository, IPKStoreRepository pkStoreRepository) : base(context)
        {
            _appointmentScheduleRepository = Context.GetRepository<DatHen>();
            _patientRepository = patientRepository;
            _serviceRepository = serviceRepository;
            _doctorRepository = doctorRepository;
            _soCaLamviecRepository = soCaLamviecRepository;
            _pkStoreRepository = pkStoreRepository;
        }

        public async Task<int> Insert(DatHenMeta datHen, string userId)
        {
            var number = Generate.GenerateId();
            _appointmentScheduleRepository.Create(new DatHen
            {
                Subject = datHen.FullName,
                Description = datHen.PhoneNumber,
                StartTime = datHen.StartTime,
                EndTime = datHen.StartTime,
                Location = $"{datHen.ServiceName} - {datHen.Note}",
                MaBenhNhan = userId,
                SoPhieuDatHen = number,
                CaHenKham = datHen.Shift,
                MaDichVu = datHen.ServiceId,
                Email = datHen.Email,
                DiaChi = datHen.Address,
                PromotionCode = datHen.PromotionCode,
                PromotionDiscountPrice = datHen.PromotionDiscountPrice,
                PromotionDiscountPercent = datHen.PromotionDiscountPercent,
                PromotionServicePrice = datHen.PromotionServicePrice,
                PromotionTotalPayable = datHen.PromotionTotalPayable,
                NgayGioTao = DateTime.Now
            });
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Save(DatHenMeta datHen, string userId)
        {
            var hour = datHen.StartTime.ToString("HH:mm");

            var patientInfo = await _patientRepository.GetByPhoneNumberAndFullName(datHen.PhoneNumber, datHen.FullName);
            var userIdTemp = string.IsNullOrEmpty(userId) ? patientInfo != null ? patientInfo.MaBenhNhan : string.Empty : userId;

            var isExists = await _appointmentScheduleRepository.ExistAsync(x => DateTime.Compare(x.StartTime.Value, datHen.StartTime) == 0
                && x.GioDatHen.Equals(hour) && x.MaDichVu.Equals(datHen.ServiceId) && (string.IsNullOrEmpty(userIdTemp) || !x.MaBenhNhan.Equals(userIdTemp))
                && x.MaBacSy == datHen.DoctorId);

            if (isExists)
                return -1;

            // Lấy về thông tin dịch vụ
            var serviceInfo = await _serviceRepository.GetById(datHen.ServiceId);
            if (serviceInfo == null)
                return -3;

            // Lấy về thông tin bác sỹ
            var doctorInfo = await _doctorRepository.GetById(datHen.DoctorId);
            if (doctorInfo == null)
                return -4;

            // Kiểm tra số lượng đặt hẹn có lớn hơn số lượng phòng không;
            var isFree = await CheckFreeTime(datHen.ServiceId, datHen.Shift, datHen.Hours, DateTime.Parse(string.Format("{0} 00:00", datHen.StartTime.ToString("d"))));
            if (!isFree)
            {
                return -7;
            }

            // Kiểm tra theo cùng loại dịch vụ.
            var exsistsByServiceKind = _pkStoreRepository.AppointmentScheduleExistsByDatePhoneShiftAndServiceKind(datHen.StartTime, datHen.PhoneNumber, datHen.Shift, datHen.ServiceId);
            if (exsistsByServiceKind == 1)
                return -10;

            var existsByTimeAndKind = _pkStoreRepository.AppointmentScheduleExistsByTimeAndServiceKind(datHen.StartTime, datHen.PhoneNumber, datHen.Shift, datHen.Hours, datHen.DoctorId);
            if (existsByTimeAndKind == 1)
                return -11;

            // Kiểm tra bệnh nhân đã tồn tại chưa.            
            if (patientInfo == null)
            {
                // Thêm mới bệnh nhân.                
                var patiendId = Generate.GenerateId();
                var today = DateTime.Today;
                var dayOld = (today - datHen.Birthday).TotalDays;
                var patientInsertResult = await _patientRepository.Insert(new BenhNhan
                {
                    MaBenhNhan = patiendId,
                    HoTenBenhNhan = datHen.FullName,
                    SoDienThoai = datHen.PhoneNumber,
                    UserName = patiendId,
                    DiaChi = datHen.Address,
                    NgayThangNamSinh = datHen.Birthday,
                    NgaySinh = datHen.Birthday.Day.ToString(),
                    ThangSinh = datHen.Birthday.Month.ToString(),
                    NamSinh = datHen.Birthday.Year.ToString(),
                    Tuoi = (today.Year - datHen.Birthday.Year).ToString(),
                    ThangTuoi = today.MonthDifference(datHen.Birthday),
                    NgayTuoi = (int)(today - datHen.Birthday).TotalDays
                });

                if (patientInsertResult <= 0)
                    return -5;

                _appointmentScheduleRepository.Create(new DatHen
                {
                    Subject = datHen.FullName,
                    Description = datHen.PhoneNumber,
                    StartTime = datHen.StartTime,
                    EndTime = datHen.StartTime,
                    Location = $"{serviceInfo.TenDichVu} - {datHen.Note}",
                    MaBenhNhan = patiendId,
                    SoPhieuDatHen = patiendId,
                    CaHenKham = datHen.Shift,
                    MaDichVu = datHen.ServiceId,
                    MaBacSy = datHen.DoctorId,
                    TenBacSy = !string.IsNullOrEmpty(datHen.DoctorId) ? doctorInfo.HoTen : "",
                    Email = datHen.Email
                });

                return await Context.SaveChangesAsync();
            }

            // Kiểm tra người dùng đã đặt dịch vụ khác trung với khoảng thời gian này chưa
            if (await CheckExistsByServiceIdDoctorAndTime(datHen.ServiceId, datHen.DoctorId, datHen.StartTime, patientInfo.MaBenhNhan))
            {
                return -6;
            }

            var number = Generate.GenerateId();
            _appointmentScheduleRepository.Create(new DatHen
            {
                Subject = datHen.FullName,
                Description = datHen.PhoneNumber,
                StartTime = datHen.StartTime,
                EndTime = datHen.StartTime,
                Location = $"{serviceInfo.TenDichVu} - {datHen.Note}",
                MaBenhNhan = patientInfo.MaBenhNhan,
                SoPhieuDatHen = number,
                CaHenKham = datHen.Shift,
                MaDichVu = datHen.ServiceId,
                MaBacSy = datHen.DoctorId,
                TenBacSy = !string.IsNullOrEmpty(datHen.DoctorId) ? doctorInfo.HoTen : "",
                Email = datHen.Email,
                DiaChi = datHen.Address,
                NgayGioTao = DateTime.Now
            });

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(DatHenMeta datHen, string userId)
        {
            var appointmentInfo = await GetInfoByPatientId(datHen.Id, userId);

            if (appointmentInfo == null)
                return -1;

            var hour = datHen.Hours;
            var isExists = await _appointmentScheduleRepository.ExistAsync(x => DateTime.Compare(x.StartTime.Value, datHen.StartTime) == 0
            && x.GioDatHen.Equals(hour) && x.MaDichVu.Equals(datHen.ServiceId) && (string.IsNullOrEmpty(userId) || !x.MaBenhNhan.Equals(userId)));

            if (isExists)
                return -2;

            // Lấy về thông tin dịch vụ
            var serviceInfo = await _serviceRepository.GetById(datHen.ServiceId);

            if (serviceInfo == null)
                return -3;

            // Lấy về thông tin bác sỹ
            var doctorInfo = await _doctorRepository.GetById(datHen.DoctorId);
            if (doctorInfo == null)
                return -4;

            // Kiểm tra số lượng đặt hẹn có lớn hơn số lượng phòng không;
            var isFree = await CheckFreeTime(datHen.ServiceId, datHen.Shift, datHen.Hours, DateTime.Parse(
                $"{datHen.StartTime:d} 00:00"));

            //if (!isFree)
            //{
            //    return -7;
            //}

            // Kiểm tra người dùng đã đặt dịch vụ khác trung với khoảng thời gian này chưa
            if (await CheckExistsByServiceIdDoctorAndTime(datHen.ServiceId, datHen.DoctorId, datHen.StartTime, userId))
            {
                return -6;
            }

            appointmentInfo.MaDichVu = datHen.ServiceId;
            appointmentInfo.MaBacSy = datHen.DoctorId;
            appointmentInfo.TenBacSy = doctorInfo.HoTen;
            appointmentInfo.DiaChi = datHen.Address;
            appointmentInfo.Email = datHen.Email;
            appointmentInfo.GioDatHen = datHen.Hours;
            appointmentInfo.StartTime = datHen.StartTime;
            appointmentInfo.EndTime = datHen.StartTime;
            appointmentInfo.Location = $"{serviceInfo.TenDichVu} - {datHen.Note}";
            appointmentInfo.GioDatHen = hour;
            appointmentInfo.Subject = datHen.FullName;

            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsByServiceIdDoctorAndTime(string serviceId, string doctorId, DateTime time, string patientId)
        {
            return await _appointmentScheduleRepository.ExistAsync(x => x.StartTime == time &&
                ((x.MaDichVu == serviceId && !x.MaBacSy.Equals(doctorId))
                || x.MaDichVu != serviceId) && x.MaBenhNhan.Equals(patientId));
        }

        public async Task<List<T>> Search<T>(Expression<Func<DatHen, T>> projector, DateTime fromDate, DateTime toDate)
        {
            Expression<Func<DatHen, bool>> spec = c => c.StartTime.Value >= fromDate && c.StartTime.Value <= toDate;
            return await _appointmentScheduleRepository.GetsAsAsync(projector, spec);
        }

        public async Task<List<T>> Search<T>(Expression<Func<DatHen, T>> projector, string serviceId, string doctorId, DateTime fromDate, DateTime toDate)
        {
            Expression<Func<DatHen, bool>> spec = c => c.StartTime.Value >= fromDate && c.StartTime.Value <= toDate && c.MaDichVu.Equals(serviceId);
            if (!string.IsNullOrEmpty(doctorId))
            {
                spec = spec.And(x => x.MaBacSy.Equals(doctorId));
            }

            return await _appointmentScheduleRepository.GetsAsAsync(projector, spec);
        }

        public List<DatHenDichVuViewModel> GetMyAppointmentSchedule(string userId)
        {
            var endTime = DateTime.Today.AddDays(4).AddMinutes(-1);
            var query = Context.Set<DatHen>().Where(x => x.MaBenhNhan.Equals(userId) &&
                x.StartTime >= DateTime.Today && x.EndTime <= endTime)
                .Join(Context.Set<DmDichVu>(), dh => dh.MaDichVu, dv => dv.MaDichVu, (dh, dv) => new DatHenDichVuViewModel
                {
                    Id = dh.Id,
                    StartTime = dh.StartTime,
                    EndTime = dh.EndTime,
                    MaBenhNhan = dh.MaBenhNhan,
                    SoPhieuDatHen = dh.SoPhieuDatHen,
                    CaHenKham = dh.CaHenKham,
                    GioDatHen = dh.GioDatHen,
                    MaDichVu = dh.MaDichVu,
                    MaBacSy = dh.MaBacSy,
                    TenDichVu = dv.TenDichVu,
                    TenBacSy = dh.TenBacSy,
                    TenBenhNhan = dh.Subject,
                    SoDienThoai = dh.Description,
                    GhiChu = dh.Location,
                    Email = dh.Email,
                    DiaChi = dh.DiaChi
                });


            return query.ToList();
        }

        public async Task<bool> CheckFreeTime(string serviceId, string shift, string time, DateTime date)
        {
            var totalRoom = await _soCaLamviecRepository.GetTotalRoomByServiceIdAndShiftAndDate(serviceId, shift, date);
            var totalAppointment = await GetTotalAppointmentByServiceIdAndShiftAndDate(serviceId, shift, time, date);

            return totalAppointment < totalRoom;
        }

        public async Task<int> GetTotalAppointmentByServiceIdAndShiftAndDate(string serviceId, string shift, string time, DateTime date)
        {
            var dateEnd = date.AddDays(1).AddMinutes(-1);
            return await _appointmentScheduleRepository.CountAsync(x => x.MaDichVu.Equals(serviceId) && x.CaHenKham.ToUpper().Equals(shift)
                && x.GioDatHen.Equals(time) && x.StartTime >= date && x.StartTime <= dateEnd);
        }

        public async Task<DatHen> GetInfoByPatientId(long id, string patientId)
        {
            return await _appointmentScheduleRepository.GetAsync(false, x => x.Id == id && x.MaBenhNhan.Equals(patientId));
        }

        public async Task<int> Delete(long id, string userId)
        {
            var appoinemtInfo = await _appointmentScheduleRepository.GetAsync(false, x => x.Id == id && x.MaBenhNhan.Equals(userId));

            if (appoinemtInfo == null)
                return -1;

            if (appoinemtInfo.StartTime.HasValue && DateTime.Compare(appoinemtInfo.StartTime.Value, DateTime.Now.AddHours(1)) < 0)
                return -2;

            _appointmentScheduleRepository.Delete(appoinemtInfo);
            return await Context.SaveChangesAsync();
        }
    }
}
