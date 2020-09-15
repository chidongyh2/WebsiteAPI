ko.bindingHandlers.trimLengthText = {};
ko.bindingHandlers.trimText = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var trimmedText = ko.computed(function () {
            var untrimmedText = ko.utils.unwrapObservable(valueAccessor());
            var defaultMaxLength = 20;
            var minLength = 5;
            var maxLength = ko.utils.unwrapObservable(allBindingsAccessor().trimTextLength) || defaultMaxLength;
            if (maxLength < minLength) maxLength = minLength;
            var text = untrimmedText && untrimmedText.length > maxLength ? untrimmedText.substring(0, maxLength - 1) + '...' : untrimmedText;
            return text;
        });
        ko.applyBindingsToNode(element, {
            text: trimmedText
        }, viewModel);

        return {
            controlsDescendantBindings: true
        };
    }
};

ko.bindingHandlers.srcChange = {
    origValue: null,
    init: function (element, valueAccessor) {
        origValue = valueAccessor();
    },
    update: function (element, valueAccessor) {
        if (origValue !== valueAccessor()) {
            var options = ko.toJS(valueAccessor());
            if (options === null) return;
           
            if (options.in) {
                $(element).hide(300);
                $(element).hide().fadeIn();
            } else {
                $(element).fadeOut(options.time);
            }
            $(element).attr('src', options.src);          
        }
    }
};

var imageArrayExtension = [".jpg", ".png", ".gif", ".jpeg"];

var strips = ["áàảãạăắằẳẵặâấầẩẫậ", "ÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ", "đ", "Đ", "éèẻẽẹêếềểễệ", "ÉÈẺẼẸÊẾỀỂỄỆ", "íìỉĩị", "ÍÌỈĨỊ", "óòỏõọơớờởỡợôốồổỗộ", "ÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘ",
    "ưứừửữựúùủũụ", "ƯỨỪỬỮỰÚÙỦŨỤ", "ýỳỷỹỵ", "ÝỲỶỸỴ"];

var replacements = ['a', 'A', 'd', 'D', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];

//function CutKpiCode(kpiCode, perspectiveId) {
//return kpiCode == null ? '' : kpiCode.substring(kpiCode.indexOf(PerspectiveCodes[perspectiveId]), kpiCode.length);
//}

