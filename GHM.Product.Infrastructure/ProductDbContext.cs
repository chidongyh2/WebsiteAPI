using System;
using GHM.Infrastructure.SqlServer;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace GHM.Product.Infrastructure
{
    public class ProductDbContext : DbContextBase
    {
        private readonly Lazy<EntityQueryFilterProvider> _filterProviderInitializer = new Lazy<EntityQueryFilterProvider>();

        public ProductDbContext(DbContextOptions<ProductDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Table mapping.                        
            //builder.Entity<ClientIdentityProviderRestriction>(x => x.ToTable("ClientIdentityProviderRestriction"));
            // ProductAttribute
            builder.Entity<ProductAttribute>().ToTable("ProductAttributes").HasKey(x => new { x.Id });

            // ProductAttributeTranslation
            builder.Entity<ProductAttributeTranslation>()
                .ToTable("ProductAttributeTranslations")
                .HasKey(x => new { x.ProductAttributeId, x.LanguageId });

            builder.Entity<ProductAttributeTranslation>()
                .HasOne(x => x.ProductAttribute)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.ProductAttributeId);

            builder.Entity<ProductCategory>()
               .ToTable("ProductCategories")
               .HasKey(x => x.Id);

            builder.Entity<ProductCategoryTranslation>()
             .ToTable("ProductCategoryTranslations")
             .HasKey(x => new { x.TenantId, x.ProductCategoryId, x.LanguageId });

            // ProductAttributeValue
            builder.Entity<ProductAttributeValue>().ToTable("ProductAttributeValues").HasKey(x => new { x.Id });

            // ProductAttributeValueTranslation
            builder.Entity<ProductAttributeValueTranslation>()
                .ToTable("ProductAttributeValueTranslations")
                .HasKey(x => new { x.ProductAttributeValueId, x.LanguageId });

            builder.Entity<ProductAttributeValueTranslation>()
                .HasOne(x => x.ProductAttributeValue)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.ProductAttributeValueId);

            // Contact
            builder.Entity<Contact>()
              .ToTable("Contacts")
              .HasKey(x => x.Id);

            // Unit
            builder.Entity<Unit>()
                .ToTable("Units")
                .HasKey(x => x.Id);

            builder.Entity<UnitTranslation>()
              .ToTable("UnitTranslations")
              .HasKey(x => new { x.UnitId, x.LanguageId, x.TenantId });

            //ProductCategoriesAttribute
            builder.Entity<ProductCategoriesAttribute>()
                .ToTable("ProductCategoriesAttributes")
                .HasKey(x => new { x.AttributeId, x.CategoryId });

            // Product
            builder.Entity<Products>()
                .ToTable("Products")
                .HasKey(x => x.Id);

            // ProductTranslation
            builder.Entity<ProductTranslation>()
                .ToTable("ProductTranslations")
                .HasKey(x => new { x.ProductId, x.LanguageId, x.TenantId });

            builder.Entity<ProductTranslation>()
                .HasOne(x => x.Product)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.ProductId);

            // ProductsCategorie
            builder.Entity<ProductsCategorie>()
                .ToTable("ProductsCategories")
                .HasKey(x => new { x.ProductId, x.CategoryId });

            // ProductImage
            builder.Entity<ProductImage>()
                .ToTable("ProductImages")
                .HasKey(x => x.Id);

            // ProductUnit
            builder.Entity<ProductUnit>()
                .ToTable("ProductUnits")
                .HasKey(x => x.Id);

            // ProductConversionUnit
            builder.Entity<ProductConversionUnit>()
                .ToTable("ProductConversionUnits")
                .HasKey(x => new { x.ProductUnitId, x.ProductUnitConversionId });

            // ProductValue
            builder.Entity<ProductValue>()
                .ToTable("ProductValues")
                .HasKey(x => x.Id);           
            #endregion
        }
    }
}
