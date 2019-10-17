using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class OrderMetaValidator : AbstractValidator<OrderMeta>
    {
        public OrderMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.DeliveryDate)
                .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("delivery date")))
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("product")));

            RuleFor(x => x.CustomerName)
              .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("customer name")))
              .MaximumLength(250)
              .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                  resourceService.GetString("customer name"), 250));

            RuleFor(x => x.PhoneNumber)
            .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("PhoneNumber")))
            .MustBePhoneNumber(sharedResourceService.GetString(ValidatorMessage.InValidPhoneNumber, resourceService.GetString("PhoneNumber")))
            .MaximumLength(50)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                resourceService.GetString("PhoneNumber"), 50));

            RuleFor(x => x.Email)
            .MustBeEmail(sharedResourceService.GetString(ValidatorMessage.InValidEmail, resourceService.GetString("Email")))
            .MaximumLength(50)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                resourceService.GetString("Email"), 50));

            RuleFor(x => x.Discount)
            .Must(x => x >= 0)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("Discount"), 0))
            .When(x=> x.DiscountType == 1)
            .Must(x => x <= 100)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan, resourceService.GetString("Discount"), 101))
            .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("Discount")));

           RuleFor(x => x.Transport)
           .Must(x => x >= 0)
           .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("Transport"), 0))           
           .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("Transport")));

            RuleFor(x => x.DiscountType)
           .Must(x => x >= 0)
           .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("DiscountType"), 0))
           .When(x => x.DiscountType == 1)
           .Must(x => x <= 1)
           .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan, resourceService.GetString("DiscountType"), 2))
           .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("DiscountType")));

            RuleFor(x => x.Address)
            .MaximumLength(500)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustNotExceed,
                resourceService.GetString("Address"), 500));

            RuleFor(x => x.Note)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan,
                    sharedResourceService.GetString("Note"), 500));

            RuleFor(x => x.OrderDetails)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    resourceService.GetString("product")));

            RuleForEach(x => x.OrderDetails)
                .SetValidator(new OrderDetailMetaValidator(sharedResourceService, resourceService));
        }
    }

    public class OrderDetailMetaValidator : AbstractValidator<OrderDetailMeta>
    {
        public OrderDetailMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.ProductId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("product")));

            RuleFor(x => x.Price)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("price")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Price")));

            RuleFor(x => x.Quantity)
                .Must(x => x > 0)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("quantity"), 0))
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("Quantity")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Quantity")));

            RuleFor(x => x.Discount)
            .Must(x => x >= 0)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("Discount"), 0))
            .When(x => x.DiscountType == 1)
            .Must(x => x <= 100)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan, resourceService.GetString("Discount"), 101))
            .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("Discount")));

            RuleFor(x => x.Amount)
            .Must(x => x >= 0)
            .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("Amount"), 0))
            .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("Amount")));

            RuleFor(x => x.DiscountType)
           .Must(x => x >= 0)
           .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("DiscountType"), 0))
           .When(x => x.DiscountType == 1)
           .Must(x => x <= 1)
           .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan, resourceService.GetString("DiscountType"), 2))
           .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("DiscountType")));

            RuleFor(x => x.UnitId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("unit")));
        }
    }
}
