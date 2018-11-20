# Tabbar
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
  <tabbar-tabbar></tabbar-tabbar>
  </ClientOnly>

  <highlight-code slot="codeText" lang="vue">
    <template>
      <g-tabbar v-model="active">
        <g-tabbar-item icon="g__icon--home" type="link" href="" dot>首页</g-tabbar-item>
        <g-tabbar-item icon="g__icon--mall" :href="hrefObj" badge="8" @click="routerAction">
          <span slot="badge">8</span>商城
        </g-tabbar-item>
        <g-tabbar-item icon="g__icon--add" href="add" class="add"></g-tabbar-item>
        <g-tabbar-item href="###" img-src="../../public/gg.png">自定义图</g-tabbar-item>
        <g-tabbar-item icon="g__icon--my" href="my" badge="11">我的</g-tabbar-item>
      </g-tabbar>
    </template>
    <script>
    export default {
      data() {
        return {
          hrefObj: { path: '/mall', name: 'mall', params: { userId: 123 } },
          active: '/mall'
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  |  link为单纯a链接，router基于vue-router的链接 | router  |
| href     | 设置链接   | String,Object  |  — | —   |
| icon    | 设置图标(样式)   | String  |  — |  —   |
| img-src    | 自定义图标地址   | String  |  — |  —   |
| bagde    | 设置角标   | String  |  — |  —   |
| active    | 设置选中状态   | Boolean  |  — |  false   |
| img-src    | img-src图标   | String  |  — |  —   |

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- | 
| click     | 点击方法   | Function  |    — | —   |