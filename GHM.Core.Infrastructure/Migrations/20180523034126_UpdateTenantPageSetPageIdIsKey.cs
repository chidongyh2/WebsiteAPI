using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class UpdateTenantPageSetPageIdIsKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages",
                columns: new[] { "TenantId", "PageId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TenantsPages",
                table: "TenantsPages",
                column: "TenantId");
        }
    }
}
