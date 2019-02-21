using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class UpdatePageTranslationToPageTranslations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_PageTranslation",
                table: "PageTranslation");

            migrationBuilder.RenameTable(
                name: "PageTranslation",
                newName: "PageTranslations");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PageTranslations",
                table: "PageTranslations",
                columns: new[] { "PageId", "LanguageId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_PageTranslations",
                table: "PageTranslations");

            migrationBuilder.RenameTable(
                name: "PageTranslations",
                newName: "PageTranslation");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PageTranslation",
                table: "PageTranslation",
                columns: new[] { "PageId", "LanguageId" });
        }
    }
}
