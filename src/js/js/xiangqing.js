function Fanda(){
    this.init()
    this.img =$("#img>img")
}
$.extend(Fanda.prototype,{
    init:function(){
        this.fanda()
    },
    fanda:function(){
        this.img =$("#img>img")
    this.img.each($.proxy(this.handleimg,this))
    },
  handleimg:function(i){
      this.img.eq(i).on("mouseover",i,$.proxy(this.handlaimg,this))
  },
  handlaimg:function(event){
    this.middle = $(".middle")
    this.maxImg = $("#maxImg>img")
    var index = event.data;
    var src1=  this.img.eq(index).attr("data-url")
    this.middle.attr("src",src1)
    this.maxImg.attr("src",src1)
  }
})
new Fanda()

function Yr(){
    this.init()
}
Yr.prototype={
    constructor:Yr,
    init:function(){
        this.yr()
        this.yd()
        this.yc()
    },
    yr:function(){
        this.daxiao= $(".daxiao");
        this.daxiao.on("mouseover",$.proxy(this.handlmouseover,this))
    },
    handlmouseover:function(event){
        $("#fifter").css("display","block")
        $("#maxImg").css("display","block")
      
    },
    yc:function(){
        this.daxiao = $(".daxiao")
        this.daxiao.on("mouseout",$.proxy(this.handlmoseout,this))
    },
    handlmoseout:function(){
        $("#fifter").css("display","none")
        $("#maxImg").css("display","none")
    },
    yd:function(){
        this.daxiao= $(".daxiao");
        this.daxiao.on("mousemove",$.proxy(this.handlmousemove,this))
    },
    handlmousemove:function(){
        this.maxImg = $("#maxImg>img")
        var box = this.daxiao
        var l1 = box.offset()
         var left = l1.left
         var top = l1.top
         var l = event.pageX-left-$("#fifter").width()/2
         var t = event.pageY-top-$("#fifter").height()/2
        l=l>$(".daxiao").width()-$("#fifter").width()?$(".daxiao").width()-$("#fifter").width():(l<0?0:l)
        t=t>$(".daxiao").height()-$("#fifter").height()?$(".daxiao").height()-$("#fifter").height():(t<0?0:t)
      $("#fifter").css("left",l)
      $("#fifter").css("top",t)
       $("#max").css("left",-2*l)
       $("#max").css("top",-2*l)
      
    }
}
new Yr()