// 所有 Promise 的状态都变化了，那么新返回一个状态是 fulfilled 的 Promise，且它的值是一个数组，
// 数组的每项由所有 Promise 的值和状态组成的对象；
// 如果有一个是 pending 的 Promise，则返回一个状态是 pending 的新实例；

Promise.myAllSettled = function(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject('arguments must be an array');
        }
        let length = promises.length;
        let result = [];
        promises.forEach((promise) => {
            Promise.resolve(promise).then(val => {
                result.push({
                    status: 'fulfilled',
                    value: val
                });
                if (result.length === length) {
                    resolve(result);
                }
            }, (reason) => {
                result.push({
                    status: 'rejected',
                    reason: reason
                });
                if (result.length === length) {
                    resolve(result);
                }
            })
        })
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('p1 resolved');
        reject('p1 rejected');
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved');
    }, 1000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 resolved');
    }, 3000);
})

console.time('time');
Promise.myAllSettled([p1, p2, p3]).then(result => {
    console.log(result);
    console.timeEnd('time');
}).catch(reason => {
    console.log(reason);
})