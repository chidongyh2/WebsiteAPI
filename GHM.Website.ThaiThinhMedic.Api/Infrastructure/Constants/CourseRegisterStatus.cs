namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants
{
    public enum CourseRegisterStatus
    {
        /// <summary>
        /// Mới đăng ký.
        /// </summary>
        New,
        /// <summary>
        /// Đã tham gia.
        /// </summary>
        Arrived,
        /// <summary>
        /// Đã hủy trước khi diễn ra buổi học.
        /// </summary>
        Canceled,
        /// <summary>
        /// Đăng ký nhưng không đến.
        /// </summary>
        DidNotCome
    }
}
