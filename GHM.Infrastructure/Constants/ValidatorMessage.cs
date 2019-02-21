using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Constants
{
    public static class ValidatorMessage
    {
        public const string SelectLanguage = "Please select at least one language.";
        public const string MustNotExceed = "{0} must not exceed {1} characters.";
        public const string PleaseSelect = "Please select {0}.";
        public const string PleaseSelectAtLeast = "Please select at least {0} {1}.";
        public const string NotNull = "{0} can not be null.";
        public const string MustLessThan = "{0} must less than {1}.";
        public const string MustGreaterThan = "{0} must greater than {1}.";
        public const string PleaseEnter = "Please enter {0}.";
        public const string InValidPhoneNumber = "Invalid phone number.";
        public const string InValidEmail = "Invalid email.";
        public const string InValid = "{0} Invalid.";
        public const string MustBeNumber = "{0} must be number.";
        public const string MaxLength = "{0} must not exceed {1} characters.";
        public const string GreaterThanAndLessThan = "{0} must greater than {1} and less than {2}.";
    }
}
