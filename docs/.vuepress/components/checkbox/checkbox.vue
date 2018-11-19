<template>
  <div style='width: 200px'>
     <g-checkbox-group v-model="checkbox" color="#4cd864">
        <g-checkbox value="1" >北京</g-checkbox>
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
<style scoped>
.g__checkbox--group .g__checkbox:not(:last-child):after {
  width: 100px;
}
</style>


