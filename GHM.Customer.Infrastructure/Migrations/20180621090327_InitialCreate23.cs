using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Customer.Infrastructure.Migrations
{
    public partial class InitialCreate23 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Test",
                table: "testTranslations");

            migrationBuilder.DropColumn(
                name: "Test",
                table: "tests");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Test",
                table: "testTranslations",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Test",
                table: "tests",
                maxLength: 50,
                nullable: false,
                defaultValue: "");
        }
    }
}
