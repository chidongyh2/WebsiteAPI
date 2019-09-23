using System;
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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            //  builder.ApplyConfiguration(new CategoryConfig());

            // Video.
            builder.Entity<Video>().ToTable("Videos").HasKey(x => x.Id);

            builder.Entity<VideoTranslation>()
                .ToTable("VideoTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.VideoId });

            builder.Entity<VideoTranslation>()
                .HasOne(video => video.Video)
                .WithMany(videoTranslation => videoTranslation.Translations)
                .HasForeignKey(videoTranslation => videoTranslation.VideoId);

            // News category.
            builder.Entity<Category>().ToTable("Categories").HasKey(x => x.Id);

            builder.Entity<CategoryTranslation>()
                .ToTable("CategoryTranslations")
                .HasKey(t => new { t.TenantId, t.LanguageId, t.CategoryId });

            //builder.Entity<CategoryTranslation>().ToTable("CategoryTranslations")
            //    .HasOne(categoryTranslation => categoryTranslation.Category)
            //    .WithMany(category => category.CategoryTranslations)
            //    .HasForeignKey(category => category.CategoryId);

            // Menu
            builder.Entity<Menu>().ToTable("Menus").HasKey(x => x.Id);

            // Menu Item
            builder.Entity<MenuItem>().ToTable("MenuItems").HasKey(x => x.Id);

            builder.Entity<MenuItemTranslation>()
                .ToTable("MenuItemTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.MenuItemId });

            builder.Entity<MenuItemTranslation>()
                .HasOne(menu => menu.MenuItem)
                .WithMany(menuTranslation => menuTranslation.MenuItemTranslations)
                .HasForeignKey(menuTranslation => menuTranslation.MenuItemId);

            // Feedback
            builder.Entity<Feedback>().ToTable("Feedbacks").HasKey(x => x.Id);

            // News
            builder.Entity<News>().ToTable("News").HasKey(x => x.Id);

            builder.Entity<NewsTranslation>()
                .ToTable("NewsTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.NewsId });

            builder.Entity<NewsTranslation>()
                .HasOne(news => news.News)
                .WithMany(newsTranslation => newsTranslation.NewsTranslations)
                .HasForeignKey(newsTranslation => newsTranslation.NewsId);

            // CategoriesNews
            builder.Entity<CategoriesNews>()
                .ToTable("CategoriesNews")
                .HasKey(x => new { x.NewsId, x.CategoryId });

            builder.Entity<Setting>()
                .ToTable("Settings")
                .HasKey(x => new { x.TenantId, x.Key, x.LanguageId });

            builder.Entity<SettingTranslation>()
                .ToTable("SettingTranslations")
                .HasKey(x => new { x.SettingId, x.TenantId, x.LanguageId });

            builder.Entity<MailType>()
                .ToTable("MailTypes")
                .HasKey(x => new { x.Id});

            builder.Entity<MailTempGroupTranslation>()
                .ToTable("MailGroupTranslations")
                .HasKey(x => new { x.TenantId, x.MailTempGroupId, x.LanguageId });

            builder.Entity<MailTempGroup>()
                .ToTable("MailTempGroups")
                .HasKey(x => new { x.Id});

            builder.Entity<Mail>()
                .ToTable("Mails")
                .HasKey(x => new { x.Id });

            builder.Entity<MailTempContent>()
                .ToTable("MailTempContents")
                .HasKey(x => new { x.Id });

            builder.Entity<MailTempContentTranslation>()
                .ToTable("MailTempContentTranslations")
                .HasKey(x => new { x.TenantId, x.MailTempContentId, x.LanguageId });

            builder.Entity<Banner>()
           .ToTable("Banners")
           .HasKey(x => new { x.Id });

            builder.Entity<BannerItem>()
             .ToTable("BannerItems")
             .HasKey(x => new { x.Id });

            builder.Entity<BranchContact>()
                .ToTable("BranchContacts")
                .HasKey(x => new { x.Id });

            builder.Entity<BranchContactTranslation>()
                .ToTable("BranchContactTranslations")
                .HasKey(x => new { x.BranchContactId, x.LanguageId });

            builder.Entity<BranchContactDetail>()
                .ToTable("BranchContactDetails")
                .HasKey(x => x.Id);

            builder.Entity<SocialNetwork>()
               .ToTable("SocialNetworks")
               .HasKey(x => x.Id);

            builder.Entity<Photo>()
                .ToTable("Photos")
                .HasKey(x => x.Id);

            // builder.Entity<PhotoTranslation>()
            //    .ToTable("PhotoTranslations")
            //    .HasKey(x => new { x.TenantId, x.LanguageId, x.PhotoId });

            builder.Entity<Album>()
                .ToTable("Albums")
                .HasKey(x => x.Id);

            builder.Entity<AlbumTranslation>()
                .ToTable("AlbumTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.AlbumId });

            builder.Entity<CategoryInvolve>()
                .ToTable("CategoryInvolves")
                .HasKey(x => new { x.CategoryId, x.CategoryInvolveId });

            builder.Entity<VideoGroup>()
                .ToTable("VideoGroups")
                .HasKey(x => x.Id);

            builder.Entity<VideoGroupTranslation>()
                .ToTable("VideoGroupTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.VideoGroupId });

            builder.Entity<VideoGroupTranslation>()
                .HasOne(vg => vg.VideoGroup)
                .WithMany(vgt => vgt.VideoGroupTranslations)
                .HasForeignKey(vgt => vgt.VideoGroupId);

            builder.Entity<Brand>()
                 .ToTable("Brands")
                .HasKey(x => new { x.Id});

            builder.Entity<CoreValue>()
                .ToTable("CoreValues")
                .HasKey(x => x.Id);

            builder.Entity<CoreValueTranslation>()
                .ToTable("CoreValueTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.CoreValueId });

            builder.Entity<FaqGroup>()
              .ToTable("FaqGroups")
              .HasKey(x => x.Id);

            builder.Entity<FaqGroupTranslation>()
                .ToTable("FaqGroupTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.FaqGroupId });

            builder.Entity<FaqGroupTranslation>()
                .HasOne(fg => fg.FaqGroup)
                .WithMany(fgt => fgt.FaqGroupTranslations)
                .HasForeignKey(fgt => fgt.FaqGroupId);

            builder.Entity<Faq>()
              .ToTable("Faqs")
              .HasKey(x => x.Id);

            builder.Entity<FaqTranslation>()
                .ToTable("FaqTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.FaqId });

            builder.Entity<FaqTranslation>()
                .HasOne(f => f.Faq)
                .WithMany(ft => ft.FaqTranslations)
                .HasForeignKey(ft => ft.FaqId);

            builder.Entity<AgencyInfo>()
              .ToTable("AgencyInfos")
              .HasKey(x => x.Id);

            builder.Entity<AgencyInfoTranslation>()
                .ToTable("AgencyInfoTranslations")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.AgencyInfoId });

            builder.Entity<AgencyInfoTranslation>()
                .HasOne(ai => ai.AgencyInfo)
                .WithMany(ait => ait.AgencyInfoTranslations)
                .HasForeignKey(ait => ait.AgencyInfoId);
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
