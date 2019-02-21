using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Core.Domain.Constants;
using GHM.Core.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
namespace GHM.Core.Infrastructure.Repository
{
    public class TagRepository : RepositoryBase, ITagRepository
    {
        private readonly IRepository<Tag> _tagRepository;
        public TagRepository(IDbContext context) : base(context)
        {
            _tagRepository = Context.GetRepository<Tag>();
        }

        public async Task<int> Insert(Tag tag)
        {
            _tagRepository.Create(tag);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Tag Tag)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tagId)
        {
            var info = await GetInfo(tagId);
            if (info == null)
                return -1;

            _tagRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<Tag> tags)
        {
            _tagRepository.Creates(tags);
            return await Context.SaveChangesAsync();
        }

        public async Task<Tag> GetInfo(string tenantId, string languageId, string tagId, bool isReadonly = false)
        {
            return await _tagRepository.GetAsync(isReadonly, x => x.Id == tagId && x.TenantId == tenantId && x.LanguageId == languageId);
        }

        public async Task<Tag> GetInfo(string tagId, bool isReadonly = false)
        {
            return await _tagRepository.GetAsync(isReadonly, x => x.Id == tagId);
        }

        public async Task<List<Tag>> GetsByTagType(TagType tagType, string tenantId, bool isReadOnly = false)
        {
            return await _tagRepository.GetsAsync(true, x => x.Type == tagType && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExists(string tagId, TagType tagType, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _tagRepository.ExistAsync(x =>
                x.Id != tagId && x.Type == tagType && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<bool> CheckExistsByIdAndName(string tagId, TagType tagType, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _tagRepository.ExistAsync(x =>
                x.Id == tagId && x.Type == tagType && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<bool> CheckExistsByName(TagType tagType, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _tagRepository.ExistAsync(x =>
                x.Type == tagType && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<string> GetIdByNameAndType(TagType tagType, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _tagRepository.GetAsAsync(x => x.Id, x =>
                x.Type == tagType && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name);
        }

        public  Task<List<TagViewModel>> Search(string tenantId, string languageId, string keyword, TagType? type, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Tag, bool>> spec = x => x.TenantId == tenantId && x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (type.HasValue)
            {
                spec = spec.And(x => x.Type == type.Value);
            }

            var query = Context.Set<Tag>().Where(spec)
                .Select(x => new TagViewModel
                {
                    Id = x.Id,
                    TenantId = x.TenantId,
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Type = x.Type,
                    UnsignName = x.UnsignName,
                    SeoLink = x.SeoLink
                });

            totalRows = query.Count();
            return  query
                .AsNoTracking()
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
