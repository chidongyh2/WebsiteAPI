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
    public class WarehouseMetaValidator : AbstractValidator<WarehouseMeta>
    {
        public WarehouseMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.Name)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("warehouse name")))
                .MaximumLength(250)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MaxLength, resourceService.GetString("warehouse name"), 250));

            RuleFor(x => x.InventoryCalculatorMethod)
                .NotNull()
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("inventory calculator method")));

            RuleFor(x => x.Address)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MaxLength, resourceService.GetString("warehouse address"), 500));

            RuleFor(x => x.Description)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MaxLength, resourceService.GetString("warehouse description"), 500));
        }
    }
}
