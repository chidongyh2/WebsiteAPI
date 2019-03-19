using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class ProductValueMetaValidator : AbstractValidator<ProductAttributeMeta>
    {
        public ProductValueMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.AttributeId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    resourceService.GetString("attribute")))
                .MaximumLength(50)
                .WithMessage(sharedResourceService.GetString(resourceService.GetString(ValidatorMessage.MaxLength,
                    resourceService.GetString("attribute"), 50)));
        }
    }
}
