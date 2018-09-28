# React_learning
## 2018/9/25
我在React的官网上看到了这篇说明类的文档，一开始我是在网站上直接做的，之后又尝试用本地环境，还没有全部完成。

**参考网站[react](https://reactjs.org/tutorial)**

突然发现自己并不会JavaScript的一些知识，需要继续学习。

跟着教程做了几步，大概对react中的组件和事件有些了解。
觉得函数的声明与使用与C++有很大的不同，有点适应不过来的感觉。

## 2018/9/26
继续昨天的教程项目。

## 2018/9/28
新发现两个网站

**中文react网站[中文react](https://react.docschina.org/)**

**react学习教程[w3cschool教程](https://www.w3cschool.cn/reactzwbwd/ldc11q.html)**

继续教程
<hr><hr/>
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
