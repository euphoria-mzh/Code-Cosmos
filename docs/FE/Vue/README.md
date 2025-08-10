---
title: 初识VUE
date: 2020-05-29
pic: /images/6.jpg
categories:
 - 前端
tags:
 - Vue
---

:::tip
Vue@2.x相关内容
:::

<!-- more -->

 ## <a href="https://v2.cn.vuejs.org/" target="_blank">Vue@2.x官方文档</a> 

## 介绍

Vue.js 是一款流行的 JavaScript 框架，用于构建交互式 Web 应用程序。Vue.js 具有以下特点：

- 响应式数据绑定
- 组件化开发模式
- 轻量级，易上手
- 支持服务端渲染

## 基本语法

### 插值表达式

使用双花括号 {{}} 将数据绑定到 HTML 中。

```html
<div>{{ message }}</div>
```

### v-bind 指令

将一个元素的属性与 Vue 实例中的数据进行绑定。常见的用法是绑定元素的 class 和 style 属性。

```html
<!-- 绑定 class -->
<div v-bind:class="{ 'active': isActive }"></div>

<!-- 绑定 style -->
<div v-bind:style="{ color: textColor, fontSize: textSize }"></div>
```

### v-on 指令

监听 DOM 事件，并在触发时执行对应的方法。

```html
<button v-on:click="increment">加一</button>
```

### 计算属性

计算属性根据数据的变化，动态地计算出新的值。

```javascript
computed: {
  doubleAge() {
    return this.age * 2;
  }
}
```

### 监听器

监听数据的变化，并在变化时执行回调函数。

```javascript
watch: {
  age(newVal, oldVal) {
    console.log(`年龄从 ${oldVal} 变为 ${newVal}`);
  }
}
```

## 组件

### 创建组件

使用 `Vue.component()` 方法创建全局组件。

```javascript
Vue.component('my-component', {
  template: '<div>这是我的组件。</div>'
})
```

### 组件传值

使用 props 属性实现父组件向子组件传递数据。

```javascript
// 父组件
<template>
  <child-component :msg="message"></child-component>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  components: {
    ChildComponent
  }
}
</script>

// 子组件
<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
```

### 组件生命周期

Vue 组件有多个生命周期钩子函数, 可以在不同的阶段执行相应的操作。

```javascript
export default {
  // 组件被创建前调用
  beforeCreate() { },
  
  // 组件被创建后调用
  created() { },
  
  // 组件被挂载到 DOM 前调用
  beforeMount() { },
  
  // 组件被挂载到 DOM 后调用
  mounted() { },
  
  // 组件更新前调用
  beforeUpdate() { },
  
  // 组件更新后调用
  updated() { },
  
  // 组件被销毁前调用
  beforeDestroy
  ```