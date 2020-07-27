using System;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure
{
    public class WebsiteDbContext : DbContextBase
    {
        //private readonly Lazy<EntityQueryFilterProvider> _filterProviderInitializer = new Lazy<EntityQueryFilterProvider>();

        public WebsiteDbContext(DbContextOptions<WebsiteDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("User ID=postgres;Password=123@123a;Host=website-data;Port=5432;Database=Website;Pooling=true;");
            }
            base.OnConfiguring(optionsBuilder);
        }
        public virtual DbSet<Video> Videos { get; private set; }
        public virtual DbSet<VideoTranslation> VideoTranslations { get; private set; }
        public virtual DbSet<Category> Categories { get; private set; }
        public virtual DbSet<CategoryTranslation> CategoryTranslations { get; private set; }
        public virtual DbSet<AgencyInfo> AgencyInfos { get; private set; }
        public virtual DbSet<AgencyInfoTranslation> AgencyInfoTranslations { get; private set; }
        public virtual DbSet<Album> Albums { get; private set; }
        public virtual DbSet<AlbumTranslation> AlbumTranslations { get; private set; }
        public virtual DbSet<Appointment> Appointments { get; private set; }
        public virtual DbSet<Banner> Banners { get; private set; }
        public virtual DbSet<BannerItem> BannerItems { get; private set; }
        public virtual DbSet<CategoriesNews> CategoriesNews { get; private set; }
        public virtual DbSet<CategoryInvolve> CategoryInvolves { get; private set; }
        public virtual DbSet<Comment> Comment { get; private set; }
        public virtual DbSet<ConfigMailTemp> ConfigMailTemp { get; private set; }
        public virtual DbSet<ConfigMailTempDetail> ConfigMailTempDetails { get; private set; }
        public virtual DbSet<CoreValue> CoreValues { get; private set; }
        public virtual DbSet<CoreValueTranslation> CoreValueTranslations { get; private set; }
        public virtual DbSet<Faq> Faqs { get; private set; }
        public virtual DbSet<FaqGroup> FaqGroups { get; private set; }
        public virtual DbSet<FaqGroupTranslation> FaqGroupTranslations { get; private set; }
        public virtual DbSet<Feedback> Feedbacks { get; private set; }
        public virtual DbSet<Mail> Mails { get; private set; }
        public virtual DbSet<MailTempContent> MailTempContents { get; private set; }
        public virtual DbSet<MailTempGroup> MailTempGroups { get; private set; }
        public virtual DbSet<MailTempGroupTranslation> MailTempGroupTranslations { get; private set; }
        public virtual DbSet<MailType> MailTypes { get; private set; }
        public virtual DbSet<Menu> Menus { get; private set; }
        public virtual DbSet<MenuItem> MenuItems { get; private set; }
        public virtual DbSet<MenuItemTranslation> MenuItemTranslations { get; private set; }
        public virtual DbSet<News> News { get; private set; }
        public virtual DbSet<NewsTranslation> NewsTranslations { get; private set; }
        public virtual DbSet<Photo> Photo { get; private set; }
        public virtual DbSet<Setting> Settings { get; private set; }
        public virtual DbSet<SettingTranslation> SettingTranslations { get; private set; }
        public virtual DbSet<SocialNetwork> SocialNetworks { get; private set; }
        public virtual DbSet<VideoGroup> VideoGroups { get; private set; }
        public virtual DbSet<VideoGroupTranslation> VideoGroupTranslations { get; private set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.HasDefaultSchema("public");
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            // Configurations:
            //  builder.ApplyConfiguration(new CategoryConfig());

            // Video.
            builder.Entity<Video>().ToTable("videos").HasKey(x => x.Id);

            builder.Entity<VideoTranslation>()
                .ToTable("videotranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.VideoId });

            builder.Entity<VideoTranslation>()
                .HasOne(video => video.Video)
                .WithMany(videoTranslation => videoTranslation.Translations)
                .HasForeignKey(videoTranslation => videoTranslation.VideoId);

            // News category.
            builder.Entity<Category>().ToTable("Categories").HasKey(x => x.Id);

            builder.Entity<CategoryTranslation>()
                .ToTable("categorytranslations")
                .HasKey(t => new { t.TenantId, t.LanguageId, t.CategoryId });

            //builder.Entity<CategoryTranslation>().ToTable("CategoryTranslations")
            //    .HasOne(categoryTranslation => categoryTranslation.Category)
            //    .WithMany(category => category.CategoryTranslations)
            //    .HasForeignKey(category => category.CategoryId);

            // Menu
            builder.Entity<Menu>().ToTable("menus").HasKey(x => x.Id);

            // Menu Item
            builder.Entity<MenuItem>().ToTable("menuitems").HasKey(x => x.Id);

            builder.Entity<MenuItemTranslation>()
                .ToTable("menuitemtranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.MenuItemId });

            builder.Entity<MenuItemTranslation>()
                .HasOne(menu => menu.MenuItem)
                .WithMany(menuTranslation => menuTranslation.MenuItemTranslations)
                .HasForeignKey(menuTranslation => menuTranslation.MenuItemId);

            // Feedback
            builder.Entity<Feedback>().ToTable("feedbacks").HasKey(x => x.Id);

            // News
            builder.Entity<News>().ToTable("news").HasKey(x => x.Id);

            builder.Entity<NewsTranslation>()
                .ToTable("newstranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.NewsId });

            builder.Entity<NewsTranslation>()
                .HasOne(news => news.News)
                .WithMany(newsTranslation => newsTranslation.NewsTranslations)
                .HasForeignKey(newsTranslation => newsTranslation.NewsId);

            // CategoriesNews
            builder.Entity<CategoriesNews>()
                .ToTable("categoriesnews")
                .HasKey(x => new { x.NewsId, x.CategoryId });

            builder.Entity<Setting>()
                .ToTable("settings")
                .HasKey(x => new { x.TenantId, x.Key, x.LanguageId });

            builder.Entity<SettingTranslation>()
                .ToTable("settingTranslations")
                .HasKey(x => new { x.SettingId, x.TenantId, x.LanguageId });

            builder.Entity<MailType>()
                .ToTable("mailtypes")
                .HasKey(x => new { x.Id});

            builder.Entity<MailTempGroupTranslation>()
                .ToTable("mailgrouptranslations")
                .HasKey(x => new { x.TenantId, x.MailTempGroupId, x.LanguageId });

            builder.Entity<MailTempGroup>()
                .ToTable("mailtempgroups")
                .HasKey(x => new { x.Id});

            builder.Entity<Mail>()
                .ToTable("mails")
                .HasKey(x => new { x.Id });

            builder.Entity<MailTempContent>()
                .ToTable("mailtempcontents")
                .HasKey(x => new { x.Id });

            builder.Entity<MailTempContentTranslation>()
                .ToTable("mailtempvontenttranslations")
                .HasKey(x => new { x.TenantId, x.MailTempContentId, x.LanguageId });

            builder.Entity<Banner>()
           .ToTable("banners")
           .HasKey(x => new { x.Id });

            builder.Entity<BannerItem>()
             .ToTable("banneritems")
             .HasKey(x => new { x.Id });

            builder.Entity<BranchContact>()
                .ToTable("branchcontacts")
                .HasKey(x => new { x.Id });

            builder.Entity<BranchContactTranslation>()
                .ToTable("branchcontacttranslations")
                .HasKey(x => new { x.BranchContactId, x.LanguageId });

            builder.Entity<BranchContactDetail>()
                .ToTable("branchcontactdetails")
                .HasKey(x => x.Id);

            builder.Entity<SocialNetwork>()
               .ToTable("socialnetworks")
               .HasKey(x => x.Id);

            builder.Entity<Photo>()
                .ToTable("photos")
                .HasKey(x => x.Id);

            // builder.Entity<PhotoTranslation>()
            //    .ToTable("PhotoTranslations")
            //    .HasKey(x => new { x.TenantId, x.LanguageId, x.PhotoId });

            builder.Entity<Album>()
                .ToTable("albums")
                .HasKey(x => x.Id);

            builder.Entity<AlbumTranslation>()
                .ToTable("albumtranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.AlbumId });

            builder.Entity<CategoryInvolve>()
                .ToTable("categoryinvolves")
                .HasKey(x => new { x.CategoryId, x.CategoryInvolveId });

            builder.Entity<VideoGroup>()
                .ToTable("videogroups")
                .HasKey(x => x.Id);

            builder.Entity<VideoGroupTranslation>()
                .ToTable("videogrouptranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.VideoGroupId });

            builder.Entity<VideoGroupTranslation>()
                .HasOne(vg => vg.VideoGroup)
                .WithMany(vgt => vgt.VideoGroupTranslations)
                .HasForeignKey(vgt => vgt.VideoGroupId);

            builder.Entity<Brand>()
                 .ToTable("brands")
                .HasKey(x => new { x.Id});

            builder.Entity<CoreValue>()
                .ToTable("corevalues")
                .HasKey(x => x.Id);

            builder.Entity<CoreValueTranslation>()
                .ToTable("corevaluetranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.CoreValueId });

            builder.Entity<FaqGroup>()
              .ToTable("faqgroups")
              .HasKey(x => x.Id);

            builder.Entity<FaqGroupTranslation>()
                .ToTable("faqgrouptranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.FaqGroupId });

            builder.Entity<FaqGroupTranslation>()
                .HasOne(fg => fg.FaqGroup)
                .WithMany(fgt => fgt.FaqGroupTranslations)
                .HasForeignKey(fgt => fgt.FaqGroupId);

            builder.Entity<Faq>()
              .ToTable("faqs")
              .HasKey(x => x.Id);

            builder.Entity<FaqTranslation>()
                .ToTable("faqtranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.FaqId });

            builder.Entity<FaqTranslation>()
                .HasOne(f => f.Faq)
                .WithMany(ft => ft.FaqTranslations)
                .HasForeignKey(ft => ft.FaqId);

            builder.Entity<AgencyInfo>()
              .ToTable("agencyinfos")
              .HasKey(x => x.Id);

            builder.Entity<AgencyInfoTranslation>()
                .ToTable("agencyinfotranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.AgencyInfoId });

            builder.Entity<AgencyInfoTranslation>()
                .HasOne(ai => ai.AgencyInfo)
                .WithMany(ait => ait.AgencyInfoTranslations)
                .HasForeignKey(ait => ait.AgencyInfoId);

            builder.Entity<Comment>().ToTable("comments").HasKey(x => x.Id);
        }

        //public Task<int> SaveChangesAsync()
        //{
        //    return SaveChangesAsync(new CancellationToken());
        //}

        //public IRepository<T> GetRepository<T>() where T : class
        //{
        //    return new EfRepository<T>(this);
        //}

        //public QueryFilterProvider Filters => _filterProviderInitializer.Value;
    }
}
