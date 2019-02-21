using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Event.Domain.Constants;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Event.Infrastructure.Repository
{
    public class EventDayRepository : RepositoryBase, IEventDayRepository
    {
        private readonly IRepository<EventDay> _eventDayRepository;
        public EventDayRepository(IDbContext context) : base(context)
        {
            _eventDayRepository = Context.GetRepository<EventDay>();
        }

        public Task<List<EventDayViewModel>> Search(string languageId, string eventId, bool? isActive, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<EventDay, bool>> spec = x => !x.IsDelete;
            Expression<Func<EventDayTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(eventId))
            {
                spec = spec.And(x => x.EventId == eventId);
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<EventDay>().Where(spec)
                .Join(Context.Set<EventDayTranslation>().Where(specTranslation),
                    eventDay => eventDay.Id,
                    eventDayTranslation => eventDayTranslation.EventDayId,
                    (eventDay, eventDayTranslation) => new EventDayViewModel
                    {
                        Id = eventDay.Id,
                        ConcurrencyStamp = eventDay.ConcurrencyStamp,
                        IsActive = eventDay.IsActive,
                        EventId = eventId,
                        TotalRegisters = eventDay.TotalRegisters,
                        TotalAccompanyPersons = eventDay.TotalAccompanyPersons,
                        StartHour = eventDay.StartHour,
                        StartMinute = eventDay.StartMinute,
                        EndHour = eventDay.EndHour,
                        EndMinute = eventDay.EndMinute,
                        LimitedUsers = eventDay.LimitedUsers,
                        StaffOnly = eventDay.StaffOnly,
                        EventDate = eventDay.EventDate,
                        IsAllowAccompanyPerson = eventDay.IsAllowAccompanyPerson,
                        LimitedAccompanyPersons = eventDay.LimitedAccompanyPersons,
                        LanguageId = languageId,
                        Name = eventDayTranslation.Name,
                        Description = eventDayTranslation.Description,
                        Address = eventDayTranslation.Address
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(EventDay eventDay)
        {
            _eventDayRepository.Create(eventDay);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(EventDay eventDay)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string eventDayId)
        {
            var info = await GetInfo(eventDayId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string eventDayId)
        {
            var info = await GetInfo(eventDayId);
            if (info == null)
                return -1;

            _eventDayRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<EventDay> GetInfo(string eventDayId, bool isReadonly = false)
        {
            return await _eventDayRepository.GetAsync(isReadonly, x => x.Id == eventDayId && !x.IsDelete);
        }

        public async Task<int> UpdateTotal(string eventDayId, int totalRegisters, int totalAccompanyPersons)
        {
            var info = await GetInfo(eventDayId);
            if (info == null)
                return -1;

            info.TotalRegisters = totalRegisters;
            info.TotalAccompanyPersons = totalAccompanyPersons;
            return await Context.SaveChangesAsync();
        }
    
        public async Task<List<EventDay>> GetListEvenDayByEventId(string eventId, bool isReadonly = false)
        {
            return await _eventDayRepository.GetsAsync(isReadonly, x => x.EventId == eventId);
        }
    }
}
