using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.Resources;

namespace GHM.Product.Infrastructure.Validations
{
    public class UnitTranslationMetaValidator : AbstractValidator<UnitTranslationMeta>
    {
        public UnitTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmProductResource> productResourceService)
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
