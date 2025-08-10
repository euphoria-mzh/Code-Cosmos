# CSS知识点总结

## 1. CSS基础

### 1.1 语法和注释

- CSS用于描述网页样式的语言。
- CSS使用选择器和声明来描述样式。
- 选择器指定要应用样式的元素，声明定义样式。

```css
selector {
  property: value;
}
```

- 注释用 `/* ... */` 包裹，可以写在单行或多行。

```css
/* 这是一个CSS注释 */
```

### 1.2 颜色和单位

- 颜色可以用名称、RGB值、HEX值、HSL值等方式表示。

```css
color: red; /* 使用颜色名称 */
background-color: #000000; /* 使用HEX值表示黑色 */
border: 1px solid rgb(255, 0, 0); /* 使用RGB值设置边框为红色 */
```

- 单位用于衡量长度、宽度、高度等属性，常见单位有像素(px)、百分比(%)、em、rem等。

```css
font-size: 16px; /* 使用像素(px)设置字体大小 */
width: 50%; /* 使用百分比设置宽度 */
padding: 1em; /* 使用em设置内边距 */
```

### 1.3 盒模型和布局

- 每个HTML元素都被视为一个矩形盒子，包括内容区域、内边距、边框和外边距。
- 盒模型可以通过 `box-sizing` 属性指定为 `content-box` 或 `border-box`。

```css
.box {
  box-sizing: border-box; /* 将盒模型设置为border-box，宽度包括边框和内边距 */
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
}
```

- 布局是指如何排列和定位页面上的元素，包括块级元素和内联元素。
- 常见的布局技术包括浮动(float)、定位(position)、弹性布局(flexbox)和网格布局(grid)等。

```css
/* 使用浮动实现左右两栏布局 */
.container {
  overflow: hidden;
}

.left {
  float: left;
  width: 200px;
}

.right {
  margin-left: 210px; /* 左侧栏宽度+10px */
}
```

## 2. CSS进阶

### 2.1 选择器和伪类

- 选择器用于选择要应用样式的HTML元素。

```css
/* 标签选择器 */
p {
  color: red;
}

/* 类选择器 */
.error {
  color: red;
}

/* ID选择器 */
#header {
  background-color: #ccc;
}

/* 子元素选择器 */
ul > li {
  list-style: none;
}

/* 后代选择器 */
.container p {
  font-size: 16px;
}

/* 通配符选择器 */
* {
  margin: 0;
  padding: 0;
}
```

- 伪类用于选择某些特殊状态的元素，如hover、active、visited等。
- 伪类以冒号(:)开头。

```css
/* hover伪类 */
a:hover {
  color: blue;
}

/* active伪类 */
button:active {
  background-color: #ccc;
}

/* visited伪类 */
a:visited {
  color: purple;
}

/* nth-child伪类 */
li:nth-child(odd) {
  background-color: #f2f2f2;
}
```

### 2.2 文本和字体

- 字体属性用于设置字体族、字体大小、粗细、样式、变形等。

```css
/* 设置字体族为Arial，字体大小为16px，加粗 */
body {
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
}

/* 设置斜体字体 */
em {
  font-style: italic;
}

/* 使用Google Fonts引入自定义字体 */
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  font-family: 'Open Sans', sans-serif; /* 设置自定义字体 */
}
```

- 文本属性用于设置文本的颜色、对齐方式、行高等。

```css
/* 设置文本颜色为红色，居中对齐 */
h1 {
  color: red;
  text-align: center;
}

/* 设置行高为1.5倍 */
p {
  line-height: 1.5;
}
```

### 2.3 背景和边框

- 背景属性用于设置元素的背景颜色、图片、重复方式等。

```css
/* 设置背景颜色为灰色 */
body {
  background-color: #f2f2f2;
}

/* 设置背景图片*/
div {
  background-image: url('background.jpg');
  background-repeat: no-repeat;
  background-position: center;
}

/* 设置背景渐变效果 */
button {
  background: linear-gradient(to bottom, #ff0000 0%, #0000ff 100%);
}
```

- 边框属性用于设置元素的边框样式、宽度、颜色等。

```css
/* 设置边框样式为实线，宽度为1px，颜色为红色 */
button {
  border: 1px solid red;
}

/* 设置圆角边框 */
div {
  border-radius: 10px;
}

/* 设置阴影边框 */
img {
  box-shadow: 2px 2px 5px #888888;
}
```

### 2.4 布局和响应式设计

- 布局技术包括浮动(float)、定位(position)、弹性布局(flexbox)和网格布局(grid)等。
- 响应式设计指的是设计具有不同屏幕尺寸的设备上都能正常显示和使用的网页。
- 响应式设计可以通过媒体查询(media query)和流式布局(fixed layout)等技术实现。

```css
/* 使用弹性布局实现水平居中和垂直居中 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 使用媒体查询设置不同屏幕尺寸下的样式 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

/* 使用流式布局实现适应不同屏幕尺寸 */
img {
  max-width: 100%;
  height: auto;
}
```

## 3. CSS高级技巧

### 3.1 动画和过渡

- 过渡(transition)用于在元素从一种状态到另一种状态时添加动画效果。
- 动画(animation)用于创建更复杂的动画效果，并可以控制动画的循环次数、速度和延迟时间等。

```css
/* 设置过渡效果 */
button {
  transition: all 0.5s ease-in-out;
}

/* 设置动画效果 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

img {
  animation: rotate 2s linear infinite;
}
```

### 3.2 变量和函数

- CSS支持变量(var)和函数(function)来简化代码和提高可维护性。
- 变量用于存储值并在需要时重新使用。

```css
/* 定义变量 */
:root {
  --primary-color: #ff0000;
}

/* 使用变量 */
button {
  color: var(--primary-color);
}
```

- 函数用于执行操作并返回结果，常见的函数包括calc()、url()、translate()等。

```css
/* 使用calc()函数计算宽度 */
div {
  width: calc(50% - 20px);
}

/*