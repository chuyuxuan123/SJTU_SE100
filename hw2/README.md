# Web application
In computing, a web application or web app is a client–server computer program which the client (including the user interface and client-side logic) runs **in a web browser**. Common web applications include webmail, online retail sales, and online auction.

![web app](img/Web_Application_Development.jpg)

Web sites most likely to be referred to as "web applications" are those which have similar functionality to a desktop software application, or to a mobile app. HTML5 introduced explicit language support for making applications that are loaded as web pages, but can store data locally and continue to function while offline.

Single-page applications are more application-like because they reject the more typical web paradigm of moving between distinct pages with different URLs. Single-page frameworks like Sencha Touch and AngularJS might be used to speed development of such a web app for a mobile platform.
## Interface
Through Java, JavaScript, DHTML, Flash, Silverlight and other technologies, application-specific methods such as drawing on the screen, playing audio, and access to the keyboard and mouse are all possible. Many services have worked to combine all of these into a more familiar interface that adopts the appearance of an operating system. General purpose techniques such as drag and drop are also supported by these technologies. Web developers often use client-side scripting to add functionality, especially to create an interactive experience that does not require page reloading. Recently, technologies have been developed to coordinate client-side scripting with server-side technologies such as ASP.NET, J2EE, Perl/Plack and PHP.

Ajax, a web development technique using a combination of various technologies, is an example of technology which creates a more interactive experience.
## Structure
Applications are usually broken into logical chunks called "tiers", where every tier is assigned a role. Traditional applications consist only of 1 tier, which resides on the client machine, but web applications lend themselves to an n-tiered approach by nature. Though many variations are possible, the most common structure is the three-tiered application. In its most common form, the three tiers are called presentation, application and storage, in this order. A web browser is the first tier (presentation), an engine using some dynamic Web content technology (such as ASP, CGI, ColdFusion, Dart, JSP/Java, Node.js, PHP, Python or Ruby on Rails) is the middle tier (application logic), and a database is the third tier (storage). The web browser sends requests to the middle tier, which services them by making queries and updates against the database and generates a user interface.

For more complex applications, a 3-tier solution may fall short, and it may be beneficial to use an n-tiered approach, where the greatest benefit is breaking the business logic, which resides on the application tier, into a more fine-grained model. Another benefit may be adding an integration tier that separates the data tier from the rest of tiers by providing an easy-to-use interface to access the data. For example, the client data would be accessed by calling a "list_clients()" function instead of making an SQL query directly against the client table on the database. This allows the underlying database to be replaced without making any change to the other tiers.

There are some who view a web application as a two-tier architecture. This can be a "smart" client that performs all the work and queries a "dumb" server, or a "dumb" client that relies on a "smart" server. The client would handle the presentation tier, the server would have the database (storage tier), and the business logic (application tier) would be on one of them or on both. While this increases the scalability of the applications and separates the display and the database, it still doesn't allow for true specialization of layers, so most applications will outgrow this model.
## Development
Writing web applications is often simplified by the use of web application frameworks such as Django, Ruby on Rails, and Symfony. These frameworks facilitate rapid application development by allowing a development team to focus on the parts of their application which are unique to their goals without having to resolve common development issues such as user management. Many of the frameworks in use are open-source software.

The use of web application frameworks can often reduce the number of errors in a program, both by making the code simpler, and by allowing one team to concentrate on the framework while another focuses on a specified use case. In applications which are exposed to constant hacking attempts on the Internet, security-related problems can be caused by errors in the program. Frameworks can also promote the use of best practices such as GET after POST.

In addition, there is potential for the development of applications on Internet operating systems, although currently there are not many viable platforms that fit this model.


# Native App
Native App是一种基于智能手机本地操作系统如iOS、Android、WP并使用原生程式编写运行的第三方应用程序，也叫本地app。一般使用的开发语言为JAVA、C++、Objective-C。
## 概述
自iOS和Android这两个的手机操作系统发布以来，在互联网界从此就多了一个新的名词：App（意为运行在智能的移动终端设备第三方应用程序）。

开发者们都知道在高端智能手机系统中有两种应用程序：一种是基于本地（操作系统）运行的APP；一种是基于高端机的浏览器运行的Web App。

