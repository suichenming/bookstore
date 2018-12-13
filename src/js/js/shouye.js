// function Gouwuche(){
// 	this.init()
// }
// Gouwuche.prototype ={
// 	constructor:Gouwuche,
// 	init:function(){
// 		this.yiru(),
// 		this.yichu()
// 	},yiru:function(){
// 		var erji =$("#gouwu")
// 		erji.on("mouseover", $.proxy(this.handlmouseover,this))
// 	},
// 	handlmouseover:function(){
// 		$("#gouwuche").css({
// 			display:"block",
// 		})
// 	},
// 	yichu:function(){
// 		var erji =$("#gouwu")
// 		erji.on("mouseout",$.proxy(this.handlmouseout,this))
// 	},
// 	handlmouseout:function(){
// 		$("#gouwuche").css({
// 			display:"none",
// 		})
// 	}
// }
// new Gouwuche()




function Erjidaohan(){
	this.init()
}
//二级导航
Erjidaohan.prototype ={
	constructor:Erjidaohan,
	init:function(){
		this.yiru();
		this.yichu()
	},
	yiru:function(){
		var erji =$("#yiruerji")
		erji.on("mouseover", $.proxy(this.handlmouseover,this))
	},
	handlmouseover:function(){
		$("#erjidaohan").css({
			display:"block",
		})
	},
	yichu:function(){
		var erji =$("#yiruerji")
		erji.on("mouseout",$.proxy(this.handlmouseout,this))
	},
	handlmouseout:function(){
		$("#erjidaohan").css({
			display:"none",
		})
	}
}
new Erjidaohan()

	function Fn() {
		this.init();
	}
	Fn.prototype = {
		constructor: Fn,
		init: function () {
			this.yiru();
			this.yichu();
		},
		yiru: function () {
			var li2 = $("#li2")
			li2.on("mouseover", $.proxy(this.handlmouseover, this))
		},
		handlmouseover: function () {
			$("#box").css({
				display:"block"
			})
		},
		yichu: function () {
			var li2 = $("#li2")
			li2.on("mouseout", $.proxy(this.handlmouseout, this))
		},
		handlmouseout: function () {
			$("#box").css("display", "none")
		},
	
	}
	new Fn()



	function Yichu(){
	this.init()
	}
	Yichu.prototype ={
		constructor:Yichu,
		init:function(){
				this.yiru1();
				this.yichu1();
		},	
		yiru1:function(){
			var li3 = $("#li3");
			li3.on("mouseover",$.proxy(this.handlmouseover,this))
		},
		handlmouseover:function(){
			$("#box1").css("display","block")
		},
		yichu1: function () {
			var li2 = $("#li3");
			li2.on("mouseout", $.proxy(this.handlmouseout,this))
		},
		handlmouseout: function () {
			$("#box1").css("display", "none")
		},
	}
	new Yichu()
