using System.ComponentModel.Design;
using FluentValidation;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Core.Infrastructure.Validations
{
    public class TenantValidator : AbstractValidator<TenantMeta>
    {
        public TenantValidator(IResourceService<GhmCoreResource> resourceService, IResourceService<SharedResource> sharedResourceService)
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage(resourceService.GetString("Tenant name can not be null."))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("Tenant name cannot exceed 256 characters."));
            RuleFor(x => x.Email).NotEmpty().WithMessage(sharedResourceService.GetString("Email cannot be null."))
                .MaximumLength(500).WithMessage(sharedResourceService.GetString("Email cannot exceed 500 characters."));
            RuleFor(x => x.PhoneNumber).NotEmpty().WithMessage(sharedResourceService.GetString("Phonenumber cannot be null."))
                .MaximumLength(50).WithMessage(sharedResourceService.GetString("Phonenumber cannot exceed 50 characters."));
            RuleFor(x => x.Address).NotEmpty().WithMessage(sharedResourceService.GetString("Address cannot be null."))
                .MaximumLength(500).WithMessage(sharedResourceService.GetString("Address cannot exceed 500 characters."));
            RuleFor(x => x.Note)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString("Note cannot exceed 500 characters."));
        }
    }
}
