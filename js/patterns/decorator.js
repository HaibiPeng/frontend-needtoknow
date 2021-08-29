class Dog {
    constructor() {
        this.name = 'dog';
    }
    run() {
        console.log('Dog run');
    }
}

class Decorator {
    // 将老代码实例传入
    constructor(oldHC) {
        this.oldHC = oldHC
    }
    run() {
        this.oldHC.run()
        // “包装”了一层新逻辑
        this.bite()
    }
    bite() {
        console.log('bite')
    }
}

const newDog = new Decorator(dog);
newDog.run();