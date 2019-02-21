using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class CategoryRepository : RepositoryBase, ICategoryRepository
    {
        private readonly IRepository<Category> _categoryRepository;

        public CategoryRepository(IDbContext context) :
            base(context)
        {
            _categoryRepository = Context.GetRepository<Category>();
        }

        public async Task<ActionResultResponse> Insert(Category category)
        {
            var isNameExits = await CheckExistsByName(category.Id, category.Name);
            if (isNameExits)
                return new ActionResultResponse(-1,
                    $"Tên chuyên mục: \"{category.Name}\" đã tồn tại. Vui lòng kiểm tra lại.");

            category.Name = category.Name.Trim();
            category.UnsignName = category.Name.StripVietnameseChars().ToUpper();
            category.SeoLink = category.Name.ToUrlString();

            if (category.ParentId.HasValue)
            {
                var parentInfo = await GetInfo(category.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-2,
                        "Thông tin chuyên mục cấp trên không tồn tại. Vui lòng kiểm tra lại.");

                category.IdPath = $"{parentInfo.IdPath}.-1";
                category.SeoLink = $"{parentInfo.SeoLink}/{category.SeoLink}";
            }

            //await _categoryRepository.AddAsync(categoryObject);
            _categoryRepository.Create(category);
            var result = await Context.SaveChangesAsync();
            if (result < 0)
                return new ActionResultResponse(-3,
                    "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");

            category.IdPath = category.ParentId.HasValue
                ? category.IdPath.Replace("-1", category.Id.ToString())
                : category.Id.ToString();
            result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result,
                result > 0
                    ? $"Thêm mới chuyên mục: \"{category.Name}\" thành công."
                    : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên.");
        }

        public async Task<ActionResultResponse> Update(Category category)
        {
            var categoryInfo = await GetInfo(category.Id);
            if (categoryInfo == null)
                return new ActionResultResponse(-1,
                    "Thông tin chuyên mục cần chỉnh sửa không tồn tại. Vui lòng kiểm tra lại.");

            var isNameExits = await CheckExistsByName(category.Id, category.Name);
            if (isNameExits)
                return new ActionResultResponse(-2,
                    $"Tên chuyên mục: \"{category.Name}\" đã tồn tại. Vui lòng kiểm tra lại.");

            categoryInfo.Name = category.Name;
            categoryInfo.UnsignName = category.Name.StripVietnameseChars();
            categoryInfo.IsActive = category.IsActive;
            categoryInfo.Description = category.Description;
            categoryInfo.ParentId = category.ParentId;
            categoryInfo.SeoLink = category.SeoLink;

            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result,
                result > 0
                    ? $"Cập nhật thông tin chuyên mục: \"{categoryInfo.Name}\" thành công"
                    : "Có gì đó hoạt động chưa đúng. Vui lòng kiểm tra lại.");
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var categoryInfo = await GetInfo(id);
            if (categoryInfo == null)
                return new ActionResultResponse(-1, "Thông tin chuyên mục không tồn tại. Vui lòng kiểm tra lại.");

            var childCount = await GetChildCount(id);
            if (childCount > 0)
                return new ActionResultResponse(-2, "Đang có chuyên mục khác phụ thuộc vào chuyên mục này. Vui lòng xoá chuyên mục phụ thuộc trước khi xoá chuyên mục này.");

            categoryInfo.IsDelete = true;
            //var builder = Builders<Category>.Filter.Where(x => x.Id == id);
            //var result = await _categoryRepository.UpdateAsync(builder, Builders<Category>.Update.Set(x => x.IsDelete, true));
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? "Xoá chuyên mục thành công" : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
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
                keyword = keyword.Trim().StripVietnameseChars();
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

        public Task<List<T>> Search<T>(Expression<Func<Category, T>> projector, string keyword, bool? isActive, int page, int pageSize, out long totalRows)
        {
            Expression<Func<Category, bool>> spec = x => !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }
            var paging = Context.Filters.Page<Category>(page, pageSize);
            var sort = Context.Filters.Sort<Category, string>(a => a.IdPath);
            totalRows = _categoryRepository.Count(spec);
            return _categoryRepository.GetsAsAsync(projector, spec, sort, paging);
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