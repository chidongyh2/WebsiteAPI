using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class FaqRepository : RepositoryBase, IFaqRepository
    {

        protected FaqRepository(IDbContext context) : base(context)
        {
        }

        public async Task<List<FaqSearchViewModel>> Search(string keyword, bool? isActive)
        {
            throw new NotImplementedException();
        }
    }
}
