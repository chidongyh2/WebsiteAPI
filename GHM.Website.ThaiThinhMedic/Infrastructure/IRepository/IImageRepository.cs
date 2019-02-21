using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Clinic.DataAccess;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModel;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IImageRepository
    {
        Task<List<AnhChupThuThuat>> Search(string patientId, int page, int pageSize, out int totalRows);

        Task<List<T>> GetAllImage<T>(Expression<Func<AnhChupThuThuat, T>> projector, string patientId);

        List<GetImageByPatientIdViewModel> GetImageByPatientId(string patientId);

        AnhChupThuThuat GetById(long id);
    }
}
