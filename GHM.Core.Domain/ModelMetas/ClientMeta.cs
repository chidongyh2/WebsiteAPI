using System;
using IdentityServer4.Models;

namespace GHM.Core.Domain.ModelMetas
{
    public class ClientMeta
    {
        public bool BackChannelLogoutSessionRequired { get; set; }
        public bool AlwaysIncludeUserClaimsInIdToken { get; set; }
        public int IdentityTokenLifetime { get; set; }
        public int AccessTokenLifetime { get; set; }
        public int AuthorizationCodeLifetime { get; set; }
        public int AbsoluteRefreshTokenLifetime { get; set; }
        public int SlidingRefreshTokenLifetime { get; set; }
        public int? ConsentLifetime { get; set; }
        public TokenUsage RefreshTokenUsage { get; set; }
        public bool UpdateAccessTokenClaimsOnRefresh { get; set; }
        public TokenExpiration RefreshTokenExpiration { get; set; }
        public AccessTokenType AccessTokenType { get; set; }
        public bool EnableLocalLogin { get; set; }
        public bool IncludeJwtId { get; set; }
        public bool AlwaysSendClientClaims { get; set; }
        public string ClientClaimsPrefix { get; set; }
        public string PairWiseSubjectSalt { get; set; }
        public bool AllowOfflineAccess { get; set; }
        public string BackChannelLogoutUri { get; set; }
        public bool Enabled { get; set; }
        public string ClientId { get; set; }
        public string ProtocolType { get; set; }
        public bool RequireClientSecret { get; set; }
        public string ClientName { get; set; }
        public string ClientUri { get; set; }
        public string LogoUri { get; set; }
        public bool RequireConsent { get; set; }
        public bool RequirePkce { get; set; }
        public bool AllowPlainTextPkce { get; set; }
        public bool AllowAccessTokensViaBrowser { get; set; }
        public string FrontChannelLogoutUri { get; set; }
        public bool FrontChannelLogoutSessionRequired { get; set; }
        public bool AllowRememberConsent { get; set; }
        public string ClientAllowedGrantTypes { get; set; }
        public string ClientPostLogoutRedirectUris { get; set; }
        public string ClientRedirectUris { get; set; }
        public string ClientAllowedScopes { get; set; }
        public string ClientSecret { get; set; }

        public ClientMeta()
        {
            Enabled = true;
            ClientId = Guid.NewGuid().ToString();
            RequireClientSecret = true;
            RequirePkce = false;
            AllowPlainTextPkce = false;
            AllowOfflineAccess = true;
            EnableLocalLogin = true;
            IdentityTokenLifetime = 300;
            AccessTokenLifetime = 3600;
            AuthorizationCodeLifetime = 300;
            AbsoluteRefreshTokenLifetime = 2592000;
            SlidingRefreshTokenLifetime = 1296000;
            RefreshTokenUsage = TokenUsage.OneTimeOnly;
            RefreshTokenExpiration = TokenExpiration.Sliding;
            UpdateAccessTokenClaimsOnRefresh = true;
            AccessTokenType = AccessTokenType.Jwt;
            IncludeJwtId = true;
            ClientClaimsPrefix = "GHM_Application";
            PairWiseSubjectSalt = "GHM_Application";
            RequireConsent = false;
            AllowRememberConsent = false;
            AlwaysIncludeUserClaimsInIdToken = false;
            AlwaysSendClientClaims = false;
        }
    }
}
