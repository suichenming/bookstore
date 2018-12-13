
// 电子邮箱验证
function Email(){

   this.init()
}
$.extend(Email.prototype,{
    init:function(){
        this.dizhi()
    },
    dizhi:function(){
        
        var ema = $("#email");
        ema.on("blur",$.proxy(this.handlblur,this))
    },
    handlblur:function(){
        var reg =  /^[0-9]{5,10}@qq+(\.(com|cn))$/;
        var ema = $("#email");
        if(reg.test(ema.val())){
            alert("正确")
        }else{
            alert("请输入正确的邮箱")
        }
    }
})
new Email()
//密码验证
function Mima(){
this.init()
}
$.extend(Mima.prototype,{
    init:function(){
        this.mima()
    },
    mima:function(){
        var mima = $("#pass");
        mima.on("blur",$.proxy(this.handlblur,this))
    },
    handlblur:function(){
        var mima = $("#pass");
        var reg =	/^[a-z0-9_-]{6,18}$/;
        if(reg.test(mima.val())){
            alert("有效")
        }else{
            alert("请重新输入")
        }
    }
})
new Mima()
//比较密码是否一样
function Bijiao(){
    this.init()
}
$.extend(Bijiao.prototype,{
init:function(){
    this.bijiao()
},
bijiao:function(){
   
   var pass2 = $("#pass1")
   pass2.on("blur",$.proxy(this.handlblur,this))
  
},
handlblur:function(){
    var mimaval = $("#pass").val()
     var mimaval2 = $("#pass1").val()
     
    if(mimaval === mimaval2){
        
    }else{
        alert("密码不一致")
    }
}
})
new Bijiao()


//验证码获取
function Huoqu(){
    this.btn = $("#huoqu")
   this.init()
}
$.extend(Huoqu.prototype,{
    init:function(){
        this.yanzhenma()
    },
    yanzhenma:function(){
      var btn = $("#huoqu")
    btn.on("click",$.proxy(this.handlclick,this))
    },
    handlclick:function(){
      var sum="";
        for(var i=0;i<4;i++){
           sum+=Math.floor(Math.random()*10)
        }      
       $("span").text(sum)
    }
})
new Huoqu()