//轮播图
	function Banner(){
		this.banner=$("#banner");
		this.init();
		this.n=0;
		this.timer=null;
		this.li1 = $("#banner>ul>li").eq(0).clone(true);
		this.ul = $("#banner>ul")
		this.ul.append(this.li1)
		this.li = $("#banner>ul>li");
		this.iw=this.li.width();
		this.ul.width= this.li.length*this.iw;
		this.ul.css({
			width:this.ul.width
		});
		this.aBtn = $("#btn>a")

	}
	$.extend(Banner.prototype,{
		init:function(){
			this.autoPlay();
			this.xuan()
			this.yr();
			},
			xuan:function(){
				this.aBtn = $("#btn>a")
				
			this.aBtn.mouseover(function(){
				$(this).addClass("active").siblings().removeClass("active");
				$("#banner>ul>li").eq($(this).index()).show().siblings().hide()
			})
			},
		autoPlay:function(){
			this.li = $("#banner>ul>li");
			var _this = this
		this.timer = setInterval(function(){
			if(_this.n == _this.li.length-1){
				_this.n=1;
				_this.ul.css("left","0")
			}else{
				_this.n++
			}
			_this.toImg();
		
			},3000)	
			},
		toImg:function(){
			this.ul.stop(true).delay().animate({
				left:-this.n*this.iw
				
			})
			this.aBtn.eq(this.n>=this.li.length-1?0:this.n).addClass("active").siblings().removeClass("active");
			},
			yr:function(){
			this.banner.mouseover(function(){
				clearInterval(this.timer)
			})
			
			},
			yc:function(){
				
			}
		})
	new Banner()

	//轮播图右边移入移出
	function Right(){
		
		this.nav = $("#banner_right>a>img");
	
		this.init()
	}
	$.extend(Right.prototype,{
		init:function(){
		this.yr()
		this.yc()
		this.yr1()
		this.yc1()
		this.yr2()
		this.yc2()
		
		},
		yr:function(){
		this.nav.eq(0).mouseover(function(){
		$("#img1").stop(true).animate({
			marginLeft:-10,
			height:140
				})
			
			})
		},
		yc:function(){
			this.nav.eq(0).mouseout(function(){
				$("#img1").stop(true).animate({
					marginLeft:0,
					height:140
						})
					
					})
		},
		yr1:function(){
			this.nav.eq(1).mouseover(function(){
			$("#img2").stop(true).animate({
				marginLeft:-10,
				height:140
					})
				
				})
			},
			yc1:function(){
				this.nav.eq(1).mouseout(function(){
					$("#img2").stop(true).animate({
						marginLeft:0,
						height:140
							})
						
						})
			},
			yr2:function(){
				this.nav.eq(2).mouseover(function(){
				$("#img3").stop(true).animate({
					marginLeft:-10,
					height:140
						})
					
					})
				},
				yc2:function(){
					this.nav.eq(2).mouseout(function(){
						$("#img3").stop(true).animate({
							marginLeft:0,
							height:140
								})
							
							})
				}
	})
	new Right()
	//显示推荐图片扩大
	function Img(){
	
		this.init()
	}
	Img.prototype={
		constructor:Img,
		init:function(){
			this.yr();
			this.yc()
		},
		yr:function(){
			var li = $("#img4")
			
			li.on("mouseover",$.proxy(this.handlmouseover,this))
		},
		handlmouseover:function(){
			$("#img5").stop(true).animate({
				width:"270px",
				height:"216px",
				marginLeft:-10
			})
		},
		yc:function(){
			var li = $("#img4")
			li.on("mouseout",$.proxy(this.handlmouseout,this))
		},
		handlmouseout:function(){
			$("#img5").stop(true).animate({
				width: "238px",
				height: "198px",
				marginLeft:0
               
			})
		}
	}
	new Img()
		
//获取localStorage
	function Local(){
		this.init()
	}
	$.extend(Local.prototype,{
		init:function(){
			this.local()
		},
		local:function(){
			var li = $("#bd_img")
		li.on("mousemover",$.proxy(this.handlclick,this))
		},
		handlclick:function(){
			alert(1)
		}
	})
	
	new Local()
	function Daji(){
		this.init()
	}
	$.extend(Daji.prototype,{
		init:function(){
			this.daji()
		},
		daji:function(){
			var dianji = $(".bd_img")
			dianji.on("click",$.proxy(this.handlclick,this))
			var num ={}
		},
		handlclick:function(event){
			var num ={}
			var tar =event.target
			if(tar.tagName == "IMG" && tar.className =="ab"){
				var id = $(tar).parent().parent().attr("data-id")
				var n = num[id];
				if(!n){
					num[id]=1;
				}else{
					n++;
					num[id]=n;

				}
				var data = JSON.stringify(num);
				localStorage.setItem("init",)

			}
			

		}
	})
	new Daji()





	//搜索框
	function fn(data){
		var data =data.result;
		var str1 = "";
			for(var j=0;j<data.length;j++){
			str1 +="<a href='#'><li>"+data[j]+"</li></a>"
			}
		list_m.innerHTML=str1;
	};
	var list_m=document.getElementById("list_s");
	var btn = document.getElementById("txt");
	btn.addEventListener("input",function(){
		var list_mval = btn.value;
	var script = document.createElement("script");
		script.src ="http://suggest.taobao.com/sug?code=utf-8&q="+list_mval+"&callback=fn"
		document.body.appendChild(script);
		script.onload = function(){
			this.remove();
		}
	})

	