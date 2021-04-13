var express = require('express');

//90端口服务，将当前目录作为http服务
var app = express();
app.use(express.static(__dirname));
app.listen(90);

//91端口服务 返回数据
var app2 = express();
//CORS 修改响应头
/* app2.get("/", function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello World!");
}); */

// jsonp
app2.get("/", function (req, res) {
    /* var func = req.query.callback;
    res.send(func + "('Hello World!')"); */
    let { wd, callback } = req.query;
    console.log(wd); // helloworld
    console.log(callback); // alert
    res.end(`${callback}('${wd}')`)
});
app2.listen(91);

//92端口服务 返回数据
var app3 = express();
var whiteList = ['http://localhost:90']; //设置白名单
app3.use(function (req, res, next) {
    var origin = req.headers.origin;
    console.log(origin);
    if (whiteList.includes(origin)) {
        // 设置哪个源可以访问我
        res.setHeader('Access-Control-Allow-Origin', origin);
        // 允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers', 'name');
        // 允许哪个方法访问我
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials', true);
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age', 6);
        // 允许返回的头
        res.setHeader('Access-Control-Expose-Headers', 'name');
        if (req.method === 'OPTIONS') {
            res.end(); // OPTIONS请求不做任何处理
        }
    }
    next();
})

app3.put('/getData', function (req, res) {
    console.log(req.headers);
    res.setHeader('name', 'cors'); //返回一个响应头，后台需设置
    res.end('Hello my cors!');
})

app3.get('/getData', function (req, res) {
    console.log(req.headers);
    res.end('Hello my cors!');
})
app3.use(express.static(__dirname));
app3.listen(92);
