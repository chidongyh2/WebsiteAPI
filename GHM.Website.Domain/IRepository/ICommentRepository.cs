using GHM.Website.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IRepository
{
    public interface ICommentRepository
    {
        Task<List<Comment>> Search(string tenantId, bool? isShow, int page, int pageSize, out int totalRows);
    }
}
