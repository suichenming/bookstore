$.getJSON("../js/json/liebiao.json",function(data){
   console.log(data)
    var str = ""
    var ul = $(".lb_so")
    for(var i=0;i<data.length;i++){
        console.log(i)
        str+=`  <li data-id=${data[i].id}>
        <img src=${data[i].img} class="lb_ab">
        <div class="lb_jiesao">
            <p>${data[i].p}</p>
            <i>${data[i].i}</i>
            <br>
            <span>${data[i].span}</span>
            <br>
            <em>¥${data[i].price}</em>
        </div>
    </li>`
    }
   ul.html(str)
})