using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure
{
    public class WarehouseDbContext : DbContextBase
    {
        public WarehouseDbContext(DbContextOptions<WarehouseDbContext> options)
          : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Query
            //    builder.Query<QuestionGroupReport>();
            #endregion

            // Configurations:
            //builder.ApplyConfiguration(new SurveyGroupConfig());

            // ProductAttributeTranslation
            builder.Entity<AttributeTranslation>()
                .ToTable("AttributeTranslations")
                .HasKey(x => new { ProductAttributeId = x.AttributeId, x.LanguageId });

            builder.Entity<AttributeTranslation>()
                .HasOne(x => x.Attribute)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.AttributeId);

            builder.Entity<ProductCategory>()
               .ToTable("ProductCategories")
               .HasKey(x => x.Id);

            builder.Entity<ProductCategoryTranslation>()
             .ToTable("ProductCategoryTranslations")
             .HasKey(x => new { x.TenantId, x.ProductCategoryId, x.LanguageId });

            // AttributeValue
            builder.Entity<AttributeValue>().ToTable("AttributeValues").HasKey(x => new { x.Id });
            builder.Entity<ProductAttribute>().ToTable("ProductAttributes").HasKey(x => new { x.Id });
            builder.Entity<ProductAttributeValue>().ToTable("ProductAttributeValues")
                .HasKey(x => new { x.ProductAttributeId, x.AttributeValueId });

            builder.Entity<ProductAttributeValue>()
                .HasOne(pa => pa.ProductAttribute)
                .WithMany(pav => pav.ProductAttributeValues)
                .HasForeignKey(pav => pav.AttributeValueId);

            // AttributeValueTranslation
            builder.Entity<AttributeValueTranslation>()
                .ToTable("AttributeValueTranslations")
                .HasKey(x => new { ProductAttributeValueId = x.AttributeValueId, x.LanguageId });

            builder.Entity<AttributeValueTranslation>()
                .HasOne(x => x.AttributeValue)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.AttributeValueId);

            // Supplier
            builder.Entity<Supplier>()
                .ToTable("Suppliers")
                .HasKey(x => x.Id);

            // Contact
            builder.Entity<Contact>()
              .ToTable("Contacts")
              .HasKey(x => x.Id);

            // Brand
            builder.Entity<Brand>()
                .ToTable("Brands")
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
            builder.Entity<Product>()
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

            // ProductsCategory
            builder.Entity<ProductsCategory>()
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
                .HasKey(x => x.Id);

            builder.Entity<ProductConversionUnitGroup>()
                .ToTable("ProductConversionUnitGroups")
                .HasKey(x => new { x.Id, x.ProductConversionUnitId });

            // ProductAttribute
            builder.Entity<Attribute>()
                .ToTable("Attributes")
                .HasKey(x => x.Id);

            // Warehouse
            builder.Entity<Domain.Models.Warehouse>()
                .ToTable("Warehouses")
                .HasKey(x => x.Id);

            // WarehouseManagerConfig
            builder.Entity<WarehouseManagerConfig>()
                .ToTable("WarehouseManagerConfigs")
                .HasKey(x => new { x.TenantId, x.UserId, x.WarehouseId });

            // WarehouseLimit
            builder.Entity<WarehouseLimit>()
                .ToTable("WarehouseLimits")
                .HasKey(x => new { x.TenantId, x.WarehouseId, x.ProductId, x.UnitId });

            builder.Entity<GoodsReceiptNote>()
                .ToTable("GoodsReceiptNotes")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsReceiptNoteDetail>()
                .ToTable("GoodsReceiptNoteDetails")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsDeliver>()
                .ToTable("GoodsDelivers")
                .HasKey(x => x.Id);

            builder.Entity<GoodsDeliveryNoteReceiver>()
                .ToTable("GoodsDeliveryNoteReceivers")
                .HasKey(x => x.Id);

            builder.Entity<Lot>()
                .ToTable("Lots")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsReceiptNoteFollow>()
                .ToTable("GoodsReceiptNoteFollows")
                .HasKey(x => new { x.Id, x.TenantId });

            // WarehouseConfig
            builder.Entity<WarehouseConfig>()
                .ToTable("WarehouseConfigs")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.Key });

            builder.Entity<GoodsDeliveryNote>()
                .ToTable("GoodsDeliveryNotes")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsDeliveryNoteDetail>()
                .ToTable("GoodsDeliveryNoteDetails")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<InventoryDailyReport>()
                .ToTable("InventoryDailyReports")
                .HasKey(x => x.Id);


            builder.Entity<InventoryReport>()
                .ToTable("InventoryReports")
                .HasKey(x => x.Id);

            builder.Entity<InventoryReportDetail>()
                .ToTable("InventoryReportDetails")
                .HasKey(x => x.Id);

            builder.Entity<Inventory>()
                .ToTable("Inventories")
                .HasKey(x => x.Id);

            builder.Entity<InventoryDetail>()
                .ToTable("InventoryDetails")
                .HasKey(x => new { x.InventoryId, x.ProductId });

            builder.Entity<InventoryDetail>()
                .HasOne(id => id.Inventory)
                .WithMany(i => i.InventoryDetails)
                .HasForeignKey(id => new
                {
                    id.InventoryId
                });

            builder.Entity<InventoryMember>()
                .ToTable("InventoryMembers")
                .HasKey(x => x.Id);

            builder.Entity<InventoryMember>()
                .HasOne(im => im.Inventory)
                .WithMany(i => i.InventoryMembers)
                .HasForeignKey(id => new
                {
                    id.InventoryId
                });

            builder.Entity<InventoryReport>()
                .HasMany(x => x.InventoryReportDetails)
                .WithOne();

            builder.Entity<InventoryReportDetail>()
                .HasOne(ird => ird.InventoryReport)
                .WithMany(ir => ir.InventoryReportDetails)
                .HasForeignKey(ird => ird.InventoryReportId);

            builder.Entity<GoodsReceiptNote>()
                .HasMany(x => x.GoodsReceiptNoteDetails)
                .WithOne();

            builder.Entity<GoodsReceiptNoteDetail>()
                .HasOne(grnd => grnd.GoodsReceiptNote)
                .WithMany(grn => grn.GoodsReceiptNoteDetails)
                .HasForeignKey(grnd => new
                {
                    grnd.GoodsReceiptNoteId,
                    grnd.TenantId
                });

            builder.Entity<GoodsDeliveryNoteDetail>()
                .HasOne(gdnd => gdnd.GoodsDeliveryNote)
                .WithMany(gdn => gdn.GoodsDeliveryNoteDetails)
                .HasForeignKey(grnd => new
                {
                    grnd.GoodsDeliveryNoteId,
                    grnd.TenantId
                });

        }
    }
}
