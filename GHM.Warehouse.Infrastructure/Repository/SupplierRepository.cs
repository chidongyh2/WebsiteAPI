using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class SupplierRepository : RepositoryBase, ISupplierRepository
    {
        private readonly IRepository<Supplier> _supplierRepository;
        private readonly IRepository<Contact> _contactRepository;

        public SupplierRepository(IDbContext context) : base(context)
        {
            _supplierRepository = Context.GetRepository<Supplier>();
            _contactRepository = Context.GetRepository<Contact>();
        }

        public async Task<bool> CheckExistsById(string id, string tenantId)
        {
            return await _supplierRepository.ExistAsync(x => x.Id == id && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<int> Delete(string id, string tenantId)
        {
            var supplierInfo = await GetInfo(id, tenantId);
            if (supplierInfo == null)
                return -1;

            supplierInfo.IsDelete = true;
            return await Context.SaveChangesAsync(); ;
        }

        public async Task<int> ForceDelete(string id, string tenantId)
        {
            var supplierInfo = await GetInfo(id, tenantId);
            if (supplierInfo == null)
                return -1;

            _supplierRepository.Delete(supplierInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<Supplier> GetInfo(string id, string tenantId, bool isReadOnly = false)
        {
            return await _supplierRepository.GetAsync(isReadOnly, x => x.Id == id && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<int> Insert(Supplier supplier)
        {
            _supplierRepository.Create(supplier);
            return await Context.SaveChangesAsync();
        }

        public Task<List<SupplierSearchViewModel>> Search(string tenantId, string languageId, string name, string address, bool? isActive, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<Supplier, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;

            if (!string.IsNullOrEmpty(name))
            {
                name = name.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(name));
            }

            if (!string.IsNullOrEmpty(address))
            {
                address = address.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.Address.Contains(address));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Supplier>().Where(spec)
                        .Select(t => new SupplierSearchViewModel
                        {
                            Id = t.Id,
                            Name = t.Name,
                            IsActive = t.IsActive,
                            Address = t.Address,
                        });

            totalRows = _supplierRepository.Count(spec);

            return query.OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Update(Supplier supplier)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsByName(string tenantId, string supllierId, string name)
        {
            name = name.Trim().StripVietnameseChars().ToUpper();

            return await _supplierRepository.ExistAsync(x => x.TenantId == tenantId &&
           (string.IsNullOrEmpty(supllierId) || x.Id != supllierId) && !x.IsDelete && x.UnsignName.Equals(name));
        }

        public Task<List<Suggestion<string>>> Suggestions(string tenantId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Supplier, bool>> spec = x => x.IsActive && !x.IsDelete && x.TenantId == tenantId;
            if (!string.IsNullOrEmpty(keyword))
            {
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            var sort = Context.Filters.Sort<Supplier, string>(x => x.UnsignName, true);
            var paging = Context.Filters.Page<Supplier>(page, pageSize);
            totalRows = _supplierRepository.Count(spec);
            return _supplierRepository.GetsAsAsync(x => new Suggestion<string>
            {
                Id = x.Id,
                Name = x.Name
            }, spec, sort, paging);
        }
    }
}
