# Select
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
    <select-select></select-select>
  </ClientOnly>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <g-select :data="selectList" @change="selectAction" v-model="curSelected"></g-select>
      <br/>>
      <g-select right :data="selectList" v-model="curSelected"></g-select>
    </template>
    <script>
    export default {
      data() {
        return {
          selectList: [
            { name: '请选择出行方式', value: 0 },
            { name: '巴士', value: 1 },
            { name: '快车', value: 2 },
            { name: '专车', value: 3 },
            { name: '顺风车', value: 4 },
            { name: '出租车', value: 5 },
            { name: '代驾', value: 6 }
          ],
          curSelected: '3',
        }
      },
      methods: {
        selectAction() {
          console.log(this.curSelected)
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data   | 传入的option数组  | Array  | — | —  |
| right    | 设置居右显示   | Boolean  |  — | false   |
| disabled  | 设置不可选   | Boolean  |  — | false   |

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| change    | select改变时的方法   | Function  |    — | —   |