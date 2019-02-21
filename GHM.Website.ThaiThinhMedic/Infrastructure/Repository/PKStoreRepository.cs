using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class PKStoreRepository : RepositoryBase, IPKStoreRepository
    {
        public PKStoreRepository(IDbContext context) : base(context)
        {
        }

        public int DmBacSyInsert(string maBacSy, string hoTen, string maKhoa, string noiCongTac, string dienThoai, string diaChi, string chuyenNganh, string bangCapChuyenMon, string quaTrinhCongTac, int? keDon, bool? hienSoDienThoai, bool? dung, string col1, string col2, string col3, string col4, string col5, string ghiChu, bool? khamDoan, string queQuan, DateTime? ngayBatDauLamViec, string chuyenMonSau, string danhGiaCuaKhachHang, byte[] anh, string maHocHam, string maHocVi, DateTime? ngaySinh, string maChucDanh, string maChucVu, int? soCaSangKm, int? soCaChieuKm, int? soCaToiKm)
        {
            var maBacSyParam = new SqlParameter { ParameterName = "@MaBacSy", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maBacSy, Size = 50 };
            if (maBacSyParam.Value == null)
                maBacSyParam.Value = DBNull.Value;

            var hoTenParam = new SqlParameter { ParameterName = "@HoTen", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTen, Size = 200 };
            if (hoTenParam.Value == null)
                hoTenParam.Value = DBNull.Value;

            var maKhoaParam = new SqlParameter { ParameterName = "@MaKhoa", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maKhoa, Size = 50 };
            if (maKhoaParam.Value == null)
                maKhoaParam.Value = DBNull.Value;

            var noiCongTacParam = new SqlParameter { ParameterName = "@NoiCongTac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCongTac, Size = 400 };
            if (noiCongTacParam.Value == null)
                noiCongTacParam.Value = DBNull.Value;

            var dienThoaiParam = new SqlParameter { ParameterName = "@DienThoai", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = dienThoai, Size = 50 };
            if (dienThoaiParam.Value == null)
                dienThoaiParam.Value = DBNull.Value;

            var diaChiParam = new SqlParameter { ParameterName = "@DiaChi", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChi, Size = 400 };
            if (diaChiParam.Value == null)
                diaChiParam.Value = DBNull.Value;

            var chuyenNganhParam = new SqlParameter { ParameterName = "@ChuyenNganh", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenNganh, Size = 400 };
            if (chuyenNganhParam.Value == null)
                chuyenNganhParam.Value = DBNull.Value;

            var bangCapChuyenMonParam = new SqlParameter { ParameterName = "@BangCapChuyenMon", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = bangCapChuyenMon, Size = 500 };
            if (bangCapChuyenMonParam.Value == null)
                bangCapChuyenMonParam.Value = DBNull.Value;

            var quaTrinhCongTacParam = new SqlParameter { ParameterName = "@QuaTrinhCongTac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = quaTrinhCongTac, Size = 1000 };
            if (quaTrinhCongTacParam.Value == null)
                quaTrinhCongTacParam.Value = DBNull.Value;

            var keDonParam = new SqlParameter { ParameterName = "@KeDon", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = keDon.GetValueOrDefault() };
            if (!keDon.HasValue)
                keDonParam.Value = DBNull.Value;

            var hienSoDienThoaiParam = new SqlParameter { ParameterName = "@HienSoDienThoai", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = hienSoDienThoai.GetValueOrDefault() };
            if (!hienSoDienThoai.HasValue)
                hienSoDienThoaiParam.Value = DBNull.Value;

            var dungParam = new SqlParameter { ParameterName = "@Dung", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dung.GetValueOrDefault() };
            if (!dung.HasValue)
                dungParam.Value = DBNull.Value;

            var col1Param = new SqlParameter { ParameterName = "@Col1", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col1, Size = 400 };
            if (col1Param.Value == null)
                col1Param.Value = DBNull.Value;

            var col2Param = new SqlParameter { ParameterName = "@Col2", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col2, Size = 400 };
            if (col2Param.Value == null)
                col2Param.Value = DBNull.Value;

            var col3Param = new SqlParameter { ParameterName = "@Col3", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col3, Size = 400 };
            if (col3Param.Value == null)
                col3Param.Value = DBNull.Value;

            var col4Param = new SqlParameter { ParameterName = "@Col4", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col4, Size = 400 };
            if (col4Param.Value == null)
                col4Param.Value = DBNull.Value;

            var col5Param = new SqlParameter { ParameterName = "@Col5", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col5, Size = 400 };
            if (col5Param.Value == null)
                col5Param.Value = DBNull.Value;

            var ghiChuParam = new SqlParameter { ParameterName = "@GhiChu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = ghiChu, Size = 400 };
            if (ghiChuParam.Value == null)
                ghiChuParam.Value = DBNull.Value;

            var khamDoanParam = new SqlParameter { ParameterName = "@KhamDoan", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = khamDoan.GetValueOrDefault() };
            if (!khamDoan.HasValue)
                khamDoanParam.Value = DBNull.Value;

            var queQuanParam = new SqlParameter { ParameterName = "@QueQuan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = queQuan, Size = 500 };
            if (queQuanParam.Value == null)
                queQuanParam.Value = DBNull.Value;

            var ngayBatDauLamViecParam = new SqlParameter { ParameterName = "@NgayBatDauLamViec", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayBatDauLamViec.GetValueOrDefault() };
            if (!ngayBatDauLamViec.HasValue)
                ngayBatDauLamViecParam.Value = DBNull.Value;

            var chuyenMonSauParam = new SqlParameter { ParameterName = "@ChuyenMonSau", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenMonSau, Size = 250 };
            if (chuyenMonSauParam.Value == null)
                chuyenMonSauParam.Value = DBNull.Value;

            var danhGiaCuaKhachHangParam = new SqlParameter { ParameterName = "@DanhGiaCuaKhachHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = danhGiaCuaKhachHang };
            if (danhGiaCuaKhachHangParam.Value == null)
                danhGiaCuaKhachHangParam.Value = DBNull.Value;

            var anhParam = new SqlParameter { ParameterName = "@Anh", SqlDbType = SqlDbType.Image, Direction = ParameterDirection.Input, Value = anh, Size = 2147483647 };
            if (anhParam.Value == null)
                anhParam.Value = DBNull.Value;

            var maHocHamParam = new SqlParameter { ParameterName = "@MaHocHam", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocHam, Size = 50 };
            if (maHocHamParam.Value == null)
                maHocHamParam.Value = DBNull.Value;

            var maHocViParam = new SqlParameter { ParameterName = "@MaHocVi", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocVi, Size = 50 };
            if (maHocViParam.Value == null)
                maHocViParam.Value = DBNull.Value;

            var ngaySinhParam = new SqlParameter { ParameterName = "@NgaySinh", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngaySinh.GetValueOrDefault() };
            if (!ngaySinh.HasValue)
                ngaySinhParam.Value = DBNull.Value;

            var maChucDanhParam = new SqlParameter { ParameterName = "@MaChucDanh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucDanh, Size = 50 };
            if (maChucDanhParam.Value == null)
                maChucDanhParam.Value = DBNull.Value;

            var maChucVuParam = new SqlParameter { ParameterName = "@MaChucVu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucVu, Size = 50 };
            if (maChucVuParam.Value == null)
                maChucVuParam.Value = DBNull.Value;

            var soCaSangKmParam = new SqlParameter { ParameterName = "@SoCaSangKM", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCaSangKm.GetValueOrDefault() };
            if (!soCaSangKm.HasValue)
                soCaSangKmParam.Value = DBNull.Value;

            var soCaChieuKmParam = new SqlParameter { ParameterName = "@SoCaChieuKM", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCaChieuKm.GetValueOrDefault() };
            if (!soCaChieuKm.HasValue)
                soCaChieuKmParam.Value = DBNull.Value;

            var soCaToiKmParam = new SqlParameter { ParameterName = "@SoCaToiKM", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCaToiKm.GetValueOrDefault() };
            if (!soCaToiKm.HasValue)
                soCaToiKmParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[spDMBacSy_Insert] @MaBacSy, @HoTen, @MaKhoa, @NoiCongTac, @DienThoai, @DiaChi, @ChuyenNganh, @BangCapChuyenMon, @QuaTrinhCongTac, @KeDon, @HienSoDienThoai, @Dung, @Col1, @Col2, @Col3, @Col4, @Col5, @GhiChu, @KhamDoan, @QueQuan, @NgayBatDauLamViec, @ChuyenMonSau, @DanhGiaCuaKhachHang, @Anh, @MaHocHam, @MaHocVi, @NgaySinh, @MaChucDanh, @MaChucVu, @SoCaSangKM, @SoCaChieuKM, @SoCaToiKM", maBacSyParam, hoTenParam, maKhoaParam, noiCongTacParam, dienThoaiParam, diaChiParam, chuyenNganhParam, bangCapChuyenMonParam, quaTrinhCongTacParam, keDonParam, hienSoDienThoaiParam, dungParam, col1Param, col2Param, col3Param, col4Param, col5Param, ghiChuParam, khamDoanParam, queQuanParam, ngayBatDauLamViecParam, chuyenMonSauParam, danhGiaCuaKhachHangParam, anhParam, maHocHamParam, maHocViParam, ngaySinhParam, maChucDanhParam, maChucVuParam, soCaSangKmParam, soCaChieuKmParam, soCaToiKmParam, procResultParam);
            return (int)procResultParam.Value;
        }

        public int DmBacSyUpdate(string maBacSy, string hoTen, string maKhoa, string noiCongTac, string dienThoai, string diaChi, string chuyenNganh, string bangCapChuyenMon, string quaTrinhCongTac, int? keDon, bool? hienSoDienThoai, bool? dung, string col1, string col2, string col3, string col4, string col5, string ghiChu, bool? khamDoan, string queQuan, DateTime? ngayBatDauLamViec, string chuyenMonSau, string danhGiaCuaKhachHang, byte[] anh, string maHocHam, string maHocVi, DateTime? ngaySinh, string maChucDanh, string maChucVu, int? soCaSangKm, int? soCaChieuKm, int? soCaToiKm)
        {
            var maBacSyParam = new SqlParameter { ParameterName = "@MaBacSy", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maBacSy, Size = 50 };
            if (maBacSyParam.Value == null)
                maBacSyParam.Value = DBNull.Value;

            var hoTenParam = new SqlParameter { ParameterName = "@HoTen", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTen, Size = 200 };
            if (hoTenParam.Value == null)
                hoTenParam.Value = DBNull.Value;

            var maKhoaParam = new SqlParameter { ParameterName = "@MaKhoa", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maKhoa, Size = 50 };
            if (maKhoaParam.Value == null)
                maKhoaParam.Value = DBNull.Value;

            var noiCongTacParam = new SqlParameter { ParameterName = "@NoiCongTac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCongTac, Size = 400 };
            if (noiCongTacParam.Value == null)
                noiCongTacParam.Value = DBNull.Value;

            var dienThoaiParam = new SqlParameter { ParameterName = "@DienThoai", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = dienThoai, Size = 50 };
            if (dienThoaiParam.Value == null)
                dienThoaiParam.Value = DBNull.Value;

            var diaChiParam = new SqlParameter { ParameterName = "@DiaChi", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChi, Size = 400 };
            if (diaChiParam.Value == null)
                diaChiParam.Value = DBNull.Value;

            var chuyenNganhParam = new SqlParameter { ParameterName = "@ChuyenNganh", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenNganh, Size = 400 };
            if (chuyenNganhParam.Value == null)
                chuyenNganhParam.Value = DBNull.Value;

            var bangCapChuyenMonParam = new SqlParameter { ParameterName = "@BangCapChuyenMon", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = bangCapChuyenMon, Size = 500 };
            if (bangCapChuyenMonParam.Value == null)
                bangCapChuyenMonParam.Value = DBNull.Value;

            var quaTrinhCongTacParam = new SqlParameter { ParameterName = "@QuaTrinhCongTac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = quaTrinhCongTac, Size = 1000 };
            if (quaTrinhCongTacParam.Value == null)
                quaTrinhCongTacParam.Value = DBNull.Value;

            var keDonParam = new SqlParameter { ParameterName = "@KeDon", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = keDon.GetValueOrDefault() };
            if (!keDon.HasValue)
                keDonParam.Value = DBNull.Value;

            var hienSoDienThoaiParam = new SqlParameter { ParameterName = "@HienSoDienThoai", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = hienSoDienThoai.GetValueOrDefault() };
            if (!hienSoDienThoai.HasValue)
                hienSoDienThoaiParam.Value = DBNull.Value;

            var dungParam = new SqlParameter { ParameterName = "@Dung", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dung.GetValueOrDefault() };
            if (!dung.HasValue)
                dungParam.Value = DBNull.Value;

            var col1Param = new SqlParameter { ParameterName = "@Col1", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col1, Size = 400 };
            if (col1Param.Value == null)
                col1Param.Value = DBNull.Value;

            var col2Param = new SqlParameter { ParameterName = "@Col2", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col2, Size = 400 };
            if (col2Param.Value == null)
                col2Param.Value = DBNull.Value;

            var col3Param = new SqlParameter { ParameterName = "@Col3", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col3, Size = 400 };
            if (col3Param.Value == null)
                col3Param.Value = DBNull.Value;

            var col4Param = new SqlParameter { ParameterName = "@Col4", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col4, Size = 400 };
            if (col4Param.Value == null)
                col4Param.Value = DBNull.Value;

            var col5Param = new SqlParameter { ParameterName = "@Col5", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col5, Size = 400 };
            if (col5Param.Value == null)
                col5Param.Value = DBNull.Value;

            var ghiChuParam = new SqlParameter { ParameterName = "@GhiChu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = ghiChu, Size = 400 };
            if (ghiChuParam.Value == null)
                ghiChuParam.Value = DBNull.Value;

            var khamDoanParam = new SqlParameter { ParameterName = "@KhamDoan", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = khamDoan.GetValueOrDefault() };
            if (!khamDoan.HasValue)
                khamDoanParam.Value = DBNull.Value;

            var queQuanParam = new SqlParameter { ParameterName = "@QueQuan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = queQuan, Size = 500 };
            if (queQuanParam.Value == null)
                queQuanParam.Value = DBNull.Value;

            var ngayBatDauLamViecParam = new SqlParameter { ParameterName = "@NgayBatDauLamViec", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayBatDauLamViec.GetValueOrDefault() };
            if (!ngayBatDauLamViec.HasValue)
                ngayBatDauLamViecParam.Value = DBNull.Value;

            var chuyenMonSauParam = new SqlParameter { ParameterName = "@ChuyenMonSau", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenMonSau, Size = 250 };
            if (chuyenMonSauParam.Value == null)
                chuyenMonSauParam.Value = DBNull.Value;

            var danhGiaCuaKhachHangParam = new SqlParameter { ParameterName = "@DanhGiaCuaKhachHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = danhGiaCuaKhachHang };
            if (danhGiaCuaKhachHangParam.Value == null)
                danhGiaCuaKhachHangParam.Value = DBNull.Value;

            var anhParam = new SqlParameter { ParameterName = "@Anh", SqlDbType = SqlDbType.Image, Direction = ParameterDirection.Input, Value = anh, Size = 2147483647 };
            if (anhParam.Value == null)
                anhParam.Value = DBNull.Value;

            var maHocHamParam = new SqlParameter { ParameterName = "@MaHocHam", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocHam, Size = 50 };
            if (maHocHamParam.Value == null)
                maHocHamParam.Value = DBNull.Value;

            var maHocViParam = new SqlParameter { ParameterName = "@MaHocVi", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocVi, Size = 50 };
            if (maHocViParam.Value == null)
                maHocViParam.Value = DBNull.Value;

            var ngaySinhParam = new SqlParameter { ParameterName = "@NgaySinh", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngaySinh.GetValueOrDefault() };
            if (!ngaySinh.HasValue)
                ngaySinhParam.Value = DBNull.Value;

            var maChucDanhParam = new SqlParameter { ParameterName = "@MaChucDanh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucDanh, Size = 50 };
            if (maChucDanhParam.Value == null)
                maChucDanhParam.Value = DBNull.Value;

            var maChucVuParam = new SqlParameter { ParameterName = "@MaChucVu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucVu, Size = 50 };
            if (maChucVuParam.Value == null)
                maChucVuParam.Value = DBNull.Value;

            var soCaSangKmParam = new SqlParameter { ParameterName = "@SoCaSangKM", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCaSangKm.GetValueOrDefault() };
            if (!soCaSangKm.HasValue)
                soCaSangKmParam.Value = DBNull.Value;

            var soCaChieuKmParam = new SqlParameter { ParameterName = "@SoCaChieuKM", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCaChieuKm.GetValueOrDefault() };
            if (!soCaChieuKm.HasValue)
                soCaChieuKmParam.Value = DBNull.Value;

            var soCaToiKmParam = new SqlParameter { ParameterName = "@SoCaToiKM", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCaToiKm.GetValueOrDefault() };
            if (!soCaToiKm.HasValue)
                soCaToiKmParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[spDMBacSy_Update] @MaBacSy, @HoTen, @MaKhoa, @NoiCongTac, @DienThoai, @DiaChi, @ChuyenNganh, @BangCapChuyenMon, @QuaTrinhCongTac, @KeDon, @HienSoDienThoai, @Dung, @Col1, @Col2, @Col3, @Col4, @Col5, @GhiChu, @KhamDoan, @QueQuan, @NgayBatDauLamViec, @ChuyenMonSau, @DanhGiaCuaKhachHang, @Anh, @MaHocHam, @MaHocVi, @NgaySinh, @MaChucDanh, @MaChucVu, @SoCaSangKM, @SoCaChieuKM, @SoCaToiKM", maBacSyParam, hoTenParam, maKhoaParam, noiCongTacParam, dienThoaiParam, diaChiParam, chuyenNganhParam, bangCapChuyenMonParam, quaTrinhCongTacParam, keDonParam, hienSoDienThoaiParam, dungParam, col1Param, col2Param, col3Param, col4Param, col5Param, ghiChuParam, khamDoanParam, queQuanParam, ngayBatDauLamViecParam, chuyenMonSauParam, danhGiaCuaKhachHangParam, anhParam, maHocHamParam, maHocViParam, ngaySinhParam, maChucDanhParam, maChucVuParam, soCaSangKmParam, soCaChieuKmParam, soCaToiKmParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int DmyTaInsert(string maYTa, string hoTen, string maKhoa, bool? dung, string ghiChu, string chuyenNganh, string bangCapChuyenMon, string quaTrinhCongTac, string maChucDanh, string maChucVu)
        {
            var maYTaParam = new SqlParameter { ParameterName = "@MaYTa", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maYTa, Size = 50 };
            if (maYTaParam.Value == null)
                maYTaParam.Value = DBNull.Value;

            var hoTenParam = new SqlParameter { ParameterName = "@HoTen", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTen, Size = 500 };
            if (hoTenParam.Value == null)
                hoTenParam.Value = DBNull.Value;

            var maKhoaParam = new SqlParameter { ParameterName = "@MaKhoa", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maKhoa, Size = 50 };
            if (maKhoaParam.Value == null)
                maKhoaParam.Value = DBNull.Value;

            var dungParam = new SqlParameter { ParameterName = "@Dung", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dung.GetValueOrDefault() };
            if (!dung.HasValue)
                dungParam.Value = DBNull.Value;

            var ghiChuParam = new SqlParameter { ParameterName = "@GhiChu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = ghiChu, Size = 500 };
            if (ghiChuParam.Value == null)
                ghiChuParam.Value = DBNull.Value;

            var chuyenNganhParam = new SqlParameter { ParameterName = "@ChuyenNganh", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenNganh, Size = 500 };
            if (chuyenNganhParam.Value == null)
                chuyenNganhParam.Value = DBNull.Value;

            var bangCapChuyenMonParam = new SqlParameter { ParameterName = "@BangCapChuyenMon", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = bangCapChuyenMon, Size = 1000 };
            if (bangCapChuyenMonParam.Value == null)
                bangCapChuyenMonParam.Value = DBNull.Value;

            var quaTrinhCongTacParam = new SqlParameter { ParameterName = "@QuaTrinhCongTac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = quaTrinhCongTac, Size = 1000 };
            if (quaTrinhCongTacParam.Value == null)
                quaTrinhCongTacParam.Value = DBNull.Value;

            var maChucDanhParam = new SqlParameter { ParameterName = "@MaChucDanh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucDanh, Size = 50 };
            if (maChucDanhParam.Value == null)
                maChucDanhParam.Value = DBNull.Value;

            var maChucVuParam = new SqlParameter { ParameterName = "@MaChucVu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucVu, Size = 50 };
            if (maChucVuParam.Value == null)
                maChucVuParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[spDMYTa_Insert] @MaYTa, @HoTen, @MaKhoa, @Dung, @GhiChu, @ChuyenNganh, @BangCapChuyenMon, @QuaTrinhCongTac, @MaChucDanh, @MaChucVu", maYTaParam, hoTenParam, maKhoaParam, dungParam, ghiChuParam, chuyenNganhParam, bangCapChuyenMonParam, quaTrinhCongTacParam, maChucDanhParam, maChucVuParam, procResultParam);
            return (int)procResultParam.Value;
        }

        public int DmyTaUpdate(string maYTa, string hoTen, string maKhoa, bool? dung, string ghiChu, string chuyenNganh, string bangCapChuyenMon, string quaTrinhCongTac, string maChucDanh, string maChucVu)
        {
            var maYTaParam = new SqlParameter { ParameterName = "@MaYTa", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maYTa, Size = 50 };
            if (maYTaParam.Value == null)
                maYTaParam.Value = DBNull.Value;

            var hoTenParam = new SqlParameter { ParameterName = "@HoTen", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTen, Size = 500 };
            if (hoTenParam.Value == null)
                hoTenParam.Value = DBNull.Value;

            var maKhoaParam = new SqlParameter { ParameterName = "@MaKhoa", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maKhoa, Size = 50 };
            if (maKhoaParam.Value == null)
                maKhoaParam.Value = DBNull.Value;

            var dungParam = new SqlParameter { ParameterName = "@Dung", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dung.GetValueOrDefault() };
            if (!dung.HasValue)
                dungParam.Value = DBNull.Value;

            var ghiChuParam = new SqlParameter { ParameterName = "@GhiChu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = ghiChu, Size = 500 };
            if (ghiChuParam.Value == null)
                ghiChuParam.Value = DBNull.Value;

            var chuyenNganhParam = new SqlParameter { ParameterName = "@ChuyenNganh", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenNganh, Size = 500 };
            if (chuyenNganhParam.Value == null)
                chuyenNganhParam.Value = DBNull.Value;

            var bangCapChuyenMonParam = new SqlParameter { ParameterName = "@BangCapChuyenMon", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = bangCapChuyenMon, Size = 1000 };
            if (bangCapChuyenMonParam.Value == null)
                bangCapChuyenMonParam.Value = DBNull.Value;

            var quaTrinhCongTacParam = new SqlParameter { ParameterName = "@QuaTrinhCongTac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = quaTrinhCongTac, Size = 1000 };
            if (quaTrinhCongTacParam.Value == null)
                quaTrinhCongTacParam.Value = DBNull.Value;

            var maChucDanhParam = new SqlParameter { ParameterName = "@MaChucDanh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucDanh, Size = 50 };
            if (maChucDanhParam.Value == null)
                maChucDanhParam.Value = DBNull.Value;

            var maChucVuParam = new SqlParameter { ParameterName = "@MaChucVu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucVu, Size = 50 };
            if (maChucVuParam.Value == null)
                maChucVuParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };
            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[spDMYTa_Update] @MaYTa, @HoTen, @MaKhoa, @Dung, @GhiChu, @ChuyenNganh, @BangCapChuyenMon, @QuaTrinhCongTac, @MaChucDanh, @MaChucVu", maYTaParam, hoTenParam, maKhoaParam, dungParam, ghiChuParam, chuyenNganhParam, bangCapChuyenMonParam, quaTrinhCongTacParam, maChucDanhParam, maChucVuParam, procResultParam);
            return (int)procResultParam.Value;
        }

        public int DsNhanVienInsert(string maNhanVien, string hoTenNhanVien, bool? maGioiTinh, DateTime? ngaySinh, string noiSinh, string thuongTru, string tamTru, string maDanToc, string soCmnd, string noiCap, DateTime? ngayCapCmnd, string ghiChu, DateTime? ngayVaoCoQuan, string maChucDanh, string maChucVu, string maPhongBan, string dienThoai, string email, string maThamChieu, string diaChiLienHe, string chuyenMon, string maSoBhyt, string soSoBhyt, DateTime? ngayCapBh, string soTknh, string nganHang, string maSoThueTncn, bool? dung, int? idLoaiNhanVien, bool? tamNghi, DateTime? ngayApDungTamNghi, string tenTiengAnh, string diaChiThuongTru, string diaChiTamTru, bool? dangLamViec, bool? nghiKhongLuong, bool? nghiThaiSan, bool? nghiViec, byte[] anh, string col1, string col2, string queQuan, string chuyenKhoa, string cacChungChiChuyenKhoa, string chuyenMonSau, string danhGiaCuaKhachHang, string maHocHam, string maHocVi, DateTime? ngayNghiViec, string lyDoNghiViec, string maTonGiao, string maQuocGia, int? tinhTrangHonNhan, int? soCon, string emailCaNhan, string dienThoaiNhaRieng, string dienThoaiCoQuan, string dienThoaiNguoiThan, string maBangCap, string bangCapKhac, int? cchnyTuNhan, string soCchn, DateTime? ngayCapCchn, string noiCapCchn, int? thoiGianHdld, int? hopDongLaoDong, int? hinhThucLamViec, int? soNgayLamViecTrongTuan, string thoiGianLamViecSang, string thoiGianLamViecChieu, string thoiGianLamViecToi, int? soNgayNghiPhepTrongNam, int? col3, int? col4, string col5, string col6, string col7, string col8, string col9, string soHoChieu, string noiCapHoChieu, DateTime? ngayCapHoChieu, DateTime? ngayCbhhhd)
        {
            var maNhanVienParam = new SqlParameter { ParameterName = "@MaNhanVien", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maNhanVien, Size = 50 };
            if (maNhanVienParam.Value == null)
                maNhanVienParam.Value = DBNull.Value;

            var hoTenNhanVienParam = new SqlParameter { ParameterName = "@HoTenNhanVien", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTenNhanVien, Size = 500 };
            if (hoTenNhanVienParam.Value == null)
                hoTenNhanVienParam.Value = DBNull.Value;

            var maGioiTinhParam = new SqlParameter { ParameterName = "@MaGioiTinh", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = maGioiTinh.GetValueOrDefault() };
            if (!maGioiTinh.HasValue)
                maGioiTinhParam.Value = DBNull.Value;

            var ngaySinhParam = new SqlParameter { ParameterName = "@NgaySinh", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngaySinh.GetValueOrDefault() };
            if (!ngaySinh.HasValue)
                ngaySinhParam.Value = DBNull.Value;

            var noiSinhParam = new SqlParameter { ParameterName = "@NoiSinh", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiSinh, Size = 500 };
            if (noiSinhParam.Value == null)
                noiSinhParam.Value = DBNull.Value;

            var thuongTruParam = new SqlParameter { ParameterName = "@ThuongTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thuongTru, Size = 500 };
            if (thuongTruParam.Value == null)
                thuongTruParam.Value = DBNull.Value;

            var tamTruParam = new SqlParameter { ParameterName = "@TamTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = tamTru, Size = 500 };
            if (tamTruParam.Value == null)
                tamTruParam.Value = DBNull.Value;

            var maDanTocParam = new SqlParameter { ParameterName = "@MaDanToc", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maDanToc, Size = 50 };
            if (maDanTocParam.Value == null)
                maDanTocParam.Value = DBNull.Value;

            var soCmndParam = new SqlParameter { ParameterName = "@SoCMND", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soCmnd, Size = 50 };
            if (soCmndParam.Value == null)
                soCmndParam.Value = DBNull.Value;

            var noiCapParam = new SqlParameter { ParameterName = "@NoiCap", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCap, Size = 500 };
            if (noiCapParam.Value == null)
                noiCapParam.Value = DBNull.Value;

            var ngayCapCmndParam = new SqlParameter { ParameterName = "@NgayCapCMND", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapCmnd.GetValueOrDefault() };
            if (!ngayCapCmnd.HasValue)
                ngayCapCmndParam.Value = DBNull.Value;

            var ghiChuParam = new SqlParameter { ParameterName = "@GhiChu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = ghiChu, Size = 500 };
            if (ghiChuParam.Value == null)
                ghiChuParam.Value = DBNull.Value;

            var ngayVaoCoQuanParam = new SqlParameter { ParameterName = "@NgayVaoCoQuan", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayVaoCoQuan.GetValueOrDefault() };
            if (!ngayVaoCoQuan.HasValue)
                ngayVaoCoQuanParam.Value = DBNull.Value;

            var maChucDanhParam = new SqlParameter { ParameterName = "@MaChucDanh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucDanh, Size = 250 };
            if (maChucDanhParam.Value == null)
                maChucDanhParam.Value = DBNull.Value;

            var maChucVuParam = new SqlParameter { ParameterName = "@MaChucVu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucVu, Size = 250 };
            if (maChucVuParam.Value == null)
                maChucVuParam.Value = DBNull.Value;

            var maPhongBanParam = new SqlParameter { ParameterName = "@MaPhongBan", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maPhongBan, Size = 50 };
            if (maPhongBanParam.Value == null)
                maPhongBanParam.Value = DBNull.Value;

            var dienThoaiParam = new SqlParameter { ParameterName = "@DienThoai", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = dienThoai, Size = 50 };
            if (dienThoaiParam.Value == null)
                dienThoaiParam.Value = DBNull.Value;

            var emailParam = new SqlParameter { ParameterName = "@Email", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = email, Size = 50 };
            if (emailParam.Value == null)
                emailParam.Value = DBNull.Value;

            var maThamChieuParam = new SqlParameter { ParameterName = "@MaThamChieu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maThamChieu, Size = 50 };
            if (maThamChieuParam.Value == null)
                maThamChieuParam.Value = DBNull.Value;

            var diaChiLienHeParam = new SqlParameter { ParameterName = "@DiaChiLienHe", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChiLienHe, Size = 500 };
            if (diaChiLienHeParam.Value == null)
                diaChiLienHeParam.Value = DBNull.Value;

            var chuyenMonParam = new SqlParameter { ParameterName = "@ChuyenMon", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenMon, Size = 500 };
            if (chuyenMonParam.Value == null)
                chuyenMonParam.Value = DBNull.Value;

            var maSoBhytParam = new SqlParameter { ParameterName = "@MaSoBHYT", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maSoBhyt, Size = 50 };
            if (maSoBhytParam.Value == null)
                maSoBhytParam.Value = DBNull.Value;

            var soSoBhytParam = new SqlParameter { ParameterName = "@SoSoBHYT", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soSoBhyt, Size = 50 };
            if (soSoBhytParam.Value == null)
                soSoBhytParam.Value = DBNull.Value;

            var ngayCapBhParam = new SqlParameter { ParameterName = "@NgayCapBH", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapBh.GetValueOrDefault() };
            if (!ngayCapBh.HasValue)
                ngayCapBhParam.Value = DBNull.Value;

            var soTknhParam = new SqlParameter { ParameterName = "@SoTKNH", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soTknh, Size = 50 };
            if (soTknhParam.Value == null)
                soTknhParam.Value = DBNull.Value;

            var nganHangParam = new SqlParameter { ParameterName = "@NganHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = nganHang, Size = 500 };
            if (nganHangParam.Value == null)
                nganHangParam.Value = DBNull.Value;

            var maSoThueTncnParam = new SqlParameter { ParameterName = "@MaSoThueTNCN", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maSoThueTncn, Size = 50 };
            if (maSoThueTncnParam.Value == null)
                maSoThueTncnParam.Value = DBNull.Value;

            var dungParam = new SqlParameter { ParameterName = "@Dung", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dung.GetValueOrDefault() };
            if (!dung.HasValue)
                dungParam.Value = DBNull.Value;

            var idLoaiNhanVienParam = new SqlParameter { ParameterName = "@IDLoaiNhanVien", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = idLoaiNhanVien.GetValueOrDefault() };
            if (!idLoaiNhanVien.HasValue)
                idLoaiNhanVienParam.Value = DBNull.Value;

            var tamNghiParam = new SqlParameter { ParameterName = "@TamNghi", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = tamNghi.GetValueOrDefault() };
            if (!tamNghi.HasValue)
                tamNghiParam.Value = DBNull.Value;

            var ngayApDungTamNghiParam = new SqlParameter { ParameterName = "@NgayApDungTamNghi", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayApDungTamNghi.GetValueOrDefault() };
            if (!ngayApDungTamNghi.HasValue)
                ngayApDungTamNghiParam.Value = DBNull.Value;

            var tenTiengAnhParam = new SqlParameter { ParameterName = "@TenTiengAnh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = tenTiengAnh, Size = 50 };
            if (tenTiengAnhParam.Value == null)
                tenTiengAnhParam.Value = DBNull.Value;

            var diaChiThuongTruParam = new SqlParameter { ParameterName = "@DiaChiThuongTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChiThuongTru, Size = 500 };
            if (diaChiThuongTruParam.Value == null)
                diaChiThuongTruParam.Value = DBNull.Value;

            var diaChiTamTruParam = new SqlParameter { ParameterName = "@DiaChiTamTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChiTamTru, Size = 500 };
            if (diaChiTamTruParam.Value == null)
                diaChiTamTruParam.Value = DBNull.Value;

            var dangLamViecParam = new SqlParameter { ParameterName = "@DangLamViec", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dangLamViec.GetValueOrDefault() };
            if (!dangLamViec.HasValue)
                dangLamViecParam.Value = DBNull.Value;

            var nghiKhongLuongParam = new SqlParameter { ParameterName = "@NghiKhongLuong", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = nghiKhongLuong.GetValueOrDefault() };
            if (!nghiKhongLuong.HasValue)
                nghiKhongLuongParam.Value = DBNull.Value;

            var nghiThaiSanParam = new SqlParameter { ParameterName = "@NghiThaiSan", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = nghiThaiSan.GetValueOrDefault() };
            if (!nghiThaiSan.HasValue)
                nghiThaiSanParam.Value = DBNull.Value;

            var nghiViecParam = new SqlParameter { ParameterName = "@NghiViec", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = nghiViec.GetValueOrDefault() };
            if (!nghiViec.HasValue)
                nghiViecParam.Value = DBNull.Value;

            var anhParam = new SqlParameter { ParameterName = "@Anh", SqlDbType = SqlDbType.Image, Direction = ParameterDirection.Input, Value = anh, Size = 2147483647 };
            if (anhParam.Value == null)
                anhParam.Value = DBNull.Value;

            var col1Param = new SqlParameter { ParameterName = "@col1", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col1, Size = 500 };
            if (col1Param.Value == null)
                col1Param.Value = DBNull.Value;

            var col2Param = new SqlParameter { ParameterName = "@col2", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col2, Size = 500 };
            if (col2Param.Value == null)
                col2Param.Value = DBNull.Value;

            var queQuanParam = new SqlParameter { ParameterName = "@QueQuan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = queQuan, Size = 500 };
            if (queQuanParam.Value == null)
                queQuanParam.Value = DBNull.Value;

            var chuyenKhoaParam = new SqlParameter { ParameterName = "@ChuyenKhoa", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenKhoa, Size = 100 };
            if (chuyenKhoaParam.Value == null)
                chuyenKhoaParam.Value = DBNull.Value;

            var cacChungChiChuyenKhoaParam = new SqlParameter { ParameterName = "@CacChungChiChuyenKhoa", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = cacChungChiChuyenKhoa, Size = 500 };
            if (cacChungChiChuyenKhoaParam.Value == null)
                cacChungChiChuyenKhoaParam.Value = DBNull.Value;

            var chuyenMonSauParam = new SqlParameter { ParameterName = "@ChuyenMonSau", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenMonSau, Size = 100 };
            if (chuyenMonSauParam.Value == null)
                chuyenMonSauParam.Value = DBNull.Value;

            var danhGiaCuaKhachHangParam = new SqlParameter { ParameterName = "@DanhGiaCuaKhachHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = danhGiaCuaKhachHang };
            if (danhGiaCuaKhachHangParam.Value == null)
                danhGiaCuaKhachHangParam.Value = DBNull.Value;

            var maHocHamParam = new SqlParameter { ParameterName = "@MaHocHam", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocHam, Size = 250 };
            if (maHocHamParam.Value == null)
                maHocHamParam.Value = DBNull.Value;

            var maHocViParam = new SqlParameter { ParameterName = "@MaHocVi", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocVi, Size = 250 };
            if (maHocViParam.Value == null)
                maHocViParam.Value = DBNull.Value;

            var ngayNghiViecParam = new SqlParameter { ParameterName = "@NgayNghiViec", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayNghiViec.GetValueOrDefault() };
            if (!ngayNghiViec.HasValue)
                ngayNghiViecParam.Value = DBNull.Value;

            var lyDoNghiViecParam = new SqlParameter { ParameterName = "@LyDoNghiViec", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = lyDoNghiViec, Size = 500 };
            if (lyDoNghiViecParam.Value == null)
                lyDoNghiViecParam.Value = DBNull.Value;

            var maTonGiaoParam = new SqlParameter { ParameterName = "@MaTonGiao", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maTonGiao, Size = 50 };
            if (maTonGiaoParam.Value == null)
                maTonGiaoParam.Value = DBNull.Value;

            var maQuocGiaParam = new SqlParameter { ParameterName = "@MaQuocGia", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maQuocGia, Size = 50 };
            if (maQuocGiaParam.Value == null)
                maQuocGiaParam.Value = DBNull.Value;

            var tinhTrangHonNhanParam = new SqlParameter { ParameterName = "@TinhTrangHonNhan", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = tinhTrangHonNhan.GetValueOrDefault() };
            if (!tinhTrangHonNhan.HasValue)
                tinhTrangHonNhanParam.Value = DBNull.Value;

            var soConParam = new SqlParameter { ParameterName = "@SoCon", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCon.GetValueOrDefault() };
            if (!soCon.HasValue)
                soConParam.Value = DBNull.Value;

            var emailCaNhanParam = new SqlParameter { ParameterName = "@EmailCaNhan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = emailCaNhan, Size = 500 };
            if (emailCaNhanParam.Value == null)
                emailCaNhanParam.Value = DBNull.Value;

            var dienThoaiNhaRiengParam = new SqlParameter { ParameterName = "@DienThoaiNhaRieng", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = dienThoaiNhaRieng, Size = 500 };
            if (dienThoaiNhaRiengParam.Value == null)
                dienThoaiNhaRiengParam.Value = DBNull.Value;

            var dienThoaiCoQuanParam = new SqlParameter { ParameterName = "@DienThoaiCoQuan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = dienThoaiCoQuan, Size = 500 };
            if (dienThoaiCoQuanParam.Value == null)
                dienThoaiCoQuanParam.Value = DBNull.Value;

            var dienThoaiNguoiThanParam = new SqlParameter { ParameterName = "@DienThoaiNguoiThan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = dienThoaiNguoiThan, Size = 500 };
            if (dienThoaiNguoiThanParam.Value == null)
                dienThoaiNguoiThanParam.Value = DBNull.Value;

            var maBangCapParam = new SqlParameter { ParameterName = "@MaBangCap", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maBangCap, Size = 50 };
            if (maBangCapParam.Value == null)
                maBangCapParam.Value = DBNull.Value;

            var bangCapKhacParam = new SqlParameter { ParameterName = "@BangCapKhac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = bangCapKhac, Size = 500 };
            if (bangCapKhacParam.Value == null)
                bangCapKhacParam.Value = DBNull.Value;

            var cchnyTuNhanParam = new SqlParameter { ParameterName = "@CCHNYTuNhan", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = cchnyTuNhan.GetValueOrDefault() };
            if (!cchnyTuNhan.HasValue)
                cchnyTuNhanParam.Value = DBNull.Value;

            var soCchnParam = new SqlParameter { ParameterName = "@SoCCHN", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = soCchn, Size = 500 };
            if (soCchnParam.Value == null)
                soCchnParam.Value = DBNull.Value;

            var ngayCapCchnParam = new SqlParameter { ParameterName = "@NgayCapCCHN", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapCchn.GetValueOrDefault() };
            if (!ngayCapCchn.HasValue)
                ngayCapCchnParam.Value = DBNull.Value;

            var noiCapCchnParam = new SqlParameter { ParameterName = "@NoiCapCCHN", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCapCchn, Size = 500 };
            if (noiCapCchnParam.Value == null)
                noiCapCchnParam.Value = DBNull.Value;

            var thoiGianHdldParam = new SqlParameter { ParameterName = "@ThoiGianHDLD", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = thoiGianHdld.GetValueOrDefault() };
            if (!thoiGianHdld.HasValue)
                thoiGianHdldParam.Value = DBNull.Value;

            var hopDongLaoDongParam = new SqlParameter { ParameterName = "@HopDongLaoDong", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = hopDongLaoDong.GetValueOrDefault() };
            if (!hopDongLaoDong.HasValue)
                hopDongLaoDongParam.Value = DBNull.Value;

            var hinhThucLamViecParam = new SqlParameter { ParameterName = "@HinhThucLamViec", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = hinhThucLamViec.GetValueOrDefault() };
            if (!hinhThucLamViec.HasValue)
                hinhThucLamViecParam.Value = DBNull.Value;

            var soNgayLamViecTrongTuanParam = new SqlParameter { ParameterName = "@SoNgayLamViecTrongTuan", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soNgayLamViecTrongTuan.GetValueOrDefault() };
            if (!soNgayLamViecTrongTuan.HasValue)
                soNgayLamViecTrongTuanParam.Value = DBNull.Value;

            var thoiGianLamViecSangParam = new SqlParameter { ParameterName = "@ThoiGianLamViecSang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thoiGianLamViecSang, Size = 500 };
            if (thoiGianLamViecSangParam.Value == null)
                thoiGianLamViecSangParam.Value = DBNull.Value;

            var thoiGianLamViecChieuParam = new SqlParameter { ParameterName = "@ThoiGianLamViecChieu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thoiGianLamViecChieu, Size = 500 };
            if (thoiGianLamViecChieuParam.Value == null)
                thoiGianLamViecChieuParam.Value = DBNull.Value;

            var thoiGianLamViecToiParam = new SqlParameter { ParameterName = "@ThoiGianLamViecToi", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thoiGianLamViecToi, Size = 500 };
            if (thoiGianLamViecToiParam.Value == null)
                thoiGianLamViecToiParam.Value = DBNull.Value;

            var soNgayNghiPhepTrongNamParam = new SqlParameter { ParameterName = "@SoNgayNghiPhepTrongNam", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soNgayNghiPhepTrongNam.GetValueOrDefault() };
            if (!soNgayNghiPhepTrongNam.HasValue)
                soNgayNghiPhepTrongNamParam.Value = DBNull.Value;

            var col3Param = new SqlParameter { ParameterName = "@col3", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = col3.GetValueOrDefault() };
            if (!col3.HasValue)
                col3Param.Value = DBNull.Value;

            var col4Param = new SqlParameter { ParameterName = "@col4", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = col4.GetValueOrDefault() };
            if (!col4.HasValue)
                col4Param.Value = DBNull.Value;

            var col5Param = new SqlParameter { ParameterName = "@col5", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col5, Size = 500 };
            if (col5Param.Value == null)
                col5Param.Value = DBNull.Value;

            var col6Param = new SqlParameter { ParameterName = "@col6", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col6, Size = 500 };
            if (col6Param.Value == null)
                col6Param.Value = DBNull.Value;

            var col7Param = new SqlParameter { ParameterName = "@col7", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col7, Size = 500 };
            if (col7Param.Value == null)
                col7Param.Value = DBNull.Value;

            var col8Param = new SqlParameter { ParameterName = "@col8", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col8, Size = 500 };
            if (col8Param.Value == null)
                col8Param.Value = DBNull.Value;

            var col9Param = new SqlParameter { ParameterName = "@col9", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col9, Size = 500 };
            if (col9Param.Value == null)
                col9Param.Value = DBNull.Value;

            var soHoChieuParam = new SqlParameter { ParameterName = "@SoHoChieu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soHoChieu, Size = 50 };
            if (soHoChieuParam.Value == null)
                soHoChieuParam.Value = DBNull.Value;

            var noiCapHoChieuParam = new SqlParameter { ParameterName = "@NoiCapHoChieu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCapHoChieu, Size = 500 };
            if (noiCapHoChieuParam.Value == null)
                noiCapHoChieuParam.Value = DBNull.Value;

            var ngayCapHoChieuParam = new SqlParameter { ParameterName = "@NgayCapHoChieu", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapHoChieu.GetValueOrDefault() };
            if (!ngayCapHoChieu.HasValue)
                ngayCapHoChieuParam.Value = DBNull.Value;

            var ngayCbhhhdParam = new SqlParameter { ParameterName = "@NgayCBHHHD", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCbhhhd.GetValueOrDefault() };
            if (!ngayCbhhhd.HasValue)
                ngayCbhhhdParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[spDSNhanVien_Insert] @MaNhanVien, @HoTenNhanVien, @MaGioiTinh, @NgaySinh, @NoiSinh, @ThuongTru, @TamTru, @MaDanToc, @SoCMND, @NoiCap, @NgayCapCMND, @GhiChu, @NgayVaoCoQuan, @MaChucDanh, @MaChucVu, @MaPhongBan, @DienThoai, @Email, @MaThamChieu, @DiaChiLienHe, @ChuyenMon, @MaSoBHYT, @SoSoBHYT, @NgayCapBH, @SoTKNH, @NganHang, @MaSoThueTNCN, @Dung, @IDLoaiNhanVien, @TamNghi, @NgayApDungTamNghi, @TenTiengAnh, @DiaChiThuongTru, @DiaChiTamTru, @DangLamViec, @NghiKhongLuong, @NghiThaiSan, @NghiViec, @Anh, @col1, @col2, @QueQuan, @ChuyenKhoa, @CacChungChiChuyenKhoa, @ChuyenMonSau, @DanhGiaCuaKhachHang, @MaHocHam, @MaHocVi, @NgayNghiViec, @LyDoNghiViec, @MaTonGiao, @MaQuocGia, @TinhTrangHonNhan, @SoCon, @EmailCaNhan, @DienThoaiNhaRieng, @DienThoaiCoQuan, @DienThoaiNguoiThan, @MaBangCap, @BangCapKhac, @CCHNYTuNhan, @SoCCHN, @NgayCapCCHN, @NoiCapCCHN, @ThoiGianHDLD, @HopDongLaoDong, @HinhThucLamViec, @SoNgayLamViecTrongTuan, @ThoiGianLamViecSang, @ThoiGianLamViecChieu, @ThoiGianLamViecToi, @SoNgayNghiPhepTrongNam, @col3, @col4, @col5, @col6, @col7, @col8, @col9, @SoHoChieu, @NoiCapHoChieu, @NgayCapHoChieu, @NgayCBHHHD", maNhanVienParam, hoTenNhanVienParam, maGioiTinhParam, ngaySinhParam, noiSinhParam, thuongTruParam, tamTruParam, maDanTocParam, soCmndParam, noiCapParam, ngayCapCmndParam, ghiChuParam, ngayVaoCoQuanParam, maChucDanhParam, maChucVuParam, maPhongBanParam, dienThoaiParam, emailParam, maThamChieuParam, diaChiLienHeParam, chuyenMonParam, maSoBhytParam, soSoBhytParam, ngayCapBhParam, soTknhParam, nganHangParam, maSoThueTncnParam, dungParam, idLoaiNhanVienParam, tamNghiParam, ngayApDungTamNghiParam, tenTiengAnhParam, diaChiThuongTruParam, diaChiTamTruParam, dangLamViecParam, nghiKhongLuongParam, nghiThaiSanParam, nghiViecParam, anhParam, col1Param, col2Param, queQuanParam, chuyenKhoaParam, cacChungChiChuyenKhoaParam, chuyenMonSauParam, danhGiaCuaKhachHangParam, maHocHamParam, maHocViParam, ngayNghiViecParam, lyDoNghiViecParam, maTonGiaoParam, maQuocGiaParam, tinhTrangHonNhanParam, soConParam, emailCaNhanParam, dienThoaiNhaRiengParam, dienThoaiCoQuanParam, dienThoaiNguoiThanParam, maBangCapParam, bangCapKhacParam, cchnyTuNhanParam, soCchnParam, ngayCapCchnParam, noiCapCchnParam, thoiGianHdldParam, hopDongLaoDongParam, hinhThucLamViecParam, soNgayLamViecTrongTuanParam, thoiGianLamViecSangParam, thoiGianLamViecChieuParam, thoiGianLamViecToiParam, soNgayNghiPhepTrongNamParam, col3Param, col4Param, col5Param, col6Param, col7Param, col8Param, col9Param, soHoChieuParam, noiCapHoChieuParam, ngayCapHoChieuParam, ngayCbhhhdParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int DsNhanVienUpdate(string maNhanVien, string hoTenNhanVien, bool? maGioiTinh, DateTime? ngaySinh, string noiSinh, string thuongTru, string tamTru, string maDanToc, string soCmnd, string noiCap, DateTime? ngayCapCmnd, string ghiChu, DateTime? ngayVaoCoQuan, string maChucDanh, string maChucVu, string maPhongBan, string dienThoai, string email, string maThamChieu, string diaChiLienHe, string chuyenMon, string maSoBhyt, string soSoBhyt, DateTime? ngayCapBh, string soTknh, string nganHang, string maSoThueTncn, bool? dung, int? idLoaiNhanVien, bool? tamNghi, DateTime? ngayApDungTamNghi, string tenTiengAnh, string diaChiThuongTru, string diaChiTamTru, bool? dangLamViec, bool? nghiKhongLuong, bool? nghiThaiSan, bool? nghiViec, byte[] anh, string col1, string col2, string queQuan, string chuyenKhoa, string cacChungChiChuyenKhoa, string chuyenMonSau, string danhGiaCuaKhachHang, string maHocHam, string maHocVi, DateTime? ngayNghiViec, string lyDoNghiViec, string maTonGiao, string maQuocGia, int? tinhTrangHonNhan, int? soCon, string emailCaNhan, string dienThoaiNhaRieng, string dienThoaiCoQuan, string dienThoaiNguoiThan, string maBangCap, string bangCapKhac, int? cchnyTuNhan, string soCchn, DateTime? ngayCapCchn, string noiCapCchn, int? thoiGianHdld, int? hopDongLaoDong, int? hinhThucLamViec, int? soNgayLamViecTrongTuan, string thoiGianLamViecSang, string thoiGianLamViecChieu, string thoiGianLamViecToi, int? soNgayNghiPhepTrongNam, int? col3, int? col4, string col5, string col6, string col7, string col8, string col9, string soHoChieu, string noiCapHoChieu, DateTime? ngayCapHoChieu, DateTime? ngayCbhhhd)
        {
            var maNhanVienParam = new SqlParameter { ParameterName = "@MaNhanVien", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maNhanVien, Size = 50 };
            if (maNhanVienParam.Value == null)
                maNhanVienParam.Value = DBNull.Value;

            var hoTenNhanVienParam = new SqlParameter { ParameterName = "@HoTenNhanVien", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTenNhanVien, Size = 500 };
            if (hoTenNhanVienParam.Value == null)
                hoTenNhanVienParam.Value = DBNull.Value;

            var maGioiTinhParam = new SqlParameter { ParameterName = "@MaGioiTinh", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = maGioiTinh.GetValueOrDefault() };
            if (!maGioiTinh.HasValue)
                maGioiTinhParam.Value = DBNull.Value;

            var ngaySinhParam = new SqlParameter { ParameterName = "@NgaySinh", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngaySinh.GetValueOrDefault() };
            if (!ngaySinh.HasValue)
                ngaySinhParam.Value = DBNull.Value;

            var noiSinhParam = new SqlParameter { ParameterName = "@NoiSinh", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiSinh, Size = 500 };
            if (noiSinhParam.Value == null)
                noiSinhParam.Value = DBNull.Value;

            var thuongTruParam = new SqlParameter { ParameterName = "@ThuongTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thuongTru, Size = 500 };
            if (thuongTruParam.Value == null)
                thuongTruParam.Value = DBNull.Value;

            var tamTruParam = new SqlParameter { ParameterName = "@TamTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = tamTru, Size = 500 };
            if (tamTruParam.Value == null)
                tamTruParam.Value = DBNull.Value;

            var maDanTocParam = new SqlParameter { ParameterName = "@MaDanToc", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maDanToc, Size = 50 };
            if (maDanTocParam.Value == null)
                maDanTocParam.Value = DBNull.Value;

            var soCmndParam = new SqlParameter { ParameterName = "@SoCMND", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soCmnd, Size = 50 };
            if (soCmndParam.Value == null)
                soCmndParam.Value = DBNull.Value;

            var noiCapParam = new SqlParameter { ParameterName = "@NoiCap", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCap, Size = 500 };
            if (noiCapParam.Value == null)
                noiCapParam.Value = DBNull.Value;

            var ngayCapCmndParam = new SqlParameter { ParameterName = "@NgayCapCMND", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapCmnd.GetValueOrDefault() };
            if (!ngayCapCmnd.HasValue)
                ngayCapCmndParam.Value = DBNull.Value;

            var ghiChuParam = new SqlParameter { ParameterName = "@GhiChu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = ghiChu, Size = 500 };
            if (ghiChuParam.Value == null)
                ghiChuParam.Value = DBNull.Value;

            var ngayVaoCoQuanParam = new SqlParameter { ParameterName = "@NgayVaoCoQuan", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayVaoCoQuan.GetValueOrDefault() };
            if (!ngayVaoCoQuan.HasValue)
                ngayVaoCoQuanParam.Value = DBNull.Value;

            var maChucDanhParam = new SqlParameter { ParameterName = "@MaChucDanh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucDanh, Size = 250 };
            if (maChucDanhParam.Value == null)
                maChucDanhParam.Value = DBNull.Value;

            var maChucVuParam = new SqlParameter { ParameterName = "@MaChucVu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maChucVu, Size = 250 };
            if (maChucVuParam.Value == null)
                maChucVuParam.Value = DBNull.Value;

            var maPhongBanParam = new SqlParameter { ParameterName = "@MaPhongBan", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maPhongBan, Size = 50 };
            if (maPhongBanParam.Value == null)
                maPhongBanParam.Value = DBNull.Value;

            var dienThoaiParam = new SqlParameter { ParameterName = "@DienThoai", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = dienThoai, Size = 50 };
            if (dienThoaiParam.Value == null)
                dienThoaiParam.Value = DBNull.Value;

            var emailParam = new SqlParameter { ParameterName = "@Email", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = email, Size = 50 };
            if (emailParam.Value == null)
                emailParam.Value = DBNull.Value;

            var maThamChieuParam = new SqlParameter { ParameterName = "@MaThamChieu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maThamChieu, Size = 50 };
            if (maThamChieuParam.Value == null)
                maThamChieuParam.Value = DBNull.Value;

            var diaChiLienHeParam = new SqlParameter { ParameterName = "@DiaChiLienHe", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChiLienHe, Size = 500 };
            if (diaChiLienHeParam.Value == null)
                diaChiLienHeParam.Value = DBNull.Value;

            var chuyenMonParam = new SqlParameter { ParameterName = "@ChuyenMon", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenMon, Size = 500 };
            if (chuyenMonParam.Value == null)
                chuyenMonParam.Value = DBNull.Value;

            var maSoBhytParam = new SqlParameter { ParameterName = "@MaSoBHYT", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maSoBhyt, Size = 50 };
            if (maSoBhytParam.Value == null)
                maSoBhytParam.Value = DBNull.Value;

            var soSoBhytParam = new SqlParameter { ParameterName = "@SoSoBHYT", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soSoBhyt, Size = 50 };
            if (soSoBhytParam.Value == null)
                soSoBhytParam.Value = DBNull.Value;

            var ngayCapBhParam = new SqlParameter { ParameterName = "@NgayCapBH", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapBh.GetValueOrDefault() };
            if (!ngayCapBh.HasValue)
                ngayCapBhParam.Value = DBNull.Value;

            var soTknhParam = new SqlParameter { ParameterName = "@SoTKNH", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soTknh, Size = 50 };
            if (soTknhParam.Value == null)
                soTknhParam.Value = DBNull.Value;

            var nganHangParam = new SqlParameter { ParameterName = "@NganHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = nganHang, Size = 500 };
            if (nganHangParam.Value == null)
                nganHangParam.Value = DBNull.Value;

            var maSoThueTncnParam = new SqlParameter { ParameterName = "@MaSoThueTNCN", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maSoThueTncn, Size = 50 };
            if (maSoThueTncnParam.Value == null)
                maSoThueTncnParam.Value = DBNull.Value;

            var dungParam = new SqlParameter { ParameterName = "@Dung", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dung.GetValueOrDefault() };
            if (!dung.HasValue)
                dungParam.Value = DBNull.Value;

            var idLoaiNhanVienParam = new SqlParameter { ParameterName = "@IDLoaiNhanVien", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = idLoaiNhanVien.GetValueOrDefault() };
            if (!idLoaiNhanVien.HasValue)
                idLoaiNhanVienParam.Value = DBNull.Value;

            var tamNghiParam = new SqlParameter { ParameterName = "@TamNghi", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = tamNghi.GetValueOrDefault() };
            if (!tamNghi.HasValue)
                tamNghiParam.Value = DBNull.Value;

            var ngayApDungTamNghiParam = new SqlParameter { ParameterName = "@NgayApDungTamNghi", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayApDungTamNghi.GetValueOrDefault() };
            if (!ngayApDungTamNghi.HasValue)
                ngayApDungTamNghiParam.Value = DBNull.Value;

            var tenTiengAnhParam = new SqlParameter { ParameterName = "@TenTiengAnh", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = tenTiengAnh, Size = 50 };
            if (tenTiengAnhParam.Value == null)
                tenTiengAnhParam.Value = DBNull.Value;

            var diaChiThuongTruParam = new SqlParameter { ParameterName = "@DiaChiThuongTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChiThuongTru, Size = 250 };
            if (diaChiThuongTruParam.Value == null)
                diaChiThuongTruParam.Value = DBNull.Value;

            var diaChiTamTruParam = new SqlParameter { ParameterName = "@DiaChiTamTru", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = diaChiTamTru, Size = 250 };
            if (diaChiTamTruParam.Value == null)
                diaChiTamTruParam.Value = DBNull.Value;

            var dangLamViecParam = new SqlParameter { ParameterName = "@DangLamViec", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = dangLamViec.GetValueOrDefault() };
            if (!dangLamViec.HasValue)
                dangLamViecParam.Value = DBNull.Value;

            var nghiKhongLuongParam = new SqlParameter { ParameterName = "@NghiKhongLuong", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = nghiKhongLuong.GetValueOrDefault() };
            if (!nghiKhongLuong.HasValue)
                nghiKhongLuongParam.Value = DBNull.Value;

            var nghiThaiSanParam = new SqlParameter { ParameterName = "@NghiThaiSan", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = nghiThaiSan.GetValueOrDefault() };
            if (!nghiThaiSan.HasValue)
                nghiThaiSanParam.Value = DBNull.Value;

            var nghiViecParam = new SqlParameter { ParameterName = "@NghiViec", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = nghiViec.GetValueOrDefault() };
            if (!nghiViec.HasValue)
                nghiViecParam.Value = DBNull.Value;

            var anhParam = new SqlParameter { ParameterName = "@Anh", SqlDbType = SqlDbType.Image, Direction = ParameterDirection.Input, Value = anh, Size = 2147483647 };
            if (anhParam.Value == null)
                anhParam.Value = DBNull.Value;

            var col1Param = new SqlParameter { ParameterName = "@col1", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col1, Size = 250 };
            if (col1Param.Value == null)
                col1Param.Value = DBNull.Value;

            var col2Param = new SqlParameter { ParameterName = "@col2", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col2, Size = 250 };
            if (col2Param.Value == null)
                col2Param.Value = DBNull.Value;

            var queQuanParam = new SqlParameter { ParameterName = "@QueQuan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = queQuan, Size = 500 };
            if (queQuanParam.Value == null)
                queQuanParam.Value = DBNull.Value;

            var chuyenKhoaParam = new SqlParameter { ParameterName = "@ChuyenKhoa", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenKhoa, Size = 100 };
            if (chuyenKhoaParam.Value == null)
                chuyenKhoaParam.Value = DBNull.Value;

            var cacChungChiChuyenKhoaParam = new SqlParameter { ParameterName = "@CacChungChiChuyenKhoa", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = cacChungChiChuyenKhoa, Size = 500 };
            if (cacChungChiChuyenKhoaParam.Value == null)
                cacChungChiChuyenKhoaParam.Value = DBNull.Value;

            var chuyenMonSauParam = new SqlParameter { ParameterName = "@ChuyenMonSau", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = chuyenMonSau, Size = 100 };
            if (chuyenMonSauParam.Value == null)
                chuyenMonSauParam.Value = DBNull.Value;

            var danhGiaCuaKhachHangParam = new SqlParameter { ParameterName = "@DanhGiaCuaKhachHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = danhGiaCuaKhachHang };
            if (danhGiaCuaKhachHangParam.Value == null)
                danhGiaCuaKhachHangParam.Value = DBNull.Value;

            var maHocHamParam = new SqlParameter { ParameterName = "@MaHocHam", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocHam, Size = 250 };
            if (maHocHamParam.Value == null)
                maHocHamParam.Value = DBNull.Value;

            var maHocViParam = new SqlParameter { ParameterName = "@MaHocVi", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maHocVi, Size = 250 };
            if (maHocViParam.Value == null)
                maHocViParam.Value = DBNull.Value;

            var ngayNghiViecParam = new SqlParameter { ParameterName = "@NgayNghiViec", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayNghiViec.GetValueOrDefault() };
            if (!ngayNghiViec.HasValue)
                ngayNghiViecParam.Value = DBNull.Value;

            var lyDoNghiViecParam = new SqlParameter { ParameterName = "@LyDoNghiViec", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = lyDoNghiViec, Size = 250 };
            if (lyDoNghiViecParam.Value == null)
                lyDoNghiViecParam.Value = DBNull.Value;

            var maTonGiaoParam = new SqlParameter { ParameterName = "@MaTonGiao", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maTonGiao, Size = 50 };
            if (maTonGiaoParam.Value == null)
                maTonGiaoParam.Value = DBNull.Value;

            var maQuocGiaParam = new SqlParameter { ParameterName = "@MaQuocGia", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maQuocGia, Size = 50 };
            if (maQuocGiaParam.Value == null)
                maQuocGiaParam.Value = DBNull.Value;

            var tinhTrangHonNhanParam = new SqlParameter { ParameterName = "@TinhTrangHonNhan", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = tinhTrangHonNhan.GetValueOrDefault() };
            if (!tinhTrangHonNhan.HasValue)
                tinhTrangHonNhanParam.Value = DBNull.Value;

            var soConParam = new SqlParameter { ParameterName = "@SoCon", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCon.GetValueOrDefault() };
            if (!soCon.HasValue)
                soConParam.Value = DBNull.Value;

            var emailCaNhanParam = new SqlParameter { ParameterName = "@EmailCaNhan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = emailCaNhan, Size = 500 };
            if (emailCaNhanParam.Value == null)
                emailCaNhanParam.Value = DBNull.Value;

            var dienThoaiNhaRiengParam = new SqlParameter { ParameterName = "@DienThoaiNhaRieng", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = dienThoaiNhaRieng, Size = 500 };
            if (dienThoaiNhaRiengParam.Value == null)
                dienThoaiNhaRiengParam.Value = DBNull.Value;

            var dienThoaiCoQuanParam = new SqlParameter { ParameterName = "@DienThoaiCoQuan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = dienThoaiCoQuan, Size = 500 };
            if (dienThoaiCoQuanParam.Value == null)
                dienThoaiCoQuanParam.Value = DBNull.Value;

            var dienThoaiNguoiThanParam = new SqlParameter { ParameterName = "@DienThoaiNguoiThan", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = dienThoaiNguoiThan, Size = 500 };
            if (dienThoaiNguoiThanParam.Value == null)
                dienThoaiNguoiThanParam.Value = DBNull.Value;

            var maBangCapParam = new SqlParameter { ParameterName = "@MaBangCap", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maBangCap, Size = 50 };
            if (maBangCapParam.Value == null)
                maBangCapParam.Value = DBNull.Value;

            var bangCapKhacParam = new SqlParameter { ParameterName = "@BangCapKhac", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = bangCapKhac, Size = 500 };
            if (bangCapKhacParam.Value == null)
                bangCapKhacParam.Value = DBNull.Value;

            var cchnyTuNhanParam = new SqlParameter { ParameterName = "@CCHNYTuNhan", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = cchnyTuNhan.GetValueOrDefault() };
            if (!cchnyTuNhan.HasValue)
                cchnyTuNhanParam.Value = DBNull.Value;

            var soCchnParam = new SqlParameter { ParameterName = "@SoCCHN", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = soCchn, Size = 500 };
            if (soCchnParam.Value == null)
                soCchnParam.Value = DBNull.Value;

            var ngayCapCchnParam = new SqlParameter { ParameterName = "@NgayCapCCHN", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapCchn.GetValueOrDefault() };
            if (!ngayCapCchn.HasValue)
                ngayCapCchnParam.Value = DBNull.Value;

            var noiCapCchnParam = new SqlParameter { ParameterName = "@NoiCapCCHN", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCapCchn, Size = 500 };
            if (noiCapCchnParam.Value == null)
                noiCapCchnParam.Value = DBNull.Value;

            var thoiGianHdldParam = new SqlParameter { ParameterName = "@ThoiGianHDLD", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = thoiGianHdld.GetValueOrDefault() };
            if (!thoiGianHdld.HasValue)
                thoiGianHdldParam.Value = DBNull.Value;

            var hopDongLaoDongParam = new SqlParameter { ParameterName = "@HopDongLaoDong", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = hopDongLaoDong.GetValueOrDefault() };
            if (!hopDongLaoDong.HasValue)
                hopDongLaoDongParam.Value = DBNull.Value;

            var hinhThucLamViecParam = new SqlParameter { ParameterName = "@HinhThucLamViec", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = hinhThucLamViec.GetValueOrDefault() };
            if (!hinhThucLamViec.HasValue)
                hinhThucLamViecParam.Value = DBNull.Value;

            var soNgayLamViecTrongTuanParam = new SqlParameter { ParameterName = "@SoNgayLamViecTrongTuan", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soNgayLamViecTrongTuan.GetValueOrDefault() };
            if (!soNgayLamViecTrongTuan.HasValue)
                soNgayLamViecTrongTuanParam.Value = DBNull.Value;

            var thoiGianLamViecSangParam = new SqlParameter { ParameterName = "@ThoiGianLamViecSang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thoiGianLamViecSang, Size = 500 };
            if (thoiGianLamViecSangParam.Value == null)
                thoiGianLamViecSangParam.Value = DBNull.Value;

            var thoiGianLamViecChieuParam = new SqlParameter { ParameterName = "@ThoiGianLamViecChieu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thoiGianLamViecChieu, Size = 500 };
            if (thoiGianLamViecChieuParam.Value == null)
                thoiGianLamViecChieuParam.Value = DBNull.Value;

            var thoiGianLamViecToiParam = new SqlParameter { ParameterName = "@ThoiGianLamViecToi", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = thoiGianLamViecToi, Size = 500 };
            if (thoiGianLamViecToiParam.Value == null)
                thoiGianLamViecToiParam.Value = DBNull.Value;

            var soNgayNghiPhepTrongNamParam = new SqlParameter { ParameterName = "@SoNgayNghiPhepTrongNam", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soNgayNghiPhepTrongNam.GetValueOrDefault() };
            if (!soNgayNghiPhepTrongNam.HasValue)
                soNgayNghiPhepTrongNamParam.Value = DBNull.Value;

            var col3Param = new SqlParameter { ParameterName = "@col3", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = col3.GetValueOrDefault() };
            if (!col3.HasValue)
                col3Param.Value = DBNull.Value;

            var col4Param = new SqlParameter { ParameterName = "@col4", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = col4.GetValueOrDefault() };
            if (!col4.HasValue)
                col4Param.Value = DBNull.Value;

            var col5Param = new SqlParameter { ParameterName = "@col5", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col5, Size = 500 };
            if (col5Param.Value == null)
                col5Param.Value = DBNull.Value;

            var col6Param = new SqlParameter { ParameterName = "@col6", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col6, Size = 500 };
            if (col6Param.Value == null)
                col6Param.Value = DBNull.Value;

            var col7Param = new SqlParameter { ParameterName = "@col7", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col7, Size = 500 };
            if (col7Param.Value == null)
                col7Param.Value = DBNull.Value;

            var col8Param = new SqlParameter { ParameterName = "@col8", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col8, Size = 500 };
            if (col8Param.Value == null)
                col8Param.Value = DBNull.Value;

            var col9Param = new SqlParameter { ParameterName = "@col9", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = col9, Size = 500 };
            if (col9Param.Value == null)
                col9Param.Value = DBNull.Value;

            var soHoChieuParam = new SqlParameter { ParameterName = "@SoHoChieu", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soHoChieu, Size = 50 };
            if (soHoChieuParam.Value == null)
                soHoChieuParam.Value = DBNull.Value;

            var noiCapHoChieuParam = new SqlParameter { ParameterName = "@NoiCapHoChieu", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCapHoChieu, Size = 500 };
            if (noiCapHoChieuParam.Value == null)
                noiCapHoChieuParam.Value = DBNull.Value;

            var ngayCapHoChieuParam = new SqlParameter { ParameterName = "@NgayCapHoChieu", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapHoChieu.GetValueOrDefault() };
            if (!ngayCapHoChieu.HasValue)
                ngayCapHoChieuParam.Value = DBNull.Value;

            var ngayCbhhhdParam = new SqlParameter { ParameterName = "@NgayCBHHHD", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCbhhhd.GetValueOrDefault() };
            if (!ngayCbhhhd.HasValue)
                ngayCbhhhdParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[spDSNhanVien_Update] @MaNhanVien, @HoTenNhanVien, @MaGioiTinh, @NgaySinh, @NoiSinh, @ThuongTru, @TamTru, @MaDanToc, @SoCMND, @NoiCap, @NgayCapCMND, @GhiChu, @NgayVaoCoQuan, @MaChucDanh, @MaChucVu, @MaPhongBan, @DienThoai, @Email, @MaThamChieu, @DiaChiLienHe, @ChuyenMon, @MaSoBHYT, @SoSoBHYT, @NgayCapBH, @SoTKNH, @NganHang, @MaSoThueTNCN, @Dung, @IDLoaiNhanVien, @TamNghi, @NgayApDungTamNghi, @TenTiengAnh, @DiaChiThuongTru, @DiaChiTamTru, @DangLamViec, @NghiKhongLuong, @NghiThaiSan, @NghiViec, @Anh, @col1, @col2, @QueQuan, @ChuyenKhoa, @CacChungChiChuyenKhoa, @ChuyenMonSau, @DanhGiaCuaKhachHang, @MaHocHam, @MaHocVi, @NgayNghiViec, @LyDoNghiViec, @MaTonGiao, @MaQuocGia, @TinhTrangHonNhan, @SoCon, @EmailCaNhan, @DienThoaiNhaRieng, @DienThoaiCoQuan, @DienThoaiNguoiThan, @MaBangCap, @BangCapKhac, @CCHNYTuNhan, @SoCCHN, @NgayCapCCHN, @NoiCapCCHN, @ThoiGianHDLD, @HopDongLaoDong, @HinhThucLamViec, @SoNgayLamViecTrongTuan, @ThoiGianLamViecSang, @ThoiGianLamViecChieu, @ThoiGianLamViecToi, @SoNgayNghiPhepTrongNam, @col3, @col4, @col5, @col6, @col7, @col8, @col9, @SoHoChieu, @NoiCapHoChieu, @NgayCapHoChieu, @NgayCBHHHD", maNhanVienParam, hoTenNhanVienParam, maGioiTinhParam, ngaySinhParam, noiSinhParam, thuongTruParam, tamTruParam, maDanTocParam, soCmndParam, noiCapParam, ngayCapCmndParam, ghiChuParam, ngayVaoCoQuanParam, maChucDanhParam, maChucVuParam, maPhongBanParam, dienThoaiParam, emailParam, maThamChieuParam, diaChiLienHeParam, chuyenMonParam, maSoBhytParam, soSoBhytParam, ngayCapBhParam, soTknhParam, nganHangParam, maSoThueTncnParam, dungParam, idLoaiNhanVienParam, tamNghiParam, ngayApDungTamNghiParam, tenTiengAnhParam, diaChiThuongTruParam, diaChiTamTruParam, dangLamViecParam, nghiKhongLuongParam, nghiThaiSanParam, nghiViecParam, anhParam, col1Param, col2Param, queQuanParam, chuyenKhoaParam, cacChungChiChuyenKhoaParam, chuyenMonSauParam, danhGiaCuaKhachHangParam, maHocHamParam, maHocViParam, ngayNghiViecParam, lyDoNghiViecParam, maTonGiaoParam, maQuocGiaParam, tinhTrangHonNhanParam, soConParam, emailCaNhanParam, dienThoaiNhaRiengParam, dienThoaiCoQuanParam, dienThoaiNguoiThanParam, maBangCapParam, bangCapKhacParam, cchnyTuNhanParam, soCchnParam, ngayCapCchnParam, noiCapCchnParam, thoiGianHdldParam, hopDongLaoDongParam, hinhThucLamViecParam, soNgayLamViecTrongTuanParam, thoiGianLamViecSangParam, thoiGianLamViecChieuParam, thoiGianLamViecToiParam, soNgayNghiPhepTrongNamParam, col3Param, col4Param, col5Param, col6Param, col7Param, col8Param, col9Param, soHoChieuParam, noiCapHoChieuParam, ngayCapHoChieuParam, ngayCbhhhdParam, procResultParam);
            return (int)procResultParam.Value;
        }

        public async Task<DmKhoaGetByIdViewModel> DmKhoaGetById(string maKhoa)
        {
            var maKhoaParam = new SqlParameter { ParameterName = "@MaKhoa", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = maKhoa, Size = 50 };
            if (maKhoaParam.Value == null)
                maKhoaParam.Value = DBNull.Value;

            //var procResultData = Database.SqlQuery<DmKhoaGetByIdResult>("EXEC [dbo].[sp_DMKhoa_GetById] @MaKhoa", maKhoaParam).ToList();
            var procResultData = await Context.RawQueryAsync<DmKhoaGetByIdViewModel>("EXEC [dbo].[sp_DMKhoa_GetById] @MaKhoa", maKhoaParam);
            return procResultData.FirstOrDefault();
        }

        public async Task<List<DmKhoaSelectAllViewModel>> DmKhoaSelectAll()
        {
            var procResultData = await Context.RawQueryAsync<DmKhoaSelectAllViewModel>("EXEC [dbo].[sp_DMKhoa_SelectAll] ");
            return procResultData.ToList();
        }

        public int DsNhanVienInsertWeb(string maNhanVien, string hoTenNhanVien, bool? maGioiTinh, DateTime? ngaySinh, string soCmnd, string noiCap, DateTime? ngayCapCmnd, DateTime? ngayVaoCoQuan, string dienThoai, string email, string soTknh, string nganHang, string maSoThueTncn, int? soCon, int? officeId, string officeName, string officeIdPath)
        {
            var maNhanVienParam = new SqlParameter { ParameterName = "@MaNhanVien", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maNhanVien, Size = 50 };
            if (maNhanVienParam.Value == null)
                maNhanVienParam.Value = DBNull.Value;

            var hoTenNhanVienParam = new SqlParameter { ParameterName = "@HoTenNhanVien", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTenNhanVien, Size = 50 };
            if (hoTenNhanVienParam.Value == null)
                hoTenNhanVienParam.Value = DBNull.Value;

            var maGioiTinhParam = new SqlParameter { ParameterName = "@MaGioiTinh", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = maGioiTinh.GetValueOrDefault() };
            if (!maGioiTinh.HasValue)
                maGioiTinhParam.Value = DBNull.Value;

            var ngaySinhParam = new SqlParameter { ParameterName = "@NgaySinh", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngaySinh.GetValueOrDefault() };
            if (!ngaySinh.HasValue)
                ngaySinhParam.Value = DBNull.Value;

            var soCmndParam = new SqlParameter { ParameterName = "@SoCMND", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soCmnd, Size = 50 };
            if (soCmndParam.Value == null)
                soCmndParam.Value = DBNull.Value;

            var noiCapParam = new SqlParameter { ParameterName = "@NoiCap", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCap, Size = 250 };
            if (noiCapParam.Value == null)
                noiCapParam.Value = DBNull.Value;

            var ngayCapCmndParam = new SqlParameter { ParameterName = "@NgayCapCMND", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapCmnd.GetValueOrDefault() };
            if (!ngayCapCmnd.HasValue)
                ngayCapCmndParam.Value = DBNull.Value;

            var ngayVaoCoQuanParam = new SqlParameter { ParameterName = "@NgayVaoCoQuan", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayVaoCoQuan.GetValueOrDefault() };
            if (!ngayVaoCoQuan.HasValue)
                ngayVaoCoQuanParam.Value = DBNull.Value;

            var dienThoaiParam = new SqlParameter { ParameterName = "@DienThoai", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = dienThoai, Size = 50 };
            if (dienThoaiParam.Value == null)
                dienThoaiParam.Value = DBNull.Value;

            var emailParam = new SqlParameter { ParameterName = "@Email", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = email, Size = 50 };
            if (emailParam.Value == null)
                emailParam.Value = DBNull.Value;

            var soTknhParam = new SqlParameter { ParameterName = "@SoTKNH", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soTknh, Size = 50 };
            if (soTknhParam.Value == null)
                soTknhParam.Value = DBNull.Value;

            var nganHangParam = new SqlParameter { ParameterName = "@NganHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = nganHang, Size = 250 };
            if (nganHangParam.Value == null)
                nganHangParam.Value = DBNull.Value;

            var maSoThueTncnParam = new SqlParameter { ParameterName = "@MaSoThueTNCN", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maSoThueTncn, Size = 50 };
            if (maSoThueTncnParam.Value == null)
                maSoThueTncnParam.Value = DBNull.Value;

            var soConParam = new SqlParameter { ParameterName = "@SoCon", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCon.GetValueOrDefault() };
            if (!soCon.HasValue)
                soConParam.Value = DBNull.Value;

            var officeIdParam = new SqlParameter { ParameterName = "@OfficeId", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = officeId.GetValueOrDefault() };
            if (!officeId.HasValue)
                officeIdParam.Value = DBNull.Value;

            var officeNameParam = new SqlParameter { ParameterName = "@OfficeName", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = officeName, Size = 250 };
            if (officeNameParam.Value == null)
                officeNameParam.Value = DBNull.Value;

            var officeIdPathParam = new SqlParameter { ParameterName = "@OfficeIdPath", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = officeIdPath, Size = 500 };
            if (officeIdPathParam.Value == null)
                officeIdPathParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_DSNhanVien_Insert_Web] @MaNhanVien, @HoTenNhanVien, @MaGioiTinh, @NgaySinh, @SoCMND, @NoiCap, @NgayCapCMND, @NgayVaoCoQuan, @DienThoai, @Email, @SoTKNH, @NganHang, @MaSoThueTNCN, @SoCon, @OfficeId, @OfficeName, @OfficeIdPath", maNhanVienParam, hoTenNhanVienParam, maGioiTinhParam, ngaySinhParam, soCmndParam, noiCapParam, ngayCapCmndParam, ngayVaoCoQuanParam, dienThoaiParam, emailParam, soTknhParam, nganHangParam, maSoThueTncnParam, soConParam, officeIdParam, officeNameParam, officeIdPathParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int DsNhanVienUpdateWeb(string maNhanVien, string hoTenNhanVien, bool? maGioiTinh, DateTime? ngaySinh, string soCmnd, string noiCap, DateTime? ngayCapCmnd, DateTime? ngayVaoCoQuan, string dienThoai, string email, string soTknh, string nganHang, string maSoThueTncn, int? soCon, int? officeId, string officeName, string officeIdPath)
        {
            var maNhanVienParam = new SqlParameter { ParameterName = "@MaNhanVien", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maNhanVien, Size = 50 };
            if (maNhanVienParam.Value == null)
                maNhanVienParam.Value = DBNull.Value;

            var hoTenNhanVienParam = new SqlParameter { ParameterName = "@HoTenNhanVien", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = hoTenNhanVien, Size = 50 };
            if (hoTenNhanVienParam.Value == null)
                hoTenNhanVienParam.Value = DBNull.Value;

            var maGioiTinhParam = new SqlParameter { ParameterName = "@MaGioiTinh", SqlDbType = SqlDbType.Bit, Direction = ParameterDirection.Input, Value = maGioiTinh.GetValueOrDefault() };
            if (!maGioiTinh.HasValue)
                maGioiTinhParam.Value = DBNull.Value;

            var ngaySinhParam = new SqlParameter { ParameterName = "@NgaySinh", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngaySinh.GetValueOrDefault() };
            if (!ngaySinh.HasValue)
                ngaySinhParam.Value = DBNull.Value;

            var soCmndParam = new SqlParameter { ParameterName = "@SoCMND", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soCmnd, Size = 50 };
            if (soCmndParam.Value == null)
                soCmndParam.Value = DBNull.Value;

            var noiCapParam = new SqlParameter { ParameterName = "@NoiCap", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = noiCap, Size = 250 };
            if (noiCapParam.Value == null)
                noiCapParam.Value = DBNull.Value;

            var ngayCapCmndParam = new SqlParameter { ParameterName = "@NgayCapCMND", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayCapCmnd.GetValueOrDefault() };
            if (!ngayCapCmnd.HasValue)
                ngayCapCmndParam.Value = DBNull.Value;

            var ngayVaoCoQuanParam = new SqlParameter { ParameterName = "@NgayVaoCoQuan", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = ngayVaoCoQuan.GetValueOrDefault() };
            if (!ngayVaoCoQuan.HasValue)
                ngayVaoCoQuanParam.Value = DBNull.Value;

            var dienThoaiParam = new SqlParameter { ParameterName = "@DienThoai", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = dienThoai, Size = 50 };
            if (dienThoaiParam.Value == null)
                dienThoaiParam.Value = DBNull.Value;

            var emailParam = new SqlParameter { ParameterName = "@Email", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = email, Size = 50 };
            if (emailParam.Value == null)
                emailParam.Value = DBNull.Value;

            var soTknhParam = new SqlParameter { ParameterName = "@SoTKNH", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = soTknh, Size = 50 };
            if (soTknhParam.Value == null)
                soTknhParam.Value = DBNull.Value;

            var nganHangParam = new SqlParameter { ParameterName = "@NganHang", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = nganHang, Size = 250 };
            if (nganHangParam.Value == null)
                nganHangParam.Value = DBNull.Value;

            var maSoThueTncnParam = new SqlParameter { ParameterName = "@MaSoThueTNCN", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maSoThueTncn, Size = 50 };
            if (maSoThueTncnParam.Value == null)
                maSoThueTncnParam.Value = DBNull.Value;

            var soConParam = new SqlParameter { ParameterName = "@SoCon", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = soCon.GetValueOrDefault() };
            if (!soCon.HasValue)
                soConParam.Value = DBNull.Value;

            var officeIdParam = new SqlParameter { ParameterName = "@OfficeId", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input, Value = officeId.GetValueOrDefault() };
            if (!officeId.HasValue)
                officeIdParam.Value = DBNull.Value;

            var officeNameParam = new SqlParameter { ParameterName = "@OfficeName", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = officeName, Size = 250 };
            if (officeNameParam.Value == null)
                officeNameParam.Value = DBNull.Value;

            var officeIdPathParam = new SqlParameter { ParameterName = "@OfficeIdPath", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = officeIdPath, Size = 500 };
            if (officeIdPathParam.Value == null)
                officeIdPathParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_DSNhanVien_Update_Web] @MaNhanVien, @HoTenNhanVien, @MaGioiTinh, @NgaySinh, @SoCMND, @NoiCap, @NgayCapCMND, @NgayVaoCoQuan, @DienThoai, @Email, @SoTKNH, @NganHang, @MaSoThueTNCN, @SoCon, @OfficeId, @OfficeName, @OfficeIdPath", maNhanVienParam, hoTenNhanVienParam, maGioiTinhParam, ngaySinhParam, soCmndParam, noiCapParam, ngayCapCmndParam, ngayVaoCoQuanParam, dienThoaiParam, emailParam, soTknhParam, nganHangParam, maSoThueTncnParam, soConParam, officeIdParam, officeNameParam, officeIdPathParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int AppointmentScheduleExistsByDatePhoneShiftAndServiceKind(DateTime? startTime, string phoneNumber, string shift, string serviceId)
        {
            var startTimeParam = new SqlParameter { ParameterName = "@StartTime", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = startTime.GetValueOrDefault() };
            if (!startTime.HasValue)
                startTimeParam.Value = DBNull.Value;

            var phoneNumberParam = new SqlParameter { ParameterName = "@PhoneNumber", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = phoneNumber, Size = 50 };
            if (phoneNumberParam.Value == null)
                phoneNumberParam.Value = DBNull.Value;

            var shiftParam = new SqlParameter { ParameterName = "@Shift", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = shift, Size = 50 };
            if (shiftParam.Value == null)
                shiftParam.Value = DBNull.Value;

            var serviceIdParam = new SqlParameter { ParameterName = "@ServiceId", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = serviceId, Size = 50 };
            if (serviceIdParam.Value == null)
                serviceIdParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_AppointmentScheduleExistsByDatePhoneShiftAndServiceKind] @StartTime, @PhoneNumber, @Shift, @ServiceId", startTimeParam, phoneNumberParam, shiftParam, serviceIdParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int AppointmentScheduleExistsByTimeAndServiceKind(DateTime? startTime, string phoneNumber, string shift, string hour, string maBacSy)
        {
            var startTimeParam = new SqlParameter { ParameterName = "@StartTime", SqlDbType = SqlDbType.DateTime, Direction = ParameterDirection.Input, Value = startTime.GetValueOrDefault() };
            if (!startTime.HasValue)
                startTimeParam.Value = DBNull.Value;

            var phoneNumberParam = new SqlParameter { ParameterName = "@PhoneNumber", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = phoneNumber, Size = 50 };
            if (phoneNumberParam.Value == null)
                phoneNumberParam.Value = DBNull.Value;

            var shiftParam = new SqlParameter { ParameterName = "@Shift", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = shift, Size = 50 };
            if (shiftParam.Value == null)
                shiftParam.Value = DBNull.Value;

            var hourParam = new SqlParameter { ParameterName = "@Hour", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = hour, Size = 50 };
            if (hourParam.Value == null)
                hourParam.Value = DBNull.Value;

            var maBacSyParam = new SqlParameter { ParameterName = "@MaBacSy", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = maBacSy, Size = 50 };
            if (maBacSyParam.Value == null)
                maBacSyParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_AppointmentScheduleExistsByTimeAndServiceKind] @StartTime, @PhoneNumber, @Shift, @Hour, @MaBacSy", startTimeParam, phoneNumberParam, shiftParam, hourParam, maBacSyParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int UpdateUserPassword(string userId, string password)
        {
            var userIdParam = new SqlParameter { ParameterName = "@UserId", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = userId, Size = 50 };
            if (userIdParam.Value == null)
                userIdParam.Value = DBNull.Value;

            var passwordParam = new SqlParameter { ParameterName = "@Password", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = password, Size = 50 };
            if (passwordParam.Value == null)
                passwordParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_UpdateUserPassword] @UserId, @Password", userIdParam, passwordParam, procResultParam);
            return (int)procResultParam.Value;
        }

        public int NguoiDungInsertWeb(string id, string fullName, string userName, string password)
        {
            var idParam = new SqlParameter { ParameterName = "@Id", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = id, Size = 50 };
            if (idParam.Value == null)
                idParam.Value = DBNull.Value;

            var fullNameParam = new SqlParameter { ParameterName = "@FullName", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = fullName, Size = 50 };
            if (fullNameParam.Value == null)
                fullNameParam.Value = DBNull.Value;

            var userNameParam = new SqlParameter { ParameterName = "@UserName", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = userName, Size = 50 };
            if (userNameParam.Value == null)
                userNameParam.Value = DBNull.Value;

            var passwordParam = new SqlParameter { ParameterName = "@Password", SqlDbType = SqlDbType.VarChar, Direction = ParameterDirection.Input, Value = password, Size = 50 };
            if (passwordParam.Value == null)
                passwordParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_NguoiDung_Insert_Web] @Id, @FullName, @UserName, @Password", idParam, fullNameParam, userNameParam, passwordParam, procResultParam);

            return (int)procResultParam.Value;
        }

        public int DsNhanVienUpdateOfficeIdPath(string xmlOfficeDocument)
        {
            var xmlOfficeDocumentParam = new SqlParameter { ParameterName = "@XmlOfficeDocument", SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input, Value = xmlOfficeDocument };
            if (xmlOfficeDocumentParam.Value == null)
                xmlOfficeDocumentParam.Value = DBNull.Value;

            var procResultParam = new SqlParameter { ParameterName = "@procResult", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output };

            Context.Database.ExecuteSqlCommand("EXEC @procResult = [dbo].[sp_DSNhanVien_Update_OfficeIdPath] @XmlOfficeDocument", xmlOfficeDocumentParam, procResultParam);

            return (int)procResultParam.Value;
        }
    }
}
