using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Resources;

namespace GHM.Customer.Infrastructure.Validations
{


    /// <summary>
    /// Validator giúp validate nội dung của object được gửi lên từ phía client. (Ở đây đang sử dụng FluentValidation.AspNetCore).
    /// </summary>
    class CustomerMetaValidator : AbstractValidator<CustomerMeta>
    {
        public CustomerMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> resourceService)
        {
            //RuleFor(x => x.Name).NotEmpty().WithMessage("Vui lòng nhập họ tên nhân viên.")
            //    .MaximumLength(50).WithMessage("Tên nhân viên không được phép vượt quá 50 ký tự.");
        }
    }
}
