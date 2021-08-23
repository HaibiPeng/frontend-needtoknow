Array.prototype.reduce = function (callback, init) {
    let i = 0;
    if (init === undefined) {
        i = 1;
        init = this[0];
    }
    for (i; i < this.length; i++) {
        init = callback(init, this[i], i, this);
    }
    return init;
}

Array.prototype.forEach = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    const arr = Object(this);
    const len = arr.length;
    let k = 0
    while (k < len) {
        if (k in arr) {
            callback.call(thisArg, arr[k], k, arr);
        }
        k++;
    }
}

Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    const arr = Object(this);
    const len = arr.length;
    const res = [];
    for (let i = 0; i < len; i++) {
        res[i] = callback.call(thisArg, arr[i], i, arr);
    }
    return res;
}

Array.prototype.myFilter = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    const arr = Object(this);
    const len = arr.length;
    const res = [];
    for (let i = 0; i < len; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

Array.prototype.mySome = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    const arr = Object(this);
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

