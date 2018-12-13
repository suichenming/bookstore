function Footer(container){
this.container=container;
this.init()
}
Footer.Temlate=`<div class="main">
<div class="footer_img">
        <a href="##"><img src="../img/footer1.jpg"></a>
        <a href="##"><img src="../img/footer2.jpg"></a>
        <a href="##"><img src="../img/footer3.jpg"></a>
        <a href="##"><img src="../img/footer4.jpg"></a>
        <a href="##"><img src="../img/footer5.jpg"></a>
        <a href="##"><img src="../img/footer6.jpg"></a>
        <a href="##"><img src="../img/footer7.jpg"></a>
        <a href="##"><img src="../img/footer8.jpg"></a>
        <a href="##"><img src="../img/footer9.jpg"></a>
</div>
</div>
<div class="main">
    <div class="footer_dl">
        <dl>
            <dt><a href="##">中国花卉协会会员</a>
                <a href="##">中国电子商务协会会员</a>
                ICP经营许可证：
                <a href="##">粤B2-20050744</a>
                <a href="##">粤ICP备09171662号</a>
                粤公网安备44030502000373号 Copyright © 2005-2018
            </dt>

            <dd>花礼网 （中国鲜花礼品网）
            <a href="##">www.hua.com</a>
            <span> 深圳市百易信息技术有限公司</span>
            中国鲜花网领先品牌，鲜花速递专家！
            </dd>
        </dl>
    </div>
</div>
<div class="main">
    <div class="over">
        <b>友链</b>
        <a href="##">中华取名网</a>
        <a href="##">深圳房产网</a>
        <a href="##">卷皮网</a>
        <a href="##">腕表</a>
        <a href="##">宝贝婚团网</a>
        <a href="##">苗木</a>
        <a href="##">佐卡伊珠宝网</a>
        <a href="##">钻石婚戒定制</a>
        <a href="##">杂志</a>
        <a href="##">中国青少年艺术教育网</a>
        <a href="##">装修网</a>
        <a href="##">淘狗网</a>
        <a href="##">礼无忧网</a>
        <a href="##">宠物狗</a>
        <a href="##">机友网</a>
        <a href="##">礼物网</a>
        <a href="##">装修</a>
        <a href="##">新三板</a>
        <a href="##">商标注册</a>
        <a href="##">眼镜店</a>
        
    </div>
</div>`
$.extend(Footer.prototype,{
    init:function(){
        this.createtion();
    },
    createtion:function(){
        this.a = $("<div></div>").append(Footer.Temlate);
        this.container.append(this.a)
    }
})