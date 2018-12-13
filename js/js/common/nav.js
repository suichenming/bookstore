define(["jquery"],function(){
    function Nav(container){
        this.container = container;
        this.init();
    }
    
    Nav.Template = `<nav class="navbar navbar-default">
    <div class="container-fluid" id="logo">
        <a class="navbar-brand" href="index.html">
            <img src="http://www.mobiletrain.org/images/index/new_logo.png">
        </a>
    </div>
    
    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li class="active">
                <a href="#">首页</a>
            </li>
            <li>
                <a href="#">列表页</a>
            </li>
        </ul>
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
            <li>
                <a href="#" data-toggle="modal" data-target="#login_model" id="login">登录</a>
            </li>
            <li>
                <a href="#" data-toggle="modal" data-target="#register_model">注册</a>
            </li>
        </ul>
    </div>
    
    </div>
    
    </nav>`;
    
    
    $.extend(Nav.prototype,{
        init:function(){
            this.createDom();
        },
        createDom:function(){
            //把字符串转换为一个jquery对象
           this.ele = $("<div></div>").append(Nav.Template);
           this.container.append(this.ele);
        }
    })


    return {
        init:Nav
    }
})