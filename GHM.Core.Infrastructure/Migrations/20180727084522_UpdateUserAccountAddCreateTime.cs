using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class UpdateUserAccountAddCreateTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreateTime",
                table: "UserAccounts",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreateTime",
                table: "UserAccounts");
        }
    }
}
