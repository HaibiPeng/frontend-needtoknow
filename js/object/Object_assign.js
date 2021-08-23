Object.myAssign = function (target, ...source) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    let result = Object(target);
    source.forEach(function (obj) {
        if (obj !== null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    result[key] = obj[key];
                }
            }
        }
    })
    return result;
}

const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.myAssign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}

console.log(Object.myAssign([1, 2, 3], [4, 5])); // [4, 5, 3]

