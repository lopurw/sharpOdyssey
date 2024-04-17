using AutoMapper;
using progQuiz.API.DTOs;
using progQuiz.API.Models;

namespace progQuiz.API.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<LevelResult, LevelResultDto>().ForMember(a => a.levelResult, b => b.MapFrom(x => x.Result)).ReverseMap();
        CreateMap<Level, LevelDto>().ReverseMap();
        CreateMap<User, UserDto>().ReverseMap();
    }
}