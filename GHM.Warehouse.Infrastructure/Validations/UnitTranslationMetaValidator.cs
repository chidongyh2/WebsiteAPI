using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class UnitTranslationMetaValidator : AbstractValidator<UnitTranslationMeta>
    {
        public UnitTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> productResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Name")));

            RuleFor(x => x.Abbreviation)
               .NotNull()
               .NotEmpty()
               .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Abbreviation")));

            // RuleFor(x => x.PositionName)
            //.NotNull()
            //.WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("PositionName")));

        }
    }
}
