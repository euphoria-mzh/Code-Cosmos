---
title: Win11右键菜单
date: "2020-08-08"
sidebar: "auto"
coverImg: /blog/win1.png
description: "Win11 右键菜单默认展开"
---

# Win11 右键菜单

::: tip 摘要
Win11 右键菜单默认展开
:::

<!-- more -->

## 修改 Win11 右键面板

### 打开终端(管理员)

#### 按 Win + x 唤出面板 按 A 或鼠标点击终端(管理员)

![](/Tutorial-assets/35.png)

### 输入指令 回车即可

```sh
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

![](/Tutorial-assets/36.png)

### 重启电脑生效

![](/Tutorial-assets/37.png)

## 恢复 Win11 右键面板

### 打开终端(管理员)

### 输入指令 回车即可

```sh
reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
```

### 重启电脑即可
