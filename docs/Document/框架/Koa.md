:::tip
Koa node 服务端框架基本配置
:::

## 安装

```bash
npm install koa
```

## 基本使用

在根目录下创建 src 文件夹 ，在 src 文件夹下创建 main.js 并写入以下代码

```js
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  // 设置响应头
  ctx.set('Content-Type', 'text/html;charset=utf-8');
  // 设置响应体
  ctx.body = 'hello world';
  // 执行下一个中间件
  await next();
});
app.listen(3000  () =>{
  console.log('吊毛，服务端已经跑起来了 ==> http://localhost:3000');
  });
```

## 运行

### 第一种使用 node 进行先项目启动

```bash
node src/main.js
```

### 第二种使用 nodemon 进行项目启动

优点： 当项目代码发生改变时，会自动重启项目

#### 安装 nodemon

```bash
npm install nodemon
```

#### 编写运行脚本

在 package.json 中添加以下脚本

```json
  "scripts": {
    "dev": "nodemon ./src/main.js",
  },
```

#### 启动项目

```bash
npm run dev
```

## 读取配置文件

### 安装配置文件读取模块

```bash
npm install dotenv
```

### 配置文件

在项目根目录下创建.env 文件，并写入以下内容

```bash
APP_PORT=3000
```

在 Src 文件夹下创建 config 文件夹，并在 config 文件夹下创建 config.default.js 文件，并写入以下内容

```js
const dotenv = require("dotenv");

dotenv.config();

// console.log(process.env.APP_PORT);
module.exports = process.env;
```

### 修改 main.js 内容

```js
const Koa = require('koa');

const { APP_PORT } = require('./config/config.default');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(APP_PORT, () => {
  console.log(`吊毛，服务端已经跑起来了 ==> http://localhost:${APP_PORT}`);
```

## 添加路由

### 安装路由模块

```bash
npm install koa-router
```

### 创建路由文件

在 src 文件夹下创建 router 文件夹，并在 router 文件夹下创建 route.js 文件，并写入以下内容

```js
const Router = require("koa-router");

const router = new Router({ prefix: "/api" });

router.get("/", async (ctx, next) => {
  ctx.body = "Hello World";
});

router.get("/user", async (ctx, next) => {
  ctx.body = "Hello User";
});
module.exports = router;
```

### 修改 main.js 内容

```js
const Router = require("koa-router");

const router = require("./router/user.route");

app.use(router.routes());
```

## 目录结构优化
