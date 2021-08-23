Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    // const O = Object(this)
    // const len = O.length >>> 0
    const arr = Object(this);
    const len = arr.length;
    const res = [];
    // let k = 0, res = [];
    // while (k < len) {
    //     if (k in arr) {
    //         res[k] = callback.call(thisArg, arr[k], k, arr);
    //     }
    //     k++;
    // }
    for (let i = 0; i < len; i++) {
        res[i] = callback.call(thisArg, arr[i], i, arr);
    }
    return res;
}

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];
const result = arr.myMap((num) => num * 2);

console.log(result);