document.getScroll = function () {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    }
    else {
        var sx, sy, d = document, r = d.documentElement, b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

function CheckEmailFormat(email) {
    var regex = new RegExp("^[a-zA-Z][\\w\\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\\.]*[a-zA-Z]$");

    return regex.test($.trim(email));
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function currentCulture() {
    return Globalize
        ? Globalize.culture('vi-VN')
        : null;
}

var numberAfterComma = 0;
function formatNumberic(value, ext) {
    if (value == null || value == undefined) {
        return "";
    }

    var culture = currentCulture();
    if (culture) {
        var pattern = '\\' + culture.numberFormat[','];
        var regex = new RegExp(pattern, 'g');
        value = value.toString().replace(regex, "");
        if (isNaN(value)) {
            return '';
        }
        if (parseFloat(value) === 0) {
            return '0';
        }
        if (culture.name !== 'vi-VN') {
            ext = 'N0';
        }
        if (!isNumber(value)) {
            value = Globalize.parseFloat(value);
        }
        value = Globalize.format(value, ext).toString();
        var floatValue = Globalize.parseFloat(value.toString().replace(regex, ""));
        return Globalize.format(floatValue, ext).toString();
    } else {
        value = value.toString().replace(/\,/g, "");
        if (isNaN(value)) {
            return "";
        }

        if (parseFloat(value) === 0) {
            return "0";
        }

        if (ext == undefined)
            ext = "N" + numberAfterComma;

        //if (!isNumber(value)) {
        value = Globalize.parseFloat(value);
        //}

        value = Globalize.format(value, ext).toString();
        var ext1 = parseFloat(value.toString().replace(/\,/g, ""));

        return ext1.toString().indexOf('.') == -1 ? value.split('.')[0] : value.split('.')[0] + "." + ext1.toString().split('.')[1];
    }

}

function ConvertToInt(value) {
    if (value == null) {
        return 0;
    }

    value = value.toString().replace(/\,/g, "");

    if (value === "") {
        return 0;
    }

    return parseInt(value);
}

function ConvertToDouble(value) {
    if (value == null) {
        return 0;
    }

    value = value.toString().replace(/\,/g, "");

    if (value === "") {
        return 0;
    }

    return Math.round(parseFloat(value));
}

function ConverMoneyToString(money) {
    var groups = money.split(',');

    var groupLength = groups.length;

    var str = "";
    for (var i = groupLength; i > 0; i--) {
        var kq = GroupThousand(groups[groupLength - i], groupLength === i, i === 1);

        str += str === "" ? kq + (kq === "" || kq === " " ? "" : (i === 6 ? " triệu " : i === 5 ? " nghìn " : i === 4 ? " tỷ " : i === 3 ? " triệu " : i === 2 ? " nghìn " : "")) :
            " " + kq + (kq === "" || kq === " " ? "" : (i === 6 ? " triệu " : i === 5 ? " nghìn " : i === 4 ? " tỷ " : i === 3 ? " triệu " : i === 2 ? " nghìn " : ""));
    }

    return str + (money.length >= 17 && groups[2] === "000" && groups[3] === "000" && groups[4] === "000" ? " tỷ" : "");
}

function GroupThousand(value, isFirst, isLast) {
    value = parseInt(value);

    var tram = Math.floor(value / 100);

    var chuc = Math.floor((value - tram * 100) / 10);
    var donvi = (value - tram * 100 - chuc * 10);

    return (tram === 0 && isFirst || tram === 0 && chuc === 0 && donvi === 0 ? "" : NumericToVNamese(tram) + " trăm ") +
        (chuc === 0 && donvi === 0 ? "" : (chuc === 0 && !isFirst || tram > 0 && chuc === 0 && isFirst ? "linh" : tram === 0 && chuc === 1 && donvi === 0 && !isFirst ? "linh mười" : tram === 0 && chuc === 0 ? "" : chuc === 1 ? "mười" : NumericToVNamese(chuc) + " mươi") +
            (donvi === 0 ? "" : donvi === 1 && !isLast && !isFirst ? " mốt" : " " + NumericToVNamese(donvi)));
}

function NumericToVNamese(number) {
    if (number == 0) {
        return "không";
    }
    else if (number == 1) {
        return "một";
    }
    else if (number == 2) {
        return "hai";
    }
    else if (number == 3) {
        return "ba";
    }
    else if (number == 4) {
        return "bốn";
    } else if (number == 5) {
        return "năm";
    }
    else if (number == 6) {
        return "sáu";
    }
    else if (number == 7) {
        return "bảy";
    }
    else if (number == 8) {
        return "tám";
    }
    else if (number == 9) {
        return "chín";
    }
}

function addCommas(src) {

    if (!src) {
        return "";
    }

    src = src.toString().replace(/\./g, "");
    return src.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

var escapeRegExp = function (string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
    if (str == null || str === "")
        return "";
    var v = str.toString();
    return v.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function numbersonly(myfield, e, dec, nonnegative) {
    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;

    e = e || window.event; // IE support
    var ctrlDown = e.ctrlKey || e.metaKey; // Mac support

    // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
    if (ctrlDown && e.altKey) return true;
    else if (key === 37 || key === 39 || key === 8) return true;// left, right, back
    // Check for ctrl+c, v and x
    else if (ctrlDown && e.keyCode === 65) return true;// c
    else if (ctrlDown && e.keyCode === 67) return true; // c
    else if (ctrlDown && e.keyCode === 86) return true; // v
    else if (ctrlDown && e.keyCode === 88) return true; // x

    if (e.keyCode === 35 || e.keyCode === 36) {
        myfield.focus();
        myfield.select();

        return true;
    }

    keychar = String.fromCharCode(key);
    var allow = nonnegative ? "0123456789.," : "0123456789.,-";

    // control keys
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 27)) {
        return true;
    }
    else if (key == 13) {
        return false;
    }
    // numbers
    else if (((allow).indexOf(keychar) > -1))
        return true;

    // decimal point jump
    else if (dec && (keychar == "." || keychar == ",")) {
        myfield.form.elements[dec].focus();
        return false;
    }
    else
        return false;
}
function positiveNumbersonly(myfield, e, dec) {
    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;

    e = e || window.event; // IE support
    var ctrlDown = e.ctrlKey || e.metaKey; // Mac support

    // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
    if (ctrlDown && e.altKey) return true;
    else if (key === 37 || key === 39 || key === 8) return true;// left, right, back
    // Check for ctrl+c, v and x
    else if (ctrlDown && e.keyCode === 65) return true;// c
    else if (ctrlDown && e.keyCode === 67) return true; // c
    else if (ctrlDown && e.keyCode === 86) return true; // v
    else if (ctrlDown && e.keyCode === 88) return true; // x

    if (e.keyCode === 35 || e.keyCode === 36) {
        myfield.focus();
        myfield.select();

        return true;
    }

    keychar = String.fromCharCode(key);

    // control keys
    if ((key == null) || (key === 0) || (key === 8) || (key === 9) || (key === 27)) {
        return true;
    }
    else if (key === 13) {
        return false;
    }
    // numbers
    else if ((("0123456789.,").indexOf(keychar) > -1))
        return true;

    // decimal point jump
    else if (dec && (keychar == "." || keychar == ",")) {
        myfield.form.elements[dec].focus();
        return false;
    }
    else
        return false;
}

function PreventBack(event) {
    var key;

    if (window.event)
        key = window.event.keyCode;
    else if (event)
        key = event.which;
    else
        return true;

    if (key == 8) {
        event.preventDefault();
        return false;
    }

    return true;
}

function GetQuarter(month) {
    return (month - 1) / 3 + 1;
}

var token = $('input[name=__RequestVerificationToken]').val();

function romanize(num) {
    if (!+num)
        return '';
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

// khởi tạo mảng số
var strName = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

// Hàm chuyển đổi hàng chục và hàng đơn vị
function convertUnitsToString(number, isRedundant) {
    var str = "";
    var dozens = Math.floor(number / 10);
    var unit = number % 10;
    if (dozens > 1) {
        str = " " + strName[dozens] + " mươi";
        if (unit === 1) {
            str += " mốt";
        }
    } else if (dozens === 1) {
        str = " mười";
        if (unit === 1) {
            str += " một";
        }
    } else if (isRedundant && unit > 0) {
        str = " lẻ";
    }
    if (unit === 5 && dozens > 1 || unit === 5 && dozens === 1 && gsuffixe === " tỷ") {
        str += " lăm";
    } else if (unit > 1 || (unit === 1 && dozens === 0)) {
        str += " " + strName[unit];
    }
    return str;
}

// Hàng chuyển đổi hàng trăm
function convertHundredsToString(number, isRedundant) {
    var str;
    var hundred = Math.floor(number / 100);
    number = number % 100;
    if (isRedundant || hundred > 0) {
        str = " " + strName[hundred] + " trăm";
        str += convertUnitsToString(number, true);
    } else {
        str = convertUnitsToString(number, false);
    }
    return str;
}

// Hàm chuyển đổi hàng triệu
function convertMillionsToString(number, isRedundant) {
    var str = "";
    var million = Math.floor(number / 1000000);
    number = number % 1000000;
    if (million > 0) {
        str = convertHundredsToString(million, isRedundant) + " triệu";
        isRedundant = true;
    }

    var thousand = Math.floor(number / 1000);
    number = number % 1000;

    if (thousand > 0) {
        str += convertHundredsToString(thousand, isRedundant) + " nghìn";
        isRedundant = true;
    }
    if (number > 0) {
        str += convertHundredsToString(number, isRedundant);
    }
    return str;
}

var gsuffixe = '';
// hàm chuyển đổi hàng tỷ
function convertMoneyToString(number) {
    if (number === 0) return strName[0] + " đồng";
    var str = "", suffixe = "";

    do {
        var billion = number % 1000000000;
        number = Math.floor(number / 1000000000);
        str = convertMillionsToString(billion, number > 0) + suffixe + str;
        //} else {
        //    str = convertMillionsToString(billion, false) + suffixe + str;
        //}
        suffixe = " tỷ";
        gsuffixe = suffixe;
    } while (number > 0);

    var stringMoney = str + " đồng";
    stringMoney = stringMoney.trim();

    return stringMoney.substring(0, 1).toUpperCase() + stringMoney.substring(1, stringMoney.length);
};

//check kieu float
function isFloat(val) {
    var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val))
        return false;

    val = parseFloat(val);
    if (isNaN(val))
        return false;
    return true;
}

function searchCommon() {
    if (modelView != undefined) {
        modelView.SetSearchKeyword($("#txtNameCommon").val());

        if (modelView.search) {
            modelView.search(1);
        } else {
            modelView.Search(1);
        }
    }
}


(function (screenSize) {
    screenSize.with = {
        isMin768: true,
        isMin450: true,
        isMin950: true
    };
})(window.screenSize = window.screenSize || {});

$(window).bind('resize', function () {
    screenSize.with.isMin768 = $(window).width() >= 768;
    screenSize.with.isMin450 = $(window).width() > 450;
    screenSize.with.isMin950 = $(window).width() > 950;
});

$(document).ready(function () {
    screenSize.with.isMin768 = $(window).width() >= 768;
    screenSize.with.isMin450 = $(window).width() > 450;
    screenSize.with.isMin950 = $(window).width() > 950;
    Globalize.culture('vi-VN');
});

function calculateTime(hour, minutes, second) {
    var tempHour, tempMinutes, tempSecond;
    if (second != undefined && second >= 60) {
        tempMinutes = Math.floor(second / 60);
        tempSecond = Math.floor(second % 60);

        minutes += tempMinutes;
        second = tempSecond;
    }

    if (minutes != undefined && minutes >= 60) {
        tempHour = Math.floor(minutes / 60);
        tempMinutes = Math.floor(minutes % 60);

        hour += tempHour;
        minutes = tempMinutes;
    }

    var html = '';

    if (hour != undefined) {
        html += hour == 0 ? '00:' : hour + ':';
    } else {
        html += '00:';
    }

    if (minutes != undefined) {
        html += minutes == 0 ? '00' : minutes;
    } else {
        html += '00:';
    }

    //if (second != undefined) {
    //    html += second == 0 ? '00' : second + ':';
    //} else {
    //    html += '00';
    //}

    return html;
}

