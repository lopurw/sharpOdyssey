using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using progQuiz.API.DTOs;
using progQuiz.API.Helpers;
using progQuiz.API.Interfaces.Auth;
using progQuiz.API.Interfaces.Repository;
using progQuiz.API.Services;

namespace progQuiz.API.Controllers;

[Route("auth/")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly UserService _usersService;
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly IEmailService _emailService;

    public AuthController(UserService usersService, IUserRepository userRepository, IMapper mapper, IEmailService emailService)
    {
        _usersService = usersService;
        _userRepository = userRepository;
        _mapper = mapper;
        _emailService = emailService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        await _usersService.Register(request.Username, request.Password, request.Email);
        return Ok();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var token = await _usersService.Login(request.Username, request.Password);
        // Access HttpContext directly within action methods
        Response.Cookies.Append("cook", token);
        return Ok(new {token});
    }
    [Authorize]
    [HttpGet("user")]
    public async Task<IActionResult> GetCurrentUser()
    {
        int userId;
        try
        {
            userId = int.Parse(User.FindFirst("userId").Value);
        }
        catch (NullReferenceException e)
        {
            return Unauthorized("вы не авторизованы");
        }
        var user = _mapper.Map<UserDto>(await _userRepository.GetAsync(u => u.UserId == userId));
        return Ok(user);
    }
      private async Task<bool> SendResetPasswordEmail(string? email, string VerificationToken)
    {
        var confirmationLink = $"http://localhost:5173/ResetPassword/{VerificationToken}";
        
        var emailBody = $@"
            <html>
            <head>
                <style>
                    body {{
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }}
                    .container {{
                        max-width: 600px;
                        margin: 50px auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }}
                    .header {{
                        background-color: #007bff;
                        color: #ffffff;
                        padding: 20px;
                        text-align: center;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                    }}
                    .content {{
                        padding: 20px;
                    }}
                    .button {{
                        display: inline-block;
                        padding: 15px 32px;
                        background-color: #007bff;
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                    }}
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h1>Сброс пароля</h1>
                    </div>
                    <div class='content'>
                        <p>Здравствуйте,</p>

                        <p>Мы прислали вам это письмо, чтобы предоставить вам возможность сбросить пароль на сайте SharpOdyssey.</p>

                        <p>Чтобы сбросить ваш пароль, просто нажмите на кнопку ниже:</p>

                        <a href='{confirmationLink}' class='button'>Сбросить пароль</a>

                        <p>Если вы не запрашивали сброс пароля, пожалуйста, проигнорируйте это письмо.</p>

                        <p>С уважением,<br/>Команда SharpOdyssey</p>
                    </div>
                </div>
            </body>
            </html>";

        var result = await _emailService.SendEmailAsync(email, "Сброс пароля", emailBody);
        return result;
    }
    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword(string email)
    {
        var user = await _userRepository.GetAsync(u => u.Email == email);
        if (user == null)
        {
            return NotFound(new {Message = "Пользователя с этой почтой не существует"});
        }
        var token = await _usersService.ForgotPassword(user);
        var result = await SendResetPasswordEmail(email, token);
        if (result)
        {
            return Ok(new {Message = "Теперь вы можете сбросить свой пароль, пожалуйста, проверьте свой почтовый ящик"});
        }
        return BadRequest( new {Message = "Письмо не может быть отправлено"});
        
    }
    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword(ResetPasswordRequest request)
    {
        // ValidationResult validationResult = await _resetPasswordRequestValidator.ValidateAsync(request);
        // if (!validationResult.IsValid)
        // {
        //     return BadRequest(validationResult.ToDictionary());
        // }
        Console.WriteLine(request.Token);
        var user = await _userRepository.GetAsync(u => u.PasswordResetToken == request.Token);
        if (user == null)
        {
            return NotFound("Invalid Token");
        }

        if (user.PasswordResetTokenExpires < DateTime.UtcNow)
        {
            return Forbid();
        }

        var result = await _usersService.ResetPassword(user, request.Password);
        if (result)
        {
            return Ok(new {Message = "Password changed"});
        }
        return BadRequest("Password not changed");
        
    }
    
  
}