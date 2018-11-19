# Button
---

<Common-Democode title="基本用法" description="">
  <button-button></button-button>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
          <g-button>默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="error">危险按钮</g-button>
          <g-button type="error">危险按钮</g-button>
          <g-button type="text">文字按钮</g-button>
          <g-button round type='primary'>椭圆按钮</g-button>
          <g-button disabled>禁用按钮</g-button>
          <g-button noRadius type='primary'>尖角按钮</g-button>
          <g-button plain type='primary'>朴素按钮</g-button>
          <g-button long type='warning'>长按钮</g-button>
        </div>
    </template>
  </highlight-code>
</Common-Democode>

<Common-Democode title="icon按钮" description="">
  <button-buttonIcon></button-buttonIcon>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
          <g-button icon='g__icon--user'>默认按钮</g-button>
          <g-button type="primary" icon='g__icon--link'>主要按钮</g-button>
          <g-button type="success" icon='g__icon--phone'>成功按钮</g-button>
          <g-button type="warning" icon='g__icon--date'>警告按钮</g-button>
          <g-button type="error" icon='g__icon--nochecked'>危险按钮</g-button>
        </div>
    </template>
  </highlight-code>
</Common-Democode>

<Common-Democode title="Loading按钮" description="">
  <button-buttonLoading></button-buttonLoading>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-button type="success" loading>成功按钮</g-button>
      </div>
    </template> 
  </highlight-code>
</Common-Democode>

<Common-Democode title="按钮组合" description="">
  <button-buttonGroup></button-buttonGroup>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-button-group>
          <g-button type="warning">警告</g-button>
          <g-button type="primary">主要</g-button>
          <g-button type="success">成功</g-button>
        </g-button-group>
      </div>
    </template> 
  </highlight-code>
</Common-Democode>



### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| long     | 长按钮   | Boolean  |    — | false   |
| type     | 类型   | string    |   primary,success,warning,error |     —    |
| plain     | 是否简约按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| round     | 圆角   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    | 
| no-radius     | 无边框   | string    |   自定义 |     —    | 
| icon     | 图标   | string    |   自带icon |     false    | 