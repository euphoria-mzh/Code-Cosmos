---
title: uni-app
date: 2020-05-29
pic: /images/8.jpg
categories:
 - 前端
tags:
 - uniapp
---

:::tip
UniApp 基础知识点总结
:::


## 什么是UniApp？

UniApp是一个基于Vue.js框架的开发平台，可以通过一次编写实现多端发布（包括微信小程序、H5、iOS、Android等）。

UniApp使用了一套基于Vue.js语法的组件化开发方式，同时提供了一些特有的API，可以方便地调用原生功能。

## 如何创建UniApp项目？

可以通过命令行工具或者可视化界面来创建UniApp项目。

### 命令行创建

使用HBuilderX集成开发环境的命令行工具，执行以下命令：

```
$ npm install -g @vue/cli
$ vue create -p dcloudio/uni-preset-vue my-project
```

其中`my-project`是项目名称，可以根据自己的需要进行修改。

### 可视化界面创建

打开HBuilderX集成开发环境，点击创建新项目按钮，在弹出的对话框中选择“UniApp”类型，填写相关信息后即可创建项目。

## 如何编写UniApp页面？

UniApp页面的编写就是基于Vue.js框架的开发，所以熟悉Vue.js语法就可以开始编写UniApp页面了。

在UniApp的组件库中，有很多特有的组件，如`uni-list`、`uni-form`、`uni-card`等，可以使用这些组件来构建页面。

### 页面结构

UniApp页面由Vue.js的单文件组件（*.vue）构成，包含三个部分：template、script和style。

```html
<template>
  <view>
    <!-- 页面内容 -->
  </view>
</template>

<script>
export default {
  data() {
    // 数据
    return {}
  },
  methods: {
    // 方法
  }
}
</script>

<style scoped>
/* 样式 */
</style>
```

### 数据绑定

UniApp支持Vue.js的数据绑定语法，可以使用`v-bind`指令将变量与DOM元素绑定，使用`v-model`指令将变量与表单元素双向绑定。

```html
<template>
  <view>
    <text>{{ message }}</text>
    <input v-model="inputValue" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello UniApp!',
      inputValue: ''
    }
  }
}
</script>
```

### 条件渲染

UniApp支持Vue.js的条件渲染语法，可以使用`v-if`指令控制DOM元素是否显示。

```html
<template>
  <view>
    <text v-if="showMessage">{{ message }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showMessage: true,
      message: 'Hello UniApp!'
    }
  }
}
</script>
```

### 列表渲染

UniApp支持Vue.js的列表渲染语法，可以使用`v-for`指令对数组进行遍历渲染。

```html
<template>
  <view>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: ['item1', 'item2', 'item3']
    }
  }
}
</script>
```

### 事件处理

UniApp支持Vue.js的事件处理语法，可以使用`v-on`指令绑定事件处理函数。

```html
<template>
  <view>
    <button @click="handleClick">点击我</button>
  </view>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('button clicked')
    }
  }
}
</script>
```

## 如何实现多端发布？

UniApp提供了一套基于Webpack的打包工具，可以通过命令行执行以下命令进行打包：

```
$ npm run build
```

打包完成后，在`dist`目录下会生成不同平台的代码，可以直接上传到对应平台进行发布。

UniApp还提供了可视化的云打包服务，可以无需本地打包，直接在云端生成各个平台的应用包，方便快捷。

## 如何调用原生功能？

UniApp提供了一些特有的API，可以方便地调用原生功能，如获取当前位置、调用摄像头、保存图片等。
例如，如果要调用摄像头获取图片，可以使用以下代码：

```javascript
uni.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths;
  }
});
```
其中uni.chooseImage()就是UniApp提供的调用摄像头的API。

### 通用API

UniApp提供了一些通用的API，可以在不同的平台上使用相同的方式调用原生功能。例如，`uni.showModal()`方法可以在微信小程序、H5、iOS和Android平台上都能正常工作。

```javascript
uni.showModal({
  title: '提示',
  content: '确定要删除吗？',
  success(res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```

### 平台特有API

UniApp也提供了一些平台特有的API，可以调用一些只有该平台才有的原生功能。例如，在微信小程序中，可以使用`wx.getLocation()`方法获取当前位置；在iOS中，可以使用`plus.camera.getCamera()`方法调用摄像头。

```javascript
// 微信小程序
uni.getLocation({
  success(res) {
    console.log(res)
  }
})

// iOS
if (uni.getSystemInfoSync().platform === 'ios') {
  var cmr = plus.camera.getCamera()
  cmr.captureImage(function (path) {
    console.log(path)
  })
}
```

## 总结

以上就是UniApp的基础知识点总结，包括创建项目、编写页面、发布多端和调用原生功能等。希望对你有所帮助！

除了这些基础知识点，UniApp还提供了丰富的插件和扩展，可以进一步提高开发效率和代码质量。如果想深入学习UniApp，建议参考UniApp官方文档以及相关的教程和案例。