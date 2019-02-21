using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.MongoDb;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using MongoDB.Driver;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class PromotionSubjectRepository : MongoDbRepositoryBase, IPromotionSubjectRepository
    {
        private readonly IMongoDbRepository<PromotionSubject, string> _promotionSubjectRepository;
        //private readonly IServiceRepository _serviceRepository;
        public PromotionSubjectRepository(IMongoDbContext context) : base(context)
        {
            //_serviceRepository = serviceRepository;
            _promotionSubjectRepository = Context.GetRepository<PromotionSubject, string>();
        }

        public async Task<ActionResultResponse> Save(List<PromotionSubject> promotionSubjects)
        {
            var listRemoveSubjects = promotionSubjects.Where(x => x.IsDelete);
            var listAddNewSubject = promotionSubjects.Where(x => !x.IsDelete);

            // Xoá những phần tử được đánh dấu là xoá.
            foreach (var promotionSubject in listRemoveSubjects)
            {
                await _promotionSubjectRepository.UpdateAsync(x => x.Id == promotionSubject.Id,
                    Builders<PromotionSubject>.Update.Set(x => x.IsDelete, true));
            }

            // Thêm mới những phần tử không bị đánh dấu là xoá.
            foreach (var promotionSubject in listAddNewSubject)
            {
                var isExists = await CheckExists(promotionSubject.PromotionId, promotionSubject.SubjectId, null);
                if (isExists)
                {
                    // Kiểm tra dịch vụ có còn được sử dụng hay không.
                    //var serviceInfo = await _serviceRepository.GetById(promotionSubject.SubjectId);
                    //if (serviceInfo != null)
                    //{                        
                    //    // Nếu tồn tại update những subject bị xoá thành trạng thái chưa xoá.
                    //    await _promotionSubjectRepository.UpdateAsync(
                    //        x => x.PromotionId == promotionSubject.PromotionId &&
                    //             x.SubjectId == promotionSubject.SubjectId && x.IsDelete,
                    //        Builders<PromotionSubject>.Update.Set(x => x.IsDelete, false)
                    //            .Set(x => x.DiscountType, promotionSubject.DiscountType)
                    //            .Set(x => x.DiscountNumber, promotionSubject.DiscountNumber)
                    //            .Set(x => x.Price, (decimal)(serviceInfo.DonGiaDichVu ?? -1))
                    //            .Set(x => x.PromotionApplyTimes, promotionSubject.PromotionApplyTimes));
                    //}
                }
                else
                {
                    // Tạm thời chỉ lấy theo dịch vụ. sau này mở rộng sang các sản phẩm khác cần check theo type.
                    //var serviceInfo = await _serviceRepository.GetById(promotionSubject.SubjectId);
                    //if (serviceInfo != null)
                    //{
                    //    promotionSubject.UnSignName = promotionSubject.SubjectName.StripVietnameseChars().ToLower();
                    //    promotionSubject.Price = (decimal)(serviceInfo.DonGiaDichVu ?? -1);
                    //    await _promotionSubjectRepository.AddAsync(promotionSubject);
                    //}
                }
            }

            return new ActionResultResponse(1, "Thêm dịch vụ khuyến mại thành công.");
        }

        public async Task<ActionResultResponse> Update(List<PromotionSubject> promotionSubjects)
        {
            var promotionId = promotionSubjects.FirstOrDefault()?.PromotionId;
            if (promotionId == null)
                return new ActionResultResponse(-1, "Thông tin chương trình khuyến mại không tồn tại. Vui lòng kiểm tra lại.");

            var listPromotionSubject = await GetListSubject(promotionId);
            if (listPromotionSubject == null)
            {
                await _promotionSubjectRepository.AddManyAsync(promotionSubjects);
                return new ActionResultResponse(1, "Cập nhật dịch vụ khuyến mại thành công.");
            }

            var intersection = listPromotionSubject.Select(x => x.SubjectId)
                .Intersect(promotionSubjects.Select(x => x.SubjectId)).ToList();
            if (intersection.Any())
            {
                // Update existing promotion subject.
                var listUpdate = promotionSubjects.Where(x => intersection.Contains(x.SubjectId)).ToList();
                if (listUpdate.Any())
                {
                    foreach (var promotionSubject in listUpdate)
                    {
                        await _promotionSubjectRepository.UpdateAsync(
                            x => x.PromotionId == promotionId && x.SubjectId == promotionSubject.SubjectId,
                            Builders<PromotionSubject>.Update
                                .Set(x => x.DiscountNumber, promotionSubject.DiscountNumber)
                                .Set(x => x.DiscountType, promotionSubject.DiscountType)
                                .Set(x => x.FromDate, promotionSubject.FromDate)
                                .Set(x => x.ToDate, promotionSubject.ToDate)
                                .Set(x => x.PromotionApplyTimes, promotionSubject.PromotionApplyTimes)
                        );
                    }
                }
            }

            // Add new if not exists
            var listAddNew = promotionSubjects.Where(x => !intersection.Contains(x.Id)).ToList();
            if (listAddNew.Any())
            {
                await Save(listAddNew);
            }
            return new ActionResultResponse(1, "Cập nhật dịch vụ khuyến mại thành công.");
        }

        public async Task<long> Update(PromotionSubject promotionSubject)
        {
            return await _promotionSubjectRepository.UpdateAsync(x => x.Id == promotionSubject.Id, Builders<PromotionSubject>.Update
                .Set(x => x.DiscountType, promotionSubject.DiscountType)
                .Set(x => x.DiscountNumber, promotionSubject.DiscountNumber)
                .Set(x => x.PromotionApplyTimes, promotionSubject.PromotionApplyTimes));
        }

        public async Task<ActionResultResponse> Delete(string id)
        {
            var result = await _promotionSubjectRepository.UpdateAsync(x => x.Id == id,
                Builders<PromotionSubject>.Update.Set(x => x.IsDelete, true));
            return new ActionResultResponse(1, result > 0 ? "Xóa dịch vụ khuyến mại thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public Task<List<PromotionSubject>> Search(string keyword, string promotionId, int page, int pageSize, out long totalRows)
        {
            Expression<Func<PromotionSubject, bool>> spec = x => x.PromotionId == promotionId && !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.ToLower().StripVietnameseChars();
                spec = spec.And(x => x.UnSignName.Contains(keyword));
            }

            var sort = Context.Filters.Sort<PromotionSubject, DateTime>(x => x.CreateTime, true);
            var paging = Context.Filters.Page<PromotionSubject>(page, pageSize);
            totalRows = _promotionSubjectRepository.Count(spec);
            return _promotionSubjectRepository.GetsAsync(spec, sort, paging);
        }

        public async Task<bool> CheckExists(string promotionId, string subjectId, bool? isDelete)
        {
            Expression<Func<PromotionSubject, bool>> spec = x =>
                x.PromotionId == promotionId && x.SubjectId == subjectId;

            if (isDelete.HasValue)
            {
                spec = spec.And(x => x.IsDelete == isDelete.Value);
            }
            return await _promotionSubjectRepository.ExistsAsync(spec);
        }

        public async Task<PromotionSubject> GetInfo(string promotionId, string subjectId)
        {
            return await _promotionSubjectRepository.GetAsync(x =>
                x.PromotionId == promotionId && x.SubjectId == subjectId && !x.IsDelete);
        }

        public async Task<List<PromotionSubject>> GetListSubject(string promotionId)
        {
            return await _promotionSubjectRepository.GetsAsync(x => x.PromotionId == promotionId && !x.IsDelete);
        }
    }
}
