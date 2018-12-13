define(["jquery"],function(){
   
   var nav = require("./nav");
   var login = require("./login");
   var register = require("./register");

  
    function Page(){
        this.ele = $("#header");
        this.init();
    }
   
    $.extend(Page.prototype,{
        init:function(){
            //创建了三个构造函数
           this.header = new nav.init(this.ele)
           this.login = new login.init(this.ele)
           this.register = new register.init(this.ele)
        }
    })
    
    return {
        init:new Page
    }
})
