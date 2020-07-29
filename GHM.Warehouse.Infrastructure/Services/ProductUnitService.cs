using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class ProductUnitService : IProductUnitService
    {
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IProductConversionUnitRepository _productConversionUnitRepository;
        private readonly IProductRepository _productRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public ProductUnitService(IProductUnitRepository productUnitRepository, IProductConversionUnitRepository productConversionUnitRepository,
            IProductRepository productRepository, IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> resourceService)
        {
            _productUnitRepository = productUnitRepository;
            _productConversionUnitRepository = productConversionUnitRepository;
            _productRepository = productRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<List<ProductUnitViewModel>> GetsAll(string tenantId, string productId)
        {
            throw new System.NotImplementedException();
        }

        public async Task<ActionResultResponse> Insert(ProductUnit productUnit)
        {
            var productInfo = await _productRepository.CheckExists(productUnit.ProductId, productUnit.TenantId);
            if (!productInfo)
                return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("product")));

            // Kiểm tra đơn vị đã tồn tại chưa.
            var isExists = await _productUnitRepository.CheckExists(productUnit.TenantId, productUnit.ProductId, productUnit.UnitId);
            if (isExists)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.AlreadyExists, _resourceService.GetString("unit")));

            if (productUnit.IsDefault)
            {
                // Kiểm tra đã tồn tại đơn vị mặc định chưa.
                var isDefaultUnitExists = await _productUnitRepository.CheckDefaultUnitExists(productUnit.ProductId, productUnit.TenantId);
                if (isDefaultUnitExists)
                    return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.AlreadyExists, _resourceService.GetString("default unit")));
            }

            var result = await _productUnitRepository.Insert(productUnit);
            return new ActionResultResponse(result, result <= 0
                                                    ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                    : _sharedResourceService.GetString(SuccessMessage.AddSuccessful, _resourceService.GetString("Product unit")));
        }

        public async Task<ActionResultResponse> UpdateConversionUnit(string id, string productId, string unitId, decimal value)
        {
            throw new System.NotImplementedException();
        }

        public async Task<ActionResultResponse> Save(List<ProductUnit> productUnits)
        {
            throw new System.NotImplementedException();
        }

        public async Task<ActionResultResponse> Delete(string id)
        {
            throw new System.NotImplementedException();
        }
    }
}
