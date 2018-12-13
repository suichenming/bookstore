function Jia(){
this.init()
}
$.extend(Jia.prototype,{
    init:function(){
        this.jia()
        this.jian()
        this.huoqu()
    },
    jia:function(){
     this.jia= $(".jia")
        this.jia.each($.proxy(this.handlclick,this))
    },
    handlclick:function(i){
    this.jia.eq(i).on("click",i,$.proxy(this.handlclickq,this))
    },
    handlclickq:function(event){
        var index = event.data
        this.txt= $(".btn1").eq(index)
       var n = this.txt.val()
        n++;
        this.txt.val(n)
        this.span =$("ul>li>i")
        this.zongjia = this.span.eq(index).html().slice(1)
        var zongjia = this.zongjia*n
       $("ul>li>span").eq(index).html("￥"+zongjia)
       
      $("em").html(zongjia)
    },


    jian:function(){
        this.jian=$(".jian")
        this.jian.each($.proxy(this.handlclickjian,this))
    },
    handlclickjian:function(i){
        this.jian.eq(i).on("click",i,$.proxy(this.handlclickjianq,this))
    },
    handlclickjianq:function(event){
        var index1 = event.data
        
        this.txt = $(".btn1").eq(index1)
        this.span =$("ul>li>i")
        var n = this.txt.val()
        n--
        this.txt.val(n)
        
        this.zongjia = this.span.eq(index1).html().slice(1)
        var zongjia = this.zongjia*n
        $("ul>li>span").eq(index1).html("￥"+zongjia)
        $("em").html(zongjia)
        if(this.txt.val()<1){
            this.txt.val(1)
            $("ul>li>span").eq(index1).html("￥"+(this.zongjia))
            $("em").html(this.zongjia)
        }
      
     },
   huoqu:function(){
       this.zong = $("em")
       this.span =$("ul>li>span")
       console.log(this.span)
       this.txt = $(".btn1")
       var danjia1 =JSON.parse(this.span.eq(0).html().slice(1))
      var danjia = JSON.parse(this.span.eq(1).html().slice(1))
      $("em").html(danjia+danjia1)
   }
})
new Jia()
