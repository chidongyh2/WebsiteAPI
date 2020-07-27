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
                .ToTable("attributetranslations")
                .HasKey(x => new { ProductAttributeId = x.AttributeId, x.LanguageId });

            builder.Entity<AttributeTranslation>()
                .HasOne(x => x.Attribute)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.AttributeId);

            builder.Entity<ProductCategory>()
               .ToTable("productcategories")
               .HasKey(x => x.Id);

            builder.Entity<ProductCategoryTranslation>()
             .ToTable("productcategorytranslations")
             .HasKey(x => new { x.TenantId, x.ProductCategoryId, x.LanguageId });

            // AttributeValue
            builder.Entity<AttributeValue>().ToTable("attributevalues").HasKey(x => new { x.Id });
            builder.Entity<ProductAttribute>().ToTable("productattributes").HasKey(x => new { x.Id });
            builder.Entity<ProductAttributeValue>().ToTable("productattributevalues")
                .HasKey(x => new { x.ProductAttributeId, x.AttributeValueId });

            builder.Entity<ProductAttributeValue>()
                .HasOne(pa => pa.ProductAttribute)
                .WithMany(pav => pav.ProductAttributeValues)
                .HasForeignKey(pav => pav.AttributeValueId);

            // AttributeValueTranslation
            builder.Entity<AttributeValueTranslation>()
                .ToTable("attributevaluetranslations")
                .HasKey(x => new { ProductAttributeValueId = x.AttributeValueId, x.LanguageId });

            builder.Entity<AttributeValueTranslation>()
                .HasOne(x => x.AttributeValue)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt => xt.AttributeValueId);

            // Supplier
            builder.Entity<Supplier>()
                .ToTable("suppliers")
                .HasKey(x => x.Id);

            // Contact
            builder.Entity<Contact>()
              .ToTable("contacts")
              .HasKey(x => x.Id);

            // Brand
            builder.Entity<Brand>()
                .ToTable("brands")
                .HasKey(x => x.Id);

            // Unit
            builder.Entity<Unit>()
                .ToTable("units")
                .HasKey(x => x.Id);

            builder.Entity<UnitTranslation>()
              .ToTable("unittranslations")
              .HasKey(x => new { x.UnitId, x.LanguageId, x.TenantId });

            //ProductCategoriesAttribute
            builder.Entity<ProductCategoriesAttribute>()
                .ToTable("productcategoriesattributes")
                .HasKey(x => new { x.AttributeId, x.CategoryId });

            // Product
            builder.Entity<Product>()
                .ToTable("products")
                .HasKey(x => new { x.Id, x.TenantId });

            // ProductTranslation
            builder.Entity<ProductTranslation>()
                .ToTable("producttranslations")
                .HasKey(x => new { x.ProductId, x.LanguageId, x.TenantId });

            builder.Entity<ProductTranslation>()
                .HasOne(x => x.Product)
                .WithMany(xt => xt.Translations)
                .HasForeignKey(xt =>new { xt.ProductId, xt.TenantId });

            // ProductsCategory
            builder.Entity<ProductsCategory>()
                .ToTable("productscategories")
                .HasKey(x => new { x.ProductId, x.CategoryId });

            // ProductImage
            builder.Entity<ProductImage>()
                .ToTable("productimages")
                .HasKey(x => x.Id);

            // ProductUnit
            builder.Entity<ProductUnit>()
                .ToTable("productunits")
                .HasKey(x => x.Id);

            // ProductConversionUnit
            builder.Entity<ProductConversionUnit>()
                .ToTable("productconversionunits")
                .HasKey(x => x.Id);

            builder.Entity<ProductConversionUnitGroup>()
                .ToTable("productconversionunitgroups")
                .HasKey(x => new { x.Id, x.ProductConversionUnitId });

            // ProductAttribute
            builder.Entity<Attribute>()
                .ToTable("attributes")
                .HasKey(x => x.Id);

            // Warehouse
            builder.Entity<Domain.Models.Warehouse>()
                .ToTable("warehouses")
                .HasKey(x => x.Id);

            // WarehouseManagerConfig
            builder.Entity<WarehouseManagerConfig>()
                .ToTable("warehousemanagerconfigs")
                .HasKey(x => new { x.TenantId, x.UserId, x.WarehouseId });

            // WarehouseLimit
            builder.Entity<WarehouseLimit>()
                .ToTable("warehouselimits")
                .HasKey(x => new { x.TenantId, x.WarehouseId, x.ProductId, x.UnitId });

            builder.Entity<GoodsReceiptNote>()
                .ToTable("goodsreceiptnotes")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsReceiptNoteDetail>()
                .ToTable("goodsreceiptnotedetails")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsDeliver>()
                .ToTable("goodsdelivers")
                .HasKey(x => x.Id);

            builder.Entity<GoodsDeliveryNoteReceiver>()
                .ToTable("goodsdeliverynotereceivers")
                .HasKey(x => x.Id);

            builder.Entity<Lot>()
                .ToTable("lots")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsReceiptNoteFollow>()
                .ToTable("goodsreceiptnotefollows")
                .HasKey(x => new { x.Id, x.TenantId });

            // WarehouseConfig
            builder.Entity<WarehouseConfig>()
                .ToTable("warehouseconfigs")
                .HasKey(x => new { x.TenantId, x.LanguageId, x.Key });

            builder.Entity<GoodsDeliveryNote>()
                .ToTable("goodsdeliverynotes")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<GoodsDeliveryNoteDetail>()
                .ToTable("goodsdeliverynotedetails")
                .HasKey(x => new { x.Id, x.TenantId });

            builder.Entity<InventoryDailyReport>()
                .ToTable("inventorydailyreports")
                .HasKey(x => x.Id);


            builder.Entity<InventoryReport>()
                .ToTable("inventoryreports")
                .HasKey(x => x.Id);

            builder.Entity<InventoryReportDetail>()
                .ToTable("inventoryreportdetails")
                .HasKey(x => x.Id);

            builder.Entity<Inventory>()
                .ToTable("inventories")
                .HasKey(x => x.Id);

            builder.Entity<InventoryDetail>()
                .ToTable("inventorydetails")
                .HasKey(x => new { x.InventoryId, x.ProductId });

            builder.Entity<InventoryDetail>()
                .HasOne(id => id.Inventory)
                .WithMany(i => i.InventoryDetails)
                .HasForeignKey(id => new
                {
                    id.InventoryId
                });

            builder.Entity<InventoryMember>()
                .ToTable("inventorymembers")
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

            builder.Entity<Order>()
                .ToTable("orders")
                .HasKey(x => x.Id);

            builder.Entity<OrderDetail>()
               .ToTable("drderdetails")
               .HasKey(x => x.Id);

            builder.Entity<Order>()
               .HasMany(x => x.OrderDetails)
               .WithOne();

            builder.Entity<OrderDetail>()
              .HasOne(ord => ord.Order)
              .WithMany(or => or.OrderDetails)
              .HasForeignKey(ord => ord.OrderId);
        }
    }
}
