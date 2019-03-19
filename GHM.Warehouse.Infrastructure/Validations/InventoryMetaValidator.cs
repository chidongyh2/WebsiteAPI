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
    public class InventoryMetaValidator : AbstractValidator<InventoryMeta>
    {
        public InventoryMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.InventoryDate)
                .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid, resourceService.GetString("inventory date")))
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("product")));

            RuleFor(x => x.WarehouseId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("warehouse")));

            RuleFor(x => x.Note)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan,
                    sharedResourceService.GetString("Note"), 500));

            RuleFor(x => x.Details)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                    resourceService.GetString("product")));

            RuleForEach(x => x.Details)
                .SetValidator(new InventoryDetailMetaValidator(sharedResourceService, resourceService));
        }
    }

    public class InventoryDetailMetaValidator : AbstractValidator<InventoryDetailMeta>
    {
        public InventoryDetailMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.Reason)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.MustLessThan,
                    sharedResourceService.GetString("Reason"), 500));
        }
    }
}
