//promise封装Ajax

var url = '';
var params = {
    id: 'id=123',
    limit: 'limit=10'
};

function getJSON(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url + '?' + params.join('&'), true);

        xhr.onreadystatechange = () => {
            //交互完成
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 400) {
                    try {
                        var data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error("Request failed: " + xhr.responseText));
                }
            }
        }
        xhr.send();
    })
}

function postJSON(url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        //设置请求头content-type
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 400) {
                    try {
                        resolve(JSON.parse(xhr.responseText));
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error("Request failed: " + xhr.responseText));
                }
            }
        }
        xhr.send(JSON.stringify(data));
    })
}

getJSON(url).then(res => console.log(res));