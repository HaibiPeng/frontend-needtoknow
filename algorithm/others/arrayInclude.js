// 判断A、B数组的包含关系（值和数量），A属于B返回1，B属于A返回2，两者相等返回0，其他返回-1

/* 
function arrayInclude(arrA, arrB) {

}

[1, 1, 2]
[1, 2, 2]
{
    1: true,
    2: true
}
[1, 2]
[1, 2]
{
    1: true,
    2: true
}
 */

function arrayInclude(arrA, arrB) {
    const lenA = arrA.length, lenB = arrB.length;
    while (arrA.length && arrB.length) {
        let num = arrA[0];
        if (!arrB.includes(num)) break;
        while (arrA.indexOf(num) !== -1 && arrB.indexOf(num) !== -1) {
            arrA.splice(arrA.indexOf(num), 1);
            arrB.splice(arrB.indexOf(num), 1);
        }
    }

    if (!arrA.length && arrB.length) {
        return 1;
    } else if (arrA.length && !arrB.length) {
        return 2;
    } else if (!arrA.length && !arrB.length) {
        return lenA === lenB ? 0 : (lenA < lenB ? 1 : 2);
    } else {
        return -1;
    }
}

var a1 = [4, 2, 3, 1, 4]
var a2 = [4, 2, 3, 1, 4, 5]
console.log(arrayInclude(a1, a2)) // 1
var a3 = [4, 2, 3, 1, 4]
var a4 = [4, 2, 3, 1]
console.log(arrayInclude(a3, a4)) // 2
var a5 = [4, 2, 3, 1, 4]
var a6 = [4, 2, 3, 1, 4]
console.log(arrayInclude(a5, a6)) // 0
var a7 = [4, 2, 3, 1, 4]
var a8 = [3, 2, 3, 1, 4]
console.log(arrayInclude(a7, a8)) // -1

