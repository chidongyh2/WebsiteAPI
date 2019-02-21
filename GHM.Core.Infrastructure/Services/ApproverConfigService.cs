using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Infrastructure.Services
{
    public class ApproverConfigService : IApproverConfigService
    {
        private readonly IApproverConfigRepository _approverConfigRepository;
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;


        public ApproverConfigService(IApproverConfigRepository approverConfigRepository,
            IUserAccountRepository userAccountRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCoreResource> resourceService)
        {
            _approverConfigRepository = approverConfigRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _userAccountRepository = userAccountRepository;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string userId, ApproverConfigType type)
        {
            var approverConfigInfo = await _approverConfigRepository.GetInfo(userId, type);
            if (approverConfigInfo == null)
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Approver does not exists."));

            if (approverConfigInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _approverConfigRepository.ForceDelete(userId, type);
            return new ActionResultResponse(result, result <= 0
                ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                    : _resourceService.GetString("Delete Approver successful."));
        }

        public async Task<bool> CheckExistsUserId(string tenantId, string userId, ApproverConfigType type)
        {
            return await _approverConfigRepository.CheckExistsUserId(tenantId, userId, type);
        }

        public List<Suggestion<int>> GetTypes()
        {
            var listSuggestion = new List<Suggestion<int>>
            {
                new Suggestion<int>((int) ApproverConfigType.Event,
                    _resourceService.GetString(ApproverConfigType.Event.ToString())),
                new Suggestion<int>((int) ApproverConfigType.News,
                    _resourceService.GetString(ApproverConfigType.News.ToString())),
                new Suggestion<int>((int) ApproverConfigType.Product,
                    _resourceService.GetString(ApproverConfigType.Product.ToString()))
            };
            return listSuggestion;
        }

        public async Task<List<ApproverConfigSearchViewModel>> Search(string tenantId, string keyword, ApproverConfigType? type, int page,
            int pageSize)
        {
            var result = await _approverConfigRepository.Search(tenantId, keyword, type, page, pageSize, out var totalRows);
            return result.ToList();
        }

        public async Task<ActionResultResponse> Insert(string tenantId, string userId, ApproverConfigType type)
        {
            var isApproveConfigExists = await _approverConfigRepository.CheckExistsUserId(userId, type);
            if (isApproveConfigExists)
                return new ActionResultResponse(-1,
                    _resourceService.GetString("Approver already exists."));

            var userInfo = await _userAccountRepository.GetInfo(userId);
            if (userInfo == null)
                return new ActionResultResponse(-2,
                    _resourceService.GetString("Approver info does not exists."));

            var result = await _approverConfigRepository.Insert(new ApproverConfig
            {
                TenantId = tenantId,
                UserId = userInfo.Id,
                FullName = userInfo.FullName,
                UnsignName = userInfo.FullName.Trim().StripVietnameseChars().ToUpper(),
                Avatar = userInfo.Avatar,
                Type = type,
                UserName = userInfo.UserName
            });
            if (result > 0)
                return new ActionResultResponse(result, _resourceService.GetString("Add new ApproverConfig successful."));

            await RollbackInsert();
            return new ActionResultResponse(-3,
                _resourceService.GetString(ErrorMessage.SomethingWentWrong));

            async Task RollbackInsert()
            {
                await _approverConfigRepository.ForceDelete(userId, type);
            }
        }

        public async Task<SearchResult<ApproverConfigSearchViewModel>> SearchAsync(string tenantId, string keyword,
            ApproverConfigType? type, int page, int pageSize)
        {
            var items = await _approverConfigRepository.Search(tenantId, keyword, type, page, pageSize, out var totalRows);
            return new SearchResult<ApproverConfigSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }
    }
}
