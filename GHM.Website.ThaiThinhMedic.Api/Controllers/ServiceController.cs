using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/promotion-voucher")]
    public class ServiceController : GhmControllerBase
    {
        private readonly IServiceRepository _serviceRepository;
        private readonly IServiceCategoryRepository _serviceCategoryRepository;
        private readonly IServiceTypeRepository _serviceTypeRepository;

        public ServiceController(IServiceRepository serviceRepository, IServiceCategoryRepository serviceCategoryRepository, IServiceTypeRepository serviceTypeRepository)
        {
            _serviceRepository = serviceRepository;
            _serviceCategoryRepository = serviceCategoryRepository;
            _serviceTypeRepository = serviceTypeRepository;
        }

        [Route("get-list-service"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetListService(string keyword, string categoryId, int page = 1, int pageSize = int.MaxValue)
        {
            return Ok(new
            {
                items = await _serviceRepository.GetListServiceByCategoryId(x => new
                {
                    Id = x.MaDichVu,
                    Name = x.TenDichVu,
                    Note = x.GhiChu
                }, keyword, categoryId, page, pageSize,
                    out var totalRows),
                totalRows
            });
        }

        [Route("get-list-category"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetListCategory(string serviceTypeId)
        {
            return Ok(await _serviceCategoryRepository.GetByServiceTypeId(serviceTypeId));
        }

        [Route("get-all-type"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetListType()
        {
            return Ok(await _serviceTypeRepository.GetAll());
        }

        [Route("get-service-tree"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetTypeTree()
        {
            var serviceTypeCategoryResult = await _serviceTypeRepository.GetAllTypeCategory();
            return Ok(RenderServiceTypeCategoryTree(serviceTypeCategoryResult));
        }


        private List<TreeDataIdString> RenderServiceTypeCategoryTree(List<ServiceTypeCategoryViewModel> serviceTypeCategoryResult)
        {
            var trees = new List<TreeDataIdString>();
            if (serviceTypeCategoryResult == null)
            {
                return trees;
            }

            var groupType = serviceTypeCategoryResult.GroupBy(x => new
            {
                x.TypeId,
                x.TypeName
            });
            foreach (var group in groupType)
            {
                var tree = new TreeDataIdString
                {
                    Id = group.Key.TypeId,
                    Text = group.Key.TypeName,
                    ChildCount = group.Count()
                };

                foreach (var categoryItem in group)
                {
                    if (categoryItem == null)
                        continue;

                    tree.Children.Add(new TreeDataIdString
                    {
                        Id = categoryItem.CategoryId,
                        Text = categoryItem.CategoryName,
                        ParentId = group.Key.TypeId
                    });
                }
                trees.Add(tree);
            }
            return trees;
        }
    }
}