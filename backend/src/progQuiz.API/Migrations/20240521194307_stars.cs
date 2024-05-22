using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace progQuiz.API.Migrations
{
    /// <inheritdoc />
    public partial class stars : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Stars",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Stars",
                table: "Users");
        }
    }
}
