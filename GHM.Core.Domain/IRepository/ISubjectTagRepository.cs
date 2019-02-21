using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;

namespace GHM.Core.Domain.IRepository
{
    public interface ISubjectTagRepository
    {
        Task<int> Insert(SubjectTag subjectTag);
        Task<int> Delete(string subjectId, string tagId);
        Task<int> DeleteBySubjectId(string subjectId);
        Task<int> Inserts(List<SubjectTag> subjectTags);
        Task<int> Deletes(List<SubjectTag> subjectTags);
        Task<bool> CheckExists(string subjectId, string tagId);
        Task<List<SubjectTagViewModel>> GetListSubjectId(string subjectId, string tenantId);
        Task<List<string>> GetListSubject(string tenantId, string languageId, TagType type, string subjectId);
    }
}
