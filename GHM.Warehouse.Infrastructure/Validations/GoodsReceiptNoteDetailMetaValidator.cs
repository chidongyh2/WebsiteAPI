using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class GoodsReceiptNoteDetailMetaValidator : AbstractValidator<GoodsReceiptNoteDetailMeta>
    {
        public GoodsReceiptNoteDetailMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.ProductId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("product")));

            RuleFor(x => x.ExpiryDate)
                .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid,
                    resourceService.GetString("expired date")));

            RuleFor(x => x.Price)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("price")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Price")));

            RuleFor(x => x.Quantity)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("Quantity")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Quantity")));

            RuleFor(x => x.LotId)
                .MaximumLength(50)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MaxLength, resourceService.GetString("Lot number"), 50));

            RuleFor(x => x.UnitId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("unit")));

            RuleFor(x => x.Tax)
               .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Tax")))
               .When(x => x.Tax.HasValue)
                .Must(x => x < 100 && x > 0)
                .When(x => x.Tax.HasValue)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThanAndLessThanOrEqual, resourceService.GetString("Tax"), 0, 100));
        }
    }
}
