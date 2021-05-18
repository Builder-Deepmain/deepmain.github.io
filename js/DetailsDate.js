var app = new Vue({
	el:'#app',
	data: {
		"details_wz":[
			{
				"id":'0005',
				"time":'2020/12/26',
				"title":'企业中项目流程概括',
				"type":'E',
				"head_info":'面试造火箭，工作拧螺丝！话虽这么说，但是了解知晓一个项目的全程，以及自己在这个项目中的位置是非常重要的一件事情，今天我以Web前端项目开发为准，进行一个全程的介绍。',
				"duanluo":[
					{
						"title":'项目需求分析',
						"main":'这个环节是由项目经理完成，项目经理首先和客户进行交流，了解客户的需求，然后分析项目的可行性，如果项目可以被实现，项目经理写出项目需求文档交给设计师完成后续的开发。',	
						"img1_title":'',
						"img1":'',
						"beizhu1":'',	
						"img2_title":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'页面设计/项目选型',
						"main":'这个环节主要是UI设计师参与，UI设计师根据产品需求分析文档，对产品的整体美术风格、交互设计、界面结构、操作流程等做出设计。负责项目中各种交互界面、图标、LOGO、按钮等相关元素的设计与制作。并且确定使用技术',	
						"img1_title":'',
						"img1":'',
						"beizhu1":'',	
						"img2_title":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'编码',
						"main":'这个部分由程序员来实现。（程序员分为WEB前端开发工程师和后台开发工程师。前端开发人员主要做我们可以在网页上看的见的页面，后台就做一些我们看不见的管理系统以及功能的实现。）程序员根据UI设计师的设计，用编码来完成整个项目的各个功能。',	
						"img1_title":'',
						"img1":'',
						"beizhu1":'',	
						"img2_title":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'测试',
						"main":'这部分由程序测试员来完成。程序测试员主要就是测试寻找程序还存在的bug，一般来说刚编码完成的程序都是存在问题的，就需要测试人员反复不断的测试并将存在问题的测试结果交给编码人员进行bug的修复。等到几乎所有bug修复完成，这个项目差不多就可以上线了。',	
						"img1_title":'',
						"img1":'',
						"beizhu1":'',	
						"img2_title":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'维护',
						"main":'程序的维护是整个项目的最后一个阶段，但也是耗时最多，成本最高最高的的一个阶段。程序的维护包括程序上线后后续bug的修复和程序版本的更新。',	
						"img1_title":'',
						"img1":'',
						"beizhu1":'',	
						"img2_title":'',
						"img2":'',
						"beizhu2":'',				
					},
					
				],
				"link_from":'',
				"link_off":'',
				"link_down":'',
			},
			{
				"id":'0002',
				"time":'2020/12/26',
				"title":'页面右侧固定导航栏实现',
				"type":'B',
				"head_info":'在网站的布局中，有时候由于内容比较多，为了能够提高站点的可读性，我们一般会设置一个固定导航，它常常位于页面的右侧或者左侧，在那里固定显示，不随页面的上下滑动而移动，当页面滑动最上面的时候，它还能自己滑动回到原处，那如何才能实现呢？',
				"duanluo":[
					{
						"title":'HTML',
						"main":'',	
						"img1_title1":'',
						"img1":'../imgs/details/0002/html.png',
						"beizhu1":'',	
						"img1_title2":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'JS',
						"main":'',	
						"img1_title1":'',
						"img1":'../imgs/details/0002/js.png',
						"beizhu1":'',	
						"img1_title2":'',
						"img2":'',
						"beizhu2":'',				
					},
				],
				"link_from":'',
				"link_off":'',
				"link_down":'https://gitee.com/Deepmain/realize/blob/master/%E9%A1%B5%E9%9D%A2%E5%8F%B3%E4%BE%A7%E5%9B%BA%E5%AE%9A%E5%AF%BC%E8%88%AA.html',
			},
			{
				"id":'0001',
				"time":'2020/12/26',
				"title":'锚点链接的滑动效果实现',
				"type":'B',
				"head_info":'在网站的文段排版中，有时候由于篇幅比较长，为了能够提高文章的可读性，我们一般会设置一个目录导航，那如何才能实现呢？传统的办法是：给一个锚点链接！这种方式呢！实现了想要的效果，但是没有特别高的用户体验，如果能够从文章的一个地方滑动另外一个地方，能够表现出这个过程，就会有更好的用户体验。今天我给大家分享一下这个锚点导航滑动效果。',
				"duanluo":[
					{
						"title":'HTML',
						"main":'',	
						"img1_title1":'',
						"img1":'../imgs/details/0001/html.png',
						"beizhu1":'',	
						"img1_title2":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'CSS',
						"main":'',	
						"img1_title1":'',
						"img1":'../imgs/details/0001/css.png',
						"beizhu1":'',	
						"img1_title2":'',
						"img2":'',
						"beizhu2":'',				
					},
					{
						"title":'JS',
						"main":'',	
						"img1_title1":'',
						"img1":'../imgs/details/0001/js.png',
						"beizhu1":'',	
						"img1_title2":'',
						"img2":'',
						"beizhu2":'',				
					},
				],
				"link_from":'',
				"link_off":'',
				"link_down":'https://gitee.com/Deepmain/realize/blob/master/%E9%94%9A%E7%82%B9%E6%B5%8B%E8%AF%95.html',
			},
		],
		index_id:'',
	},
	created:function() {
		this.cr();
	},
	methods: {
		cr() {
			var a = window.location.href;
			console.log(a);
			
			// 正式运行用，加入gitee.com的域名
			// var b = a.substr(62,4);
			
			// 开发测试用，由于本地ip从59位开始才能获取到后4位id
			var b = a.substr(59,4);
			
			console.log(b);
			this.index_id = b;
			console.log(this.index_id);
			// console.log(this.details_wz[0])
		}
	}
})