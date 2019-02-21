using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IPatientRepository
    {
        BenhNhan CurrentUser { get; set; }

        Task<bool> CheckPermissionViewVideo(string code, string phone);

        //Task<List<PatientVideoResult>> GetListVideoByPatientId(string id);

        //Task<List<BaoCaoBenhNhanChoKhamResult>> GetListPatientWaiting(string maPhong, DateTime ngayDenKham, bool tatCa);

        //Task<BenhNhan> DoAuthenticate(string userName, string password, LoginLog loginLog);

        Task<int> CreateNewPatient(string userName, string password);

        Task<string> GeneratePatientCode();

        Task<int> Insert(BenhNhan benhNhan);

        Task<int> InsertUserSessionLogin(string userId, string sessionId);

        Task<bool> CheckExistsByUserName(string userId, string userName);

        Task<int> UpdateAccount();

        Task<BenhNhan> GetById(string id);

        Task<BenhNhan> GetByPhoneNumber(string phoneNumber);

        Task<BenhNhan> GetByPhoneNumberAndFullName(string phoneNumber, string fullName);

        bool CheckLoginSession(string userId, string sessionId, byte type);

        Task<BenhNhan> GetByUserName(string userName);

        Task<bool> CheckExistByPhoneNumber(string phoneNumber);

        Task<List<BaoCaoBenhNhanChoKhamViewModel>> BaoCaoBenhNhanChoKhamSelectAll(byte tang, byte vung, DateTime ngayDenKham);

        Task<List<BaoCaoBenhNhanChoKhamViewModel>> GetListTest();

        Task<int> UpdateAccountInfomation(string userId, string userName, string oldPassword, string password);

    }
}

