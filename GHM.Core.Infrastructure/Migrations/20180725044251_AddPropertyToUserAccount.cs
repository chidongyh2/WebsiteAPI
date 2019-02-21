using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class AddPropertyToUserAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UnsignName",
                table: "UserAccounts",
                maxLength: 500,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UnsignName",
                table: "UserAccounts");
        }
    }
}
