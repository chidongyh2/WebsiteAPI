using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using System.Linq.Expressions;
using System;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductTranslationRepository : RepositoryBase, IProductTranslationRepository
    {
        private readonly IRepository<ProductTranslation> _productTranslationRepository;
        public ProductTranslationRepository(IDbContext context) : base(context)
        {
            _productTranslationRepository = Context.GetRepository<ProductTranslation>();
        }

        public async Task<int> Insert(ProductTranslation productTranslation)
        {
            _productTranslationRepository.Create(productTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductTranslation productTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductTranslation> productTranslations)
        {
            _productTranslationRepository.Creates(productTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productId)
        {
            var info = await _productTranslationRepository.GetsAsync(false, x => x.ProductId == productId);
            if (info == null || !info.Any())
                return -1;
            foreach (var productTranslation in info)
            {
                productTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productId)
        {
            var info = await _productTranslationRepository.GetsAsync(false, x => x.ProductId == productId);
            if (info == null || !info.Any())
                return -1;

            _productTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductTranslation> GetInfo(string productId, string languageId, bool isReadOnly = false)
        {
            return await _productTranslationRepository.GetAsync(isReadOnly, x => x.ProductId == productId
                                                                                          && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<ProductTranslation>> GetsProductId(string productId, bool isReadOnly = false)
        {
            return await _productTranslationRepository.GetsAsync(true, x => x.ProductId == productId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string productId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _productTranslationRepository.ExistAsync(x =>
                x.ProductId != productId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }

        public Task<List<ProductTranslationViewModel>> GetAllById(string tenantId, string id)
        {
            Expression<Func<ProductTranslation, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.ProductId == id;

            var query = Context.Set<ProductTranslation>().Where(spec).Select(x => new ProductTranslationViewModel
            {
                Id = x.ProductId,
                LanguageId = x.LanguageId,
                Name = x.Name,
                SeoLink = x.SeoLink
            }).ToListAsync();

            return query;
        }
    }
}
