using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedic.Api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ads",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    Image = table.Column<string>(maxLength: 500, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    Url = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ads", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorFullName = table.Column<string>(maxLength: 50, nullable: false),
                    CreatorId = table.Column<string>(nullable: false),
                    Description = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    IdPath = table.Column<string>(maxLength: 4000, nullable: false),
                    Image = table.Column<string>(maxLength: 500, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    ParentId = table.Column<int>(nullable: true),
                    SeoLink = table.Column<string>(maxLength: 500, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Classes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Address = table.Column<string>(maxLength: 500, nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    EndDate = table.Column<DateTime>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    StartDate = table.Column<DateTime>(nullable: true),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Course",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Content = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    SeoLink = table.Column<string>(unicode: false, maxLength: 256, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CourseRegister",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Address = table.Column<string>(maxLength: 500, nullable: false),
                    ClassId = table.Column<int>(nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(maxLength: 500, nullable: true),
                    FullName = table.Column<string>(maxLength: 50, nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Note = table.Column<string>(maxLength: 4000, nullable: true),
                    PhoneNumber = table.Column<string>(maxLength: 20, nullable: false),
                    Status = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseRegister", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Faq",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Answer = table.Column<string>(maxLength: 4000, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<string>(nullable: false),
                    CreatorName = table.Column<string>(maxLength: 50, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Question = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faq", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Content = table.Column<string>(maxLength: 2000, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CustomerId = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 500, nullable: true),
                    FullName = table.Column<string>(maxLength: 50, nullable: false),
                    PhoneNumber = table.Column<string>(maxLength: 20, nullable: false),
                    UnsignName = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedback", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Menu",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ChildCount = table.Column<int>(nullable: false, defaultValue: 0),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Icon = table.Column<string>(maxLength: 20, nullable: true),
                    IdPath = table.Column<string>(maxLength: 500, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 500, nullable: false),
                    NamePath = table.Column<string>(maxLength: 4000, nullable: false),
                    Order = table.Column<int>(nullable: false),
                    ParentId = table.Column<int>(nullable: true),
                    ReferenceId = table.Column<int>(nullable: true),
                    ReferenceType = table.Column<int>(nullable: false),
                    UnsignName = table.Column<string>(maxLength: 500, nullable: false),
                    Url = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menu", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "News",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attachments = table.Column<string>(maxLength: 500, nullable: true),
                    CommentCount = table.Column<int>(nullable: false),
                    Content = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    CreatorFullName = table.Column<string>(maxLength: 50, nullable: false),
                    CreatorId = table.Column<string>(nullable: false),
                    CreatorImage = table.Column<string>(maxLength: 500, nullable: true),
                    Description = table.Column<string>(maxLength: 500, nullable: false),
                    Image = table.Column<string>(maxLength: 500, nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsHomePage = table.Column<bool>(nullable: false),
                    IsHot = table.Column<bool>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    LikeCount = table.Column<int>(nullable: false),
                    Priority = table.Column<int>(nullable: true),
                    Source = table.Column<string>(maxLength: 500, nullable: true),
                    Title = table.Column<string>(maxLength: 250, nullable: false),
                    UnsignName = table.Column<string>(maxLength: 250, nullable: false),
                    ViewCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_News", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NewsCategory",
                columns: table => new
                {
                    NewsId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    CategoryIsActive = table.Column<bool>(nullable: false),
                    CategoryName = table.Column<string>(maxLength: 250, nullable: false),
                    CategorySeoLink = table.Column<string>(maxLength: 500, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Id = table.Column<int>(nullable: false),
                    NewsSeoLink = table.Column<string>(maxLength: 1000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsCategory", x => new { x.NewsId, x.CategoryId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ads");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "Classes");

            migrationBuilder.DropTable(
                name: "Course");

            migrationBuilder.DropTable(
                name: "CourseRegister");

            migrationBuilder.DropTable(
                name: "Faq");

            migrationBuilder.DropTable(
                name: "Feedback");

            migrationBuilder.DropTable(
                name: "Menu");

            migrationBuilder.DropTable(
                name: "News");

            migrationBuilder.DropTable(
                name: "NewsCategory");
        }
    }
}
