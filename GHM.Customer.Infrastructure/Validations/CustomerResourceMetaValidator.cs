using FluentValidation;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
namespace GHM.Customer.Infrastructure.Validations
{
   public class CustomerResourceMetaValidator : AbstractValidator<CustomerResourceMeta>
    {
        public CustomerResourceMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {
          

            RuleFor(x => x.Order)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", customerResourceService.GetString("Order")));

            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", customerResourceService.GetString("Active status")));

            RuleFor(x => x.CustomerResourceTranslations)
                .Must((patientResource, patientResourceTranslation) => patientResource.CustomerResourceTranslations?.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.CustomerResourceTranslations).SetValidator(new CustomerResourceTranslationMetaValidator(sharedResourceService, customerResourceService));
          
    
        }

    }

    public class CustomerResourceTranslationMetaValidator : AbstractValidator<CustomerResourceTranslationMeta>
    {
        public CustomerResourceTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {

            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                   customerResourceService.GetString("Patient resource name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    customerResourceService.GetString("Patient resourc name"), 256));


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
