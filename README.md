# React_learning

###2018.9.29更新

我选择学习的是react，在这几天的学习中，我知道了react可以把小的组件封装起来，来实现代码的复用，而且在设计构件层级的时候也应该充分考
虑，把一个复杂的界面划分出层级，非常有利于写代码以及之后代码的重构。

<hr>

下面的教程是react官网上一篇教程，在本地运行需要配置一下环境，以下是网站上说明配置环境的步骤

1. 确保你电脑上安装了最新版本的 [Node.js](https://nodejs.org/zh-cn/).
2. 跟着 [安装指南](/docs/installation.html#creating-a-new-application) 创建一个新的 React 项目。
3. 删除掉生成项目中 `src/` 文件夹下的所有文件。
4. 在 `src/` 文件夹下新建一个名为 `index.css` 的文件并拷贝 `/index.css` 到文件中。
5. 在 `src/` 文件夹下新建一个名为 `index.js` 的文件并拷贝 `/index.js` 到文件中, 并在此文件的最开头加上下面几行代码：

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    ```

接下来通过命令行在你的项目目录下运行 `npm start` 命令并在浏览器中打开 `http://localhost:3000` 你就能够看到空的井字棋棋盘了。

## 2018/9/25
我在React的官网上看到了这篇说明类的文档，一开始我是在网站上直接做的，之后又尝试用本地环境，还没有全部完成。

**[react官方文档](https://reactjs.org/tutorial)**

突然发现自己并不会JavaScript的一些知识，需要继续学习。

跟着教程做了几步，大概对react中的组件和事件有些了解。
觉得函数的声明与使用与C++有很大的不同，有点适应不过来的感觉。

## 2018/9/26
继续昨天的教程项目。

## 2018/9/28
新发现两个网站

**[中文react文档](https://react.docschina.org/)**

**[w3cschool教程](https://www.w3cschool.cn/reactzwbwd/ldc11q.html)**

继续教程
<hr>

```javascript
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }
```
发现这种问题，看不懂这个类的构造函数，js的基础不太好

刚才看到了一个新用法，**函数定义组件**，是用来简化代码的，可以替换构件的构造函数。

将井字棋基本实现了，有些内容跟c++是有些相似的，比如一些运算和处理的函数，但是有些东西有很大不同，比如
在控件之间通讯使用的state和props，还是不太清楚到底是什么。

## 2018/9/29
继续教程中的项目，已经按照教程中的做完了，还是有很多问题。比如props的原理还是没有弄明白，还有一些函数的使用不熟悉感觉很奇怪.
<hr>

晚上读了react官网上Doc部分，看的似懂非懂，也看了有关props与state相关的知识，我觉得应该先看一下Doc然后再去做tutorial。不过先按照tutorial做了之后虽然有很多很多不明白的地方，但是看到文档的时候就会有印象，会加深一点理解。对于前几天不懂的地方，文档中都有描述，就是现在理解的还是不够深刻。
