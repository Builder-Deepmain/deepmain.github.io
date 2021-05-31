var app = new Vue({
	el:'#app',
	data: {
		"details_wz":[
			{
				"id":'0026',
				"time":'2021/05/31',
				"title":'关于浮动造成的高度塌陷再研究',
				"question_type":'E',
				"content1":'一直没有对浮动及清除浮动做一个细致的研究，今天特意开贴再做一次研讨（之前大致说过一次）。所谓清除浮动就是因为在使用浮动的过程中出现了问题！那么，在使用浮动的过程中会出现什么问题呢？',
				"duanluo":[
					{
						"title":'高度塌陷（使用浮动过程中最容易出现的问题,注意观察父级border）',
						"img":'../imgs/details/0026/1.png',
						"main":"如上图所示，有1，2，3个浮动的盒子，它们由一个父盒子包裹，这个父盒子我并没有设置高度",					
						"main2":"原本父盒子高度应该是自适应的，但是子元素浮动后，父元素高度为0，这种现象称为高度塌陷",
					},
					{
						"title":'如何解决高度塌陷呢？',
						"img":'../imgs/details/0026/2.png',
						"main":"以上的三种方法都不能很好的解决",
					},
					{
						"title":'最常用的解决办法',
						"img":'../imgs/details/0026/3.png',
						"main":"方案4是方案3的升级",
					},
					{
						"title":'实现效果（注意观察父级border）',
						"img":'../imgs/details/0026/4.png',
						"main":"数据来自：https://blog.csdn.net/tiankai100/article/details/83054061 源码下载：https://gitee.com/Deepmain/TianLanCoding/blob/master/Test/%E6%B5%AE%E5%8A%A8%E9%AB%98%E5%BA%A6%E5%A1%8C%E9%99%B7.html",
					},
				],
			},
            {
				"id":'0025',
				"time":'2021/05/29',
				"title":'微软CEO：一直在测试下一代Windows系统',
				"question_type":'E',
				"content1":'5月26日早间消息，在本周的Build 2021大会上，微软没有花大多时间谈论Windows发展计划，为什么呢？因为微软准备在另一个单独场合介绍操作系统的发展。这不仅让我们疑惑，早前2015年5月8日，微软高管在ignite会议重申Windows 10为Windows的最后一个版本，将在此基础上，不断的优化完善。如今看来Windows将有新的动向！',
				"duanluo":[
					{
						"title":' ',
						"img":'../imgs/details/0025/1.png',
						"main":"在Build主题演讲中，微软CEO萨提亚·纳德拉（Satya Nadella）告诉听众，说他最近几个月一直在测试下一代Windows系统。",					
						"main2":"纳德拉称：很快，我们就会分享Windows更新，它是过去10年最重要的一次更新，新系统会为开发者、创作者带来更大的经济机会。在过去几个月我一直在测试系统，对于下一代Windows我很是期待。我们的承诺是这样的：微软将为今天的每一位Windows开发者创造机会，欢迎每一位寻找最有创造力、最新、最开放平台的创作者，希望他们开发、分发应用并获得收入。很快我们就会分享更多细节。",
					},
					{
						"title":'Windows的下一代操作系统叫什么，国外的网友是这样投票的',
						"img":'../imgs/details/0025/2.png',
						"main":" 在 WinCentral 的投票中，有近 2000 人参与投票，备选项有“就叫 Windows 就好”、“Windows 11”、“Windows X”、“Windows 10X”、“Windows 21”、“Windows 10.1”等。结果，最高票被“就叫 Windows 就好”拿下，得票率 65.5%。当然，这只是一次民间投票，微软对 Windows 10 系统今后如何规划，现在看来还是个谜。",
					},
					{
						"title":' ',
						"img":' ',
						"main":"我个人觉得，对于Windows，微软没必要搞那么多的版本，一个Windows 10就可以了，什么新的功能，直接在其基础上升级就可以了。类似的iOS、Android、MacOS等等，大版本的话相应的更新下版本号就行了！说到版本号，微软真的也要改改，什么1809，2021烂七八糟的，学下MacOS不行吗？还有就是UI上面，能不能做的精美点，微软的深色主题真的很难用！",
					},
					{
						"title":' ',
						"img":'',
						"main":"备注：数据来自：https://www.windowscentral.com/it-time-microsoft-move-windows-10；https://www.163.com/dy/article/GATIG6TR0539AP40.html；https://linux.cn/article-13400-1.html",
					},
				],
			},
            {
				"id":'0024',
				"time":'2021/05/29',
				"title":'人们真正从 Stack Overflow 复制和粘贴的频率是多少？',
				"question_type":'E',
				"content1":'Stack Overflow 的灵感来自于其创始人对那些把编码问题的答案放在付费墙后面的网站的失望。因此，也一直有一种调侃说程序员从 Stack Overflow 网站上复制代码。',
				"duanluo":[
					{
						"title":' ',
						"img":'../imgs/details/0024/1.png',
						"main":"现在，Stack Overflow 花了两周时间对在他们网站上按下 Ctrl-C 的行为进行统计。其中有些结果让人意外：    ",					
						"main2":"每四个访问 Stack Overflow 问题的用户中，就有一个在访问该页面的五分钟内复制了一些东西。两周内，在 7 百万个帖子和评论中，总共做了 4 千万次复制。人们从答案中复制的频率是问题的 10 倍，是评论的 35 倍。人们从代码块中复制的频率是周围文本的 10 倍以上。令人惊讶的是，在没有被接受的答案的问题上复制次                                 数比在被接受的问题上复制的次数多。",
					},
					{
						"title":' ',
						"img":' ',
						"main":" 所以，如果你曾经因为从 Stack Overflow 上复制代码而不是从头开始写代码而感到难过，请原谅你自己吧。",
					},
					{
						"title":' ',
						"img":'',
						"main":"备注：数据来自：https://linux.cn/article-13322-1.html",
					},
				],
			},
			{
				"id":'0023',
				"time":'2021/05/22',
				"title":'微软正式宣布IE明年停止服务',
				"question_type":'E',
				"content1":'旧的不去新的不来，微软终于在自家的官方技术论坛中官宣，2022年6月15日后的个人版Win10系统中将不再保留Internet Explore浏览器，即IE浏览器。这就意味着从1994年诞生的元老浏览器在坚持了27年后，也迎来了生命终结的那一天。',
				"duanluo":[
					{
						"title":' ',
						"img":'../imgs/details/0023/1.png',
						"main":"随着Windows 10的发布，微软已经全面转投Edge浏览器，目前IE仍与Edge共存于Windows 10中，后者是Windows 10默认浏览器，IE则成了一款普通的应用被藏在了系统深处。",					
						"main2":"微软在官网提示用户尽快将浏览器升级到最新版本，因为只有最新版的浏览器才能获得微软的支持，微软公司将仅为以下Windows操作系统和IE浏览器的组合提供支持：",
					},
					{
						"title":' ',
						"img":' ',
						"main":" 举个简单的例子，用户如果正在Windows 7 SP1操作系统上使用IE 8、IE 9或者IE 10浏览器，那么就应该升级到IE 11，以继续获得安全更新和技术支持。从上图中我们还看到，IE8则不再被支持，而IE8是Windows XP系统中最高版本的浏览器。",
					},
					{
						"title":' ',
						"img":"../imgs/details/0023/2.png",
						"main2":'作为Windows系统初始自带的网页浏览器，可谓是陪伴微软走过了风风雨雨。1994年微软为了对抗它网景公司的Netscape Navigator，而在系统里全新开发了网页浏览器。甚至连取名Internet Explore（中文译为网络探索者）都是在针对Netscape Navigator（中文译为领航者）。',
						"main3":'而微软利用系统的优势进行捆绑销售，很快就击败了当时在浏览器市场领域拥有近90%的对手。而利用系统先天优势取得胜利的IE由于在浏览器市场上没有对手，这就导致了微软其实在市场份额铺开后就不再重视IE的功能体验，也没有针对性对其进行优化。',
					},
					{
						"title":' ',
						"img":'../imgs/details/0023/3.png',
						"main":"直到互联网巨头谷歌在2008年推出更好用更强大的Chrome后，功能体验落后的IE自然被大量用户所抛弃。而微软自己也没有心思去再重新优化IE，而是直接在2015年推出了全新的Microsoft Edge来取代IE的位置。 ",
					},
					{
						"title":' ',
						"img":'../imgs/details/0023/4.png',
						"main":"甚至微软直接给IE打上了兼容解决方案的标签。在国内，科技报君目前对IE留下的影响甚至只有在点到垃圾小广告时弹出的弹窗了。",
					},
					{
						"title":' ',
						"img":'../imgs/details/0023/5.png',
						"main":"可以说在内忧外患的夹击之下，就像Flash被淘汰一样，IE早已开始淡出了网民的视线。而国内用户也早就投身于夸克、QQ、火狐等更好用更方便的国产浏览器。但其实还有部分网民也担心国内部分依赖IE的国企、银行会不会因为此次终停止支持而瘫痪，就像之前Flash停止支持而闹出的小笑话一样。",
						"main2":'其实倒也不必担心，因为微软宣布了本次IE服务是停止在win10的部分版本，国企和银行等大多数企业其实还在用win7或者XP等更早更稳定的系统，并不会对此产生影响。',
						"main3":'',
					},
					{
						"title":'对于我们这些开发者来说，那应该是大快人心，终于不用再关心IE系的杂乱的、令人发指的兼容性问题了！当问及最讨厌的浏览器时，你想好该如何回答了吗（/笑哭）',
						"img":'../imgs/details/0023/6.png',
						"main":"备注：数据来自：https://baijiahao.baidu.com/s?id=1700259098047965840&wfr=spider&for=pc",
					},
				],
			},
			{
				"id":'0022',
				"time":'2021/04/26',
				"title":'页面深色主题与浅色主题切换时的过渡效果实现',
				"question_type":'B',
				"content1":'作为Windows阵营的常客，期间也用过MacOS，个人觉得MacOS与Win最大的区别莫过于UI，MacOS看起来就是一件艺术品，每处都是细节，就比如MacOS中深色主题与浅色主题的切换效果，今天给大家分享一下如何在网页中实现这个效果！',
				"img1_title":'实现效果展示',
				"img1":'../imgs/details/0022/r.png',
				"img2_title":'CSS',
				"img2":'../imgs/details/0022/css.png',
				"img3_title":'JS',
				"img3":'../imgs/details/0022/js.png',
				"link":'../index.html'
			},
			{
				"id":'0021',
				"time":'2021/03/15',
				"title":'时钟效果实现',
				"question_type":'B',
				"content1":'Web前端中如何获取当前时刻的时间呢？这里利用jQuery来做一个示范',
				"img1_title":'',
				"img1":'',
				"img2_title":'',
				"img2":'',
				"img3_title":'JS',
				"img3":'../imgs/details/0021/js.png',
				"link":'https://gitee.com/Deepmain/TianLanCoding/blob/master/Test/%E6%97%B6%E9%92%9F%E6%95%88%E6%9E%9C%E5%AE%9E%E7%8E%B0.html'
			},
			{
				"id":'0020',
				"time":'2021/02/28',
				"title":'Chrome开发者工具的使用技巧',
				"question_type":'D',
				"content1":'Chrome的开发者工具是个很强大的东西，相信程序员们都不会陌生，不过有些小功能可能并不为大众所知，所以，写下这篇文章罗列一下可能你所不知道的功能，有的功能可能会比较实用，有的则不一定，也欢迎大家补充交流。',
				"img1_title":"代码格式化", 
				"img1":'',
				"img2_title":'有很多css/js的代码都会被压缩掉，你可以点击代码窗口左下角的那个 { }  标签，chrome会帮你给格式化掉。',
				"img2":'../imgs/details/0020/1.png',
				"img3_title":'直接编辑网页',
				"img3":'',
				"img4_title":'在你的 console 里 输入下面的命令：document.designMode = "on" ,于是你就可以直接修改网页上的内容了。 ',
				"img4":'../imgs/details/0020/2.png',
				"link1":'',
				"link2":'https://coolshell.cn/articles/17634.html'
			},
			{
				"id":'0019',
				"time":'2021/01/16',
				"title":'网站favicon图标的制作工具',
				"question_type":'D',
				"content1":'做Web前端开发的都知道，每个页面都有title，是由favicon图标和文字组成的，但是它前面的图标该怎么制作，并且让它显示出来呢？',
				"img1_title":"我们要用到两个工具：PS，比特虫", 
				"img1":'',
				"img2_title":'1.在PS中新建64px X 64px的模板，添加背景色、字符和图案等设计自己的图标，并以jpeg格式保存',
				"img2":'../imgs/details/0019/1.png',
				"img3_title":'2.打开https://www.bitbug.net/ 比特虫网站，导入设计好的jpeg格式的图片，目标尺寸可以随意选择，一般选择48 x 48，最后点击生成ico图标即可',
				"img3":'../imgs/details/0019/2.png',
				"img4_title":'提示：在需要引入图标的页面代码<head></head>中加入<link rel="shortcut icon" href=" /favicon.ico" /> 注意图标的存放目录，写法和img的src一样',
				"img4":'',
				"link1":'',
				"link2":'https://www.bitbug.net/'
			},
			{
				"id":'0018',
				"time":'2020/12/26',
				"title":'软件版本号规范',
				"question_type":'D',
				"content1":'为了在软件产品生命周期中更好的沟通和标记，我们应该对APP、软件的版本号命名的规范和原则有一定的了解。 ',
				"img1_title":"一、软件版本号由四部分组成：", 
				"img1":'../imgs/details/0018/1.png',
				"img2_title":'备注：',
				"img2":'../imgs/details/0018/3.png',
				"img3_title":'二、规则',
				"img3":'../imgs/details/0018/2.png',
				"img4_title":'注意：版本一经发布，不得修改其内容，任何修改必须在新版本发布',
				"img4":'',
				"link1":'',
				"link2":'https://blog.csdn.net/gyb510/article/details/94030353'
			},
			{
				"id":'0017',
				"time":'2020/11/19',
				"title":'京东 —— 前端代码规范文档',
				"question_type":'D',
				"content1":'欢迎使用品优购代码规范， 这个是我借鉴京东前端代码规范，组织的品优购内部规范。旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范，以下规范是团队基本约定的内容，必须严格遵循。',
				"img1_title":"HTML规范：基于 W3C、苹果开发者 等官方文档，并结合团队业务和开发过程中总结的规范约定，让页面HTML代码更具语义性。", 
				"img1":'',
				"img2_title":'图片规范：了解各种图片格式特性，根据特性制定图片规范，包括但不限于图片的质量约定、图片引入方式、图片合并处理等，旨在从图片层面优化页面性能。',
				"img2":'',
				"img3_title":'CSS规范：统一规范团队 CSS 代码书写风格和使用 CSS 预编译语言语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。',
				"img3":'',
				"img4_title":'命名规范：从 目录、图片、HTML/CSS文件、ClassName 的命名等层面约定规范团队的命名习惯，增强团队代码的可读性。',
				"img4":'',
				"link1":'',
				"link2":'https://blog.csdn.net/lsh159745/article/details/104737769'
			},
			{
				"id":'0016',
				"time":'2020/10/17',
				"title":'Vue中v-for循环遍历的使用',
				"question_type":'B',
				"content1":'对于数据驱动的页面，循环遍历就显得特别重要了，我们把页面中相同的部分抽离出来，以数据的形式存储，然后设置一个UI，在对应的数据显示位置，显示对于的数据',
				"img1_title":'HTML',
				"img1":'../imgs/details/0016/html.png',
				"main1":'',
				"img2_title":'CSS',
				"img2":'../imgs/details/0016/css.png',
				"main2":'',
				"img3_title":'JS',
				"img3":'../imgs/details/0016/js.png',
				"main3":'',
				"img4_title":'实现效果',
				"img4":'../imgs/details/0016/r.png',
				"main4":'',
				"link":'https://gitee.com/Deepmain/TianLanCoding/blob/master/Test/Vue%E4%B8%ADv-for%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86%E7%9A%84%E4%BD%BF%E7%94%A8.html'
			},
			{
				"id":'0015',
				"time":'2020/09/26',
				"title":'顶部导航栏的实现',
				"question_type":'B',
				"content1":'对于Web前端开发，最常规的一个组件效果，导航栏，我们每个人应该都不会陌生，但是如何实现这个功能效果呢？',
				"img1_title":'HTML',
				"img1":'../imgs/details/0015/html.png',
				"main1":'',
				"img2_title":'CSS',
				"img2":'../imgs/details/0015/css.png',
				"main2":'',
				"img3_title":'实现效果',
				"img3":'../imgs/details/0015/r.png',
				"main3":'',
				"link":'https://gitee.com/Deepmain/TianLanCoding/blob/master/Test/%E9%A1%B6%E9%83%A8%E5%AF%BC%E8%88%AA%E6%A0%8F.html'
			},
			{
				"id":'0014',
				"time":'2020/08/25',
				"title":'移动端打开网站跳转到对于的页面',
				"question_type":'B',
				"content1":'对于跨端开发中，为了用户体验，我们常采用响应式布局和移动端页面独立开发两种方式，对于后者，我们在移动端访问站点，根据设备的不同，如何自动跳转到移动端页面呢？',
				"img1_title":'',
				"img1":'',
				"main1":'',
				"img2_title":'',
				"img2":'',
				"main2":'',
				"img3_title":'JS',
				"img3":'../imgs/details/0014/js.png',
				"main3":'将这个代码块添加到<head></head>中，当页面渲染时，首先读到这块代码。当然你也要准备好你移动端的页面，流式布局，百分比布局，都可以的！',
				"link":'https://gitee.com/Deepmain/TianLanCoding/blob/master/index.html'
			},
			{
				"id":'0013',
				"time":'2020/07/21',
				"title":'代码贴图Carbon工具的推荐使用',
				"question_type":'D',
				"content1":'如果你和我一样喜欢没事写个博客，发个帖子，贴代码一定是你最想做的事情，可是不美观，界面不好看，那么Carbon这个工具你一定要尝试下，我的整个博客贴代码都是靠它完成的！',
				"img1_title":"浏览器访问：打开https://carbon.now.sh/，这是一个单页面应用，不需要下载任何东西", 
				"img1":'../imgs/details/0013/1.png',
				"img2_title":'将你要贴的代码直接复制粘贴到它的编辑器中即可。你可以设置你的代码样式，背景颜色等等，最后导出图片即可，自己可以慢慢摸索',
				"img2":'',
				"img3_title":'代码格式化快捷键，Tab：缩进，Tab+Shift:反向缩进',
				"img3":'',
				"link1":'',
				"link2":'https://carbon.now.sh/'
			},
			{
				"id":'0012',
				"time":'2020/06/26',
				"title":'轮播图效果实现',
				"question_type":'B',
				"content1":'对于Web前端开发，最常规的一个组件效果，轮播图，我们每个人应该都不会陌生，但是如何实现这个功能效果呢？',
				"img1_title":'HTML',
				"img1":'../imgs/details/0012/html.png',
				"img2_title":'CSS',
				"img2":'../imgs/details/0012/css.png',
				"img3_title":'JS',
				"img3":'../imgs/details/0012/js.png',
				"link":'https://gitee.com/Deepmain/TianLanCoding/blob/master/Test/%E8%BD%AE%E6%92%AD%E5%9B%BE.html'
			},
			{
				"id":'0011',
				"time":'2020/05/16',
				"title":'近期编程语言排行榜：Python年度编程语言',
				"question_type":'E',
				"content1":'恭喜Python，再一次获得TIOBE年度编程语言，这已经是Python第四年取得TIOBE年度编程语言称号。这个称号是授予给一年里最受欢迎的编程语言，Python在2020年实现了2.01%的增长，C++紧随其后，本年度增长1.99%，紧接着是C语言（增长1.66），Groovy（+1.23%）和R（+1.10%）。',
				"duanluo":[
					{
						"title":' ',
						"img":'../imgs/details/0011/1.png',
						"main":"在很早之前就和大家说过，Python现在随处可见，一开始，它作为Perl的竞争对手出现，主要承担系统管理员编写脚本的工作，如今，它是数据科学和机器学习领域最受欢迎的语言，但它也被用于Web开发和后端编程，并逐渐发现到移动应用开发领域，甚至已经开始步入嵌入式系统领域。开发者选择这门编程语言的主要原因是Python很容易上手学习，而且效率很高，这两种特性对于想要在各种领域都有所作为的程序员来说是很有吸引力的。",					
						"main2":"Python在几个月前已经打败过Java登上第二名的宝座。相信在不久的将来就会再次和Java互换位置，那么，Python会打败C语言么？其实，C语言还有一张王牌——它的性能，因此，C 语言在未来的一段时间内仍然会站稳脚步，如果Python想要成为TOIBE编程语言排行第一的话，那肯定是还需要几年的时间。",
					},
					{
						"title":'排名前20名的编程语言如下：',
						"img":'../imgs/details/0011/2.png',
						"main":"",
					},
					{
						"title":'2020年TIOBE指数其他亮点',
						"main":"在2020年，C语言再次打败Java，成为排行第一的编程语言，Java在仅仅一年的时间里就下滑了近5%。排名前20的其他有趣的变化是：",
						"main2":'统计语言R从第18名上升到第9名;主要用于CI/CD工具Jenkins编写脚本的Groovy，从第23名上升到第10名',
						"main3":'2021年还会有新的编程语言加入Top20行列么？答案是肯定的，排名第一的是Julia，在过去一年里，它从第47名跃升至第23名，Dart和Rust也很有潜力，但其实他们都已经进入过前20了',
					},
					{
						"title":'Top 10 编程语言 TIOBE 指数走势（2002-2020）',
						"img":'../imgs/details/0011/3.png',
						"main":" ",
					},
					{
						"title":'其他编程语言排名',
						"img":'../imgs/details/0011/4.png',
						"main":" ",
					},
					{
						"title":'历史排名（1988-2020）',
						"img":'../imgs/details/0011/5.png',
						"main":" ",
						"main2":' ',
						"main3":' ',
					},
					{
						"title":'编程语言“年度榜”（ 2003-2019） ',
						"img":'../imgs/details/0011/6.png',
						"main":"备注：数据来自：https://www.tiobe.com/tiobe-index/",
					},
				],
			},
			{
				"id":'0010',
				"time":'2020/04/11',
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
				"time":'2020/03/23',
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
				"time":'2020/02/19',
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
				"time":'2020/01/15',
				"title":'从输入URL到页面加载显示完成，中间都发生了什么？',
				"question_type":'E',
				"content1":'在使用浏览器浏览网页中，我们会发现浏览器的最上方有一个长长的网址，即Url，我们输入对应的Url，就能够到达这个Url所对应的页面，那从我们输入这个Url，到看到这个页面完全加载完成，中间都发生了什么？',
				"duanluo":[
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
				"time":'2019/12/26',
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
				"time":'2019/11/10',
				"title":'企业中项目流程概括',
				"question_type":'E',
				"content1":'面试造火箭，工作拧螺丝！话虽这么说，但是了解知晓一个项目的全程，以及自己在这个项目中的位置是非常重要的一件事情，今天我以Web前端项目开发为准，进行一个全程的介绍',
				"duanluo":[
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
				"time":'2019/10/24',
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
						"title":'git与gitee(github)多人协作',
						"img1":'../imgs/details/0004/1.png',
						"main":"创建，克隆，拉取，推送",
					},
				],
			},
			{
				"id":'0003',
				"time":'2019/09/23',
				"title":'动画库wowjs的推荐使用',
				"question_type":'D',
				"content1":'如果你看到了这篇帖子，请你一定要去访问我的blog网站（或者是直接在我的blog中看到的），我在好几个页面中使用了wow.js，animate.css动画，使我的站点更加的awesome，接下来我来告诉你如何像我一样拥有如此炫酷的网站',
				"img1_title":"代码构建：在我们的页面中引入animate.css和wow.js文件", 
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
				"time":'2019/08/17',
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
				"time":'2019/07/26',
				"title":'锚点链接的滑动效果实现',
				"question_type":'B',
				"content1":'在网站的文段排版中，有时候由于篇幅比较长，为了能够提高文章的可读性，我们一般会设置一个目录导航，那如何才能实现呢？传统的办法是：给一个锚点链接！这种方式呢！实现了想要的效果，但是没有特别高的用户体验，如果能够从文章的一个地方滑动另外一个地方，能够表现出这个过程，就会有更好的用户体验。今天我给大家分享一下这个锚点导航滑动效果。',
				"img1_title":'HTML',
				"img1":'../imgs/details/0001/html.png',
				"img2_title":'CSS',
				"img2":'../imgs/details/0001/css.png',
				"img3_title":'JS',
				"img3":'../imgs/details/0001/js.png',
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