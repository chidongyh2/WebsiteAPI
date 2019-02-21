using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Core.Domain.IRepository
{
    public interface IEthnicRepository
    {
        Task<Ethnic> GetInfo(int id, bool isReadonly);
        Task<List<EthnicSearchViewModel>> GetAll(string languageId);
    }
}
