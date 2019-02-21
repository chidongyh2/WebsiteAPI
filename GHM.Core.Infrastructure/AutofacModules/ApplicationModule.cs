using System.Reflection;
using Autofac;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Resources;
using GHM.Core.Infrastructure.Repository;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.SqlServer;
using IdentityServer4.Services;
using NServiceBus;
using Module = Autofac.Module;

namespace GHM.Core.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        public string ConnectionString { get; }
        public ApplicationModule(string connectionString)
        {
            ConnectionString = connectionString;
        }

        protected override void Load(ContainerBuilder builder)
        {
            var assembly = Assembly.GetExecutingAssembly();
            builder.RegisterType<CoreDbContext>()
                .As<IDbContext>()
                .InstancePerLifetimeScope();

            IEndpointInstance endpointInstance = null;
            builder.Register(c => endpointInstance)
                .As<IEndpointInstance>()
                .SingleInstance();

            #region Resources
            builder.RegisterType<ResourceService<SharedResource>>()
                .As<IResourceService<SharedResource>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ResourceService<GhmCoreResource>>()
                .As<IResourceService<GhmCoreResource>>()
                .InstancePerLifetimeScope();
            #endregion

            builder.RegisterType<ProfileRepository>()
                .As<IProfileService>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientRepository>()
                .As<IClientRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientAllowedCorsOriginsRepository>()
                .As<IClientAllowedCorsOriginsRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientAllowedGrantTypeRepository>()
                .As<IClientAllowedGrantTypeRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientClaimRepository>()
                .As<IClientClaimRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientIdentityProviderRestrictionRepository>()
                .As<IClientIdentityProviderRestrictionRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientPostLogoutRedirectUrisRepository>()
                .As<IClientPostLogoutRedirectUrisRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientPropertyRepository>()
                .As<IClientPropertyRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientRedirectUrisRepository>()
                .As<IClientRedirectUrisRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientSecretRepository>()
                .As<IClientSecretRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClientAllowedScopeRepository>()
                .As<IClientAllowedScopesRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<UserAccountRepository>()
                .As<IUserAccountRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<PageRepository>()
                .As<IPageRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<PageTranslationRepository>()
                .As<IPageTranslationRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ProvinceRepository>()
                .As<IProvinceRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<TenantRepository>()
                .As<ITenantRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<UserRoleRepository>()
                .As<IUserRoleRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<RolePageRepository>()
                .As<IRolePageRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<RoleRepository>()
                .As<IRoleRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<LanguageRepository>()
                .As<ILanguageRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<TenantLanguageRepository>()
                .As<ITenantLanguageRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<UserPermissionRepository>()
                .As<IUserPermissionRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<UserSettingRepository>()
                .As<IUserSettingRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<EthnicRepository>()
               .As<IEthnicRepository>()
               .InstancePerLifetimeScope();

            builder.RegisterType<ReligionRepository>()
             .As<IReligionRepository>()
             .InstancePerLifetimeScope();

            builder.RegisterType<TagRepository>()
                .As<ITagRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<SubjectTagRepository>()
                .As<ISubjectTagRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ApproverConfigRepository>()
                .As<IApproverConfigRepository>()
                .InstancePerLifetimeScope();

            #region Resource Service.
            builder.RegisterType<ResourceService<SharedResource>>()
                .As<IResourceService<SharedResource>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ResourceService<GhmCoreResource>>()
                .As<IResourceService<GhmCoreResource>>()
                .InstancePerLifetimeScope();
            #endregion

            #region Services            
            builder.RegisterAssemblyTypes(assembly)
                .Where(t => t.Name.EndsWith("Service"))
                .AsImplementedInterfaces();
            #endregion        
        }
    }
}
