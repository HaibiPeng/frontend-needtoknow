// function Subscriber() {
//     this.subscribers = [];
// }

// Subscriber.prototype.subscribe = function(fn) {
//     if (this.subscribers.indexOf(fn) === -1) {
//         this.subscribers.push(fn);
//     }
// }

// Subscriber.prototype.unsubscribe = function(fn) {
//     if (this.subscribers.indexOf(fn) !== -1) {
//         this.subscribers = this.subscribers.filter(f => f !== fn);
//     }
// }

// Subscriber.prototype.publish = function() {
//     this.subscribers.forEach(sub => sub());
// }

// function func1() {
//     console.log('func1');
// }

// function func2() {
//     console.log('func2');
// }

// function func3() {
//     console.log('func3');
// }

// const subscriber = new Subscriber();

// subscriber.subscribe(func1);
// subscriber.subscribe(func2);
// subscriber.unsubscribe(func2);
// subscriber.subscribe(func3);

// subscriber.publish();


// class写法
class EventEmitter {
    constructor() {
        this.cache = {}
    }

    // 添加监听
    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }

    // 清除监听
    off(name, fn) {
        let tasks = this.cache[name]
        if (tasks) {
            const index = tasks.findIndex(f => f === fn || f.callback === fn)
            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }

    // 发布
    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
            let tasks = this.cache[name].slice()
            for (let fn of tasks) {
                fn(...args)
            }
            if (once) {
                delete this.cache[name]
            }
        }
    }
}

// 测试
let eventBus = new EventEmitter()
let fn1 = function (name, age) {
    console.log(`${name} ${age}`)
}
let fn2 = function (name, age) {
    console.log(`hello, ${name} ${age}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)
// '布兰 12'
// 'hello, 布兰 12'



