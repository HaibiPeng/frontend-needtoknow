(async function () {
    /**
    * s 休眠时长， 单位：秒
    */
    function sleep(s) {
        s = s || 0;
        s = parseInt(s) * 1000;
        let now = +new Date();
        let timer = null;
        return new Promise((resolve, reject) => {
            timer = setInterval(() => {
                if (now + s < +new Date()) {
                    clearInterval(timer);
                    resolve(true);
                }
            }, 10)
        })

    }


    console.log(`start: ${new Date()}`);
    await sleep(3); // 休眠3秒
    console.log(`end  : ${new Date()}`);

})();

function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(1)
            } catch (e) {
                reject(0)
            }
        }, delay * 1000);
    })
}

async function test() {
    for (var i = 0; i < 5; i++) {
        await sleep(1);
        console.log(i);
    }
}

test();

