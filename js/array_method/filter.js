Array.prototype.myFilter = function (callback, thisArg) {
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
    //     if (k in O) {
    //         callback.call(thisArg, O[k], k, O);
    //         if (callback.call(thisArg, O[k], k, O)) {
    //             res.push(O[k])
    //         }
    //     }
    //     k++;
    // }
    for (let i = 0; i < len; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];
const result = arr.myFilter((num) => num > 4);

console.log(result);
