using System;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Repository;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class QuaTangKhachHangRepository : RepositoryBase, IQuaTangKhachHangRepository
    {
        private readonly IRepository<QuaTangKhachHang> _quaTangKhachHangRepository;
        private readonly IQuaTangRepository _quaTangRepository;
        private readonly IPatientRepository _patientRepository;
        private readonly INguoiThamGiaCungRepository _nguoiThamGiaCungRepository;

        public QuaTangKhachHangRepository(IDbContext context, IQuaTangRepository quaTangRepository, IPatientRepository patientRepository, INguoiThamGiaCungRepository nguoiThamGiaCungRepository) : base(context)
        {
            _quaTangRepository = quaTangRepository;
            _patientRepository = patientRepository;
            _nguoiThamGiaCungRepository = nguoiThamGiaCungRepository;
            _quaTangKhachHangRepository = Context.GetRepository<QuaTangKhachHang>();
        }

        public async Task<bool> CheckExists(string idQuaTang, string maKhachHang)
        {
            return await _quaTangKhachHangRepository.ExistAsync(x =>
                x.MaQuanTang == idQuaTang && x.MaKhachHang == maKhachHang);
        }

        public async Task<int> Register(QuaTangKhachHangMeta quaTangKhachHangMeta)
        {
            // Check gift exists
            var isExists = await _quaTangRepository.CheckExists(quaTangKhachHangMeta.MaQuaTang);
            if (!isExists)
                return -1;

            if (string.IsNullOrEmpty(quaTangKhachHangMeta.MaKhachHang))
            {
                // Check patient exists
                var patientInfo = await _patientRepository.GetByPhoneNumber(quaTangKhachHangMeta.PhoneNumber);
                if (patientInfo != null)
                {
                    quaTangKhachHangMeta.MaKhachHang = patientInfo.MaBenhNhan;
                }
                else
                {
                    // Insert new patient.
                    quaTangKhachHangMeta.MaKhachHang = Generate.GenerateId();
                    var patientInsertResult = await _patientRepository.Insert(new BenhNhan
                    {
                        MaBenhNhan = quaTangKhachHangMeta.MaKhachHang,
                        HoTenBenhNhan = quaTangKhachHangMeta.FullName,
                        SoDienThoai = quaTangKhachHangMeta.PhoneNumber,
                        UserName = quaTangKhachHangMeta.MaKhachHang,
                        DiaChi = quaTangKhachHangMeta.Address
                    });

                    if (patientInsertResult <= 0)
                        return -2;
                }
            }

            // Check patientInfo by patientId.
            var patientInfoById = await _patientRepository.GetById(quaTangKhachHangMeta.MaKhachHang);
            if (patientInfoById == null)
                return -3;
            var result = 0;
            if (quaTangKhachHangMeta.MaQuaTang == "ALL")
            {
                var listGifts = await _quaTangRepository.GetList();
                if (!listGifts.Any())
                    return -3;

                foreach (var quaTang in listGifts)
                {
                    // Check user registered
                    var isRegistered = await CheckExists(quaTangKhachHangMeta.MaQuaTang,
                        quaTangKhachHangMeta.MaKhachHang);

                    if (isRegistered)
                        return -4;

                    _quaTangKhachHangRepository.Create(new QuaTangKhachHang
                    {
                        MaKhachHang = quaTangKhachHangMeta.MaKhachHang,
                        MaQuanTang = quaTang.MaQuaTang,
                        Ngay = DateTime.Now
                    });

                    result = Context.SaveChanges();
                    if (result > 0 && quaTangKhachHangMeta.NguoiThamGiaCung.Any())
                    {
                        await _nguoiThamGiaCungRepository.Insert(quaTangKhachHangMeta.NguoiThamGiaCung);
                    }
                }

                return 1;
            }

            // Check user registered
            var isCustomerRegistered = await CheckExists(quaTangKhachHangMeta.MaQuaTang,
                quaTangKhachHangMeta.MaKhachHang);

            if (isCustomerRegistered)
                return -4;

            _quaTangKhachHangRepository.Create(new QuaTangKhachHang
            {
                MaKhachHang = quaTangKhachHangMeta.MaKhachHang,
                MaQuanTang = quaTangKhachHangMeta.MaQuaTang,
                Ngay = DateTime.Now
            });

            result = await Context.SaveChangesAsync();
            if (result > 0 && quaTangKhachHangMeta.NguoiThamGiaCung.Any())
            {
                await _nguoiThamGiaCungRepository.Insert(quaTangKhachHangMeta.NguoiThamGiaCung);
            }
            return result;
        }
    }
}
