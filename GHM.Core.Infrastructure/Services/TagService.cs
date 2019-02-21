using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.WebSockets;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Core.Domain.Constants;
using Microsoft.Extensions.Configuration;

namespace GHM.Core.Infrastructure.Services
{
    public class TagService : ITagService
    {
        private readonly ITagRepository _tagRepository;
        private readonly ISubjectTagRepository _subjectTagRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _coreResourceService;

        public TagService(ITagRepository tagRepository,
            ISubjectTagRepository subjectTagRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> coreResourceService
        )
        {
            _tagRepository = tagRepository;
            _subjectTagRepository = subjectTagRepository;
            _sharedResourceService = sharedResourceService;
            _coreResourceService = coreResourceService;
        }

        public async Task<SearchResult<TagViewModel>> Search(string tenantId, string languageId, string keyword,
            TagType type, int page, int pageSize)
        {
            var items = await _tagRepository.Search(tenantId, languageId, keyword, type, page, pageSize, out int totalRows);
            return new SearchResult<TagViewModel>
            {
                Items = items,
                TotalRows = totalRows,
            };
        }

        public async Task<ActionResultResponse<string>> Insert(List<SubjectTagMeta> subjectTagMetas)
        {
            if (subjectTagMetas == null || !subjectTagMetas.Any())

                return new ActionResultResponse<string>(-1,
                    _coreResourceService.GetString("List subject tags is null."));

            var subjectTags = new List<SubjectTag>();
            var subjectTag = subjectTagMetas.FirstOrDefault();

            var tenantId = subjectTag.TenantId;
            var creatorId = subjectTag.CreatorId;
            var creatorFullName = subjectTag.CreatorFullName;
            var creatorAvata = subjectTag.CreatorAvata;
            var subjectId = subjectTag.SubjectId;

            //xoa truoc khi insert
            if (!string.IsNullOrEmpty(subjectId))
            {
                await _subjectTagRepository.DeleteBySubjectId(subjectId);
            }

            foreach (var subjectTagMeta in subjectTagMetas)
            {
                var languageId = subjectTagMeta.LanguageId;
                var tagMetas = subjectTagMeta.Tags;
                TagType type = subjectTag.Type;

                foreach (var tag in tagMetas)
                {
                    if (!string.IsNullOrEmpty(tag.Id))
                    {
                        var tagInfo =
                            await _tagRepository.GetInfo(tenantId, languageId, tag.Id);
                        if (tagInfo != null)
                        {
                            var subjectTagInsert = new SubjectTag
                            {
                                SubjectId = subjectId,
                                TagId = tag.Id
                            };
                            subjectTags.Add(subjectTagInsert);
                        }
                        else
                        {
                            var isExists =
                                await _tagRepository.CheckExistsByName(type, tenantId, languageId, tag.Name);
                            if (!isExists)
                            {
                                var tagInsert = new Tag
                                {
                                    Id = Guid.NewGuid().ToString(),
                                    LanguageId = languageId,
                                    TenantId = tenantId,
                                    Type = type,
                                    Name = tag.Name,
                                    UnsignName = tag.Name?.StripVietnameseChars().ToUpper(),
                                    SeoLink = tag.Name?.ToUrlString(),
                                    CreatorId = creatorId,
                                    CreatorFullName = creatorFullName,
                                    CreatorAvatar = creatorAvata
                                };
                                await _tagRepository.Insert(tagInsert);

                                var subjectTagInsert = new SubjectTag
                                {
                                    SubjectId = subjectId,
                                    TagId = tagInsert.Id
                                };
                                subjectTags.Add(subjectTagInsert);
                            }
                            else
                            {
                                var subjectTagInsert = new SubjectTag
                                {
                                    SubjectId = subjectId,
                                    TagId = await _tagRepository.GetIdByNameAndType(type, tenantId, languageId, tag.Name)
                                };
                                subjectTags.Add(subjectTagInsert);
                            }
                        }
                    }
                    else
                    {
                        var isTagExists =
                            await _tagRepository.CheckExistsByName(type, tenantId, languageId, tag.Name);
                        if (!isTagExists)
                        {
                            var tagInsert = new Tag
                            {
                                Id = Guid.NewGuid().ToString(),
                                LanguageId = languageId,
                                TenantId = tenantId,
                                Type = type,
                                Name = tag.Name,
                                UnsignName = tag.Name?.StripVietnameseChars().ToUpper(),
                                SeoLink = tag.Name?.ToUrlString(),
                                CreatorId = creatorId,
                                CreatorFullName = creatorFullName,
                                CreatorAvatar = creatorAvata
                            };
                            await _tagRepository.Insert(tagInsert);

                            var subjectTagInsert = new SubjectTag
                            {
                                SubjectId = subjectId,
                                TagId = tagInsert.Id
                            };
                            subjectTags.Add(subjectTagInsert);
                        }
                        else
                        {
                            var subjectTagInsert = new SubjectTag
                            {
                                SubjectId = subjectId,
                                TagId = await _tagRepository.GetIdByNameAndType(type, tenantId, languageId, tag.Name)
                            };
                            subjectTags.Add(subjectTagInsert);
                        }

                    }
                }
            }

            var insertSubjectTags = subjectTags.GroupBy(x => new { x.SubjectId, x.TagId })
                .Select(x => x.First())
                .ToList();

            var result = await _subjectTagRepository.Inserts(insertSubjectTags);

            if (result > 0)
                return new ActionResultResponse<string>(result,
                    _coreResourceService.GetString("Update news subject tags successful."));

            return new ActionResultResponse<string>(1,
                _coreResourceService.GetString("Add new tag successful."),
                string.Empty, subjectId);
        }

        public async Task<List<SubjectTagViewModel>> GetDetail(string tenantId, string subjectTagId)
        {
            return await _subjectTagRepository.GetListSubjectId(subjectTagId, tenantId);
        }

        public async Task<List<string>> GetListSubject(string tenantId, string languageId, TagType type, string subjectId)
        {
            return await _subjectTagRepository.GetListSubject(tenantId, languageId, type, subjectId);
        }
    }
}

