using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Event.Domain.Constants;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace GHM.Website.Event.Infrastructure.Repository
{
    public class EventRepository : RepositoryBase, IEventRepository
    {
        private readonly IRepository<Domain.Models.Event> _eventRepository;
        public EventRepository(IDbContext context) : base(context)
        {
            _eventRepository = Context.GetRepository<Domain.Models.Event>();
        }

        public Task<List<EventViewModel>> Search(string tenantId, string languageId, string keyword, string creatorId, ApproverStatus? status,
            bool? isActive, DateTime? startDate, DateTime? endDate, bool isCheck, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Domain.Models.Event, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            Expression<Func<EventTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (status.HasValue)
            {
                spec = spec.And(x => x.Status == status.Value);
            }

            if (startDate.HasValue)
            {
                spec = spec.And(x => x.StartDate >= startDate.Value);
            }

            if (endDate.HasValue)
            {
                spec = spec.And(x => x.EndDate <= endDate.Value.AddDays(1).AddMinutes(-1));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            if (!string.IsNullOrEmpty(creatorId))
            {
                spec = spec.And(x => x.CreatorId == creatorId);
            }

            if (!isCheck)
            {
                spec = spec.And(x => x.Status != ApproverStatus.Draft);
            }

            var query = Context.Set<Domain.Models.Event>().Where(spec)
                .Join(Context.Set<EventTranslation>().Where(specTranslation),
                    events => events.Id,
                    eventTranslation => eventTranslation.EventId,
                    (events, eventTranslation) => new EventViewModel
                    {
                        Id = events.Id,
                        ConcurrencyStamp = events.ConcurrencyStamp,
                        CreateTime = events.CreateTime,
                        CreatorId = events.CreatorId,
                        CreatorFullName = events.CreatorFullName,
                        CreatorAvatar = events.CreatorAvatar,
                        IsActive = events.IsActive,
                        StartDate = events.StartDate,
                        EndDate = events.EndDate,
                        Thumbnail = events.Thumbnail,
                        Status = events.Status,
                        SentTime = events.SentTime,
                        ApprovedTime = events.ApprovedTime,
                        ApproverId = events.ApproverId,
                        ApproverFullName = events.ApproverFullName,
                        ApproverAvatar = events.ApproverAvatar,
                        DeclineReason = events.DeclineReason,
                        LimitedUsers = events.LimitedUsers,
                        IsAllowRegisterWhenOverload = events.IsAllowRegisterWhenOverload,
                        LimitedAccompanyUsers = events.LimitedAccompanyPersons,
                        StaffOnly = events.StaffOnly,
                        IsAllowRegister = events.IsAllowRegister,
                        IsAllowAccompanyPersons = events.IsAllowAccompanyPerson,
                        LanguageId = languageId,
                        Name = eventTranslation.Name,
                        MetaTitle = eventTranslation.MetaTitle,
                        UnsignName = eventTranslation.UnsignName,
                        Description = eventTranslation.Description,
                        MetaDescription = eventTranslation.MetaDescription,
                        SeoLink = eventTranslation.SeoLink,
                        Content = eventTranslation.Content,
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<EventClientViewModel>> SearchClient(string tenantId, string languageId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Domain.Models.Event, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<EventTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            var query = Context.Set<Domain.Models.Event>().Where(spec)
                .Join(Context.Set<EventTranslation>().Where(specTranslation),
                    events => events.Id,
                    eventTranslation => eventTranslation.EventId,
                    (events, eventTranslation) => new EventClientViewModel
                    {
                        Id = events.Id,
                        CreateTime = events.CreateTime,
                        IsActive = events.IsActive,
                        StartDate = events.StartDate,
                        EndDate = events.EndDate,
                        Thumbnail = events.Thumbnail,
                        LimitedUsers = events.LimitedUsers,
                        IsAllowRegisterWhenOverload = events.IsAllowRegisterWhenOverload,
                        LimitedAccompanyUsers = events.LimitedAccompanyPersons,
                        StaffOnly = events.StaffOnly,
                        IsAllowRegister = events.IsAllowRegister,
                        IsAllowAccompanyPersons = events.IsAllowAccompanyPerson,
                        Name = eventTranslation.Name,
                        Description = eventTranslation.Description,
                        SeoLink = eventTranslation.SeoLink,
                        Address = eventTranslation.Address,
                        MetaTitle = eventTranslation.MetaTitle,
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<EventDetailClientViewModel> GetDetailClient(string tenantId, string languageId, string seoLink)
        {
            Expression<Func<Domain.Models.Event, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.IsActive && x.Status == ApproverStatus.Approved;
            Expression<Func<EventTranslation, bool>> specTranslation = x => x.SeoLink == seoLink && x.LanguageId == languageId;

            var result = Context.Set<Domain.Models.Event>().Where(spec)
                .Join(Context.Set<EventTranslation>().Where(specTranslation),
                    events => events.Id,
                    eventTranslation => eventTranslation.EventId,
                    (events, eventTranslation) => new EventDetailClientViewModel
                    {
                        Id = events.Id,
                        CreateTime = events.CreateTime,
                        IsActive = events.IsActive,
                        StartDate = events.StartDate,
                        EndDate = events.EndDate.Value,
                        Thumbnail = events.Thumbnail,
                        LimitedUsers = events.LimitedUsers,
                        IsAllowRegisterWhenOverload = events.IsAllowRegisterWhenOverload,
                        LimitedAccompanyUsers = events.LimitedAccompanyPersons,
                        StaffOnly = events.StaffOnly,
                        IsAllowRegister = events.IsAllowRegister,
                        IsAllowAccompanyPersons = events.IsAllowAccompanyPerson,
                        Name = eventTranslation.Name,
                        Description = eventTranslation.Description,
                        SeoLink = eventTranslation.SeoLink,
                        Content = eventTranslation.Content,
                        MetaTitle = eventTranslation.MetaTitle,
                        MetaDescription = eventTranslation.MetaDescription,
                        Address = eventTranslation.Address
                    });

            return await result.AsNoTracking().FirstOrDefaultAsync();
        }

        public async Task<int> Insert(Domain.Models.Event events)
        {
            _eventRepository.Create(events);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Domain.Models.Event events)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string eventId)
        {
            var info = await GetInfo(eventId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string eventId)
        {
            var info = await GetInfo(eventId);
            if (info == null)
                return -1;

            _eventRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Domain.Models.Event> GetInfo(string eventId, bool isReadonly = false)
        {
            return await _eventRepository.GetAsync(isReadonly, x => x.Id == eventId && !x.IsDelete);
        }

        public async Task<Domain.Models.Event> GetInfo(string tenantId, string eventId, bool isReadonly = false)
        {
            return await _eventRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == eventId && !x.IsDelete);
        }

        public async Task<List<EventViewModel>> GetAllEventByApproverUserId(string tenantId, string approverUserId, string languageId)
        {
            Expression<Func<Domain.Models.Event, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            Expression<Func<EventTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (!string.IsNullOrEmpty(approverUserId))
            {
                spec = spec.And(x => x.ApproverId == approverUserId);
            }

            var query = Context.Set<Domain.Models.Event>().AsNoTracking().Where(spec)
                .Join(Context.Set<EventTranslation>().AsNoTracking().Where(specTranslation),
                    events => events.Id,
                    eventTranslation => eventTranslation.EventId, (events, eventTranslation) =>
                        new EventViewModel
                        {
                            Id = events.Id,
                            ConcurrencyStamp = events.ConcurrencyStamp,
                            CreateTime = events.CreateTime,
                            CreatorId = events.CreatorId,
                            CreatorFullName = events.CreatorFullName,
                            CreatorAvatar = events.CreatorAvatar,
                            IsActive = events.IsActive,
                            StartDate = events.StartDate,
                            EndDate = events.EndDate,
                            Thumbnail = events.Thumbnail,
                            Status = events.Status,
                            SentTime = events.SentTime,
                            ApprovedTime = events.ApprovedTime,
                            ApproverId = events.ApproverId,
                            ApproverFullName = events.ApproverFullName,
                            ApproverAvatar = events.ApproverAvatar,
                            DeclineReason = events.DeclineReason,
                            LimitedUsers = events.LimitedUsers,
                            IsAllowRegisterWhenOverload = events.IsAllowRegisterWhenOverload,
                            LimitedAccompanyUsers = events.LimitedAccompanyPersons,
                            StaffOnly = events.StaffOnly,
                            IsAllowRegister = events.IsAllowRegister,
                            IsAllowAccompanyPersons = events.IsAllowAccompanyPerson,
                            LanguageId = languageId,
                            Name = eventTranslation.Name,
                            MetaTitle = eventTranslation.MetaTitle,
                            UnsignName = eventTranslation.UnsignName,
                            Description = eventTranslation.Description,
                            MetaDescription = eventTranslation.MetaDescription,
                            SeoLink = eventTranslation.SeoLink,
                            Content = eventTranslation.Content
                        });

            return await query.ToListAsync();
        }

        public async Task<int> UpdateEventStatus(string eventId, ApproverStatus approverStatus)
        {
            var info = await GetInfo(eventId);
            if (info == null)
                return -1;

            info.Status = approverStatus;
            return await Context.SaveChangesAsync();
        }
    }
}
