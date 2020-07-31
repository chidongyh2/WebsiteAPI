using GHM.Authentication.IRepository;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using GHM.Authentication.ViewModels;
using GHM.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Authentication.Repository
{
    public class UserAccountRepository : RepositoryBase, IUserAccountRepository
    {
        private readonly IRepository<UserAccount> _userAccountRepository;
        public UserAccountRepository(IDbContext context) : base(context)
        {
            _userAccountRepository = Context.GetRepository<UserAccount>();
        }

        public async Task<int> Insert(UserAccount userAccount)
        {
            _userAccountRepository.Create(userAccount);
            return await Context.SaveChangesAsync();
        }

        public async Task<string> GetUserIdAsync(UserAccount user, CancellationToken cancellationToken)
        {
            var result = await _userAccountRepository.GetAsync(true, x => x.UserName == user.UserName);
            return result != null ? result.Id : string.Empty;
        }

        public async Task<string> GetUserNameAsync(UserAccount user, CancellationToken cancellationToken)
        {
            UserAccount result = await _userAccountRepository.GetAsync(true, x => x.Id == user.Id);
            return result != null ? result.UserName : string.Empty;
        }

        public Task SetUserNameAsync(UserAccount user, string userName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<string> GetNormalizedUserNameAsync(UserAccount user, CancellationToken cancellationToken)
        {
            UserAccount result = await _userAccountRepository.GetAsync(true, x => x.Id == user.Id || x.UserName == user.UserName);
            return result == null ? string.Empty : result.NormalizedUserName;
        }

        public Task SetNormalizedUserNameAsync(UserAccount user, string normalizedName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<IdentityResult> CreateAsync(UserAccount user, CancellationToken cancellationToken)
        {
            // Check UserName Exists
            bool isUserNameExists = await CheckUserNameExists(user.Id, user.UserName);
            if (isUserNameExists)
            {
                return IdentityResult.Failed(new IdentityError
                {
                    Code = "-1",
                    Description = "Tên đăng nhập đã tồn tại. Vui lòng kiểm tra lại."
                });
            }

            // Check Email Exists
            bool isEmailExists = await CheckEmailExists(user.Id, user.Email);
            if (isEmailExists)
            {
                return IdentityResult.Failed(new IdentityError
                {
                    Code = "-2",
                    Description = "Email đã tồn tại. Vui lòng kiểm tra lại."
                });
            }

            user.NormalizedEmail = user.Email.ToUpperInvariant().StripVietnameseChars();
            user.NormalizedUserName = user.UserName.ToUpperInvariant().StripVietnameseChars();
            _userAccountRepository.Create(user);
            int result = await Context.SaveChangesAsync(cancellationToken);
            return result > 0
                ? IdentityResult.Success
                : IdentityResult.Failed(new IdentityError
                {
                    Code = "0",
                    Description = "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản Trị Viên."
                });
        }

        public async Task<IdentityResult> UpdateAsync(UserAccount user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<IdentityResult> DeleteAsync(UserAccount user, CancellationToken cancellationToken)
        {
            UserAccount userInfo = await GetInfoByUserName(user.Id);
            if (userInfo == null)
            {
                return IdentityResult.Failed(new IdentityError
                {
                    Code = "-1",
                    Description = "Thông tin người dùng cần xóa không tồn tại. Vui lòng kiểm tra lại."
                });
            }

            userInfo.IsDelete = true;
            int result = await Context.SaveChangesAsync(cancellationToken);
            return result <= 0
                ? IdentityResult.Failed(new IdentityError
                {
                    Code = "-2",
                    Description = "Xóa người dùng không thành công. Vui lòng liên hệ với Quản Trị Viên."
                })
                : IdentityResult.Success;
        }

        public async Task<UserAccount> FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            return await _userAccountRepository.GetAsync(true, x => x.Id == userId && !x.IsDelete);
        }

        public async Task<UserAccount> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            return await _userAccountRepository.GetAsync(true,
                x => x.NormalizedUserName == normalizedUserName && !x.IsDelete);
        }

        public Task SetPasswordHashAsync(UserAccount user, string passwordHash, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<string> GetPasswordHashAsync(UserAccount user, CancellationToken cancellationToken)
        {
            UserAccount result = await GetInfoByUserName(user.UserName, true);
            return result == null ? string.Empty : user.PasswordHash;
        }

        public async Task<bool> HasPasswordAsync(UserAccount user, CancellationToken cancellationToken)
        {
            return await _userAccountRepository.ExistAsync(
                x => x.Id == user.Id && !string.IsNullOrEmpty(x.PasswordHash));
        }

        public async Task<BriefUser> GetCurrentUser(string id)
        {
            return await _userAccountRepository.GetAsAsync(x => new BriefUser
            {
                Id = x.Id,
                UserName = x.UserName,
                Avatar = x.Avatar,
                PhoneNumber = x.PhoneNumber,
                Email = x.Email
            }, x => x.Id == id && x.IsActive && !x.IsDelete && !x.LockoutEnd.HasValue);
        }

        public Task<List<UserSuggestion>> Suggestions(string tenantId, string keyword, int page, int pageSize, out int totalRows)
        {

            Expression<Func<UserAccount, bool>> spec = x => !x.IsDelete && x.IsActive && x.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            Func<IQueryable<UserAccount>, IQueryable<UserAccount>> sort = Context.Filters.Sort<UserAccount, string>(u => u.Id);
            Func<IQueryable<UserAccount>, IQueryable<UserAccount>> paging = Context.Filters.Page<UserAccount>(page, pageSize);
            totalRows = _userAccountRepository.Count(spec);
            return _userAccountRepository.GetsAsAsync(x => new UserSuggestion
            {
                Id = x.Id,
                Name = x.FullName,
                Avatar = x.Avatar,
                UserName = x.UserName
            }, spec, sort, paging);
        }

        public async Task<UserAccount> GetInfo(string id, bool isReadOnly = false)
        {
            return await _userAccountRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete && !x.LockoutEnd.HasValue);
        }

        public async Task<UserAccount> GetInfoByUserName(string userName, bool isReadOnly = false)
        {
            return await _userAccountRepository.GetAsync(isReadOnly,
                x => x.NormalizedUserName.Equals(userName.ToUpper().Trim()) && x.IsActive && !x.IsDelete);
        }

        public async Task<bool> CheckUserNameExists(string id, string userName)
        {
            return await _userAccountRepository.ExistAsync(x => x.Id != id && x.UserName == userName.Trim() && !x.IsDelete);
        }

        public async Task<bool> CheckEmailExists(string id, string email)
        {
            return await _userAccountRepository.ExistAsync(x => x.Id != id && x.Email == email.Trim() && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByUserId(string userId)
        {
            return await _userAccountRepository.ExistAsync(x => x.Id == userId);
        }

        public int UpdateAccessFailCount(string userName, int failCount, bool lockoutOnFailure = false)
        {
            UserAccount info = Task.Run(() => GetInfoByUserName(userName)).Result;
            if (info == null)
            {
                return -1;
            }

            info.AccessFailedCount = failCount;
            if (lockoutOnFailure)
            {
                info.LockoutEnd = failCount >= 5 ? DateTime.Now.AddMinutes(5) : (DateTime?)null;
            }

            return Context.SaveChanges();
        }

        public async Task<int> UpdateUserAccount(UserAccount userAccount)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdatePassword(string userId, byte[] passwordSalt, string passwordHash)
        {
            return await Context.SaveChangesAsync();
        }

        public int ResetLockout(string userName)
        {
            UserAccount info = Task.Run(() => GetInfoByUserName(userName)).Result;
            if (info == null)
            {
                return -1;
            }

            info.LockoutEnd = null;
            info.AccessFailedCount = 0;
            return Context.SaveChanges();
        }

        public async Task<int> DeleteAccount(UserAccount userAccount)
        {
            _userAccountRepository.Delete(userAccount);
            return Context.SaveChanges();
        }

        public Task<List<UserAccountViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<UserAccount, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.UserName != "hoangit21";
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().ToUpper().StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            var query = Context.Set<UserAccount>()
                .Where(spec)
                .OrderByDescending(x => x.CreateTime)
                .Select(x => new UserAccountViewModel
                {
                    Id = x.Id,
                    UserName = x.UserName,
                    FullName = x.FullName,
                    IsActive = x.IsActive,
                    PhoneNumber = x.PhoneNumber,
                    Email = x.Email
                })
                .AsNoTracking();

            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<List<ShortUserInfoViewModel>> GetShortUserInfoByListIds(string tenantId, List<string> ids)
        {
            return await _userAccountRepository.GetsAsAsync(x => new ShortUserInfoViewModel
            {
                UserName = x.UserName,
                UserId = x.Id,
                Avatar = x.Avatar,
                FullName = x.FullName
            }, x => ids.Contains(x.Id) && x.TenantId == tenantId && !x.IsDelete && x.IsActive);
        }

        public async Task<UserAccount> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _userAccountRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }
    }
}
