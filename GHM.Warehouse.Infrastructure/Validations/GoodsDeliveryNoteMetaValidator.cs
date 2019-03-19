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
    public class GoodsDeliveryNoteMetaValidator : AbstractValidator<GoodsDeliveryNoteMeta>
    {
        public GoodsDeliveryNoteMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.WarehouseId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("warehouse")));

            RuleFor(x => x.ReceiverId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("receiver")))
                .When(x => x.Type == GoodsDeliveryNoteType.SelfConsumer || x.Type == GoodsDeliveryNoteType.Transfer)
                .MaximumLength(50)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                    resourceService.GetString("receiver fullname"), 50));

            RuleFor(x => x.ReceiverFullName)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("deliver fullname")))
                .When(x => x.Type == GoodsDeliveryNoteType.Retail || x.Type == GoodsDeliveryNoteType.SelfConsumer)
                .MaximumLength(50)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                    resourceService.GetString("receiver fullname"), 50));

            RuleFor(x => x.ReceiverPhoneNumber)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("deliver phone number")))
                .When(x => x.Type == GoodsDeliveryNoteType.Retail)
                .MaximumLength(20)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                    resourceService.GetString("receiver phone number"), 20));

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

            RuleFor(x => x.OfficeId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    resourceService.GetString("receiving office")))
                .When(x => x.Type == GoodsDeliveryNoteType.SelfConsumer);

            RuleFor(x => x.ReceptionWarehouseId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    resourceService.GetString("reception warehouse")))
                .When(x => x.Type == GoodsDeliveryNoteType.Transfer);

            RuleFor(x => x.GoodsDeliveryNoteDetails)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelectAtLeast, 1, resourceService.GetString("product")));

            RuleForEach(x => x.GoodsDeliveryNoteDetails).SetValidator(new GoodsDeliveryNoteDetailMetaValidator(sharedResourceService, resourceService));
        }
    }
}
