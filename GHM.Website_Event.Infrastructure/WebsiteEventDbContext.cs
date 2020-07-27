using GHM.Infrastructure.SqlServer;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Event.Infrastructure
{
    public class WebsiteEventDbContext : DbContextBase
    {
        public WebsiteEventDbContext(DbContextOptions<WebsiteEventDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            //builder.ApplyConfiguration(new SurveyGroupConfig());

            // Event.
            builder.Entity<Domain.Models.Event>().ToTable("events").HasKey(x => x.Id);

            builder.Entity<EventTranslation>()
                .ToTable("eventtranslations")
                .HasKey(x => new { x.EventId, x.LanguageId });

            builder.Entity<EventTranslation>()
                .HasOne(e => e.Event)
                .WithMany(et => et.EventTranslations)
                .HasForeignKey(et => et.EventId);

            // Event Day.
            builder.Entity<EventDay>().ToTable("eventdays").HasKey(x => x.Id);

            builder.Entity<EventDayTranslation>()
                .ToTable("eventdaytranslations")
                .HasKey(x => new { x.EventDayId, x.LanguageId });

            builder.Entity<EventDayTranslation>()
                .HasOne(ed => ed.EventDay)
                .WithMany(edt => edt.EventDayTranslations)
                .HasForeignKey(edt => edt.EventDayId);

            // Register.
            builder.Entity<Register>().ToTable("registers").HasKey(x => x.Id);

            // Accompany Person.
            builder.Entity<AccompanyPerson>().ToTable("accompanypersons").HasKey(x => x.Id);

            // EventDay Register.
            builder.Entity<EventDayRegister>().ToTable("eventdayregisters").HasKey(x => new { x.EventDayId, x.RegisterId });

            builder.Entity<EventAlbum>().ToTable("eventalbums").HasKey(x => x.Id);
        }
    }
}