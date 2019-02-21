using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class CourseRegisterValidator : AbstractValidator<CourseRegister>
    {
        public CourseRegisterValidator()
        {
            RuleFor(x => x.FullName).NotEmpty().WithMessage("Vui lòng nhập tên học viên.")
                .MaximumLength(50).WithMessage("Tên học viên không được phép lớn hơn 50 ký tự.");
            RuleFor(x => x.PhoneNumber).NotEmpty().WithMessage("Vui lòng nhập số điện thoại học vien.")
                .MaximumLength(20).WithMessage("Số điện thoại học viên không được phép vượt quá 20 ký tự.");
            RuleFor(x => x.Email).MaximumLength(500).WithMessage("Email không được phép vượt quá 500 ký tự.");
            RuleFor(x => x.Address).MaximumLength(500).WithMessage("Địa chỉ không được phép vượt quá 500 ký tự.");
            RuleFor(x => x.Note).MaximumLength(4000).WithMessage("Ghi chú không được phép vượt quá 4000 ký tự.");
        }
    }
}
