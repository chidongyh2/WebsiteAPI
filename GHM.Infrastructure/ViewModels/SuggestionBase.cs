using System;

namespace GHM.Infrastructure.ViewModels
{
    public class SuggestionBase<T>
    {
        public T Id { get; set; }
        public string Name { get; set; }
    }
}
