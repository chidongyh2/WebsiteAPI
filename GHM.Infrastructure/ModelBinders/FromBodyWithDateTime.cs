using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace GHM.Infrastructure.ModelBinders
{
    public class FromBodyWithDateTime : Attribute, IBindingSourceMetadata
    {
        public BindingSource BindingSource { get; }
    }
}
