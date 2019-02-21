using GHM.FileManagement.Domain.IServices;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.FileManagement.Domain.ModelMetas;
using GHM.FileManagement.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.FileManagement.Domain.IRepositories;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.IServices;
using GHM.FileManagement.Domain.Resources;
using GHM.FileManagement.Domain.Models;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;

namespace GHM.FileManagement.Infrastructure.Services
{
    public class FolderService : IFolderService
    {
        private readonly IFolderRepository _folderRepository;
        private readonly IFileRepository _fileRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmFileManagementResource> _fileManagermentResourceResource;

        public FolderService(IFolderRepository folderRepository, IFileRepository fileRepository,
        IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmFileManagementResource> fileManagerMentResourceResource)
        {
            _folderRepository = folderRepository;
            _fileRepository = fileRepository;
            _sharedResourceService = sharedResourceService;
            _fileManagermentResourceResource = fileManagerMentResourceResource;
        }

        public async Task<FolderSearchViewModel> Search(string tenantId, string userId, string keyword, int page, int pageSize)
        {
            var folders = await _folderRepository.Search(tenantId, userId, keyword, page, pageSize, out var totalFolderRows);
            var files = await _fileRepository.Search(tenantId, userId, keyword, null, page, pageSize, out var totalFileRows);

            return new FolderSearchViewModel
            {
                Folders = folders,
                Files = files,
                TotalFiles = totalFileRows,
                TotalFolders = totalFolderRows
            };
        }

