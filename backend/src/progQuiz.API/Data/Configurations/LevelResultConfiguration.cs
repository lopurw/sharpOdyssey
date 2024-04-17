using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using progQuiz.API.Models;

namespace progQuiz.API.Data.Configurations;

public class LevelResultConfiguration : IEntityTypeConfiguration<LevelResult>
{
    public void Configure(EntityTypeBuilder<LevelResult> builder)
    {
        builder.HasKey(lr => lr.ResultId);
     
        builder.HasOne(lr => lr.User)
            .WithMany(u => u.LevelResults)
            .HasForeignKey(lr => lr.UserId)
            .IsRequired();

        builder.HasOne(lr => lr.Level)
            .WithMany(l => l.LevelResults)
            .HasForeignKey(lr => lr.LevelId)
            .IsRequired();
    }
}