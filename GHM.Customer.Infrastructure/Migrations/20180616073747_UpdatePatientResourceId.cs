using Microsoft.EntityFrameworkCore.Migrations;

namespace GHM.Customer.Infrastructure.Migrations
{
    public partial class UpdatePatientResourceId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PatientResourceId",
                table: "Patients",
                nullable: true,
                oldClrType: typeof(int),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PatientResourceId",
                table: "Patients",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
