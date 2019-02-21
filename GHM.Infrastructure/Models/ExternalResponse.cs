using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Models
{
    public class ExternalResponse<T> where T : class
    {
        public int Code { get; set; }
        public T Data { get; set; }
        public string Message { get; set; }

        public ExternalResponse(int code, T data, string message = "")
        {
            Code = code;
            Data = data;
            Message = message;
        }
    }
}
