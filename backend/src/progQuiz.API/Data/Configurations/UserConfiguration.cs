using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using progQuiz.API.Models;

namespace progQuiz.API.Data.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(u => u.UserId); 
        
        builder.HasMany(u => u.LevelResults)
               .WithOne(lr => lr.User)
               .HasForeignKey(lr => lr.UserId)
               .IsRequired();
    }
}