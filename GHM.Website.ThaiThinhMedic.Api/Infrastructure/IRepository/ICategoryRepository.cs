using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface ICategoryRepository
    {
        Task<ActionResultResponse> Insert(Category category);

        Task<ActionResultResponse> Update(Category category);

        Task<ActionResultResponse> Delete(int id);

        Task<Category> GetInfo(int id, bool isReadOnly = false);

        Task<bool> CheckExistsByName(int id, string name);

        Task<List<Category>> Search(string keyword, bool? isActive, int page, int pageSize, out long totalRows);

        Task<List<T>> Search<T>(Expression<Func<Category, T>> projector, string keyword, bool? isActive, int page, int pageSize, out long totalRows);

        Task<List<Category>> GetAll();

        Task<List<Category>> GetAllActive();

        Task<ActionResultResponse> UpdateActiveStatus(int id, bool isActive);

        Task<int> GetChildCount(int id);

        Task UpdateChildIdPath(int parentId);
    }
}
