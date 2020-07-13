using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using IdentityServer4.Models;
using IdentityServer4.Stores;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.VisualBasic;
using Newtonsoft.Json;

namespace GHM.Core.Infrastructure.Repository
{
    public class ResourceRepository : RepositoryBase, IResourceStore
    {
        private readonly IRepository<Domain.Models.ApiResource> _apiResourceRepository;
        private readonly IRepository<IdentityResource> _identityResourceRepository;
        private readonly IDistributedCache _distributedCache;
        private string cacheIdentityResouresKey = "cacheIdentityResoures";
        private string cacheApiResouresKey = "cacheApiResoures";
        public ResourceRepository(IDbContext context, IDistributedCache distributedCache) : base(context)
        {
            _apiResourceRepository = Context.GetRepository<Domain.Models.ApiResource>();
            _identityResourceRepository = Context.GetRepository<IdentityResource>();
            _distributedCache = distributedCache;
        }

        public async Task<IEnumerable<IdentityResource>> FindIdentityResourcesByScopeNameAsync(IEnumerable<string> scopeNames)
        {
            var dataCache = GetStringCache(cacheIdentityResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (IEnumerable<IdentityResource>)dataConvert;
            }
            else
            {
                var identityResource = await _identityResourceRepository.GetsAsync(true, x => scopeNames.Contains(x.Name));
                var data = identityResource.Select(x => new IdentityServer4.Models.IdentityResource
                {
                    Description = x.Description,
                    DisplayName = x.DisplayName,
                    Name = x.Name,
                    UserClaims = x.UserClaims,
                    Enabled = x.Enabled,
                    Properties = x.Properties,
                    ShowInDiscoveryDocument = x.ShowInDiscoveryDocument,
                    Emphasize = x.Emphasize,
                    Required = x.Required
                });
                SetStringCache(cacheIdentityResouresKey, JsonConvert.SerializeObject(data));
                return data;
            }
        }

        public async Task<IEnumerable<ApiResource>> FindApiResourcesByScopeNameAsync(IEnumerable<string> scopeNames)
        {
            var dataCache = GetStringCache(cacheApiResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (IEnumerable<ApiResource>)dataConvert;
            }
            else
            {
                var apiResources = await _apiResourceRepository.GetsAsync(true, x => scopeNames.Contains(x.Name));
                if (apiResources.Any())
                {
                    foreach (var apiResource in apiResources)
                    {
                        apiResource.Scopes.Add(apiResource.Name);
                    }
                }

                var data = apiResources.Select(x => new IdentityServer4.Models.ApiResource
                {
                    Description = x.Description,
                    DisplayName = x.DisplayName,
                    Name = x.Name,
                    UserClaims = x.UserClaims,
                    Enabled = x.Enabled,
                    AllowedAccessTokenSigningAlgorithms = x.AllowedAccessTokenSigningAlgorithms,
                    ApiSecrets = x.ApiSecrets,
                    Scopes = x.Scopes,
                    Properties = x.Properties,
                    ShowInDiscoveryDocument = x.ShowInDiscoveryDocument
                });
                SetStringCache(cacheApiResouresKey, JsonConvert.SerializeObject(data));
                return data;
            }
        }

