using FluentValidation;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Customer.Infrastructure.Validations
{
    public class JobMetaValidator : AbstractValidator<JobMeta>
    {
        public JobMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> patientResourceService)
        {
         
            RuleFor(x => x.Order)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", patientResourceService.GetString("Order")));

            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", patientResourceService.GetString("Active status")));

            RuleFor(x => x.JobTranslations)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

         RuleForEach(x => x.JobTranslations).SetValidator(new JobTranslationMetaValidator(sharedResourceService, patientResourceService));
           
        }
    }


    public class JobTranslationMetaValidator : AbstractValidator<JobTranslationMeta>
    {
        public JobTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> patientResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    patientResourceService.GetString("Job name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    patientResourceService.GetString("Job name"), 256));

           

            RuleFor(x => x.Description)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} is not allowed over {1} characters.",
                    sharedResourceService.GetString("Description"), 500));

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} is not allowed over {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));

         
        }
    }
}
