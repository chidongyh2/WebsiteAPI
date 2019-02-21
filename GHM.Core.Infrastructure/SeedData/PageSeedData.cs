using System;
using System.Linq;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using Microsoft.Extensions.DependencyInjection;

namespace GHM.Core.Infrastructure.SeedData
{
    public static class PageSeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<CoreDbContext>();
            var pageRepository = serviceProvider.GetRequiredService<IPageRepository>();
            context.Database.EnsureCreated();
            #region Tenant.
            if (!context.Set<Page>().Any())
            {
                #region Configs.
                pageRepository.Insert(new Page(1, true, "fa fa-cogs", string.Empty, 0, null, "javascript://"));
                context.Set<PageTranslation>().Add(new PageTranslation(1, "vi-VN", "Cấu hình", "Cấu hình"));
                pageRepository.Insert(new Page(2, true, "fa fa-file-text-o", string.Empty, 1, 1, "/config/page"));
                context.Set<PageTranslation>().Add(new PageTranslation(2, "vi-VN", "Trang", "Cấu hình trang"));
                pageRepository.Insert(new Page(3, true, "fa fa-user-secret", string.Empty, 2, 1, "/config/roles"));
                context.Set<PageTranslation>().Add(new PageTranslation(3, "vi-VN", "Quyền truy cập", "Cấu hình quyền truy cập."));
                pageRepository.Insert(new Page(4, true, "fa fa-desktop", string.Empty, 3, 1, "/config/clients"));
                context.Set<PageTranslation>().Add(new PageTranslation(4, "vi-VN", "Clients", "Cấu hình clients"));
                pageRepository.Insert(new Page(5, true, "fa fa-users", string.Empty, 3, 1, "/config/tenants"));
                context.Set<PageTranslation>().Add(new PageTranslation(5, "vi-VN", "Khách hàng", "Cấu hình khách hàng"));
                #endregion

                #region Survey.
                pageRepository.Insert(new Page(100, true, "fa fa-comments-o", string.Empty, 0, null, "/survey"));
                context.Set<PageTranslation>().Add(new PageTranslation(100, "vi-VN", "Khảo sát", "Khảo sát"));
                #endregion

                #region Website.
                pageRepository.Insert(new Page(200, true, "fa fa-globe", string.Empty, 0, null, "/website"));
                context.Set<PageTranslation>().Add(new PageTranslation(200, "vi-VN", "Website", "Quản trị website"));
                pageRepository.Insert(new Page(201, true, "fa fa-file-text-o", string.Empty, 0, 200, "/website/news"));
                context.Set<PageTranslation>().Add(new PageTranslation(201, "vi-VN", "Tin tức", "Quản lý tin tức"));
                pageRepository.Insert(new Page(202, true, "fa fa-th", string.Empty, 0, 200, "/website/categories"));
                context.Set<PageTranslation>().Add(new PageTranslation(202, "vi-VN", "Chuyên mục", "Quản lý chuyên mục"));
                pageRepository.Insert(new Page(208, true, "fa fa-gears", string.Empty, 0, 200, "/website/config"));
                context.Set<PageTranslation>().Add(new PageTranslation(208, "vi-VN", "Cấu hình", "Cấu hình website"));
                pageRepository.Insert(new Page(209, true, "fa fa-sliders", string.Empty, 0, 208, "/website/config/sliders"));
                context.Set<PageTranslation>().Add(new PageTranslation(209, "vi-VN", "Sliders", "Cấu hình sliders"));
                pageRepository.Insert(new Page(210, true, "fa fa-sliders", string.Empty, 0, 208, "/website/config/menus"));
                context.Set<PageTranslation>().Add(new PageTranslation(210, "vi-VN", "Menus", "Cấu hình menus"));
                pageRepository.Insert(new Page(211, true, "fa fa-users", string.Empty, 0, 200, "/website/customers"));
                context.Set<PageTranslation>().Add(new PageTranslation(211, "vi-VN", "Khách hàng", "Cấu hình khách hàng"));
                pageRepository.Insert(new Page(212, true, "fa fa-commenting-o", string.Empty, 0, 200, "/website/feedbacks"));
                context.Set<PageTranslation>().Add(new PageTranslation(212, "vi-VN", "Phản hồi", "Quản lý phản hồi"));
                pageRepository.Insert(new Page(213, true, "fa fa-gift", string.Empty, 0, 200, "/website/promotions"));
                context.Set<PageTranslation>().Add(new PageTranslation(213, "vi-VN", "Khuyến mại", "Quản lý khuyến mại"));
                pageRepository.Insert(new Page(214, true, "fa fa-question", string.Empty, 0, 200, "/website/faqs"));
                context.Set<PageTranslation>().Add(new PageTranslation(214, "vi-VN", "Câu hỏi thường gặp", "Quản lý câu hỏi thường gặp"));
                pageRepository.Insert(new Page(215, true, "fa fa-home", string.Empty, 0, 200, "/website/courses"));
                context.Set<PageTranslation>().Add(new PageTranslation(215, "vi-VN", "Khóa học", "Quản lý khóa học"));
                pageRepository.Insert(new Page(216, true, "fa fa-film", string.Empty, 0, 200, "/website/videos"));
                context.Set<PageTranslation>().Add(new PageTranslation(216, "vi-VN", "Videos", "Quản lý videos"));
                #endregion

                #region Human Resources.
                pageRepository.Insert(new Page(300, true, "fa fa-users", string.Empty, 0, null, "/hr"));
                context.Set<PageTranslation>().Add(new PageTranslation(300, "vi-VN", "Nhân sự", "Quản lý nhân sự"));
                pageRepository.Insert(new Page(321, true, "fa fa-users", string.Empty, 0, 300, "/hr/organization"));
                context.Set<PageTranslation>().Add(new PageTranslation(321, "vi-VN", "Cơ cấu tổ chức", "Quản lý cơ cấu tổ chức"));
                pageRepository.Insert(new Page(301, true, "fa fa-address-book", string.Empty, 0, 321, "/hr/organization/titles"));
                context.Set<PageTranslation>().Add(new PageTranslation(301, "vi-VN", "Chức danh", "Quản lý chức danh"));
                pageRepository.Insert(new Page(302, true, "fa fa-id-card-o", string.Empty, 0, 321, "/hr/organization/positions"));
                context.Set<PageTranslation>().Add(new PageTranslation(302, "vi-VN", "Nhân vụ", "Quản lý chúc vụ"));
                pageRepository.Insert(new Page(303, true, "fa fa-users", string.Empty, 0, 300, "javascript://"));
                context.Set<PageTranslation>().Add(new PageTranslation(303, "vi-VN", "Nhân viên", "Quản lý nhân viên"));
                pageRepository.Insert(new Page(304, true, "fa fa-users", string.Empty, 0, 303, "/hr/users"));
                context.Set<PageTranslation>().Add(new PageTranslation(304, "vi-VN", "Danh sách nhân viên", "Danh sách nhân viên"));
                pageRepository.Insert(new Page(305, true, "fa fa-file-archive-o", string.Empty, 0, 303, "/hr/labor-contracts"));
                context.Set<PageTranslation>().Add(new PageTranslation(305, "vi-VN", "Hợp đồng", "Quản lý hợp đồng"));
                pageRepository.Insert(new Page(314, true, "fa fa-cubes", string.Empty, 0, 303, "/hr/manager-config"));
                context.Set<PageTranslation>().Add(new PageTranslation(314, "vi-VN", "Cấu hình quản lý", "Cấu hình quản lý"));
                pageRepository.Insert(new Page(315, true, "fa fa-tasks", string.Empty, 0, 300, "javascript://"));
                context.Set<PageTranslation>().Add(new PageTranslation(315, "vi-VN", "Đánh giá hiệu quả công việc", "Đánh giá hiệu quả công việc"));
                pageRepository.Insert(new Page(316, true, "fa fa-check", string.Empty, 0, 315, "/hr/assessment/approve"));
                context.Set<PageTranslation>().Add(new PageTranslation(316, "vi-VN", "Duyệt đánh giá", "Duyệt đánh giá"));
                pageRepository.Insert(new Page(317, true, "fa fa-bank", string.Empty, 0, 315, "/hr/assessment/criteria"));
                context.Set<PageTranslation>().Add(new PageTranslation(317, "vi-VN", "Thư viện tiêu chí", "Thư viện tiêu chí"));
                pageRepository.Insert(new Page(318, true, "fa fa-gears", string.Empty, 0, 315, "/hr/assessment/config"));
                context.Set<PageTranslation>().Add(new PageTranslation(318, "vi-VN", "Cấu hình tiêu chí", "Cấu hình tiêu chí"));
                pageRepository.Insert(new Page(319, true, "fa fa-user", string.Empty, 0, 315, "/hr/assessment/mine"));
                context.Set<PageTranslation>().Add(new PageTranslation(319, "vi-VN", "Kỳ đánh giá của tôi", "Kỳ đánh giá của tôi."));
                pageRepository.Insert(new Page(320, true, "fa fa-user", string.Empty, 0, 315, "/hr/assessment/result"));
                context.Set<PageTranslation>().Add(new PageTranslation(320, "vi-VN", "Tổng hợp kết quả đánh giá", "Tổng hợp kết quả đánh giá"));
                #endregion

                #region Task.
                pageRepository.Insert(new Page(400, true, "fa fa-user", string.Empty, 0, null, "javascript://"));
                context.Set<PageTranslation>().Add(new PageTranslation(400, "vi-VN", "Công việc", "Quản lý công việc"));
                pageRepository.Insert(new Page(401, true, "fa fa-user", string.Empty, 0, 400, "/task/group"));
                context.Set<PageTranslation>().Add(new PageTranslation(401, "vi-VN", "Nhóm", "Nhóm công việc"));
                pageRepository.Insert(new Page(403, true, "fa fa-user", string.Empty, 0, 400, "/task"));
                context.Set<PageTranslation>().Add(new PageTranslation(403, "vi-VN", "Danh sách công việc", "Danh sách công việc"));
                #endregion

                #region CRM.

                #endregion

                #region Timekeeping.

                #endregion
                context.SaveChanges();
            }
            #endregion            
        }
    }
}
