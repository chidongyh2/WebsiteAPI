using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using GHM.Core.Domain.ModelMetas;

namespace GHM.Core.Infrastructure.Validations
{
    public class ClientMetaValidator : AbstractValidator<ClientMeta>
    {
        public ClientMetaValidator()
        {
            RuleFor(x => x.ClientName).NotEmpty().WithMessage("Tên client không được để trống.");
            RuleFor(x => x.ClientName).MaximumLength(250).WithMessage("Tên client phải nhỏ hơn 250 ký tự.");
            RuleFor(x => x.ClientSecret).NotEmpty().When(x => x.RequireClientSecret).WithMessage("Vui lòng nhập nội dung khóa bí mật ứng dụng.");
        }
    }
}
