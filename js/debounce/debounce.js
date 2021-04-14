//防抖：让事件响应函数（回调函数）在间隔时间后才执行
//如果在间隔时间内事件再次触发，则清除计时，重新开始计算执行时间
//如果间隔时间内事件没有触发，则执行事件响应函数
function debounce(func, delay, immediate) {
    let timeout, result;
    let debounced = function () {
        //改变响应函数内部this指向
        let args = arguments;
        let context = this;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            //console.log(timeout);
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
            //立即执行
            if (callNow) {
                result = func.apply(context, args);
            }
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        }
        return result;
    }
    //清除防抖：清除定时，设置timeout为null
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
    //或使用箭头函数，
    /* timeout = setTimeout(() => {
        func.call(this);
    }, delay); */
}



let count = 0;

function doAction(e) {
    //改变执行函数内部this指向
    //event指向问题
    //console.log(e);
    container.innerHTML = count++;
}

function payMoney() {
    console.log('paid');pay
}

let container = document.querySelector('#container');
let btn = document.querySelector('#button');
let paybtn = document.querySelector('#pay');

let debouncedDoAction = debounce(doAction, 1000, true);

let debouncedPay = debounce(payMoney, 2000);

btn.onclick = function () {
    debouncedDoAction.cancel();
    debouncedPay.cancel();
}

paybtn.addEventListener('click', debouncedPay);

container.onmousemove = debouncedDoAction;