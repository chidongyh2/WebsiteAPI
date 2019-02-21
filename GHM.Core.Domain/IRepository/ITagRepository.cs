using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;

namespace GHM.Core.Domain.IRepository
{
    public interface ITagRepository
    {
        Task<int> Insert(Tag tag);

        Task<int> Update(Tag Tag);

        Task<int> Delete(string tagId);

        Task<int> Inserts(List<Tag> tags);

        Task<Tag> GetInfo(string tenantId, string languageId, string tagId, bool isReadonly = false);

        Task<Tag> GetInfo(string tagId, bool isReadonly = false);

        Task<List<Tag>> GetsByTagType(TagType tagType, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExists(string tagId, TagType tagType, string tenantId, string languageId, string name);

        Task<bool> CheckExistsByIdAndName(string tagId, TagType tagType, string tenantId, string languageId, string name);

        Task<bool> CheckExistsByName(TagType tagType, string tenantId, string languageId, string name);

        Task<string> GetIdByNameAndType(TagType tagType, string tenantId, string languageId, string name);

        Task<List<TagViewModel>> Search(string tenantId, string languageId, string keyword, TagType? type,
            int page, int pageSize, out int totalRows);
    }
}

