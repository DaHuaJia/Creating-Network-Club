window.onload = function(){
	var imgList = document.querySelectorAll(".imgList > img");
	var order = document.querySelector(".order");
	var desc =  document.querySelector(".desc");
	var pre = document.querySelector(".pre");
	var next = document.querySelector(".next");
	var len = imgList.length;

	// 初始化
	var n = 0;
	imgList[0].style.display = "block";
	order.innerHTML = (n+1) + "/" + len;
	desc.innerHTML =  imgList[n].alt;

	// 点击切换
	pre.onclick = switchImg;
	next.onclick = switchImg;

	// 图片切换
	function switchImg(){
		imgList[n].style.display = "none";
		// 判断点击是左边还是右边按钮
		this == pre ? n--:n++;
		n = (n + len)%len;
		imgList[n].style.display = "block";
		desc.innerHTML =  imgList[n].alt;
		order.innerHTML = (n+1) + "/" + (len);
	}


}