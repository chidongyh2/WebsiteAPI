using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedic.Api.Migrations
{
    public partial class UpdateCategoryRemoveImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Category");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Category",
                maxLength: 500,
                nullable: false,
                defaultValue: "");
        }
    }
}
