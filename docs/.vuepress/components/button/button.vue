<template>
  <div class="demo-button">
    <div>
      <g-button>默认按钮</g-button>
      <g-button type="primary">主要按钮</g-button>
      <g-button type="success">成功按钮</g-button>
      <g-button type="warning">警告按钮</g-button>
      <g-button type="error">危险按钮</g-button>
      <g-button type="text">文字按钮</g-button>
      <div class="demo-button">
        <g-button round type='primary'>椭圆按钮</g-button>
        <g-button disabled>禁用按钮</g-button>
        <g-button noRadius type='primary'>尖角按钮</g-button>
        <g-button plain type='primary'>朴素按钮</g-button>
      </div>
      <div class="demo-button">
        <g-button long type='warning'>长按钮</g-button>
      </div>
    </div>
  </div>
</template>

<script>
// import "ggbeng-ui/package/gui.min.css";
// import gButton from 'ggbeng-ui/package/comps/components/button';
// export default {
//   components: {
//     gButton
//   }
// }
</script>

<style lang="less" scoped>
.demo-button {
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
  .g__btn {
    margin-top: 5px;
  }
}
</style>

