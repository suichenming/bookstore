function Page(){
    this.ele =$("#nav_er");
   
    this.footer = $("#footer")
    this.init();
}
$.extend(Page.prototype,{
    init:function(){
        new Nav(this.ele);
        new Nav1(this.ele)
        new Footer(this.footer)
    }
})
 new Page();
 