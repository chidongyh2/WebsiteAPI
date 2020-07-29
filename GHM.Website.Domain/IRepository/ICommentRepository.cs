using GHM.Website.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IRepository
{
    public interface ICommentRepository
    {
        Task<List<Comment>> Search(string tenantId, bool? isShow, int page, int pageSize, out int totalRows);

        Task<Comment> GetInfo(string tenantId, int id, bool isReadOnly = false);

        Task<int> Update(Comment comment);

        Task<int> Delete(string tenantId, int id);
    }
}
