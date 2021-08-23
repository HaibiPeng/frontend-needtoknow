function parseToMoney1(num) {
    num = parseFloat(num.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
    return integer + '.' + (decimal ? decimal : '');
}

// 正则表达式 \d{1,3}(?=(\d{3})+$)  表示前面有1~3个数字，后面的至少由一组3个数字结尾。
// ?= 表示正向引用，可以作为匹配的条件，但匹配到的内容不获取，并且作为下一次查询的开始。
// $& 表示与正则表达式相匹配的内容，具体的使用可以查看字符串replace()方法的


// 正则表达式(运⽤了正则的前向声明和反前向声明):

function parseToMoney2(str) {
    // 仅仅对位置进⾏匹配
    let re = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(re, ',');
}

// 常规解法
function parseToMoney3(num) {
    num = num + ''; //数字转字符串
    let [integer, decimal] = String.prototype.split.call(num, '.');
    var str = ""; //字符串累加
    for (var i = integer.length - 1, j = 1; i >= 0; i--, j++) {
        if (j % 3 === 0 && i !== 0) { //每隔三位加逗号，过滤正好在第一个数字的情况
            str += integer[i] + ","; //加千分位逗号
            continue;
        }
        str += integer[i]; //倒着累加数字
    }
    return str.split('').reverse().join("") + (decimal ? '.' + decimal : ''); //字符串=>数组=>反转=>字符串 + 小数部分
}

// 保留三位⼩数
console.log(parseToMoney3(1234.56)); // return '1,234.56'
console.log(parseToMoney3(123456789)); // return '123,456,789'
console.log(parseToMoney3(1087654.321)); // return '1,087,654.321'