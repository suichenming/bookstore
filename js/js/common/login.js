define(["jquery"], function() {
    function Login(container){
        this.container = container;
        this.init();
    }
    
    Login.Template = ` <div class="modal fade" tabindex="-1" role="dialog" id="login_model">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">登录</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="login_username">用户名</label>
                        <input type="text" class="form-control" id="login_username" placeholder="请输入用户名">
                    </div>
                    <div class="form-group">
                        <label for="login_password">密码</label>
                        <input type="text" class="form-control" id="login_password" placeholder="请输入密码">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">登录</button>
            </div>
        </div>
    </div>
    </div>`;
    
    $.extend(Login.prototype,{
        init:function(){
           this.createDom();
        },
        createDom:function(){
            this.ele = $("<div></div>").append(Login.Template);
            this.container.append(this.ele)
        }
    
    })


    return {
        init:Login
    }
});