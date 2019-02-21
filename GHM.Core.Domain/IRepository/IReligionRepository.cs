using GHM.Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace GHM.Core.Domain.IRepository
{
    public interface IReligionRepository
    {
        Task<Religion> GetInfo(int id, bool isReadonly);
        Task<List<T>> GetForSelect<T>(Expression<Func<Religion, T>> projector, string languageId);
    }
}
