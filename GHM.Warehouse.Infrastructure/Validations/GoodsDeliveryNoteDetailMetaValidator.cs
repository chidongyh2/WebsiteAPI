using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class GoodsDeliveryNoteDetailMetaValidator : AbstractValidator<GoodsDeliveryNoteDetailMeta>
    {
        public GoodsDeliveryNoteDetailMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.ProductId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("product")));

            RuleFor(x => x.GoodsReceiptNoteDetailCode)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("product")));

            RuleFor(x => x.Price)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("price")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Price")));

            RuleFor(x => x.Quantity)
                .Must(x => x > 0)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustGreaterThan, resourceService.GetString("quantity"), 0))
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("Quantity")))
                .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, resourceService.GetString("Quantity")));

            RuleFor(x => x.UnitId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("unit")));
        }
    }
}
