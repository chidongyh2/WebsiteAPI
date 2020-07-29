using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class GoodsReceiptNoteMetaValidator : AbstractValidator<GoodsReceiptNoteMeta>
    {
        public GoodsReceiptNoteMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.SupplierId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    resourceService.GetString("supplier")));

            RuleFor(x => x.WarehouseId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("warehouse")));

            RuleFor(x => x.DeliverFullName)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("deliver fullname")));

            RuleFor(x => x.DeliverPhoneNumber)
                .MustBePhoneNumber(sharedResourceService.GetString(ValidatorMessage.InValid,
                    resourceService.GetString("Deliver phone number")))
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("deliver phone number")));

            RuleFor(x => x.Day)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("entry day")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("entry day")))
                .Must(x => x > 0 && x < 32)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.GreaterThanAndLessThan, resourceService.GetString("entry day"), 0, 32));

            RuleFor(x => x.Month)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("entry month")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("entry month")))
                .Must(x => x > 0 && x < 13)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.GreaterThanAndLessThan, resourceService.GetString("entry month"), 0, 13)); ;

            RuleFor(x => x.Year)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter,
                    resourceService.GetString("entry year")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber,
                    resourceService.GetString("entry year")));

            RuleFor(x => x.Note)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed, sharedResourceService.GetString("note"), 500));

            RuleFor(x => x.Follow)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("follow")))
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed, resourceService.GetString("follow"), 256));

            RuleFor(x => x.EntryDate)
                .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("entry date")))
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("entry date")));

            RuleFor(x => x.InvoiceNo)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("invoice no")))
                .MaximumLength(50)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed, resourceService.GetString("invoice no"), 50));

            RuleFor(x => x.InvoiceDate)
                .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("invoice date")))
                .When(x => x.Type != GoodsReceiptNoteType.Inventory)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("invoice date")))
                .When(x => x.Type != GoodsReceiptNoteType.Inventory);

            RuleFor(x => x.GoodsReceiptNoteDetails)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelectAtLeast, 1, resourceService.GetString("product")));

            RuleForEach(x => x.GoodsReceiptNoteDetails).SetValidator(new GoodsReceiptNoteDetailMetaValidator(sharedResourceService, resourceService));
        }

    }
}
