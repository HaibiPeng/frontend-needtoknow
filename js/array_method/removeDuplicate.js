// 获取类型
const getType1 = (function () {
    const class2type = { '[object Boolean]': 'boolean', '[object Number]': 'number', '[object String]': 'string', 
    '[object Function]': 'function', '[object Array]': 'array', '[object Date]': 'date', '[object RegExp]': 'regexp', 
    '[object Object]': 'object', '[object Error]': 'error', '[object Symbol]': 'symbol' };

    return function getType(obj) {
        if (obj === null) {
            return obj + '';
        }
        // javascript高级程序设计中提供了一种方法,可以通用的来判断原始数据类型和引用数据类型
        const str = Object.prototype.toString.call(obj);
        return typeof obj === 'object' || typeof obj === 'function' ? class2type[str] || 'object' : typeof obj;
    };
})();

const getType = function(obj) { 
    return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 判断两个元素是否相等
 * @param {any} o1 比较元素
 * @param {any} o2 其他元素
 * @returns {Boolean} 是否相等
 */
const isEqual = (o1, o2) => {
    const t1 = getType(o1);
    const t2 = getType(o2);

    // 比较类型是否一致
    if (t1 !== t2) {
        return false;
    }

    // 类型一致
    if (t1 === 'Array') {
        // 首先判断数组包含元素个数是否相等
        if (o1.length !== o2.length) {
            return false;
        }
        // 比较两个数组中的每个元素
        return o1.every((item, i) => {
            // return item === target
            return isEqual(item, o2[i]);
        })
    }

    if (t2 === 'Object') {
        // object类型比较类似数组
        const keysArr = Object.keys(o1);
        if (keysArr.length !== Object.keys(o2).length) {
            return false;
        }
        // 比较每一个元素
        return keysArr.every(k => {
            return isEqual(o1[k], o2[k]);
        })
    }

    if (t1 === 'Function') {
        return o1.toString() === o2.toString();
    }

    return o1 === o2;
}

// 数组去重
const removeDuplicates = (arr) => {
    return arr.reduce((accumulator, current) => {
        const hasIndex = accumulator.findIndex(item => isEqual(current, item));
        if (hasIndex === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
}

// 测试
const result = removeDuplicates([123, { a: 1 }, { a: { b: 1 } }, { a: "1" }, { a: { b: 1 } }, "meili", 
{ a: 1, b: 2 }, { b: 2, a: 1 }, function name() {}, function name() {}, function Name() {}]);
console.log(result);
// [123, {a: 1}, a: {b: 1}, {a: "1"}, "meili", {a: 1, b: 2}]