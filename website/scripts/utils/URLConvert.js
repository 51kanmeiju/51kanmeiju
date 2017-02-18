
function encode64(str) {
  try {
    return btoa(str);
  }
  catch (e) {
    return str;
  }
}

export function ConvertURL2FG(url, fUrl, uid) {
    try {
        FlashgetDown(url, uid);
    } catch (e) {
        location.href = fUrl;
    }
}

export function trimString(str) {
    var re;
    var newstr;
    re = new RegExp("^(\\s)*");
    re2 = new RegExp("(\\s)*$");
    newstr = str.replace(re, "");
    newstr = newstr.replace(re2, "");

    return newstr;
}

export function QQEncode(url) {
    url = 'qqdl://' + encode64(url);
    return url;
}

export function flashetEncode (url) {
    url = 'Flashget://' + encode64('[FLASHGET]' + url + '[FLASHGET]') + '&1926';
    return url;
}

export function ThunderEncode(t_url) {
    var thunderPrefix = "AA";
    var thunderPosix = "ZZ";
    var thunderTitle = "thunder://";
    var tem_t_url = t_url;
    var thunderUrl = thunderTitle + encode64(thunderPrefix + tem_t_url + thunderPosix);
    return thunderUrl;
}