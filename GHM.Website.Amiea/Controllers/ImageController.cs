using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using GHM.Website.Amiea.Constants;
using GHM.Website.Amiea.Utils;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Amiea.Controllers
{
    public class ImageController : Controller
    {
        [Route("image")]
        public async Task<IActionResult> Index(string url, int? width, int? height, ImageType? type)
        {
            using (Image sourceImage = await this.LoadImageFromUrl(url))
            {
                if (sourceImage != null)
                {
                    using (Image destinationImage = Common.CropImage(sourceImage, width ?? sourceImage.Width, height ?? sourceImage.Height, type))
                    {
                        Stream outputStream = new MemoryStream();

                        destinationImage.Save(outputStream, type == ImageType.Png ? ImageFormat.Png : ImageFormat.Jpeg);
                        outputStream.Seek(0, SeekOrigin.Begin);
                        return File(outputStream, "image/jpeg");
                    }
                }
            }
            
            return NotFound();
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
