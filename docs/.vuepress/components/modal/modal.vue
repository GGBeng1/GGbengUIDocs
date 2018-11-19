<template>
  <div>
    <div class="box">
      <g-button @click="showGolbalModel" type='primary'>全局alert</g-button>
      <g-button @click="showGolbalModel2" type='success'>全局confirm</g-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showGolbalModel () {
      this.$modal.alert({
        title: '这里可以自定义',
        content: '开启autoClose自动3秒关闭',
        confirmText: '关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: false
      })
    },
    showGolbalModel2 () {
      this.$modal.confirm({
        title: '提示',
        content: '提示信息',
        confirmText: '确认',
        cancelText: '关闭',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            confirmText: '确认',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .box {
    margin: 0 auto;
    margin-top: 20px;
  }
</style>
