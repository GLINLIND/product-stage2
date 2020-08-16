// 创建cookie
function createCookie(key,value,json){
    // 初始化
    json = json || {};
    // 创建key value 
    let cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value);

    // 判断属性
    if(!isNaN(json.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookieStr += ';expires=' + date;
    }

    if(json.path){
        cookieStr += ';path=' + json.path;
    }
    
    if(json.domain){
        cookieStr += ';domain=' + json.domain;
    }
    
    if(json.secure){
        cookieStr += ';secure';
    }

    // 创建cookie
    document.cookie = cookieStr;
}

// 1,设定cookie函数

function setCookies(key, value, t) {
    let time = new Date();
    let t1 = time.getTime() - 8 * 60 * 60 * 1000 + t * 1000;
    time.setTime(t1);
    document.cookie = `${key}=${value};expires=${time}`;
}

// 获取cookie
// function getCookie(key){
//     let str = document.cookie;
//     let arr = str.split('; ');
//     for(let i = 0 ; i < arr.length; i++){
//         let list = arr[i].split('=');
//         if(encodeURIComponent(key) === list[0]){
//             return decodeURIComponent(list[1]);
//         }
//     }
// }
function getCookieObj(str) {
    let arr = str.split('; ');
    let obj = {};
    let arrV = [];
    arr.forEach(v => {
        arrV = v.split('=');
        obj[arrV[0]] = arrV[1];
    });
    return obj;
}

// 删除cookie
function removeCookie(key){
    // 初始化json
    json = json || {};
    if(json.path){
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(1) + ';path=' + json.path;
    }else{
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(1);
    }
}