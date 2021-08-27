const dir = [
    '/usr/local/nginx',
    '/usr/local/mysql/bin',
    '/tmp/log/nginx'
];
const tree = {};
for (let i = 0; i < dir.length; i++) {
    const cur = dir[i].split('/').slice(1);
    dfs(tree, cur, 0);
}
console.log(JSON.stringify(tree));

function dfs(tree, cur, i) {
    if (i === cur.length) {
        return;
    }
    if (!tree.hasOwnProperty(cur[i])) {
        tree[cur[i]] = {};
        dfs(tree[cur[i]], cur, i + 1);
    } else {
        dfs(tree[cur[i]], cur, i + 1);
    }
}