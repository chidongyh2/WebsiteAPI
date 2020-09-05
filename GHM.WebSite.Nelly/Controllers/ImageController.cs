using GHM.Website.Nelly.Constants;
using GHM.Website.Nelly.Utils;
using ImageMagick;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using System;
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
        [ResponseCache(Duration = 86400, Location = ResponseCacheLocation.None, NoStore = false)]
        [Route("image")]
        public async Task<IActionResult> ReSize(string url, int? width = 0, int? height = 0, ImageType type = ImageType.Jpg)
        {
            Image sourceImage = await this.LoadImageFromUrl(url);
            if (sourceImage != null)
            {
                try
                {
                    int sourceWidth = sourceImage.Width;
                    int sourceHeight = sourceImage.Height;

                    if (sourceWidth < sourceHeight)
                    {
                        int buff = width ?? sourceWidth;
                        width = height ?? sourceHeight;
                        height = buff;
                    }

                    int sourceX = 0, sourceY = 0, destX = 0, destY = 0;
                    float nPercent = 0, nPercentW = 0, nPercentH = 0;

                    nPercentW = width > 0 ? ((float)width / (float)sourceWidth) : 1;
                    nPercentH = height > 0 ? ((float)height / (float)sourceHeight) : 1;
                    if (nPercentH < nPercentW)
                    {
                        nPercent = nPercentH;
                        destX = Convert.ToInt16((width -
                                  (sourceWidth * nPercent)) / 2);
                    }
                    else
                    {
                        nPercent = nPercentW;
                        destY = Convert.ToInt16((height -
                                  (sourceHeight * nPercent)) / 2);
                    }

                    int destWidth = (int)(sourceWidth * nPercent);
                    int destHeight = (int)(sourceHeight * nPercent);
                    sourceImage.Mutate(i => i.Crop(new Rectangle(sourceX, sourceY, sourceWidth, sourceHeight)).Resize(destWidth, destHeight));

                    Stream outputStream = new MemoryStream();

                    sourceImage.Save(outputStream, new JpegEncoder());
                    outputStream.Seek(0, SeekOrigin.Begin);
                    return this.File(outputStream, "image/jpg");
                }

                catch (Exception e)
                {
                    throw e;
                    // Add error logging here
                }
            }

            return this.NotFound();
        }

        private async Task<Image> LoadImageFromUrl(string url)
        {
            Image image = null;

            try
            {
                //Note: don't new up HttpClient in practice
                //This should be stored in a shared field in practice
                HttpClient httpClient = new HttpClient();
                HttpResponseMessage response = await httpClient.GetAsync(url);
                Stream inputStream = await response.Content.ReadAsStreamAsync();

                image = Image.Load(inputStream);
            }

            catch
            {
                // Add error logging here
            }

            return image;
        }
    }
}