using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using IdentityModel.Client;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using static IdentityModel.OidcConstants;

namespace GHM.Infrastructure.Services
{
    public class HttpClientService : IHttpClientService
    {
        private HttpClient Client { get; }
        private readonly ApiUrlSettings _apiUrls;
        private readonly ApiServiceInfo _apiServiceInfo;
        private readonly IMemoryCache _cache;
        private const string _cacheKeyToken = "repository_token";
        public HttpClientService()
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var appSettingJsonFile = environment == EnvironmentName.Development
                ? "appsettings.json"
                : "appsettings.production.json";
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(appSettingJsonFile);
            var configuration = builder.Build();
            if (configuration != null)
            {
                _apiUrls = configuration.GetApiUrl();
                _apiServiceInfo = configuration.GetApiServiceInfo();
            }
            //Client = Task.Run(GetClient).Result;
            Client = new HttpClient();
            ServicePointManager.SecurityProtocol =
                SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;

            #region Local Function.
            async Task<HttpClient> GetClient()
            {
                var client = new HttpClient();
                DiscoveryDocumentResponse discoveryDocument = await client.GetDiscoveryDocumentAsync(_apiUrls.Authority);
                var tokenResponse = await client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
                {
                    Address = discoveryDocument.TokenEndpoint,
                    ClientId = _apiServiceInfo.ClientId,
                    ClientSecret = _apiServiceInfo.ClientSecret,
                    GrantType = GrantTypes.ClientCredentials,
                    Scope = _apiServiceInfo.Scopes
                });
                client.SetBearerToken(tokenResponse.AccessToken);
                return client;
            }
            #endregion
        }

        public async Task<T> GetAsync<T>(string requestUri)
        {
            if (Client == null)
                return default(T);

            var response = await Client.GetAsync(requestUri);
            return !response.IsSuccessStatusCode ? default(T) : ParseResponse<T>(await response.Content.ReadAsStringAsync());
        }

        public async Task<T> PostAsync<T>(string requestUri, Dictionary<string, string> paramters = null)
        {
            if (Client == null)
                return default(T);

            Client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var encodedContent = new FormUrlEncodedContent(paramters);
            var response = await Client.PostAsync(requestUri, encodedContent);
            return !response.IsSuccessStatusCode ? default(T) : ParseResponse<T>(await response.Content.ReadAsStringAsync());
        }

        public async Task<T> DeleteAsync<T>(string requestUri)
        {
            if (Client == null)
                return default(T);

            var response = await Client.DeleteAsync(requestUri);
            return !response.IsSuccessStatusCode ? default(T) : ParseResponse<T>(await response.Content.ReadAsStringAsync());
        }

        public async Task<T> PutAsync<T>(string requestUri, Dictionary<string, string> paramters)
        {
            if (Client == null)
                return default(T);

            var encodedContent = new FormUrlEncodedContent(paramters);
            var response = await Client.PutAsync(requestUri, encodedContent);
            return !response.IsSuccessStatusCode ? default(T) : ParseResponse<T>(await response.Content.ReadAsStringAsync());
        }

        public async Task<T> PostAsync<T>(string requestUri, object p)
        {
            if (Client == null)
                return default(T);

            var serializedContent = JsonConvert.SerializeObject(p);
            var buffer = Encoding.UTF8.GetBytes(serializedContent);
            var byteContent = new ByteArrayContent(buffer);
            byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            var response = await Client.PostAsync(requestUri, byteContent);
            return !response.IsSuccessStatusCode ? default(T) : ParseResponse<T>(await response.Content.ReadAsStringAsync());
        }

        #region Private
        private static T ParseResponse<T>(string content)
        {
         return  JsonConvert.DeserializeObject<T>(content, new CustomDateTimeConverter());
        }
        #endregion
    }
}
