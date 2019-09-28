using Newtonsoft.Json;

namespace GHM.WebSite.Nelly.Helper
{
    public static class JsonConvertHelper
    {
        public static T GetObjectFromObject<T>(dynamic value)
        {
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(value));
        }

        public static T GetObjectFromJson<T>(string value)
        {
            return value == null ? default : JsonConvert.DeserializeObject<T>(value);
        }
    }
}
