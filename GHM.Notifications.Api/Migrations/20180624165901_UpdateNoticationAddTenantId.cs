using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Notifications.Api.Migrations
{
    public partial class UpdateNoticationAddTenantId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TenantId",
                table: "Notifications",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TenantId",
                table: "Notifications");
        }
    }
}
