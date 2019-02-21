using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class FaqRepository : RepositoryBase, IFaqRepository
    {

        protected FaqRepository(IDbContext context) : base(context)
        {
        }

        public async Task<ActionResultResponse> Insert()
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResultResponse> Update()
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResultResponse> Delete()
        {
            throw new NotImplementedException();
        }

        public async Task<List<FaqSearchViewModel>> Search(string keyword, bool? isActive)
        {
            throw new NotImplementedException();
        }
    }
}
