using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository.Log;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository.System;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class PatientRepository : RepositoryBase, IPatientRepository
    {
        private readonly IRepository<BenhNhan> _patientRepository;
        private readonly IUserSessionRepository _userSessionLoginRepository;
        private readonly IRepository<UserConnection> _userConnectionRepository;
        private readonly ILoginLogRepository _loginLog;

        private BenhNhan _cachUser;
        public PatientRepository(IDbContext context, IUserSessionRepository userSessionRepository, ILoginLogRepository loginLog) : base(context)
        {
            _patientRepository = context.GetRepository<BenhNhan>();
            _userSessionLoginRepository = userSessionRepository;
            _loginLog = loginLog;
        }

        public BenhNhan CurrentUser
        {
            get { return GetCurrentPatient(); }
            set { _cachUser = value; }
        }

        private BenhNhan GetCurrentPatient()
        {
            if (_cachUser != null) return _cachUser;
            var context = HttpContext.Current != null ? new HttpContextWrapper(HttpContext.Current) as HttpContextBase
                : null;

            if (context == null) return _cachUser;
            if (context.User == null || !context.User.Identity.IsAuthenticated) return _cachUser;
            _cachUser = _patientRepository.GetReadOnly(u => u.UserName.Equals(context.User.Identity.Name) || u.MaBenhNhan.Equals(context.User.Identity.Name));
            return _cachUser;
        }

        public async Task<bool> CheckPermissionViewVideo(string code, string phone)
        {
            return await _patientRepository.ExistAsync(x => x.MaBenhNhan.Equals(code) && x.SoDienThoai.Equals(phone));
        }

        public async Task<List<BaoCaoBenhNhanChoKhamViewModel>> GetListPatientWaiting(string maPhong, DateTime ngayDenKham, bool tatCa)
        {
            var query = await Context.RawQueryAsync<BaoCaoBenhNhanChoKhamViewModel>("EXEC spBaoCaoBenhNhanChoKham_SelectAll @MaPhongKham, @NgayDenKham, @TatCa",
                new SqlParameter("MaPhongKham", maPhong),
                new SqlParameter("NgayDenKham", ngayDenKham),
                new SqlParameter("TatCa", tatCa));

            return query.ToList();
        }

        public async Task<BenhNhan> DoAuthenticate(string userName, string password, LoginLog loginLog)
        {
            var patientInfo = await _patientRepository.GetAsync(false, x => x.UserName.Equals(userName));

            if (patientInfo == null)
            {
                return await _patientRepository.GetAsync(true, x => x.MaBenhNhan.Equals(userName) && x.SoDienThoai.Equals(password));
            }

            var inputPasswordHash = Generate.GetInputPasswordHash(password, patientInfo.PasswordSalt);

            if (!patientInfo.PasswordHash.SequenceEqual(inputPasswordHash))
                return null;

            loginLog.UserId = patientInfo.MaBenhNhan;
            loginLog.FullName = patientInfo.HoTenBenhNhan;
            loginLog.UnsignName = $"{loginLog.FullName.StripVietnameseChars()} {loginLog.UserId}";

            // Thêm log đăng nhập của người dùng.
            await _loginLog.Insert(loginLog);

            return patientInfo;
        }

        public async Task<int> CreateNewPatient(string userName, string password)
        {
            var patientCode = await GeneratePatientCode();

            // Kiểm tra tên đăng nhập đã tồn tại chưa.
            var isExistsByUserName = await CheckExistsByUserName(patientCode, userName);
            if (isExistsByUserName)
                return -1;

            return 1;
        }

        public async Task<string> GeneratePatientCode()
        {

            var maBenhNhanParam = new SqlParameter { ParameterName = "@MaBenhNhan", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Output, Size = 50 };
            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            var query = await Context.RawFromSql<string>("EXEC @procResult = [dbo].[spMaBenhNhan] @MaBenhNhan OUTPUT", maBenhNhanParam, procResultParam);
            return query.ToString();
        }

        public async Task<int> Insert(BenhNhan benhNhan)
        {
            // Kiểm tra bệnh nhân đã tồn tại chưa
            var isExist = await CheckExistsByUserName(benhNhan.MaBenhNhan, benhNhan.UserName);
            if (isExist)
                return -1;

            benhNhan.NgaySinh = benhNhan.NgayThangNamSinh.Value.Day.ToString();
            benhNhan.ThangSinh = benhNhan.NgayThangNamSinh.Value.Month.ToString();
            benhNhan.NamSinh = benhNhan.NgayThangNamSinh.Value.Year.ToString();
            benhNhan.PasswordSalt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
            benhNhan.PasswordHash = Generate.GetInputPasswordHash(benhNhan.SoDienThoai, benhNhan.PasswordSalt);

            _patientRepository.Create(benhNhan);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsByUserName(string userId, string userName)
        {
            return await _patientRepository.ExistAsync(x => !x.MaBenhNhan.Equals(userId) && x.UserName.ToLower().Equals(userName.ToLower()));
        }

        public async Task<int> UpdateAccount()
        {
            var listPatient = await _patientRepository.GetsAsync(false, null);

            if (listPatient.Any())
            {
                listPatient.ForEach(x =>
                {
                    var salt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
                    var hash = Generate.GetInputPasswordHash(x.SoDienThoai, salt);

                    x.UserName = x.MaBenhNhan;
                    x.PasswordSalt = salt;
                    x.PasswordHash = hash;
                });

                await Context.SaveChangesAsync();
            }

            return 1;
        }

        public async Task<BenhNhan> GetById(string id)
        {
            return await _patientRepository.GetAsync(false, x => x.MaBenhNhan.Equals(id));
        }

        public async Task<BenhNhan> GetByPhoneNumber(string phoneNumber)
        {
            var result = await _patientRepository.GetsAsync(false, x => x.SoDienThoai.Equals(phoneNumber));
            return result.FirstOrDefault();
        }

        public async Task<BenhNhan> GetByPhoneNumberAndFullName(string phoneNumber, string fullName)
        {
            return await _patientRepository.GetAsync(false,
                x => x.SoDienThoai.Equals(phoneNumber) && x.HoTenBenhNhan.ToLower().Equals(fullName.ToLower()));
        }

        public bool CheckLoginSession(string userId, string sessionId, byte type)
        {
            return _userSessionLoginRepository.Exist(userId, sessionId, type);
        }

        public async Task<BenhNhan> GetByUserName(string userName)
        {
            userName = userName.StripVietnameseChars();
            return await _patientRepository.GetAsync(false, x => x.UserName.Equals(userName));
        }

        public async Task<bool> CheckExistByPhoneNumber(string phoneNumber)
        {
            return await _patientRepository.ExistAsync(x => x.SoDienThoai.Equals(phoneNumber));
        }

        public async Task<List<BaoCaoBenhNhanChoKhamViewModel>> BaoCaoBenhNhanChoKhamSelectAll(byte tang, byte vung, DateTime ngayDenKham)
        {
            var tangParam = new SqlParameter { ParameterName = "@Tang", SqlDbType = SqlDbType.TinyInt, Direction = ParameterDirection.Input, Value = tang };
            var vungParam = new SqlParameter { ParameterName = "@Vung", SqlDbType = SqlDbType.TinyInt, Direction = ParameterDirection.Input, Value = vung };
            var ngayDenKhamParam = new SqlParameter { ParameterName = "@NgayDenKham", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayDenKham };

            var procResultData = await Context.RawQueryAsync<BaoCaoBenhNhanChoKhamViewModel>("EXEC [dbo].[spBaoCaoBenhNhanChoKham_SelectAll] @Tang, @Vung, @NgayDenKham", tangParam, vungParam, ngayDenKhamParam);

            return procResultData.ToList();
        }

        public async Task<List<BaoCaoBenhNhanChoKhamViewModel>> GetListTest()
        {
            var procResultData =
                await Context.RawQueryAsync<BaoCaoBenhNhanChoKhamViewModel>("EXEC [dbo].[sp_Get_List_Test]");
            return procResultData.ToList();
        }

        public async Task<int> UpdateAccountInfomation(string userId, string userName, string oldPassword, string password)
        {
            var userInfo = await GetById(userId);

            if (userInfo == null)
                return -1;

            if (!userInfo.UserName.Equals(userInfo.MaBenhNhan) && !userInfo.UserName.Equals(userName))
                return -2;

            var isUserNameExists = await CheckExistsByUserName(userId, userName);
            if (isUserNameExists)
                return -3;

            var hash = Generate.GetInputPasswordHash(oldPassword, userInfo.PasswordSalt);
            if (!hash.SequenceEqual(userInfo.PasswordHash))
                return -4;

            userInfo.UserName = userName;
            if (!string.IsNullOrEmpty(password))
            {
                var salt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
                var newHash = Generate.GetInputPasswordHash(password, salt);

                userInfo.PasswordSalt = salt;
                userInfo.PasswordHash = newHash;
            }

            return await Context.SaveChangesAsync();
        }

        public async Task<int> InsertUserSessionLogin(string userId, string sessionId)
        {
            return await _userSessionLoginRepository.InsertUserSessionLogin(userId, sessionId, 1);
        }

        //public async Task<List<PatientVideoResult>> GetListVideoByPatientId(string id)
        //{
        //    var query = await Context.RawQueryAsync<PatientVideoResult>("EXEC spBenhNhan_ThongTinVideo @MaBenhNhan",
        //       new SqlParameter("MaBenhNhan", id));

        //    return query.ToList();
        //}
    }
}
