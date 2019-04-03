using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using System.Linq.Expressions;
using System;
using System.Globalization;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductAttributeRepository : RepositoryBase, IProductAttributeRepository
    {
        private readonly IRepository<ProductAttribute> _productValueRepository;
        public ProductAttributeRepository(IDbContext context) : base(context)
        {
            _productValueRepository = Context.GetRepository<ProductAttribute>();
        }

        public async Task<int> Insert(ProductAttribute productAttribute)
        {
            _productValueRepository.Create(productAttribute);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductAttribute productAttribute)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductAttribute> productValues)
        {
            _productValueRepository.Creates(productValues);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productValue, string productId)
        {
            throw new NotImplementedException();
        }


        public async Task<int> DeleteByAttributeId(string tenantId, string productId, string productAttributeId)
        {
            var listProductValue = await _productValueRepository.GetsAsync(false, x => !x.IsDelete && x.ProductId == productId
            && x.AttributeId == productAttributeId);

            if (listProductValue == null || !listProductValue.Any())
                return 0;

            foreach (var item in listProductValue)
            {
                item.IsDelete = true;
            }

            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productValue, string tenantId)
        {
            var info = await GetInfo(productValue, tenantId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByProductId(string productId, string tenantId)
        {
            var productValues = await _productValueRepository.GetsAsync(false, x => x.ProductId == productId && x.TenantId == tenantId && !x.IsDelete);
            if (productValues == null || !productValues.Any())
                return -1;

            _productValueRepository.Deletes(productValues);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductAttribute> GetInfo(string productValue, string tenantId, bool isReadOnly = false)
        {
            return await _productValueRepository.GetAsync(isReadOnly, x => x.Id == productValue && !x.IsDelete && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<ProductAttribute> GetInfo(string tenantId, string productId, string attributeId, bool isReadOnly = false)
        {
            return await _productValueRepository.GetAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.ProductId == productId && x.AttributeId == attributeId
                && !x.IsDelete);
        }

        public async Task<List<ProductAttribute>> GetsProductId(string productId,string tenantId, bool isReadOnly = false)
        {
            return await _productValueRepository.GetsAsync(true, x => x.ProductId == productId && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<List<ProductValueViewModel>> GetProductValueByProductId(string tenantId, string productId)
        {
            var query = from pa in Context.Set<ProductAttribute>()
                        join a in Context.Set<Domain.Models.Attribute>() on pa.AttributeId equals a.Id
                        join at in Context.Set<AttributeTranslation>() on pa.AttributeId equals at.AttributeId
                        join pav in Context.Set<ProductAttributeValue>() on pa.Id equals pav.ProductAttributeId into gpav
                        from rpav in gpav.DefaultIfEmpty()
                        join avt in Context.Set<AttributeValueTranslation>() on rpav.AttributeValueId equals avt
                            .AttributeValueId into gavt
                        from ravt in gavt.DefaultIfEmpty()
                        where !pa.IsDelete && pa.ProductId == productId && at.LanguageId == CultureInfo.CurrentCulture.Name
                              && at.TenantId == tenantId && !at.IsDelete && !ravt.IsDelete && ravt.LanguageId == CultureInfo.CurrentCulture.Name
                              && a.TenantId == tenantId && !a.IsDelete
                        select new ProductValueViewModel
                        {
                            AttributeId = pa.AttributeId,
                            AttributeName = at.Name,
                            Value = pa.Value,
                            IsShowClient = pa.IsShowClient,
                            AttributeValueId = rpav != null ? rpav.AttributeValueId : string.Empty,
                            AttributeValueName = ravt != null ? ravt.Name : string.Empty,
                            IsMultiple = a.IsMultiple,
                            IsSelfContent = a.IsSelfContent
                        };

            return await query.ToListAsync();
        }

        public async Task<bool> CheckExistProductAttributeId(string productAttributeId, string tenantId)
        {
            return await _productValueRepository.ExistAsync(x =>
                x.AttributeId == productAttributeId && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExistProductAttributeValueId(string productAttributeValueId, string tenantId)
        {
            //return await _productValueRepository.ExistAsync(x =>
            //    x.ProductAttributeValueId == productAttributeValueId && !x.IsDelete);
            return false;
        }

        public async Task<List<ProductAttribute>> GetsByProductId(string productId, string tenantId)
        {
            return await _productValueRepository.GetsAsync(false, x => x.ProductId == productId && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<int> Updates(List<ProductAttribute> productValues)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string productId, string attributeId)
        {
            var productAttribute = await _productValueRepository.GetAsync(false,
                x => x.TenantId == tenantId && x.ProductId == productId && x.AttributeId == attributeId);
            if (productAttribute == null)
                return -1;

            productAttribute.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteAtrribute(string tenantId, string productId, string attributeId)
        {
            var productAttribute = await _productValueRepository.GetAsync(false, x => x.TenantId == tenantId && x.ProductId == productId && x.AttributeId == attributeId && !x.IsDelete);
            if (productAttribute == null)
                return -1;
            productAttribute.IsDelete = true;
            return await Context.SaveChangesAsync();
        }
    }
}
