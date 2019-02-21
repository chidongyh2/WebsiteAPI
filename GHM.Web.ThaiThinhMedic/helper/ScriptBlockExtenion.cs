using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Web.ThaiThinhMedic.helper
{
    public static class ScriptBlockExtenion
    {
        public static IDisposable BeginScriptBlock(this HtmlHelper helper, string scriptKey)
        {
            // TODO: Check
            //return new ScriptBlock((WebViewPage)helper.ViewDataContainer, scriptKey);
            return null;
        }

        public static IDisposable BeginScriptBlock(this HtmlHelper helper)
        {
            return BeginScriptBlock(helper, null);
        }

        //public static MvcHtmlString WriteScriptBlocks(this HtmlHelper helper)
        //{
        //    return
        //        MvcHtmlString.Create(string.Join(Environment.NewLine,
        //            ScriptBlock.PageScripts.Select(s => s.Value.ToString())));
        //}
    }
}
