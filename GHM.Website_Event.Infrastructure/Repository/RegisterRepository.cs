using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Event.Domain.Constants;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Event.Infrastructure.Repository
{
    public class RegisterRepository : RepositoryBase, IRegisterRepository
    {
        private readonly IRepository<Register> _registerRepository;
        public RegisterRepository(IDbContext context) : base(context)
        {
            _registerRepository = Context.GetRepository<Register>();
        }

        public Task<List<RegisterSearchViewModel>> Search(string eventId, string languageId, string fullName, string phoneNumber, string email, string eventDayId
            , EventDayStatus? status, RegisterRole? role, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Register, bool>> spec = x => x.EventId == eventId;

            if (!string.IsNullOrEmpty(fullName))
            {
                spec = spec.And(x => x.FullName == fullName);
            }

            if (!string.IsNullOrEmpty(phoneNumber))
            {
                spec = spec.And(x => x.PhoneNumber == phoneNumber);
            }

            if (!string.IsNullOrEmpty(email))
            {
                spec = spec.And(x => x.Email == email);
            }

            if (!string.IsNullOrEmpty(eventDayId))
            {
                spec = spec.And(x => x.EventId == eventDayId);
            }

            if (role.HasValue)
            {
                spec = spec.And(x => x.Role == role);
            }

            var query = Context.Set<Register>().Where(spec)
                .Select(x => new RegisterSearchViewModel
                {
                    Id = x.Id,
                    EventId = eventId,
                    FullName = x.FullName,
                    PhoneNumber = x.PhoneNumber,
                    Email = x.Email,
                    Address = x.Address,
                    Note = x.Note,
                    UserId = x.UserId,
                    RegisterTime = x.RegisterTime,
                    IsStaff = x.IsStaff,
                    Role = x.Role,
                    Avatar = x.Avatar,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.FullName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<RegisterSearchViewModel>> SearchClient(string eventId, string languageId, RegisterRole? role)
        {
            Expression<Func<Register, bool>> spec = x => x.EventId == eventId;

            if (role.HasValue)
            {
                spec = spec.And(x => x.Role == role);
            }
            else
            {
                spec = spec.And(x => x.Role == RegisterRole.Sponsor || x.Role == RegisterRole.Professional);
            }

            var query = Context.Set<Register>().Where(spec)
                .Select(x => new RegisterSearchViewModel
                {
                    Id = x.Id,
                    EventId = eventId,
                    FullName = x.FullName,
                    PhoneNumber = x.PhoneNumber,
                    Email = x.Email,
                    Address = x.Address,
                    Note = x.Note,
                    UserId = x.UserId,
                    RegisterTime = x.RegisterTime,
                    IsStaff = x.IsStaff,
                    Role = x.Role,
                    Avatar = x.Avatar,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                }).AsNoTracking();

            return query
                .OrderByDescending(x => x.FullName)
                .ToListAsync();
        }

        public async Task<int> Insert(Register register)
        {
            _registerRepository.Create(register);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Register register)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _registerRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Register> GetInfo(string id, bool isReadonly = false)
        {
            return await _registerRepository.GetAsync(isReadonly, x => x.Id == id);
        }

        public async Task<List<Register>> GetInfoByEventId(string eventId, bool isReadonly = false)
        {
            return await _registerRepository.GetsAsync(isReadonly, x => x.EventId == eventId);
        }

        public async Task<bool> CheckExists(string id, string eventId, string fullName, string phoneNunber)
        {
            return await _registerRepository.ExistAsync(x =>
                x.Id != id && x.EventId == eventId.Trim() && x.FullName == fullName.Trim() && x.PhoneNumber == phoneNunber.Trim());
        }
    }
}
