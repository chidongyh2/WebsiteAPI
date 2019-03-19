using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class BrandService : IBrandService
    {
        private readonly IBrandRepository _brandRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public BrandService(IBrandRepository brandRepository,
                IResourceService<SharedResource> sharedResourceService,
                IResourceService<GhmWarehouseResource> resourceService)
        {
            _brandRepository = brandRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, BrandMeta brandMeta)
        {
            var checkInfo = await _brandRepository.CheckExistsByName(tenantId, brandMeta.Name);
            if (checkInfo)
                return new ActionResultResponse(-1, _resourceService.GetString("Brand name already exists."));

            if (!string.IsNullOrEmpty(brandMeta.Email) && !brandMeta.Email.IsEmailAddress())
                return new ActionResultResponse(-2, _sharedResourceService.GetString("Email is not validate"));

            //if (!string.IsNullOrEmpty(brandMeta.PhoneNumber) && !brandMeta.Email.IsPhoneNumber())
            //    return new ActionResultResponse(-2, _sharedResourceService.GetString("Phone number is not validate"));

            var brandId = Guid.NewGuid().ToString();
            var brand = new Brand
            {
                Id = brandId,
                Name = brandMeta.Name,
                UnsignName = brandMeta.Name.StripVietnameseChars().ToUpper(),
                IsActive = brandMeta.IsActive,
                Description = brandMeta.Description,
                IsDelete = brandMeta.IsDelete,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                CreateTime = DateTime.Now,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                Address = brandMeta.Address,
                Email = brandMeta.Email,
                PhoneNumber = brandMeta.PhoneNumber,
                Website = brandMeta.Website,
            };

            var result = await _brandRepository.Insert(brand);
            if (result > 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Add new brand successful"));

            await RollbackInsert(tenantId, brandId);
            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new Brand. Please contact with administrator."));

        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var brandInfo = await _brandRepository.GetInfo(tenantId, id);
            if (brandInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Brand does not exists."));

            var result = await _brandRepository.Delete(tenantId, id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Delete Brand successful."));
        }

        public async Task<SearchResult<BrandSearchViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _brandRepository.Search(tenantId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<BrandSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, BrandMeta brandMeta)
        {
            var brandInfo = await _brandRepository.GetInfo(tenantId, id);
            if (brandInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Brand does not exists."));

            var checkInfo = await _brandRepository.CheckExistsByName(tenantId, brandMeta.Name);
            if (checkInfo && brandInfo.Name != brandMeta.Name)
                return new ActionResultResponse(-1, _resourceService.GetString("Brand name is exists."));

            if (brandInfo.ConcurrencyStamp != brandMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The Brand already updated by other people. You can not update this Brand."));

            if (!string.IsNullOrEmpty(brandMeta.Email) && !brandMeta.Email.IsEmailAddress())
                return new ActionResultResponse(-4, _sharedResourceService.GetString("Email is not validate"));

            if (!string.IsNullOrEmpty(brandMeta.PhoneNumber) && !brandMeta.PhoneNumber.IsPhoneNumber())
                return new ActionResultResponse(-5, _sharedResourceService.GetString("Phone number is not validate"));

            brandInfo.Name = brandMeta.Name;
            brandInfo.UnsignName = brandMeta.Name.Trim().StripVietnameseChars().ToUpper();
            brandInfo.IsActive = brandMeta.IsActive;
            brandInfo.Description = brandMeta.Description;
            brandInfo.IsDelete = brandMeta.IsDelete;
            brandInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            brandInfo.LastUpdateUserId = lastUpdateUserId;
            brandInfo.LastUpdateFullName = lastUpdateFullName;
            brandInfo.LastUpdateTime = DateTime.Now;
            brandInfo.Address = brandMeta.Address;
            brandInfo.Email = brandMeta.Email;
            brandInfo.PhoneNumber = brandMeta.PhoneNumber;
            brandInfo.Website = brandMeta.Website;

            await _brandRepository.Update(id, brandInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update Brand successful."));
        }

        async Task RollbackInsert(string tenantId, string id)
        {
            await _brandRepository.ForceDelete(tenantId, id);
        }

        public async Task<ActionResultResponse<BrandDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var brandInfo = await _brandRepository.GetInfo(tenantId, id);

            var brandViewModel = new BrandDetailViewModel()
            {
                Id = brandInfo.Id,
                Name = brandInfo.Name,
                IsActive = brandInfo.IsActive,
                Description = brandInfo.Description,
                Address = brandInfo.Address,
                Email = brandInfo.Email,
                PhoneNumber = brandInfo.PhoneNumber,
                Website = brandInfo.Website,
                ConcurrencyStamp = brandInfo.ConcurrencyStamp
            };

            return new ActionResultResponse<BrandDetailViewModel>
            {
                Code = 1,
                Data = brandViewModel
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, bool isActive)
        {
            var brandInfo = await _brandRepository.GetInfo(id, tenantId);
            if (brandInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Brand does not exists."));

            brandInfo.IsActive = isActive;
            brandInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            brandInfo.LastUpdateUserId = lastUpdateUserId;
            brandInfo.LastUpdateFullName = lastUpdateFullName;
            brandInfo.LastUpdateTime = DateTime.Now;

            await _brandRepository.Update(id, brandInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update Unit successful."));
        }
    }

}
