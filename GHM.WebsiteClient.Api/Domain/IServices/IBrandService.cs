using GHM.WebsiteClient.Api.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
 public   interface IBrandService
    {
        Task<List<BrandSearchViewModel>> Search(string tenantId);
    }
}
