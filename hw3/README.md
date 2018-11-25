# 软件工程创新实践 第三次作业
本项目对React应用的一个具体实例，由于最近在看bootstrap所以就在别人的博客上找了一篇文章，文章内容是结合React与Bootstrap共同开发前端[文章地址](https://segmentfault.com/a/1190000010383464)
只参考了其中的的代码部分。
## 搭建环境
### React
使用了React的脚手架create-react-app，在目录文件夹下，命令行输入

`create-reacr-app hw3`

这里hw3就是本次的目录，等待一段时间，npm会自动下载所依赖的包，下载完成后会有提示。

输入`cd hw3`进入文件夹，输入`npm start`启动本地服务器，之后等待片刻，就会出现React的欢迎页面。如果浏览器没有自动打开，在浏览器网址栏输入localhost:3000，也能打开网页。这里react环境就搭好了。

有关create-react-app：这是一个搭建react应用的脚手架，可以免去一些配置工作，专注与开发。
有关这一脚手架的工作原理，我在网上找了别人的一篇博客[create-react-app原理](https://www.cnblogs.com/axl234/p/8269018.html),里面有很多内容没有看懂，放在这里记录一下。
### Bootstrap
Bootstrap部分，通过查询官网资料，直接使用 BootCDN 提供的免费 CDN 加速服务（同时支持 http 和 https 协议）

```js
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```
也可以直接将官网手册上的模板直接复制到`index.html`文件中。

我又尝试另外一种搭建bootstrap的方式；cd到所在目录中，运行`npm install bootstrap@3`等待安装完毕后，在`/public/index.html`文件中修改外部引用的css文件,运行后样式并没有加载出来，这里就是用cdn加速的连接就可以。

还有一种方法，在/index.js文件中直接导入css文件，在文件的开头加上`import '../node_modules/bootstrap/dist/css/bootstrap.css'`运行后就有样式加载出来了。

到这，react与bootstrap的开发环境就搭好了。
## Let's start!
其实在做第一次作业时，我就使用了create-react-app，但是当时git也不会使用，对react的了解也比较少，可以说是一窍不通。跟着react官网上的教程做了一个井字棋的程序。
这次作业新建项目后，我发现目录下有自动生成的`.gitignore`文件，忽略掉`/node_modules`里面的文件。
在原来的`/src`目录下，新建一个`/component`目录，保存写的组件。然后在原`/src`文件夹下，只保留`index.js`,`index.css`和`serviceWorker.js`三个文件。我们把我们写的文件都放到`/component`目录下。

react使用的是组件式开发，这里我们用到了一个ToDoapp组件，它包含两个组件ToDoForm和ToDoList，ToDoForm主要是产生输入的项目信息，ToDoList生成表格，其中的每一项是另一个组件ToDoItem。

代码的重点是利用props在父子组件中传值。

在终端输入`npm start`，就会打开一个浏览器窗口，npm会在localhost:3000上建立一个服务器，上面是编译好的网页。
也可以输入`npm run build`编译代码，得到一个`/bulid`文件夹，里面是编译好的文件。不过如果想要运行那个生成的页面的话，必须把`/build`文件放到服务器上，这里我也没太搞清楚是怎么回事，暂且搁置。

## 测试部分

**emmmmm下面的一些博客因为时间比较早，特别是阮一峰老师的博客，按照博客的说明并不能实现单元测试。我在自己尝试的时候还把依赖项搞崩了，又回退到之前的版本**

**以后的测试一定新建分支**

[阮一峰老师的博客react测试入门](http://www.ruanyifeng.com/blog/2016/02/react-testing-tutorial.html)<br/>
[阮一峰老师的博客Mocha](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)<br/>
[jsdom](https://github.com/jsdom/jsdom)<br/>
[mocha](https://mochajs.org/)<br/>
使用mocha测试框架`npm install mocha`
emmmmm，这里阮一峰老师的博客好像创造时间挺早的，按照上面博客中的步骤来会有很多问题，可能与环境搭建的不同也有关系，这里想用mocha失败了，具体原因没有找到。用到的一些[babel](https://babeljs.io/docs/en/)这种编译器来把es6代码转换成es5代码（mocha只支持es5），这里遇到的问题是写babel的配置文件不知道怎么写。先把这一方式放这。
发现再package.json文件中可以写scripts的选项

在react的官网上，它推荐的是[Jest](https://jestjs.io/docs/en/getting-started)的测试框架，还有[Enzyme](https://airbnb.io/enzyme/)的测试框架
[Enzyme博客](https://www.cnblogs.com/vvjiang/p/8599980.html)<br/>
[Jest+Enzyme](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)<br/>

### 在测试这部分之前的不要看，终于找到了靠谱的资料
总结下来就是使用Enzyme+Mocha，由于Mocha不支持ES6，所以环境比较难配
先用babel将ES6转换为ES5，还需要安装jsdom等依赖项

下面是配环境时参考的博客，也是混合了几个文章的内容，其实实现原理我也没有搞清楚，也不能只按照一篇文章的来。

参考资料：<br/>
[Enzyme](https://airbnb.io/enzyme/)<br/>
[mocha](https://mochajs.org/)<br/>
[jsdom](https://github.com/jsdom/jsdom)<br/>
[Enzyme1](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)<br/>
[Enzyme2](https://medium.com/@houstoncbreedlove/basics-intro-to-testing-react-components-with-mocha-chai-enzyme-and-sinon-c8b82ce58df8)<br/>
[Enzyme3](https://medium.com/@kayodeniyi/setting-up-tests-for-react-using-mocha-expect-and-enzyme-8f53af96fe7e)<br/>

测试环境需要安装其他的一些包
```
npm i --save-dev babel-cli babel-loader babel-preset-es2015 babel-preset-react
npm i --save-dev enzyme enzyme-adapter-react-16
npm i --save-dev jsdom@9.11.0 mocha expect react-addons-test-utils
```
第一行是babel相关的工具，主要是将ES6转化为ES5

第二行是Enzyme框架

第三行是其他的一些依赖项，比如Mocha框架，expect断言库，react官方单元测试工具，jsdom可以建立虚拟的DOM环境让测试使用，其实这些教程也不算很新，其中jsdom的版本有较大的更新，**一定要安装9.11.0版本或以下的jsdom**

还需要在项目内新建一个`.babelrc`配置文件
```
//.babelrc
{ 
    "presets": ["react", "es2015"] 
}
```

以及修改`package.json`文件

```
scripts{
    ...
    "test": "mocha --reporter spec \"./src/test/testSetup.js\" \"./src/test/*.test.js\"",
    ...
}
```
在src下面新建一个`/test`目录，里面是测试文件
首先在里面建一个文件名为`testSetup.js`文件，在测试开始时会首先读取这个文件中的内容，这个文件是用jsdom创造一个DOM环境，具体内容见文件

这样在运行`npm test`时，会自动读取后缀为`*.test.js`的文件，最后返回测试结果
### 测试文件
在`/test`文件夹下面的除了hello.test.js是测试环境所用的文件，其他的`*.test.js`都是测试文件。
我在测试的时候遇到了一些问题，我现在只能测试构件的一些静态量，比如元素的属性等等。但是我觉得测试的重点应该是*构件之间数据的传递*，我现在看文档的API无法理解接口的意思。所以我只写了一个`/ToDoapp.test.js`只是测试了一下元素。

这里我还发现测试可以嵌套，比如我渲染了一个ToDoapp组件(使用mount方法而不是shallow)，我就可以在这个测试下面测试ToDoapp的子组件比如ToDoList或者ToDoFrom