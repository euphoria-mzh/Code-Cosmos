## Dplayer (视频播放器)

官方文档 [点击跳转](https://dplayer.diygod.dev/zh/guide.html)

1.安装

使用 npm

```
npm install dplayer --save
```

使用 yarn

```
yarn add dplayer
```

2.快速开始

我们先尝试初始化一个最简单的 DPlayer
加载播放器文件:

```html
<div id="dplayer"></div>
<script src="DPlayer.min.js"></script>
```

或者使用模块管理器:

```js
import DPlayer from "dplayer";

const dp = new DPlayer(options);
```

在 js 里初始化:

```js
const dp = new DPlayer({
  container: document.getElementById("dplayer"),
  video: {
    url: "demo.mp4",
  },
});
```

## depcheck (分析包是否有用)

官方文档 [点击跳转](https://github.com/depcheck/depcheck)

1. 安装

```sh
npm install -g depcheck
```

1. 在项目终端下运行下面命令

```sh
depcheck
```

## @escook/request-miniprogram (网络请求)

文档地址 [点击跳转](https://www.npmjs.com/package/@escook/request-miniprogram)

1. 安装

```sh
npm install @escook/request-miniprogram
```

2. 导入

```js
// 按需导入 $http 对象
import { $http } from "@escook/request-miniprogram";

// 将按需导入的 $http 挂载到 wx 顶级对象之上，方便全局调用
wx.$http = $http;

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http;
```

3. 使用

```js
// 发起 GET 请求，data 是可选的参数对象
$http.get(url, data?)

// 发起 POST 请求，data 是可选的参数对象
$http.post(url, data?)

// 发起 PUT 请求，data 是可选的参数对象
$http.put(url, data?)

// 发起 DELETE 请求，data 是可选的参数对象
$http.delete(url, data?)
```

4. 配置请求根路径

```js
$http.baseUrl = "https://www.example.com";
```

5. 请求拦截器

```js
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  // do somethimg...
};
```

- 展示 loading 效果：

```js
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  wx.showLoading({
    title: "数据加载中...",
  });
};
```

- 自定义 header 请求头：

```js
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  if (
    options.url.indexOf("/home/catitems") !== -1
  ) {
    options.header = {
      "X-Test": "AAA",
    };
  }
};
```

6. 响应拦截器

```js
// 请求完成之后做一些事情
$http.afterRequest = function () {
  // do something...
};
```

- 隐藏 loading 效果：

```js
// 请求完成之后做一些事情
$http.afterRequest = function () {
  wx.hideLoading();
};
```
