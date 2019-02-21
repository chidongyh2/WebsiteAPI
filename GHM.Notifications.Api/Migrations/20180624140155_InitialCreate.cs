using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Notifications.Api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Id = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    Title = table.Column<string>(maxLength: 256, nullable: false),
                    Content = table.Column<string>(maxLength: 4000, nullable: false),
                    SenderId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    SenderFullName = table.Column<string>(maxLength: 50, nullable: false),
                    SenderAvatar = table.Column<string>(unicode: false, maxLength: 500, nullable: false),
                    ReceiverId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Type = table.Column<int>(nullable: false),
                    IsRead = table.Column<bool>(nullable: false),
                    ReadTime = table.Column<DateTime>(nullable: true),
                    IsShow = table.Column<bool>(nullable: false),
                    Url = table.Column<string>(unicode: false, maxLength: 500, nullable: false),
                    Image = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserConnections",
                columns: table => new
                {
                    UserName = table.Column<string>(maxLength: 50, nullable: false),
                    ConnectionId = table.Column<string>(maxLength: 50, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserConnections", x => new { x.UserName, x.ConnectionId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "UserConnections");
        }
    }
}
