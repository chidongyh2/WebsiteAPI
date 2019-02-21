using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class FeedbackValidator : AbstractValidator<FeedbackMeta>
    {
        public FeedbackValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required")
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Title"), 256));

            RuleFor(x => x.Content)
                .MaximumLength(4000)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Content"), 4000));

            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Full name is required")
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Full name"), 256));

            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email address is required")
                .EmailAddress().WithMessage("Email is not correct format")
                .MaximumLength(100)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Email"), 100));

            RuleFor(x => x.PhoneNumber)
                .NotEmpty().WithMessage("Phone number is required")
                .MaximumLength(20)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Phone"), 20));
        }
    }
}
