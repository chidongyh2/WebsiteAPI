﻿using System;
using System.Linq;
using System.Text;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace GHM.Infrastructure.Extensions
{
    public static class HttpContextExtension
    {
        public static BriefUser GetCurrentUser(this HttpContext context)
        {
            var userId = RequestHelper.GetSub(context);
            if (string.IsNullOrEmpty(userId))
                return null;

            var userInfoString = context.GetCurrentUserString();
            if (string.IsNullOrEmpty(userInfoString))
                return null;

            var userInfoStringDecrypted = EncryptionHelper.Decrypt(userInfoString, userId);
            var briefUser = JsonConvert.DeserializeObject<BriefUser>(userInfoStringDecrypted);
            return briefUser;
        }

        public static string GetUserId(this HttpContext context)
        {
            var payloadObject = ParseAccessToken(context);
            return payloadObject == null ? string.Empty : (string)payloadObject.sub;
        }

        public static string GetClientId(this HttpContext context)
        {
            var payloadObject = ParseAccessToken(context);
            return payloadObject == null ? string.Empty : (string)payloadObject.client_id;
        }

        private static string GetCurrentUserString(this HttpContext context)
        {
            var payloadObject = RequestHelper.ParseAccessToken(context);
            return payloadObject == null ? string.Empty : (string)payloadObject.ui;
        }

        private static dynamic ParseAccessToken(HttpContext context)
        {
            context.Request.Headers.TryGetValue("Authorization", out var authorization);
            if (!authorization.Any())
                return string.Empty;

            var accessToken = authorization.FirstOrDefault();
            if (string.IsNullOrEmpty(accessToken))
                return string.Empty;

            var token = accessToken.Split(" ").LastOrDefault();
            if (string.IsNullOrEmpty(token))
                return string.Empty;

            var tokenArray = token.Split('.');
            if (tokenArray == null || !tokenArray.Any())
                return string.Empty;

            var tokenBody = tokenArray[1];
            if (string.IsNullOrEmpty(tokenBody))
                return string.Empty;

            int mod4 = tokenBody.Length % 4;
            if (mod4 > 0)
            {
                tokenBody += new string('=', 4 - mod4);
            }
            var payloadData = Convert.FromBase64String(tokenBody);
            var payloadDecode = Encoding.UTF8.GetString(payloadData);
            return JsonConvert.DeserializeObject<dynamic>(payloadDecode);
        }

    }
}
