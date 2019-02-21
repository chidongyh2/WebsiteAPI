using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Notifications.Api.Migrations
{
    public partial class UpdateNotificationSenderAvatarAllowNull : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SenderAvatar",
                table: "Notifications",
                unicode: false,
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 500);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SenderAvatar",
                table: "Notifications",
                unicode: false,
                maxLength: 500,
                nullable: false,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 500,
                oldNullable: true);
        }
    }
}
