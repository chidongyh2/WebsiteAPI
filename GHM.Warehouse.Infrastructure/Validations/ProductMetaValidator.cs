using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class ProductMetaValidator : AbstractValidator<ProductMeta>
    {
        public ProductMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.IsActive)
                  .NotNull()
                  .WithMessage(sharedResourceService.GetString("{0} can not be null.", resourceService.GetString("Active status")));

            RuleFor(x => x.IsManagementByLot)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", resourceService.GetString("Management by lot status")));

            RuleFor(x => x.SalePrice)
                .NotNull()
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("sale price")));

            RuleFor(x => x.Translations)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleFor(x => x.UnitId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("unit")))
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new ProductTranslationMetaValidator(sharedResourceService, resourceService));
        }
    }

    public class ProductTranslationMetaValidator : AbstractValidator<ProductTranslationMeta>
    {
        public ProductTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    resourceService.GetString("Product name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    resourceService.GetString("Product name"), 256));

            //RuleFor(x => x.Description)
            //    .MaximumLength(500).WithMessage(sharedResourceService.GetString(
            //        "{0} is not allowed over {1} characters.",
            //        sharedResourceService.GetString("Description"), 500));

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} is not allowed over {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));
        }
    }
}
