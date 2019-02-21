using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class VideoMetaValidator : AbstractValidator<VideoMeta>
    {
        public VideoMetaValidator()
        {
            RuleFor(x => x.Url).NotEmpty().When(x => x.Type != VideoType.YouTube).WithMessage("Vui lòng nhập đường dẫn video")
                .MaximumLength(500).WithMessage("Đường dẫn video không được phép vượt quá 500 ký tự.");
            RuleFor(x => x.VideoId).NotEmpty().When(x => x.Type == VideoType.YouTube).WithMessage("Vui lòng nhập Mã video")
                .MaximumLength(100).WithMessage("Mã video không được phép vượt quá 100 ký tự.");
            RuleFor(x => x.Title).NotEmpty().WithMessage("Vui lòng nhập tiêu đề video")
                .MaximumLength(256).WithMessage("Tiêu đề video không được phép vượt quá 256 ký tự.");
            RuleFor(x => x.Description).MaximumLength(500).WithMessage("Mô tả lớp học không được phép vượt quá 500 ký tự.");           
            RuleFor(x => x.Thumbnail).MaximumLength(500).WithMessage("Thumbnail không được phép vượt quá 500 ký tự.");           
        }
    }
}