        public Task<SearchResult<FolderViewModel>> SearchTree(string tenantId, string keyword, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResultResponse<Folder>> Insert(string tenantId, string creatorId, string creatorFullName, FolderMeta folderMeta)
        {
            var folder = new Folder
            {
                IdPath = "-1",
                //Order = folderMeta.Order,
                TenantId = tenantId,
                //OrderPath = folderMeta.Order.ToString(),
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                Name = folderMeta.Name,
                UnsignName = folderMeta.Name.Trim().StripVietnameseChars().ToUpper()
            };

            if(await _folderRepository.CheckName(tenantId, folder.UnsignName))
                return new ActionResultResponse<Folder>(-2,
                    _fileManagermentResourceResource.GetString("This folder does exists. Please try again."));

            if (folderMeta.ParentId.HasValue)
            {
                var parentInfo = await _folderRepository.GetInfo(tenantId, creatorId, folderMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse<Folder>(-2,
                        _fileManagermentResourceResource.GetString("Parent folder does not exists. Please try again."));

                folder.ParentId = parentInfo.Id;
                folder.IdPath = $"{parentInfo.IdPath}.-1";
            }

            var result = await _folderRepository.Insert(folder);
            if (result <= 0)
                return new ActionResultResponse<Folder>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            folder.IdPath = folder.IdPath.Replace("-1", folder.Id.ToString());
            await _folderRepository.UpdateFolderIdPath(folder.Id, folder.IdPath);

            return new ActionResultResponse<Folder>(result, _fileManagermentResourceResource.GetString("Add new folder successful."),
                string.Empty, folder);
        }

        public async Task<ActionResultResponse> Update(string tenantId,
            string lastUpdateUserId, string lastUpdateFullName, int folderId, FolderMeta folderMeta)
        {
            var folderInfo = await _folderRepository.GetInfo(tenantId, lastUpdateUserId, folderId);
            if (folderInfo == null)
                return new ActionResultResponse(-2, _fileManagermentResourceResource.GetString("Folder info does not exists. Please try again."));

            if (folderInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (folderInfo.ConcurrencyStamp != folderMeta.ConcurrencyStamp)
                return new ActionResultResponse(-4,
                    _sharedResourceService.GetString("The folder already updated by other people. You can not update this folder."));

            if (folderMeta.ParentId.HasValue && folderInfo.Id == folderMeta.ParentId.Value)
                return new ActionResultResponse(-5, _fileManagermentResourceResource.GetString("Folder and parent folder can not be the same.")); ;

            var oldParentId = folderInfo.ParentId;
            var oldIdPath = folderInfo.IdPath;

            folderInfo.Name = folderMeta.Name;
            //folderInfo.Order = folderMeta.Order;
            folderInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            folderInfo.LastUpdate = DateTime.Now;
            folderInfo.LastUpdateUserId = lastUpdateUserId;
            folderInfo.LastUpdateFullName = lastUpdateFullName;
            folderInfo.UnsignName = folderMeta.Name.Trim().StripVietnameseChars().ToUpper();

            if (await _folderRepository.CheckName(tenantId, folderInfo.UnsignName))
                return new ActionResultResponse<Folder>(-2,
                    _fileManagermentResourceResource.GetString("This folder does exists. Please try again."));

            if (folderInfo.ParentId.HasValue && !folderMeta.ParentId.HasValue)
            {
                folderInfo.ParentId = null;
                folderInfo.IdPath = folderInfo.Id.ToString();
                //folderInfo.OrderPath = folderInfo.Order.ToString();
            }
            else if (folderMeta.ParentId.HasValue && folderMeta.ParentId != folderInfo.ParentId)
            {
                var parentInfo = await _folderRepository.GetInfo(tenantId, lastUpdateUserId, folderMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-6, _fileManagermentResourceResource.GetString("Parent folder does not exists. Please try again.")); ;

                parentInfo.IdPath = $"{parentInfo.IdPath}.{parentInfo.Id}";
                parentInfo.ParentId = parentInfo.Id;
                //parentInfo.OrderPath = $"{parentInfo.OrderPath}.{parentInfo.Order}";
            }

            await _folderRepository.Update(folderInfo);

            // Update children IdPath and RootInfo
            if (folderInfo.IdPath != oldIdPath)
            {
                await _folderRepository.UpdateChildrenIdPath(oldIdPath, folderInfo.IdPath);
            }

            // Update parent survey group child count.
            if (folderInfo.ParentId.HasValue && oldParentId.HasValue && folderInfo.ParentId.Value != oldParentId.Value)
            {
                // Update old parent survey group child count.
                var oldChildCount = await _folderRepository.GetChildCount(oldParentId.Value);
                await _folderRepository.UpdateChildCount(tenantId, lastUpdateUserId, oldParentId.Value, oldChildCount);

                // Update new parent survey group child count.
                var newParentId = folderInfo.ParentId.Value;
                var newChildCount = await _folderRepository.GetChildCount(newParentId);
                await _folderRepository.UpdateChildCount(tenantId, lastUpdateUserId, newParentId, newChildCount);
            }

            //update lai folder child by Id
            var childCountid = await _folderRepository.GetChildCount(folderInfo.Id);
            await _folderRepository.UpdateChildCount(tenantId, lastUpdateUserId, folderInfo.Id, childCountid);

            //// Update survey group name translation in survey translation.
            //if (surveyGroupMeta.SurveyGroupTranslations.Any())
            //    await UpdateSurveyTranslations();

            return new ActionResultResponse(1,
                _fileManagermentResourceResource.GetString("Update folder name successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string userId, int folderId)
        {
            var folderInfo = await _folderRepository.GetInfo(tenantId, userId, folderId);
            if (folderInfo == null)
                return new ActionResultResponse(-1, _fileManagermentResourceResource.GetString("Folder does not exists. Please try again."));

            if (folderInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // Check is has child.
            var folderChildCount = await _folderRepository.GetChildCount(folderInfo.Id);
            if (folderChildCount > 0)
                return new ActionResultResponse(-3,
                    _fileManagermentResourceResource.GetString("This folder has children folder. You can not delete this folder."));

            var existsFileInFolder = await _fileRepository.CheckExistsByFolderId(folderId);
            if (existsFileInFolder)
                return new ActionResultResponse(-4,
                    _fileManagermentResourceResource.GetString("This folder has children file. You can not delete this folder."));

            var result = await _folderRepository.Delete(tenantId, userId, folderInfo.Id);
            if (result > 0 && folderInfo.ParentId.HasValue)
            {
                //Update parent folder child count.
                var childCount = await _folderRepository.GetChildCount(folderInfo.ParentId.Value);
                await _folderRepository.UpdateChildCount(tenantId, userId, folderInfo.ParentId.Value, childCount);
            }
            return new ActionResultResponse(result, result > 0
                ? _fileManagermentResourceResource.GetString("Delete folder successful.")
                : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse<Folder>> GetDetail(string tenantId, string userId, int folderId)
        {
            var folderInfo = await _folderRepository.GetInfo(tenantId, userId, folderId, true);
            return new ActionResultResponse<Folder>
            {
                Data = folderInfo,
            };
        }

        public async Task<List<FolderViewModel>> GetsAll(string tenantId, string userId, int? parentId)
        {
            return await _folderRepository.GetAllFolder(tenantId, userId, parentId);
        }

        public async Task<ActionResultResponse> UpdateName(string tenantId, string lastUpdateUserId, string lastUpdateFullName, int folderId,
            string concurrencyStamp, string name)
        {
            if (string.IsNullOrEmpty(name))
                return new ActionResultResponse(-4,
                   _sharedResourceService.GetString("The folder name is empty."));

            var folderInfo = await _folderRepository.GetInfo(tenantId, lastUpdateUserId, folderId);
            if (folderInfo == null)
                return new ActionResultResponse(-2, _fileManagermentResourceResource.GetString("Folder info does not exists. Please try again."));

            if (folderInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (folderInfo.ConcurrencyStamp != concurrencyStamp)
                return new ActionResultResponse(-4,
                    _sharedResourceService.GetString("The folder already updated by other people. You can not update this folder."));

            folderInfo.Name = name;
            folderInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            folderInfo.LastUpdate = DateTime.Now;
            folderInfo.LastUpdateUserId = lastUpdateUserId;
            folderInfo.LastUpdateFullName = lastUpdateFullName;
            folderInfo.UnsignName = name.Trim().StripVietnameseChars().ToUpper();

            await _folderRepository.Update(folderInfo);

            return new ActionResultResponse(1,
                _fileManagermentResourceResource.GetString("Update folder name successful."));
        }

        public async Task<List<Breadcrumb>> GetBreadcrumbs(string tenantId, string userId, int? folderId)
        {
            if (!folderId.HasValue)
                return null;

            var folderInfo = await _folderRepository.GetInfo(tenantId, userId, folderId.Value, true);
            if (folderInfo == null)
                return null;

            return await _folderRepository.GetBreadcrumbByIdPath(tenantId, userId, folderInfo.IdPath);
        }
    }
}
