using System;
using NServiceBus;

namespace GHM.NServiceBus.Commands.GHM.ExceptionHandler
{
    public class CreateExceptionCommand : ICommand
    {
        public Exception Exception { get; set; }

        public CreateExceptionCommand(Exception exception)
        {
            Exception = exception;
        }
    }
}
