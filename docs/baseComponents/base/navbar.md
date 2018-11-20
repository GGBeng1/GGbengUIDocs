# Navbar
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
  <navbar-navbar></navbar-navbar>
  </ClientOnly>

  <highlight-code slot="codeText" lang="vue">
    <template>
      <div style='width:400px'>
        <g-navbar 
        title="首页文字首页文字首页文字首页文字" 
        bgcolor='#fff' 
        color="#333" 
        left-text="返回" 
        left-icon="g__icon--left" 
        right-text="设置" 
        @left-action="clickLeft" 
        @right-action="clickRight">
        </g-navbar>
        <br>
        <g-navbar 
        bgcolor='#fff' 
        color="#333" 
        left-text="" 
        left-icon="g__icon--left" 
        right-icon="g__icon--edit" 
        @left-action="clickLeft" 
        @right-action="clickRight">
        <img src="">
        </g-navbar>
        <g-navbar 
        bgcolor='#fff' 
        color="#333" 
        left-text="" 
        left-icon="g__icon--left"
         right-icon="g__icon--edit" 
         @left-action="clickLeft" 
         @right-action="clickRight" >
          <div>
            <span slot="icon" class="g__icon--loading">
            </span>这里是HTML
          </div>
         </g-navbar>
      </div>
    </template>   
    <script>
    export default {
      data() {
        return {

        }
      },
      methods: {
        clickLeft() {
          this.$modal.alert({
            title: '提示',
            content: '点击的是左边',
            confirmText: '关闭',
            color: '#19be6b',
            autoClose: true,
            maskClosable: true
          })
        },
        clickRight() {
          this.$modal.alert({
            title: '提示',
            content: '点击的是右边',
            confirmText: '关闭',
            color: '#19be6b',
            autoClose: true,
            maskClosable: true
          })
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 设置导航标题   | String  |  — | —  |
| img-src    | 设置导航标题为图片，有title的时候设置无效   | String  |  — |  —   |
| bgcolor     | 设置导航背景颜色   | String  |  — | —   |
| color    | 设置文字颜色   | String  |  — |  —   |
| left-text    | 设置左文字   | String  |  — |  —   |
| left-icon    | 设置左图标  | String  |  — |  —   |
| right-text    | 设置右文字   | String  |  — |  —   |
| right-icon    | 设置右图标   | String  |  — |  —   |


### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- | 
| left-action     | 左点击方法   | Function  |    — | —   |
| right-action     | 右点击方法   | Function  |    — | —   |