Native App因为位于平台层上方，向下访问和兼容的能力会比较好一些，可以支持在线或离线，消息推送或本地资源访问，摄像拨号功能的调取。但是由于设备碎片化，App的开发成本要高很多，维持多个版本的更新升级比较麻烦，用户的安装门槛也比较高。但是比较乐观的是，AppStore培养了一种比较好的用户付费模式，所以在Apple的生态圈里，开发者的盈利模式是一种明朗状态，其他market也在往这条路上靠拢。
### 优势
1. 提供最佳的用户体验，最优质的用户界面，最华丽的交互
2. 针对不同平台提供不同体验
3. 可节省带宽成本
4. 可访问本地资源
5. 盈利模式明朗
6. 打开速度更快
### 劣势
1. 移植到不同平台上比较麻烦
2. 维持多个版本的成本比较高
3. 需要通过store或market的确认
4. 盈利需要与第三方分成
5. 开发的成本比较大
## 发展现状
根据百度2013年Q1发布的《移动互联网发展趋势报告》显示，在全行业的移动浪潮中，Native App开发者遇到前所未有的挑战。Native APP遇到的三大困境:1、虽然用户手机里的Native APP数量在增多，但日均启动个数却在减少；2、用户的使用时长不断向高频Native APP集中，加剧了头部效应；3、对于低频和不知名的Native App，则面临着更严峻的“分发”和“使用”长尾困境。这三大困境对开发者形成了较大的挑战。

其中，大部分低频和不知名Native App在应用商店少人问津，无法到达用户手机。数据显示，应用商店下载量最大的前1000个（数量占比不足0.1%）App，占据了总下载次数的一半以上。这说明用户在下载应用时“马太效应”明显。困境同样也体现在应用使用率上，用户下载之后极少使用，要用时却想不起或找不到它，甚至是六成的Native APP被下载安装后一周内并未被使用，其中又有约1/3在一个月内都未被使用，逐渐成为“僵尸应用”。
## Native vs. web apps
A web app is an application that the user does not download and instead accesses via a web browser over a network. Example web browsers include Google Chrome, Safari and Mozilla Firefox. Web apps provide functionality from bank account access to YouTube video viewing via, for example, Safari on an iPhone.

While native apps are written to the specific device, a majority of web applications can be written in JavaScript, CSS and the standard version of HTML for universal use across various browsers. Web apps can use a single code base because they are not designed around a specific device. Web apps are fast and simple to build, but are not as versatile and quick as native apps.

## Native vs. hybrid apps
Hybrid applications are a combination of native and web apps. The inner workings of a hybrid application are similar to a web app, but it installs like a native app. Hybrid applications have access to internal device APIs, which means they can use resources such as the camera, storage and GPS. Yelp and Instagram are examples of hybrid apps.

Hybrid applications are built with HTML and CSS. Developers create one code base, then make small changes to tailor the app to each platform. Fewer developers are dedicated to each platform with a hybrid app than with a fully native app. Hybrid apps typically run a web app through a container or WebView, a browser that can be contained inside of a mobile app.

Hybrid applications perform differently than native apps in several ways. Hybrid applications are based on web apps and contain the same navigational elements as web applications. Additionally, there is no offline mode for a hybrid application -- it only works with an internet connection. Native apps, by contrast, can operate offline.

Cost differences between native and hybrid applications are minimal. In both application types, developers must write code to launch on multiple platforms. In general, if the development time of an application is less than four to six months, a hybrid application is preferable, as you can construct them faster.

# Hybrid App
Hybrid apps embed a mobile web site inside a native app, possibly using a hybrid framework like Apache Cordova and Ionic or Appcelerator Titanium. This allows development using web technologies (and possibly directly copying code from an existing mobile web site) while also retaining certain advantages of native apps (e.g. direct access to device hardware, offline operation, app store visibility).

Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势”。
## 简介
“云”时代的来临正在改变App和运营团队之间的关系，一场不能避免的变革正在进行。鉴于移动终端的局限性，移动终端上的APP由本地化应用(Native App)，到基于WEB的应用Web App，再到混合型应用（Hybrid APP），这一连串的变化都源于技术的更新和市场的需要。

