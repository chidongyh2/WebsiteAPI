using GHM.Infrastructure.SqlServer;
using GHM.Product.Domain.Constants;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace GHM.Product.Infrastructure.Repository
{
    public class ContactRepository : RepositoryBase, IContactRepository
    {
        private readonly IRepository<Contact> _contactRepository;

        public ContactRepository(IDbContext context) : base(context)
        {
            _contactRepository = Context.GetRepository<Contact>();
        }

        public async Task<bool> CheckExistsById(string id, ContactType type, bool isReadOnly = false)
        {
            return await _contactRepository.ExistAsync(x => x.Id == id && x.Type == type);
        }

        public async Task<bool> CheckExists(string id, ContactType type, string subjectId, string fullName, string phoneNumber)
        {
            fullName = fullName.Trim();
            phoneNumber = phoneNumber.Trim();
            return await _contactRepository.ExistAsync(x =>
                (string.IsNullOrEmpty(id) || x.Id != id) && x.Type == type && x.SubjectId == subjectId && x.FullName == fullName && x.PhoneNumber == phoneNumber);
        }

        public async Task<int> ForceDelete(string id, ContactType type)
        {
            var contactInfo = await GetInfo(id, type);
            if (contactInfo == null)
                return -1;

            _contactRepository.Delete(contactInfo);
            return await Context.SaveChangesAsync();
        }

        public Task<List<ContactSearchViewModel>> GetAll(string subjectId, ContactType type, bool isReadOnly = false)
        {
            Expression<Func<Contact, bool>> spec = t => t.SubjectId == subjectId && t.Type == type;

            var query = Context.Set<Contact>().Where(spec)
                    .Select(t => new ContactSearchViewModel
                    {
                        Email = t.Email,
                        FullName = t.FullName,
                        Id = t.Id,
                        PhoneNumber = t.PhoneNumber,
                        PositionName = t.PositionName,
                        Description = t.Description,
                        ConcurrencyStamp = t.ConcurrencyStamp,
                        Status = t.Status
                    });

            return query.AsNoTracking().OrderByDescending(x => x.FullName)
                .ToListAsync();
        }

        public async Task<Contact> GetInfo(string id, ContactType type, bool isReadOnly = false)
        {
            return await _contactRepository.GetAsync(isReadOnly, x => x.Id == id && x.Type == type);
        }

        public async Task<int> Insert(Contact contact)
        {
            _contactRepository.Create(contact);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<Contact> contacts)
        {
            _contactRepository.Creates(contacts);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, Contact contact)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
