using System.ComponentModel.DataAnnotations;

namespace progQuiz.API.Helpers;

public class LoginRequest
{
    [Required(ErrorMessage = "Имя пользователя обязательно")]
    public string? Username { get; set; }

    [Required(ErrorMessage = "Пароль обязателен")]
    public string? Password { get; set; }
}