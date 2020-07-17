using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using IdentityServer4.Models;
using IdentityServer4.Stores;

namespace GHM.Core.Infrastructure.Repository
{
    public class ResourceRepository : RepositoryBase, IResourceStore
    {
        private readonly IRepository<Domain.Models.ApiResource> _apiResourceRepository;
        private readonly IRepository<IdentityResource> _identityResourceRepository;
        public ResourceRepository(IDbContext context) : base(context)
        {
            _apiResourceRepository = Context.GetRepository<Domain.Models.ApiResource>();
            _identityResourceRepository = Context.GetRepository<IdentityResource>();
        }

        public async Task<IEnumerable<IdentityResource>> FindIdentityResourcesByScopeNameAsync(IEnumerable<string> scopeNames)
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
            return data;
        }

        public async Task<IEnumerable<ApiResource>> FindApiResourcesByScopeNameAsync(IEnumerable<string> scopeNames)
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
            return data;
        }

        public async Task<IEnumerable<ApiScope>> FindApiScopesByNameAsync(IEnumerable<string> scopeNames)
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
            return data;
        }
        public async Task<IEnumerable<ApiResource>> FindApiResourcesByNameAsync(IEnumerable<string> scopeNames)
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

            var identityResrouces = await _identityResourceRepository.GetsAsync(true, x => !string.IsNullOrEmpty(x.Name));
            return identityResrouces;
        }

        private async Task<List<Domain.Models.ApiResource>> GetAllApiResource()
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

        private async Task<List<ApiScope>> GetAllApiScope()
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
            return data;
        }
    }
}
