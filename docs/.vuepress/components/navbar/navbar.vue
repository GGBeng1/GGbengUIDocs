<template>
  <div style='width:665px'>
    <g-navbar title="首页文字首页文字首页文字首页文字" bgcolor='#fff' color="#333" left-text="返回" left-icon="g__icon--left" right-text="设置" @left-action="clickLeft" @right-action="clickRight"></g-navbar>
    <br>
    <g-navbar bgcolor='#fff' color="#333" left-text="" left-icon="g__icon--left" right-icon="g__icon--edit" @left-action="clickLeft" @right-action="clickRight"><img src="../../public/gg.png"></g-navbar>
    <g-navbar bgcolor='#fff' color="#333" left-text="" left-icon="g__icon--left" right-icon="g__icon--edit" @left-action="clickLeft" @right-action="clickRight" ><div><span slot="icon" class="g__icon--loading"></span>这里是HTML</div></g-navbar>
  </div>
</template>   
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    clickLeft() {
      this.$modal.alert({
        title: '提示',
        content: '点击的是左边',
        confirmText: '关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: true
      })
    },
    clickRight() {
      this.$modal.alert({
        title: '提示',
        content: '点击的是右边',
        confirmText: '关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: true
      })
    }
  }
}
</script>
<style scoped>
.g__navbar .g__navbar--title img {
    max-height: 25rem;
    height: 9.5rem;
    vertical-align: middle;
    position: relative;
    top: -47px;
}
</style>

