# Tag
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
  <tag-tag></tag-tag>
  </ClientOnly>

  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-tag>普通</g-tag>
        <g-tag type="primary">primary</g-tag>
        <g-tag type="success">success</g-tag>
        <g-tag type="warning" round>warning</g-tag>
        <g-tag type="error" round>error</g-tag>
        <g-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</g-tag>
        <g-tag type="success" v-if="tag1" closable @close="tag1=false">success</g-tag>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| round     | 圆角   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    |

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- | 
| closable     | 可关闭   | Boolean  |    — | false   |