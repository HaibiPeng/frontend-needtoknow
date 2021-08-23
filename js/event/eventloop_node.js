//宏任务 check阶段 暂时命名任务1
setImmediate(() => {
    console.log(1)
});
//宏任务 timer阶段   暂时命名任务2
setTimeout(() => {
    console.log(2);
    //宏任务 timer阶段 暂时命名任务22
    setTimeout(() => {
        console.log(22);
    }, 0);
}, 0);
//宏任务 timer阶段   暂时命名任务3
setTimeout(() => {
    console.log(3);
}, 0);
//宏任务 timer阶段   暂时命名任务4
setTimeout(() => {
    console.log(4);
}, 100);

//微任务              暂时命名任务5
process.nextTick(() => {
    console.log(5);
})
//同步任务                 暂时命名任务6
console.log(6);
console.log(7);
//执行结果为  6 7 5 2 3 1 22 4