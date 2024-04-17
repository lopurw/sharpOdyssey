using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using progQuiz.API.Models;

namespace progQuiz.API.Data.Configurations;

public class LevelConfiguration : IEntityTypeConfiguration<Level>
{
    public void Configure(EntityTypeBuilder<Level> builder)
    {
        builder.HasKey(l => l.LevelId); 
        
        builder.HasMany(l => l.LevelResults)
            .WithOne(lr => lr.Level)
            .HasForeignKey(lr => lr.LevelId)
            .IsRequired();
    }
}