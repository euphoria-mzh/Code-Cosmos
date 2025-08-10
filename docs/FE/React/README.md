---
title: React
date: 2020-05-29
pic: /images/7.jpg
categories:
 - 前端
tags:
 - React
---

:::tip
Reat知识点总结
:::

## React中文官方文档
### [点击跳转](https://react.docschina.org/)

## 基础概念

### 组件（Component）

- React中最基本的概念
- 组件是构建UI界面的基础单元，可以将一个大型的应用程序拆分成多个小组件
- 组件可以是函数组件或类组件

### 属性（Props）

- Props 是从父组件传递给子组件的数据，是只读的
- 可以通过 props 在组件之间传递数据

### 状态（State）

- State 是组件内部管理的状态，可以通过 setState 方法改变
- 修改状态会触发组件重新渲染

### 生命周期（Lifecycle）

- 生命周期是组件从创建到销毁过程中所经历的各个阶段
- 每个阶段都有对应的生命周期方法，在不同的时刻执行相应的操作
- 常用的生命周期方法有：componentDidMount、componentDidUpdate、componentWillUnmount等

## JSX语法

### 什么是JSX

- JSX 是一种 JavaScript 的语法扩展
- 它允许我们在 JavaScript 中编写类似 HTML 的代码

### JSX特点

- 与模板语言相比，JSX更加灵活和强大
- JSX 具有 JavaScript 表达式的能力
- JSX 不需要学习新的模板语言，学习曲线相对较低

### JSX基础语法

- 使用 {} 将 JavaScript 表达式包裹起来
- 使用 className 替代 class
- 使用 htmlFor 替代 for

## 组件交互

### 事件处理

- 通过绑定事件监听器，在特定的事件触发时执行相应的代码
- 可以使用箭头函数或 bind 方法绑定 this

### 组件通信

- 父子组件通信：通过 Props 传递数据
- 子父组件通信：通过回调函数实现子组件向父组件传递数据
- 跨级组件通信：使用 Context，在组件树中进行跨级传递数据

### Refs

- Refs 提供了一种方式，允许我们直接访问 DOM 元素或组件实例
- 可以通过 React.createRef 或回调函数方式创建 Refs

## React高级特性

### 高阶组件（Higher Order Component）

- HOC 是一个函数，接收一个组件作为参数并返回一个新的组件
- 可以让我们复用组件逻辑，增强组件的功能

### Render Props

- Render Props 是一个使用函数作为子组件的一种技术
- 通过 props 将一个函数传递给另一个组件，使得后者可以调用该函数，并获取其返回值

### Hooks

- Hooks 是 React v16.8 引入的新特性，提供了对函数组件中状态管理和副作用处理的支持
- 常用的几个 Hooks 分别为 useState、useEffect 和 useContext 等

## React路由

### React Router

- React Router 是 React 中最流行的路由库
- 可以帮助我们实现SPA（Single Page Application）应用程序的路由管理
- 常用的组件有：BrowserRouter、Route、Link 和 Redirect 等

### 动态路由

- 动态路由是指通过 URL 参数来告诉应用程序需要显示哪些内容
- 可以通过 React Router 实现动态路由，使用 :parameter 格式来定义动态路由参数

## Redux

### Redux基础

- Redux 是一种状态管理库，用于管理整个应用程序的状态
- Redux 的核心概念包括 store、action 和 reducer 等
- Redux 的工作流程大致为：用户交互 -> 触发 action -> reducer 修改状态 -> UI更新

- Redux 的工作流程大致为：用户交互 -> 触发 action -> reducer 修改状态 -> UI 重新渲染

### Redux进阶

- Redux 中间件（Middleware）是指在 action 被发送到 reducer 前进行一些额外的处理的函数
- 常用的中间件有：thunk、saga 和 logger 等
- Redux Toolkit 是一个官方提供的工具集，可以简化 Redux 应用程序开发过程

## 性能优化

### React性能问题

- React 应用程序的性能瓶颈通常出现在组件渲染上
- 不必要的重复渲染、不恰当的使用状态和 Props、缺乏异步加载等都会导致 React 应用程序性能下降

### 性能优化技术

- 使用 React.memo 函数或 PureComponent 组件减少重复渲染
- 对 Props 进行浅比较或使用 immutability-helper 等库避免不必要的 Props 更新
- 使用 shouldComponentUpdate 生命周期方法避免不必要的组件渲染
- 使用懒加载或代码分割技术以达到更快的应用程序启动时间
- 使用 React Profiler 检查应用程序性能问题

## 其他

### 受控组件与非受控组件

- 受控组件是指由 React 控制输入元素的值和状态的组件
- 非受控组件是指由 DOM 控制输入元素的值和状态的组件

### 自定义Hooks

- 自定义 Hooks 可以让我们重用组件逻辑
- 自定义 Hooks 通常以 use 命名开头，并且只能在函数组件中使用

### 服务器渲染（SSR）

- 服务器渲染（Server Side Rendering）是指在服务器上将 React 组件渲染成 HTML 字符串再返回给客户端
- SSR 可以加速应用程序的首次加载，同时也有助于 SEO（Search Engine Optimization）
- 常用的服务器渲染框架有：Next.js 和 Gatsby 等更新

### TypeScript与React

- TypeScript 是一种类型化的 JavaScript 超集，为 React 应用程序提供了更好的类型检查和编写代码提示
- 在 React 中使用 TypeScript 可以帮助我们更早地发现潜在的类型错误，提高代码的可维护性和稳定性

### CSS in JS

- CSS in JS 是将 CSS 样式直接写在 JavaScript 代码中的一种技术
- CSS in JS 提供了更加灵活的样式管理方式，可以避免 CSS 类名冲突等问题
- 常用的 CSS in JS 库有：styled-components、emotion 和 JSS 等

### React Native

- React Native 是 Facebook 推出的一种跨平台移动应用开发框架
- 使用 React Native 可以使用 JavaScript 编写原生 iOS 和 Android 应用程序
- React Native 具有高度的可重用性和可测试性，可以大大提高移动应用开发效率

## 总结

以上就是 React 的基础知识点总结，包括组件、Props、State、生命周期、JSX 语法、事件处理、组件通信、Refs、高阶组件、Render Props、Hooks、React Router、Redux、性能优化、受控组件与非受控组件、自定义 Hooks、服务器渲染、TypeScript 与 React、CSS in JS 和 React Native。掌握这些知识点，可以让我们更好地使用 React 开发应用程序，提高代码质量和开发效率。