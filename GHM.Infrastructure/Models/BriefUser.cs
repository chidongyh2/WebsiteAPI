﻿using System.Collections.Generic;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace GHM.Infrastructure.Models
{
    public class BriefUser
    {
        /// <summary>
        /// Mã trùng với mã của tài khoản.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng (Công ty) sử dụng hệ thống.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Tên đăng nhập.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Họ tên.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Email.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Số điện thoại.
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Ảnh đại diện.
        /// </summary>
        public string Avatar { get; set; }

        public TitlePrefixing TitlePrefixing { get; set; }
    }
}
