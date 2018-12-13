
    function Nav1(container){
        this.container=container;
        this.init()
        }
        Nav1.Template=`<aside class="main">
        <a href="#"><img src="../img/logo.gif" class="logo" style="margin-top:10px;"></a>
        <div id="sosuo">
            <input type="text" id="txt" placeholder="商品关键字">
           
            <button>搜索</button>
            <ul id="list_s">
           
            </ul>
        </div>
        <div id="service">
            <p><img src="../img/xiaobiao5.gif" id="dianhua">400-889-8188</p>
            <p><a href="#"><img src="../img/xiaobiao6.gif" id="jieting">在线客服</a></p>
        </div>
    </aside>`
        
        $.extend(Nav1.prototype,{
            init:function(){
            this.createDom();
            },
            createDom:function(){
                this.a = $("<div></div>").append(Nav1.Template);
                this.container.append(this.a);
            }
        })
     