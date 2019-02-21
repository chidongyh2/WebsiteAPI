using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Core.Domain.IServices
{
    public interface IEthnicService
    {
        Task<SearchResult<EthnicSearchViewModel>> SearchEthnicAll(string languageId);

        Task<Ethnic> GetInfo(int id);
    }
}
