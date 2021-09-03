// compose
const compose = function () {
    // 将接收的参数存到一个数组， args == [multiply, add]
    const args = [...arguments];
    return function (x) {
        return args.reduceRight((res, cb) => cb(res), x);
    }
}

const add = x => x + 2;
const multiply = x => x * 2;

let calculate1 = compose(add, add, multiply);
console.log(calculate1(10));    // 结果是

// pipe
const pipe = function () {
    const args = [...arguments];
    return function (x) {
        return args.reduce((res, cb) => cb(res), x);
    }
}

let calculate2 = pipe(add, add, multiply);
console.log(calculate2(10));    // 结果是