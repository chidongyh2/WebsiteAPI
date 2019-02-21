using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.MongoDb;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MongoDB.Driver;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class PromotionRepository : MongoDbRepositoryBase, IPromotionRepository
    {
        private readonly IMongoDbRepository<Promotion, string> _promotionRepository;
        public PromotionRepository(IMongoDbContext context) : base(context)
        {
            _promotionRepository = context.GetRepository<Promotion, string>();
        }

        public async Task<string> Insert(Promotion entity)
        {
            entity.UnsignName = entity.Name.StripVietnameseChars().ToLower();
            entity.SeoLink = entity.Name.ToUrlString();
            await _promotionRepository.AddAsync(entity);
            return entity.Id;
        }

        public async Task<long> Update(Promotion entity)
        {
            //var isNameExists = await CheckExists(entity.Id, entity.Name);
            //if (isNameExists)
            //    return -1;

            var result = await _promotionRepository.UpdateAsync(x => x.Id == entity.Id, Builders<Promotion>.Update
                .Set(x => x.Name, entity.Name)
                .Set(x => x.UnsignName, entity.Name.ToLower().StripVietnameseChars())
                .Set(x => x.SeoLink, entity.Name.ToUrlString())
                .Set(x => x.FromDate, entity.FromDate)
                .Set(x => x.ToDate, entity.ToDate)
                .Set(x => x.IsActive, entity.IsActive)
                .Set(x => x.Description, entity.Description));
            return result;
        }

        public async Task<bool> CheckExists(string id)
        {
            return await _promotionRepository.ExistsAsync(x => x.Id == id && x.IsActive && !x.IsDelete);
        }

        public async Task<bool> CheckAvailable(string id)
        {
            return await _promotionRepository.ExistsAsync(x => x.Id == id && !x.IsDelete && x.IsActive);
        }

        public async Task<long> Delete(string id, bool? isConfirm)
        {
            if (!isConfirm.HasValue)
            {
                var now = DateTime.UtcNow;
                var isRunning =
                    await _promotionRepository.ExistsAsync(x => now >= x.FromDate && now <= x.ToDate && x.IsActive);

                if (isRunning)
                    return -1;

                return await _promotionRepository.UpdateAsync(x => x.Id == id,
                    Builders<Promotion>.Update.Set(x => x.IsDelete, true));
            }

            if (isConfirm.Value)
                return await _promotionRepository.UpdateAsync(x => x.Id == id,
                    Builders<Promotion>.Update.Set(x => x.IsDelete, true));

            return -2;
        }

        public async Task<Promotion> GetInfo(string id)
        {
            return await _promotionRepository.GetAsync(x => x.Id == id && !x.IsDelete);
        }

        public async Task<Promotion> GetBySeoLink(string seoLink)
        {
            return await _promotionRepository.GetAsync(x => x.SeoLink == seoLink && !x.IsDelete && x.IsActive);
        }

        public async Task<bool> CheckExists(string id, string name, DateTime? fromDate, DateTime? toDate)
        {
            return await _promotionRepository.ExistsAsync(x => x.Id != id && x.Name.ToLower().Equals(name.ToLower()));
        }

        public Task<List<Promotion>> Search(string keyword, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out long totalRows)
        {
            Expression<Func<Promotion, bool>> spec = x => !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.ToLower().StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }
            if (fromDate.HasValue)
            {
                spec = spec.And(x => x.FromDate <= fromDate.Value);
            }
            if (toDate.HasValue)
            {
                spec = spec.And(x => x.ToDate >= toDate.Value);
            }

            var sort = Context.Filters.Sort<Promotion, string>(x => x.Id);
            var paging = Context.Filters.Page<Promotion>(page, pageSize);

            totalRows = _promotionRepository.Count(spec);
            return _promotionRepository.GetsAsync(spec, sort, paging);
        }
    }
}
