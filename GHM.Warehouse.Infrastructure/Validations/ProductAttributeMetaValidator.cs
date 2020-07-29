using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class ProductAttributeMetaValidator : AbstractValidator<ProductAttributeMeta>
    {
        public ProductAttributeMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService)
        {
            RuleFor(x => x.AttributeId)
                .NotNull()
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("attribute")));

            RuleFor(x => x.IsShowClient)
                .NotNull()
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("show client status")));

            RuleFor(x => x.Value)
                .NotNull()
                .When(x => !x.AttributeValues.Any())
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseEnter, resourceService.GetString("attribute value")));

            RuleFor(x => x.AttributeValues)
                .Must(x => x.Any())
                .When(x => string.IsNullOrEmpty(x.Value))
                .WithMessage(sharedResourceService.GetString(ValidatorMessage.PleaseSelect, resourceService.GetString("attribute value")));
        }
    }
}
