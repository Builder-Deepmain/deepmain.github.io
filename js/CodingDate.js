var app = new Vue({
	el:'#app',
	data: {
		"details_wz":[
			{
				"id":'0009',
				"time":'2020/12/26',
				"title":'网站性能优化的深度研究',
			},
			{
				"id":'0008',
				"time":'2020/12/26',
				"title":'浮动对其他盒子的影响及解决方法',
			},
			{
				"id":'0007',
				"time":'2020/12/26',
				"title":'一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？',
			},
			{
				"id":'0006',
				"time":'2020/12/26',
				"title":'如何对网站的文件和资源进行优化？',
			},
			{
				"id":'0005',
				"time":'2020/12/26',
				"title":'企业中项目流程概括',
			},
			{
				"id":'0004',
				"time":'2020/12/26',
				"title":'git 在使用中遇到的问题记录',
			},
			{
				"id":'0003',
				"time":'2020/12/26',
				"title":'动画库wowjs的推荐使用',
			},
			{
				"id":'0002',
				"time":'2020/12/26',
				"title":'页面右侧固定导航栏实现',
				"content1":'在网站的布局中，有时候由于内容比较多，为了能够提高站点的可读性，我们一般会设置一个固定导航，它常常位于页面的右侧或者左侧，在那里固定显示，不随页面的上下滑动而移动，当页面滑动最上面的时候，它还能自己滑动回到原处，那如何才能实现呢？',
				"img1_title":'HTML',
				"img1":'../imgs/details/200428/html.png',
				"img2_title":'CSS',
				"img2":'',
				"img3_title":'JS',
				"img3":'../imgs/details/200428/js.png',
				"link":'https://gitee.com/Deepmain/realize/blob/master/%E9%A1%B5%E9%9D%A2%E5%8F%B3%E4%BE%A7%E5%9B%BA%E5%AE%9A%E5%AF%BC%E8%88%AA.html'
			},
			{
				"id":'0001',
				"time":'2020/12/26',
				"title":'锚点链接的滑动效果实现',
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
			var b = a.substr(62,4);
			console.log(b);
			this.index_id = b;
			console.log(this.index_id);
			// console.log(this.details_wz[0])
		}
	}
})