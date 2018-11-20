# Switch
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
  <switch-switch></switch-switch>
  </ClientOnly>

  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-switch value="switch" @input="switchAction"></g-switch>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          switch: true
        }
      },
      methods: {
        switchAction () {
          console.log(this.switch)
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 绑定值  | String  | — | —  |

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| input    | 输入方法   | Function  |    — | —   |