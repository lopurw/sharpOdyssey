using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using progQuiz.API.DTOs;
using progQuiz.API.Helpers;
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

    public AuthController(UserService usersService, IUserRepository userRepository, IMapper mapper)
    {
        _usersService = usersService;
        _userRepository = userRepository;
        _mapper = mapper;
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

}