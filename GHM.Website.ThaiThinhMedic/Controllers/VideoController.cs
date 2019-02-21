using System.IO;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GHM.Website.ThaiThinhMedic.Controllers
{
    public class VideoController : BaseController
    {
        private readonly IVideoRepository _videoRepository;
        private readonly IPatientRepository _patientRepository;
        public VideoController(IVideoRepository videoRepository, IPatientRepository patientRepository)
        {
            _videoRepository = videoRepository;
            _patientRepository = patientRepository;
        }

        //[CustomerAuthorize]
        public async Task<ActionResult> Index()
        {
            var result = await _videoRepository.GetByPatientId(CurrentPatient.MaBenhNhan);
            return View(result);
        }


        public async Task<ActionResult> Info(long id)
        {
            var videoInfo = _videoRepository.GetById(id);

            if (videoInfo == null)
            {
                ViewBag.Error = -1;
                return View();
            }

            var patientInfo = await _patientRepository.GetById(videoInfo.MaBenhNhan);

            ViewBag.VideoInfo = videoInfo;
            if (CurrentPatient != null && CurrentPatient.MaBenhNhan.Equals(videoInfo.MaBenhNhan))
                ViewBag.ListVideo = JsonConvert.SerializeObject(await _videoRepository.GetByPatientId(CurrentPatient.MaBenhNhan), Common.GetCalmcaseSetting());

            return View(patientInfo);
        }

        public ActionResult GetVideoContent(long id)
        {
            var videoInfo = _videoRepository.GetById(id);

            if (videoInfo == null)
                return Content("");

            using (NetworkShareAccesser.Access(ConfigurationManager.AppSettings["RemoteDomain"], ConfigurationManager.AppSettings["RemoteDomain"],
                ConfigurationManager.AppSettings["UserName"], ConfigurationManager.AppSettings["Password"]))
            {
                using (var fileStream = new FileStream(videoInfo.DuongDan, FileMode.Open, FileAccess.Read))
                {
                    var length = (int)fileStream.Length;  // get file length
                    var buffer = new byte[length];            // create buffer
                    int count;                            // actual number of bytes read
                    int sum = 0;                          // total number of bytes read

                    // read until Read method returns 0 (end of the stream has been reached)
                    while ((count = fileStream.Read(buffer, sum, length - sum)) > 0)
                        sum += count;  // sum is a buffer offset for next reading

                    return File(buffer, System.Net.Mime.MediaTypeNames.Application.Octet, videoInfo.TenFileVideo);
                }
            }
        }

        //[CustomerAuthorize]
        public ActionResult Download(long id)
        {
            if (CurrentPatient == null)
            {
                return RedirectToAction("NotHavePermission", "Error");
            }

            var videoInfo = _videoRepository.GetById(id);

            if (videoInfo == null)
            {
                return RedirectToAction("FileNotFound", "Error");
            }

            if (!videoInfo.MaBenhNhan.Equals(CurrentPatient.MaBenhNhan))
            {
                return RedirectToAction("NotHavePermission", "Error");
            }

            using (NetworkShareAccesser.Access(ConfigurationManager.AppSettings["RemoteDomain"], ConfigurationManager.AppSettings["RemoteDomain"],
                ConfigurationManager.AppSettings["UserName"], ConfigurationManager.AppSettings["Password"]))
            {
                using (var fileStream = new FileStream(videoInfo.DuongDan, FileMode.Open, FileAccess.Read))
                {
                    var length = (int)fileStream.Length;  // get file length
                    var buffer = new byte[length];            // create buffer
                    int count;                            // actual number of bytes read
                    int sum = 0;                          // total number of bytes read

                    // read until Read method returns 0 (end of the stream has been reached)
                    while ((count = fileStream.Read(buffer, sum, length - sum)) > 0)
                        sum += count;  // sum is a buffer offset for next reading

                    return File(buffer, System.Net.Mime.MediaTypeNames.Application.Octet, videoInfo.TenFileVideo);
                }
            }
        }
    }
}