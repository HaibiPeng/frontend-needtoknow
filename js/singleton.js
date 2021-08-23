class SingleObject {
    login() {
        console.log('login...');
    }
}

SingleObject.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})()

// 测试
let obj = SingleObject.getInstance();
obj.login(); // login...
let obj2 = SingleObject.getInstance();
obj2.login(); // login...
console.log('obj === obj2: ', obj === obj2) // true