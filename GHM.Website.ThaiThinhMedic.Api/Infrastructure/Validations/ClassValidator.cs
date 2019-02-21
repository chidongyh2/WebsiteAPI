using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class ClassValidator : AbstractValidator<Classes>
    {
        public ClassValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Vui lòng nhập tên lớp học.")
                .MaximumLength(256).WithMessage("Tên lớp học không được phép vượt quá 256 ký tự.");
            RuleFor(x => x.Description).MaximumLength(500).WithMessage("Mô tả lớp học không được phép vượt quá 500 ký tự.");
            RuleFor(x => x.Address).MaximumLength(500).WithMessage("Địa chỉ không được phép vượt quá 500 ký tự.");
        }
    }
}
