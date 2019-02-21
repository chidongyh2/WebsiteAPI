using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using IdentityModel;
using Microsoft.IdentityModel.Tokens;

namespace GHM.Infrastructure.Helpers
{
    public class CryptoHelper
    {
        /// <summary>
        /// Creates an RSA security key.
        /// </summary>
        /// <param name="parameters">The parameters.</param>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        public static RsaSecurityKey CreateRsaSecurityKey(RSAParameters parameters, string id)
        {
            var key = new RsaSecurityKey(parameters)
            {
                KeyId = id
            };

            return key;
        }

        /// <summary>
        /// Creates a new RSA security key.
        /// </summary>
        /// <returns></returns>
        public static RsaSecurityKey CreateRsaSecurityKey()
        {
            var rsa = RSA.Create();
            RsaSecurityKey key;

            if (rsa is RSACryptoServiceProvider)
            {
                rsa.Dispose();
                var cng = new RSACng(2048);

                var parameters = cng.ExportParameters(includePrivateParameters: true);
                key = new RsaSecurityKey(parameters);
            }
            else
            {
                rsa.KeySize = 2048;
                key = new RsaSecurityKey(rsa);
            }

            key.KeyId = CryptoRandom.CreateUniqueId(16);
            return key;
        }
    }
}
