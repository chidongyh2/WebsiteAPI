using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;

namespace GHM.Infrastructure.Helpers
{
    public enum ResizeType
    {
        LongestSide,
        Width,
        Height
    }

    public enum ImageType
    {
        Jpg,
        Png
    }

    public static class Common
    {
        public static string ClientIp()
        {
            //try
            //{
            //    var szRemoteAddr = HttpContext.Current.Request.UserHostAddress;
            //    var szXForwardedFor = HttpContext.Current.Request.ServerVariables["X_FORWARDED_FOR"];
            //    string szIp;

            //    if (szXForwardedFor == null)
            //    {
            //        szIp = szRemoteAddr;
            //    }
            //    else
            //    {
            //        szIp = szXForwardedFor;
            //        if (szIp.IndexOf(",", StringComparison.Ordinal) <= 0) return szIp;
            //        var arIPs = szIp.Split(',');

            //        foreach (var item in arIPs)
            //        {
            //            if (!IsPrivateIpAddress(item))
            //            {
            //                return item;
            //            }

            //            var strHostName = Dns.GetHostName();
            //            var clientIpAddress = Dns.GetHostAddresses(strHostName).GetValue(1).ToString();

            //            return clientIpAddress;
            //        }
            //    }

            //    return szIp;
            //}
            //catch (Exception)
            //{
            //    return "0.0.0.0";
            //}

            return "0.0.0.0";
        }

        public static string FormatFileSize(decimal filesize)
        {
            const decimal oneKiloByte = 1024;
            const decimal oneMegaByte = 1048576;
            const decimal oneGigaByte = 1073741824;

            if (filesize >= oneGigaByte)
            {
                return (filesize / oneGigaByte).ToString("0.00", CultureInfo.InvariantCulture) + " GB";
            }

            if (filesize >= oneMegaByte)
            {
                return (filesize / oneMegaByte).ToString("0.00", CultureInfo.InvariantCulture) + " MB";
            }

            if (filesize >= oneKiloByte)
            {
                return (filesize / oneKiloByte).ToString("0", CultureInfo.InvariantCulture) + " KB";
            }

            return filesize + " bytes";
        }

        public static bool IsLocalIp(string hostNameOrAddress)
        {
            if (string.IsNullOrEmpty(hostNameOrAddress))
                return false;

            try
            {
                // get host IP addresses
                var hostIPs = Dns.GetHostAddresses(hostNameOrAddress);
                // get local IP addresses
                var localIPs = Dns.GetHostAddresses(Dns.GetHostName());
                // test if any host IP is a loopback IP or is equal to any local IP
                return hostIPs.Any(hostIp => IPAddress.IsLoopback(hostIp) || localIPs.Contains(hostIp));
            }
            catch
            {
                return false;
            }
        }

        private static bool IsPrivateIpAddress(string ipAddress)
        {
            // http://en.wikipedia.org/wiki/Private_network
            // Private IP Addresses are:
            //  24-bit block: 10.0.0.0 through 10.255.255.255
            //  20-bit block: 172.16.0.0 through 172.31.255.255
            //  16-bit block: 192.168.0.0 through 192.168.255.255
            //  Link-local addresses: 169.254.0.0 through 169.254.255.255 (http://en.wikipedia.org/wiki/Link-local_address)

            var ip = IPAddress.Parse(ipAddress);
            var octets = ip.GetAddressBytes();

            var is24BitBlock = octets[0] == 10;
            if (is24BitBlock)
            {
                return true; // Return to prevent further processing
            }

            var is20BitBlock = octets[0] == 172 && octets[1] >= 16 && octets[1] <= 31;
            if (is20BitBlock)
            {
                return true; // Return to prevent further processing
            }

            var is16BitBlock = octets[0] == 192 && octets[1] == 168;
            if (is16BitBlock)
            {
                return true; // Return to prevent further processing
            }

            var isLinkLocalAddress = octets[0] == 169 && octets[1] == 254;
            return isLinkLocalAddress;
        }

        public static Size CalculateDimensions(Size originalSize, int targetSize,
            ResizeType resizeType = ResizeType.LongestSide, bool ensureSizePositive = true)
        {
            var newSize = new Size();
            switch (resizeType)
            {
                case ResizeType.LongestSide:
                    if (originalSize.Height > originalSize.Width)
                    {
                        // portrait
                        newSize.Width = (int)(originalSize.Width * (float)(targetSize / (float)originalSize.Height));
                        newSize.Height = targetSize;
                    }
                    else
                    {
                        // landscape or square
                        newSize.Height = (int)(originalSize.Height * (float)(targetSize / (float)originalSize.Width));
                        newSize.Width = targetSize;
                    }
                    break;
                case ResizeType.Width:
                    newSize.Height = (int)(originalSize.Height * (float)(targetSize / (float)originalSize.Width));
                    newSize.Width = targetSize;
                    break;
                case ResizeType.Height:
                    newSize.Width = (int)(originalSize.Width * (float)(targetSize / (float)originalSize.Height));
                    newSize.Height = targetSize;
                    break;
                default:
                    throw new Exception("Not supported ResizeType");
            }

            if (ensureSizePositive)
            {
                if (newSize.Width < 1)
                    newSize.Width = 1;
                if (newSize.Height < 1)
                    newSize.Height = 1;
            }

            return newSize;
        }

        public static JsonSerializerSettings GetCalmcaseSetting()
        {
            return new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
        }

