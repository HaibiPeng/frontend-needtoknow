// 空数组或者所有 Promise 都是 rejected，则返回状态是 rejected 的新 Promsie，且值为 AggregateError 的错误；
// 只要有一个是 fulfilled 状态的，则返回第一个是 fulfilled 的新实例；
// 其他情况都会返回一个 pending 的新实例；

Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject('arguments must be an array');
        }
        let index = 0;
        let length = promises.length;
        if (length === 0) return;
        promises.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                resolve(val);
            }, (reason) => {
                index++;
                if (index === length) {
                    reject(new AggregateError('All promises were rejected'));
                }
            })
        })
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('p1 resolved');
        reject('p1 rejected');
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('p2 resolved');
        reject('p2 rejected');
    }, 1000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('p3 resolved');
        reject('p3 rejected');
    }, 3000);
})

console.time('time');
Promise.myAny([p1, p2, p3]).then(result => {
    console.log(result);
    console.timeEnd('time');
}).catch(reason => {
    console.log(reason);
})
