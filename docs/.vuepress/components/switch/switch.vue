<template>
  <div>
    <g-switch value="switch" @input="switchAction"></g-switch>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switch: true
    }
  },
  methods: {
    switchAction () {
      console.log(this.switch)
    }
  }
}
</script>

