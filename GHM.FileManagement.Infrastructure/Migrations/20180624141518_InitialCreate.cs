using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.FileManagement.Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    Id = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    Type = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Size = table.Column<int>(nullable: false),
                    Url = table.Column<string>(unicode: false, maxLength: 500, nullable: false),
                    CreatorId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    CreatorFullName = table.Column<string>(maxLength: 50, nullable: false),
                    Avatar = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    Extension = table.Column<string>(unicode: false, maxLength: 10, nullable: true),
                    FolderId = table.Column<string>(unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Files");
        }
    }
}
