namespace progQuiz.API.Models;

public class Level
{
    public int LevelId { get; set; }
    public string Name { get; set; }
    public string Theory { get; set; }
   
    public ICollection<LevelResult> LevelResults { get; set; }
    
}
