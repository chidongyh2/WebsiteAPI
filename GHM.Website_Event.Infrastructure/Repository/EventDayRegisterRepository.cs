using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Event.Domain.Constants;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Event.Infrastructure.Repository
{
    public class EventDayRegisterRepository : RepositoryBase, IEventDayRegisterRepository
    {
        private readonly IRepository<EventDayRegister> _eventDayRegisterRepository;
        public EventDayRegisterRepository(IDbContext context) : base(context)
        {
            _eventDayRegisterRepository = Context.GetRepository<EventDayRegister>();
        }

        public async Task<int> Insert(EventDayRegister eventDayRegister)
        {
            _eventDayRegisterRepository.Create(eventDayRegister);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string eventDayId, string registerId)
        {
            var info = await _eventDayRegisterRepository.GetsAsync(false, x => x.EventDayId == eventDayId && x.RegisterId == registerId);
            if (info == null || !info.Any())
                return -1;

            _eventDayRegisterRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByRegisterId(string registerId)
        {
            var info = await _eventDayRegisterRepository.GetsAsync(false, x => x.RegisterId == registerId);
            if (info == null || !info.Any())
                return -1;

            _eventDayRegisterRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<EventDayRegister> eventDayRegisters)
        {
            _eventDayRegisterRepository.Creates(eventDayRegisters);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Deletes(List<EventDayRegister> eventDayRegisters)
        {
            if (eventDayRegisters == null || !eventDayRegisters.Any())
                return -1;

            _eventDayRegisterRepository.Deletes(eventDayRegisters);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string eventDayId, string registerId)
        {
            return await _eventDayRegisterRepository.ExistAsync(x =>
                x.EventDayId == eventDayId && x.RegisterId == registerId);
        }

        public async Task<List<EventDayRegisterDetailViewModel>> GetListEventDaysRegisterDetail(string eventId, string registerId, string languageId)
        {
            return await Context.Set<EventDay>().Where(x => x.EventId == eventId && !x.IsDelete && x.IsActive)
                .Join(Context.Set<EventDayTranslation>().Where(x => x.LanguageId == languageId),
                    ed => ed.Id, edt => edt.EventDayId,
                    (edr, edt) => new { edr.Id, edt.Name, edr.EventDate })
                .GroupJoin(Context.Set<EventDayRegister>().Where(x => x.RegisterId == registerId),
                    ed => ed.Id, edr => edr.EventDayId, (ed, edr) => new { ed, edr })
                .SelectMany(x => x.edr.DefaultIfEmpty(), (x, edr) => new EventDayRegisterDetailViewModel
                {
                    EventDayId = x.ed.Id,
                    EventDayName = x.ed.Name,
                    EventDayDate = x.ed.EventDate,
                    RegisterId = edr.RegisterId,
                    Status = edr.Status,
                    IsSelected = edr != null
                }).AsNoTracking().ToListAsync();
        }

        //public async Task<List<EventDayRegisterViewModel>> GetListRegisterIds(string registerId, string languageId)
        //{
        //    return await Context.Set<EventDayRegister>().Where(x => x.RegisterId == registerId)
        //        .Join(Context.Set<EventDayTranslation>().Where(x => x.LanguageId == languageId),
        //            edr => edr.EventDayId, edt => edt.EventDayId,
        //            (edr, edt) => new EventDayRegisterViewModel
        //            {
        //                Id = edr.EventDayId,
        //                Status = edr.Status,
        //                RegisterId = edr.RegisterId,
        //                Name = edt.Name
        //            }).AsNoTracking().ToListAsync();
        //}

        public async Task<List<EventDayRegisterViewModel>> GetListEventDayRegister(string registerId, string languageId, EventDayStatus? status)
        {
            Expression<Func<EventDayTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            Expression<Func<EventDayRegister, bool>> specEventDayRegister = x => x.RegisterId == registerId;

            if (status.HasValue)
            {
                specEventDayRegister = specEventDayRegister.And(x => x.Status == status.Value);
            }

            var query = Context.Set<EventDayRegister>().Where(specEventDayRegister)
                .Join(Context.Set<EventDayTranslation>().Where(specTranslation),
                    eventDayRegister => eventDayRegister.EventDayId,
                    eventDayTranslation => eventDayTranslation.EventDayId,
                    (eventDayRegister, eventDayTranslation) => new EventDayRegisterViewModel
                    {
                        RegisterId = registerId,
                        Id = eventDayRegister.EventDayId,
                        Status = eventDayRegister.Status,
                        Name = eventDayTranslation.Name
                    }).AsNoTracking();

            return await query.ToListAsync();
        }

        public async Task<int> CountByEventDayId(string eventDayId)
        {
            return await _eventDayRegisterRepository.CountAsync(x => x.EventDayId == eventDayId);
        }

        public async Task<int> UpdateStatus(string eventDayId, string registerId, EventDayStatus status)
        {
            var info = await _eventDayRegisterRepository.GetAsync(false, x => x.RegisterId == registerId && x.EventDayId == eventDayId);
            if (info == null)
                return -1;

            info.Status = status;
            return await Context.SaveChangesAsync();
        }
    }
}
