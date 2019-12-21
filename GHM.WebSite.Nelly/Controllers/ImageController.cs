using GHM.Website.Nelly.Constants;
using GHM.Website.Nelly.Utils;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

namespace GHM.Website.Nelly.Controllers
{
    public class ImageController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public ImageController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        [Route("image")]
        public async Task<IActionResult> Index(string url, int? width, int? height, ImageType type = ImageType.Jpg)
        {
            if (!string.IsNullOrEmpty(url))
            {
                using (Image sourceImage = await this.LoadImageFromUrl(url))
                {
                    if (sourceImage != null)
                    {
                        if (height == sourceImage.Height && width == sourceImage.Width)
                        {
                            Stream outputStream = new MemoryStream();

                            sourceImage.Save(outputStream, ImageFormat.Jpeg);
                            outputStream.Seek(0, SeekOrigin.Begin);
                            return File(outputStream, "image/jpeg");
                        }
                        else
                        {
                            using (Image destinationImage = Common.CropImage(sourceImage, width ?? sourceImage.Width, height ?? sourceImage.Height, type))
                            {
                                Stream outputStream = new MemoryStream();

                                destinationImage.Save(outputStream, ImageFormat.Png);
                                outputStream.Seek(0, SeekOrigin.Begin);

                                if (type == ImageType.Jpg)
                                {
                                    var file = File(outputStream, "image/jpeg");
                                    var images = Image.FromStream(file.FileStream);

                                    using (Image dstImage = Common.CropImage(images, destinationImage.Width, destinationImage.Height, ImageType.Jpg))
                                    {
                                        Stream outputStream1 = new MemoryStream();

                                        dstImage.Save(outputStream1, ImageFormat.Jpeg);
                                        outputStream1.Seek(0, SeekOrigin.Begin);

                                        return File(outputStream1, "image/jpeg");
                                    }
                                }
                                else
                                {
                                    return File(outputStream, "image/jpeg");
                                }
                            }
                        }
                    }
                }
            }

            if (string.IsNullOrWhiteSpace(_hostingEnvironment.WebRootPath))
            {
                _hostingEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            string webRootPath = _hostingEnvironment.WebRootPath;
            string newPath = Path.Combine(webRootPath, "images/no_image_new.gif");

            using (var fileStream = new FileStream(newPath, FileMode.Open, FileAccess.Read))
            {
                Image orginImage = Image.FromStream(fileStream);

                Stream outputStream = new MemoryStream();

                orginImage.Save(outputStream, type == ImageType.Jpg ? ImageFormat.Jpeg : ImageFormat.Png);
                outputStream.Seek(0, SeekOrigin.Begin);
                return File(outputStream, "image/jpeg");
            }
        }

        private async Task<Image> LoadImageFromUrl(string url)
        {
            Image image = null;

            using (HttpClient httpClient = new HttpClient())
            using (HttpResponseMessage response = await httpClient.GetAsync(url))
            using (Stream inputStream = await response.Content.ReadAsStreamAsync())
            using (Bitmap temp = new Bitmap(inputStream))
                image = new Bitmap(temp);

            return image;
        }
    }
}