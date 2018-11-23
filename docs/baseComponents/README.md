# 安装
---
基于vue2.o开发的UI库
基于vue 2 +，目前组件和文档在不断完善中。

## 特性

- 基于 [Vue](http://vuejs.org/)`>=v2.1.4` 开发的可复用 UI 组件，并且可随产品需要扩展
- 使用Vue官方的工作流，支持 ES6

## 浏览器支持

- 适用于 移动 和 部分PC 端

## CDN
::: tip 提示
目前可以通过 unpkg.com/ggbeng-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
:::
>
<div style='padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;'>
    <p style='font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;'>
    我们建议使用 CDN 引入 GGbengUI 的用户在链接地址上锁定版本，以免将来 GGbengUI 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。
    </p>
</div>

``` bash
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/ggbeng-ui/package/gui.min.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/ggbeng-ui/package/gui.min.js"></script>

```
## Hello world
::: tip 提示
通过 CDN 的方式我们可以很容易地使用 GGbengUI 写出一个 Hello world 页面
:::

``` bash
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/ggbeng-ui@1.1.0/package/gui.min.css">
</head>
<body>
  <div id="app">
    <g-button @click='click' type='primary'>Button</g-button>
  </div>
</body>
  <!-- import Vue before GGbengUI -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/ggbeng-ui@1.1.0/package/gui.min.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        message: "Hello World"
      },
      methods: {
        click() {
          this.$modal.alert({
            title: "提示",
            content: this.message,
            confirmText: '关闭',
            color: '#19be6b',
            autoClose: true,
            maskClosable: true
          })
        }
      }
    })
  </script>
</html>
```

## npm安装 
::: tip 提示
全局引入 -- 在 webpack 入口文件 main.js 中如下配置：
:::

``` bash
# 安装
cnpm/npm install ggbeng-ui --save  

# 引入css
import 'ggbeng-ui/package/gui.min.css'  

# 注入到vue
Vue.use(GGbeng)
```
::: tip 提示
按需引入 -- 在 入口文件 main.js 或 组件内 中如下配置：
:::

``` bash

# 一般组件
import gButton from 'ggbeng-ui/package/comps/components/button'
...

components: {
    gButton
}
``` 

## 组件列表
- button
- modal
- swich
- grid
- icon
- flexbox
- radio
- checkbox
- select
- tag
- search
- navbar
- tabbar



