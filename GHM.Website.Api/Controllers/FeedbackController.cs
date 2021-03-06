﻿using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class FeedbacksController : GhmControllerBase
    {
        private readonly IFeedbackService _feedbackService;
        public FeedbacksController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Feedback, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, DateTime? startDate, DateTime? endDate, bool? isResolve, int page = 1, int pageSize = 20)
        {
            var result = await _feedbackService.Search(CurrentUser.TenantId, keyword, startDate, endDate, isResolve, page, pageSize);
            return Ok(result);
        }

        [Route("comment"),AcceptVerbs("GET")]
        [AllowPermission(PageId.Comment, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchComment(bool? isShow, int page = 1, int pageSize = 20)
        {
            var result = await _feedbackService.SearchComment(CurrentUser.TenantId, isShow, page, pageSize);
            return Ok(result);
        }

        [Route("comment/{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Comment, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteComment(int id)
        {
            var result = await _feedbackService.DeleteComment(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("comment/is-show/{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Comment, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsShowComment(int id, bool isShow)
        {
            var result = await _feedbackService.UpdateIsShowComment(CurrentUser.TenantId, id, isShow);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Feedback, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]FeedbackMeta feedbackMeta)
        {
            var result = await _feedbackService.Update(CurrentUser.TenantId, id, feedbackMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Feedback, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _feedbackService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        #region Client
        [Route("{tenantId}"), AcceptVerbs("POST")]
        public async Task<IActionResult> Insert(string tenantId, [FromBody]FeedbackMeta feedbackMeta)
        {
            var result = await _feedbackService.Insert(tenantId, feedbackMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
    }
}