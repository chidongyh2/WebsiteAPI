using Newtonsoft.Json.Converters;

namespace GHM.Infrastructure.CustomAttributes
{
    public class DateTimeFormatConverter : IsoDateTimeConverter
    {
        public DateTimeFormatConverter(string format)
        {
            DateTimeFormat = format;
        }
    }
}
