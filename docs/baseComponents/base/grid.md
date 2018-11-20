# Grid
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
  <grid-grid></grid-grid>
  </ClientOnly>
  
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-grids row='6'>
          <g-grid herf='https://github.com/GGBeng1/GGbengUI'>
              <span slot="icon" class="g__icon--phone"></span>
              <span slot="text">手机</span>
          </g-grid>
          <g-grid>
              <span slot="icon" class="g__icon--lbsfill"></span>
              <span slot="text">位置</span>
          </g-grid>
          <g-grid>
              <span slot="icon" class="g__icon--lock"></span>
              <span slot="text">密码</span>
          </g-grid>
          <g-grid>
              <span slot="icon" class="g__icon--qrcode"></span>
              <span slot="text">扫码</span>
          </g-grid>
          <g-grid>
              <span slot="icon" class="g__icon--date"></span>
              <span slot="text">时间</span>
          </g-grid>
          <g-grid>
              <span slot="icon" class="g__icon--contact"></span>
              <span slot="text">电话</span>
          </g-grid>
        </g-grids>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

### grids属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| row    | 每行显示列数   | String  |  2,3,4,5,6 |  4   |

### grid属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href     | 设置链接   | String  |  — | javascript:;   |
#### grid应配合grids一起使用