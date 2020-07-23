using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Website.Infrastructure.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AgencyInfos",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true),
                    IdCard = table.Column<string>(nullable: true),
                    IdCardDate = table.Column<DateTime>(nullable: true),
                    ProvinceId = table.Column<int>(nullable: false),
                    DistrictId = table.Column<int>(nullable: false),
                    Length = table.Column<double>(nullable: true),
                    Width = table.Column<double>(nullable: true),
                    Height = table.Column<double>(nullable: true),
                    TotalArea = table.Column<double>(nullable: true),
                    StartTime = table.Column<DateTime>(nullable: true),
                    GoogleMap = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: true),
                    IsShow = table.Column<bool>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
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
                    table.PrimaryKey("PK_AgencyInfos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Albums",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Thumbnail = table.Column<string>(nullable: true),
                    IsPublic = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Albums", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AlbumTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    AlbumId = table.Column<string>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    SeoLink = table.Column<string>(nullable: true),
                    MetaTitle = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlbumTranslations", x => new { x.TenantId, x.LanguageId, x.AlbumId });
                });

            migrationBuilder.CreateTable(
                name: "BannerItems",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    BannerId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: true),
                    Alt = table.Column<string>(nullable: true),
                    TotalClick = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BannerItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Banners",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    DisplayType = table.Column<int>(nullable: false),
                    EffectType = table.Column<int>(nullable: false),
                    Position = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsPopUp = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Banners", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BranchContactDetails",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    BranchContactId = table.Column<string>(nullable: true),
                    ContactType = table.Column<int>(nullable: false),
                    ContactValue = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BranchContactDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BranchContacts",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    WorkTime = table.Column<string>(nullable: true),
                    Link = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    Website = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true),
                    IsOffice = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BranchContacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BranchContactTranslations",
                columns: table => new
                {
                    BranchContactId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BranchContactTranslations", x => new { x.BranchContactId, x.LanguageId });
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
                    Address = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IdPath = table.Column<string>(nullable: true),
                    ParentId = table.Column<int>(nullable: true),
                    CreatorAvatar = table.Column<string>(nullable: true),
                    BannerImage = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    OrderPath = table.Column<string>(nullable: true),
                    IsHomePage = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CategoryInvolves",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false),
                    CategoryInvolveId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryInvolves", x => new { x.CategoryId, x.CategoryInvolveId });
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    ObjectId = table.Column<string>(nullable: true),
                    ObjectType = table.Column<int>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Avatar = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: true),
                    ParentId = table.Column<int>(nullable: true),
                    IdPath = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    UserType = table.Column<int>(nullable: true),
                    IsShow = table.Column<bool>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: true),
                    ChildCount = table.Column<int>(nullable: true),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CoreValues",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    Image = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
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
                    table.PrimaryKey("PK_CoreValues", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FaqGroups",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: false),
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
                    table.PrimaryKey("PK_FaqGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Faqs",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    FaqGroupId = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
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
                    table.PrimaryKey("PK_Faqs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Feedbacks",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    IsView = table.Column<bool>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedbacks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MailGroupTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    MailTempGroupId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MailGroupTranslations", x => new { x.TenantId, x.MailTempGroupId, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "Mails",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    MailTypeId = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Owner = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MailTempContents",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    MailTempGroupId = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDefault = table.Column<bool>(nullable: false),
                    StartTime = table.Column<DateTime>(nullable: true),
                    EndTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MailTempContents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MailTempContentTranslations",
                columns: table => new
                {
                    MailTempContentId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    UnsignTitle = table.Column<string>(nullable: true),
                    ContentMail = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MailTempContentTranslations", x => new { x.TenantId, x.MailTempContentId, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "MailTempGroups",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MailTempGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MailTypes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Ssl = table.Column<bool>(nullable: false),
                    Host = table.Column<string>(nullable: true),
                    Port = table.Column<int>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MailTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MenuItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    MenuId = table.Column<string>(nullable: true),
                    SubjectId = table.Column<string>(nullable: true),
                    SubjectType = table.Column<int>(nullable: false),
                    Icon = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    ParentId = table.Column<int>(nullable: true),
                    IdPath = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    OrderPath = table.Column<string>(nullable: true),
                    Level = table.Column<int>(nullable: false),
                    ChildCount = table.Column<int>(nullable: false),
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
                    table.PrimaryKey("PK_MenuItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Menus",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Icon = table.Column<string>(nullable: true),
                    EffectType = table.Column<int>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    UnsignName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    Position = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "News",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    LikeCount = table.Column<int>(nullable: false),
                    CommentCount = table.Column<int>(nullable: false),
                    ViewCount = table.Column<int>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    CreatorAvatar = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    FeatureImage = table.Column<string>(nullable: true),
                    BannerImage = table.Column<string>(nullable: true),
                    AltImage = table.Column<string>(nullable: true),
                    Source = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    SentTime = table.Column<DateTime>(nullable: true),
                    ApprovedTime = table.Column<DateTime>(nullable: true),
                    ApproverUserId = table.Column<string>(nullable: true),
                    ApproverFullName = table.Column<string>(nullable: true),
                    ApproverAvatar = table.Column<string>(nullable: true),
                    ApproverComment = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    LastUpdateAvatar = table.Column<string>(nullable: true),
                    IsHot = table.Column<bool>(nullable: true),
                    LastUpdateIsHot = table.Column<DateTime>(nullable: true),
                    IsHomePage = table.Column<bool>(nullable: true),
                    LastUpdateIsHomePage = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_News", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    AlbumId = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Settings",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    Key = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    GroupId = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    Value = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Settings", x => new { x.TenantId, x.Key, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "SettingTranslations",
                columns: table => new
                {
                    SettingId = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SettingTranslations", x => new { x.SettingId, x.TenantId, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "SocialNetworks",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialNetworks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VideoGroups",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    TenantId = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
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
                    table.PrimaryKey("PK_VideoGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Videos",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AlbumId = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    Thumbnail = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    VideoLinkId = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: true),
                    CreatorFullName = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LastUpdateUserId = table.Column<string>(nullable: true),
                    LastUpdateFullName = table.Column<string>(nullable: true),
                    IsHomePage = table.Column<bool>(nullable: true),
                    LastUpdateIsHomePage = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Videos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AgencyInfoTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    AgencyInfoId = table.Column<string>(nullable: false),
                    UnsingName = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    AgencyName = table.Column<string>(nullable: true),
                    IdCardAddress = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    AddressRegistered = table.Column<string>(nullable: true),
                    ProvinceName = table.Column<string>(nullable: true),
                    DistrictName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AgencyInfoTranslations", x => new { x.TenantId, x.LanguageId, x.AgencyInfoId });
                    table.ForeignKey(
                        name: "FK_AgencyInfoTranslations_AgencyInfos_AgencyInfoId",
                        column: x => x.AgencyInfoId,
                        principalTable: "AgencyInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategoryTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    MetaTitle = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true),
                    SeoLink = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryTranslations", x => new { x.TenantId, x.LanguageId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_CategoryTranslations_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoreValueTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    CoreValueId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoreValueTranslations", x => new { x.TenantId, x.LanguageId, x.CoreValueId });
                    table.ForeignKey(
                        name: "FK_CoreValueTranslations_CoreValues_CoreValueId",
                        column: x => x.CoreValueId,
                        principalTable: "CoreValues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FaqGroupTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    FaqGroupId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaqGroupTranslations", x => new { x.TenantId, x.LanguageId, x.FaqGroupId });
                    table.ForeignKey(
                        name: "FK_FaqGroupTranslations_FaqGroups_FaqGroupId",
                        column: x => x.FaqGroupId,
                        principalTable: "FaqGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FaqTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    FaqId = table.Column<string>(nullable: false),
                    Question = table.Column<string>(nullable: true),
                    Answer = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaqTranslations", x => new { x.TenantId, x.LanguageId, x.FaqId });
                    table.ForeignKey(
                        name: "FK_FaqTranslations_Faqs_FaqId",
                        column: x => x.FaqId,
                        principalTable: "Faqs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuItemTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    MenuItemId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    ParentName = table.Column<string>(nullable: true),
                    NamePath = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItemTranslations", x => new { x.TenantId, x.LanguageId, x.MenuItemId });
                    table.ForeignKey(
                        name: "FK_MenuItemTranslations_MenuItems_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "MenuItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategoriesNews",
                columns: table => new
                {
                    NewsId = table.Column<string>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriesNews", x => new { x.NewsId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_CategoriesNews_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoriesNews_News_NewsId",
                        column: x => x.NewsId,
                        principalTable: "News",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NewsTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    NewsId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    MetaTitle = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true),
                    MetaKeyword = table.Column<string>(nullable: true),
                    SeoLink = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsTranslations", x => new { x.TenantId, x.LanguageId, x.NewsId });
                    table.ForeignKey(
                        name: "FK_NewsTranslations_News_NewsId",
                        column: x => x.NewsId,
                        principalTable: "News",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VideoGroupTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    VideoGroupId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoGroupTranslations", x => new { x.TenantId, x.LanguageId, x.VideoGroupId });
                    table.ForeignKey(
                        name: "FK_VideoGroupTranslations_VideoGroups_VideoGroupId",
                        column: x => x.VideoGroupId,
                        principalTable: "VideoGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VideoTranslations",
                columns: table => new
                {
                    TenantId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(nullable: false),
                    VideoId = table.Column<string>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoTranslations", x => new { x.TenantId, x.LanguageId, x.VideoId });
                    table.ForeignKey(
                        name: "FK_VideoTranslations_Videos_VideoId",
                        column: x => x.VideoId,
                        principalTable: "Videos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AgencyInfoTranslations_AgencyInfoId",
                table: "AgencyInfoTranslations",
                column: "AgencyInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_CategoriesNews_CategoryId",
                table: "CategoriesNews",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTranslations_CategoryId",
                table: "CategoryTranslations",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_CoreValueTranslations_CoreValueId",
                table: "CoreValueTranslations",
                column: "CoreValueId");

            migrationBuilder.CreateIndex(
                name: "IX_FaqGroupTranslations_FaqGroupId",
                table: "FaqGroupTranslations",
                column: "FaqGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_FaqTranslations_FaqId",
                table: "FaqTranslations",
                column: "FaqId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItemTranslations_MenuItemId",
                table: "MenuItemTranslations",
                column: "MenuItemId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsTranslations_NewsId",
                table: "NewsTranslations",
                column: "NewsId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoGroupTranslations_VideoGroupId",
                table: "VideoGroupTranslations",
                column: "VideoGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoTranslations_VideoId",
                table: "VideoTranslations",
                column: "VideoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AgencyInfoTranslations");

            migrationBuilder.DropTable(
                name: "Albums");

            migrationBuilder.DropTable(
                name: "AlbumTranslations");

            migrationBuilder.DropTable(
                name: "BannerItems");

            migrationBuilder.DropTable(
                name: "Banners");

            migrationBuilder.DropTable(
                name: "BranchContactDetails");

            migrationBuilder.DropTable(
                name: "BranchContacts");

            migrationBuilder.DropTable(
                name: "BranchContactTranslations");

            migrationBuilder.DropTable(
                name: "Brands");

            migrationBuilder.DropTable(
                name: "CategoriesNews");

            migrationBuilder.DropTable(
                name: "CategoryInvolves");

            migrationBuilder.DropTable(
                name: "CategoryTranslations");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "CoreValueTranslations");

            migrationBuilder.DropTable(
                name: "FaqGroupTranslations");

            migrationBuilder.DropTable(
                name: "FaqTranslations");

            migrationBuilder.DropTable(
                name: "Feedbacks");

            migrationBuilder.DropTable(
                name: "MailGroupTranslations");

            migrationBuilder.DropTable(
                name: "Mails");

            migrationBuilder.DropTable(
                name: "MailTempContents");

            migrationBuilder.DropTable(
                name: "MailTempContentTranslations");

            migrationBuilder.DropTable(
                name: "MailTempGroups");

            migrationBuilder.DropTable(
                name: "MailTypes");

            migrationBuilder.DropTable(
                name: "MenuItemTranslations");

            migrationBuilder.DropTable(
                name: "Menus");

            migrationBuilder.DropTable(
                name: "NewsTranslations");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropTable(
                name: "Settings");

            migrationBuilder.DropTable(
                name: "SettingTranslations");

            migrationBuilder.DropTable(
                name: "SocialNetworks");

            migrationBuilder.DropTable(
                name: "VideoGroupTranslations");

            migrationBuilder.DropTable(
                name: "VideoTranslations");

            migrationBuilder.DropTable(
                name: "AgencyInfos");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "CoreValues");

            migrationBuilder.DropTable(
                name: "FaqGroups");

            migrationBuilder.DropTable(
                name: "Faqs");

            migrationBuilder.DropTable(
                name: "MenuItems");

            migrationBuilder.DropTable(
                name: "News");

            migrationBuilder.DropTable(
                name: "VideoGroups");

            migrationBuilder.DropTable(
                name: "Videos");
        }
    }
}
