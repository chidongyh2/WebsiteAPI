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
    public class ProductConversionUnitMetaValidator : AbstractValidator<ProductConversionUnitMeta>
    {
        public ProductConversionUnitMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.UnitId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("unit")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    resourceService.GetString("unit id"), 50));

            RuleFor(x => x.ConversionUnitId)
                .NotNullAndEmpty(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("conversion unit")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    resourceService.GetString("conversion unit"), 50));
        }
    }
}
