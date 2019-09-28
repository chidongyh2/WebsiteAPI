using Newtonsoft.Json;

namespace GHM.WebSite.Nelly.Helper
{
    public static class JsonHelper
    {
        public static T GetObjectFromObject<T>(dynamic value)
        {
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(value));
        }
    }
}
