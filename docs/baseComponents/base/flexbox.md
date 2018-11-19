# Flexbox
---

<Common-Democode title="基本用法" description="">
  <ClientOnly>
    <flexbox-flexbox></flexbox-flexbox>
  </ClientOnly>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-flexbox>
          <div>普通div</div>
          <g-flexbox-item style='text-align: center;'>默认的水平flex div</g-flexbox-item>
          <div>普通div</div>
        </g-flexbox>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

<div style='padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;'>
      <p style='font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;'>
      默认felxbox原型为固比固flex布局，g-flexbox-item为自适应，两边固定
      </p>
  </div>

<Common-Democode title="垂直布局" description="">
  <ClientOnly>
    <flexbox-flexbox></flexbox-flexbox>
  </ClientOnly>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-flexbox direction="vertical">
          <div>普通div</div>
          <g-flexbox-item style='margin: 10px auto'>direction="vertical" 的垂直flex div</g-flexbox-item>
          <div>普通div</div>
        </g-flexbox>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 设置垂直布局 | String  |  horizontal，vertical | horizontal   |
