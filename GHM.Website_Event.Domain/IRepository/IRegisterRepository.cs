
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Website.Event.Domain.IRepository
{
    public  interface IRegisterRepository
    {
        Task<List<RegisterSearchViewModel>> Search(string eventId,string languageId, string fullName, string phoneNumber, string email,
            string eventDayId, EventDayStatus? status, RegisterRole? role, int page, int pageSize, out int totalRows);

        Task<List<RegisterSearchViewModel>> SearchClient(string eventId, string languageId, RegisterRole? role);

        Task<int> Insert(Register register);

        Task<int> Update(Register register);

        Task<int> Delete(string id);

        Task<Register> GetInfo(string id, bool isReadonly = false);

        Task<List<Register>> GetInfoByEventId(string eventId, bool isReadonly = false);

        Task<bool> CheckExists(string id, string eventId, string fullName, string phoneNunber);
    }
}
