using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IContactRepository
    {
        Task<int> Insert(Contact contact);

        Task<int> Inserts(List<Contact> contacts);

        Task<int> Update(string id, Contact contact);

        Task<int> ForceDelete(string id, ContactType type);

        Task<Contact> GetInfo(string id, ContactType type, bool isReadOnly = false);

        Task<bool> CheckExistsById(string id, ContactType type, bool isReadOnly = false);

        Task<bool> CheckExists(string id, ContactType type, string subjectId, string fullName, string phoneNumber);

        Task<List<ContactSearchViewModel>> GetAll(string subjectId, ContactType type, bool isReadOnly = false);
    }

}