Hybrid App是指介于web-app、native-app这两者之间的app,它虽然看上去是一个Native App，但只有一个UI WebView，里面访问的是一个Web App，比如街旁网最开始的应用就是包了个客户端的壳，其实里面是HTML5的网页，后来才推出真正的原生应用。再彻底一点的，如掌上百度和淘宝客户端Android版，走的也是Hybrid App的路线，不过掌上百度里面封装的不是WebView，而是自己的浏览内核，所以体验上更像客户端，更高效。
## 兴起原因
Hybrid App的兴起是现阶段移动互联网产业的一种偶然。移动互联网的热潮刮起后，众多公司前赴后继的进入。但是很快发现移动应用的开发人员太少，所以导致疯狂的人才争夺。市场机制下移动应用开发人才的待遇扶摇直上，最终变成众多企业无法负担养一个具备跨平台开发能力的专业移动应用开发团队。而HTML5的出现让Web App露出曙光，HTML5开发移动应用的跨平台和廉价优势让众多想进入移动互联网领域的公司开始心动。可是当下基于HTML5的Web App更是雾里看花，在用户入口习惯、分发渠道和应用体验这三个核心问题没解决之前，Web App也很难得以爆发。正是在这样是机缘巧合下，基于HTML5低成本跨平台开发优势又兼具Native App特质的Hybrid App技术杀入混战，并且很快吸引了众人的目光。大幅的降低了移动应用的开发成本，可以通过现有应用商店模式发行，在用户桌面形成独立入口等等这些，让Hybrid App成为解决移动应用开发困境不错的选择，也成为现阶段Web App的代言人。Hybrid App像刺客一样，在Native App和Web App混战之时，偶然间的在移动应用开发领域占有了一席之地。
## 分类
Hybrid App按网页语言与程序语言的混合，通常分为三种类型：多View混合型，单View混合型，Web主体型。
### 多View混合型
即Native View和Web View独立展示，交替出现。2012年常见的Hybrid App是Native View与WebView交替的场景出现。这种应用混合逻辑相对简单。即在需要的时候，将WebView当成一个独立的View（Activity）运行起来，在WebView内完成相关的展示操作。这种移动应用主体通常是Native App，Web技术只是起到补充作用。开发难度和Native App基本相当。
### 单View混合型
即在同一个View内，同时包括Native View和Web View。互相之间是覆盖（层叠）的关系。这种Hybrid App的开发成本较高，开发难度较大，但是体验较好。如百度搜索为代表的单View混合型移动应用，既可以实现充分的灵活性，又能实现较好的用户体验。
### Web主体型
即移动应用的主体是Web View，主要以网页语言编写，穿插Native功能的Hybrid App开发类型。这种类型开发的移动应用体验相对而言存在缺陷，但整体开发难度大幅降低，并且基本可以实现跨平台。Web主体型的移动应用用户体验的好坏，主要取决于底层中间件的交互与跨平台的能力。国外的appMobi、PhoneGap和国内的WeX5、AppCan和Rexsee都属于Web主体型移动应用中间件。其中Rexsee不支持跨平台开发。appMobi和PhoneGap除基础的底层能力更多是通过插件（Plugins）扩展的机制实现Hybrid。AppCan除了插件机制，还提供了大量的单View混合型的接口来完善和弥补Web主体型Hybrid App体验差的问题，接近Native App的体验。而WeX5则在揉合PhoneGap和Bootstrap等主流技术的基础上，对性能进一步做了深度优化，不但完全具备Native App对本地资源的调用能力，性能体验也不输原生；WeX5所开发出来的app具备完全的跨端运行能力，可以无需任何修改直接运行在各种前端环境上。

从分析可见，Hybrid App中的Web主体型只要能够解决用户体验差的问题，就可以变成最佳Hybrid App解决方案类型。
### 多主体共存型——灵活型
这是一种新型的开发模式，即支持Web主体型的应用，又支持以Native主体的应用，也支持两者混合的开发模式。比如kerkee框架，它具有跨平台、用户体验好、性能高、扩展性好、灵活性强、易维护、规范化、具有Debug环境、彻底解决跨域问题等特点。用户体验与Native App媲美。功能方面，开发者可随意扩展接口。

# Web app vs. Native & Hybrid


# References
1. https://baike.baidu.com/item/Native%20App
2. https://searchsoftwarequality.techtarget.com/definition/native-application-native-app
3. https://en.wikipedia.org/wiki/Web_application
4. https://en.wikipedia.org/wiki/Mobile_app

5. https://baike.baidu.com/item/hybrid%20app/270520?fr=aladdin

# See also
* Ajax
* Web framework (e.g.Django)
* Websocket
