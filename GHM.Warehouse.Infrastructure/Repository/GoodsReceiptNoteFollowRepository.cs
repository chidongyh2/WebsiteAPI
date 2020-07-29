using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class GoodsReceiptNoteFollowRepository : RepositoryBase, IGoodsReceiptNoteFollowRepository
    {
        private readonly IRepository<GoodsReceiptNoteFollow> _goodsReceiptNoteFollowRepository;
        public GoodsReceiptNoteFollowRepository(IDbContext context) : base(context)
        {
            _goodsReceiptNoteFollowRepository = Context.GetRepository<GoodsReceiptNoteFollow>();
        }

        public async Task<int> Insert(GoodsReceiptNoteFollow goodsReceiptNoteFollow)
        {
            _goodsReceiptNoteFollowRepository.Create(goodsReceiptNoteFollow);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string languageId, string name)
        {
            var unsignName = name.Trim().StripVietnameseChars().ToUpper();
            return await _goodsReceiptNoteFollowRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.LanguageId == languageId && x.UnsignName == unsignName);
        }

        public async Task<bool> CheckExists(string tenantId, string id)
        {
            return await _goodsReceiptNoteFollowRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.Id == id);
        }

        public async Task<GoodsReceiptNoteFollow> GetByName(string tenantId, string languageId, string name)
        {
            var unsignName = name.Trim().StripVietnameseChars().ToUpper();
            return await _goodsReceiptNoteFollowRepository.GetAsync(true, x =>
                x.TenantId == tenantId && x.LanguageId == languageId && x.UnsignName == unsignName);
        }

        public Task<List<Suggestion<string>>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<GoodsReceiptNoteFollow, bool>> spec = x =>
                x.TenantId == tenantId && x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            var sort = Context.Filters.Sort<GoodsReceiptNoteFollow, string>(x => x.UnsignName, true);
            var paging = Context.Filters.Page<GoodsReceiptNoteFollow>(page, pageSize);

            totalRows = _goodsReceiptNoteFollowRepository.Count(spec);
            return _goodsReceiptNoteFollowRepository.GetsAsAsync(x => new Suggestion<string>
            {
                Id = x.Id,
                Name = x.Name
            }, spec, sort, paging);
        }
    }
}
