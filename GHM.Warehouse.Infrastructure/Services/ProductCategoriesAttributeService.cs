using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore.Internal;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class ProductCategoriesAttributeService : IProductCategoriesAttributeService
    {
        private readonly IProductCategoriesAttributeRepository _productCategoriesAttributeRepository;
        private readonly IProductCategoryRepository _productCategoryRepository;
        private readonly IAttributeRepository _attributeRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public ProductCategoriesAttributeService(IProductCategoriesAttributeRepository productCategoriesAttributeRepository,
                IAttributeRepository attributeRepository,
                IProductCategoryRepository productCategoryRepository,
                IResourceService<SharedResource> sharedResourceService,
                IResourceService<GhmWarehouseResource> resourceService)
        {
            _productCategoriesAttributeRepository = productCategoriesAttributeRepository;
            _productCategoryRepository = productCategoryRepository;
            _attributeRepository = attributeRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(int categoryId, string attributeId)
        {
            var productCategoriesAttributeInfo = await _productCategoriesAttributeRepository.GetInfo(categoryId, attributeId);
            if (productCategoriesAttributeInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("ProductCategoriesAttribute does not exists."));

            var result = await _productCategoriesAttributeRepository.ForceDelete(categoryId, attributeId);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Delete ProductCategoriesAttribute successful."));
        }

        public async Task<List<ProductCategoriesAttributeViewModel>> GetDetailAttributeValues(string tenantId, string languageId, int categoryId)
        {
            var items = await _productCategoriesAttributeRepository.GetDetailAttributeValues(tenantId, languageId, categoryId);

            var proCateInfo = await _productCategoryRepository.GetInfo(categoryId);

            if (proCateInfo == null)
                return items;

            foreach (var id in proCateInfo.IdPath.Split("."))
            {
                items.AddRange(await _productCategoriesAttributeRepository.GetDetailAttributeValues(tenantId, languageId, Convert.ToInt32(id)));
            }

            var result = from item in items
                         group item by new { item.AttributeId, item.AttributeName } into g
                         select new ProductCategoriesAttributeViewModel
                         {
                             AttributeId = g.Key.AttributeId,
                             AttributeName = g.Key.AttributeName,
                             CategoryId = categoryId
                         };

            return result.ToList();
        }

        public async Task<ActionResultResponse> Insert(string tenantId, ProductCategoriesAttributeMeta productCategoriesAttributeMeta)
        {
            var lstproductCategoriesAttributes = new List<ProductCategoriesAttribute>();

            foreach (var item in productCategoriesAttributeMeta.ProductCategoriesAttributes)
            {
                if (!(await _productCategoryRepository.CheckExists(tenantId, item.CategoryId)))
                    return new ActionResultResponse(-1, _resourceService.GetString("Category not exists"));

                if (!(await _attributeRepository.CheckExists(item.AttributeId, tenantId)))
                    return new ActionResultResponse(-1, _resourceService.GetString("Attribute not exists"));

                if (!(await _productCategoriesAttributeRepository.CheckExistsById(item.CategoryId, item.AttributeId)))
                {
                    lstproductCategoriesAttributes.Add(new ProductCategoriesAttribute()
                    {
                        CategoryId = item.CategoryId,
                        AttributeId = item.AttributeId,
                    });
                }
            }

            var result = await _productCategoriesAttributeRepository.Inserts(lstproductCategoriesAttributes);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            return new ActionResultResponse(1, _resourceService.GetString("Add new ProductCategoriesAttribute successful"));
        }

        public async Task<List<ProductCategoriesAttributeSearchViewModel>> Search(string tenantId, string languageId, int categoryId)
        {
            return await _productCategoriesAttributeRepository.Search(tenantId, languageId, categoryId);
        }
    }
}
