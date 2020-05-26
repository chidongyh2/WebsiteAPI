using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using IdentityServer4;
using IdentityServer4.Models;
using Microsoft.EntityFrameworkCore;
using Client = GHM.Core.Domain.Models.Client;

namespace GHM.Core.Infrastructure.Repository
{
    public class ClientRepository : RepositoryBase, IClientRepository
    {
        private readonly IRepository<Client> _clientRepository;
        private readonly IClientAllowedGrantTypeRepository _clientAllowedGrantTypeRepository;
        private readonly IClientPostLogoutRedirectUrisRepository _clientPostLogoutRedirectUrisRepository;
        private readonly IClientRedirectUrisRepository _clientRedirectUrisRepository;
        private readonly IClientSecretRepository _clientSecretRepository;
        private readonly IClientPropertyRepository _clientPropertyRepository;
        private readonly IClientClaimRepository _clientClaimRepository;
        private readonly IClientIdentityProviderRestrictionRepository _clientIdentityProviderRestrictionRepository;
        private readonly IClientAllowedCorsOriginsRepository _clientAllowedCorsOriginsRepository;
        private readonly IClientAllowedScopesRepository _clientAllowedScopesRepository;

        public ClientRepository(IDbContext context, IClientAllowedGrantTypeRepository clientAllowedGrantTypeRepository, IClientPostLogoutRedirectUrisRepository clientPostLogoutRedirectUrisRepository, IClientSecretRepository clientSecretRepository, IClientRedirectUrisRepository clientRedirectUrisRepository, IClientPropertyRepository clientPropertyRepository, IClientClaimRepository clientClaimRepository, IClientIdentityProviderRestrictionRepository clientIdentityProviderRestrictionRepository, IClientAllowedCorsOriginsRepository clientAllowedCorsOriginsRepository, IClientAllowedScopesRepository clientAllowedScopesRepository) : base(context)
        {
            _clientAllowedGrantTypeRepository = clientAllowedGrantTypeRepository;
            _clientPostLogoutRedirectUrisRepository = clientPostLogoutRedirectUrisRepository;
            _clientSecretRepository = clientSecretRepository;
            _clientRedirectUrisRepository = clientRedirectUrisRepository;
            _clientPropertyRepository = clientPropertyRepository;
            _clientClaimRepository = clientClaimRepository;
            _clientIdentityProviderRestrictionRepository = clientIdentityProviderRestrictionRepository;
            _clientAllowedCorsOriginsRepository = clientAllowedCorsOriginsRepository;
            _clientAllowedScopesRepository = clientAllowedScopesRepository;
            _clientRepository = Context.GetRepository<Client>();
        }

        public async Task<IdentityServer4.Models.Client> FindClientByIdAsync(string clientId)
        {
            var clientInfo = await GetInfo(clientId, true);
            if (clientInfo == null)
                return null;

            // Get identity client object.
            //var listAllowedGrantTypes = await _clientAllowedGrantTypeRepository.GetByClientId(clientId);
            var listClientSecrets = await _clientSecretRepository.GetByClientId(clientId);
            //var listPostLogoutRedirectUris =
            //    await _clientPostLogoutRedirectUrisRepository.GetByClientId(clientId);
            //var listRedirectUris = await _clientRedirectUrisRepository.GetByClientId(clientId);
            //var listProperties = await _clientPropertyRepository.GetsByClientId(clientId);
            //var listClaims = await _clientClaimRepository.GetsClaimByClienId(clientId);
            //var listIdentityProviderRestriction =
            //    await _clientIdentityProviderRestrictionRepository.GetsByClientId(clientId);
            //var listAllowedCorsOrigins = await _clientAllowedCorsOriginsRepository.GetsByClientId(clientId);
            var listAllowedScope = await _clientAllowedScopesRepository.GetsByClientId(clientId);

            //return new IdentityServer4.Models.Client
            //{
            //    ClientId = "2e624d77-973b-4a70-9773-a6134597938b",
            //    AllowedGrantTypes = GrantTypes.ClientCredentials,
            //    RequireClientSecret = true,
            //    ClientSecrets =
            //    {
            //        new Secret("SG9hbmdEZXBUcmFp".Sha256())
            //    },
            //    AllowedScopes = listAllowedScope.Distinct().Select(x => x.Scope).ToList()
            //};

            //return MapToIdentityClient(clientInfo, listPostLogoutRedirectUris, listRedirectUris, listClientSecrets,
            //    listProperties, listClaims, listIdentityProviderRestriction, listAllowedCorsOrigins, listAllowedScope);
            return MapToIdentityClient(clientInfo, new List<ClientPostLogoutRedirectUris>(), new List<ClientRedirectUris>(), listClientSecrets,
                new List<ClientProperty>(), new List<ClientClaim>(), new List<ClientIdentityProviderRestriction>(), new List<ClientAllowedCorsOrigin>(), listAllowedScope);
        }

