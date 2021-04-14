//节流：事件触发执行一次响应函数后，再间隔固定时间触发事件才会再次执行响应函数
//在此间隔内，不管事件触发多少次，都不会执行响应函数
//setTimeout
function throttle1(func, delay) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if(timeout) return;
        timeout = setTimeout(function() {
            func.apply(context, args);
            timeout = null;
        }, delay);
    }
}

//new Date()
function throttle2(func, delay) {
    let pre = 0;
    return function () {
        let now = new Date();
        let context = this;
        let args = arguments;
        if(now - pre > delay) {
            func.apply(context, args);
            pre = now;
        }
    }
}

//结合
function throttle3(func, delay) {
    let pre = 0;
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        //第一次执行
        let now = new Date();
        if (now - pre > delay) {
            if(timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            func.apply(context, args);
            pre = now;
        }
        //最后一次也执行
        if(!timeout){
            timeout = setTimeout(function () {
                func.apply(context, args);
                pre = new Date();
                timeout = null;
            }, delay);
        }
    }
}

let count = 0;

function doAction(e) {
    //改变执行函数内部this指向
    //event指向问题
    //console.log(e);
    container.innerHTML = count++;
}

container.onmousemove = throttle3(doAction, 1000);