using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace progQuiz.API.Migrations
{
    /// <inheritdoc />
    public partial class LevelName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 1,
                column: "Name",
                value: "Введение в C#");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 2,
                column: "Name",
                value: "Управляющие конструкции");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 3,
                column: "Name",
                value: "Массивы и коллекции");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 4,
                column: "Name",
                value: "Методы и функции");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 5,
                column: "Name",
                value: "Объектно-ориентированное программирование");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 6,
                column: "Name",
                value: "Обработка ошибок и исключения");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 1,
                column: "Name",
                value: "Level 1");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 2,
                column: "Name",
                value: "Level 2");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 3,
                column: "Name",
                value: "Level 3");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 4,
                column: "Name",
                value: "Level 4");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 5,
                column: "Name",
                value: "Level 5");

            migrationBuilder.UpdateData(
                table: "Level",
                keyColumn: "LevelId",
                keyValue: 6,
                column: "Name",
                value: "Level 6");
        }
    }
}
