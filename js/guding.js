window.onload = function () {
	    var pos =  $('#div1').offset();// offset() 获得div1当前的位置，左上角坐标(x,y)
	    $(window).scroll(function () { //滚动条滚动事件
	        if ($(this).scrollTop() > pos.top ) {
	            // $('#div1').css('width', '100px').css('top', $(this).scrollTop() - pos.top);
	            $('#div1').css('top', $(this).scrollTop() - pos.top + 70);
				// $('#div1').css('top',"80px").css('right',"00px").css('position', 'abstract');
	        } 
	        else if ($(this).scrollTop() <=  pos.top ) {
	            // $('#div1').css('width', '100x').css('top',0).css('position', 'relative');
	            $('#div1').css('top',0).css('position', 'relative');
				
	        }
	    })
	};