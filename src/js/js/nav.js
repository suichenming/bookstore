function Nav(container){
this.container=container;
this.init()
}
Nav.Template=`	<nav class="main">
<ul id="ul_left">
    <li>
        <a href="##">
            <img src="../img/xiaobiao1.gif">收藏鲜花网(hua.com)</a>
    </li>
    <li id="li2">
        <a href="##">
            <img src="../img/xiaobiao2.gif">关注微信</a>
        <div id="box">
            <img src="../img/wechat_qrcode_b.png" class="img1">
            <p>扫码关注
                <br> 回复"礼物" 更多惊喜！
            </p>
        </div>
    </li>
    <li id="li3">
        <a href="##">
            <img src="../img/xiaobiao3.gif">花礼网app</a>
        <div id="box1">
            <img src="../img/wechat_qrcode_b.png" class="img2">
            <p>新人专享100元APP礼包</p>
        </div>
    </li>
</ul>
<ul id="ul_right">
    <li>
        <a href="dengru.html">你好,清先登入</a>
    </li>
    <li>
        <a href="zhuce.html">注册</a>
    </li>
    <li>
        <a href="##">订单查询</a>
    </li>
    <li>
        <a href="##">我的花礼</a>
    </li>
    <li id="yiruerji">
        <a href="##">客服服务</a>
        <div id="erjidaohan">
            <a href="##">在线服务</a>
            <a href="##">帮助中心</a>
            <a href="##">售后服务</a>
            <a href="##">配送范围</a>
            <a href="##">留言反馈</a>
        </div>
    </li>
    <li id="gouwu">
        <a href="##">
            <img src="../img/xiaobiao4.gif">购物车（0）</a>
        <div id="gouwuche">
            你的购物车中没有商品，请先去选购吧
        </div>
    </li>
    <li>中国鲜花礼品网:中国鲜花网领先品牌</li>
</ul>
</nav>`

$.extend(Nav.prototype,{
    init:function(){
    this.createDom();
    },
    createDom:function(){
        this.a = $("<div></div>").append(Nav.Template);
        this.container.append(this.a);
    }
})