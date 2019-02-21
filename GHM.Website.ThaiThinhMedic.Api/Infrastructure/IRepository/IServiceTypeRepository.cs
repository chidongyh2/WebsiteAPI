using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IServiceTypeRepository
    {
        Task<List<ServiceType>> GetAll();

        Task<List<ServiceTypeCategoryViewModel>> GetAllTypeCategory();
    }
}
