using System.Security.Cryptography;
using progQuiz.API.Auth;
using progQuiz.API.Interfaces.Auth;
using progQuiz.API.Interfaces.Repository;
using progQuiz.API.Models;

namespace progQuiz.API.Services;

public class UserService
{
    private readonly IUserRepository _userRepository;
    private readonly IJwtProvider _jwtProvider;

    private readonly PasswordHasher _passwordHasher;
    public UserService(IUserRepository userRepository, PasswordHasher passwordHasher, IJwtProvider jwtProvider)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _jwtProvider = jwtProvider;
    }
    public async Task Register(string userName, string password, string email) 
    {
        var hashedPassword = _passwordHasher.Generate(password);
        var user = new User()
        {
            UserName = userName,
            Email = email,
            PasswordHash = hashedPassword

        };
        await _userRepository.CreateAsync(user);
    }
    public async Task<string> Login(string userName, string password) 
    {
        var user = await _userRepository.GetAsync(u => u.UserName == userName);
        var result = _passwordHasher.Verify(password, user.PasswordHash);
        if (result == false) 
        {
            throw new Exception("Failed");
        }
        var token = _jwtProvider.GenerateToken(user);
        return token;
    }
    public async Task<bool> ResetPassword(User user, string? requestPassword)
    {
        var hashedPassword = _passwordHasher.Generate(requestPassword);
        user.PasswordHash = hashedPassword;
        user.PasswordResetToken = null;
        user.PasswordResetTokenExpires = null;
        await _userRepository.UpdateAsync(user);
        return true;
    }
    private string GenerateToken()
    {
        return Convert.ToHexString(RandomNumberGenerator.GetBytes(64)); 
    }
    public async Task<string> ForgotPassword(User user)
    {
        user.PasswordResetToken = GenerateToken();
        user.PasswordResetTokenExpires = DateTime.UtcNow.AddDays(1);
        await _userRepository.UpdateAsync(user);
        return user.PasswordResetToken;
    }
}