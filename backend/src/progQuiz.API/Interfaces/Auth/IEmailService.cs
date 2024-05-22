namespace progQuiz.API.Interfaces.Auth;

public interface IEmailService
{
    public Task<bool> SendEmailAsync(string toEmail, string subject, string body);
}