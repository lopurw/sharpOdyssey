using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace progQuiz.API.Migrations
{
    /// <inheritdoc />
    public partial class LevelLength : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Length",
                table: "Level",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 1,
                column: "Length",
                value: 9);

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 2,
                column: "Length",
                value: 8);

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 3,
                column: "Length",
                value: 9);

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 4,
                column: "Length",
                value: 8);

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 5,
                column: "Length",
                value: 14);

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 6,
                column: "Length",
                value: 11);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Length",
                table: "Level");
        }
    }
}
