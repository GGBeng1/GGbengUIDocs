<template>
  <div>
    <g-tag>普通</g-tag>
    <g-tag type="primary">primary</g-tag>
    <g-tag type="success">success</g-tag>
    <g-tag type="warning" round>warning</g-tag>
    <g-tag type="error" round>error</g-tag>
    <g-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</g-tag>
    <g-tag type="success" v-if="tag1" closable @close="tag1=false">success</g-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tag1: true
    }
  }
}
</script>
<style scoped>
.g__tag{
  padding-bottom: 5px;
  margin-top: 5px;
}
</style>

