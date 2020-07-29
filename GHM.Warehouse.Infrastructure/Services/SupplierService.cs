using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierRepository _supplierRepository;
        private readonly IContactRepository _contactRepository;
        private readonly IGoodsReceiptNoteRepository _goodsReceiptNoteRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public SupplierService(ISupplierRepository supplierRepository,
                IContactRepository contactRepository,
                IGoodsReceiptNoteRepository goodsReceiptNoteRepository,
                IResourceService<SharedResource> sharedResourceService,
                IResourceService<GhmWarehouseResource> resourceService)
        {
            _supplierRepository = supplierRepository;
            _contactRepository = contactRepository;
            _goodsReceiptNoteRepository = goodsReceiptNoteRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string id, string tenantId)
        {
            var supplierInfo = await _supplierRepository.GetInfo(id, tenantId);
            if (supplierInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Supplier does not exists."));

            var isGoodsReceiptExists = await _goodsReceiptNoteRepository.CheckExistSupplierId(tenantId, id);
            if (isGoodsReceiptExists)
                return new ActionResultResponse(-2, _resourceService.GetString("This supplier has been used in the goods receipt note."));

            var result = await _supplierRepository.Delete(id, tenantId);

            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Delete Supplier successful."));
        }

        public async Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, SupplierMeta supplierMeta)
        {
            //if (!supplierMeta.Contacts.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one contact."));

            var checkInfo = await _supplierRepository.CheckExistsByName(tenantId, null, supplierMeta.Name);
            if (checkInfo)
                return new ActionResultResponse(-1, _resourceService.GetString("Supplier name already exists."));

            var supplierId = Guid.NewGuid().ToString();
            var supplier = new Supplier
            {
                Id = supplierId,
                Name = supplierMeta.Name,
                UnsignName = supplierMeta.Name.StripVietnameseChars().ToUpper(),
                Description = supplierMeta.Description,
                IsActive = supplierMeta.IsActive,
                CreateTime = DateTime.Now,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                Address = supplierMeta.Address,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
            };

            var result = await _supplierRepository.Insert(supplier);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            if (supplierMeta.Contacts != null && supplierMeta.Contacts.Any())
            {
                var contacts = new List<Contact>();
                foreach (var contact in supplierMeta.Contacts)
                {
                    contacts.Add(new Contact
                    {
                        Id = Guid.NewGuid().ToString(),
                        SubjectId = supplier.Id,
                        FullName = contact.FullName,
                        PositionName = contact.PositionName,
                        Email = contact.Email,
                        Fax = contact.Fax,
                        PhoneNumber = contact.PhoneNumber,
                        Description = contact.Description,
                        UnsignName = contact.FullName.Trim().StripVietnameseChars().ToUpper(),
                        Status = contact.Status,
                        ConcurrencyStamp = supplier.ConcurrencyStamp,
                        Type = contact.Type,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName,
                    });
                }

                if (contacts.Any())
                {
                    var resultInsertDetail = await _contactRepository.Inserts(contacts);
                    if (resultInsertDetail < 0)
                    {
                        await RollbackInsert(supplierId, tenantId);

                        return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new Supplier. Please contact with administrator."));
                    }
                }
            }

            return new ActionResultResponse(result, _sharedResourceService.GetString("Insert supplier success."));
        }

        async Task RollbackInsert(string supplierId, string tenantId)
        {
            await _supplierRepository.ForceDelete(supplierId, tenantId);
        }

        public async Task<SearchResult<SupplierSearchViewModel>> Search(string tenantId, string languageId, string name, string address, bool? isActive,
                    int page, int pageSize)
        {
            var items = await _supplierRepository.Search(tenantId, languageId, name, address, isActive, page, pageSize, out var totalRows);

            return new SearchResult<SupplierSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Update(string id, string tenantId, string lastUpdateUserId, string lastUpdateFullName, SupplierMeta supplierMeta)
        {
            //if (!supplierMeta.Contacts.Any())
            //    return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));
            var checkInfo = await _supplierRepository.CheckExistsByName(tenantId, id, supplierMeta.Name);
            if (checkInfo)
                return new ActionResultResponse(-1, _resourceService.GetString("Supplier name already exists."));

            var supplierInfo = await _supplierRepository.GetInfo(id, tenantId);
            if (supplierInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Supplier does not exists."));

            if (supplierInfo.ConcurrencyStamp != supplierMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The Supplier already updated by other people. You can not update this Supplier."));

            supplierInfo.Name = supplierMeta.Name;
            supplierInfo.UnsignName = supplierMeta.Name.StripVietnameseChars().ToUpper();
            supplierInfo.Description = supplierMeta.Description;
            supplierInfo.IsActive = supplierMeta.IsActive;
            supplierInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            supplierInfo.Address = supplierMeta.Address;
            supplierInfo.LastUpdateUserId = lastUpdateUserId;
            supplierInfo.LastUpdateFullName = lastUpdateFullName;
            supplierInfo.LastUpdateTime = DateTime.Now;

            var result = await _supplierRepository.Update(supplierInfo);

            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                  : _resourceService.GetString("Update Supplier successful."));

        }

        public async Task<ActionResultResponse<SupplierDetailViewModel>> GetDetail(string tenantId, string id, ContactType type)
        {
            var supplierInfo = await _supplierRepository.GetInfo(id, tenantId);

            var contacts = await _contactRepository.GetAll(id, type);

            var result = new SupplierDetailViewModel()
            {
                Address = supplierInfo.Address,
                Id = supplierInfo.Id,
                IsActive = supplierInfo.IsActive,
                Name = supplierInfo.Name,
                ConcurrencyStamp = supplierInfo.ConcurrencyStamp,
                Description = supplierInfo.Description,
                Contacts = contacts
            };

            return new ActionResultResponse<SupplierDetailViewModel>
            {
                Code = 1,
                Data = result
            };
        }

        public async Task<ActionResultResponse> UpdateStatus(string tenantId, string id, bool isActive)
        {
            var supplierInfo = await _supplierRepository.GetInfo(id, tenantId);
            if (supplierInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Supplier does not exists. Please try again."));

            if (supplierInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            supplierInfo.IsActive = isActive;
            var result = await _supplierRepository.Update(supplierInfo);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                  _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result,
                       _resourceService.GetString("Update supplier successful."));
        }

        public async Task<SearchResult<Suggestion<string>>> Suggestions(string tenantId, string keyword, int page, int pageSize)
        {
            var suppliers = await _supplierRepository.Suggestions(tenantId, keyword, page, pageSize, out int totalRows);
            return new SearchResult<Suggestion<string>>(suppliers, totalRows);
        }
    }
}
