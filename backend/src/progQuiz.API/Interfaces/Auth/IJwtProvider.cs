using progQuiz.API.Models;

namespace progQuiz.API.Interfaces.Auth;

public interface IJwtProvider
{
    public string GenerateToken(User user);
}