using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Interactive.Domain.Models;
using GHM.Interactive.Domain.ViewModels;

namespace GHM.Interactive.Domain.IRepositories
{
    public interface ICommentRepository
    {
        Task<int> Insert(Comment comment);
        Task<int> Update(Comment comment);
        Task<int> Delete(string id);
        Task<List<CommentForAdminViewModel>> SearchForAdmin(string id);
        Task<List<CommentForCustomerViewModel>> SearchForCustomer(string id);
    }
}
