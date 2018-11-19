<template>
  <div>
    <g-radio-group v-model="radio" color="#ed3f14" hor>
      <g-radio value="北京"></g-radio>
      <g-radio value="上海"></g-radio>
      <g-radio value="广东" disabled>广东--disabled</g-radio>
      <g-radio value="香港">香港</g-radio>
    </g-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "北京"
    }
  }
}
</script>
