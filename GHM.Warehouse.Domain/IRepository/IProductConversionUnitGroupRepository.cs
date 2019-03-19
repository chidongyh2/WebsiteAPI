using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductConversionUnitGroupRepository
    {
        Task<bool> CheckExists(string id, string productConversionUnitId);

        Task<int> Insert(string id, string productConversionUnitId);

        Task<int> Inserts(List<ProductConversionUnitGroup> productConversionUnitGroup);
    }
}
