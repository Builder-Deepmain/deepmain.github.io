if (mydate.getHours() >= 18) {
		// 隐藏深色主题id,显示浅色主题id
		$('#searchIcon1').css("display","none");
		$('#searchIcon2').css("display","block");
	}
	if (mydate.getHours() < 9 ) {
		// 隐藏深色主题id,显示浅色主题id
		$('#searchIcon1').css("display","none");
		$('#searchIcon2').css("display","block");
	}