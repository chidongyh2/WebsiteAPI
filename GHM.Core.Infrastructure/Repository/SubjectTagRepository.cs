using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
using GHM.Infrastructure.Helpers;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Core.Infrastructure.Repository
{
    public class SubjectTagRepository : RepositoryBase, ISubjectTagRepository
    {
        private readonly IRepository<SubjectTag> _subjectTagRepository;
        public SubjectTagRepository(IDbContext context) : base(context)
        {
            _subjectTagRepository = Context.GetRepository<SubjectTag>();
        }

        public async Task<int> Insert(SubjectTag subjectTag)
        {
            _subjectTagRepository.Create(subjectTag);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string subjectId, string tagId)
        {
            var info = await _subjectTagRepository.GetsAsync(false, x => x.SubjectId == subjectId && x.TagId == tagId);
            if (info == null || !info.Any())
                return -1;

            _subjectTagRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteBySubjectId(string subjectId)
        {
            var info = await _subjectTagRepository.GetsAsync(false, x => x.SubjectId == subjectId);
            if (info == null || !info.Any())
                return -1;
            _subjectTagRepository.Deletes(info);

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<SubjectTag> subjectTags)
        {
            _subjectTagRepository.Creates(subjectTags);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Deletes(List<SubjectTag> subjectTags)
        {
            if (subjectTags == null || !subjectTags.Any())
                return -1;

            _subjectTagRepository.Deletes(subjectTags);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string subjectId, string tagId)
        {
            return await _subjectTagRepository.ExistAsync(x => x.SubjectId == subjectId && x.TagId == tagId);
        }

        public async Task<List<SubjectTagViewModel>> GetListSubjectId(string subjectId, string tenantId)
        {
            Expression<Func<Tag, bool>> spec = x => x.TenantId == tenantId;
            Expression<Func<SubjectTag, bool>> specSubjectTag = st => st.SubjectId == subjectId;

            var query = Context.Set<Tag>().Where(spec).AsNoTracking()
                .Join(Context.Set<SubjectTag>().Where(specSubjectTag).AsNoTracking(), x => x.Id, st => st.TagId, (x, st) =>
                    new SubjectTagViewModel
                    {
                        TagId = x.Id,
                        Type = x.Type,
                        Name = x.Name,
                        SeoLink = x.SeoLink,
                        SubjectId = st.SubjectId,
                        UnsignName = x.UnsignName,
                        TenantId = x.TenantId,
                        LanguageId = x.LanguageId
                    });

            return await query.ToListAsync();

        }

        public async Task<List<string>> GetListSubject(string tenantId, string languageId, TagType type, string subjectId)
        {
            Expression<Func<Tag, bool>> spec = x => x.TenantId == tenantId && x.LanguageId ==languageId && x.Type == type;
            Expression<Func<SubjectTag, bool>> specSubjectTag = st => st.SubjectId == subjectId;

            var queryTagId = Context.Set<Tag>().Where(spec).AsNoTracking()
                .Join(Context.Set<SubjectTag>().Where(specSubjectTag).AsNoTracking(), x => x.Id, st => st.TagId, (x, st) =>
                    st.TagId).ToList();

            var query = Context.Set<Tag>().Where(spec).AsNoTracking()
                .Join(Context.Set<SubjectTag>().Where(x=> queryTagId.Contains(x.TagId) && x.SubjectId !=subjectId).AsNoTracking(), x => x.Id, st => st.TagId, (x, st) =>
                    st.SubjectId);

            return await query.ToListAsync();
        }
    }
}
