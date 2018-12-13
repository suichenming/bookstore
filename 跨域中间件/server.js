const express = require('express');
const fs = require("fs");

const httpsMiddleware = require('./middleware');

const proxy = require('http-proxy-middleware');

const server = express();


// server.use('/v2', httpsMiddleware({target: 'api.douban.com', path: '/v2'}));
// server.use('/v4', httpsMiddleware({target: 'm.maizuo.com', path: '/v4'}));



server.use('/v2', proxy({target: 'https://api.douban.com', changeOrigin: true}));
server.use('/v4', proxy({target: 'https://m.maizuo.com', changeOrigin: true}));


server.get('/', (request, response)=>{
    let result = fs.readFileSync('./index.html');
    response.write(result);
    response.end();
})


server.listen(9000, (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
        console.log('http://localhost:9000');
    }
})