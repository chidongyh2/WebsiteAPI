using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Customer.Infrastructure.Migrations
{
    public partial class CreateDatabasePatient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactPatients",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    PatientId = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(maxLength: 100, nullable: false),
                    PhoneNumber = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactPatients", x => x.Id);
                });            

            migrationBuilder.CreateTable(
                name: "PatientContacts",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    PatientId = table.Column<string>(nullable: true),
                    ContactType = table.Column<int>(nullable: false),
                    ContactValue = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientContacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PatientResources",
                columns: table => new
                {
                    Id = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    TenantId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Order = table.Column<int>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientResources", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PatientResourceTranslations",
                columns: table => new
                {
                    PatientResourceId = table.Column<string>(maxLength: 50, nullable: false),
                    LanguageId = table.Column<string>(unicode: false, maxLength: 10, nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 256, nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientResourceTranslations", x => new { x.PatientResourceId, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 100, nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    TenantId = table.Column<string>(nullable: false),
                    PatientCode = table.Column<string>(maxLength: 50, nullable: true),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 100, nullable: false),
                    Birthday = table.Column<DateTime>(maxLength: 100, nullable: false),
                    Gender = table.Column<int>(nullable: true),
                    PatientSourceId = table.Column<int>(nullable: true),
                    IdCardNumber = table.Column<string>(maxLength: 30, nullable: true),
                    JobId = table.Column<int>(nullable: true),
                    NationalId = table.Column<int>(nullable: true),
                    NationalName = table.Column<string>(maxLength: 150, nullable: true),
                    EthnicsId = table.Column<int>(nullable: true),
                    EthnicsName = table.Column<string>(maxLength: 150, nullable: true),
                    ReligionId = table.Column<int>(nullable: true),
                    ReligionName = table.Column<string>(maxLength: 150, nullable: true),
                    ProvinceId = table.Column<int>(nullable: true),
                    ProvinceName = table.Column<string>(maxLength: 150, nullable: true),
                    DistrictId = table.Column<int>(nullable: true),
                    DistrictName = table.Column<string>(maxLength: 150, nullable: true),
                    AddressContact = table.Column<string>(maxLength: 500, nullable: false),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PatientSubjects",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    TenantId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    TotalReduction = table.Column<float>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientSubjects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PatientSubjectTranslations",
                columns: table => new
                {
                    PatientSubjectId = table.Column<string>(nullable: false),
                    LanguageId = table.Column<string>(unicode: false, maxLength: 30, nullable: false),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 250, nullable: false),
                    Description = table.Column<string>(maxLength: 4000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientSubjectTranslations", x => new { x.PatientSubjectId, x.LanguageId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactPatients");

            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "JobTranslations");

            migrationBuilder.DropTable(
                name: "PatientContacts");

            migrationBuilder.DropTable(
                name: "PatientResources");

            migrationBuilder.DropTable(
                name: "PatientResourceTranslations");

            migrationBuilder.DropTable(
                name: "Patients");

            migrationBuilder.DropTable(
                name: "PatientSubjects");

            migrationBuilder.DropTable(
                name: "PatientSubjectTranslations");
        }
    }
}
