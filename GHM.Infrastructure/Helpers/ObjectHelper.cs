using System;

namespace GHM.Infrastructure.Helpers
{
    public static class ObjectHelper
    {
        public static object GetValueByName(this object originalObject, string propertyName)
        {
            return originalObject
                .GetType()
                .GetProperty(propertyName)
                .GetValue(originalObject, null);
        }

        public static void SetValue(this object originalObject, string propertyName, object value)
        {
            originalObject
                .GetType()
                .GetProperty(propertyName)
                .SetValue(originalObject, value);
        }
    }
}
