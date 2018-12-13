const https = require('https');


module.exports = function(options){

    return function(request, response, next){
        console.log(request.url);
    
        //转发请求给豆瓣服务器
        https.request(
            {
                hostname: options.target,
                port: 443,
                path: options.path+request.url
            },
            (res)=>{
                let value = '';
                res.on('data', (bf)=>{
                    value += bf;
                });
                res.on('end', ()=>{
                    //接收到数据，响应客户端
                    response.json(JSON.parse(value));
                })
            }
        ).end();
    }


}