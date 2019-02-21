using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using System.Linq.Expressions;
using System;
using Microsoft.EntityFrameworkCore;

namespace GHM.Product.Infrastructure.Repository
{
    public class ProductValueRepository : RepositoryBase, IProductValueRepository
    {
        private readonly IRepository<ProductValue> _productValueRepository;
        public ProductValueRepository(IDbContext context) : base(context)
        {
            _productValueRepository = Context.GetRepository<ProductValue>();
        }

        public async Task<int> Insert(ProductValue productValue)
        {
            _productValueRepository.Create(productValue);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductValue productValue)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductValue> productValues)
        {
            _productValueRepository.Creates(productValues);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productValue)
        {
            var info = await GetInfo(productValue);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByAttributeId(string tenantId, string productId, string productAttributeId)
        {
            var listProductValue = await _productValueRepository.GetsAsync(false, x => !x.IsDelete && x.ProductId == productId
            && x.ProductAttributeId == productAttributeId);

            if (listProductValue == null || !listProductValue.Any())
                return 0;

            foreach(var item in listProductValue)
            {
                item.IsDelete = true;
            }

            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productValue)
        {
            var info = await GetInfo(productValue);
            if (info == null)
                return -1;

            _productValueRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductValue> GetInfo(string productValue, bool isReadOnly = false)
        {
            return await _productValueRepository.GetAsync(isReadOnly, x => x.Id == productValue && !x.IsDelete);
        }

        public async Task<ProductValue> GetInfo(string productId, string productAttributeId, string productAttributeValueId, bool isReadOnly = false)
        {
            return await _productValueRepository.GetAsync(isReadOnly, x => x.ProductId == productId && x.ProductAttributeId == productAttributeId
            && x.ProductAttributeValueId == productAttributeValueId && !x.IsDelete);
        }

        public async Task<List<ProductValue>> GetsProductId(string productId, bool isReadOnly = false)
        {
            return await _productValueRepository.GetsAsync(true, x => x.ProductId == productId && !x.IsDelete);
        }

        public Task<List<ProductValueViewModel>> GetProductValueByProductId(string tenantId, string prodcutId)
        {
            Expression<Func<ProductValue, bool>> spec = x => !x.IsDelete && x.ProductId == prodcutId;
            Expression<Func<ProductAttributeValueTranslation, bool>> specTranslation = x => x.TenantId == tenantId && !x.IsDelete;

            var query = Context.Set<ProductValue>().Where(spec)
                .Join(Context.Set<ProductAttribute>().Where(x => !x.IsDelete && x.TenantId == tenantId), p => p.ProductAttributeId, pa => pa.Id,
                (p, pa) => new
                {
                    p.Id,
                    p.ProductAttributeId,
                    p.ProductAttributeValueId,
                    p.Value,
                    p.IsShowClient,
                    pa.IsMultiple,
                    pa.IsSelfContent,
                }).Join(Context.Set<ProductAttributeTranslation>().Where(x => !x.IsDelete && x.TenantId == tenantId),
                         pv => pv.ProductAttributeId, pat => pat.ProductAttributeId, (pv, pat) => new
                         {
                             pv.Id,
                             pv.ProductAttributeId,
                             pv.ProductAttributeValueId,
                             pv.Value,
                             pv.IsShowClient,
                             pv.IsSelfContent,
                             pv.IsMultiple,
                             ProductAttributeName = pat.Name,
                             pat.LanguageId
                         })
                        .GroupJoin(Context.Set<ProductAttributeValueTranslation>().Where(specTranslation), p => p.ProductAttributeValueId,
                         pat => pat.ProductAttributeValueId, (p, pat) => new { p, pat })
                         .SelectMany(x => x.pat.DefaultIfEmpty(), (x, pat) => new ProductValueViewModel
                         {
                             Id = x.p.Id,
                             ProductAttributeId = x.p.ProductAttributeId,
                             ProductAttributeValueId = x.p.ProductAttributeValueId,
                             ProductAttributeValueName = pat.Name,
                             Value = x.p.Value,
                             IsShowClient = x.p.IsShowClient,
                             ProductAttributeIsMultiple = x.p.IsMultiple,
                             ProductAttributeIsSelfContent = x.p.IsSelfContent,
                             ProductAttributeName = x.p.ProductAttributeName,
                             LanguageId = x.p.LanguageId,
                         });

            return query.OrderBy(x => x.ProductAttributeValueName).ToListAsync();
        }

        public async Task<bool> CheckExistProductAttributeId(string productAttributeId)
        {
            return await _productValueRepository.ExistAsync(x =>
                x.ProductAttributeId == productAttributeId && !x.IsDelete);
        }

        public async Task<bool> CheckExistProductAttributeValueId(string productAttributeValueId)
        {
            return await _productValueRepository.ExistAsync(x =>
                x.ProductAttributeValueId == productAttributeValueId && !x.IsDelete);
        }
    }
}
