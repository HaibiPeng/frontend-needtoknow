var str = "border-bottom-color";

// split
function toCamelCase() {
    var arr = str.split("-");
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join("");
};

console.log(toCamelCase(str));

// 正则 用正则的replace()方法替换这个规范为去掉-以及字符大写，通过回调函数第一个参数直接转大写
function toCamelCase1() {
    var re = /-(\w)/g;
    str = str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
    });
    return str;
};

console.log(toCamelCase1(str));