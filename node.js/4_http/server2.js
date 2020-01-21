const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeType = {
    '.html' : 'text/html',
    '.js' : 'text/javascript',
    '.css' : 'text/css',
    '.png' : 'image/png',
    '.jpg' : 'image/jpg',
}

const ext = path.parse(req.url).ext;
const webcontentPath = path.join(__dirname, 'C:\\SecureCoding\\workspace\\PJT_SafeSquare\\WebContent');

http.createServer((req, res) => {
    if(Object.keys(mimeType).includes(ext)){
        fs.readFile('C:\\SecureCoding\\workspace\\PJT_SafeSquare\\WebContent\\index.html', (err, data)=>{
            if(err) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', mimeType[ext]);
                res.end(data);
            }
        });
    }
}).listen(8080, ()=>{
    console.log('8080번 포트에서 서버 대기중입니다.');
});