using FluentValidation;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Website.Event.Infrastructure.Validations
{
    public class EventMetaValidator : AbstractValidator<EventMeta>
    {
        public EventMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteEventResource> websiteEventResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteEventResourceService.GetString("Active status")));

            RuleFor(x => x.EventTranslations)
                    .Must(x => x != null && x.Count > 0)
                    .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.EventTranslations).SetValidator(new EventTranslationMetaValidator(sharedResourceService, websiteEventResourceService));
        }
    }

    public class EventTranslationMetaValidator : AbstractValidator<EventTranslationMeta>
    {
        public EventTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteEventResource> websiteEventResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteEventResourceService.GetString("Event name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteEventResourceService.GetString("Event name"), 256));

            RuleFor(x => x.Description)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 500));

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));
        }
    }

    public class EventDayMetaValidator : AbstractValidator<EventDayMeta>
    {
        public EventDayMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteEventResource> websiteEventResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteEventResourceService.GetString("Active status")));

            RuleFor(x => x.EventDayTranslations)
                    .Must(x => x != null && x.Count > 0)
                    .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleFor(x => x.StartHour)
                .Must(x => x >= 0 && x < 24)
                .WithMessage(sharedResourceService.GetString("Invalid hour."));

            RuleFor(x => x.StartMinute)
                .Must(x => x >= 0 && x <= 59)
                .WithMessage(sharedResourceService.GetString("Invalid minute."));

            RuleFor(x => x.EndHour)
                .Must(x => x >= 0 && x < 24)
                .WithMessage(sharedResourceService.GetString("Invalid hour."));

            RuleFor(x => x.EndMinute)
                .Must(x => x >= 0 && x <= 59)
                .WithMessage(sharedResourceService.GetString("Invalid minute."));

            RuleForEach(x => x.EventDayTranslations).SetValidator(new EventDayTranslationMetaValidator(sharedResourceService, websiteEventResourceService));
        }
    }

    public class EventDayTranslationMetaValidator : AbstractValidator<EventDayTranslationMeta>
    {
        public EventDayTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteEventResource> websiteEventResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteEventResourceService.GetString("Event day name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteEventResourceService.GetString("Event day name"), 256));

            RuleFor(x => x.Description)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 1000));

            RuleFor(x => x.Address)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Address"), 500));

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));
        }
    }
}
