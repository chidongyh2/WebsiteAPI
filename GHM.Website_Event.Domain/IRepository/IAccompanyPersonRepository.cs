using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Website.Event.Domain.IRepository
{
    public interface IAccompanyPersonRepository
    {
        Task<int> Insert(AccompanyPerson accompanyPerson);

        Task<int> Update(AccompanyPerson accompanyPerson);

        Task<int> Inserts(List<AccompanyPerson> accompanyPersons);

        Task<int> DeleteByRegisterId(string registerId);

        Task<int> Delete(string id);

        Task<AccompanyPerson> GetInfo(string id, bool isReadOnly = false);

        Task<List<AccompanyPerson>> GetByRegisterId(string registerId, bool isReadOnly = false);

        Task<List<AccompanyPersonSearchViewModel>> Search(string registerId, string languageId);

        Task<int> CountByEventDayId(string eventDayId);

        Task<int> UpdateStatus(string id, EventDayStatus status);
    }
}
