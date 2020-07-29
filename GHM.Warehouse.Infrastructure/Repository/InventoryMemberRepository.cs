using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class InventoryMemberRepository : RepositoryBase, IInventoryMemberRepository
    {
        private readonly IRepository<InventoryMember> _inventoryMemberRepository;
        public InventoryMemberRepository(IDbContext context) : base(context)
        {
            _inventoryMemberRepository = Context.GetRepository<InventoryMember>();
        }

        public async Task<bool> CheckExistsByUserId(string inventoryId, string userId)
        {
            return await _inventoryMemberRepository.ExistAsync(x => x.InventoryId == inventoryId && x.UserId == userId);
        }

        public async Task<int> ForceDelete(string inventoryId, string id)
        {
            var info = await GetInfo(inventoryId, id);
            if (info == null)
                return -1;

            _inventoryMemberRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByInventoryId(string inventoryId)
        {
            var info = await _inventoryMemberRepository.GetsAsync(false, x => x.InventoryId == inventoryId);
            if (info == null)
                return -1;
            _inventoryMemberRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<InventoryMember> GetInfo(string inventoryId, string id, bool isReadOnly = false)
        {
            return await _inventoryMemberRepository.GetAsync(isReadOnly, x => x.InventoryId == inventoryId && x.Id == id);
        }

        public async Task<List<InventoryMember>> GetsByInventoryId(string inventoryId)
        {
            return await _inventoryMemberRepository.GetsAsync(true, x => x.InventoryId == inventoryId);
        }

        public async Task Deletes(string inventoryId, List<string> userIds)
        {
            var members = await _inventoryMemberRepository.GetsAsync(false,
                x => x.InventoryId == inventoryId && userIds.Contains(x.Id));
            if (members != null)
            {
                _inventoryMemberRepository.Deletes(members);
                await Context.SaveChangesAsync();
            }
        }

        public async Task<int> Insert(InventoryMember inventoryMember)
        {
            _inventoryMemberRepository.Create(inventoryMember);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<InventoryMember> inventoryMembers)
        {
            _inventoryMemberRepository.Creates(inventoryMembers);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(InventoryMember inventoryMember)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
