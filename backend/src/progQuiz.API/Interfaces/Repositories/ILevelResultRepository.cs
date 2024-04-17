using progQuiz.API.Models;

namespace progQuiz.API.Interfaces.Repository;

public interface ILevelResultRepository : IRepository<LevelResult>
{
    public Task<List<LevelResult>> GetResultsAsync(int userId);
}