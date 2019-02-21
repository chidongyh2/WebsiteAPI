using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IVideoRepository
    {
        VideoChupThuThuat GetFirstVideo(string patientId);

        VideoChupThuThuat GetById(long id);

        Task<List<VideoChupThuThuat>> GetByPatientId(string patientId);

        Task<bool> CheckDownloadPermission(long videoId, string patientId);
    }
}
