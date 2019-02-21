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

        public async Task<IEnumerable<IdentityResource>> FindIdentityResourcesByScopeAsync(IEnumerable<string> scopeNames)
        {
            var identityResource = await _identityResourceRepository.GetsAsync(true, x => scopeNames.Contains(x.Name));
            return identityResource;
        }

        public async Task<IEnumerable<ApiResource>> FindApiResourcesByScopeAsync(IEnumerable<string> scopeNames)
        {
            var apiResources = await _apiResourceRepository.GetsAsync(true, x => scopeNames.Contains(x.Name));
            if (apiResources.Any())
            {
                foreach (var apiResource in apiResources)
                {
                    apiResource.Scopes = new List<Scope> { new Scope(apiResource.Name, apiResource.DisplayName) };
                }
            }

            return apiResources;
        }

        public async Task<ApiResource> FindApiResourceAsync(string name)
        {
            return await _apiResourceRepository.GetAsync(true, x => x.Name.Equals(name));
        }

        public async Task<Resources> GetAllResourcesAsync()
        {
            var identityResources = await GetAllIdentityResource();
            var apiResources = await GetAllApiResource();
            return new Resources(identityResources, apiResources);
        }

        private async Task<List<IdentityResource>> GetAllIdentityResource()
        {
            var identityResrouces =
                await _identityResourceRepository.GetsAsync(true, x => !string.IsNullOrEmpty(x.Name));
            foreach (var identityResrouce in identityResrouces)
            {

            }
            return identityResrouces;
        }

        private async Task<List<Domain.Models.ApiResource>> GetAllApiResource()
        {
            var apiResources = await _apiResourceRepository.GetsAsync(true, x => !string.IsNullOrEmpty(x.Name));
            if (apiResources.Any())
            {
                foreach (var apiResource in apiResources)
                {
                    apiResource.Scopes = new List<Scope> { new Scope(apiResource.Name, apiResource.DisplayName) };
                }
            }
            return apiResources;
        }

    }
}
