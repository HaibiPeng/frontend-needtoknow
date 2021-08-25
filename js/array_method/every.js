Array.prototype.myEvery = function (callback, thisArg) {
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
    for (let i = 0; i < len; i++) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];
const result = arr.myEvery((num) => num < 10);

console.log(result);