        public async Task<IEnumerable<ApiScope>> FindApiScopesByNameAsync(IEnumerable<string> scopeNames)
        {
            var dataCache = GetStringCache(cacheApiResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (IEnumerable<ApiScope>)dataConvert;
            }
            else
            {
                var apiResources = await _apiResourceRepository.GetsAsync(true, x => scopeNames.Contains(x.Name));
                if (apiResources.Any())
                {
                    foreach (var apiResource in apiResources)
                    {
                        apiResource.Scopes.Add(apiResource.Name);
                    }
                }

                var data = apiResources.Select(x => new ApiScope
                {
                    Description = x.Description,
                    DisplayName = x.DisplayName,
                    Name = x.Name,
                    UserClaims = x.UserClaims,
                    Enabled = x.Enabled
                }).ToList();
                SetStringCache(cacheApiResouresKey, JsonConvert.SerializeObject(data));
                return data;
            }

        }
        public async Task<IEnumerable<ApiResource>> FindApiResourcesByNameAsync(IEnumerable<string> scopeNames)
        {
            var dataCache = GetStringCache(cacheApiResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (IEnumerable<ApiResource>)dataConvert;
            }
            else
            {
                var apiResources = await _apiResourceRepository.GetsAsync(true, x => scopeNames.Contains(x.Name));
                if (apiResources.Any())
                {
                    foreach (var apiResource in apiResources)
                    {
                        apiResource.Scopes.Add(apiResource.Name);
                    }
                }

                return apiResources.Select(x => new IdentityServer4.Models.ApiResource
                {
                    Description = x.Description,
                    DisplayName = x.DisplayName,
                    Name = x.Name,
                    UserClaims = x.UserClaims,
                    Enabled = x.Enabled,
                    AllowedAccessTokenSigningAlgorithms = x.AllowedAccessTokenSigningAlgorithms,
                    ApiSecrets = x.ApiSecrets,
                    Scopes = x.Scopes,
                    Properties = x.Properties,
                    ShowInDiscoveryDocument = x.ShowInDiscoveryDocument
                });
            }

        }
        public async Task<ApiResource> FindApiResourceAsync(string name)
        {
            return await _apiResourceRepository.GetAsync(true, x => x.Name.Equals(name));
        }

        public async Task<Resources> GetAllResourcesAsync()
        {
            var identityResources = await GetAllIdentityResource();
            var apiResources = await GetAllApiResource();
            var apiScope = await GetAllApiScope();
            return new Resources(identityResources, apiResources, apiScope);
        }

        private async Task<List<IdentityResource>> GetAllIdentityResource()
        {
            var dataCache = GetStringCache(cacheIdentityResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (List<IdentityResource>)dataConvert;
            }
            else
            {
                var identityResrouces = await _identityResourceRepository.GetsAsync(true, x => !string.IsNullOrEmpty(x.Name));
                SetStringCache(cacheIdentityResouresKey, JsonConvert.SerializeObject(identityResrouces));
                return identityResrouces;
            }
        }

        private async Task<List<Domain.Models.ApiResource>> GetAllApiResource()
        {
            var dataCache = GetStringCache(cacheApiResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (List<Domain.Models.ApiResource>)dataConvert;
            }
            else
            {
                var apiResources = await _apiResourceRepository.GetsAsync(true, x => !string.IsNullOrEmpty(x.Name));
                if (apiResources.Any())
                {
                    foreach (var apiResource in apiResources)
                    {
                        apiResource.Scopes.Add(apiResource.Name);
                    }
                }
                return apiResources;
            }
            
        }

        private async Task<List<ApiScope>> GetAllApiScope()
        {

            var dataCache = GetStringCache(cacheApiResouresKey);
            if (dataCache != null)
            {
                var dataConvert = JsonConvert.DeserializeObject(dataCache);
                return (List<ApiScope>)dataConvert;
            }
            else
            {
                var apiResources = await _apiResourceRepository.GetsAsync(true, x => !string.IsNullOrEmpty(x.Name));
                if (apiResources.Any())
                {
                    foreach (var apiResource in apiResources)
                    {
                        apiResource.Scopes.Add(apiResource.Name);
                    }
                }
                var data = apiResources.Select(x => new ApiScope
                {
                    Description = x.Description,
                    DisplayName = x.DisplayName,
                    Name = x.Name,
                    UserClaims = x.UserClaims,
                    Enabled = x.Enabled
                }).ToList();

                SetStringCache(cacheApiResouresKey, JsonConvert.SerializeObject(data));

                return data;
            }

            
        }

        private string GetStringCache(string cacheKey)
        {
            return _distributedCache.GetString(cacheKey);
        }
        private void SetStringCache(string cacheKey, Object obj)
        {
            DistributedCacheEntryOptions options = new DistributedCacheEntryOptions();
            _distributedCache.SetString(cacheKey, Newtonsoft.Json.JsonConvert.SerializeObject(obj), options.SetSlidingExpiration(TimeSpan.FromMinutes(15)));

        }

    }
}