        public static string GetFirstName(string fullName)
        {
            if (string.IsNullOrEmpty(fullName))
                return string.Empty;

            var names = fullName.Split(' ');
            return names.Any() ? names.FirstOrDefault() : string.Empty;
        }

        public static string GetMiddleName(string fullName)
        {
            if (string.IsNullOrEmpty(fullName))
                return string.Empty;

            var names = fullName.Split(' ');
            if (!names.Any()) return string.Empty;

            if (names.Length > 3)
            {
                var middleName = string.Empty;
                for (var i = 1; i < names.Length - 1; i++)
                {
                    middleName += names[i] + " ";
                }
                return middleName;
            }

            if (names.Length < 3)
                return string.Empty;

            return names[1];
        }

        public static string GetLastName(string fullName)
        {
            if (string.IsNullOrEmpty(fullName))
                return string.Empty;

            var names = fullName.Split(' ');
            if (!names.Any()) return string.Empty;

            return names.LastOrDefault();
        }

        //public static Image ResizeImage(int newWidth, int newHeight, Stream imageStream, int type)
        //{
        //    Image imgPhoto = Image.FromStream(imageStream);

        //    int sourceWidth = imgPhoto.Width;
        //    int sourceHeight = imgPhoto.Height;

        //    //Consider vertical pics
        //    if (sourceWidth < sourceHeight)
        //    {
        //        int buff = newWidth;

        //        newWidth = newHeight;
        //        newHeight = buff;
        //    }

        //    int sourceX = 0, sourceY = 0, destX = 0, destY = 0;
        //    float nPercent = 0, nPercentW = 0, nPercentH = 0;

        //    nPercentW = ((float)newWidth / (float)sourceWidth);
        //    nPercentH = ((float)newHeight / (float)sourceHeight);
        //    if (nPercentH < nPercentW)
        //    {
        //        nPercent = nPercentH;
        //        destX = System.Convert.ToInt16((newWidth -
        //                  (sourceWidth * nPercent)) / 2);
        //    }
        //    else
        //    {
        //        nPercent = nPercentW;
        //        destY = System.Convert.ToInt16((newHeight -
        //                  (sourceHeight * nPercent)) / 2);
        //    }

        //    int destWidth = (int)(sourceWidth * nPercent);
        //    int destHeight = (int)(sourceHeight * nPercent);

        //    Bitmap bmPhoto = new Bitmap(newWidth, newHeight, PixelFormat.Format32bppArgb);
        //    if (type == (int)ImageType.Jpg)
        //        bmPhoto = new Bitmap(newWidth, newHeight, PixelFormat.Format32bppArgb);

        //    bmPhoto.SetResolution(imgPhoto.HorizontalResolution,
        //             imgPhoto.VerticalResolution);

        //    Graphics grPhoto = Graphics.FromImage(bmPhoto);
        //    Color color = Color.Transparent;

        //    if (type == (int)ImageType.Jpg)
        //    {
        //        color = Color.Black;
        //    }

        //    grPhoto.Clear(color);
        //    grPhoto.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;

        //    grPhoto.DrawImage(imgPhoto,
        //        new Rectangle(destX - 1, destY - 1, destWidth + 1, destHeight + 1),
        //        new Rectangle(sourceX, sourceY, sourceWidth, sourceHeight),
        //        GraphicsUnit.Pixel);

        //    grPhoto.Dispose();
        //    imgPhoto.Dispose();
        //    return bmPhoto;
        //}

        public static string GetFileName(string fileName)
        {
            var filePathArray = fileName.Split('/');
            return filePathArray.LastOrDefault();
        }

        //public static int GetQuarter(this DateTime date)
        //{
        //    return (date.Month + 2) / 3;
        //}

        //public static int GetQuarter(int month)
        //{
        //    return (month + 2) / 3;
        //}

        public static int MonthDifference(this DateTime lValue, DateTime rValue)
        {
            return Math.Abs((lValue.Month - rValue.Month) + 12 * (lValue.Year - rValue.Year));
        }

        public static void ConvertToGlobalDateTime(this DateTime inDate, out DateTime outDate)
        {
            string[] formats = {"d/M/yyyy h:mm:ss tt", "d/M/yyyy h:mm tt",
                         "DD/MM/yyyy hh:mm:ss", "D/M/yyyy h:mm:ss",
                         "d/M/yyyy hh:mm tt", "d/M/yyyy hh tt",
                         "d/M/yyyy h:mm", "d/M/yyyy h:mm",
                         "dd/MM/yyyy hh:mm", "dd/MM/yyyy hh:mm"};
            DateTime.TryParseExact(inDate.ToString(), formats, new CultureInfo("en-US"), DateTimeStyles.None, out outDate);
        }

        public static string ToAlphabetId<T>(this T number, int numberOfCharacter, int numberOfDigit)
        {
            string characters = "";
            string digits = "";
            double digitValue = Math.Pow(10, numberOfDigit);
            var doubleNumber = Convert.ToDouble(number);
            // Generate charcters.				
            for (int i = 0; i < numberOfCharacter; i++)
            {
                var value = Math.Pow(26, i);
                characters = (char)(doubleNumber / (value * digitValue) % 26 + 65) + characters;
            }

            // Generate number.
            for (int i = 0; i < numberOfDigit; i++)
            {
                digits = (char)(doubleNumber / Math.Pow(10, i) % 10 + 48) + digits;
            }
            return $"{characters}{digits}";
        }
    }
}
