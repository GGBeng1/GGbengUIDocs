<template>
  <div class="demo-button">
    <div>
      <g-button icon='g__icon--user'>默认按钮</g-button>
      <g-button type="primary" icon='g__icon--link'>主要按钮</g-button>
      <g-button type="success" icon='g__icon--phone'>成功按钮</g-button>
      <g-button type="warning" icon='g__icon--date'>警告按钮</g-button>
      <g-button type="error" icon='g__icon--nochecked'>危险按钮</g-button>
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
.demo-button{
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

