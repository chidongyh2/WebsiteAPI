using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.Resources;

namespace GHM.WebsiteClient.Api.Infrastructure.Validations
{
    public class FeedbackValidator : AbstractValidator<FeedbackMeta>
    {
        public FeedbackValidator(IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required")
                .MaximumLength(256)
                .WithMessage(websiteResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    websiteResourceService.GetString("Title"), 256));

            RuleFor(x => x.Content)
                .MaximumLength(4000)
                .WithMessage(websiteResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    websiteResourceService.GetString("Content"), 4000));

            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Full name is required")
                .MaximumLength(256)
                .WithMessage(websiteResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    websiteResourceService.GetString("Full name"), 256));

            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email address is required")
                .EmailAddress().WithMessage("Email is not correct format")
                .MaximumLength(100)
                .WithMessage(websiteResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    websiteResourceService.GetString("Email"), 100));

            RuleFor(x => x.PhoneNumber)
                .NotEmpty().WithMessage("Phone number is required")
                .MaximumLength(20)
                .WithMessage(websiteResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    websiteResourceService.GetString("Phone"), 20));
        }
    }
}
