# Radio
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
    <radio-radio></radio-radio>
  </ClientOnly>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <g-radio-group v-model="radio" color="#4cd864">
        <g-radio value="北京"></g-radio>
        <g-radio value="上海"></g-radio>
        <g-radio value="广东" disabled>广东--disabled</g-radio>
        <g-radio value="香港">香港</g-radio>
      </g-radio-group>
    </template>
    <script>
    export default {
      data() {
        radio: "北京"
      }
    }
    </script>
  </highlight-code>
</Common-Democode>


<Common-Democode title="基本用法" description="">
 <ClientOnly>
    <radio-radio></radio-radio>
  </ClientOnly>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <g-radio-group v-model="radio" color="#ed3f14" hor>
        <g-radio value="北京"></g-radio>
        <g-radio value="上海"></g-radio>
        <g-radio value="广东" disabled>广东--disabled</g-radio>
        <g-radio value="香港">香港</g-radio>
      </g-radio-group>
    </template>
    <script>
    export default {
      data() {
        radio: "北京"
      }
    }
    </script>
  </highlight-code>
</Common-Democode>


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color   | 设置颜色  | String  | — | —  |
| disabled   | 禁止选中  | Boolean  | — | false  |
| hor   | 水平显示  | Boolean  | — | false  |