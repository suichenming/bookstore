	$.getJSON("../js/json/cs.json",function(data){
		var data =data[0]	
		var str=""
		var ul = $(".bd_img")
		for(var i=0;i<data.length;i++){
			str+=`<li data-id=${data[i].id}><a href="xiangqing.html">
					<img src=${data[i].imgs} class="ab">
					<span>${data[i].title}</span>
					<p class="price"><span class="price_sign">￥</span><span class="price_num">${data[i].price}</span></p>
				</a></li>`
		}
	ul.html(str);
});
	$.getJSON("../js/json/cs.json",function(data){
		var data =data[1]
		var str=""
		var ul = $("#er")
		for(var i=0;i<data.length;i++){
			str+=`<li data-id=${data[i].id}><a href="xiangqing.html">
					<img src=${data[i].imgs} class="ab">
					<span>${data[i].title}</span>
					<p class="price"><span class="price_sign">￥</span><span class="price_num">${data[i].price}</span></p>
				</a></li>`
		}
	ul.html(str);	
})
	$.getJSON("../js/json/cs.json",function(data){
		var data = data[2]
		var ul = $("#san")
		var str =""
		for(var i=0;i<data.length;i++){
			str+=`<li data-id=${data[i].id}><a href="xiangqing.html">
					<img src=${data[i].imgs} class="ab">
					<span>${data[i].title}</span>
					<p class="price"><span class="price_sign">￥</span><span class="price_num">${data[i].price}</span></p>
				</a></li>`
		}
		ul.html(str)
		
	})
	$.getJSON("../js/json/cs.json",function(data){
		var data = data[3];
		var ul = $("#dangao");
		var str = "";
		for(var i= 0;i<data.length;i++){
			str+=`<li data-id=${data[i].id}><a href="xiangqing.html">
			<img src=${data[i].imgs} class="ab">
			<span>${data[i].title}</span>
			<p class="price"><span class="price_sign">￥</span><span class="price_num">${data[i].price}</span></p>
		</a></li>`
		}
		ul.html(str)
	})
	$.getJSON("../js/json/cs.json",function(data){
		var data = data[4];
		var ul = $("#lipin")
		var str = ""
		for(var i= 0;i<data.length;i++){
			str+=`<a href="xiangqing.html"><li data-id=${data[i].id}>
			<img src=${data[i].imgs} class="ab">
			<span>${data[i].title}</span>
			<p class="price"><span class="price_sign">￥</span><span class="price_num">${data[i].price}</span></p>
		</a></li>`
		}
		ul.html(str)
	})
