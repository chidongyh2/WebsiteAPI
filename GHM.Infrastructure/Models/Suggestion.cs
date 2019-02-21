namespace GHM.Infrastructure.Models
{
    public class Suggestion<T>
    {
        public T Id { get; set; }

        public string Name { get; set; }

        public Suggestion() { }

        public Suggestion(T id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
