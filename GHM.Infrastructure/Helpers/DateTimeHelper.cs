using System;
using System.Linq;

namespace GHM.Infrastructure.Helpers
{
    public static class DateTimeHelper
    {
        public static byte GetQuarter(this DateTime date)
        {
            return (byte)((date.Month + 2) / 3);
        }

        public static int NumberOfParticularDaysInMonth(int year, int month, DayOfWeek dayOfWeek)
        {
            var totalDays = Enumerable.Range(1, DateTime.DaysInMonth(year, month))
                .Select(item => new DateTime(year, month, item))
                .Count(date => date.DayOfWeek == dayOfWeek);

            return totalDays;
        }
    }
}
