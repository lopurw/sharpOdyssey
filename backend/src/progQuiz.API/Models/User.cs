namespace progQuiz.API.Models;

public class User
{
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string PasswordHash { get; set; }
    public string Email { get; set; }
    
    public int Stars { get; set; } = 0;
    public ICollection<LevelResult> LevelResults { get; set; }
    
    public string? PasswordResetToken { get; set; }
    public DateTime? PasswordResetTokenExpires { get; set; }
    public DateTime? LastRewardTime { get; set; }

}