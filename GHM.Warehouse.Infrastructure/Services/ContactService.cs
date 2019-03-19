using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class ContactService : IContactService
    {
        private readonly ISupplierRepository _supplierRepository;
        private readonly IContactRepository _contactRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public ContactService(ISupplierRepository supplierRepository, IContactRepository contactRepository,
                IResourceService<SharedResource> sharedResourceService,
                IResourceService<GhmWarehouseResource> resourceService)
        {
            _supplierRepository = supplierRepository;
            _contactRepository = contactRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string id, ContactType type)
        {
            var contactInfo = await _contactRepository.GetInfo(id, type);
            if (contactInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Contact does not exists."));

            var result = await _contactRepository.ForceDelete(id, type);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Delete Contact successful."));
        }

        public async Task<List<ContactSearchViewModel>> GetAll(string subjectId, ContactType type)
        {
            return await _contactRepository.GetAll(subjectId, type);
        }

        public async Task<ActionResultResponse<dynamic>> Insert(string tenantId, string creatorId, string creatorFullName, ContactMeta contactMeta)
        {
            var supplierInfo = await _supplierRepository.GetInfo(contactMeta.SubjectId, tenantId);
            if (supplierInfo == null)
                return new ActionResultResponse<dynamic>(-1,
                    _resourceService.GetString(
                        contactMeta.Type == ContactType.Supplier ? "Supplier does not exists. Please check again."
                        : "Agency does not exists. Please check again."
                        ));

            //if (!string.IsNullOrEmpty(contactMeta.Email) && !contactMeta.Email.IsEmailAddress())
            //    return new ActionResultResponse<string>(-2, _sharedResourceService.GetString("Email invalid"));

            //if (!string.IsNullOrEmpty(contactMeta.PhoneNumber) && !contactMeta.PhoneNumber.IsPhoneNumber())
            //    return new ActionResultResponse<string>(-3, _sharedResourceService.GetString("Phone number invalid"));

            // Check Exists.
            var isExists = await _contactRepository.CheckExists(null, contactMeta.Type, contactMeta.SubjectId, contactMeta.FullName,
                contactMeta.PhoneNumber);
            if (isExists)
                return new ActionResultResponse<dynamic>(-2, _resourceService.GetString("Contact already exists. Please check again."));

            var contactId = Guid.NewGuid().ToString();
            var contact = new Contact
            {
                Id = contactId,
                SubjectId = contactMeta.SubjectId,
                FullName = contactMeta.FullName,
                PositionName = contactMeta.PositionName?.Trim(),
                Email = contactMeta.Email?.Trim(),
                Fax = contactMeta.Fax?.Trim(),
                PhoneNumber = contactMeta.PhoneNumber?.Trim(),
                Description = contactMeta.Description?.Trim(),
                UnsignName = contactMeta.FullName.StripVietnameseChars().ToUpper(),
                Status = contactMeta.Status,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                Type = contactMeta.Type,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreateTime = DateTime.Now,
            };

            var result = await _contactRepository.Insert(contact);
            if (result <= 0)
                return new ActionResultResponse<dynamic>(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            return new ActionResultResponse<dynamic>(result, _resourceService.GetString("Insert contact success."), "", new
            {
                contactId,
                contact.ConcurrencyStamp
            });
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string id, ContactType type, string lastUpdateUserId, string lastUpdateFullName, ContactMeta contactMeta)
        {
            var supplierInfo = await _supplierRepository.GetInfo(contactMeta.SubjectId, tenantId);
            if (supplierInfo == null)
                return new ActionResultResponse<string>(-1,
                    _resourceService.GetString(
                        contactMeta.Type == ContactType.Supplier ? "Supplier does not exists. Please check again."
                            : "Agency does not exists. Please check again."
                    ));

            var contactInfo = await _contactRepository.GetInfo(id, type);
            if (contactInfo == null)
                return new ActionResultResponse<string>(-2, _resourceService.GetString("Contact does not exists."));

            if (contactInfo.ConcurrencyStamp != contactMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _resourceService.GetString("The Contact already updated by another people. You can not update this Contact."));

            //if (!string.IsNullOrEmpty(contactMeta.Email) && !contactMeta.Email.IsEmailAddress())
            //    return new ActionResultResponse<string>(-2, _sharedResourceService.GetString("Email invalid"));

            //if (!string.IsNullOrEmpty(contactMeta.PhoneNumber) && !contactMeta.PhoneNumber.IsPhoneNumber())
            //    return new ActionResultResponse<string>(-5, _sharedResourceService.GetString("Phone number invalid"));

            // Check Exists.
            if (contactInfo.FullName != contactMeta.FullName || contactInfo.PhoneNumber != contactMeta.PhoneNumber)
            {
                var isExists = await _contactRepository.CheckExists(null, contactMeta.Type, contactMeta.SubjectId, contactMeta.FullName,
                    contactMeta.PhoneNumber);
                if (isExists)
                    return new ActionResultResponse<string>(-2, _resourceService.GetString("Contact already exists. Please check again."));

            }

            contactInfo.SubjectId = contactMeta.SubjectId;
            contactInfo.FullName = contactMeta.FullName;
            contactInfo.PositionName = contactMeta.PositionName?.Trim();
            contactInfo.Email = contactMeta.Email?.Trim();
            contactInfo.Fax = contactMeta.Fax?.Trim();
            contactInfo.PhoneNumber = contactMeta.PhoneNumber?.Trim();
            contactInfo.Description = contactMeta.Description?.Trim();
            contactInfo.UnsignName = contactMeta.FullName.StripVietnameseChars();
            contactInfo.Status = contactMeta.Status;
            contactInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            contactInfo.Type = contactMeta.Type;
            contactInfo.LastUpdateUserId = lastUpdateUserId;
            contactInfo.LastUpdateFullName = lastUpdateFullName;
            contactInfo.LastUpdateTime = DateTime.Now;

            await _contactRepository.Update(id, contactInfo);

            return new ActionResultResponse<string>
            {
                Code = 1,
                Message = _resourceService.GetString("Update Contact successful."),
                Data = contactInfo.ConcurrencyStamp
            };
        }
    }
}
