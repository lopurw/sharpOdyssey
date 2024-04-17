using System.ComponentModel.DataAnnotations;

namespace progQuiz.API.DTOs;

public class LevelResultDto
{
    [Required]
    public int LevelId { get; set; } 
    public string? levelResult { get; set; } 
    
}