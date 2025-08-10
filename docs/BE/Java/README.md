---
title: 初识Java
date: 2020-05-29
pic: /images/8.jpg
categories:
 - 后端
tags:
 - Java
---

:::tip
Java基础知识点
:::

<!-- more -->

# Java基础

## 1. Java语言特性

- 面向对象：一切皆为对象，封装、继承、多态
- 跨平台：一种程序可以在不同的操作系统上运行
- 自动内存管理：垃圾回收机制可以自动回收不再使用的变量占用的内存空间
- 安全性：提供了安全机制来保护计算机免受恶意代码的攻击

## 2. Java开发环境

- JDK（Java Development Kit）：包括JRE、编译器、调试器等工具
- Eclipse、IntelliJ IDEA等IDE（Integrated Development Environment）
- Maven、Gradle等构建工具

## 3. Java基本语法

### 3.1 类和对象

- 类：定义了一个对象的属性和方法的集合
- 对象：类的实例化，代表了一个具体的实体
- 方法：类中可供外部调用的行为

### 3.2 变量和数据类型

- 基本数据类型：byte、short、int、long、float、double、char、boolean
- 引用数据类型：类、数组、接口等
- 常量：final关键字修饰的变量，在程序运行时不能修改其值

### 3.3 控制流程

- 分支语句：if-else、switch-case
- 循环语句：for、while、do-while
- 跳转语句：break、continue、return

## 4. 数组

- 创建和初始化数组
- 访问和修改数组元素
- 数组遍历和排序
- 多维数组

## 5. 字符串

- 字符串的创建和初始化
- 字符串的常用方法
- 正则表达式

## 6. 输入输出

- 标准输入输出：System.in/System.out
- 文件读写
- 序列化和反序列化

# 面向对象

## 1. 面向对象思想

- 封装：隐藏实现细节，只暴露必要的接口
- 继承：子类继承父类的属性和方法
- 多态：同一方法在不同对象上有不同的行为

## 2. 类与对象

- 类的定义和使用
- 构造方法和静态方法
- 成员变量和成员方法
- 访问控制修饰符

## 3. 继承与多态

- 继承的实现和注意事项
- 方法的重载和覆盖
- 接口和抽象类
- 多态的实现和应用

## 4. 包和访问控制

- 包的定义和使用
- 不同访问控制修饰符的区别
- import语句

# Java高级

## 1. 异常处理

- 异常的分类和捕获
- try-catch-finally块
- 自定义异常

## 2. 泛型

- 泛型的概念和作用
- 泛型类和泛型方法
- 通配符和限定类型

## 3. 注解

- 注解的定义和使用
- 内置注解
- 自定义注解

## 4. IO流

- 字节流和字符流
- InputStream/OutputStream
- Reader/Writer

## 5. 多线程

- 线程的创建和启动
- 线程同步
- 线程池

## 6. 反射

- 反射的概念和作用
- Class类和对象
- 动态创建对象和调用方法

## 7. Lambda表达式

- Lambda表达式的定义和语法
- Lambda表达式的应用场景
- 函数式接口

## 8. 集合框架

- Collection接口和List/Map/Set接口实现类
- Iterator和ForEach循环
- 泛型在集合中的应用
- Comparator和Comparable接口

## 9. 数据库操作

- JDBC（Java Database Connectivity）：连接数据库并执行SQL语句
- PreparedStatement、ResultSet等重要类
- 连接池

## 10. 网络编程

- TCP/IP协议简介
- Socket编程基础
- HTTP协议

## 11. 分布式系统

- 基本原理，如负载均衡、高可用性、容错机制等
- RPC（Remote Procedure Call）远程过程调用
- SOA（Service-Oriented Architecture）面向服务的架构

# Java工具与框架

## 1. 开发工具

- Eclipse、IntelliJ IDEA、NetBeans等常用IDE
- Maven、Ant、Gradle等构建工具
- Git、SVN等版本控制工具

## 2. 测试框架

- JUnit：单元测试框架
- Mockito：mock测试框架

## 3. Web开发框架

- Spring Framework：IoC（Inversion of Control）和AOP（Aspect Oriented Programming）框架
- Struts2：MVC（Model-View-Controller）框架
- Hibernate：ORM（Object-Relational Mapping）框架

## 4. Web服务框架

- Spring Boot：快速搭建Web应用的框架
- Apache CXF、Axis2等SOAP框架
- Jersey、RestEasy等RESTful框架

## 5. 数据库连接池

- DBCP（DataBase Connection Pool）
- C3P0
- HikariCP

## 6. 其他常用工具和框架

- Log4j、Logback等日志工具
- Jackson、Gson等JSON解析工具
- Apache Commons等常用工具类库
- Netty、Tomcat等网络通信和服务器框架

# Java性能优化

## 1. JVM调优

- 内存管理（堆、栈、元空间）
- 垃圾回收机制
- JIT编译器

## 2. 线程池和线程安全

- 线程池的使用和参数配置
- synchronized、Lock等线程安全相关类
- volatile关键字的作用

## 3. 编码规范

- 命名规范
- 注释规范
- 代码风格

## 4. 性能测试工具

- JMH（Java Microbenchmark Harness）：专门针对Java语言的微型基准测试框架
- Apache JMeter：功能强大的压力测试工具

## 5. 应用服务器调优

- Tomcat、WebSphere等应用服务器的配置和调优
- Nginx、Apache等Web服务器的负载均衡配置

