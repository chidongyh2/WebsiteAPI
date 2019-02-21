using System;
using System.Threading.Tasks;
using GHM.ExecptionHandler.Api.Infrastructure.IServices;
using GHM.ExecptionHandler.Api.Infrastructure.Models;
using NServiceBus;

namespace GHM.ExecptionHandler.Api.Infrastructure.CommandHandlers
{
    public class CreateExceptionCommandHandler : IHandleMessages<CreateExceptionCommand>
    {
        private readonly IExceptionService _exceptionService;

        public CreateExceptionCommandHandler(IExceptionService exceptionService)
        {
            _exceptionService = exceptionService;
        }

        public async Task Handle(CreateExceptionCommand message, IMessageHandlerContext context)
        {
            await _exceptionService.Insert(new CustomException
            {
                Id = Guid.NewGuid().ToString(),
                //TenantId = message.TenantId,
                CreateTime = DateTime.Now,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                IsRead = false,
                Message = message.Exception.Message,
                StackTrace = message.Exception.StackTrace,
                //ServiceName = message.ServiceName
            });
        }
    }
}
