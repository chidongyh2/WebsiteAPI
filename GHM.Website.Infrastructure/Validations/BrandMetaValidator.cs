using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Infrastructure.Validations
{
    public class BrandMetaValidator : AbstractValidator<BrandMeta>
    {
        public BrandMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> productResourceService)
        {

            RuleFor(x => x.Name)
               .NotNull()
               .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Name")));

        }
    }
}
