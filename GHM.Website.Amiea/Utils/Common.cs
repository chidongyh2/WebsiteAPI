using GHM.Website.Amiea.Constants;
using GHM.Website.Amiea.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Linq;

namespace GHM.Website.Amiea.Utils
{
    public static class Common
    {
        private static IHttpContextAccessor HttpContextAccessor;
        public static string SubString(string sSource, int length)
        {
            if (string.IsNullOrEmpty(sSource))
            {
                return string.Empty;
            }
            if (sSource.Length <= length)
            {
                return sSource;
            }

            var mSource = sSource;
            var nLength = length;

            while (nLength > 0 && mSource[nLength].ToString() != " ")
            {
                nLength--;
            }
            mSource = mSource.Substring(0, nLength);
            return mSource;
        }

        public static Image CropImage(Image sourceImage, int newWidth, int newHeight, ImageType? type = ImageType.Jpg)
        {
            int sourceWidth = sourceImage.Width;
            int sourceHeight = sourceImage.Height;

            if (sourceWidth < sourceHeight)
            {
                int buff = newWidth;
                newWidth = newHeight;
                newHeight = buff;
            }

            int sourceX = 0, sourceY = 0, destX = 0, destY = 0;
            float nPercent = 0, nPercentW = 0, nPercentH = 0;

            nPercentW = ((float)newWidth / (float)sourceWidth);
            nPercentH = ((float)newHeight / (float)sourceHeight);
            if (nPercentH < nPercentW)
            {
                nPercent = nPercentH;
                destX = Convert.ToInt16((newWidth -
                          (sourceWidth * nPercent)) / 2);
            }
            else
            {
                nPercent = nPercentW;
                destY = Convert.ToInt16((newHeight -
                          (sourceHeight * nPercent)) / 2);
            }

            int destWidth = (int)(sourceWidth * nPercent);
            int destHeight = (int)(sourceHeight * nPercent);

            Bitmap bmPhoto = new Bitmap(newWidth, newHeight);
            bmPhoto.SetResolution(sourceImage.HorizontalResolution,
                     sourceImage.VerticalResolution);

            Graphics grPhoto = Graphics.FromImage(bmPhoto);

            grPhoto.InterpolationMode = InterpolationMode.Low;
            grPhoto.PixelOffsetMode = PixelOffsetMode.None;
            grPhoto.CompositingQuality = CompositingQuality.HighSpeed;

            if (type == ImageType.Jpg)
            {
                grPhoto.Clear(ColorTranslator.FromHtml("#ffffff"));
            }

            grPhoto.DrawImage(sourceImage,
                 new Rectangle(destX - 1, destY - 1, destWidth + 1, destHeight + 1),
                 new Rectangle(sourceX, sourceY, sourceWidth, sourceHeight),
                 GraphicsUnit.Pixel);

            grPhoto.Dispose();
            return bmPhoto;
        }

        public static string GetFileName(string fileName)
        {
            var filePathArray = fileName.Split('/');
            return filePathArray.LastOrDefault();
        }

        public static string GetSettingValue(List<Setting> listSetting, string key)
        {
            var setting = listSetting.FirstOrDefault(x => x.Key.Equals(key));
            return setting != null ? setting.Value : string.Empty;
        }

        public static string AbsoluteAction(
                                  this IUrlHelper url,
                                  string actionName,
                                  string controllerName,
                                  object routeValues = null)
        {
            string scheme = url.ActionContext.HttpContext.Request.Scheme;
            return url.Action(actionName, controllerName, routeValues, scheme);
        }

        public static string AbsoluteContent(this IUrlHelper url, string contentPath)
        {
            HttpRequest request = url.ActionContext.HttpContext.Request;
            return new Uri(new Uri(request.Scheme + "://" + request.Host), url.Content(contentPath)).ToString();
        }
    }
}

