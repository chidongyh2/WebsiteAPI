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
    public class AccompanyPersonRepository : RepositoryBase, IAccompanyPersonRepository
    {
        private readonly IRepository<AccompanyPerson> _accompanyPersonRepository;

        public AccompanyPersonRepository(IDbContext context) : base(context)
        {
            _accompanyPersonRepository = Context.GetRepository<AccompanyPerson>();
        }

        public async Task<int> Insert(AccompanyPerson accompanyPerson)
        {
            _accompanyPersonRepository.Create(accompanyPerson);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AccompanyPerson accompanyPerson)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<AccompanyPerson> accompanyPersons)
        {
            _accompanyPersonRepository.Creates(accompanyPersons);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByRegisterId(string registerId)
        {
            var info = await _accompanyPersonRepository.GetsAsync(false, x => x.RegisterId == registerId);
            if (info == null || !info.Any())
                return -1;
            _accompanyPersonRepository.Deletes(info);

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var info = await _accompanyPersonRepository.GetsAsync(false, x => x.Id == id);
            if (info == null || !info.Any())
                return -1;
            _accompanyPersonRepository.Deletes(info);

            return await Context.SaveChangesAsync();
        }

        public async Task<AccompanyPerson> GetInfo(string id, bool isReadOnly = false)
        {
            return await _accompanyPersonRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<List<AccompanyPerson>> GetByRegisterId(string registerId, bool isReadOnly = false)
        {
            return await _accompanyPersonRepository.GetsAsync(isReadOnly, x => x.RegisterId == registerId);
        }

        public async Task<List<AccompanyPersonSearchViewModel>> Search(string registerId, string languageId)
        {
            Expression<Func<AccompanyPerson, bool>> spec = x => x.RegisterId == registerId;
            Expression<Func<EventDayTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            var query = Context.Set<AccompanyPerson>().Where(spec)
                .Join(Context.Set<EventDayTranslation>().Where(specTranslation),
                    accompanyPerson => accompanyPerson.EventDayId,
                    eventDayTranslation => eventDayTranslation.EventDayId,
                    (accompanyPerson, eventDayTranslation) => new AccompanyPersonSearchViewModel
                    {
                        Id = accompanyPerson.Id,
                        RegisterId = registerId,
                        FullName = accompanyPerson.FullName,
                        PhoneNumber = accompanyPerson.PhoneNumber,
                        Status = accompanyPerson.Status,
                        EventDayId = accompanyPerson.EventDayId,
                        EventDayName = eventDayTranslation.Name
                    }).AsNoTracking();

            return await query.ToListAsync();
        }

        public async Task<int> CountByEventDayId(string eventDayId)
        {
            return await _accompanyPersonRepository.CountAsync(x => x.EventDayId == eventDayId);
        }

        public async Task<int> UpdateStatus(string id, EventDayStatus status)
        {
            var info = await _accompanyPersonRepository.GetAsync(false, x => x.Id == id);
            if (info == null)
                return -1;

            info.Status = status;
            return await Context.SaveChangesAsync();
        }
    }
}