        public async Task<Client> GetInfo(string clientId, bool isReadOnly = false)
        {
            return await _clientRepository.GetAsync(isReadOnly, x => x.ClientId == clientId && !x.IsDelete);
        }

        public async Task<int> Insert(ClientMeta clientMeta)
        {
            var isExists = await CheckNameExists(clientMeta.ClientId, clientMeta.ClientName);
            if (isExists)
                return -1;

            var client = MapToClient(clientMeta);
            using (var transaction = Context.Database.BeginTransaction())
            {
                client.ProtocolType = IdentityServerConstants.ProtocolTypes.OpenIdConnect;
                _clientRepository.Create(client);
                var result = await Context.SaveChangesAsync();
                if (result <= 0)
                {
                    transaction.Rollback();
                    return result;
                }

                // Insert client post logout redirect uri.
                if (!string.IsNullOrEmpty(clientMeta.ClientPostLogoutRedirectUris))
                {
                    var listClientPostLogoutRedirectUris = clientMeta.ClientPostLogoutRedirectUris.Split(',');
                    if (listClientPostLogoutRedirectUris.Any())
                    {
                        var clientPostLogoutRedirectUris =
                            MapToPostLogoutRedirectUris(clientMeta.ClientId, listClientPostLogoutRedirectUris);
                        foreach (var clientPostLogoutRedirectUri in clientPostLogoutRedirectUris)
                        {
                            await _clientPostLogoutRedirectUrisRepository.Insert(clientPostLogoutRedirectUri);
                        }
                    }
                }

                // Insert client redirect uri.
                if (!string.IsNullOrEmpty(clientMeta.ClientPostLogoutRedirectUris))
                {
                    var listClientPostLogoutRedirectUris = clientMeta.ClientPostLogoutRedirectUris.Split(',');
                    if (listClientPostLogoutRedirectUris.Any())
                    {
                        var clientRedirectUris =
                            MapToClientRedirectUris(clientMeta.ClientId, listClientPostLogoutRedirectUris);
                        foreach (var clientRedirectUri in clientRedirectUris)
                        {
                            await _clientRedirectUrisRepository.Insert(clientRedirectUri);
                        }
                    }
                }

                // Insert client secret.
                if (!string.IsNullOrEmpty(clientMeta.ClientSecret))
                {

                    var listClientSecret = clientMeta.ClientSecret.Split(',');
                    if (listClientSecret.Any())
                    {
                        var clientSecrets =
                            MapToClientSecret(clientMeta.ClientId, listClientSecret);
                        foreach (var clientSecret in clientSecrets)
                        {
                            await _clientSecretRepository.Insert(clientSecret);
                        }
                    }
                }

                if (!string.IsNullOrEmpty(clientMeta.ClientAllowedScopes))
                {
                    var listClientAllowedScopes = clientMeta.ClientAllowedScopes.Split(',');
                    if (listClientAllowedScopes.Any())
                    {
                        var clientAllowedScopes =
                            MapToClientAllowedScope(clientMeta.ClientId, listClientAllowedScopes);
                        foreach (var clientAllowedScope in clientAllowedScopes)
                        {
                            await _clientAllowedScopesRepository.Insert(clientAllowedScope);
                        }
                    }
                }

                transaction.Commit();
                return result;
            }

        }

