# 软件工程创新实践 第三次作业
本项目对React应用的一个具体实例，由于最近在看bootstrap所以就在别人的博客上找了一篇文章，文章内容是结合React与Bootstrap共同开发前端[文章地址](https://segmentfault.com/a/1190000010383464)
只参考了其中的的代码部分。
## 搭建环境
### React
使用了React的脚手架create-react-app，在目录文件夹下，命令行输入

`create-reacr-app hw3`

这里hw3就是本次的目录，等待一段时间，npm会自动下载所依赖的包，下载完成后会有提示。

输入`cd hw3`进入文件夹，输入`npm start`启动本地服务器，之后等待片刻，就会出现React的欢迎页面。如果浏览器没有自动打开，在浏览器网址栏输入localhost:3000，也能打开网页。这里react环境就搭好了。
### Bootstrap
Bootstrap部分，通过查询官网资料，我直接使用 BootCDN 提供的免费 CDN 加速服务（同时支持 http 和 https 协议）

```
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```
也可以直接将官网手册上的模板直接复制到`index.html`文件中。

到这，react与bootstrap的开发环境就搭好了。