using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Menu
{
    public class MenuCommand : IRequest<ActionResultResponse>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        public string IdPath { get; set; }

        public string Url { get; set; }

        public string Icon { get; set; }

        public int Order { get; set; }

        public int? ParentId { get; set; }

        public DateTime CreateTime { get; set; }

        public ReferenceType ReferenceType { get; set; }        

        public Dictionary<int, string> ListReference { get; set; }        
    }
}
