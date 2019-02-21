using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class VideoGroupRepository : RepositoryBase, IVideoGroupRepository
    {
        private readonly IRepository<VideoGroup> _videoGroupRepository;
        public VideoGroupRepository(IDbContext context) : base(context)
        {
            _videoGroupRepository = Context.GetRepository<VideoGroup>();
        }

        public  Task<List<VideoGroupViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<VideoGroup, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<VideoGroupTranslation, bool>> specTranslation = xt => xt.LanguageId == languageId && !xt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<VideoGroup>().Where(spec)
                .Join(Context.Set<VideoGroupTranslation>().Where(specTranslation), x => x.Id, xt => xt.VideoGroupId, (x, xt) =>
                    new VideoGroupViewModel
                    {
                        Id = x.Id,
                        TenantId = x.TenantId,
                        IsActive = x.IsActive,
                        ConcurrencyStamp = x.ConcurrencyStamp,
                        CreateTime = x.CreateTime,
                        LastUpdate = x.LastUpdate.Value,
                        LanguageId = xt.LanguageId,
                        Name = xt.Name,
                        Description = xt.Description,
                        UnsignName = xt.UnsignName
                    }).AsNoTracking();

            totalRows = query.Count();

            return  query
                .OrderByDescending(x => x.CreateTime)
                .ThenByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(VideoGroup videoGroup)
        {
            _videoGroupRepository.Create(videoGroup);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(VideoGroup videoGroup)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string videoGroupId)
        {
            var info = await GetInfo(videoGroupId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string videoGroupId)
        {
            var info = await GetInfo(videoGroupId);
            if (info == null)
                return -1;

            _videoGroupRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<VideoGroup> GetInfo(string videoGroupId, bool isReadonly = false)
        {
            return await _videoGroupRepository.GetAsync(isReadonly, x => x.Id == videoGroupId && !x.IsDelete);
        }

        public async Task<VideoGroup> GetInfo(string tenantId, string videoGroupId, bool isReadonly = false)
        {
            return await _videoGroupRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == videoGroupId && !x.IsDelete);
        }
    }
}
