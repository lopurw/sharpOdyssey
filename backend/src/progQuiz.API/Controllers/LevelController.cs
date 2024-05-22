using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using progQuiz.API.DTOs;
using progQuiz.API.Interfaces.Repository;
using progQuiz.API.Models;

namespace progQuiz.API.Controllers;
[ApiController]
[Route("api/level")]
public class LevelController : ControllerBase
{
    private readonly IRepository<Level> _levelRepository;
    private readonly ILevelResultRepository _resultRepository;
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public LevelController(IRepository<Level> levelRepository, IMapper mapper, ILevelResultRepository resultRepository, IUserRepository userRepository)
    {
        _levelRepository = levelRepository;
        _mapper = mapper;
        _resultRepository = resultRepository;
        _userRepository = userRepository;
    }
    [Authorize]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetLevel(int id)
    {
        var level = _mapper.Map<LevelDto>(await _levelRepository.GetAsync(
            filter: a => a.LevelId == id,
            includeProperties: ""
        ));
        if (level == null)
        {
            return NotFound();
        }
        
        return Ok(level);
    }
    [Authorize]
    [HttpGet("daily")]
    public async Task<IActionResult> DailyReward()
    {
        var userId = int.Parse(User.FindFirst("userId").Value);
        var user = await _userRepository.GetAsync(u => u.UserId == userId);

        var lastRewardTime = user.LastRewardTime;
        if (lastRewardTime == null || (DateTime.UtcNow - lastRewardTime.Value).TotalHours >= 24)
        {
            user.Stars += 1;
            user.LastRewardTime = DateTime.UtcNow;
            await _userRepository.UpdateAsync(user);
            return Ok(new { Message = "Вы получили 1 звездочку", canClaim = true });
        }

        return Ok(new { Message = "Ежедневная награда уже получена", canClaim = false });
    }

    [Authorize]
    [HttpGet]
    [Route( "results")]
    
    public async Task<IActionResult> GetResults()
    {
        var userId = int.Parse(User.FindFirst("userId").Value);
        var user = await _userRepository.GetAsync(u => u.UserId == userId);
        var results =  _mapper.Map<List<LevelResultDto>>(await _resultRepository.GetResultsAsync(userId));
        int totalSum = results.Sum(r => int.Parse(r.levelResult)) + user.Stars;
        return Ok(new {totalSum, results});
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> CreateResult(LevelResultDto res)
    {
        var newResult = new LevelResult
        {
            LevelId = res.LevelId,
            Result = res.levelResult
        };
        int userId;
        try
        {
            userId = int.Parse(User.FindFirst("userId").Value);
        }
        catch (NullReferenceException e)
        {
            return Unauthorized("Вы не авторизованы");
        }
        
        newResult.UserId = userId;
        await _resultRepository.CreateAsync(newResult);
        return Ok(new { Result = newResult, Id = newResult.ResultId });
    }
    
}