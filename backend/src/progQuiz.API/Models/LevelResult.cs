

namespace progQuiz.API.Models;

public class LevelResult
{
    public int ResultId { get; set; }
    public int UserId { get; set; }
    public int LevelId { get; set; } 
    public string Result { get; set; } 
    public DateTime PassingDate { get; set; } = DateTime.UtcNow;

    public User User { get; set; } 
    public Level Level { get; set; }
}