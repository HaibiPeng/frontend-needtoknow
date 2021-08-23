//节流：事件触发执行一次响应函数后，再间隔固定时间触发事件才会再次执行响应函数
//在此间隔内，不管事件触发多少次，都不会执行响应函数
//应用场景：
//鼠标不断点击触发，mousedown(单位时间内只触发一次)
//监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断


//setTimeout 第一次不执行，最后一次执行
function throttle1(func, delay) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if(timeout) {
            return;
        }
        timeout = setTimeout(function() {
            func.apply(context, args);
            timeout = null;
        }, delay);
    }
}

//new Date() 第一次执行，最后一次不执行
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
            //第一次调用为undefined
            //从第一次调用debounce到最后一次用一直都是执行这个if中的func
            console.log('timeout1:', timeout);
            if(timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            func.apply(context, args);
            pre = now;
        }
        //最后一次也执行
        //每次调用debounce都会进入这个if创建timeout，因为timeout每次都会在上一个if中清除掉了
        //这里的func和上一个if中的func交替执行
        if(!timeout){
            timeout = setTimeout(function () {
                console.log('timeout2:', timeout);
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

container.onmousemove = myThrottle3(doAction, 1000);

function myThrottle1(func, delay) {
    let timeout;
    return function() {
        let _this = this;
        let args = arguments;
        if (timeout) {
            return;
        }
        timeout = setTimeout(function() {
            func.apply(_this, args);
            timeout = null;
        }, delay);
    }
}

function myThrottle2(func, delay) {
    let pre = 0;
    return function () {
        let _this = this;
        let args = arguments;
        let now = new Date();
        if (now - pre > delay) {
            func.apply(_this, args);
            pre = now;
        }
    }
}

function myThrottle3(func, delay) {
    let pre = 0;
    let timeout;
    let result;
    let throttled = function() {
        let _this = this;
        let args = arguments;
        let now = new Date();
        if (now - pre > delay) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            result = func.apply(_this, args);
            pre = now;
        }
        if (!timeout) {
            timeout = setTimeout(function() {
                result = func.apply(_this, args);
                clearTimeout(timeout);
                timeout = null;
                pre = new Date();
            }, delay)
        }
        return result;
    }
    throttled.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
        pre = 0;
    }
    return throttled;
}