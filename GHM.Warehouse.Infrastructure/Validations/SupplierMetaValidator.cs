using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Infrastructure.Validations
{
    public class SupplierMetaValidator : AbstractValidator<SupplierMeta>
    {
        public SupplierMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> productResourceService)
        {
            RuleFor(x => x.Name)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Name")));

            RuleFor(x => x.IsActive)
               .NotNull()
               .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Active status")));

        }
    }
}
