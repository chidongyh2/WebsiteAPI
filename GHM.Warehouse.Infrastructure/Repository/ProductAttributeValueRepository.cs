using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductAttributeValueRepository : RepositoryBase, IProductAttributeValueRepository
    {
        private readonly IRepository<ProductAttributeValue> _productAttributeValueRepository;
        public ProductAttributeValueRepository(IDbContext context) : base(context)
        {
            _productAttributeValueRepository = Context.GetRepository<ProductAttributeValue>();
        }

        public async Task<int> Insert(ProductAttributeValue productAttributeValue)
        {
            _productAttributeValueRepository.Create(productAttributeValue);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductAttributeValue> productAttributeValues)
        {
            _productAttributeValueRepository.Creates(productAttributeValues);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string productAttributeId, string attributeValueId)
        {
            return await _productAttributeValueRepository.ExistAsync(x =>
                x.ProductAttributeId == productAttributeId && x.AttributeValueId == attributeValueId);
        }

        public async Task<List<ProductAttributeValueViewModel>> GetsByProductAttributeId(string productAttributeId)
        {
            var query = from pav in Context.Set<ProductAttributeValue>()
                        join avt in Context.Set<AttributeValueTranslation>() on pav.AttributeValueId equals avt.AttributeValueId
                        where pav.ProductAttributeId == productAttributeId && avt.LanguageId == CultureInfo.CurrentCulture.Name
                        select new ProductAttributeValueViewModel
                        {
                            AttributeValueId = pav.AttributeValueId,
                            AttributeValueName = avt.Name
                        };
            return await query.ToListAsync();
        }

        public async Task<int> DeleteByProductAttributeId(string productAttributeId)
        {
            var productAttributeValues =
                await _productAttributeValueRepository.GetsAsync(false,
                    x => x.ProductAttributeId == productAttributeId);
            if (productAttributeValues == null || !productAttributeValues.Any())
                return -1;

            _productAttributeValueRepository.Deletes(productAttributeValues);
            return await Context.SaveChangesAsync();
        }
    }
}
