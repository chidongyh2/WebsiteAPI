using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModel;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class ImageRepository : RepositoryBase, IImageRepository
    {
        private readonly IRepository<AnhChupThuThuat> _imageRepository;
        public ImageRepository(IDbContext context) : base(context)
        {
            _imageRepository = Context.GetRepository<AnhChupThuThuat>();
        }

        public Task<List<AnhChupThuThuat>> Search(string patientId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<AnhChupThuThuat, bool>> spec = x => x.IsPublic.HasValue && x.IsPublic.Value && x.MaBenhNhan.Equals(patientId);

            totalRows = _imageRepository.Count(spec);

            var sort = Context.Filters.Sort<AnhChupThuThuat, long>(a => a.IDs, true);
            var paging = Context.Filters.Page<AnhChupThuThuat>(page, pageSize);

            return _imageRepository.GetsAsync(false, spec, sort, paging);
        }

        public Task<List<T>> GetAllImage<T>(Expression<Func<AnhChupThuThuat, T>> projector, string patientId)
        {
            Expression<Func<AnhChupThuThuat, bool>> spec = x => x.IsPublic.HasValue && x.IsPublic.Value && x.MaBenhNhan.Equals(patientId);

            return _imageRepository.GetsAsAsync(projector);
        }

        public List<GetImageByPatientIdViewModel> GetImageByPatientId(string patientId)
        {
            var query = Context.Database.SqlQuery<GetImageByPatientIdViewModel>("EXEC sp_GetImageByPatientId @PatientId",
                new SqlParameter("PatientId", patientId));
            return query.ToList();
        }

        public AnhChupThuThuat GetById(long id)
        {
            return _imageRepository.Get(false, x => x.IDs == id);
        }
    }
}
