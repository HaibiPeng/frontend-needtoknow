window.addEventListener("popstate", function (ev) {
    // 获取当前页面的前后页面的url，如果是前面页面匹配，渲染前面，否则是后面
    // 前提在于避免一个页面的前后页面都是同一个页面
    var urlObj = globalHistory._getSurroundUrl();
    // 从当前浏览器上获取的url，主要是location.path
    var currentUrl = globalHistory._getCurrentHistoryName();
    if (urlObj.prev === currentUrl) {
        globalHistory.previous();
    }
    else {
        globalHistory.next();
    }
    // 根据当前的页面信息渲染页面
    domChangeMethod(globalHistory, history.state);
}, false);


function History() {
    this.history = []; // 对应浏览器的历史状态
    this.index = null; // 代表当前的位置
    // 还可以有其他内容，这里与主题无关，暂略
}

History.prototype = {
    constructor: History,
    // 初始化
    initialize: function (url) {
        this.history = [url];
        this.index = 0;
    },
    // 对应history.pushState方法，细节实现图的原理
    pushState: function (page, data) {
        // 先移除后面的历史状态，然后添加到最后一项
        for (var i = this.history.length - 1; i >= this.index + 1; i++) {
            this.history.splice(i, 1); //移除
        }
        this.history.push(page.url) // 添加
        this.index++;
        history.pushState(data, page.title, page.url); // 对应起来
    },
    // 对应history.replaceState方法，细节实现图原理
    replaceState: function (page, data) {
        this.history.splice(this.index, 1, page.url);
        history.replaceState(data, page.title, page.url);
    },
    _getSurroundUrl: function () {
        return {
            next: this.history[this.index + 1],
            prev: this.history[this.index - 1]
        }
    },
    _getCurrentHistoryName: function () {
        return location.pathname;
    },
    previous: function () { this.index-- },
    next: function () { this.index++; },
};