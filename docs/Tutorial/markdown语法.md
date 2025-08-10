:::tip
写文档的时候懒得搜 markdown 的一些写法，索性直接写在博客里面
:::

## Markdown 扩展

VitePress 带有内置的 Markdown 扩展。

### 目录

- 输入

```
[[toc]]
```

- 输出
  [[toc]]

### 链接

内部和外部链接都得到特殊处理。

#### 内部链接

内部链接转换为路由器链接以进行 SPA 导航。此外，index.md 每个子目录中包含的每个内容都会自动转换为 index.html，并具有相应的 URL /。

例如，给定以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

假设您位于 foo/one.md：

```markdown
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

#### 外部链接

自动获取出站链接 target="\_blank" rel="noreferrer"：

```
<a href="https://www.example.com" target="_blank" rel="noreferrer">点击这里</a>
```

<a href="https://www.example.com" target="_blank" rel="noreferrer">点击这里</a>

```
[点击这里](https://www.example.com)
```

[点击这里](https://www.example.com)

### GitHub 风格的表格

- 输入

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

- 输出
  | Tables | Are | Cool |
  | ------------- | :-----------: | ----: |
  | col 3 is | right-aligned | $1600 |
  | col 2 is | centered | $12 |
  | zebra stripes | are neat | $1 |

### 表情符号 🎉

- 输入

```
:tada: :100:
```

- 输出

  :tada:
  :100:

提供[所有表情符号的列表。](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 定制集装箱

自定义容器可以通过其类型、标题和内容来定义。

#### 默认标题

- 输入

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

- 输出

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

#### 自定义标题

您可以通过在容器的“类型”后面附加文本来设置自定义标题。

- 输入

````
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

````

- 输出

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

### 代码块中的语法突出显示

VitePress 使用 Shiki 使用彩色文本突出显示 Markdown 代码块中的语言语法。Shiki 支持多种编程语言。您需要做的就是将有效的语言别名附加到代码块的开头反引号中：

- 输入

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```

````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

- 输出

```js
export default {
  name: "MyComponent",
  // ...
};
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

### 代码块中的行突出显示

- 输入

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

- 输出

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```
除了单行之外，您还可以指定多个单行、范围或两者：

* 行范围：例如{5-8}, {3-10},{10-17}

* 多条单线：例如{4,7,9}

* 行范围和单行：例如{4,7-13,16,23-27,40}
```

- 输入

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

- 输出

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

或者，可以使用// [!code hl]注释直接在行中突出显示。

- 输入

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````

- 输出

```js
export default {
  data() {
    return {
      msg: "Highlighted!", // [!code  hl]
    };
  },
};
```

### 关注代码块

```
// [!code  focus]在一行上添加注释会使其集中并模糊代码的其他部分。

此外，您可以使用 定义多条要聚焦的行 //[!code focus:<lines>]。
```

- 输入
  注意后面只需要一个空格!code，这里有两个空格是为了防止处理。

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' //  [!code  focus]
    }
  }
}
```
````

- 输出

```js
export default {
  data() {
    return {
      msg: "Focused!", //[!code focus]
    };
  },
};
```

### 代码块中的彩色差异

在一行上添加// [!code --]或注释将创建该行的差异，同时保留代码块的颜色。// [!code ++]

- 输入

注意后面只需要一个空格!code，这里有两个空格是为了防止处理。

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

- 输出

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### 代码块中的错误和警告

在一行上添加// [!code warning]或注释会相应地为其着色。// [!code error]

- 输入

注意后面只需要一个空格!code，这里有两个空格是为了防止处理。

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

- 输出

```js
export default {
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

### 代码组

您可以像这样对多个代码块进行分组：

- 输入

````
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

- 输出

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::
