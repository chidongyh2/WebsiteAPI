using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedic.Api.Migrations
{
    public partial class UpdateCategoryRemoveCreatorInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatorFullName",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Category");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatorFullName",
                table: "Category",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CreatorId",
                table: "Category",
                nullable: false,
                defaultValue: "");
        }
    }
}
