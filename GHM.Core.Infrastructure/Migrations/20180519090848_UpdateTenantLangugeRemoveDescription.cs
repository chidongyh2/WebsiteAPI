using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class UpdateTenantLangugeRemoveDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "TenantLanguages");

            migrationBuilder.AddColumn<bool>(
                name: "IsDelete",
                table: "TenantLanguages",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDelete",
                table: "TenantLanguages");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "TenantLanguages",
                maxLength: 500,
                nullable: true);
        }
    }
}
