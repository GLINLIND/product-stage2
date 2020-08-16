// 字符串转为对象
function convertCookieStrToCookieObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}