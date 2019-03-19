using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductConversionUnitRepository
    {
        Task<int> Insert(ProductConversionUnit productConversionUnit);

        Task<int> Update(ProductConversionUnit productConversionUnit);

        Task<int> Inserts(List<ProductConversionUnit> productConversionUnits);

        //Task<int> Delete(string productUnitId, string productUnitConversionId);

        Task<ProductConversionUnit> GetInfo(string tenantId, string productId, string unitId, string conversionUnitId, bool isReadOnly = false);

        Task<List<ProductConversionUnit>> GetsProductId(string tenantId, string productId);

        Task<bool> CheckExists(string tenantId, string productId, string unitId, string conversionUnitId);

        Task<decimal?> GetConversion(string tenantId, string productId, string unitId, string conversionUnitId);

        Task<int> ForceDeleteByProductId(string tenantId, string productId);

        Task<List<ProductConversionUnitViewModel>> GetsByProductId(string tenantId, string productId);

        Task<List<ProductConversionUnit>> GetsAll(string tenantId, string productId, bool isReadOnly = false);

        Task<int> Delete(string tenantId, string productId, string unitId);

        Task<int> Updates(List<ProductConversionUnit> productConversionUnits);

        Task<string> GetCurrentConversionUnitGroupId(string tenantId, string productId, DateTime entryDate);
    }
}

