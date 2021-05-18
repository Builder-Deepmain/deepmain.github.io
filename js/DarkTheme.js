	// 获取时间
	var mydate = new Date();
	var str = "" + mydate.getFullYear() + "年";
	str += (mydate.getMonth()+1) + "月";
	str += mydate.getDate() + "日";
	str += mydate.getHours() + "点";
	str += mydate.getMinutes() + "分";
	str += mydate.getSeconds() + "秒";
	console.log(str);
	// 当时间为18：00 —— 9：00 ,主题颜色为深色
	
	if (mydate.getHours() >= 18) {
		console.log("深色主题启用");
		// 将#searchIcon1内容设置为浅色主题
		// $("#searchIcon1").text('浅色主题');
		// 将#searchIcon2内容设置为深色主题
		// $("#searchIcon2").text('深色主题');
		$("body").addClass("one");
		$(".news_left").addClass("two");
		$(".news_right").addClass("two");
		$(".news_right_two").addClass("two");
		// $("#headNav").css("background-color","#1B2838!important");
		$("#headNav").addClass("three");
		$(".about-cover").addClass("three");
		$("footer").addClass("footer");
		$("h2,h4,p,b,em").addClass("end");
		$("hr").addClass("hr_border");
		$("#input_img").attr("src","../imgs/tubiao/search-Dark3.png");
		// recommer.html中hr的颜色
		// $("li").addClass("li_border");
		$("li").addClass("li_font");
		$("span").addClass("span_font");
		
	}
	
	if (mydate.getHours() <= 9) {
		console.log("深色主题启用");
		$("body").addClass("one");
		$(".news_left").addClass("two");
		$(".news_right").addClass("two");
		$(".news_right_two").addClass("two");
		// $("#headNav").css("background-color","#1B2838!important");
		$("#headNav").addClass("three");
		$(".about-cover").addClass("three");
		$("footer").addClass("footer");
		$("h2,h4,p,b,em").addClass("end");
		$("hr").addClass("hr_border");
		$("#input_img").attr("src","../imgs/tubiao/search-Dark3.png");
		// recommer.html中hr的颜色
		// $("li").addClass("li_border");
		$("li").addClass("li_font");
		$("span").addClass("span_font");
	}


// 点击切换主题为深色
	$('#searchIcon1').click(function(){
		// 隐藏 深色主题链接 ，显示浅色主题链接
		$(this).css("display","none");
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
		$("hr").removeClass("hr_border_LC");
		$("#input_img").attr("src","./imgs/tubiao/search.png");
		// recommer.html中hr的颜色
		$("li").removeClass("li_font_Lc");
		$("span").removeClass("span_font_Lc");
		
		// 再添加
		$("body").addClass("one_c");
		$(".news_left").addClass("two_c");
		$(".news_right").addClass("two_c");
		$(".news_right_two").addClass("two_c");
		$("#headNav").addClass("three_c");
		$(".about-cover").addClass("three_c");
		$("footer").addClass("footer_c");
		$("h2,h4,p,b,em").addClass("end_c");
		$("hr").addClass("hr_border_C");
		$("#input_img").attr("src","./imgs/tubiao/search-Dark3.png");
		// recommer.html中hr的颜色
		$("li").addClass("li_font_c");
		$("span").addClass("span_font_c");
	})
// 移除深色	
	$('#searchIcon2').click(function(){
		// 隐藏 深色主题链接 ，显示浅色主题链接
		$(this).css("display","none");
		$('#searchIcon1').css("display","block");
		// 先移除
		$("body").removeClass("one_c");
		$(".news_left").removeClass("two_c");
		$(".news_right").removeClass("two_c");
		$(".news_right_two").removeClass("two_c");
		$("#headNav").removeClass("three_c");
		$(".about-cover").removeClass("three_c");
		$("footer").removeClass("footer_c");
		$("h2,h4,p,b,em").removeClass("end_c");
		$("hr").removeClass("hr_border_C");
		$("#input_img").attr("src","./imgs/tubiao/search-Dark3.png");
		// recommer.html中hr的颜色
		$("li").removeClass("li_font_c");
		$("span").removeClass("span_font_c");
		
		// 再添加
		$("body").addClass("one_Lc");
		$(".news_left").addClass("two_Lc");
		$(".news_right").addClass("two_Lc");
		$(".news_right_two").addClass("two_Lc");
		$("#headNav").addClass("three_Lc");
		$(".about-cover").addClass("three_Lc");
		$("footer").addClass("footer_Lc");
		$("h2,h4,p,b,em").addClass("end_Lc");
		$("hr").addClass("hr_border_LC");
		$("#input_img").attr("src","./imgs/tubiao/search.png");
		// recommer.html中hr的颜色
		$("li").addClass("li_font_Lc");
		$("span").addClass("span_font_Lc");
	})
	
	// 获得#searchIcon1,2，得知当前什么主题
	console.log('当前主题为：' + $('#searchIcon2').text());
	console.log('当前主题为：' + $('#searchIcon1').text());