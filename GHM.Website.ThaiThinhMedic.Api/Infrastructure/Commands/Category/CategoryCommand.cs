using GHM.Infrastructure.Models;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Category
{
    public class CategoryCommand : IRequest<ActionResultResponse>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public string Image { get; set; }
    }
}