        public async Task<int> Update(Client client)
        {
            var clientInfo = await GetInfo(client.ClientId);
            if (clientInfo == null)
                return -1;

            clientInfo = client;
            Context.Entry(clientInfo).State = EntityState.Modified;
            Context.Entry(clientInfo).Property(x => x.ClientId).IsModified = false;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string clientId)
        {
            var info = await GetInfo(clientId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string clientId)
        {
            return await _clientRepository.ExistAsync(x => x.ClientId == clientId && !x.IsDelete);
        }

        public async Task<bool> CheckNameExists(string clientId, string clientName)
        {
            return await _clientRepository.ExistAsync(x => x.ClientId != clientId && x.ClientName == clientName && !x.IsDelete);
        }

        public Task<List<Client>> Search(string keyword, bool? enabled, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Client, bool>> spec = x => !x.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().ToLower();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (enabled.HasValue)
            {
                spec = spec.And(x => x.Enabled == enabled.Value);
            }

            var sort = Context.Filters.Sort<Client, DateTime>(a => a.CreateTime);
            var paging = Context.Filters.Page<Client>(page, pageSize);

            totalRows = _clientRepository.Count(spec);
            return _clientRepository.GetsAsync(true, spec, sort, paging);
        }

        private static Client MapToClient(ClientMeta clientMeta)
        {
            var client = new Client
            {
                ClientId = clientMeta.ClientId,
                IdentityTokenLifetime = clientMeta.IdentityTokenLifetime,
                ClientName = clientMeta.ClientName,
                AbsoluteRefreshTokenLifetime = clientMeta.AbsoluteRefreshTokenLifetime,
                AccessTokenLifetime = clientMeta.AccessTokenLifetime,
                AccessTokenType = clientMeta.AccessTokenType,
                AllowAccessTokensViaBrowser = clientMeta.AllowAccessTokensViaBrowser,
                AllowOfflineAccess = clientMeta.AllowOfflineAccess,
                AllowPlainTextPkce = clientMeta.AllowPlainTextPkce,
                AllowRememberConsent = clientMeta.AllowRememberConsent,
                AlwaysIncludeUserClaimsInIdToken = clientMeta.AlwaysIncludeUserClaimsInIdToken,
                AlwaysSendClientClaims = clientMeta.AlwaysSendClientClaims,
                AuthorizationCodeLifetime = clientMeta.AuthorizationCodeLifetime,
                BackChannelLogoutSessionRequired = clientMeta.BackChannelLogoutSessionRequired,
                BackChannelLogoutUri = clientMeta.BackChannelLogoutUri,
                ClientClaimsPrefix = clientMeta.ClientClaimsPrefix,
                ClientUri = clientMeta.ClientUri,
                ConsentLifetime = clientMeta.ConsentLifetime,
                EnableLocalLogin = clientMeta.EnableLocalLogin,
                Enabled = clientMeta.Enabled,
                FrontChannelLogoutSessionRequired = clientMeta.FrontChannelLogoutSessionRequired,
                FrontChannelLogoutUri = clientMeta.FrontChannelLogoutUri,
                IncludeJwtId = clientMeta.IncludeJwtId,
                LogoUri = clientMeta.LogoUri,
                ClientAllowedGrantTypes = clientMeta.ClientAllowedGrantTypes,
                PairWiseSubjectSalt = clientMeta.PairWiseSubjectSalt,
                ProtocolType = clientMeta.ProtocolType,
                RefreshTokenExpiration = clientMeta.RefreshTokenExpiration,
                RefreshTokenUsage = clientMeta.RefreshTokenUsage,
                RequireClientSecret = clientMeta.RequireClientSecret,
                RequireConsent = clientMeta.RequireConsent,
                RequirePkce = clientMeta.RequirePkce,
                SlidingRefreshTokenLifetime = clientMeta.SlidingRefreshTokenLifetime,
                UpdateAccessTokenClaimsOnRefresh = clientMeta.UpdateAccessTokenClaimsOnRefresh,
                UnsignName = clientMeta.ClientName.StripVietnameseChars()
            };
            return client;
        }

        //private List<ClientAllowedGrantTypes> MapToClientAllowedGrantType(string clientId, List<string> clientAllowedGrantTypes)
        //{
        //    var result = new List<ClientAllowedGrantTypes>();
        //    clientAllowedGrantTypes.ForEach(grantType =>
        //    {
        //        result.Add(new ClientAllowedGrantTypes(clientId, grantType));
        //    });
        //    return result;
        //}

        private List<ClientPostLogoutRedirectUris> MapToPostLogoutRedirectUris(string clientId, string[] clientPostLogoutRedirectUris)
        {
            if (clientPostLogoutRedirectUris == null || !clientPostLogoutRedirectUris.Any())
                return null;

            var result = new List<ClientPostLogoutRedirectUris>();
            foreach (var uri in clientPostLogoutRedirectUris)
            {
                result.Add(new ClientPostLogoutRedirectUris(clientId, uri.Trim()));
            }
            return result;
        }

        private List<ClientRedirectUris> MapToClientRedirectUris(string clientId, string[] clientRedirectUris)
        {
            if (clientRedirectUris == null || !clientRedirectUris.Any())
                return null;

            var result = new List<ClientRedirectUris>();
            foreach (var uri in clientRedirectUris)
            {
                result.Add(new ClientRedirectUris(clientId, uri.Trim()));
            }
            return result;
        }

        private List<ClientSecret> MapToClientSecret(string clientId, string[] clientSecrets)
        {
            if (clientSecrets == null || !clientSecrets.Any())
                return null;

            var result = new List<ClientSecret>();
            foreach (var secret in clientSecrets)
            {
                result.Add(new ClientSecret(clientId, new Secret(secret.Trim().Sha256())));
            }
            return result;
        }

        private List<ClientAllowedScope> MapToClientAllowedScope(string clientId, string[] clientAllowedScopes)
        {
            if (clientAllowedScopes == null || !clientAllowedScopes.Any())
                return null;

            var result = new List<ClientAllowedScope>();
            foreach (var scope in clientAllowedScopes)
            {
                result.Add(new ClientAllowedScope(clientId, scope.Trim()));
            }
            return result;
        }

        private IdentityServer4.Models.Client MapToIdentityClient(Client client,
            List<ClientPostLogoutRedirectUris> listPostLogoutRedirectUris,
            List<ClientRedirectUris> listClientRedirectUris, List<ClientSecret> listClientSecrets,
            List<ClientProperty> listClientProperty,
            List<ClientClaim> listClaims,
            List<ClientIdentityProviderRestriction> listIdentityProviderRestrictions,
            List<ClientAllowedCorsOrigin> listAllowedCorsOrigins,
            List<ClientAllowedScope> listClientAllowedScopes)
        {
            var propertyDictionary = new Dictionary<string, string>();
            if(listClientProperty.Count > 0)
            {
                listClientProperty.ForEach(x =>
                {
                    propertyDictionary.Add(x.Key, x.Value);
                });
            }

            var identityClient = new IdentityServer4.Models.Client
            {
                ClientId = client.ClientId,
                IdentityTokenLifetime = client.IdentityTokenLifetime,
                ClientName = client.ClientName,
                AbsoluteRefreshTokenLifetime = client.AbsoluteRefreshTokenLifetime,
                AccessTokenLifetime = client.AccessTokenLifetime,
                AccessTokenType = client.AccessTokenType,
                AllowAccessTokensViaBrowser = client.AllowAccessTokensViaBrowser,
                AllowOfflineAccess = client.AllowOfflineAccess,
                AllowPlainTextPkce = client.AllowPlainTextPkce,
                AllowRememberConsent = client.AllowRememberConsent,
                AlwaysIncludeUserClaimsInIdToken = client.AlwaysIncludeUserClaimsInIdToken,
                AlwaysSendClientClaims = client.AlwaysSendClientClaims,
                AuthorizationCodeLifetime = client.AuthorizationCodeLifetime,
                BackChannelLogoutSessionRequired = client.BackChannelLogoutSessionRequired,
                BackChannelLogoutUri = client.BackChannelLogoutUri,
                ClientClaimsPrefix = client.ClientClaimsPrefix,
                ClientUri = client.ClientUri,
                ConsentLifetime = client.ConsentLifetime,
                EnableLocalLogin = client.EnableLocalLogin,
                Enabled = client.Enabled,
                FrontChannelLogoutSessionRequired = client.FrontChannelLogoutSessionRequired,
                FrontChannelLogoutUri = client.FrontChannelLogoutUri,
                IncludeJwtId = client.IncludeJwtId,
                LogoUri = client.LogoUri,
                PairWiseSubjectSalt = client.PairWiseSubjectSalt,
                ProtocolType = client.ProtocolType,
                RefreshTokenExpiration = client.RefreshTokenExpiration,
                RefreshTokenUsage = client.RefreshTokenUsage,
                RequireClientSecret = client.RequireClientSecret,
                RequireConsent = client.RequireConsent,
                RequirePkce = client.RequirePkce,
                SlidingRefreshTokenLifetime = client.SlidingRefreshTokenLifetime,
                UpdateAccessTokenClaimsOnRefresh = client.UpdateAccessTokenClaimsOnRefresh,
                AllowedGrantTypes = GetGrantTypes(client.ClientAllowedGrantTypes),
                ClientSecrets = listClientSecrets.Select(x => new Secret
                {
                    Value = x.Value,
                    Description = x.Description,
                    Type = x.Type,
                    Expiration = x.Expiration
                }).ToList(),
                PostLogoutRedirectUris = listPostLogoutRedirectUris.Count > 0 ? listPostLogoutRedirectUris.Select(x => x.Uri).ToList() : new List<string>(),
                RedirectUris = listClientRedirectUris.Count > 0 ? listClientRedirectUris.Select(x => x.Uri).ToList() : new List<string>(),
                AllowedCorsOrigins = listAllowedCorsOrigins.Count > 0 ? listAllowedCorsOrigins.Select(x => x.Domain).ToList() : new List<string>(),
                AllowedScopes = listClientAllowedScopes.Count > 0 ? listClientAllowedScopes.Distinct().Select(x => x.Scope).ToList() : new List<string>(),
                IdentityProviderRestrictions = listIdentityProviderRestrictions.Count > 0 ? listIdentityProviderRestrictions.Select(x => x.IdentityProviderRestriction).ToList() : new List<string>(),
                Properties = propertyDictionary,
                Claims = listClaims.Count > 0 ? listClaims.Select(x => new Claim(x.ClaimType, x.ClaimValue)).ToList() : new List<Claim>()
            };
            return identityClient;
        }

        private ICollection<string> GetGrantTypes(string grantType)
        {
            switch (grantType)
            {
                case "Implicit":
                    return GrantTypes.Implicit;
                case "ImplicitAndClientCredentials":
                    return GrantTypes.ImplicitAndClientCredentials;
                case "Code":
                    return GrantTypes.Code;
                case "CodeAndClientCredentials":
                    return GrantTypes.CodeAndClientCredentials;
                case "Hybrid":
                    return GrantTypes.Hybrid;
                case "HybridAndClientCredentials":
                    return GrantTypes.HybridAndClientCredentials;
                case "ClientCredentials":
                    return GrantTypes.ClientCredentials;
                case "ResourceOwnerPassword":
                    return GrantTypes.ResourceOwnerPassword;
                case "ResourceOwnerPasswordAndClientCredentials":
                    return GrantTypes.ResourceOwnerPasswordAndClientCredentials;
                default: return new List<string>();
            }
        }
    }
}
