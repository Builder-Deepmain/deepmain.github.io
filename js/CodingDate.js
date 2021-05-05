var app = new Vue({
	el:'#app',
	data: {
		"details_wz":[
			{
				"id":'0010',
				"time":'2020/12/26',
				"title":'Vue使用中遇到的一些小问题汇总',
				"question_type":'C',
				"content1":'Vue作为一款出色的前端框架，与AngleJS,React共称为前端三大框架。是我最喜欢的框架之一，在使用的过程中，遇到的问题，这里我专门开了个帖子，方便今后的学习和查询',
				"question":[
					{
						"title":'嵌套v-for怎么去使用',
						"main":"最重要的是，二级v-for，in后面的东西，是父级.子级，调用的时候直接和父级调用一样，特别注意，子级中每一项的名字 i,不能和父级 item一样",
						"img1_title":'Date',
						"img1":'../imgs/details/0010/data.png',
						"img2_title":'Vue',
						"img2":'../imgs/details/0010/vue.png',
					},
					{
						"title":'Updating',
						"main":"updating",
					},
				],
			},
			{
				"id":'0009',
				"time":'2020/12/26',
				"title":'网站性能优化的深度研究',
				"question_type":'A',
				"content1":'之前我们讲过对网站的文件资源进行优化（以网站的打开速度来作为参照），应该怎么来操作，所以我设计了这个实验，结论是压缩文件和资源的体积。根据我们之前的一篇帖子，从输入Url到页面加载显示完毕，中间这些过程，都是影响网页打开速度的因素',
				"img1_title":'提出问题',
				"main1":'对文件资源进行什么样的操作才能优化这个网站？',
				"img1":'',
				"img2_title":'作出假设',
				"main2":'压缩文件资源应该能够优化这个网站',
				"img2":'',
				"img3_title":'设计实验验证',
				"main3":'控制变量：同一个浏览器，同一个网络环境，同一个PC；对照组：在原来网站的基础上，对图片，CSS文件进行压缩过的网站，',
				"img3":'',
				"img4_title":'得出结论',
				"main4":'压缩网站的文件资源确实能够优化网站',	
				"img4":'',
			},
			{
				"id":'0008',
				"time":'2020/12/26',
				"title":'浮动对其他盒子的影响及解决方法',
				"question_type":'C',
				"content1":'尽管如今有各式各样的前端框架，UI，但浮动在页面布局中仍然发挥着重要的作用。在使用浮动的同时，会使被作用到的盒子脱离原来的文档流，不仅能使作用到的盒子位置改变，也能影响到其他盒子，这个时候我们就要清除浮动	',
				"question":[
					{
						"title":'高度塌陷：当所有的子元素浮动的时候，且父元素没有设置高度，这时候父元素就会产生高度塌陷。',
						"main":"",
					},
					{
						"title":'下方的元素会移动到浮动元素的下方被作用到的盒子脱离原来的文档流，下方没有浮动的元素会继续按照文档流的布局方式，占据空出的位置',
						"main":"",
					},
					{
						"title":'',
						"main":"清除浮动方式1:给父元素单独定义高度",
					},
					{
						"title":'',
						"main":"清除浮动方式2:父级定义overflow：hidden；zoom：1（针对ie6的兼容）",
					},
					{
						"title":'',
						"main":"清除浮动方式3:在浮动元素后面加一个空标签，clear：both；height：0；overflow：hidden",
					},
					{
						"title":'',
						"main":"清除浮动方式4:父级定义overflow：auto",
					},
					{
						"title":'',
						"main":"清除浮动方式5:给塌陷的元素添加伪对象	.father：after{    Content：“随便写”；  Clear：both； display：block； Height：0；Overflow：hidden；Visibility：hidden；}",	
					},
				],
			},
			{
				"id":'0007',
				"time":'2020/12/26',
				"title":'从输入URL到页面加载显示完成，中间都发生了什么？',
				"question_type":'E',
				"content1":'在使用浏览器浏览网页中，我们会发现浏览器的最上方有一个长长的网址，即Url，我们输入对应的Url，就能够到达这个Url所对应的页面，那从我们输入这个Url，到看到这个页面完全加载完成，中间都发生了什么？',
				"question":[
					{
						"title":'浏览器发送Url请求',
						"main":"当发送一个 URL 请求时，不管这个 URL 是 Web 页面的 URL 还是 Web 页面上每个资源的 URL，浏览器都会开启一个线程来处理这个请求，同时在远程 DNS 服务器上启动一个 DNS 查询。这能使浏览器获得请求对应的 IP 地址。",					},
					{
						"title":'浏览器与服务器三次握手，建立TCP/IP连接',
						"main":" 浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个 TCP/IP 连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，然后服务器响应并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。",
					},
					{
						"title":'浏览器再向服务器发送GET请求',
						"main":"一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用 HTTP 响应返回该资源",
					},
					{
						"title":'服务器回应',
						"main":"此时，Web 服务器提供资源服务，客户端开始下载资源。",
					},
					{
						"title":'',
						"main":"",
					},
				],
			},
			{
				"id":'0006',
				"time":'2020/12/26',
				"title":'如何对网站的文件和资源进行优化？',
				"question_type":'A',
				"content1":'对网站的文件资源进行优化（以网站的打开速度来作为参照），应该怎么来操作，所以我设计了这个实验',
				"img1_title":'提出问题',
				"main1":'对文件资源进行什么样的操作才能优化这个网站？',
				"img1":'',
				"img2_title":'作出假设',
				"main2":'压缩文件资源应该能够优化这个网站',
				"img2":'',
				"img3_title":'设计实验验证',
				"main3":'控制变量：同一个浏览器，同一个网络环境，同一个PC；对照组：在原来网站的基础上，对图片，CSS文件进行压缩过的网站，',
				"img3":'',
				"img4_title":'得出结论',
				"main4":'压缩网站的文件资源确实能够优化网站',	
				"img4":'',
			},
			{
				"id":'0005',
				"time":'2020/12/26',
				"title":'企业中项目流程概括',
				"question_type":'E',
				"content1":'面试造火箭，工作拧螺丝！话虽这么说，但是了解知晓一个项目的全程，以及自己在这个项目中的位置是非常重要的一件事情，今天我以Web前端项目开发为准，进行一个全程的介绍',
				"question":[
					{
						"title":'项目需求分析',
						"main":"这个环节是由项目经理完成，项目经理首先和客户进行交流，了解客户的需求，然后分析项目的可行性，如果项目可以被实现，项目经理写出项目需求文档交给设计师完成后续的开发。",					},
					{
						"title":'页面设计/项目选型',
						"main":"这个环节主要是UI设计师参与，UI设计师根据产品需求分析文档，对产品的整体美术风格、交互设计、界面结构、操作流程等做出设计。负责项目中各种交互界面、图标、LOGO、按钮等相关元素的设计与制作。并且确定使用技术",
					},
					{
						"title":'编码',
						"main":"这个部分由程序员来实现。（程序员分为WEB前端开发工程师和后台开发工程师。前端开发人员主要做我们可以在网页上看的见的页面，后台就做一些我们看不见的管理系统以及功能的实现。）程序员根据UI设计师的设计，用编码来完成整个项目的各个功能。",
					},
					{
						"title":'测试',
						"main":"这部分由程序测试员来完成。程序测试员主要就是测试寻找程序还存在的bug，一般来说刚编码完成的程序都是存在问题的，就需要测试人员反复不断的测试并将存在问题的测试结果交给编码人员进行bug的修复。等到几乎所有bug修复完成，这个项目差不多就可以上线了。",
					},
					{
						"title":'维护',
						"main":"程序的维护是整个项目的最后一个阶段，但也是耗时最多，成本最高最高的的一个阶段。程序的维护包括程序上线后后续bug的修复和程序版本的更新。",
					},
				],
			},
			{
				"id":'0004',
				"time":'2020/12/26',
				"title":'git 在使用中遇到的问题记录',
				"question_type":'C',
				"content1":'在开发中，版本管理工具（这里以Git为准）发挥着重要的作用，从最初项目构建，到最终项目上线，根据时间线，你能得到你的所有提交版本，方便你对项目的全程把握，当项目出现BUG时，能够快速回滚。但是在使用的过程中，会经常遇到很多的问题，这里我专门开了个帖子，方便今后的学习和查询',
				// "question":'git在向gitee远程仓库push项目时，push失败',
				"question":[
					{
						"title":'git在向gitee远程仓库push项目时push失败',
						"main":"先将远程仓库pull到本地，再重新push即可",
					},
					{
						"title":'Helloworld',
						"main":"gitee",
					},
				],
			},
			{
				"id":'0003',
				"time":'2020/12/26',
				"title":'动画库wowjs的推荐使用',
				"question_type":'D',
				"content1":'如果你看到了这篇帖子，请你一定要去访问我的blog网站（或者是直接在我的blog中看到的），我在好几个页面中使用了wow.js，animate.css动画，使我的站点更加的awesome，接下来我来告诉你如何像我一样拥有如此炫酷的网站',
				"img1_title":"在我们的页面中引入animate.css和wow.js文件", 
				"img1":'../imgs/details/0003/code.png',
				"img2_title":'注意在要实现效果的元素中添加类名 wow bounceInUp，根据类名的不同显示不同的效果，类似Bootstrap',
				"img2":'',
				"img3_title":'Up : 由下到上效果, Down : 由上到下效果,Right : 由右到坐效果,Left : 由左到右效果,',
				"img3":'',
				"link1":'https://gitee.com/Deepmain/realize/blob/master/wow%E5%8A%A8%E7%94%BB%E6%BC%94%E7%A4%BA.html',
				"link2":'https://www.delac.io/wow/docs.html'
			},
			{
				"id":'0002',
				"time":'2020/12/26',
				"title":'页面右侧固定导航栏实现',
				"question_type":'B',
				"content1":'在网站的布局中，有时候由于内容比较多，为了能够提高站点的可读性，我们一般会设置一个固定导航，它常常位于页面的右侧或者左侧，在那里固定显示，不随页面的上下滑动而移动，当页面滑动最上面的时候，它还能自己滑动回到原处，那如何才能实现呢？',
				"img1_title":'HTML',
				"img1":'../imgs/details/0002/html.png',
				"img2_title":'CSS',
				"img2":'',
				"img3_title":'JS',
				"img3":'../imgs/details/0002/js.png',
				"link":'https://gitee.com/Deepmain/realize/blob/master/%E9%A1%B5%E9%9D%A2%E5%8F%B3%E4%BE%A7%E5%9B%BA%E5%AE%9A%E5%AF%BC%E8%88%AA.html'
			},
			{
				"id":'0001',
				"time":'2020/12/26',
				"title":'锚点链接的滑动效果实现',
				"question_type":'B',
				"content1":'在网站的文段排版中，有时候由于篇幅比较长，为了能够提高文章的可读性，我们一般会设置一个目录导航，那如何才能实现呢？传统的办法是：给一个锚点链接！这种方式呢！实现了想要的效果，但是没有特别高的用户体验，如果能够从文章的一个地方滑动另外一个地方，能够表现出这个过程，就会有更好的用户体验。今天我给大家分享一下这个锚点导航滑动效果。',
				"img1_title":'HTML',
				"img1":'../imgs/details/200429/html.png',
				"img2_title":'CSS',
				"img2":'../imgs/details/200429/css.png',
				"img3_title":'JS',
				"img3":'../imgs/details/200429/js.png',
				"link":'https://gitee.com/Deepmain/realize/blob/master/%E9%94%9A%E7%82%B9%E6%B5%8B%E8%AF%95.html'
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
			
			// 生产用
			var b = a.substr(62,4);
			
			// 测试用，由于本地ip从59位开始才能获取到后4位id
			// var b = a.substr(59,4);
			
			console.log(b);
			this.index_id = b;
			console.log(this.index_id);
			// console.log(this.details_wz[0])
		}
	}
})