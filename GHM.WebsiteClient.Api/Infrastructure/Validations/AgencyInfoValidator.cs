using FluentValidation;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.Resources;


namespace GHM.WebsiteClient.Api.Infrastructure.Validations
{
    public class AgencyInfoValidator : AbstractValidator<AgencyInfoMeta>
    {
        public AgencyInfoValidator(IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Length)
                    .NotNull()
                    .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Length")))
                    .MustBeNumber(websiteResourceService.GetString("{0} must be number.", websiteResourceService.GetString("Length")));

            RuleFor(x => x.Width)
                    .NotNull()
                    .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Width")))
                    .MustBeNumber(websiteResourceService.GetString("{0} must be number.", websiteResourceService.GetString("Width")));

            RuleFor(x => x.Height)
                    .NotNull()
                    .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Height")))
                    .MustBeNumber(websiteResourceService.GetString("{0} must be number.", websiteResourceService.GetString("Height")));

            RuleFor(x => x.TotalArea)
                    .NotNull()
                    .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("TotalArea")))
                    .MustBeNumber(websiteResourceService.GetString("{0} must be number.", websiteResourceService.GetString("TotalArea")));

            RuleFor(x => x.StartTime)
                    .NotNull()
                    .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("StartTime")))
                    .MustBeValidDate(websiteResourceService.GetString("{0} date in valid.", websiteResourceService.GetString("StartTime")));

            RuleFor(x => x.Email)
                   .MustBeEmail(websiteResourceService.GetString("Invalid email address."));

            RuleFor(x => x.PhoneNumber)
                .NotNull()
                .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("PhoneNumber")))
                .WithMessage(websiteResourceService.GetString("{0} must not exceed {1} characters.", websiteResourceService.GetString("PhoneNumber"), 256))
                .Matches(@"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$")
                .WithMessage("Invalid phone number.");

            RuleFor(x => x.IdCard)
                .NotNull()
                .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("IdCard")));

            RuleFor(x => x.IdCardDate)
                .NotNull()
                .WithMessage(websiteResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("IdCardDate")))
                .MustBeValidDate(websiteResourceService.GetString("{0} date in valid", websiteResourceService.GetString("IdCard Date")));         
        }
    }
}
