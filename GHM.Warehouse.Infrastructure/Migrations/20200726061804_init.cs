using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace GHM.Warehouse.Infrastructure.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Attributes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsRequire = table.Column<bool>(nullable: false),
                    IsMultiple = table.Column<bool>(nullable: false),
                    IsSelfContent = table.Column<bool>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreatorAvatar = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attributes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AttributeValues",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    AttributeId = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AttributeValues", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Brands",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    SubjectId = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    PositionName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Fax = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GoodsDelivers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    SupplierId = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsDelivers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GoodsDeliveryNoteReceivers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    CustomerId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsDeliveryNoteReceivers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GoodsDeliveryNotes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    WarehouseId = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreatorAvatar = table.Column<string>(nullable: true),
                    Reason = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    ReceiverId = table.Column<string>(nullable: true),
                    OfficeId = table.Column<int>(nullable: true),
                    OfficeName = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    Day = table.Column<byte>(nullable: false),
                    Month = table.Column<byte>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    TotalAmounts = table.Column<decimal>(nullable: false),
                    Quarter = table.Column<byte>(nullable: false),
                    ForecatstId = table.Column<string>(nullable: true),
                    DeliveryNo = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    TotalItems = table.Column<int>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    SubjectId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    DeliveryDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsDeliveryNotes", x => new { x.Id, x.TenantId });
                });

            migrationBuilder.CreateTable(
                name: "GoodsReceiptNoteFollows",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    LanguageId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsReceiptNoteFollows", x => new { x.Id, x.TenantId });
                });

            migrationBuilder.CreateTable(
                name: "GoodsReceiptNotes",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    TenantId = table.Column<string>(maxLength: 50, nullable: false),
                    WarehouseId = table.Column<string>(maxLength: 50, nullable: false),
                    SupplierId = table.Column<string>(maxLength: 50, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    EntryDate = table.Column<DateTime>(nullable: false),
                    Day = table.Column<byte>(nullable: false),
                    Month = table.Column<byte>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    CreatorId = table.Column<string>(maxLength: 50, nullable: false),
                    CreatorFullName = table.Column<string>(maxLength: 50, nullable: false),
                    CreatorAvatar = table.Column<string>(maxLength: 500, nullable: true),
                    Note = table.Column<string>(maxLength: 500, nullable: true),
                    DeliverId = table.Column<string>(maxLength: 50, nullable: true),
                    ReceiverId = table.Column<string>(maxLength: 50, nullable: true),
                    ReceiverFullName = table.Column<string>(maxLength: 50, nullable: true),
                    ReceiptNo = table.Column<string>(maxLength: 50, nullable: true),
                    TotalAmounts = table.Column<decimal>(nullable: false),
                    TotalItems = table.Column<int>(nullable: false),
                    VAT = table.Column<byte>(nullable: true),
                    Quarter = table.Column<byte>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    FollowId = table.Column<string>(nullable: true),
                    InvoiceNo = table.Column<string>(maxLength: 50, nullable: true),
                    InvoiceDate = table.Column<DateTime>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TotalBeforeTaxes = table.Column<decimal>(nullable: false),
                    Taxes = table.Column<decimal>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    SubjectId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsReceiptNotes", x => new { x.Id, x.TenantId });
                });

            migrationBuilder.CreateTable(
                name: "Inventories",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    WarehouseId = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    InventoryDate = table.Column<DateTime>(nullable: false),
                    Note = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InventoryDailyReports",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    WarehouseId = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ProductId = table.Column<string>(nullable: true),
                    OpeningStockQuantity = table.Column<decimal>(nullable: false),
                    OpeningStockValue = table.Column<decimal>(nullable: false),
                    ReceivingQuantity = table.Column<decimal>(nullable: false),
                    ReceivingValue = table.Column<decimal>(nullable: false),
                    DeliveringQuantity = table.Column<decimal>(nullable: false),
                    DeliveringValue = table.Column<decimal>(nullable: false),
                    ClosingStockQuantity = table.Column<decimal>(nullable: false),
                    ClosingStockValue = table.Column<decimal>(nullable: false),
                    Day = table.Column<byte>(nullable: false),
                    Month = table.Column<byte>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Quarter = table.Column<byte>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    EntryDate = table.Column<DateTime>(nullable: false),
                    UnitId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryDailyReports", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InventoryReports",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    WarehouseId = table.Column<string>(nullable: true),
                    ProductId = table.Column<string>(nullable: true),
                    OpeningStockQuantity = table.Column<decimal>(nullable: false),
                    OpeningStockValue = table.Column<decimal>(nullable: false),
                    Quantity = table.Column<decimal>(nullable: false),
                    TotalAmounts = table.Column<decimal>(nullable: false),
                    IsReceived = table.Column<bool>(nullable: false),
                    ClosingStockQuantity = table.Column<decimal>(nullable: false),
                    ClosingStockValue = table.Column<decimal>(nullable: false),
                    ReceiptId = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    ReceiptNo = table.Column<string>(nullable: true),
                    ProductUnitId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryReports", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Lots",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lots", x => new { x.Id, x.TenantId });
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Code = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    CusomerId = table.Column<string>(nullable: true),
                    CustomerName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    TotalPrice = table.Column<decimal>(nullable: true),
                    TotalAmount = table.Column<decimal>(nullable: true),
                    Discount = table.Column<decimal>(nullable: true),
                    VAT = table.Column<decimal>(nullable: true),
                    DiscountType = table.Column<byte>(nullable: true),
                    Transport = table.Column<decimal>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Status = table.Column<int>(nullable: true),
                    Type = table.Column<byte>(nullable: true),
                    SessionId = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    DeliveryDate = table.Column<DateTime>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductAttributes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProductId = table.Column<string>(nullable: true),
                    AttributeId = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Value = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsShowClient = table.Column<bool>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductAttributes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ParentId = table.Column<int>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    IdPath = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsHomePage = table.Column<bool>(nullable: true),
                    IsHot = table.Column<bool>(nullable: true),
                    IsSolution = table.Column<bool>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    OrderPath = table.Column<string>(nullable: true),
                    ChildCount = table.Column<int>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategoriesAttributes",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false),
                    AttributeId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategoriesAttributes", x => new { x.AttributeId, x.CategoryId });
                });

            migrationBuilder.CreateTable(
                name: "ProductConversionUnitGroups",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProductConversionUnitId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductConversionUnitGroups", x => new { x.Id, x.ProductConversionUnitId });
                });

            migrationBuilder.CreateTable(
                name: "ProductConversionUnits",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    ProductId = table.Column<string>(nullable: true),
                    UnitId = table.Column<string>(nullable: true),
                    ConversionUnitId = table.Column<string>(nullable: true),
                    Value = table.Column<decimal>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ToDate = table.Column<DateTime>(nullable: true),
                    ConversionUnitGroupId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductConversionUnits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductImages",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProductId = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductImages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsManagementByLot = table.Column<bool>(nullable: true),
                    Thumbnail = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true),
                    LikeCount = table.Column<int>(nullable: false),
                    CommentCount = table.Column<int>(nullable: false),
                    ViewCount = table.Column<int>(nullable: false),
                    Source = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    SentTime = table.Column<DateTime>(nullable: false),
                    ApprovedTime = table.Column<DateTime>(nullable: true),
                    ApproverUserId = table.Column<string>(nullable: true),
                    ApproverFullName = table.Column<string>(nullable: true),
                    ApproverAvartar = table.Column<string>(nullable: true),
                    ApproverComment = table.Column<string>(nullable: true),
                    IsHot = table.Column<bool>(nullable: true),
                    LastUpdateHot = table.Column<DateTime>(nullable: true),
                    IsHomePage = table.Column<bool>(nullable: true),
                    LastUpdateHomePage = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => new { x.Id, x.TenantId });
                });

            migrationBuilder.CreateTable(
                name: "ProductsCategories",
                columns: table => new
                {
                    ProductId = table.Column<string>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    TenantId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsCategories", x => new { x.ProductId, x.CategoryId });
                });

            migrationBuilder.CreateTable(
                name: "ProductUnits",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    ProductId = table.Column<string>(nullable: true),
                    UnitId = table.Column<string>(nullable: true),
                    IsDefault = table.Column<bool>(nullable: false),
                    SalePrice = table.Column<decimal>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ToDate = table.Column<DateTime>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductUnits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Suppliers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suppliers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Units", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UnitTranslations",
                columns: table => new
                {
                    UnitId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Abbreviation = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnitTranslations", x => new { x.UnitId, x.LanguageId, x.TenantId });
                });

            migrationBuilder.CreateTable(
                name: "WarehouseConfigs",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Key = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    WarehouseId = table.Column<string>(nullable: true),
                    ToDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WarehouseConfigs", x => new { x.TenantId, x.LanguageId, x.Key });
                });

            migrationBuilder.CreateTable(
                name: "WarehouseLimits",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    WarehouseId = table.Column<string>(nullable: false),
                    ProductId = table.Column<string>(nullable: false),
                    UnitId = table.Column<string>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    LastUpdateTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WarehouseLimits", x => new { x.TenantId, x.WarehouseId, x.ProductId, x.UnitId });
                });

            migrationBuilder.CreateTable(
                name: "WarehouseManagerConfigs",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    WarehouseId = table.Column<string>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    Avatar = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Permissions = table.Column<int>(nullable: false),
                    LastUpdateTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WarehouseManagerConfigs", x => new { x.TenantId, x.UserId, x.WarehouseId });
                });

            migrationBuilder.CreateTable(
                name: "Warehouses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Warehouses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AttributeTranslations",
                columns: table => new
                {
                    AttributeId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AttributeTranslations", x => new { x.AttributeId, x.LanguageId });
                    table.ForeignKey(
                        name: "FK_AttributeTranslations_Attributes_AttributeId",
                        column: x => x.AttributeId,
                        principalTable: "Attributes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AttributeValueTranslations",
                columns: table => new
                {
                    AttributeValueId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    ProductAttributeId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AttributeValueTranslations", x => new { x.AttributeValueId, x.LanguageId });
                    table.ForeignKey(
                        name: "FK_AttributeValueTranslations_AttributeValues_AttributeValueId",
                        column: x => x.AttributeValueId,
                        principalTable: "AttributeValues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GoodsDeliveryNoteDetails",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    ProductId = table.Column<string>(nullable: true),
                    WarehouseId = table.Column<string>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: false),
                    UnitId = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    DiscountPrice = table.Column<decimal>(nullable: true),
                    DiscountByPercent = table.Column<bool>(nullable: true),
                    GoodsDeliveryNoteId = table.Column<string>(nullable: true),
                    RecommendedQuantity = table.Column<decimal>(nullable: true),
                    LotId = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    ConversionUnitGroupId = table.Column<string>(nullable: true),
                    ConversionValue = table.Column<decimal>(nullable: false),
                    GoodsReceiptNoteCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsDeliveryNoteDetails", x => new { x.Id, x.TenantId });
                    table.ForeignKey(
                        name: "FK_GoodsDeliveryNoteDetails_GoodsDeliveryNotes_GoodsDeliveryNo~",
                        columns: x => new { x.GoodsDeliveryNoteId, x.TenantId },
                        principalTable: "GoodsDeliveryNotes",
                        principalColumns: new[] { "Id", "TenantId" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GoodsReceiptNoteDetails",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    ProductId = table.Column<string>(nullable: true),
                    SKU = table.Column<string>(nullable: true),
                    UPC = table.Column<string>(nullable: true),
                    BrandId = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    VAT = table.Column<byte>(nullable: true),
                    Weight = table.Column<int>(nullable: true),
                    Height = table.Column<int>(nullable: true),
                    Width = table.Column<int>(nullable: true),
                    Length = table.Column<int>(nullable: true),
                    VolumnWidth = table.Column<decimal>(nullable: true),
                    ChargeableWeight = table.Column<decimal>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ExpiryDate = table.Column<DateTime>(nullable: true),
                    WarehouseId = table.Column<string>(nullable: true),
                    TotalBeforeTaxes = table.Column<decimal>(nullable: false),
                    TotalAmounts = table.Column<decimal>(nullable: false),
                    Tax = table.Column<decimal>(nullable: true),
                    Taxes = table.Column<decimal>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: false),
                    GoodsReceiptNoteId = table.Column<string>(nullable: true),
                    LotId = table.Column<string>(nullable: true),
                    UnitId = table.Column<string>(nullable: true),
                    InvoiceQuantity = table.Column<decimal>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    ManufactureDate = table.Column<DateTime>(nullable: true),
                    ConversionUnitGroupId = table.Column<string>(nullable: true),
                    Code = table.Column<string>(nullable: true),
                    ConversionValue = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoodsReceiptNoteDetails", x => new { x.Id, x.TenantId });
                    table.ForeignKey(
                        name: "FK_GoodsReceiptNoteDetails_GoodsReceiptNotes_GoodsReceiptNoteI~",
                        columns: x => new { x.GoodsReceiptNoteId, x.TenantId },
                        principalTable: "GoodsReceiptNotes",
                        principalColumns: new[] { "Id", "TenantId" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "InventoryDetails",
                columns: table => new
                {
                    InventoryId = table.Column<string>(nullable: false),
                    ProductId = table.Column<string>(nullable: false),
                    Id = table.Column<string>(nullable: true),
                    LotId = table.Column<string>(nullable: true),
                    UnitId = table.Column<string>(nullable: true),
                    InventoryQuantity = table.Column<decimal>(nullable: true),
                    RealQuantity = table.Column<decimal>(nullable: false),
                    Reason = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryDetails", x => new { x.InventoryId, x.ProductId });
                    table.ForeignKey(
                        name: "FK_InventoryDetails_Inventories_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "InventoryMembers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    InventoryId = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    PositionName = table.Column<string>(nullable: true),
                    OfficeName = table.Column<string>(nullable: true),
                    Avatar = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryMembers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InventoryMembers_Inventories_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "InventoryReportDetails",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    WarehouseId = table.Column<string>(nullable: true),
                    ReceiptId = table.Column<string>(nullable: true),
                    IsReceived = table.Column<bool>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    InventoryReportId = table.Column<string>(nullable: true),
                    ProductId = table.Column<string>(nullable: true),
                    ProductUnitId = table.Column<string>(nullable: true),
                    LotId = table.Column<string>(nullable: true),
                    OpeningStockQuantity = table.Column<decimal>(nullable: false),
                    OpeningStockValue = table.Column<decimal>(nullable: false),
                    ClosingStockQuantity = table.Column<decimal>(nullable: false),
                    ClosingStockValue = table.Column<decimal>(nullable: false),
                    Quantity = table.Column<decimal>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    Note = table.Column<string>(nullable: true),
                    ExWarehousePrice = table.Column<decimal>(nullable: false),
                    GoodsReceiptNoteDetailCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryReportDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InventoryReportDetails_InventoryReports_InventoryReportId",
                        column: x => x.InventoryReportId,
                        principalTable: "InventoryReports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    OrderId = table.Column<string>(nullable: true),
                    ProductId = table.Column<string>(nullable: true),
                    ProductName = table.Column<string>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: false),
                    UnitId = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Discount = table.Column<decimal>(nullable: true),
                    DiscountType = table.Column<byte>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductAttributeValues",
                columns: table => new
                {
                    ProductAttributeId = table.Column<string>(nullable: false),
                    AttributeValueId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductAttributeValues", x => new { x.ProductAttributeId, x.AttributeValueId });
                    table.ForeignKey(
                        name: "FK_ProductAttributeValues_ProductAttributes_AttributeValueId",
                        column: x => x.AttributeValueId,
                        principalTable: "ProductAttributes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategoryTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    ProductCategoryId = table.Column<int>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    SeoLink = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    ParentName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategoryTranslations", x => new { x.TenantId, x.ProductCategoryId, x.LanguageId });
                    table.ForeignKey(
                        name: "FK_ProductCategoryTranslations_ProductCategories_ProductCatego~",
                        column: x => x.ProductCategoryId,
                        principalTable: "ProductCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductTranslations",
                columns: table => new
                {
                    ProductId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    MetaDescription = table.Column<string>(nullable: true),
                    MetaKeyword = table.Column<string>(nullable: true),
                    SeoLink = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTranslations", x => new { x.ProductId, x.LanguageId, x.TenantId });
                    table.ForeignKey(
                        name: "FK_ProductTranslations_Products_ProductId_TenantId",
                        columns: x => new { x.ProductId, x.TenantId },
                        principalTable: "Products",
                        principalColumns: new[] { "Id", "TenantId" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GoodsDeliveryNoteDetails_GoodsDeliveryNoteId_TenantId",
                table: "GoodsDeliveryNoteDetails",
                columns: new[] { "GoodsDeliveryNoteId", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_GoodsReceiptNoteDetails_GoodsReceiptNoteId_TenantId",
                table: "GoodsReceiptNoteDetails",
                columns: new[] { "GoodsReceiptNoteId", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_InventoryMembers_InventoryId",
                table: "InventoryMembers",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_InventoryReportDetails_InventoryReportId",
                table: "InventoryReportDetails",
                column: "InventoryReportId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_OrderId",
                table: "OrderDetails",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductAttributeValues_AttributeValueId",
                table: "ProductAttributeValues",
                column: "AttributeValueId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategoryTranslations_ProductCategoryId",
                table: "ProductCategoryTranslations",
                column: "ProductCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTranslations_ProductId_TenantId",
                table: "ProductTranslations",
                columns: new[] { "ProductId", "TenantId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AttributeTranslations");

            migrationBuilder.DropTable(
                name: "AttributeValueTranslations");

            migrationBuilder.DropTable(
                name: "Brands");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "GoodsDelivers");

            migrationBuilder.DropTable(
                name: "GoodsDeliveryNoteDetails");

            migrationBuilder.DropTable(
                name: "GoodsDeliveryNoteReceivers");

            migrationBuilder.DropTable(
                name: "GoodsReceiptNoteDetails");

            migrationBuilder.DropTable(
                name: "GoodsReceiptNoteFollows");

            migrationBuilder.DropTable(
                name: "InventoryDailyReports");

            migrationBuilder.DropTable(
                name: "InventoryDetails");

            migrationBuilder.DropTable(
                name: "InventoryMembers");

            migrationBuilder.DropTable(
                name: "InventoryReportDetails");

            migrationBuilder.DropTable(
                name: "Lots");

            migrationBuilder.DropTable(
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "ProductAttributeValues");

            migrationBuilder.DropTable(
                name: "ProductCategoriesAttributes");

            migrationBuilder.DropTable(
                name: "ProductCategoryTranslations");

            migrationBuilder.DropTable(
                name: "ProductConversionUnitGroups");

            migrationBuilder.DropTable(
                name: "ProductConversionUnits");

            migrationBuilder.DropTable(
                name: "ProductImages");

            migrationBuilder.DropTable(
                name: "ProductsCategories");

            migrationBuilder.DropTable(
                name: "ProductTranslations");

            migrationBuilder.DropTable(
                name: "ProductUnits");

            migrationBuilder.DropTable(
                name: "Suppliers");

            migrationBuilder.DropTable(
                name: "Units");

            migrationBuilder.DropTable(
                name: "UnitTranslations");

            migrationBuilder.DropTable(
                name: "WarehouseConfigs");

            migrationBuilder.DropTable(
                name: "WarehouseLimits");

            migrationBuilder.DropTable(
                name: "WarehouseManagerConfigs");

            migrationBuilder.DropTable(
                name: "Warehouses");

            migrationBuilder.DropTable(
                name: "Attributes");

            migrationBuilder.DropTable(
                name: "AttributeValues");

            migrationBuilder.DropTable(
                name: "GoodsDeliveryNotes");

            migrationBuilder.DropTable(
                name: "GoodsReceiptNotes");

            migrationBuilder.DropTable(
                name: "Inventories");

            migrationBuilder.DropTable(
                name: "InventoryReports");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "ProductAttributes");

            migrationBuilder.DropTable(
                name: "ProductCategories");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
