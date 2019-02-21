using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class CategoryRepository : RepositoryBase, ICategoryRepository
    {
        private readonly IRepository<Category> _categoryRepository;

        public CategoryRepository(IDbContext context) :
            base(context)
        {
            _categoryRepository = Context.GetRepository<Category>();
        }
        
        public async Task<Category> GetInfo(int id, bool isReadOnly = false)
        {
            return await _categoryRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByName(int id, string name)
        {

            return await _categoryRepository.ExistAsync(x =>
                x.Id != id && x.Name.Equals(name));
        }

        public Task<List<Category>> Search(string keyword, bool? isActive, int page, int pageSize, out long totalRows)
        {
            Expression<Func<Category, bool>> spec = x => !x.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var paging = Context.Filters.Page<Category>(page, pageSize);
            var sort = Context.Filters.Sort<Category, string>(a => a.IdPath);
            totalRows = _categoryRepository.Count(spec);
            return _categoryRepository.GetsAsync(true, spec, sort, paging);
        }

        public async Task<List<Category>> GetAll()
        {
            return await _categoryRepository.GetsAsync(true, x => !x.IsDelete);
        }

        public async Task<List<Category>> GetAllActive()
        {
            return await _categoryRepository.GetsAsync(true, x => !x.IsDelete && x.IsActive);
        }

        public async Task<ActionResultResponse> UpdateActiveStatus(int id, bool isActive)
        {
            var categoryInfo = await GetInfo(id);
            if (categoryInfo == null)
                return new ActionResultResponse(-1, "Thông tin chuyên mục cần thay đổi trạng thái không tồn tại. Vui lòng kiểm tra lại."); ;

            categoryInfo.IsActive = isActive;
            //var result = await _categoryRepository.UpdateAsync(x => x.Id == id,
            //    Builders<Category>.Update.Set(x => x.IsActive, isActive));
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"{(isActive ? "Kích hoạt" : "Hủy kích hoạt")} chuyên mục: \"{categoryInfo.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên");
        }

        //public async Task<List<Breadcrumb>> GetListBreadcrumBySeoLink(string seoLink)
        //{
        //    return await _categoryRepository.Raw.Where(x => seoLink.Contains(x.SeoLink))
        //        .Select(x => new Breadcrumb
        //        {
        //            ObjectId = x.Id,
        //            ObjectType = (byte)MenuType.Category,
        //            Name = x.Name,
        //            Url = x.SeoLink,
        //            IsCurrent = false
        //        }).ToListAsync();
        //}

        public async Task<int> GetChildCount(int id)
        {
            return await _categoryRepository.CountAsync(x => x.ParentId == id && !x.IsDelete);
        }

        public async Task UpdateChildIdPath(int parentId)
        {
            var parentInfo = await GetInfo(parentId, true);
            if (parentInfo != null)
            {
                var listChildren = await _categoryRepository.GetsAsync(false, x => x.ParentId == parentId && !x.IsDelete);
                if (listChildren != null && listChildren.Any())
                {
                    foreach (var children in listChildren)
                    {
                        children.IdPath = $"{parentInfo.IdPath}.{children.Id}";
                        children.SeoLink = $"{parentInfo.SeoLink}/{children.Name.ToUrlString().ToLower()}";

                        var result = await Context.SaveChangesAsync();
                        if (result > 0)
                        {
                            // Update children.
                            await UpdateChildIdPath(children.Id);
                        }
                    }
                }
            }
        }
    }
}