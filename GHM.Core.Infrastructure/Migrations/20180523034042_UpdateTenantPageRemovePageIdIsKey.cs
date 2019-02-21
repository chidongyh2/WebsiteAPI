using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class UpdateTenantPageRemovePageIdIsKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages");

            migrationBuilder.AlterColumn<int>(
                name: "PageId",
                table: "TenantsPages",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages",
                column: "TenantId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages");

            migrationBuilder.AlterColumn<string>(
                name: "PageId",
                table: "TenantsPages",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AddPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages",
                columns: new[] { "TenantId", "PageId" });
        }
    }
}
