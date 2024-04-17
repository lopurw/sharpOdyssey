using Microsoft.EntityFrameworkCore;
using progQuiz.API.Data;
using progQuiz.API.Interfaces.Repository;
using progQuiz.API.Models;

namespace progQuiz.API.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    private readonly ApplicationDbContext _db;

    public UserRepository(ApplicationDbContext db) : base(db)
    {
        _db = db;
    }
    
    public async Task<User> GetByEmail(string email)  
    {
        var user = await _db.Users.
            AsNoTracking().FirstOrDefaultAsync(u => u.Email == email) ?? throw new Exception();
        return user;
    }
    public async Task<User> GetByUserName(string username)  
    {
        var user = await _db.Users.
            AsNoTracking().FirstOrDefaultAsync(u => u.UserName == username) ?? throw new Exception();
        return user;
    }

    public async Task<User> GetUserAsync(int id)
    {
        var user = await _db.Users.
            AsNoTracking().FirstOrDefaultAsync(u => u.UserId == id) ?? throw new Exception();
        return user;
    }
    
}