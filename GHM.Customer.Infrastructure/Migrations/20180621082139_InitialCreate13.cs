using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Customer.Infrastructure.Migrations
{
    public partial class InitialCreate13 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patients");

            migrationBuilder.CreateTable(
                name: "tests",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tests", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tests");

            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AddressContact = table.Column<string>(nullable: true),
                    Birthday = table.Column<DateTime>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    DistrictId = table.Column<int>(nullable: true),
                    DistrictName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    EthnicsId = table.Column<int>(nullable: true),
                    EthnicsName = table.Column<string>(nullable: true),
                    Gender = table.Column<int>(nullable: true),
                    IdCardNumber = table.Column<string>(nullable: true),
                    JobId = table.Column<int>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    NationalId = table.Column<int>(nullable: true),
                    NationalName = table.Column<string>(nullable: true),
                    PatientCode = table.Column<string>(nullable: true),
                    PatientResourceId = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    ProvinceId = table.Column<int>(nullable: true),
                    ProvinceName = table.Column<string>(nullable: true),
                    ReligionId = table.Column<int>(nullable: true),
                    ReligionName = table.Column<string>(nullable: true),
                    TenantId = table.Column<string>(nullable: true),
                    UnsignName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Id);
                });
        }
    }
}
