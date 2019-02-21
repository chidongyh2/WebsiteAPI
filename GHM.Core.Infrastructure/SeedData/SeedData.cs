using System;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using ApiResource = GHM.Core.Domain.Models.ApiResource;
using Client = GHM.Core.Domain.Models.Client;

namespace GHM.Core.Infrastructure.SeedData
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var clientRepository = serviceProvider.GetService<IClientRepository>();
            var context = serviceProvider.GetRequiredService<CoreDbContext>();
            context.Database.EnsureCreated();
            var seedId = Guid.NewGuid().ToString();
            var defaultUserRoleId = Guid.NewGuid().ToString();
            #region Tenant.
            if (!context.Set<Tenant>().Any())
            {
                context.Set<Tenant>().Add(new Tenant(seedId, "Công ty cổ phần GHMSoft", "hoangit21@gmail.com",
                    "01683285041",
                    "Thái Thịnh - Đống Đa - Hà Nội", true, string.Empty, string.Empty));
                context.SaveChanges();
            }
            #endregion

            #region Roles
            if (!context.Set<Role>().Any())
            {
                context.Set<Role>().Add(new Role("SuperAdministrator", "SuperAdministrator", "SuperAdministrator", seedId,
                    Guid.NewGuid().ToString()));
                context.Set<Role>().Add(new Role(seedId, "Administrator", "Administrator", seedId,
                    Guid.NewGuid().ToString()));
                context.Set<Role>().Add(new Role(defaultUserRoleId, "Default", "Default", defaultUserRoleId,
                    Guid.NewGuid().ToString()));
                context.SaveChanges();
            }
            #endregion

            #region UserAccounts.
            if (!context.Set<UserAccount>().Any())
            {
                var passwordSalt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
                var passwordHash = Generate.GetInputPasswordHash("123456", passwordSalt);
                var userAccount = new UserAccount
                {
                    Id = seedId,
                    FullName = "Nguyễn Huy Hoàng",
                    UserName = "hoangit21",
                    Email = "hoangit21@gmail.com",
                    PhoneNumber = "01683285041",
                    IsActive = true,
                    PasswordSalt = passwordSalt,
                    PasswordHash = Convert.ToBase64String(passwordHash),
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                    NormalizedUserName = "hoangit21".ToUpper(),
                    TenantId = seedId
                };
                context.Set<UserAccount>().Add(userAccount);
                context.SaveChanges();
            }
            #endregion

            #region UserRole.
            if (!context.Set<IdentityUserRole<string>>().Any())
            {
                var userRole = new IdentityUserRole<string>
                {
                    UserId = seedId,
                    RoleId = "SuperAdministrator"
                };
                context.Set<IdentityUserRole<string>>().Add(userRole);
                context.SaveChanges();
            }
            #endregion

            #region ApiResource.
            if (!context.Set<ApiResource>().Any())
            {
                context.Set<ApiResource>().Add(new ApiResource("GHM_Core_Api", "GHM_Core_Api", "GHMSoft core api", true));
                context.Set<ApiResource>().Add(new ApiResource("GHM_Hr_Api", "GHM_Hr_Api", "GHMSoft hr api", true));
                context.Set<ApiResource>().Add(new ApiResource("GHM_Timekeeping_Api", "GHM_Timekeeping_Api", "GHMSoft timekeeping api", true));
                context.SaveChanges();
            }
            #endregion

            #region Client.
            if (!context.Set<Client>().Any())
            {
                var angularAppId = "a3a3b45c-3665-44b2-931a-f840fdfca572";
                var hrAppId = "c3e86dc7-0417-4a2d-88f7-ef1454e5b1ff";
                var coreAppId = "6755623e-4d06-4b58-a383-1f8ef66a9094";

                var client = new ClientMeta
                {   
                    ClientId = angularAppId,
                    ClientName = "GHMSoft Application",
                    ClientAllowedGrantTypes = "ResourceOwnerPassword",
                    AllowOfflineAccess = true,
                    RequireConsent = false,
                    RequireClientSecret = false,
                    ClientAllowedScopes = "GHM_Core_Api, GHM_Hr_Api, GHM_Timekeeping_Api",
                };
                var clientHr = new ClientMeta
                {
                    ClientId = hrAppId,
                    ClientName = "GHMSoft HR Api",
                    ClientAllowedGrantTypes = "ClientCredentials",
                    AllowOfflineAccess = true,
                    RequireConsent = false,
                    RequireClientSecret = false,
                    ClientAllowedScopes = "GHM_Core_Api, GHM_Hr_Api, GHM_Timekeeping_Api",
                };
                var clientCore = new ClientMeta
                {
                    ClientId = coreAppId,
                    ClientName = "GHMSoft Core Api",
                    ClientAllowedGrantTypes = "ClientCredentials",
                    AllowOfflineAccess = true,
                    RequireConsent = false,
                    RequireClientSecret = false,
                    ClientAllowedScopes = "GHM_Core_Api, GHM_Hr_Api, GHM_Timekeeping_Api",
                };
                var result = Task.Run(() => clientRepository.Insert(client)).Result;
                var result1 = Task.Run(() => clientRepository.Insert(clientHr)).Result;
                var result2 = Task.Run(() => clientRepository.Insert(clientCore)).Result;
            }
            #endregion

            #region Language
            if (!context.Set<Language>().Any())
            {
                var defaultLanguage = new Language
                {
                    Id = "vi-VN",
                    Description = "Ngôn ngữ Tiếng Việt.",
                    Name = "Tiếng Việt",
                    IsActive = true
                };
                context.Set<Language>().Add(defaultLanguage);
                context.Set<Language>().Add(new Language
                {
                    Id = "en-US",
                    Description = "English (United State)",
                    Name = "English (United State)",
                    IsActive = true
                });
                context.Set<Language>().Add(new Language
                {
                    Id = "en-UK",
                    Description = "English (United Kingdom)",
                    Name = "English (United Kingdom)",
                    IsActive = true
                });
                var result = context.SaveChanges();
                if (result > 0)
                {
                    // Add default language for tenant.
                    context.Set<TenantLanguage>()
                        .Add(new TenantLanguage
                        {
                            TenantId = seedId,
                            Name = defaultLanguage.Name,                            
                            IsActive = defaultLanguage.IsActive,
                            LanguageId = defaultLanguage.Id
                        });
                    context.SaveChanges();
                }
            }
            #endregion
        }
    }
}
