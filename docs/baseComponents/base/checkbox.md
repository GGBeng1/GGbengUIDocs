# Checkbox
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
    <checkbox-checkbox></checkbox-checkbox>
  </ClientOnly>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-checkbox-group v-model="checkbox" color="#4cd864">
            <g-checkbox value="1">北京</g-checkbox>
            <g-checkbox value="2">上海</g-checkbox>
            <g-checkbox value="3" disabled>广东</g-checkbox>
            <g-checkbox value="4">香港</g-checkbox>
          </g-checkbox-group>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          checkbox: ['1', '4']
        }
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