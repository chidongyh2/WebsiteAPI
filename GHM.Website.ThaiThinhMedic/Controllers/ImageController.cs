using System.IO;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Protocols;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Website.ThaiThinhMedic.Controllers
{
    public class ImageController : BaseController
    {
        private readonly IImageRepository _imageRepository;
        public ImageController(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }
        // GET: Image
        public ActionResult Index()
        {
            var result = _imageRepository.GetImageByPatientId(CurrentPatient.MaBenhNhan);
            return View(result);
        }

        public ActionResult Content(long id)
        {
            var imageInfo = _imageRepository.GetById(id);

            if (imageInfo == null)
                return Content("");

            using (NetworkShareAccesser.Access(ConfigurationManager<>.AppSettings["RemoteDomain"], ConfigurationManager.AppSettings["RemoteDomain"],
                ConfigurationManager.AppSettings["UserName"], ConfigurationManager.AppSettings["Password"]))
            {
                using (var fileStream = new FileStream(imageInfo.DuongDanFileAnh, FileMode.Open, FileAccess.Read))
                {
                    var length = (int)fileStream.Length;  // get file length
                    var buffer = new byte[length];            // create buffer
                    int count;                            // actual number of bytes read
                    int sum = 0;                          // total number of bytes read

                    // read until Read method returns 0 (end of the stream has been reached)
                    while ((count = fileStream.Read(buffer, sum, length - sum)) > 0)
                        sum += count;  // sum is a buffer offset for next reading

                    return File(buffer, System.Net.Mime.MediaTypeNames.Application.Octet, imageInfo.TenFileAnh);
                }
            }
        }
    }
}
