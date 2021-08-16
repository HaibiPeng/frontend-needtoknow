function _get(obj, path, defaultValue) {
    path = !Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path;
    return path.reduce((o, key) => (o || {})[key], obj) || defaultValue;
}

var obj = { 'a': [{ 'b': { 'c': 3 } }] };

var result = _get(obj, 'a[0].b.c');
console.log(result);
// => 3

result = _get(obj, ['a', '0', 'b', 'c']);
console.log(result);
// => 3

result = _get(obj, 'a.b.c', 'default');
console.log(result);
// => 'default'