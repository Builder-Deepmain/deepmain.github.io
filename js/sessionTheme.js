$(document).ready(function(){
	var data = sessionStorage.getItem('Theme_id');
	console.log("这是我找到的session_id,它是" + data);
	
	if (data == 1) {
		console.log('当前为浅色主题，正在切换为深色主题');
		// 隐藏 深色主题链接 ，显示浅色主题链接
		$("#searchIcon1").css("display","none");
		$('#searchIcon2').css("display","block");
		// 先移除
		$("body").removeClass("one_Lc");
		$(".news_left").removeClass("two_Lc");
		$(".news_right").removeClass("two_Lc");
		$(".news_right_two").removeClass("two_Lc");
		$("#headNav").removeClass("three_Lc");
		$(".about-cover").removeClass("three_Lc");
		$("footer").removeClass("footer_Lc");
		$("h2,h4,p,b,em").removeClass("end_Lc");
		$("hr").removeClass("hr_border_Lc");
		// recommer.html中hr的颜色
		$("li").removeClass("li_font_Lc");
		$("span").removeClass("span_font_Lc");
		
		// 再添加
		$("body").addClass("one");
		$(".news_left").addClass("two");
		$(".news_right").addClass("two");
		$(".news_right_two").addClass("two");
		$("#headNav").addClass("three");
		$(".about-cover").addClass("three");
		$("footer").addClass("footer");
		$("h2,h4,p,b,em").addClass("end");
		$("hr").addClass("hr_border");
		$("#input_img").attr("src","./imgs/tubiao/search-Dark3.png");
		// recommer.html中hr的颜色
		$("li").addClass("li_font");
		$("span").addClass("span_font");
	} 
});