Array.prototype.myforEach = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    // const O = Object(this)  // this 就是当前的数组
    // const len = arr.length >>> 0  // 后面有解释
    const arr = Object(this);
    const len = arr.length;
    // let k = 0
    // while (k < len) {
    //     if (k in arr) {
    //         callback.call(thisArg, arr[k], k, arr);
    //     }
    //     k++;
    // }
    for (let i = 0; i < len; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
}

// 无符号右移 0 位，为了保证转换后的值为正整数。其实底层做了 2 层转换，
// 第一是非 number 转成 number 类型，第二是将 number 转成 Uint32 类型

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];
let sum = 0;
arr.myforEach((num) => sum += num);

console.log(sum);

