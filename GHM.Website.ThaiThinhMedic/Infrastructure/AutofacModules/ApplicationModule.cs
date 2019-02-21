using Autofac;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Repository;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository.System;
using GHM.Website.ThaiThinhMedic.Infrastructure.Repository.System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<ThaiThinhMedicDbContext>()
                .As<IDbContext>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ThaiThinhClinicDbContext>()
               .As<IDbContext>()
               .InstancePerLifetimeScope();

            builder.RegisterType<LogSystemDbContext>()
              .As<IDbContext>()
              .InstancePerLifetimeScope();

            builder.RegisterType<SystemDbContext>()
              .As<IDbContext>()
              .InstancePerLifetimeScope();

            builder.RegisterType<MenuRepository>()
              .As<IMenuRepository>()
              .InstancePerLifetimeScope();

            builder.RegisterType<NewsCategoryRepository>()
               .As<INewsCategoryRepository>()
               .InstancePerLifetimeScope();

            builder.RegisterType<CategoryRepository>()
                .As<ICategoryRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<NewsRepository>()
                .As<INewsRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<MenuRepository>()
                .As<IMenuRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseRepository>()
                .As<ICourseRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseRegisterRepository>()
                .As<ICourseRegisterRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClassRepository>()
                .As<IClassRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<FeedbackRepository>()
                .As<IFeedbackReposiroty>()
                .InstancePerLifetimeScope();

            //Clinic
            //builder.RegisterType<AppointmentScheduleRepository>()
            //  .As<IAppointmentScheduleRepository>()
            //  .InstancePerLifetimeScope();

            builder.RegisterType<DoctorRepository>()
             .As<IDoctorRepository>()
             .InstancePerLifetimeScope();

            builder.RegisterType<DoctorScheduleRepository>()
             .As<IDoctorScheduleRepository>()
             .InstancePerLifetimeScope();

            //builder.RegisterType<PatientRepository>()
            // .As<IPatientRepository>()
            // .InstancePerLifetimeScope();

            //builder.RegisterType<PKStoreRepository>()
            //.As<IPKStoreRepository>()
            //.InstancePerLifetimeScope();

            //builder.RegisterType<ServiceRepository>()
            //.As<IServiceRepository>()
            //.InstancePerLifetimeScope();

            builder.RegisterType<ServiceTypeRepository>()
            .As<IServiceTypeRepository>()
            .InstancePerLifetimeScope();

            builder.RegisterType<VideoRepository>()
             .As<IVideoRepository>()
             .InstancePerLifetimeScope();

            builder.RegisterType<QuaTangRepository>()
                .As<IQuaTangRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<NguoiThamGiaCungRepository>()
                .As<INguoiThamGiaCungRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<QuaTangKhachHangRepository>()
                .As<IQuaTangKhachHangRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ImageRepository>()
              .As<IImageRepository>()
              .InstancePerLifetimeScope();

            //Log

            builder.RegisterType<QuaTangKhachHangRepository>()
                .As<IQuaTangKhachHangRepository>()
                .InstancePerLifetimeScope();

            //System
            builder.RegisterType<IUserConnectionRepository>()
               .As<UserConnectionRepository>()
               .InstancePerLifetimeScope();
        }
    }
}
