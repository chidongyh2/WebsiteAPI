using System.Drawing;

namespace GHM.Core.Domain.Models
{
    public class UserSetting
    {
        /// <summary>
        /// Mã người dùng
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Key setting
        /// </summary>
        public string Key { get; set; }

        /// <summary>
        /// Giá trị cấu hình.
        /// </summary>
        public string Value { get; set; }

        /// <summary>
        /// Nhóm cấu hình theo key.
        /// </summary>
        public string GroupKey { get; set; }
    }
}
