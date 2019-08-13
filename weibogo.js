
var myS = setInterval("getPage()","3000");//等待页面展开加载完数据
var page = 1;


function loadScript(url, func) {
var head = document.head || document.getElementByTagName('head')[0];
var script = document.createElement('script');
script.src = url;
script.onload = script.onreadystatechange = function(){
	if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete'){
		func();
		script.onload = script.onreadystatechange = null;
	}
};
head.insertBefore(script, null);
window.zhl = {
	name: function(data){console.log(data);}
	}
}

 function sleepTime(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });
}
           

function getPage(){

	var moreNum = document.querySelectorAll(".more_txt").length;
	if(moreNum>1){
		document.querySelectorAll(".more_txt")[1].parentElement.click();
		console.log("===正在展开第"+page+"页评论===");
		page++;

	}else{
		clearInterval(myS);

		console.log("===展开完毕，开始爬取===");
		var list = document.querySelectorAll(".WB_face.W_fl");
		console.log("合计条数"+list.length);
		for(i = 0;i<list.length;i++){
			
			sleepTime(2000).then(() => {
				console.log("第"+i+"条获取成功，如下：")
				name = list[i].firstChild['nextSibling']['childNodes'][0]["alt"];
				headimg = (list[i].firstChild['nextSibling']['childNodes'][0]["src"]).split("?")[0];
				console.log(name);//昵称
				console.log(headimg);//绝对头像
				murl = "https://baidu.com/a.php?name="+name+"&headimg="+headimg;
                loadScript(murl,function(){console.log('===['+i+']'+name+'插入数据库成功===')});
            })
			

		}

		console.log("===爬取完毕===");
		console.log("===程序停止===");

		return 0;


	}

}

