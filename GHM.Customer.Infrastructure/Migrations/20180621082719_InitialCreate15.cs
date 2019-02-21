using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Customer.Infrastructure.Migrations
{
    public partial class InitialCreate15 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 100, nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    TenantId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    PatientCode = table.Column<string>(maxLength: 50, nullable: true),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 100, nullable: false),
                    Birthday = table.Column<DateTime>(maxLength: 100, nullable: false),
                    Gender = table.Column<int>(nullable: true),
                    PatientResourceId = table.Column<string>(maxLength: 50, nullable: true),
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
                    AddressContact = table.Column<string>(maxLength: 500, nullable: true),
                    Email = table.Column<string>(maxLength: 100, nullable: false),
                    PhoneNumber = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patients");
        }
    }
}
