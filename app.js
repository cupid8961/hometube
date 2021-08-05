//1. http 모듈을 불러오자
const http = require('http');
const server = http.createServer((req, res) => {
    //console.log(req);
    const url = req.url;
    if (url==='/index'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
    
        res.write('<h1>helloworld!~</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } 
        console.log("url!~");
    
  });

server.listen(3000);


//2.서버를 만들자
