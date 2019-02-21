using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Core.Domain.IServices
{
    public interface IReligionService
    {
        Task<Religion> GetInfo(int id);
        Task<SearchResult<ReligionSearchViewModel>> GetForSelect(string languageId);
    }
}
