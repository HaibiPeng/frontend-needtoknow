/*实体类，Dog、Cat等*/
class Dog {
    constructor() {
        this.name = 'dog';
    }
    run() {
        console.log('Dog run');
    }
}

class Cat {
    constructor() {
        this.name = 'cat';
    }
    run() {
        console.log('Cat run');
    }
}
/*工厂类Animal*/
class Animal {
    constructor(type) {
        switch (type) {
            case 'dog':
                return new Dog();
            case 'cat':
                return new Cat();
            default:
                break;
        }
    }
}

let dog = new Animal('dog');
dog.run();

let cat = new Animal('cat');
cat.run()


const bite = function () {
    console.log("bite");
}
Function.prototype.DecoratorFn = function (fn) {
    this();  //指向父类的bite()方法
    fn();
}

cat.run.DecoratorFn(bite); 

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