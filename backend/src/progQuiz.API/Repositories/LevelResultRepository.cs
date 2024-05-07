using Microsoft.EntityFrameworkCore;
using progQuiz.API.Data;
using progQuiz.API.Interfaces.Repository;
using progQuiz.API.Models;

namespace progQuiz.API.Repositories;

public class LevelResultRepository : Repository<LevelResult>, ILevelResultRepository
{
    private readonly ApplicationDbContext _db;

    public LevelResultRepository(ApplicationDbContext db) : base(db)
    {
        _db = db;
    }

    public async Task<List<LevelResult>> GetResultsAsync(int userId)
    {
        // var results = await _db.LevelResults
        //     .Where(a => a.UserId == userId)
        //     .GroupBy(a => a.LevelId)
        //     .Select(group => group.OrderByDescending(a => a.Result).First())
        //     .ToListAsync();
        var results = await _db.LevelResults
            .Where(a => a.UserId == userId)
            .GroupBy(a => a.LevelId)
            .Select(group => group.OrderByDescending(a => a.PassingDate).First())
            .ToListAsync();
        
        return results;
    }
}