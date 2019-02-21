using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Notifications.Api.Migrations
{
    public partial class UpdateNotificationAndUserConnection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "UserConnections",
                newName: "UserId");

            migrationBuilder.AlterColumn<string>(
                name: "TenantId",
                table: "Notifications",
                unicode: false,
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Notifications",
                unicode: false,
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "UserConnections",
                newName: "UserName");

            migrationBuilder.AlterColumn<string>(
                name: "TenantId",
                table: "Notifications",
                nullable: true,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Notifications",
                nullable: true,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 500,
                oldNullable: true);
        }
    }
}
