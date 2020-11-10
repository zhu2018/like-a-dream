const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    console.log(req);
    console.log(req.method === 'POST');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
})
server.listen(919, () => {
    console.log('启动成功', 'http://localhost:919');
})

function writelog(str) {
    console.log(path.resolve());
    if (fs.existsSync('./app.log')) {
        fs.readFile('./app.log', (err, res) => {
            if (err) {
                console.log('文件不存在');
            } else {
                console.log(res.toString())
            }
        })
    } else {
        fs.mkdir('./app.log', { recursive: true }, (err, res) => {
            if (res) {
                writelog(str);
            }
        })
    }
}
